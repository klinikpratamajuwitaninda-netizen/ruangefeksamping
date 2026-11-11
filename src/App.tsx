import React, { useState, useEffect } from 'react';
import { 
  Hospital, BookOpen, HelpCircle, Stethoscope, Award, 
  Settings, Volume2, VolumeX, Menu, Play, Sparkles, ChevronRight, MapPin
} from 'lucide-react';
import { Hospital3DScene } from './components/3d/Hospital3DScene';
import { VirtualJoystick } from './components/3d/VirtualJoystick';
import { InteractiveHotspot } from './components/3d/hospitalWorld';
import { VoiceNPCDialogue } from './components/dialogue/VoiceNPCDialogue';
import { ClinicalCaseModal } from './components/cases/ClinicalCaseModal';
import { CaseDirectoryModal } from './components/cases/CaseDirectoryModal';
import { SlideViewerModal } from './components/learning/SlideViewerModal';
import { QuestionBankModal } from './components/quiz/QuestionBankModal';
import { StudentProgressModal } from './components/dashboard/StudentProgressModal';
import { AvatarCustomizerModal } from './components/customizer/AvatarCustomizerModal';
import { MiniMapModal } from './components/3d/MiniMapModal';
import { CLINICAL_CASES } from './data/clinicalCasesData';
import { ClinicalCase, StudentProgress } from './types/medical';
import { hospitalAudio } from './utils/audioSynthesis';

export default function App() {
  // Navigation View State
  const [activeView, setActiveView] = useState<'3d_sim' | 'dashboard'>('3d_sim');

  // Modals state
  const [activeCaseModal, setActiveCaseModal] = useState<ClinicalCase | null>(null);
  const [showCaseDirectory, setShowCaseDirectory] = useState(false);
  const [showSlideViewer, setShowSlideViewer] = useState(false);
  const [showQuestionBank, setShowQuestionBank] = useState(false);
  const [showStudentProgress, setShowStudentProgress] = useState(false);
  const [showCustomizer, setShowCustomizer] = useState(false);
  const [showMapModal, setShowMapModal] = useState(false);

  // Voice NPC Dialogue State
  const [voiceDialogueState, setVoiceDialogueState] = useState<{
    isOpen: boolean;
    speakerName: string;
    speakerRole: 'pasien' | 'dokter' | 'perawat' | 'keluarga' | 'apoteker' | 'lab';
    emotion?: string;
    caseContext?: ClinicalCase | null;
  }>({
    isOpen: false,
    speakerName: '',
    speakerRole: 'pasien',
    emotion: 'cemas',
    caseContext: null,
  });

  // Joystick & Controls State
  const [joystickInput, setJoystickInput] = useState<{ x: number; y: number; active: boolean }>({
    x: 0,
    y: 0,
    active: false,
  });
  const [isRunning, setIsRunning] = useState(false);
  const [activeNearbyHotspot, setActiveNearbyHotspot] = useState<InteractiveHotspot | null>(null);

  // Student Profile & Progress (Stored in localStorage)
  const [progress, setProgress] = useState<StudentProgress>(() => {
    const saved = localStorage.getItem('rajawali_student_progress');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.warn('Failed parsing saved progress:', e);
      }
    }
    return {
      studentName: 'Ners Sarah, S.Kep.',
      nim: '2201048',
      completedSlides: [1],
      completedCases: [],
      caseScores: {},
      quizAttempts: [],
      highScore: 0,
      customAvatar: {
        hijabColor: '#0f172a',
        scrubColor: '#0284c7',
        shoeColor: '#ffffff',
        skinTone: '#fed7aa',
      },
      audioMuted: false,
    };
  });

  // Save progress changes to localStorage
  useEffect(() => {
    localStorage.setItem('rajawali_student_progress', JSON.stringify(progress));
  }, [progress]);

  // Audio mute sync
  useEffect(() => {
    hospitalAudio.setMuted(progress.audioMuted);
  }, [progress.audioMuted]);

  // Handle Hotspot Interaction in 3D Scene
  const handleTriggerInteraction = (hotspot: InteractiveHotspot) => {
    if (hotspot.type === 'patient_case' && hotspot.caseId) {
      const foundCase = CLINICAL_CASES.find((c) => c.id === hotspot.caseId);
      if (foundCase) {
        setActiveCaseModal(foundCase);
      }
    } else if (hotspot.type === 'doctor') {
      setVoiceDialogueState({
        isOpen: true,
        speakerName: hotspot.dialogueSpeaker,
        speakerRole: 'dokter',
        emotion: 'tenang',
      });
    } else if (hotspot.type === 'pharmacist') {
      setVoiceDialogueState({
        isOpen: true,
        speakerName: hotspot.dialogueSpeaker,
        speakerRole: 'apoteker',
        emotion: 'tenang',
      });
    } else if (hotspot.type === 'lab_tech') {
      setVoiceDialogueState({
        isOpen: true,
        speakerName: hotspot.dialogueSpeaker,
        speakerRole: 'lab',
        emotion: 'tenang',
      });
    } else if (hotspot.type === 'family') {
      setVoiceDialogueState({
        isOpen: true,
        speakerName: hotspot.dialogueSpeaker,
        speakerRole: 'keluarga',
        emotion: 'cemas',
      });
    } else if (hotspot.type === 'computer') {
      setShowCaseDirectory(true);
    } else if (hotspot.type === 'med_cart') {
      setShowSlideViewer(true);
    }
  };

  const handleOpenVoiceDialogue = (
    speakerName: string,
    role: 'pasien' | 'dokter' | 'keluarga',
    emotion: string = 'cemas'
  ) => {
    setVoiceDialogueState({
      isOpen: true,
      speakerName,
      speakerRole: role,
      emotion,
      caseContext: activeCaseModal,
    });
  };

  const handleCompleteCase = (caseId: number, score: number) => {
    setProgress((prev) => {
      const copy = { ...prev };
      if (!copy.completedCases.includes(caseId)) {
        copy.completedCases = [...copy.completedCases, caseId];
      }
      copy.caseScores[caseId] = Math.max(copy.caseScores[caseId] || 0, score);
      return copy;
    });
  };

  const handleCompleteSlide = (slideId: number) => {
    setProgress((prev) => {
      if (prev.completedSlides.includes(slideId)) return prev;
      return {
        ...prev,
        completedSlides: [...prev.completedSlides, slideId],
      };
    });
  };

  const handleRecordQuizScore = (score: number, total: number) => {
    setProgress((prev) => ({
      ...prev,
      quizAttempts: [
        ...prev.quizAttempts,
        {
          date: new Date().toLocaleDateString('id-ID'),
          score,
          totalQuestions: total,
          details: {},
        },
      ],
      highScore: Math.max(prev.highScore, score),
    }));
  };

  const handleUpdateStudentProfile = (name: string, nim: string) => {
    setProgress((prev) => ({
      ...prev,
      studentName: name,
      nim,
    }));
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-slate-950 font-sans text-slate-100 flex flex-col">
      {/* Top Professional Portal Header */}
      <header className="h-16 px-3 sm:px-6 bg-slate-900/95 border-b border-slate-800 flex items-center justify-between z-30 select-none shrink-0 shadow-md">
        <div className="flex items-center gap-3">
          <img
            src="/assets/aistudio/image_01bd58a6.png"
            alt="Logo Institut Kesehatan Rajawali"
            className="w-10 h-10 object-contain drop-shadow"
          />
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xs sm:text-sm font-black text-white tracking-wide uppercase">
                RAJAWALI MEDICAL SIMULATION
              </h1>
              <span className="hidden md:inline-block text-[10px] font-bold text-sky-400 bg-sky-950 px-2 py-0.5 rounded-full border border-sky-800">
                EFEK SAMPING OBAT (ESO)
              </span>
            </div>
            <p className="text-[10px] text-slate-400 hidden sm:block">
              Disusun oleh: <strong className="text-slate-200">dr. Juwita Ninda Suherman, M.Kes.</strong> • Institut Kesehatan Rajawali
            </p>
          </div>
        </div>

        {/* Header Navigation Actions */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* View Mode Toggle */}
          <button
            onClick={() => setActiveView(activeView === '3d_sim' ? 'dashboard' : '3d_sim')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 shadow transition-all cursor-pointer ${
              activeView === '3d_sim'
                ? 'bg-gradient-to-r from-sky-500 to-teal-500 text-white ring-2 ring-sky-400/30'
                : 'bg-slate-800 text-slate-300 hover:text-white'
            }`}
          >
            <Hospital className="w-4 h-4" />
            <span className="hidden sm:inline">{activeView === '3d_sim' ? '🎮 GAME 3D RS' : 'DASHBOARD'}</span>
          </button>

          {/* Quick 30 Cases Button */}
          <button
            onClick={() => setShowCaseDirectory(true)}
            className="p-2 sm:px-3 sm:py-1.5 bg-slate-800 hover:bg-slate-750 text-sky-400 hover:text-white text-xs font-bold rounded-xl border border-slate-700/80 shadow flex items-center gap-1.5"
            title="30 Kasus Klinis ESO"
          >
            <Stethoscope className="w-4 h-4" />
            <span className="hidden md:inline">30 Kasus ({progress.completedCases.length}/30)</span>
          </button>

          {/* Slide Learning Button */}
          <button
            onClick={() => setShowSlideViewer(true)}
            className="p-2 sm:px-3 sm:py-1.5 bg-slate-800 hover:bg-slate-750 text-teal-400 hover:text-white text-xs font-bold rounded-xl border border-slate-700/80 shadow flex items-center gap-1.5"
            title="Buka 40 Slide Pembelajaran"
          >
            <BookOpen className="w-4 h-4" />
            <span className="hidden md:inline">40 Slide ({progress.completedSlides.length}/40)</span>
          </button>

          {/* Question Bank Exam Button */}
          <button
            onClick={() => setShowQuestionBank(true)}
            className="p-2 sm:px-3 sm:py-1.5 bg-slate-800 hover:bg-slate-750 text-amber-400 hover:text-white text-xs font-bold rounded-xl border border-slate-700/80 shadow flex items-center gap-1.5"
            title="30 Soal Ujian"
          >
            <HelpCircle className="w-4 h-4" />
            <span className="hidden md:inline">Bank Soal (30)</span>
          </button>

          {/* Student Progress Badge */}
          <button
            onClick={() => setShowStudentProgress(true)}
            className="p-2 sm:px-3 sm:py-1.5 bg-slate-800 hover:bg-slate-750 text-purple-400 hover:text-white text-xs font-bold rounded-xl border border-slate-700/80 shadow flex items-center gap-1.5"
            title="Progres & Sertifikat"
          >
            <Award className="w-4 h-4" />
            <span className="hidden lg:inline">{progress.studentName.split(' ')[0]}</span>
          </button>

          {/* Avatar Customizer */}
          <button
            onClick={() => setShowCustomizer(true)}
            className="p-2 bg-slate-800 hover:bg-slate-750 text-slate-300 hover:text-white rounded-xl border border-slate-700/80"
            title="Kustomisasi Karakter & Audio"
          >
            <Settings className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="flex-1 relative overflow-hidden">
        {/* VIEW A: 3D INTERACTIVE HOSPITAL GAME */}
        <div className={`w-full h-full relative ${activeView === '3d_sim' ? 'block' : 'hidden'}`}>
          <Hospital3DScene
            studentConfig={{
              hijabColor: progress.customAvatar.hijabColor,
              scrubColor: progress.customAvatar.scrubColor,
              studentName: progress.studentName,
            }}
            joystickInput={joystickInput}
            isRunning={isRunning}
            activeNearbyHotspot={activeNearbyHotspot}
            setActiveNearbyHotspot={setActiveNearbyHotspot}
            onTriggerInteraction={handleTriggerInteraction}
          />

          {/* Mobile On-Screen Virtual Joystick & Action Buttons */}
          <VirtualJoystick
            onMove={setJoystickInput}
            isRunning={isRunning}
            setIsRunning={setIsRunning}
            activeHotspot={activeNearbyHotspot}
            onInteract={() => {
              if (activeNearbyHotspot) {
                hospitalAudio.playInteractionChime();
                handleTriggerInteraction(activeNearbyHotspot);
              }
            }}
            onExamine={() => {
              if (activeNearbyHotspot && activeNearbyHotspot.caseId) {
                const found = CLINICAL_CASES.find((c) => c.id === activeNearbyHotspot.caseId);
                if (found) setActiveCaseModal(found);
              } else {
                setShowCaseDirectory(true);
              }
            }}
            onOpenEMR={() => setShowCaseDirectory(true)}
            onOpenMap={() => setShowMapModal(true)}
          />
        </div>

        {/* VIEW B: PORTAL DASHBOARD MAHASISWA */}
        {activeView === 'dashboard' && (
          <div className="w-full h-full overflow-y-auto p-4 sm:p-6 md:p-8 space-y-6 max-w-6xl mx-auto">
            {/* Hero Welcome Banner */}
            <div className="bg-gradient-to-r from-sky-950/70 via-slate-900 to-slate-900 p-6 sm:p-8 rounded-3xl border border-sky-500/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-sky-400 uppercase tracking-widest">
                  PORTAL PEMBELAJARAN INTERAKTIF
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-white">
                  Selamat Datang, {progress.studentName}
                </h2>
                <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
                  Lakukan praktik klinik virtual di Rumah Sakit 3D Rajawali. Jelajahi 15 ruangan, wawancarai pasien dengan suara nyata, berdiskusi dengan dokter menggunakan metode SBAR, dan tangani 30 kasus efek samping obat.
                </p>
                <div className="pt-2 flex flex-wrap gap-3">
                  <button
                    onClick={() => setActiveView('3d_sim')}
                    className="px-5 py-3 bg-gradient-to-r from-sky-500 to-teal-500 hover:from-sky-600 hover:to-teal-600 text-white font-bold text-sm rounded-2xl shadow-lg flex items-center gap-2 active:scale-95 cursor-pointer"
                  >
                    <Play className="w-4 h-4 fill-white" />
                    <span>Masuk ke Rumah Sakit 3D</span>
                  </button>
                  <button
                    onClick={() => setShowSlideViewer(true)}
                    className="px-4 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-sm rounded-2xl border border-slate-700 shadow flex items-center gap-2 cursor-pointer"
                  >
                    <BookOpen className="w-4 h-4 text-sky-400" />
                    <span>Buka 40 Slide Presentasi</span>
                  </button>
                </div>
              </div>

              <div className="w-36 h-36 rounded-3xl bg-slate-800/80 border border-sky-500/30 p-4 flex flex-col items-center justify-center text-center shadow-lg shrink-0">
                <img src="/assets/aistudio/image_01bd58a6.png" alt="Logo" className="w-16 h-16 object-contain mb-1" />
                <span className="text-[10px] font-bold text-slate-400 uppercase">INSTITUT KESEHATAN</span>
                <span className="text-xs font-black text-sky-400">RAJAWALI</span>
              </div>
            </div>

            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div
                onClick={() => setShowSlideViewer(true)}
                className="bg-slate-900/80 p-5 rounded-3xl border border-slate-800 hover:border-sky-500/60 transition-all cursor-pointer shadow hover:shadow-xl group"
              >
                <div className="flex items-center justify-between text-slate-400 mb-2">
                  <BookOpen className="w-5 h-5 text-sky-400 group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] font-bold uppercase tracking-wider">TEORI</span>
                </div>
                <div className="text-2xl sm:text-3xl font-black text-white">{progress.completedSlides.length} / 40</div>
                <div className="text-xs text-slate-400 mt-1">Slide PPT Selesai</div>
              </div>

              <div
                onClick={() => setShowCaseDirectory(true)}
                className="bg-slate-900/80 p-5 rounded-3xl border border-slate-800 hover:border-teal-500/60 transition-all cursor-pointer shadow hover:shadow-xl group"
              >
                <div className="flex items-center justify-between text-slate-400 mb-2">
                  <Stethoscope className="w-5 h-5 text-teal-400 group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] font-bold uppercase tracking-wider">SIMULASI</span>
                </div>
                <div className="text-2xl sm:text-3xl font-black text-white">{progress.completedCases.length} / 30</div>
                <div className="text-xs text-slate-400 mt-1">Kasus Klinis Selesai</div>
              </div>

              <div
                onClick={() => setShowQuestionBank(true)}
                className="bg-slate-900/80 p-5 rounded-3xl border border-slate-800 hover:border-amber-500/60 transition-all cursor-pointer shadow hover:shadow-xl group"
              >
                <div className="flex items-center justify-between text-slate-400 mb-2">
                  <HelpCircle className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] font-bold uppercase tracking-wider">UJIAN</span>
                </div>
                <div className="text-2xl sm:text-3xl font-black text-white">{progress.highScore} / 100</div>
                <div className="text-xs text-slate-400 mt-1">Skor Bank Soal Tertinggi</div>
              </div>

              <div
                onClick={() => setShowStudentProgress(true)}
                className="bg-slate-900/80 p-5 rounded-3xl border border-slate-800 hover:border-purple-500/60 transition-all cursor-pointer shadow hover:shadow-xl group"
              >
                <div className="flex items-center justify-between text-slate-400 mb-2">
                  <Award className="w-5 h-5 text-purple-400 group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] font-bold uppercase tracking-wider">PRESTASI</span>
                </div>
                <div className="text-2xl sm:text-3xl font-black text-white">
                  {Math.round((progress.completedCases.length / 30) * 100)}%
                </div>
                <div className="text-xs text-slate-400 mt-1">Indeks Kompetensi Klinis</div>
              </div>
            </div>

            {/* Main Learning Hub Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card 1: 30 Clinical Cases Launchpad */}
              <div className="bg-slate-900/80 p-6 rounded-3xl border border-slate-800 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-teal-400 uppercase tracking-wider">
                      SIMULASI PASIEN 3D
                    </span>
                    <span className="text-xs text-slate-400 font-semibold">30 Kasus Nyata</span>
                  </div>
                  <h3 className="text-lg font-bold text-white">
                    30 Kasus Klinis Reaksi Efek Samping Obat
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed mt-1">
                    Tangani kasus gawat darurat seperti Anafilaksis Ceftriaxone, Hipoglikemia Insulin, Gangguan Ginjal Akut akibat Polifarmasi, hingga Sindrom Stevens-Johnson (SJS) akibat Lamotrigin.
                  </p>
                </div>

                <div className="pt-2 flex items-center justify-between border-t border-slate-800">
                  <span className="text-xs text-slate-400">
                    Selesai: <strong className="text-white">{progress.completedCases.length}</strong> / 30 kasus
                  </span>
                  <button
                    onClick={() => setShowCaseDirectory(true)}
                    className="px-4 py-2 bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs rounded-xl shadow flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Buka Direktori Kasus</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Card 2: 40 Slides Lecture Course */}
              <div className="bg-slate-900/80 p-6 rounded-3xl border border-slate-800 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-sky-400 uppercase tracking-wider">
                      MATERI KULIAH LENGKAP
                    </span>
                    <span className="text-xs text-slate-400 font-semibold">40 Slide Presentasi</span>
                  </div>
                  <h3 className="text-lg font-bold text-white">
                    Slide Pembelajaran Efek Samping Obat (ESO)
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed mt-1">
                    Bahan ajar komprehensif dr. Juwita Ninda Suherman, M.Kes. mencakup sejarah keamanan obat, ESO Tipe A & B, mekanisme hipersensitivitas Gell & Coombs, toksisitas organ, farmakogenetika G6PD, dan pelaporan MESO BPOM.
                  </p>
                </div>

                <div className="pt-2 flex items-center justify-between border-t border-slate-800">
                  <span className="text-xs text-slate-400">
                    Selesai: <strong className="text-white">{progress.completedSlides.length}</strong> / 40 slide
                  </span>
                  <button
                    onClick={() => setShowSlideViewer(true)}
                    className="px-4 py-2 bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs rounded-xl shadow flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Buka Slide Viewer</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Footer Copyright and Accreditation */}
            <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
              <div className="flex items-center gap-2">
                <span>© Institut Kesehatan Rajawali Bandung. Hak Cipta Dilindungi.</span>
              </div>
              <div>
                <span>Penyusun Materi: <strong>dr. Juwita Ninda Suherman, M.Kes.</strong></span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ================= MODALS ================= */}

      {/* 1. Voice NPC Dialogue Modal */}
      {voiceDialogueState.isOpen && (
        <VoiceNPCDialogue
          speakerName={voiceDialogueState.speakerName}
          speakerRole={voiceDialogueState.speakerRole}
          emotion={voiceDialogueState.emotion}
          caseContext={voiceDialogueState.caseContext}
          onClose={() => setVoiceDialogueState((prev) => ({ ...prev, isOpen: false }))}
        />
      )}

      {/* 2. Interactive Patient Clinical Case Modal */}
      {activeCaseModal && (
        <ClinicalCaseModal
          caseItem={activeCaseModal}
          onClose={() => setActiveCaseModal(null)}
          onOpenVoiceDialogue={handleOpenVoiceDialogue}
          onCompleteCase={handleCompleteCase}
        />
      )}

      {/* 3. 30 Clinical Cases Directory Modal */}
      {showCaseDirectory && (
        <CaseDirectoryModal
          completedCaseIds={progress.completedCases}
          onSelectCase={(selectedCase) => setActiveCaseModal(selectedCase)}
          onClose={() => setShowCaseDirectory(false)}
        />
      )}

      {/* 4. Interactive 40 Slides Viewer Modal */}
      {showSlideViewer && (
        <SlideViewerModal
          onClose={() => setShowSlideViewer(false)}
          onCompleteSlide={handleCompleteSlide}
        />
      )}

      {/* 5. 30 Questions Exam Bank Modal */}
      {showQuestionBank && (
        <QuestionBankModal
          onClose={() => setShowQuestionBank(false)}
          onRecordScore={handleRecordQuizScore}
        />
      )}

      {/* 6. Student Progress & Certificate Modal */}
      {showStudentProgress && (
        <StudentProgressModal
          progress={progress}
          onClose={() => setShowStudentProgress(false)}
          onUpdateStudentInfo={handleUpdateStudentProfile}
        />
      )}

      {/* 7. Avatar Customizer & Audio Settings Modal */}
      {showCustomizer && (
        <AvatarCustomizerModal
          currentConfig={{
            hijabColor: progress.customAvatar.hijabColor,
            scrubColor: progress.customAvatar.scrubColor,
            studentName: progress.studentName,
            isMuted: progress.audioMuted,
          }}
          onSave={(cfg) => {
            setProgress((prev) => ({
              ...prev,
              studentName: cfg.studentName,
              audioMuted: cfg.isMuted,
              customAvatar: {
                ...prev.customAvatar,
                hijabColor: cfg.hijabColor,
                scrubColor: cfg.scrubColor,
              },
            }));
          }}
          onClose={() => setShowCustomizer(false)}
        />
      )}

      {/* 8. Hospital 15 Rooms Minimap Modal */}
      {showMapModal && (
        <MiniMapModal
          onClose={() => setShowMapModal(false)}
          onTeleport={(x, z, roomName) => {
            // Scene will handle teleport via custom event or state
            const ev = new CustomEvent('teleport_player', { detail: { x, z, roomName } });
            window.dispatchEvent(ev);
          }}
        />
      )}
    </div>
  );
}
