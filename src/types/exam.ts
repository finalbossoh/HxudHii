export interface TokenAnnotation {
  text: string;
  role?: string; // e.g., 'S', 'V', 'O', 'C', 'S1', 'V1', 'O1', 'C1', 'S2', 'V2', 'O2', 'C2', 'V(조동사)'
  clauseTag?: string; // e.g., '<시간 부사절>', '[O(명사절)]', '<관계사절>', '[분사구문]', '<진주어(to부정사구)>', '[부사구]'
  gloss?: string; // Korean literal gloss, e.g. '유전', '보수적인', '유기체'
  badgeNum?: number; // ①, ②, ③ mapping to grammar explanation
  subscript?: string; // e.g. "S(단수)", "V(복수)"
  highlight?: 'red' | 'blue' | 'green' | 'amber' | 'purple';
  note?: string; // additional tip, e.g. "↳organisms"
}

export interface GrammarPoint {
  pointNum: number;
  title: string;
  explanation: string;
  structure?: string; // e.g., "→= ~, and it produces..."
}

export interface SentenceAnalysis {
  num: number;
  badge?: '❤ 주제문' | '서술형 대비' | '빈칸 추론' | '문장 삽입' | '어휘' | string | null;
  originalText: string;
  tokens: TokenAnnotation[];
  translation: string;
  grammarPoints: GrammarPoint[];
  deepMeaning?: string; // "내용 풀이"
}

export interface CheckQuiz {
  checkNum: number;
  title: string; // e.g. "what vs. that / which vs. it / 수일치"
  question: string; // e.g. "Darwin understood (what / that) since..."
  answer: string; // e.g. "that"
  explanation: string;
  userAnswer?: string; // for interactive quiz mode
  isCorrect?: boolean;
}

export interface GrammarPlusCard {
  cardNum: number;
  title: string; // e.g., "가주어-진주어", "부대상황을 나타내는 with 분사구문"
  content: string;
  formulaTable?: Array<{ col1: string; col2: string }>;
  examples: Array<{ en: string; ko: string; note?: string }>;
}

export interface VocabEntry {
  word: string;
  pos: string; // e.g. "v.", "n.", "a.", "adv."
  meaning: string;
  synonyms?: string;
  antonyms?: string;
  collocations?: string;
}

export interface WrongChoiceAnalysis {
  choiceNum: string;
  title: string;
  explanation: string;
  rate?: string; // e.g. "28.3%"
}

export interface OriginalQuestionData {
  questionText: string;
  fullPassageWithUnderlines: string;
  choices?: string[];
  answer: string;
  explanation: string;
  wrongAnswerAnalysis?: WrongChoiceAnalysis[];
}

export interface ExamAnalysisData {
  id?: string;
  metadata: {
    titleTag: string; // e.g. "2026년 3월 서울특별시 교육청 학력평가"
    questionNumber: string; // "29번"
    questionType: string; // "어법"
    targetGrade: string; // "고3"
    pageNumber: number;
    source?: string;
  };
  titleEn: string;
  titleKo: string;
  summary: string;
  flowCheck: Array<{
    title: string; // e.g. "도입 (1~2)", "전개 (3~4)", "반전 (5~6)", "결말 (7~8)"
    desc: string;
  }>;
  flowDiagram: {
    topBox: string;
    arrowText?: string;
    bottomBox: string;
  };
  sentences: SentenceAnalysis[];
  sidebar: {
    checkQuizzes: CheckQuiz[];
    grammarPlusCards: GrammarPlusCard[];
    vocabEntries: VocabEntry[];
  };
  originalQuestion?: OriginalQuestionData;
  vocabularyList: Array<{ word: string; meaning: string }>;
  predictedQuestionTypes: string[];
}
