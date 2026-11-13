import React from 'react';
import { ExamAnalysisData } from '../types/exam';
import { Award, BookOpen, AlertCircle } from 'lucide-react';

interface Props {
  data: ExamAnalysisData;
  themeColor?: string;
  academyName?: string;
}

export const OriginalQuestionView: React.FC<Props> = ({
  data,
  themeColor = 'teal',
  academyName = 'EXAM4YOU',
}) => {
  const { metadata, originalQuestion, vocabularyList } = data;

  if (!originalQuestion) {
    return (
      <div className="bg-white rounded-lg p-8 text-center text-neutral-500 border border-neutral-200">
        원본 문제 데이터가 없습니다.
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="flex items-center justify-between border-b-2 border-neutral-300 pb-2 mb-4">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-neutral-500">{metadata.titleTag}</span>
          <div className="bg-teal-800 text-white text-xs font-bold px-2 py-0.5 rounded">
            {metadata.questionNumber} ┃ {metadata.questionType}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-neutral-400">{academyName}</span>
          <span className="bg-teal-600 text-white text-xs font-bold px-2.5 py-0.5 rounded-full">
            {metadata.targetGrade}
          </span>
        </div>
      </div>

      {/* 2-Column Layout for Question & Commentary */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Left Column (Question + Choices) */}
        <div className="md:col-span-7 bg-white rounded-lg p-5 border border-neutral-200 shadow-xs">
          <div className="flex items-center gap-2 font-bold text-teal-800 mb-3 text-sm">
            <span className="w-1.5 h-4 bg-teal-600 rounded-full"></span>
            ❙ 원본 문제 ❙
          </div>

          <h3 className="font-bold text-sm text-neutral-900 mb-3 leading-snug">
            {originalQuestion.questionText}
          </h3>

          {/* Full passage with underlines or brackets */}
          <div className="text-xs text-neutral-800 leading-relaxed font-serif bg-slate-50/70 p-4 rounded border border-neutral-200 mb-4 whitespace-pre-wrap">
            {originalQuestion.fullPassageWithUnderlines}
          </div>

          {/* Multiple choices */}
          {originalQuestion.choices && originalQuestion.choices.length > 0 && (
            <div className="grid grid-cols-1 gap-2 pt-2 border-t border-neutral-200">
              {originalQuestion.choices.map((choice, idx) => (
                <div
                  key={idx}
                  className="text-xs text-neutral-800 hover:bg-neutral-50 p-1.5 rounded flex items-center gap-2"
                >
                  <span className="font-medium">{choice}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right Column (Answer, Translation, Commentary) */}
        <div className="md:col-span-5 space-y-4">
          <div className="bg-teal-50/50 border border-teal-200 rounded-lg p-4 shadow-xs">
            <div className="flex items-center gap-1.5 font-bold text-teal-900 text-sm mb-2">
              <Award className="w-4 h-4 text-teal-700" />
              <span>정답 및 해설</span>
            </div>

            <div className="text-xs space-y-2.5 text-neutral-700">
              <div className="bg-white p-2.5 rounded border border-teal-200">
                <span className="font-extrabold text-red-600 mr-2">[정답]</span>
                <span className="font-bold text-neutral-900">{originalQuestion.answer}</span>
              </div>

              {originalQuestion.explanation && (
                <div className="bg-white p-2.5 rounded border border-neutral-200">
                  <div className="font-bold text-neutral-900 mb-1">[해설]</div>
                  <p className="leading-relaxed text-[11px] whitespace-pre-wrap">
                    {originalQuestion.explanation}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Wrong Choice Breakdown (오답률 TOP 분석) */}
          {originalQuestion.wrongAnswerAnalysis && originalQuestion.wrongAnswerAnalysis.length > 0 && (
            <div className="bg-white border border-neutral-200 rounded-lg p-4 shadow-xs">
              <div className="flex items-center justify-between border-b border-neutral-200 pb-2 mb-2.5">
                <div className="flex items-center gap-1.5 font-bold text-neutral-900 text-xs">
                  <AlertCircle className="w-3.5 h-3.5 text-rose-600" />
                  <span>❮ 오답률 분석 및 함정 해설 ❯</span>
                </div>
                <span className="text-[10px] text-neutral-400">선택 비율</span>
              </div>

              <div className="space-y-2 text-xs">
                {originalQuestion.wrongAnswerAnalysis.map((item, idx) => (
                  <div key={idx} className="border-b border-neutral-100 last:border-b-0 pb-2 last:pb-0">
                    <div className="flex items-center justify-between mb-0.5">
                      <div className="flex items-center gap-1.5">
                        <span className="w-4 h-4 rounded-full bg-neutral-100 text-neutral-700 font-bold text-[10px] flex items-center justify-center">
                          {item.choiceNum}
                        </span>
                        <span className="font-bold text-neutral-800 text-[11px]">{item.title}</span>
                      </div>
                      {item.rate && (
                        <span className="text-[10px] font-semibold text-rose-600 font-mono bg-rose-50 px-1 rounded">
                          {item.rate}
                        </span>
                      )}
                    </div>
                    <p className="text-[10px] text-neutral-600 leading-normal pl-5">
                      {item.explanation}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ❙ WORDS & EXPRESSIONS ❙ Vocabulary Table */}
      {vocabularyList && vocabularyList.length > 0 && (
        <div className="bg-white rounded-lg p-5 border border-neutral-200 shadow-xs">
          <div className="flex items-center gap-2 font-bold text-teal-800 mb-3 text-sm border-b border-neutral-200 pb-2">
            <BookOpen className="w-4 h-4 text-teal-600" />
            <span>❙ WORDS & EXPRESSIONS (지문 핵심 어휘 정리) ❙</span>
            <span className="text-xs font-normal text-neutral-400">총 {vocabularyList.length}단어</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-2 text-xs">
            {vocabularyList.map((item, idx) => (
              <div
                key={idx}
                className="flex items-baseline justify-between border-b border-neutral-100 pb-1 hover:bg-teal-50/50 px-1 rounded"
              >
                <span className="font-bold text-neutral-900">{item.word}</span>
                <span className="text-neutral-600 text-[11px] text-right ml-2 truncate">
                  {item.meaning}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
