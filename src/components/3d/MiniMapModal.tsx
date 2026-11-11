import React from 'react';
import { X, MapPin, Navigation, Compass } from 'lucide-react';

interface MiniMapModalProps {
  onClose: () => void;
  onTeleport: (x: number, z: number, roomName: string) => void;
}

export const MiniMapModal: React.FC<MiniMapModalProps> = ({ onClose, onTeleport }) => {
  const rooms = [
    { name: '1. Lobby RS & Informasi', desc: 'Pintu Masuk & Resepsionis', x: 0, z: 5, color: 'bg-sky-600', icon: '🏥' },
    { name: '2. Nurse Station Pusat', desc: 'Counter Perawat & Komputer EMR', x: 0, z: -6, color: 'bg-blue-600', icon: '📋' },
    { name: '3. Ruang IGD Resusitasi', desc: 'Bed Trauma & Kasus Anafilaksis', x: -20, z: -16, color: 'bg-rose-600', icon: '🚨' },
    { name: '4. Rawat Inap Melati', desc: 'Kasus 1 (Insulin), 5 (SJS), 6, 7', x: 18, z: -18, color: 'bg-indigo-600', icon: '🛏️' },
    { name: '5. Rawat Inap Dahlia', desc: 'Kasus 3 (Ginjal), 13 (Lithium), 14, 15', x: 18, z: 18, color: 'bg-purple-600', icon: '🛏️' },
    { name: '6. Ruang ICU', desc: 'Ventilator & Kasus 30 Suksinilkolin', x: -20, z: -25, color: 'bg-red-700', icon: '🫁' },
    { name: '7. Ruang Dokter Konsultasi', desc: 'dr. Juwita Ninda Suherman, M.Kes.', x: 0, z: -23, color: 'bg-amber-600', icon: '👨‍⚕️' },
    { name: '8. Ruang Tindakan Bedah', desc: 'Meja Bedah & Lampu Operasi', x: -20, z: -2, color: 'bg-teal-600', icon: '🔬' },
    { name: '9. Ruang Farmasi Klinis', desc: 'Apoteker & Rak Obat Resep', x: -20, z: 16, color: 'bg-emerald-600', icon: '💊' },
    { name: '10. Laboratorium RS', desc: 'Analis & Pemeriksaan Darah', x: 20, z: 16, color: 'bg-cyan-600', icon: '🧪' },
    { name: '11. Ruang Observasi Pasien', desc: 'Observasi Reaksi Post-Obat', x: -20, z: 6, color: 'bg-sky-700', icon: '👁️' },
    { name: '12. Ruang Rapat Medis', desc: 'Meja Konferensi & Diskusi Kasus', x: 0, z: 24, color: 'bg-slate-700', icon: '👥' },
    { name: '13. Ruang Keluarga Pasien', desc: 'Sofa Tunggu & Konseling', x: 7, z: 12, color: 'bg-violet-700', icon: '🛋️' },
    { name: '14. Ruang Edukasi Pasien', desc: 'Papan Edukasi Farmakologi', x: -7, z: 12, color: 'bg-blue-700', icon: '🎓' },
    { name: '15. Koridor Utama RS', desc: 'Jalur Penghubung Antar-Sayap', x: 0, z: 0, color: 'bg-slate-600', icon: '🚪' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 bg-slate-950/85 backdrop-blur-md overflow-hidden">
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-700 rounded-3xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="p-4 sm:p-5 bg-gradient-to-r from-slate-900 via-sky-950/70 to-slate-900 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-sky-500 to-teal-400 flex items-center justify-center shadow">
              <Compass className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-sky-400 uppercase tracking-wider">
                DIREKTORI DENAH 15 RUANGAN
              </span>
              <h3 className="text-base font-bold text-white">Peta Rumah Sakit & Teleportasi Cepat</h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Rooms Grid */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {rooms.map((r, idx) => (
            <div
              key={idx}
              onClick={() => {
                onTeleport(r.x, r.z, r.name);
                onClose();
              }}
              className="p-3.5 bg-slate-800/70 hover:bg-slate-800 border border-slate-700 rounded-2xl transition-all cursor-pointer flex items-center gap-3 hover:border-sky-500 shadow active:scale-95 group"
            >
              <div className={`w-10 h-10 rounded-xl ${r.color} flex items-center justify-center text-lg shadow shrink-0 text-white`}>
                {r.icon}
              </div>
              <div className="flex-1 truncate">
                <h4 className="font-bold text-xs sm:text-sm text-white group-hover:text-sky-300 transition-colors truncate">
                  {r.name}
                </h4>
                <p className="text-[11px] text-slate-400 truncate">{r.desc}</p>
              </div>
              <Navigation className="w-4 h-4 text-sky-400 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
