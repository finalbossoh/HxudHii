import React, { useState } from 'react';
import { sampleExams } from './data/sampleExams';
import { ExamAnalysisData } from './types/exam';
import { HeaderNav } from './components/HeaderNav';
import { WorksheetHeader } from './components/WorksheetHeader';
import { SentenceBlock } from './components/SentenceBlock';
import { WorksheetSidebar } from './components/WorksheetSidebar';
import { OriginalQuestionView } from './components/OriginalQuestionView';
import { InteractiveQuizMode } from './components/InteractiveQuizMode';
import { GenerateModal } from './components/GenerateModal';
import { Printer, Sparkles, BookOpen, Layers, CheckCircle } from 'lucide-react';

export default function App() {
  const [exams, setExams] = useState<ExamAnalysisData[]>(sampleExams);
  const [currentExam, setCurrentExam] = useState<ExamAnalysisData>(sampleExams[0]);
  const [activeTab, setActiveTab] = useState<'analysis' | 'original' | 'quiz' | 'vocab'>('analysis');
  const [themeColor, setThemeColor] = useState('teal');
  const [academyName, setAcademyName] = useState('EXAM4YOU');
  const [isGenerateOpen, setIsGenerateOpen] = useState(false);

  const handleSelectExam = (exam: ExamAnalysisData) => {
    setCurrentExam(exam);
  };

  const handleGenerated = (newData: ExamAnalysisData) => {
    const enrichedData = {
      ...newData,
      id: `custom-${Date.now()}`,
    };
    setExams((prev) => [enrichedData, ...prev]);
    setCurrentExam(enrichedData);
    setActiveTab('analysis');
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-100/90 text-neutral-800">
      {/* Top Header Navigation */}
      <HeaderNav
        currentExam={currentExam}
        availableExams={exams}
        onSelectExam={handleSelectExam}
        onOpenGenerateModal={() => setIsGenerateOpen(true)}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        themeColor={themeColor}
        setThemeColor={setThemeColor}
        academyName={academyName}
        setAcademyName={setAcademyName}
        onPrint={handlePrint}
      />

      {/* Main Container */}
      <main className="max-w-[1340px] mx-auto px-2 sm:px-4 py-4 md:py-6">
        {activeTab === 'analysis' && (
          <div className="print-page bg-white rounded-xl shadow-md border border-neutral-300/80 p-4 sm:p-6 md:p-8 relative">
            {/* Left Vertical Ribbon "지문분석" (Authentic Exam4you / Asak Style) */}
            <div className="hidden lg:flex absolute -left-3 top-20 bottom-20 w-8 bg-teal-600 rounded-l-md text-white font-black text-xs items-center justify-center shadow-xs select-none">
              <span className="[writing-mode:vertical-rl] tracking-[0.4em] font-sans">
                지 문 분 석
              </span>
            </div>

            {/* Header: Title, Metadata, Summary, Flow Check */}
            <WorksheetHeader
              data={currentExam}
              themeColor={themeColor}
              academyName={academyName}
            />

            {/* 2-Column Body: Left Sentences (70%), Right Sidebar (30%) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mt-4 items-start">
              {/* Left Column: Sentences with Interlinear Glosses */}
              <div className="lg:col-span-8 space-y-4">
                {currentExam.sentences.map((sent) => (
                  <SentenceBlock
                    key={sent.num}
                    sentence={sent}
                    themeColor={themeColor}
                  />
                ))}
              </div>

              {/* Right Column: CHECK Quizzes, Grammar+, Vocabulary */}
              <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-neutral-200/80 lg:pl-4 pt-4 lg:pt-0">
                <WorksheetSidebar
                  checkQuizzes={currentExam.sidebar.checkQuizzes}
                  grammarPlusCards={currentExam.sidebar.grammarPlusCards}
                  vocabEntries={currentExam.sidebar.vocabEntries}
                  predictedTypes={currentExam.predictedQuestionTypes}
                  themeColor={themeColor}
                  academyName={academyName}
                />
              </div>
            </div>

            {/* Bottom Footer Pagination */}
            <div className="mt-8 pt-4 border-t border-neutral-300 text-center text-xs font-semibold text-neutral-400 flex items-center justify-between">
              <span>{currentExam.metadata.titleTag}</span>
              <span className="font-mono text-sm text-neutral-600 font-bold">
                - {currentExam.metadata.pageNumber || 38} -
              </span>
              <span className="font-bold text-neutral-400">{academyName}</span>
            </div>
          </div>
        )}

        {/* Tab 2: Original Question & Breakdown View */}
        {activeTab === 'original' && (
          <div className="print-page bg-white rounded-xl shadow-md border border-neutral-300/80 p-4 sm:p-6 md:p-8">
            <OriginalQuestionView
              data={currentExam}
              themeColor={themeColor}
              academyName={academyName}
            />
          </div>
        )}

        {/* Tab 3: Interactive Quiz Mode */}
        {activeTab === 'quiz' && (
          <InteractiveQuizMode
            quizzes={currentExam.sidebar.checkQuizzes}
            themeColor={themeColor}
          />
        )}
      </main>

      {/* Floating Action Button for Quick Generation on Mobile */}
      <div className="fixed bottom-6 right-6 z-30 lg:hidden no-print">
        <button
          onClick={() => setIsGenerateOpen(true)}
          className="w-13 h-13 rounded-full bg-teal-600 hover:bg-teal-700 text-white shadow-xl flex items-center justify-center transition-transform hover:scale-105"
        >
          <Sparkles className="w-6 h-6" />
        </button>
      </div>

      {/* Generator Modal */}
      <GenerateModal
        isOpen={isGenerateOpen}
        onClose={() => setIsGenerateOpen(false)}
        onGenerated={handleGenerated}
      />
    </div>
  );
}
