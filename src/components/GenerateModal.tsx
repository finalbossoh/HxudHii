import React, { useState } from 'react';
import { Sparkles, Upload, FileText, Check, AlertCircle, X, Loader2 } from 'lucide-react';
import { ExamAnalysisData } from '../types/exam';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onGenerated: (data: ExamAnalysisData) => void;
}

export const GenerateModal: React.FC<Props> = ({ isOpen, onClose, onGenerated }) => {
  const [inputText, setInputText] = useState('');
  const [examTitle, setExamTitle] = useState('2026년 3월 전국연합학력평가');
  const [grade, setGrade] = useState<'고1' | '고2' | '고3'>('고3');
  const [questionNum, setQuestionNum] = useState('31번');
  const [questionType, setQuestionType] = useState('빈칸추론');
  const [isLoading, setIsLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const samplePassages = [
    {
      label: '2026년 3월 고3 31번 (빈칸추론 - 예술과 자본주의)',
      grade: '고3' as const,
      num: '31번',
      type: '빈칸추론',
      title: '2026년 3월 서울특별시 교육청 학력평가',
      text: `"Art without commerce is a hobby." These words, spoken with much authority to senior fine arts majors, are the kind that those who create art are unable to ignore. We worry about this idea that if we are not engaged in commerce, then we are not professional; and if we are not professional, can we even call ourselves artists? Art of any form, by its very nature, cannot or should not be quantified, and yet writers measure pages and words; visual artists measure canvases completed all in an effort to appear "productive," to perhaps justify this urge to create. The notion of creating for art's sake is then seen as hopelessly romantic and nearly indefensible. Of course one can engage in art, but it better be for money, for that is the only marker of success. But was that professor's declaration merely an old talker with a title mindlessly repeating the cultural norms and expectations that had, in fact, labeled him as "successful"? In Western culture, it is almost impossible to separate professional from commercial, and so the artist is legitimized by their ability to earn money. Professional art, then, is inherently capitalist.`,
    },
    {
      label: '2026년 3월 고1 21번 (함축의미 - 미래 세대를 위한 책임)',
      grade: '고1' as const,
      num: '21번',
      type: '함축의미',
      title: '2026년 3월 서울특별시 교육청 학력평가',
      text: `We are now at a point of unprecedented genetic, cultural, and environmental power as a species, and we are linked to nearly every other person on Earth. We are embodied individuals trapped within limited time, but we are also networked data streams, memories, and influencers, and part of a grander humanity. Our decisions today have far-reaching impacts that place a responsibility on us to become good ancestors, to take the long view and time travel forward to imagine the well-being of billions of people whose lives will be lived in the world we are currently making. Centuries ago, leaders of the native North American Iroquois people created "seven generation stewardship," instructing people to consider the impact of every decision on their children, seven generations into the future. In the precious few decades that Earth is ours, while we enjoy the gardens planted by our ancestors, we must not steal the shade from our descendants.`,
    },
    {
      label: '2024년 6월 고2 33번 (빈칸추론 - 빛의 속도와 과거의 우주)',
      grade: '고2' as const,
      num: '33번',
      type: '빈칸추론',
      title: '2024년 6월 부산광역시 교육청 학력평가',
      text: `On our little world, light travels, for all practical purposes, instantaneously. If a lightbulb is glowing, then of course it’s physically where we see it, shining away. We reach out our hand and touch it: It’s there all right, and unpleasantly hot. If the filament fails, then the light goes out. We don’t see it in the same place, glowing, illuminating the room years after the bulb breaks and it’s removed from its socket. The very notion seems nonsensical. But if we’re far enough away, an entire sun can go out and we’ll continue to see it shining brightly; we won’t learn of its death, it may be, for ages to come — in fact, for how long it takes light, which travels fast but not infinitely fast, to cross the intervening vastness. The immense distances to the stars and the galaxies mean that we see everything in space in the past.`,
    },
  ];

  if (!isOpen) return null;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.name.endsWith('.txt')) {
      const reader = new FileReader();
      reader.onload = (evt) => {
        const content = evt.target?.result as string;
        if (content) setInputText(content);
      };
      reader.readAsText(file);
    } else {
      // PDF or other files
      alert('텍스트(.txt) 파일을 선택하시거나 지문 본문을 직접 복사해 붙여넣어 주세요.');
    }
  };

  const loadSample = (sample: typeof samplePassages[0]) => {
    setInputText(sample.text);
    setExamTitle(sample.title);
    setGrade(sample.grade);
    setQuestionNum(sample.num);
    setQuestionType(sample.type);
  };

  const handleGenerate = async () => {
    if (!inputText.trim()) {
      setErrorMsg('분석할 영어 지문을 입력해 주세요.');
      return;
    }

    setErrorMsg(null);
    setIsLoading(true);
    setLoadingStep(1);

    const stepInterval = setInterval(() => {
      setLoadingStep((prev) => (prev < 4 ? prev + 1 : prev));
    }, 2000);

    try {
      const res = await fetch('/api/analyze-passage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: inputText,
          info: {
            titleTag: examTitle,
            questionNumber: questionNum,
            questionType,
            targetGrade: grade,
          },
          options: {
            detailedSyntax: true,
            includeQuiz: true,
            includeGrammarCards: true,
          },
        }),
      });

      clearInterval(stepInterval);

      const json = await res.json();
      if (!res.ok) {
        throw new Error(json.error || '지문 분석 중 서버 오류가 발생했습니다.');
      }

      if (json.data) {
        onGenerated(json.data);
        onClose();
      } else {
        throw new Error('분석 결과를 가져오지 못했습니다.');
      }
    } catch (err: any) {
      clearInterval(stepInterval);
      setErrorMsg(err.message || '분석 생성 중 오류가 발생했습니다.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-neutral-900/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-xl shadow-2xl max-w-3xl w-full p-6 relative border border-neutral-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-700 p-1"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2 mb-2">
          <div className="w-9 h-9 rounded-lg bg-teal-600 text-white flex items-center justify-center shadow-xs">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-neutral-900">
              새 지문 분석지 자동 생성 (AI 파워)
            </h2>
            <p className="text-xs text-neutral-500">
              수능·모의고사 영어 지문을 넣으면 구문분석, 어휘, 문법포인트, CHECK 퀴즈를 갖춘 교재용 분석지를 즉시 생성합니다.
            </p>
          </div>
        </div>

        {/* Quick Sample Presets */}
        <div className="my-3 bg-teal-50/50 p-2.5 rounded-lg border border-teal-100">
          <span className="text-[11px] font-bold text-teal-800 block mb-1.5">
            💡 기출 지문 예시 즉시 채우기 (클릭하여 테스트):
          </span>
          <div className="flex flex-wrap gap-1.5">
            {samplePassages.map((s, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => loadSample(s)}
                className="text-[11px] bg-white border border-teal-200 text-teal-800 hover:bg-teal-600 hover:text-white px-2 py-1 rounded transition-colors"
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        {/* Form Inputs */}
        <div className="space-y-3">
          {/* Metadata Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
            <div>
              <label className="block text-neutral-600 font-semibold mb-1">학년</label>
              <select
                value={grade}
                onChange={(e) => setGrade(e.target.value as any)}
                className="w-full border border-neutral-300 rounded px-2.5 py-1.5 focus:border-teal-500 focus:outline-hidden"
              >
                <option value="고1">고1</option>
                <option value="고2">고2</option>
                <option value="고3">고3</option>
              </select>
            </div>
            <div>
              <label className="block text-neutral-600 font-semibold mb-1">문항 번호</label>
              <input
                type="text"
                value={questionNum}
                onChange={(e) => setQuestionNum(e.target.value)}
                placeholder="예: 29번"
                className="w-full border border-neutral-300 rounded px-2.5 py-1.5 focus:border-teal-500 focus:outline-hidden"
              />
            </div>
            <div>
              <label className="block text-neutral-600 font-semibold mb-1">출제 유형</label>
              <input
                type="text"
                value={questionType}
                onChange={(e) => setQuestionType(e.target.value)}
                placeholder="예: 어법 / 빈칸"
                className="w-full border border-neutral-300 rounded px-2.5 py-1.5 focus:border-teal-500 focus:outline-hidden"
              />
            </div>
            <div>
              <label className="block text-neutral-600 font-semibold mb-1">시험명 / 출처</label>
              <input
                type="text"
                value={examTitle}
                onChange={(e) => setExamTitle(e.target.value)}
                placeholder="예: 2026년 3월 교육청 학평"
                className="w-full border border-neutral-300 rounded px-2.5 py-1.5 focus:border-teal-500 focus:outline-hidden"
              />
            </div>
          </div>

          {/* Text Area Input */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="block text-xs font-semibold text-neutral-700">
                영어 지문 본문 (또는 전체 문제 텍스트)
              </label>
              <label className="cursor-pointer text-xs text-teal-600 hover:text-teal-700 flex items-center gap-1 font-medium">
                <Upload className="w-3.5 h-3.5" />
                <span>.txt 파일 불러오기</span>
                <input
                  type="file"
                  accept=".txt"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </label>
            </div>
            <textarea
              rows={8}
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="영어 지문을 여기에 붙여넣으세요. (문제가 포함되어 있어도 AI가 자동으로 본문과 문제를 분리하여 분석합니다)"
              className="w-full border border-neutral-300 rounded-lg p-3 text-xs leading-relaxed focus:border-teal-500 focus:outline-hidden font-mono"
            />
          </div>

          {/* Error Message */}
          {errorMsg && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-xs text-red-700 flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold">분석 실패</p>
                <p>{errorMsg}</p>
              </div>
            </div>
          )}

          {/* Loading Indicator */}
          {isLoading && (
            <div className="p-4 bg-teal-50 border border-teal-200 rounded-lg text-xs text-teal-800 flex items-center gap-3">
              <Loader2 className="w-5 h-5 text-teal-600 animate-spin shrink-0" />
              <div>
                <p className="font-bold">지문 분석지를 생성하고 있습니다...</p>
                <p className="text-[11px] text-teal-600">
                  {loadingStep === 1 && '1단계: 문장 단위 분할 및 구문 분석(S, V, O, C) 태깅 중...'}
                  {loadingStep === 2 && '2단계: 핵심 어법 포인트 및 직독직해 주석 도출 중...'}
                  {loadingStep === 3 && '3단계: CHECK 퀴즈 & Grammar+ 심층 문법 카드 생성 중...'}
                  {loadingStep >= 4 && '4단계: Flow Check 흐름도 및 변형 출제 유형 완성 중...'}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="mt-5 pt-3 border-t border-neutral-200 flex items-center justify-between">
          <span className="text-[11px] text-neutral-400">
            Powered by Gemini 3.8 Flash • EXAM4YOU / 아삭영어 스타일
          </span>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={onClose}
              disabled={isLoading}
              className="px-4 py-2 border border-neutral-300 rounded-lg text-xs font-semibold text-neutral-700 hover:bg-neutral-50"
            >
              취소
            </button>
            <button
              type="button"
              onClick={handleGenerate}
              disabled={isLoading}
              className="px-5 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg text-xs font-bold shadow-sm flex items-center gap-1.5 transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>지문 분석지 생성하기</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
