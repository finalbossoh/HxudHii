import React from 'react';
import { ExamAnalysisData } from '../types/exam';

interface Props {
  data: ExamAnalysisData;
  themeColor?: string;
  academyName?: string;
}

export const WorksheetHeader: React.FC<Props> = ({
  data,
  themeColor = 'teal',
  academyName = 'EXAM4YOU',
}) => {
  const { metadata, titleEn, titleKo, summary, flowCheck, flowDiagram } = data;

  const getThemeClass = () => {
    switch (themeColor) {
      case 'blue':
        return {
          banner: 'bg-sky-600 text-white',
          badge: 'bg-sky-600 text-white',
          border: 'border-sky-500',
          accentText: 'text-sky-700',
          lightBg: 'bg-sky-50 border-sky-200',
          flowBorder: 'border-sky-400',
          tag: 'bg-sky-700',
        };
      case 'green':
        return {
          banner: 'bg-emerald-600 text-white',
          badge: 'bg-emerald-600 text-white',
          border: 'border-emerald-500',
          accentText: 'text-emerald-700',
          lightBg: 'bg-emerald-50 border-emerald-200',
          flowBorder: 'border-emerald-400',
          tag: 'bg-emerald-700',
        };
      case 'mono':
        return {
          banner: 'bg-neutral-800 text-white',
          badge: 'bg-neutral-800 text-white',
          border: 'border-neutral-500',
          accentText: 'text-neutral-800',
          lightBg: 'bg-neutral-100 border-neutral-300',
          flowBorder: 'border-neutral-400',
          tag: 'bg-neutral-800',
        };
      case 'teal':
      default:
        return {
          banner: 'bg-teal-600 text-white',
          badge: 'bg-teal-600 text-white',
          border: 'border-teal-500',
          accentText: 'text-teal-700',
          lightBg: 'bg-teal-50 border-teal-200',
          flowBorder: 'border-teal-400',
          tag: 'bg-teal-700',
        };
    }
  };

  const theme = getThemeClass();

  return (
    <div className="relative mb-4">
      {/* Top Banner Row */}
      <div className="flex items-stretch justify-between border-b-2 border-neutral-300 pb-2 mb-3">
        {/* Left: Exam title & question number */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-neutral-500 tracking-wider">
              {metadata.titleTag}
            </span>
            <div className="flex items-center bg-teal-800 text-white text-xs font-bold px-2 py-0.5 rounded">
              <span>{metadata.questionNumber}</span>
              <span className="mx-1 text-teal-300">┃</span>
              <span>{metadata.questionType}</span>
            </div>
          </div>
        </div>

        {/* Right: Grade badge & Source */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-neutral-400">{academyName}</span>
          <span className={`${theme.badge} text-xs font-bold px-2.5 py-0.5 rounded-full shadow-sm`}>
            {metadata.targetGrade}
          </span>
        </div>
      </div>

      {/* Main Titles and Right-side Infographic Diagram */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-start pb-3 border-b border-neutral-200">
        {/* Left 8~9 Cols: Title & Subtitle */}
        <div className="md:col-span-8 lg:col-span-9">
          <h1 className="text-lg md:text-xl font-extrabold text-neutral-900 tracking-tight leading-snug font-serif">
            {titleEn}
          </h1>
          <p className="text-sm font-medium text-neutral-600 mt-1">
            {titleKo}
          </p>

          {/* 내용 Summary Box */}
          <div className="mt-2.5 flex items-start gap-2 bg-neutral-50 border border-neutral-200 rounded p-2">
            <span className={`${theme.banner} text-[11px] font-bold px-1.5 py-0.5 rounded shrink-0 leading-none mt-0.5`}>
              내용
            </span>
            <p className="text-xs leading-relaxed text-neutral-700">
              {summary}
            </p>
          </div>
        </div>

        {/* Right 3~4 Cols: Conceptual Flow Diagram (Infographic) */}
        <div className="md:col-span-4 lg:col-span-3">
          <div className={`${theme.lightBg} border rounded p-2 text-center text-xs shadow-xs`}>
            <div className="font-semibold text-neutral-800 leading-tight">
              {flowDiagram.topBox}
            </div>
            <div className={`my-1 text-base font-bold ${theme.accentText}`}>
              {flowDiagram.arrowText || '↓'}
            </div>
            <div className="text-[11px] font-medium text-neutral-600 leading-tight">
              {flowDiagram.bottomBox}
            </div>
          </div>
        </div>
      </div>

      {/* Flow Check Section (도입 - 전개 - 반전 - 결말) */}
      <div className="mt-3">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="text-xs font-bold tracking-tight text-neutral-800 flex items-center gap-1.5">
            <span className={`w-2 h-2 rounded-full ${theme.tag}`}></span>
            Flow Check
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {flowCheck.map((step, idx) => (
            <div
              key={idx}
              className="bg-white border border-neutral-200 rounded p-2 text-left shadow-xs flex flex-col justify-between"
            >
              <div className="flex items-center justify-between border-b border-neutral-100 pb-1 mb-1">
                <span className={`text-[11px] font-bold ${theme.accentText}`}>
                  {step.title}
                </span>
                <span className="text-[9px] text-neutral-400 font-mono">0{idx + 1}</span>
              </div>
              <p className="text-[11px] text-neutral-600 leading-relaxed line-clamp-4">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
