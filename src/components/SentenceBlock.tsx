import React from 'react';
import { SentenceAnalysis } from '../types/exam';

interface Props {
  sentence: SentenceAnalysis;
  themeColor?: string;
  isInteractive?: boolean;
}

export const SentenceBlock: React.FC<Props> = ({
  sentence,
  themeColor = 'teal',
}) => {
  const getBadgeStyle = (badge?: string | null) => {
    if (!badge) return null;
    if (badge.includes('주제문')) {
      return 'bg-rose-50 text-rose-600 border border-rose-300 font-bold';
    }
    if (badge.includes('서술형')) {
      return 'bg-amber-50 text-amber-700 border border-amber-300 font-bold';
    }
    if (badge.includes('빈칸')) {
      return 'bg-red-600 text-white font-bold shadow-xs';
    }
    if (badge.includes('삽입')) {
      return 'bg-emerald-50 text-emerald-700 border border-emerald-300 font-bold';
    }
    return 'bg-blue-50 text-blue-700 border border-blue-300 font-bold';
  };

  const getCircleNumber = (num: number) => {
    const circles = ['①', '②', '③', '④', '⑤', '⑥', '⑦', '⑧', '⑨', '⑩'];
    return circles[num - 1] || `(${num})`;
  };

  return (
    <div className="mb-6 pb-5 border-b border-dashed border-neutral-300 last:border-b-0">
      {/* Sentence Header Line: Number & Badges */}
      <div className="flex items-center justify-between gap-2 mb-2">
        <div className="flex items-center gap-2">
          {/* Circle Sentence Number */}
          <span className="w-5 h-5 rounded-full bg-neutral-700 text-white text-xs font-bold flex items-center justify-center shrink-0 shadow-xs">
            {sentence.num}
          </span>
          {sentence.badge && (
            <span
              className={`text-[11px] px-2 py-0.5 rounded-full inline-flex items-center gap-1 ${getBadgeStyle(
                sentence.badge
              )}`}
            >
              {sentence.badge}
            </span>
          )}
        </div>
      </div>

      {/* Main Syntactic Interlinear Analysis Box */}
      <div className="bg-white rounded-md border border-neutral-200/80 p-3 pt-2 shadow-xs mb-2 text-neutral-800">
        <div className="flex flex-wrap items-end gap-x-2.5 gap-y-3 leading-normal">
          {sentence.tokens && sentence.tokens.length > 0 ? (
            sentence.tokens.map((token, idx) => (
              <div key={idx} className="inline-flex flex-col items-center relative text-left">
                {/* Top annotations: Clause Tag or Word Gloss */}
                <div className="flex flex-col items-center min-h-[14px] mb-0.5">
                  {token.clauseTag && (
                    <span className="text-[10px] text-sky-600 font-bold whitespace-nowrap leading-none mb-0.5">
                      {token.clauseTag}
                    </span>
                  )}
                  {token.gloss && (
                    <span className="text-[10px] text-cyan-800 font-medium whitespace-nowrap leading-none tracking-tight">
                      {token.gloss}
                    </span>
                  )}
                </div>

                {/* Main English Token Text with optional highlight and circle number */}
                <div className="flex items-baseline">
                  {token.badgeNum && (
                    <span className="text-xs font-extrabold text-red-600 mr-0.5 inline-block">
                      {getCircleNumber(token.badgeNum)}
                    </span>
                  )}
                  <span
                    className={`text-[13px] md:text-sm font-semibold tracking-tight ${
                      token.highlight === 'red'
                        ? 'text-red-600 font-bold underline decoration-red-400 underline-offset-2'
                        : token.highlight === 'blue'
                        ? 'text-blue-600 font-bold'
                        : 'text-neutral-900'
                    }`}
                  >
                    {token.text}
                  </span>
                </div>

                {/* Bottom annotations: Grammatical Roles (S, V, O, C, etc.) */}
                <div className="min-h-[12px] mt-0.5 flex items-center justify-center gap-1">
                  {token.role && (
                    <span className="text-[10px] font-bold text-sky-700 tracking-tighter leading-none">
                      {token.role}
                    </span>
                  )}
                  {token.subscript && (
                    <span className="text-[9px] text-neutral-500 font-medium leading-none">
                      {token.subscript}
                    </span>
                  )}
                </div>
              </div>
            ))
          ) : (
            <p className="text-sm font-medium leading-relaxed">{sentence.originalText}</p>
          )}
        </div>
      </div>

      {/* Korean Translation Row (해석) */}
      <div className="bg-slate-50 border-l-3 border-teal-600 px-3 py-1.5 rounded-r text-xs text-neutral-700 mb-2 leading-relaxed">
        <span className="font-bold text-teal-800 mr-1.5 bg-teal-100/60 px-1 py-0.5 rounded text-[11px]">
          해석
        </span>
        {sentence.translation}
      </div>

      {/* Grammar Points Breakdown (①, ②, ③) */}
      {sentence.grammarPoints && sentence.grammarPoints.length > 0 && (
        <div className="space-y-1.5 pl-1 pr-1 text-xs text-neutral-700">
          {sentence.grammarPoints.map((point) => (
            <div key={point.pointNum} className="flex items-start gap-1.5 leading-relaxed">
              <span className="font-bold text-teal-700 shrink-0">
                {getCircleNumber(point.pointNum)}
              </span>
              <div>
                <span className="font-bold text-neutral-900 mr-1">
                  {point.title}:
                </span>
                <span className="text-neutral-700">{point.explanation}</span>
                {point.structure && (
                  <div className="text-[11px] font-mono text-teal-800 bg-teal-50/80 px-2 py-0.5 rounded mt-0.5 inline-block">
                    {point.structure}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Deep Context Box (내용 풀이) */}
      {sentence.deepMeaning && (
        <div className="mt-2 bg-blue-50/60 border border-blue-200/80 rounded p-2 text-xs text-neutral-700">
          <div className="flex items-center gap-1 font-bold text-blue-800 mb-1 text-[11px]">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
            내용 풀이 {sentence.num}
          </div>
          <p className="leading-relaxed whitespace-pre-line text-[11px] text-neutral-700">
            {sentence.deepMeaning}
          </p>
        </div>
      )}
    </div>
  );
};
