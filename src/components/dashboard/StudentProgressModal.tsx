import React, { useState } from 'react';
import { X, Award, CheckCircle2, BookOpen, HelpCircle, Stethoscope, Download, Printer } from 'lucide-react';
import { StudentProgress } from '../../types/medical';

interface StudentProgressModalProps {
  progress: StudentProgress;
  onClose: () => void;
  onUpdateStudentInfo: (name: string, nim: string) => void;
}

export const StudentProgressModal: React.FC<StudentProgressModalProps> = ({
  progress,
  onClose,
  onUpdateStudentInfo,
}) => {
  const [name, setName] = useState(progress.studentName || 'Mahasiswi Keperawatan Rajawali');
  const [nim, setNim] = useState(progress.nim || '2201045');
  const [isEditing, setIsEditing] = useState(false);
  const [showCertificate, setShowCertificate] = useState(false);

  const totalSlides = 40;
  const totalCases = 30;
  const totalQuestions = 30;

  const slidesPercent = Math.round((progress.completedSlides.length / totalSlides) * 100);
  const casesPercent = Math.round((progress.completedCases.length / totalCases) * 100);

  const latestQuiz = progress.quizAttempts[progress.quizAttempts.length - 1];
  const examScore = latestQuiz ? latestQuiz.score : 0;

  const avgCaseScore =
    Object.values(progress.caseScores).length > 0
      ? Math.round(
          Object.values(progress.caseScores).reduce((a, b) => a + b, 0) /
            Object.values(progress.caseScores).length
        )
      : 0;

  const overallMastery = Math.round((slidesPercent * 0.3) + (casesPercent * 0.4) + (examScore * 0.3));

  const handleSaveInfo = () => {
    onUpdateStudentInfo(name, nim);
    setIsEditing(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-slate-950/85 backdrop-blur-md overflow-hidden">
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-700 rounded-3xl shadow-2xl flex flex-col max-h-[92vh] overflow-hidden">
        {/* Header */}
        <div className="p-4 sm:p-5 bg-gradient-to-r from-slate-900 via-sky-950/70 to-slate-900 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-sky-500 to-teal-400 flex items-center justify-center shadow">
              <Award className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-xs font-bold text-sky-400 bg-sky-950 px-2.5 py-0.5 rounded-full border border-sky-800">
                PROGRES & KOMPETENSI KLINIS
              </span>
              <h2 className="text-base sm:text-lg font-bold text-white mt-0.5">
                Buku Log & Capaian Pembelajaran Efek Samping Obat
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5 text-slate-200">
          {/* Student Profile Card */}
          <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="text-[11px] font-bold text-sky-400 uppercase tracking-wider">
                MAHASISWA KEPERAWATAN
              </div>
              {!isEditing ? (
                <div>
                  <h3 className="text-lg font-black text-white">{name}</h3>
                  <p className="text-xs text-slate-400 mt-0.5">NIM: {nim} • Institut Kesehatan Rajawali</p>
                </div>
              ) : (
                <div className="flex flex-col sm:flex-row gap-2 mt-2">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nama Lengkap"
                    className="bg-slate-900 border border-slate-700 rounded-xl px-3 py-1.5 text-xs text-white"
                  />
                  <input
                    type="text"
                    value={nim}
                    onChange={(e) => setNim(e.target.value)}
                    placeholder="NIM"
                    className="bg-slate-900 border border-slate-700 rounded-xl px-3 py-1.5 text-xs text-white"
                  />
                  <button
                    onClick={handleSaveInfo}
                    className="px-3 py-1.5 bg-sky-600 text-white rounded-xl text-xs font-bold"
                  >
                    Simpan
                  </button>
                </div>
              )}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold rounded-xl border border-slate-700"
              >
                {isEditing ? 'Batal' : 'Ubah Profil'}
              </button>
              <button
                onClick={() => setShowCertificate(true)}
                className="px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white text-xs font-bold rounded-xl shadow active:scale-95 flex items-center gap-1.5"
              >
                <Award className="w-4 h-4" />
                <span>Sertifikat Kelulusan</span>
              </button>
            </div>
          </div>

          {/* 3 Pillars Metric Bars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="bg-slate-800/60 p-4 rounded-2xl border border-slate-700">
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="font-bold text-sky-400 flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4" /> 40 Slide Teori
                </span>
                <span className="font-mono font-bold text-white">{progress.completedSlides.length} / 40</span>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-900 overflow-hidden">
                <div className="h-full bg-sky-500 rounded-full transition-all" style={{ width: `${slidesPercent}%` }} />
              </div>
            </div>

            <div className="bg-slate-800/60 p-4 rounded-2xl border border-slate-700">
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="font-bold text-teal-400 flex items-center gap-1.5">
                  <Stethoscope className="w-4 h-4" /> 30 Kasus Klinis
                </span>
                <span className="font-mono font-bold text-white">{progress.completedCases.length} / 30</span>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-900 overflow-hidden">
                <div className="h-full bg-teal-500 rounded-full transition-all" style={{ width: `${casesPercent}%` }} />
              </div>
            </div>

            <div className="bg-slate-800/60 p-4 rounded-2xl border border-slate-700">
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="font-bold text-amber-400 flex items-center gap-1.5">
                  <HelpCircle className="w-4 h-4" /> Nilai Ujian Akhir
                </span>
                <span className="font-mono font-bold text-white">{examScore} / 100</span>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-900 overflow-hidden">
                <div className="h-full bg-amber-500 rounded-full transition-all" style={{ width: `${examScore}%` }} />
              </div>
            </div>
          </div>

          {/* 10 Aspek Penilaian Keperawatan Standar */}
          <div className="bg-slate-800/50 p-5 rounded-2xl border border-slate-700 space-y-3">
            <h4 className="font-bold text-slate-300 text-xs uppercase tracking-wider">
              10 Aspek Capaian Kompetensi Praktik Klinik Keperawatan:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {[
                '1. Ketepatan Anamnesis Riwayat Obat & Onset Keluhan',
                '2. Ketepatan Identifikasi Jenis & Klasifikasi ESO (Tipe A / B)',
                '3. Ketepatan Membaca Nilai Kritis Laboratorium (Triptase/Kreatinin/G6PD)',
                '4. Pemeriksaan Fisik & Deteksi Edema / Bula / Nikolsky Sign',
                '5. Kemampuan Menentukan Tanda Bahaya (Red Flags) Kegawatan',
                '6. Prioritas Tindakan Keperawatan (ABC & Lini Pertama Epinefrin)',
                '7. Komunikasi Efektif dengan Dokter Penanggung Jawab (SBAR)',
                '8. Komunikasi Edukatif & Empati kepada Keluarga Pasien',
                '9. Dokumentasi Asuhan Keperawatan Faktual & Kronologis',
                '10. Pelaporan Farmakovigilans Formulir Kuning MESO BPOM',
              ].map((comp, idx) => (
                <div key={idx} className="flex items-center gap-2 p-2 bg-slate-900/60 rounded-xl border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-slate-200">{comp}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certificate Modal Overlay */}
        {showCertificate && (
          <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md">
            <div className="relative w-full max-w-2xl bg-white text-slate-900 p-8 rounded-3xl shadow-2xl border-8 border-sky-600 flex flex-col items-center text-center space-y-4">
              <button
                onClick={() => setShowCertificate(false)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-800"
              >
                <X className="w-6 h-6" />
              </button>

              <img src="/assets/aistudio/image_01bd58a6.png" alt="Logo Rajawali" className="w-20 h-20 object-contain" />
              
              <div className="space-y-1">
                <h4 className="text-xs font-bold tracking-widest text-sky-800 uppercase">
                  INSTITUT KESEHATAN RAJAWALI BANDUNG
                </h4>
                <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                  SERTIFIKAT KELULUSAN SIMULASI KLINIK
                </h2>
                <p className="text-xs text-slate-600 font-semibold">
                  Program Pembelajaran Efek Samping Obat (ESO) Berbasis 3D
                </p>
              </div>

              <div className="py-3 border-y border-slate-200 w-full space-y-1">
                <p className="text-xs text-slate-500">Diberikan kepada:</p>
                <h3 className="text-xl font-black text-sky-700">{name}</h3>
                <p className="text-xs font-mono font-bold text-slate-600">NIM: {nim}</p>
                <p className="text-xs text-slate-600 mt-2">
                  Telah menyelesaikan 40 Slide Pembelajaran, 30 Simulasi Kasus Reaksi Obat, dan Bank Soal Ujian dengan Indeks Kelulusan: <strong className="text-emerald-600 text-sm">{overallMastery}%</strong>
                </p>
              </div>

              <div className="w-full flex justify-between items-end pt-4 px-6 text-xs text-slate-600">
                <div className="text-left">
                  <p>Bandung, {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                  <p className="font-bold text-slate-800 mt-8">Institut Kesehatan Rajawali</p>
                </div>
                <div className="text-right">
                  <p>Penyusun Materi & Verifikator:</p>
                  <p className="font-bold text-sky-900 underline mt-8">dr. Juwita Ninda Suherman, M.Kes.</p>
                </div>
              </div>

              <button
                onClick={() => window.print()}
                className="mt-2 px-5 py-2.5 bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs rounded-xl shadow flex items-center gap-1.5"
              >
                <Printer className="w-4 h-4" />
                <span>Cetak Sertifikat</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
