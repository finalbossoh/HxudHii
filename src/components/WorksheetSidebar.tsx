import React, { useState } from 'react';
import { CheckQuiz, GrammarPlusCard, VocabEntry } from '../types/exam';
import { CheckCircle2, ChevronDown, ChevronUp, BookOpen, HelpCircle } from 'lucide-react';

interface Props {
  checkQuizzes: CheckQuiz[];
  grammarPlusCards: GrammarPlusCard[];
  vocabEntries: VocabEntry[];
  predictedTypes: string[];
  themeColor?: string;
  isInteractiveQuizMode?: boolean;
  academyName?: string;
}

export const WorksheetSidebar: React.FC<Props> = ({
  checkQuizzes,
  grammarPlusCards,
  vocabEntries,
  predictedTypes = [],
  themeColor = 'teal',
  isInteractiveQuizMode = false,
  academyName = 'EXAM4YOU',
}) => {
  const [revealedAnswers, setRevealedAnswers] = useState<Record<number, boolean>>({});
  const [selectedOptions, setSelectedOptions] = useState<Record<number, string>>({});

  const toggleReveal = (idx: number) => {
    setRevealedAnswers((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const allPossibleTypes = [
    '목적',
    '심경·분위기',
    '주제·제목·요지·주장',
    '서술형',
    '지칭',
    '세부내용',
    '어법',
    '어휘',
    '연결어',
    '빈칸',
    '무관한 문장',
    '문장 넣기',
    '순서',
    '요약',
    '의미추론',
  ];

  return (
    <aside className="space-y-4">
      {/* CHECK Quizzes */}
      {checkQuizzes && checkQuizzes.length > 0 && (
        <div className="space-y-3">
          {checkQuizzes.map((quiz, idx) => {
            const isRevealed = !isInteractiveQuizMode || revealedAnswers[idx];
            return (
              <div
                key={idx}
                className="bg-white border-2 border-red-500 rounded-md p-2.5 text-xs shadow-xs relative overflow-hidden"
              >
                {/* Header Tag */}
                <div className="flex items-center justify-between pb-1.5 border-b border-red-200 mb-1.5">
                  <div className="flex items-center gap-1.5">
                    <span className="bg-red-600 text-white font-extrabold text-[10px] px-1.5 py-0.5 rounded-xs tracking-tight">
                      ▌ CHECK {quiz.checkNum || idx + 1}
                    </span>
                    <span className="text-[10px] font-bold text-red-700 truncate max-w-[130px]">
                      {quiz.title}
                    </span>
                  </div>
                  {isInteractiveQuizMode && (
                    <button
                      onClick={() => toggleReveal(idx)}
                      className="text-[10px] font-semibold text-neutral-500 hover:text-red-600 flex items-center gap-0.5"
                    >
                      {isRevealed ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                      {isRevealed ? '답 가리기' : '정답 확인'}
                    </button>
                  )}
                </div>

                {/* Quiz Question Body */}
                <p className="text-[11px] leading-relaxed text-neutral-800 font-medium whitespace-pre-wrap">
                  {quiz.question}
                </p>

                {/* Answer & Explanation */}
                {isRevealed && (
                  <div className="mt-2 pt-1.5 border-t border-dashed border-red-200 bg-red-50/70 -mx-2.5 -mb-2.5 p-2 rounded-b">
                    <div className="text-[11px] font-bold text-red-700 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-red-600 shrink-0" />
                      <span>정답: {quiz.answer}</span>
                    </div>
                    {quiz.explanation && (
                      <p className="text-[10px] text-neutral-600 mt-0.5 leading-normal">
                        {quiz.explanation}
                      </p>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Grammar✚ Cards */}
      {grammarPlusCards && grammarPlusCards.length > 0 && (
        <div className="space-y-3">
          {grammarPlusCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-sky-50/80 border border-sky-400 rounded-md p-2.5 text-xs shadow-xs"
            >
              <div className="flex items-center gap-1.5 mb-1.5 pb-1 border-b border-sky-200">
                <span className="bg-sky-700 text-white font-bold text-[10px] px-1.5 py-0.5 rounded-xs">
                  ▌ Grammar✚ {card.cardNum || idx + 1}
                </span>
                <span className="font-extrabold text-sky-900 text-xs">{card.title}</span>
              </div>

              <p className="text-[11px] text-neutral-700 leading-relaxed mb-2">
                {card.content}
              </p>

              {/* Table if exists */}
              {card.formulaTable && card.formulaTable.length > 0 && (
                <div className="border border-sky-200 rounded overflow-hidden mb-2 text-[10px] bg-white">
                  {card.formulaTable.map((row, rIdx) => (
                    <div
                      key={rIdx}
                      className={`grid grid-cols-2 p-1 px-1.5 ${
                        rIdx % 2 === 0 ? 'bg-sky-100/50' : 'bg-white'
                      } border-b border-sky-100 last:border-b-0`}
                    >
                      <span className="font-semibold text-neutral-800">{row.col1}</span>
                      <span className="text-neutral-600">{row.col2}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Examples */}
              {card.examples && card.examples.length > 0 && (
                <div className="space-y-1 bg-white/70 p-1.5 rounded border border-sky-200/60 text-[10px]">
                  {card.examples.map((ex, exIdx) => (
                    <div key={exIdx} className="leading-tight">
                      <p className="font-semibold text-neutral-900">e.g. {ex.en}</p>
                      <p className="text-neutral-500 text-[9px] mt-0.5">{ex.ko}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Vocab / Dictionary Highlights */}
      {vocabEntries && vocabEntries.length > 0 && (
        <div className="bg-emerald-50/70 border border-emerald-400 rounded-md p-2.5 text-xs shadow-xs space-y-2">
          <div className="flex items-center gap-1.5 border-b border-emerald-200 pb-1 text-emerald-800 font-bold text-[11px]">
            <BookOpen className="w-3.5 h-3.5 text-emerald-600" />
            <span>어휘 사전 & 콜로케이션</span>
          </div>

          <div className="space-y-2">
            {vocabEntries.map((v, idx) => (
              <div key={idx} className="border-b border-emerald-100 last:border-b-0 pb-1.5 last:pb-0">
                <div className="flex items-baseline gap-1.5">
                  <span className="font-bold text-neutral-900 text-xs">{v.word}</span>
                  <span className="text-[10px] text-emerald-700 italic">{v.pos}</span>
                </div>
                <p className="text-[11px] text-neutral-700 leading-snug">{v.meaning}</p>
                {v.synonyms && (
                  <p className="text-[10px] text-neutral-500 mt-0.5">
                    {v.synonyms}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 출제 가능한 유형 CHECK Checklist */}
      <div className="bg-white border border-neutral-300 rounded-md p-2 text-xs">
        <div className="text-[11px] font-extrabold text-neutral-800 border-b border-neutral-200 pb-1 mb-1.5 flex items-center justify-between">
          <span>출제 가능한 유형 CHECK</span>
          <span className="text-[9px] text-neutral-400 font-normal">내신·수능 변형 예측</span>
        </div>
        <div className="grid grid-cols-2 gap-x-2 gap-y-1 text-[10px]">
          {allPossibleTypes.map((type, idx) => {
            const isChecked = predictedTypes.some(
              (p) => p.includes(type) || type.includes(p)
            );
            return (
              <label key={idx} className="flex items-center gap-1 cursor-default">
                <span
                  className={`w-3.5 h-3.5 rounded-xs border flex items-center justify-center font-bold text-[9px] ${
                    isChecked
                      ? 'bg-red-600 border-red-600 text-white'
                      : 'border-neutral-300 bg-neutral-50 text-transparent'
                  }`}
                >
                  ✓
                </span>
                <span className={isChecked ? 'font-bold text-red-600' : 'text-neutral-600'}>
                  {type}
                </span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Watermark Logo */}
      <div className="text-right pt-2">
        <span className="font-black text-sm tracking-wider text-neutral-400 font-sans">
          {academyName}
        </span>
      </div>
    </aside>
  );
};
