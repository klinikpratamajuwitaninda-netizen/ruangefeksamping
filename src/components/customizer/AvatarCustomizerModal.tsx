import React, { useState } from 'react';
import { X, Check, Volume2, VolumeX, Sparkles, User, Palette } from 'lucide-react';
import { hospitalAudio } from '../../utils/audioSynthesis';

interface AvatarCustomizerModalProps {
  currentConfig: {
    hijabColor: string;
    scrubColor: string;
    studentName: string;
    isMuted: boolean;
  };
  onSave: (config: { hijabColor: string; scrubColor: string; studentName: string; isMuted: boolean }) => void;
  onClose: () => void;
}

export const AvatarCustomizerModal: React.FC<AvatarCustomizerModalProps> = ({
  currentConfig,
  onSave,
  onClose,
}) => {
  const [hijabColor, setHijabColor] = useState(currentConfig.hijabColor || '#0f172a');
  const [scrubColor, setScrubColor] = useState(currentConfig.scrubColor || '#0284c7');
  const [studentName, setStudentName] = useState(currentConfig.studentName || 'Ners Aisyah');
  const [isMuted, setIsMuted] = useState(currentConfig.isMuted || false);

  const hijabOptions = [
    { name: 'Navy Deep', color: '#0f172a' },
    { name: 'Putih Bersih', color: '#f8fafc' },
    { name: 'Toska Medis', color: '#0f766e' },
    { name: 'Maroon', color: '#881337' },
    { name: 'Biru Langit', color: '#0284c7' },
    { name: 'Dusty Rose', color: '#9d174d' },
    { name: 'Abu Charcoal', color: '#334155' },
  ];

  const scrubOptions = [
    { name: 'Medical Cyan', color: '#0284c7' },
    { name: 'Sage Green', color: '#059669' },
    { name: 'Royal Navy', color: '#1e3a8a' },
    { name: 'Teal Dark', color: '#115e59' },
    { name: 'Plum Violet', color: '#6b21a8' },
    { name: 'White Coat', color: '#f1f5f9' },
  ];

  const handleApply = () => {
    hospitalAudio.setMuted(isMuted);
    hospitalAudio.playInteractionChime();
    onSave({ hijabColor, scrubColor, studentName, isMuted });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 bg-slate-950/85 backdrop-blur-md overflow-hidden">
      <div className="relative w-full max-w-lg bg-slate-900 border border-slate-700 rounded-3xl shadow-2xl p-6 flex flex-col space-y-5">
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-sky-500 to-teal-400 flex items-center justify-center shadow">
              <Palette className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Kustomisasi Karakter & Audio</h3>
              <p className="text-xs text-slate-400">Pilih warna hijab, seragam scrub, dan nama perawat</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Name Tag Input */}
        <div>
          <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
            Nama Mahasiswi pada Name Tag:
          </label>
          <input
            type="text"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
            placeholder="Contoh: Ners Sarah, S.Kep."
          />
        </div>

        {/* Hijab Color Selection */}
        <div>
          <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
            Pilihan Warna Hijab:
          </label>
          <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
            {hijabOptions.map((h) => (
              <button
                key={h.color}
                onClick={() => setHijabColor(h.color)}
                style={{ backgroundColor: h.color }}
                className={`w-10 h-10 rounded-2xl border-2 flex items-center justify-center transition-transform active:scale-90 shadow ${
                  hijabColor === h.color ? 'border-sky-400 scale-110 ring-4 ring-sky-500/30' : 'border-slate-700'
                }`}
                title={h.name}
              >
                {hijabColor === h.color && (
                  <Check className={`w-4 h-4 ${h.color === '#f8fafc' ? 'text-slate-900' : 'text-white'}`} />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Scrub Uniform Color Selection */}
        <div>
          <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
            Pilihan Warna Seragam Scrub:
          </label>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
            {scrubOptions.map((s) => (
              <button
                key={s.color}
                onClick={() => setScrubColor(s.color)}
                style={{ backgroundColor: s.color }}
                className={`w-10 h-10 rounded-2xl border-2 flex items-center justify-center transition-transform active:scale-90 shadow ${
                  scrubColor === s.color ? 'border-sky-400 scale-110 ring-4 ring-sky-500/30' : 'border-slate-700'
                }`}
                title={s.name}
              >
                {scrubColor === s.color && (
                  <Check className={`w-4 h-4 ${s.color === '#f1f5f9' ? 'text-slate-900' : 'text-white'}`} />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Audio Mute Setting */}
        <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {isMuted ? <VolumeX className="w-5 h-5 text-rose-400" /> : <Volume2 className="w-5 h-5 text-emerald-400" />}
            <span className="text-xs font-bold text-slate-300">Suara Efek Rumah Sakit & TTS</span>
          </div>
          <button
            onClick={() => setIsMuted(!isMuted)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              isMuted
                ? 'bg-rose-950 text-rose-300 border border-rose-800'
                : 'bg-emerald-950 text-emerald-300 border border-emerald-800'
            }`}
          >
            {isMuted ? 'TERBUNGKAM (MUTED)' : 'AKTIF (ON)'}
          </button>
        </div>

        {/* Save button */}
        <button
          onClick={handleApply}
          className="w-full py-3 bg-gradient-to-r from-sky-500 to-teal-500 hover:from-sky-600 hover:to-teal-600 text-white font-bold text-sm rounded-2xl shadow-lg transition-transform active:scale-95 cursor-pointer"
        >
          Terapkan & Simpan Karakter
        </button>
      </div>
    </div>
  );
};
