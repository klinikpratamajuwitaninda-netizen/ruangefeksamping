import React, { useState, useEffect } from 'react';
import { 
  X, ChevronLeft, ChevronRight, Volume2, Sparkles, 
  Maximize2, Minimize2, BookOpen, Layers, CheckCircle2, RotateCcw
} from 'lucide-react';
import { SLIDES_DATA } from '../../data/slidesData';
import { SlideItem } from '../../types/medical';
import { hospitalAudio } from '../../utils/audioSynthesis';

interface SlideViewerModalProps {
  onClose: () => void;
  onCompleteSlide?: (slideId: number) => void;
}

export const SlideViewerModal: React.FC<SlideViewerModalProps> = ({
  onClose,
  onCompleteSlide,
}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showThumbnails, setShowThumbnails] = useState(false);
  const [isNarrating, setIsNarrating] = useState(false);
  const [aiExplanation, setAiExplanation] = useState<string | null>(null);
  const [isLoadingAi, setIsLoadingAi] = useState(false);

  const slide: SlideItem = SLIDES_DATA[currentSlideIndex] || SLIDES_DATA[0];

  useEffect(() => {
    // When slide changes, mark completed
    if (onCompleteSlide) {
      onCompleteSlide(slide.id);
    }
    setAiExplanation(null);
  }, [currentSlideIndex, slide.id, onCompleteSlide]);

  const handleNext = () => {
    if (currentSlideIndex < SLIDES_DATA.length - 1) {
      setCurrentSlideIndex(currentSlideIndex + 1);
      hospitalAudio.stopSpeaking();
      setIsNarrating(false);
    }
  };

  const handlePrev = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(currentSlideIndex - 1);
      hospitalAudio.stopSpeaking();
      setIsNarrating(false);
    }
  };

  const toggleNarration = () => {
    if (isNarrating) {
      hospitalAudio.stopSpeaking();
      setIsNarrating(false);
    } else {
      const speechText = `Slide ${slide.slideNumber}. ${slide.title}. ${slide.subtitle || ''}. Poin penting: ${slide.keyPoints.join('. ')}. Poin klinis dr. Juwita Ninda Suherman: ${slide.clinicalHighlight}.`;
      hospitalAudio.speakCharacter(
        speechText,
        'dokter',
        'tenang',
        'female',
        40,
        () => setIsNarrating(true),
        () => setIsNarrating(false)
      );
    }
  };

  const fetchAiExplanation = async () => {
    if (isLoadingAi) return;
    setIsLoadingAi(true);
    try {
      const res = await fetch('/api/ai/explain-slide', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          slideNumber: slide.slideNumber,
          slideTitle: slide.title,
          slidePoints: slide.keyPoints,
        }),
      });
      const data = await res.json();
      setAiExplanation(data.explanation || 'Penjelasan siap dipelajari.');
    } catch (err) {
      console.error(err);
      setAiExplanation('Gagal memuat penjelasan AI. Silakan coba kembali.');
    } finally {
      setIsLoadingAi(false);
    }
  };

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/85 backdrop-blur-md overflow-hidden ${
      isFullscreen ? 'p-0' : ''
    }`}>
      <div className={`relative w-full bg-slate-900 border border-slate-700 shadow-2xl flex flex-col overflow-hidden transition-all ${
        isFullscreen ? 'h-full max-w-none rounded-none' : 'max-w-5xl rounded-3xl max-h-[92vh]'
      }`}>
        {/* Top Header */}
        <div className="p-3.5 sm:p-4 bg-gradient-to-r from-slate-900 via-sky-950/80 to-slate-900 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 to-teal-400 flex items-center justify-center shadow">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold text-sky-400 bg-sky-950 px-2 py-0.5 rounded-full border border-sky-800">
                  SLIDE {slide.slideNumber} / {SLIDES_DATA.length}
                </span>
                <span className="text-[10px] font-semibold text-slate-400">
                  {slide.topicCategory}
                </span>
              </div>
              <h3 className="text-sm sm:text-base font-bold text-white truncate max-w-md">
                {slide.title}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setShowThumbnails(!showThumbnails)}
              className={`p-2 rounded-xl text-xs font-bold flex items-center gap-1 transition-colors ${
                showThumbnails ? 'bg-sky-600 text-white' : 'bg-slate-800 text-slate-300 hover:text-white'
              }`}
              title="Daftar Thumbnail Slide"
            >
              <Layers className="w-4 h-4" />
              <span className="hidden sm:inline">Daftar</span>
            </button>

            <button
              onClick={toggleNarration}
              className={`p-2 rounded-xl text-xs font-bold flex items-center gap-1 transition-colors ${
                isNarrating
                  ? 'bg-emerald-500 text-white animate-pulse'
                  : 'bg-slate-800 text-slate-300 hover:text-white'
              }`}
              title="Putar Narasi Suara"
            >
              <Volume2 className="w-4 h-4" />
              <span className="hidden sm:inline">{isNarrating ? 'Membaca...' : 'Narasi'}</span>
            </button>

            <button
              onClick={fetchAiExplanation}
              disabled={isLoadingAi}
              className="p-2 rounded-xl text-xs font-bold bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white flex items-center gap-1 shadow transition-all active:scale-95"
              title="Penjelasan AI Dosen"
            >
              <Sparkles className="w-4 h-4" />
              <span className="hidden sm:inline">{isLoadingAi ? 'Memproses...' : 'AI Explain'}</span>
            </button>

            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white"
            >
              {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>

            <button
              onClick={() => {
                hospitalAudio.stopSpeaking();
                onClose();
              }}
              className="p-2 rounded-xl bg-slate-800 hover:bg-rose-900/60 text-slate-400 hover:text-rose-300"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Slide Canvas Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 flex flex-col justify-between space-y-4">
          <div className="space-y-4 max-w-4xl mx-auto w-full">
            {/* Slide Title Banner */}
            <div className="bg-gradient-to-r from-sky-900/40 via-slate-800/60 to-slate-900/40 p-5 rounded-3xl border border-sky-500/20 shadow-md">
              <span className="text-[11px] font-bold text-sky-400 uppercase tracking-widest block mb-1">
                INSTITUT KESEHATAN RAJAWALI • FARMAKOLOGI KEPERAWATAN
              </span>
              <h1 className="text-xl sm:text-2xl font-black text-white leading-tight">
                {slide.title}
              </h1>
              {slide.subtitle && (
                <p className="text-sm text-sky-200/80 font-medium mt-1">
                  {slide.subtitle}
                </p>
              )}
            </div>

            {/* Key Bullet Points */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-2 bg-slate-800/60 p-5 rounded-3xl border border-slate-700/60 space-y-3">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  POIN PEMBELAJARAN UTAMA
                </h4>
                <div className="space-y-2.5">
                  {slide.keyPoints.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200 leading-relaxed">
                      <div className="w-2 h-2 rounded-full bg-sky-400 shrink-0 mt-1.5" />
                      <p>{point}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Side Card: Inti Penting Klinis */}
              <div className="bg-gradient-to-b from-slate-900 via-sky-950/60 to-slate-900 p-5 rounded-3xl border border-sky-500/30 flex flex-col justify-between shadow-lg">
                <div>
                  <div className="flex items-center gap-1.5 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
                    <CheckCircle2 className="w-4 h-4" />
                    INTI PENTING KLINIS
                  </div>
                  <p className="text-white text-xs sm:text-sm font-semibold leading-relaxed">
                    "{slide.clinicalHighlight}"
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-800/80 mt-4 text-[10px] text-slate-400">
                  Sumber: <span className="text-slate-300 font-medium">{slide.sourceCitation}</span>
                </div>
              </div>
            </div>

            {/* AI Explanation Accordion if triggered */}
            {aiExplanation && (
              <div className="bg-purple-950/30 border border-purple-800/40 p-4 rounded-3xl animate-fadeIn">
                <div className="flex items-center gap-2 text-purple-300 font-bold text-xs uppercase tracking-wider mb-2">
                  <Sparkles className="w-4 h-4 text-purple-400" />
                  Penjelasan Klinis Mendalam Dosen AI:
                </div>
                <p className="text-xs sm:text-sm text-purple-100/90 leading-relaxed whitespace-pre-line">
                  {aiExplanation}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Thumbnail Drawer Modal / Bottom Strip */}
        {showThumbnails && (
          <div className="p-3 bg-slate-950/90 border-t border-slate-800 flex items-center gap-2 overflow-x-auto no-scrollbar">
            {SLIDES_DATA.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => {
                  setCurrentSlideIndex(idx);
                  setShowThumbnails(false);
                }}
                className={`w-28 p-2 rounded-xl text-left shrink-0 border transition-all ${
                  idx === currentSlideIndex
                    ? 'bg-sky-600 border-white text-white shadow'
                    : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700'
                }`}
              >
                <div className="text-[10px] font-bold text-sky-200">Slide {s.slideNumber}</div>
                <div className="text-[11px] font-bold truncate mt-0.5">{s.title}</div>
              </button>
            ))}
          </div>
        )}

        {/* Bottom Slide Controller Bar */}
        <div className="p-3 sm:p-4 bg-slate-950/80 border-t border-slate-800 flex items-center justify-between">
          <button
            onClick={handlePrev}
            disabled={currentSlideIndex === 0}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 disabled:opacity-30 text-white text-xs font-bold rounded-xl flex items-center gap-1.5 cursor-pointer disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Sebelumnya</span>
          </button>

          <span className="text-xs font-semibold text-slate-400">
            Slide <span className="text-white font-bold">{currentSlideIndex + 1}</span> dari <span className="text-white font-bold">{SLIDES_DATA.length}</span>
          </span>

          <button
            onClick={handleNext}
            disabled={currentSlideIndex === SLIDES_DATA.length - 1}
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
