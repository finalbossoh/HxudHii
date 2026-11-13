import React from 'react';
import {
  FileText,
  Printer,
  Sparkles,
  HelpCircle,
  BookOpen,
  Settings,
  Download,
  Share2,
  Palette,
  School,
} from 'lucide-react';
import { ExamAnalysisData } from '../types/exam';

interface Props {
  currentExam: ExamAnalysisData;
  availableExams: ExamAnalysisData[];
  onSelectExam: (exam: ExamAnalysisData) => void;
  onOpenGenerateModal: () => void;
  activeTab: 'analysis' | 'original' | 'quiz' | 'vocab';
  setActiveTab: (tab: 'analysis' | 'original' | 'quiz' | 'vocab') => void;
  themeColor: string;
  setThemeColor: (color: string) => void;
  academyName: string;
  setAcademyName: (name: string) => void;
  onPrint: () => void;
}

export const HeaderNav: React.FC<Props> = ({
  currentExam,
  availableExams,
  onSelectExam,
  onOpenGenerateModal,
  activeTab,
  setActiveTab,
  themeColor,
  setThemeColor,
  academyName,
  setAcademyName,
  onPrint,
}) => {
  return (
    <header className="bg-white border-b border-neutral-200 sticky top-0 z-40 no-print">
      {/* Top Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 py-2.5 flex flex-wrap items-center justify-between gap-3">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-teal-600 text-white flex items-center justify-center font-black shadow-xs text-sm">
            EA
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-neutral-900 text-sm tracking-tight">
                Exam Analyzer Pro
              </span>
              <span className="text-[10px] bg-teal-100 text-teal-800 font-bold px-1.5 py-0.2 rounded">
                지문분석지
              </span>
            </div>
            <p className="text-[10px] text-neutral-500">
              수능·학평 영어 시험지 스타일 완벽 분석 솔루션
            </p>
          </div>
        </div>

        {/* Preset Selector Dropdown */}
        <div className="flex items-center gap-2">
          <label className="text-xs font-semibold text-neutral-500 hidden sm:inline">
            지문 선택:
          </label>
          <select
            value={currentExam.id}
            onChange={(e) => {
              const selected = availableExams.find((ex) => ex.id === e.target.value);
              if (selected) onSelectExam(selected);
            }}
            className="text-xs border border-neutral-300 rounded-lg px-2.5 py-1.5 font-medium text-neutral-800 bg-neutral-50 focus:border-teal-500 focus:outline-hidden max-w-[260px] sm:max-w-[320px] truncate"
          >
            {availableExams.map((ex) => (
              <option key={ex.id} value={ex.id}>
                [{ex.metadata.targetGrade}] {ex.metadata.titleTag} {ex.metadata.questionNumber} ({ex.metadata.questionType})
              </option>
            ))}
          </select>
        </div>

        {/* Action Buttons: New / Print / Brand */}
        <div className="flex items-center gap-2">
          {/* Academy Brand Input (Click to change) */}
          <div className="hidden lg:flex items-center gap-1.5 bg-neutral-100 border border-neutral-200 rounded-lg px-2 py-1 text-xs">
            <School className="w-3.5 h-3.5 text-neutral-500" />
            <input
              type="text"
              value={academyName}
              onChange={(e) => setAcademyName(e.target.value)}
              title="학원 / 학교 로고 워터마크 이름"
              placeholder="학원명/워터마크"
              className="bg-transparent border-none text-xs font-bold text-neutral-700 w-24 focus:outline-hidden"
            />
          </div>

          {/* Theme Color Picker */}
          <div className="flex items-center gap-1 border border-neutral-200 rounded-lg p-1 bg-neutral-50">
            {[
              { id: 'teal', color: 'bg-teal-600', label: '민트/청록 (기본)' },
              { id: 'blue', color: 'bg-sky-600', label: '스카이블루' },
              { id: 'green', color: 'bg-emerald-600', label: '에메랄드' },
              { id: 'mono', color: 'bg-neutral-800', label: '흑백 인쇄용' },
            ].map((t) => (
              <button
                key={t.id}
                onClick={() => setThemeColor(t.id)}
                title={t.label}
                className={`w-4 h-4 rounded-full ${t.color} transition-transform ${
                  themeColor === t.id ? 'ring-2 ring-offset-1 ring-neutral-400 scale-110' : 'opacity-70 hover:opacity-100'
                }`}
              />
            ))}
          </div>

          {/* AI Generator Button */}
          <button
            onClick={onOpenGenerateModal}
            className="flex items-center gap-1.5 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs px-3 py-1.5 rounded-lg shadow-xs transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">새 지문 분석</span>
            <span className="sm:hidden">생성</span>
          </button>

          {/* Print / PDF Button */}
          <button
            onClick={onPrint}
            className="flex items-center gap-1.5 bg-neutral-800 hover:bg-neutral-900 text-white font-bold text-xs px-3 py-1.5 rounded-lg shadow-xs transition-colors"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>인쇄 / PDF</span>
          </button>
        </div>
      </div>

      {/* Tabs Navigation (Analysis vs Original Question vs Quiz vs Vocab) */}
      <div className="border-t border-neutral-200 bg-neutral-50/70">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-1 overflow-x-auto no-scrollbar py-1">
            <button
              onClick={() => setActiveTab('analysis')}
              className={`px-3 py-1.5 text-xs font-bold rounded-md flex items-center gap-1.5 transition-colors whitespace-nowrap ${
                activeTab === 'analysis'
                  ? 'bg-teal-600 text-white shadow-xs'
                  : 'text-neutral-600 hover:bg-neutral-200/60'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>지문 심층 분석지 (1면)</span>
            </button>

            <button
              onClick={() => setActiveTab('original')}
              className={`px-3 py-1.5 text-xs font-bold rounded-md flex items-center gap-1.5 transition-colors whitespace-nowrap ${
                activeTab === 'original'
                  ? 'bg-teal-600 text-white shadow-xs'
                  : 'text-neutral-600 hover:bg-neutral-200/60'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>원본 문제 & 해설 / 오답률 (2면)</span>
            </button>

            <button
              onClick={() => setActiveTab('quiz')}
              className={`px-3 py-1.5 text-xs font-bold rounded-md flex items-center gap-1.5 transition-colors whitespace-nowrap ${
                activeTab === 'quiz'
                  ? 'bg-teal-600 text-white shadow-xs'
                  : 'text-neutral-600 hover:bg-neutral-200/60'
              }`}
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span>CHECK 퀴즈 테스트 모드</span>
            </button>
          </div>

          <div className="text-[11px] text-neutral-400 font-medium hidden md:block">
            {currentExam.metadata.questionNumber} | {currentExam.sentences.length}개 문장 분석 완료
          </div>
        </div>
      </div>
    </header>
  );
};
