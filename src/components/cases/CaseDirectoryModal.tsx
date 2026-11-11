import React, { useState } from 'react';
import { X, Search, Filter, ShieldAlert, CheckCircle2, Play, Stethoscope } from 'lucide-react';
import { CLINICAL_CASES } from '../../data/clinicalCasesData';
import { ClinicalCase } from '../../types/medical';

interface CaseDirectoryModalProps {
  onClose: () => void;
  onSelectCase: (caseItem: ClinicalCase) => void;
  completedCaseIds: number[];
}

export const CaseDirectoryModal: React.FC<CaseDirectoryModalProps> = ({
  onClose,
  onSelectCase,
  completedCaseIds,
}) => {
  const [selectedGroup, setSelectedGroup] = useState<number | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const groups = [
    { num: 1, label: 'Kel. 1: Metabolik & Reaksi Akut (1-5)' },
    { num: 2, label: 'Kel. 2: Toksisitas Organ & Perdarahan (6-14)' },
    { num: 3, label: 'Kel. 3: Neurologis & Kardiovaskular (15-20)' },
    { num: 4, label: 'Kel. 4: Imunologis & Hematologis (21-26)' },
    { num: 5, label: 'Kel. 5: Reaksi Khusus & Genetik (27-30)' },
  ];

  const filteredCases = CLINICAL_CASES.filter((c) => {
    const matchesGroup = selectedGroup === 'all' || c.groupNumber === selectedGroup;
    const matchesSearch =
      c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.patientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.suspectedESO.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.caseCode.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesGroup && matchesSearch;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-slate-950/85 backdrop-blur-md overflow-hidden">
      <div className="relative w-full max-w-5xl bg-slate-900 border border-slate-700 rounded-3xl shadow-2xl flex flex-col max-h-[92vh] overflow-hidden">
        {/* Header */}
        <div className="p-4 sm:p-5 bg-gradient-to-r from-slate-900 via-sky-950/70 to-slate-900 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-sky-500 to-teal-400 flex items-center justify-center shadow">
              <Stethoscope className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-sky-400 bg-sky-950 px-2.5 py-0.5 rounded-full border border-sky-800">
                  DIREKTORI 30 KASUS KLINIS ESO
                </span>
                <span className="text-xs text-slate-400 font-semibold">
                  Selesai: {completedCaseIds.length} / {CLINICAL_CASES.length}
                </span>
              </div>
              <h2 className="text-base sm:text-lg font-bold text-white mt-0.5">
                Simulasi Kasus Reaksi Obat & Praktik Keperawatan Mandiri
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

        {/* Filters and Search Bar */}
        <div className="p-4 bg-slate-950/60 border-b border-slate-800 flex flex-col md:flex-row items-center gap-3">
          {/* Search Input */}
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari nama kasus, obat, keluhan, atau diagnosis ESO..."
              className="w-full bg-slate-800 text-white placeholder-slate-400 text-xs sm:text-sm pl-10 pr-4 py-2.5 rounded-xl border border-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>

          {/* Group Filter Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto no-scrollbar">
            <button
              onClick={() => setSelectedGroup('all')}
              className={`px-3 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                selectedGroup === 'all'
                  ? 'bg-sky-600 text-white shadow'
                  : 'bg-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              Semua (30)
            </button>
            {groups.map((g) => (
              <button
                key={g.num}
                onClick={() => setSelectedGroup(g.num)}
                className={`px-3 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  selectedGroup === g.num
                    ? 'bg-sky-600 text-white shadow'
                    : 'bg-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                {g.label}
              </button>
            ))}
          </div>
        </div>

        {/* Cases Grid */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredCases.map((c) => {
            const isCompleted = completedCaseIds.includes(c.id);
            return (
              <div
                key={c.id}
                onClick={() => {
                  onSelectCase(c);
                  onClose();
                }}
                className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between hover:shadow-xl hover:border-sky-500/60 group ${
                  isCompleted
                    ? 'bg-slate-800/40 border-emerald-500/40'
                    : 'bg-slate-800/70 border-slate-700/80 hover:bg-slate-800'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-bold text-sky-400 bg-sky-950 px-2.5 py-0.5 rounded-full border border-sky-800">
                      {c.caseCode}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                        c.triageLevel.includes('Merah') ? 'bg-rose-950/80 text-rose-400 border-rose-800' :
                        c.triageLevel.includes('Kuning') ? 'bg-amber-950/80 text-amber-400 border-amber-800' :
                        'bg-emerald-950/80 text-emerald-400 border-emerald-800'
                      }`}>
                        {c.triageLevel}
                      </span>
                      {isCompleted && (
                        <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded-full border border-emerald-700">
                          <CheckCircle2 className="w-3 h-3" /> SELESAI
                        </span>
                      )}
                    </div>
                  </div>

                  <h3 className="font-bold text-white text-sm sm:text-base group-hover:text-sky-300 transition-colors line-clamp-2">
                    {c.title}
                  </h3>
                  <div className="text-xs text-slate-400 mt-1 flex items-center gap-1.5">
                    <span>Pasien: <strong className="text-slate-200">{c.patientName}</strong> ({c.age} th)</span>
                    <span>•</span>
                    <span className="text-sky-400 font-semibold">{c.roomLocation}</span>
                  </div>

                  <p className="text-xs text-slate-300/80 mt-2 line-clamp-2 leading-relaxed italic">
                    "{c.chiefComplaint}"
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-700/60 mt-3 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-slate-400 bg-slate-900 px-2.5 py-1 rounded-lg">
                    {c.esoType}
                  </span>

                  <span className="text-xs font-bold text-sky-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Mulai Simulasi</span>
                    <Play className="w-3.5 h-3.5 fill-sky-400" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
