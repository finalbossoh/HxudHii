import React, { useState } from 'react';
import { CheckQuiz } from '../types/exam';
import { CheckCircle2, XCircle, RotateCcw, Award } from 'lucide-react';

interface Props {
  quizzes: CheckQuiz[];
  themeColor?: string;
}

export const InteractiveQuizMode: React.FC<Props> = ({ quizzes }) => {
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [checkedResults, setCheckedResults] = useState<Record<number, boolean>>({});
  const [isFinished, setIsFinished] = useState(false);

  const handleSelect = (qIdx: number, val: string) => {
    setUserAnswers((prev) => ({ ...prev, [qIdx]: val }));
  };

  const handleCheckAnswer = (qIdx: number) => {
    const quiz = quizzes[qIdx];
    const userVal = (userAnswers[qIdx] || '').trim().toLowerCase();
    const correctVal = quiz.answer.trim().toLowerCase();
    const isCorrect = userVal === correctVal || correctVal.includes(userVal);

    setCheckedResults((prev) => ({ ...prev, [qIdx]: isCorrect }));
  };

  const handleCheckAll = () => {
    const results: Record<number, boolean> = {};
    quizzes.forEach((q, idx) => {
      const userVal = (userAnswers[idx] || '').trim().toLowerCase();
      const correctVal = q.answer.trim().toLowerCase();
      results[idx] = userVal === correctVal || (userVal.length > 0 && correctVal.includes(userVal));
    });
    setCheckedResults(results);
    setIsFinished(true);
  };

  const handleReset = () => {
    setUserAnswers({});
    setCheckedResults({});
    setIsFinished(false);
  };

  const correctCount = Object.values(checkedResults).filter(Boolean).length;

  return (
    <div className="max-w-4xl mx-auto space-y-6 py-4">
      {/* Top Banner */}
      <div className="bg-white rounded-xl p-6 border border-neutral-200 shadow-xs flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="bg-red-600 text-white font-extrabold text-xs px-2 py-0.5 rounded">
              ▌ CHECK 퀴즈
            </span>
            <h2 className="text-base font-bold text-neutral-900">
              실전 수능·내신 빈출 어법/어휘 변형 퀴즈 모드
            </h2>
          </div>
          <p className="text-xs text-neutral-500">
            실제 모의고사 지문에서 추출된 문법 및 어휘 선택형 퀴즈를 직접 풀어보며 실력을 점검하세요.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {isFinished ? (
            <div className="flex items-center gap-2">
              <div className="text-right">
                <span className="text-xs text-neutral-500 block">점수</span>
                <span className="text-lg font-black text-teal-600">
                  {correctCount} / {quizzes.length}
                </span>
              </div>
              <button
                onClick={handleReset}
                className="flex items-center gap-1.5 px-3 py-1.5 border border-neutral-300 rounded-lg text-xs font-semibold text-neutral-700 hover:bg-neutral-50"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>다시 풀기</span>
              </button>
            </div>
          ) : (
            <button
              onClick={handleCheckAll}
              className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs rounded-lg shadow-xs transition-colors flex items-center gap-1.5"
            >
              <Award className="w-4 h-4" />
              <span>전체 정답 채점</span>
            </button>
          )}
        </div>
      </div>

      {/* Quiz List */}
      <div className="space-y-4">
        {quizzes.map((quiz, idx) => {
          const isEvaluated = checkedResults[idx] !== undefined;
          const isCorrect = checkedResults[idx];

          return (
            <div
              key={idx}
              className={`bg-white rounded-xl p-5 border-2 transition-all ${
                isEvaluated
                  ? isCorrect
                    ? 'border-emerald-500 shadow-sm'
                    : 'border-rose-400 shadow-sm'
                  : 'border-neutral-200'
              }`}
            >
              {/* Question Header */}
              <div className="flex items-center justify-between pb-2 mb-3 border-b border-neutral-100">
                <div className="flex items-center gap-2">
                  <span className="bg-neutral-800 text-white font-black text-xs px-2 py-0.5 rounded">
                    Q{quiz.checkNum || idx + 1}
                  </span>
                  <span className="text-xs font-bold text-neutral-700">{quiz.title}</span>
                </div>
                {isEvaluated && (
                  <span
                    className={`text-xs font-bold flex items-center gap-1 px-2 py-0.5 rounded-full ${
                      isCorrect ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                    }`}
                  >
                    {isCorrect ? (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        <span>정답!</span>
                      </>
                    ) : (
                      <>
                        <XCircle className="w-3.5 h-3.5 text-rose-600" />
                        <span>오답</span>
                      </>
                    )}
                  </span>
                )}
              </div>

              {/* Question Text */}
              <p className="text-sm font-serif leading-relaxed text-neutral-800 mb-4 whitespace-pre-wrap">
                {quiz.question}
              </p>

              {/* User Answer Input / Confirmation */}
              <div className="flex items-center gap-2 mb-2">
                <input
                  type="text"
                  value={userAnswers[idx] || ''}
                  onChange={(e) => handleSelect(idx, e.target.value)}
                  placeholder="선택한 답을 입력하세요 (예: that 또는 which, are 등)"
                  className="flex-1 border border-neutral-300 rounded-lg px-3 py-1.5 text-xs focus:border-teal-500 focus:outline-hidden"
                />
                <button
                  onClick={() => handleCheckAnswer(idx)}
                  className="px-3 py-1.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-bold rounded-lg transition-colors"
                >
                  확인
                </button>
              </div>

              {/* Feedback Explanation */}
              {isEvaluated && (
                <div
                  className={`mt-3 p-3 rounded-lg text-xs leading-relaxed ${
                    isCorrect ? 'bg-emerald-50 text-emerald-900 border border-emerald-200' : 'bg-rose-50 text-rose-900 border border-rose-200'
                  }`}
                >
                  <p className="font-bold mb-1">
                    [정답]: <span className="underline">{quiz.answer}</span>
                  </p>
                  {quiz.explanation && <p className="text-[11px] opacity-90">{quiz.explanation}</p>}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
