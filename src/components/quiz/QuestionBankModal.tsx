import React, { useState, useEffect } from 'react';
import { 
  X, Clock, ChevronLeft, ChevronRight, CheckCircle2, 
  HelpCircle, AlertCircle, Award, RotateCcw, Check, Sparkles 
} from 'lucide-react';
import { QUESTIONS_DATA } from '../../data/questionsData';
import { QuizQuestion } from '../../types/medical';
import { hospitalAudio } from '../../utils/audioSynthesis';

interface QuestionBankModalProps {
  onClose: () => void;
  onRecordScore?: (score: number, total: number) => void;
}

export const QuestionBankModal: React.FC<QuestionBankModalProps> = ({
  onClose,
  onRecordScore,
}) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, 'A' | 'B' | 'C' | 'D' | 'E'>>({});
  const [isExamFinished, setIsExamFinished] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(45 * 60); // 45 minutes

  // Timer countdown
  useEffect(() => {
    if (isExamFinished) return;
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          finishExam();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isExamFinished]);

  const currentQ: QuizQuestion = QUESTIONS_DATA[currentIdx] || QUESTIONS_DATA[0];

  const handleSelectOption = (key: 'A' | 'B' | 'C' | 'D' | 'E') => {
    if (isExamFinished) return;
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQ.id]: key,
    }));
    hospitalAudio.playFootstep();
  };

  const finishExam = () => {
    let correctCount = 0;
    QUESTIONS_DATA.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctAnswer) {
        correctCount++;
      }
    });

    const finalPercent = Math.round((correctCount / QUESTIONS_DATA.length) * 100);
    setScore(finalPercent);
    setIsExamFinished(true);
    hospitalAudio.playInteractionChime();

    if (onRecordScore) {
      onRecordScore(finalPercent, QUESTIONS_DATA.length);
    }
  };

  const formatTimer = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-slate-950/85 backdrop-blur-md overflow-hidden">
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-700 rounded-3xl shadow-2xl flex flex-col max-h-[92vh] overflow-hidden">
        {/* Header */}
        <div className="p-4 sm:p-5 bg-gradient-to-r from-slate-900 via-sky-950/70 to-slate-900 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 to-teal-400 flex items-center justify-center shadow">
              <HelpCircle className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold text-sky-400 bg-sky-950 px-2.5 py-0.5 rounded-full border border-sky-800">
                  BANK SOAL ESO (30 NOMOR)
                </span>
                <span className="text-[11px] font-semibold text-slate-400">
                  {currentQ.type}
                </span>
              </div>
              <h3 className="text-sm sm:text-base font-bold text-white mt-0.5">
                Ujian Farmakologi & Kasus Efek Samping Obat
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Timer Badge */}
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 border border-slate-700 rounded-xl text-xs font-mono font-bold text-amber-400 shadow">
              <Clock className="w-4 h-4 text-amber-400" />
              <span>{formatTimer(timeLeft)}</span>
            </div>

            <button
              onClick={onClose}
              className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Question Numbers Navigation Grid Bar */}
        <div className="p-3 bg-slate-950/60 border-b border-slate-800 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
          {QUESTIONS_DATA.map((q, idx) => {
            const isAnswered = selectedAnswers[q.id] !== undefined;
            const isCurrent = idx === currentIdx;
            const isCorrect = isExamFinished && selectedAnswers[q.id] === q.correctAnswer;
            const isWrong = isExamFinished && isAnswered && !isCorrect;

            let badgeClass = 'bg-slate-800 text-slate-400 border-slate-700';
            if (isExamFinished) {
              badgeClass = isCorrect
                ? 'bg-emerald-600 text-white border-emerald-400 font-bold'
                : isWrong
                ? 'bg-rose-600 text-white border-rose-400 font-bold'
                : 'bg-slate-800 text-slate-500 border-slate-700';
            } else if (isCurrent) {
              badgeClass = 'bg-sky-500 text-white border-white shadow ring-2 ring-sky-400/50 font-bold';
            } else if (isAnswered) {
              badgeClass = 'bg-teal-700/80 text-teal-100 border-teal-500/50 font-semibold';
            }

            return (
              <button
                key={q.id}
                onClick={() => setCurrentIdx(idx)}
                className={`w-8 h-8 rounded-lg text-xs flex items-center justify-center shrink-0 border transition-all cursor-pointer ${badgeClass}`}
              >
                {q.id}
              </button>
            );
          })}
        </div>

        {/* Question Card Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          {/* Clinical Scenario Box if present */}
          {currentQ.caseScenario && (
            <div className="bg-sky-950/30 p-4 rounded-2xl border border-sky-800/40 text-xs sm:text-sm text-sky-200 leading-relaxed">
              <div className="font-bold text-sky-400 uppercase text-[11px] mb-1">
                {currentQ.scenarioTitle || 'Skenario Kasus Klinis:'}
              </div>
              <p>{currentQ.caseScenario}</p>
            </div>
          )}

          {/* Question Text */}
          <div className="text-sm sm:text-base font-bold text-white leading-relaxed">
            <span className="text-sky-400 mr-2">No. {currentQ.id}</span>
            {currentQ.question}
          </div>

          {/* Options List */}
          <div className="space-y-2.5 pt-2">
            {currentQ.options.map((opt) => {
              const isSelected = selectedAnswers[currentQ.id] === opt.key;
              const isCorrectAnswer = isExamFinished && opt.key === currentQ.correctAnswer;
              const isWrongSelected = isExamFinished && isSelected && !isCorrectAnswer;

              let optClass = 'bg-slate-800/60 hover:bg-slate-800 border-slate-700/70 text-slate-200';
              if (isExamFinished) {
                if (isCorrectAnswer) {
                  optClass = 'bg-emerald-950/60 border-emerald-500 text-emerald-100 shadow-md ring-1 ring-emerald-400';
                } else if (isWrongSelected) {
                  optClass = 'bg-rose-950/60 border-rose-500 text-rose-100';
                }
              } else if (isSelected) {
                optClass = 'bg-sky-600/30 border-sky-500 text-white ring-2 ring-sky-500/40 shadow';
              }

              return (
                <div
                  key={opt.key}
                  onClick={() => handleSelectOption(opt.key)}
                  className={`p-3.5 sm:p-4 rounded-2xl border transition-all cursor-pointer flex items-start gap-3 ${optClass}`}
                >
                  <span
                    className={`w-7 h-7 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 border ${
                      isSelected
                        ? 'bg-sky-500 border-white text-white'
                        : isCorrectAnswer
                        ? 'bg-emerald-500 border-white text-white'
                        : 'bg-slate-900 border-slate-700 text-slate-300'
                    }`}
                  >
                    {opt.key}
                  </span>
                  <p className="text-xs sm:text-sm leading-relaxed">{opt.text}</p>
                </div>
              );
            })}
          </div>

          {/* Comprehensive Discussion Box after exam completion */}
          {isExamFinished && (
            <div className="bg-slate-800/80 p-4 sm:p-5 rounded-2xl border border-slate-700/80 space-y-2 animate-fadeIn mt-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-400">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Kunci Jawaban Benar: ({currentQ.correctAnswer}) • Pembahasan dr. Juwita Ninda Suherman:
              </div>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed whitespace-pre-line">
                {currentQ.explanation}
              </p>
            </div>
          )}
        </div>

        {/* Footer Navigation Bar */}
        <div className="p-3.5 sm:p-4 bg-slate-950/80 border-t border-slate-800 flex items-center justify-between">
          <button
            onClick={() => setCurrentIdx(Math.max(0, currentIdx - 1))}
            disabled={currentIdx === 0}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 disabled:opacity-30 text-white text-xs font-bold rounded-xl flex items-center gap-1.5 cursor-pointer disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Sebelumnya</span>
          </button>

          {!isExamFinished ? (
            <button
              onClick={finishExam}
              className="px-5 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white text-xs font-bold rounded-xl shadow-lg active:scale-95 cursor-pointer"
            >
              Selesaikan Ujian & Lihat Nilai
            </button>
          ) : (
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-300">
                Nilai Akhir: <span className="text-emerald-400 text-sm font-black">{score} / 100</span>
              </span>
            </div>
          )}

          <button
            onClick={() => setCurrentIdx(Math.min(QUESTIONS_DATA.length - 1, currentIdx + 1))}
            disabled={currentIdx === QUESTIONS_DATA.length - 1}
            className="px-4 py-2 bg-sky-600 hover:bg-sky-500 disabled:opacity-30 text-white text-xs font-bold rounded-xl flex items-center gap-1.5 shadow cursor-pointer disabled:cursor-not-allowed"
          >
            <span>Selanjutnya</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
