import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Initialize Google Gemini AI with User-Agent header
const apiKey = process.env.GEMINI_API_KEY || '';
let ai: GoogleGenAI | null = null;
if (apiKey) {
  ai = new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

// System prompt for Exam Worksheet Analysis (EXAM4YOU / Asak English style)
const EXAM_ANALYSIS_SYSTEM_PROMPT = `
당신은 대한민국 최고 수준의 고등학교 수능/학력평가 영어 전문 수능 강사이자 영어 교육 출판사(EXAM4YOU, 아삭영어 스타일) 수석 교재 집필진입니다.
사용자가 제공하는 영어 지문 및 문제 정보를 바탕으로, 실제 학원 및 학교에서 배포되는 최고 품질의 [지문분석지] 데이터를 정확한 JSON 형식으로 생성해야 합니다.

반드시 다음 양식과 기준을 철저하게 준수하여 JSON을 작성하세요:

1. metadata:
   - titleTag: 예 "2026년 3월 서울특별시 교육청 학력평가"
   - questionNumber: "29번", "30번" 등
   - questionType: "어법", "어휘", "빈칸추론", "주장", "제목", "문장 삽입", "순서배열" 등
   - targetGrade: "고1", "고2", "고3" 중 하나
   - pageNumber: 페이지 번호 (예: 1)

2. titleEn: 지문의 핵심을 관통하는 간결하고 세련된 영문 학술/에세이형 제목
3. titleKo: 영문 제목의 자연스러운 국문 번역 (괄호 포함)
4. summary: 지문 전체의 논리적 핵심을 요약한 한 줄 설명 ("내용 ...")
5. flowCheck: 글의 구조를 나타내는 3~4단계 흐름도 (도입, 전개, 반전/전개2, 결말/마무리)
   각 단계는 title(예: "도입 (1~2)"), desc(2~4줄의 요약 설명) 포함
6. flowDiagram: 상단 우측 인포그래픽용 요약 도식
   - topBox: 상위 전제나 핵심 개념
   - arrowText: 연결 관계 (화살표 텍스트 또는 "↓")
   - bottomBox: 귀결되는 결론/적용점

7. sentences: 지문의 모든 문장을 순서대로 분석 (1번부터 끝까지)
   각 문장 객체:
   - num: 문장 번호 (1, 2, 3...)
   - badge: 문장의 중요도 배지 (선택적: "❤ 주제문", "서술형 대비", "빈칸 추론", "문장 삽입", "어휘" 또는 null)
   - originalText: 전체 영어 문장
   - parsedVisualHtml: 문장 내 핵심 요소에 구문 분석 라벨(S, V, O, C, <부사절>, [명사절], [동명사구], 어휘 주석 등)이 결합된 토큰 배열 또는 어절 분석 데이터.
     * tokens: 배열 형태 [
         {
           text: "단어 또는 어구",
           role?: "S" | "V" | "O" | "C" | "S1" | "V1" | "O1" | "C1" | "S2" | "V2" | "O2" | "C2" | "V(조동사)",
           clauseTag?: "<시간 부사절>" | "[명사절]" | "<관계사절>" | "[과거분사구]" | "<분사구문>" | "[C(to부정사구)]" | "[부사구]" 등,
           gloss?: "한국어 직독직해 뜻 ('유전', '보수적인' 등)",
           badgeNum?: 1 | 2 | 3 (문법 설명 번호와 매핑),
           subscript?: "S(복수)", "V(단수)" 등,
           highlight?: "red" | "blue" | "green"
         }
       ]
   - translation: 매끄럽고 정확한 고품질 우리말 완역
   - grammarPoints: 해당 문장에서 내신/수능에 출제되는 문법 분석 포인트 목록:
     * pointNum: 1, 2, 3...
     * title: 문법 항목명 (예: "명사절 접속사 that", "가주어-진주어 구문", "부대상황 with 분사구문")
     * explanation: 상세한 문법 설명 및 시험 출제 포인트
     * structure: 구문 공식 또는 치환 표현 (예: "→= ~, and it produces...")
   - deepMeaning: (선택적) 문장의 속뜻이나 행간의 의미를 짚어주는 "내용 풀이" 박스 내용

8. sidebar: 사이드바 학습 카드
   - checkQuizzes: 어법/어휘 2지선다 및 형태변환 문제 (3~5개)
     * checkNum: 1, 2, 3...
     * title: "what vs. that / 수일치 / 능동 vs. 수동" 등
     * question: 괄호 선택형 또는 어형변환 문장 (예: "Darwin understood (what / that) since...")
     * answer: 정답 (예: "that")
     * explanation: 정답 해설
   - grammarPlusCards: 핵심 문법 심층 정리 (1~2개)
     * cardNum: 1, 2...
     * title: "가주어-진주어", "with 분사구문", "부분부정" 등
     * content: 문법 개념 설명
     * formulaTable?: [ { col1: "...", col2: "..." } ]
     * examples: [ { en: "...", ko: "..." } ]
   - vocabEntries: 주요 단어 사전식 정리 (3~6개)
     * word: 단어
     * pos: 품사 ("v.", "n.", "a.", "adv.")
     * meaning: 주요 의미 및 다의어
     * synonyms?: 유의어/반의어 (↔ ..., = ...)

9. originalQuestion:
   - questionText: 원본 문제 지시문 (예: "29. 다음 글의 밑줄 친 부분 중, 어법상 틀린 것은?")
   - fullPassageWithUnderlines: 문제 형태의 지문 (밑줄이나 빈칸 ①, ②, ③, ④, ⑤ 포함)
   - choices?: 5지선다 보기 (있는 경우)
   - answer: "④" 등 정답
   - explanation: 정답 및 오답 해설
   - wrongAnswerAnalysis?: [ { choiceNum: "①", title: "producing (분사구문)", explanation: "...", rate: "28.3%" } ]

10. vocabularyList: 지문 내 필수 어휘 목록 (20~30개 단어, word와 meaning)
11. predictedQuestionTypes: 출제 가능한 내신/수능 변형 유형 (예: ["어법", "어휘", "주제·제목·요지·주장", "서술형", "빈칸", "문장 넣기", "순서"] 등)
`;

// API endpoint for analyzing passage
app.post('/api/analyze-passage', async (req, res) => {
  try {
    if (!ai) {
      return res.status(500).json({
        error: 'GEMINI_API_KEY가 설정되지 않았습니다. .env 파일이나 AI Studio 비밀 환경변수를 확인해주세요.',
      });
    }

    const { text, info, options } = req.body;

    if (!text || typeof text !== 'string' || text.trim().length === 0) {
      return res.status(400).json({ error: '분석할 지문 텍스트를 입력해주세요.' });
    }

    const prompt = `
다음 모의고사/수능 영어 문제 및 지문을 분석하여 최고 수준의 심층 지문 분석지 데이터를 생성해주세요.

[입력 정보]:
- 지문/문제 텍스트:
"""
${text}
"""

${info ? `[추가 메타데이터]: ${JSON.stringify(info)}` : ''}
${options ? `[옵션]: ${JSON.stringify(options)}` : ''}

반드시 시스템 프롬프트에 정의된 완전한 구조의 JSON 형식으로만 응답해주세요. 마크다운 따옴표 (\`\`\`json) 없이 순수 JSON만 반환해야 합니다.
모든 토큰과 문법 설명, 해석, 어휘, 퀴즈(CHECK), 문법플러스(Grammar+) 카드가 충실하고 전문적이어야 합니다.
`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        systemInstruction: EXAM_ANALYSIS_SYSTEM_PROMPT,
        temperature: 0.2,
        responseMimeType: 'application/json',
      },
    });

    const responseText = response.text ? response.text.trim() : '';
    if (!responseText) {
      throw new Error('Gemini API로부터 응답을 받지 못했습니다.');
    }

    let parsedData;
    try {
      parsedData = JSON.parse(responseText);
    } catch {
      // Try stripping markdown blocks if present
      const cleanJson = responseText.replace(/^```json/m, '').replace(/^```/m, '').replace(/```$/m, '').trim();
      parsedData = JSON.parse(cleanJson);
    }

    return res.json({ success: true, data: parsedData });
  } catch (error: any) {
    console.error('Analysis error:', error);
    return res.status(500).json({
      error: error.message || '지문 분석 중 오류가 발생했습니다.',
    });
  }
});

// Setup Vite or Static File Serving
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, () => {
    console.log(`Exam Analyzer Pro Server running on port ${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
});
