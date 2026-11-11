import React, { useState } from 'react';
import { 
  X, HeartPulse, Activity, FileText, CheckCircle2, AlertTriangle, 
  MessageSquare, Stethoscope, Pill, ShieldAlert, FileSpreadsheet, 
  Send, UserCheck, Award, ArrowRight
} from 'lucide-react';
import { ClinicalCase } from '../../types/medical';
import { hospitalAudio } from '../../utils/audioSynthesis';

interface ClinicalCaseModalProps {
  caseItem: ClinicalCase;
  onClose: () => void;
  onOpenVoiceDialogue: (speakerName: string, role: 'pasien' | 'dokter' | 'keluarga', emotion?: string) => void;
  onCompleteCase: (caseId: number, score: number) => void;
}

export const ClinicalCaseModal: React.FC<ClinicalCaseModalProps> = ({
  caseItem,
  onClose,
  onOpenVoiceDialogue,
  onCompleteCase,
}) => {
  const [activeTab, setActiveTab] = useState<'chart' | 'vitals' | 'lab' | 'actions' | 'sbar' | 'meso' | 'review'>('chart');
  const [selectedActions, setSelectedActions] = useState<string[]>([]);
  const [actionFeedbacks, setActionFeedbacks] = useState<Record<string, { isCorrect: boolean; text: string }>>({});
  const [isCaseSubmitted, setIsCaseSubmitted] = useState(false);
  const [calculatedScore, setCalculatedScore] = useState(0);

  // MESO Form State
  const [mesoNurseNote, setMesoNurseNote] = useState(
    `Reaksi timbul pasca pemberian ${caseItem.medicationHistory.find(m => m.isSuspectedDrug)?.drugName || 'obat'}. Tanda vital awal menunjukkan instabilitas. Tindakan awal dan pelaporan telah dilaksanakan.`
  );

  const handleActionToggle = (actionId: string) => {
    if (isCaseSubmitted) return;

    const action = caseItem.nurseInterventions.find((a) => a.id === actionId);
    if (!action) return;

    if (selectedActions.includes(actionId)) {
      setSelectedActions(selectedActions.filter((id) => id !== actionId));
      const copy = { ...actionFeedbacks };
      delete copy[actionId];
      setActionFeedbacks(copy);
    } else {
      setSelectedActions([...selectedActions, actionId]);
      setActionFeedbacks((prev) => ({
        ...prev,
        [actionId]: {
          isCorrect: action.isCorrect,
          text: action.feedback,
        },
      }));

      if (action.isCorrect) {
        hospitalAudio.playInteractionChime();
      } else {
        hospitalAudio.playEmergencyAlarm();
      }
    }
  };

  const handleSubmitEvaluation = () => {
    let score = 0;
    const maxScore = caseItem.nurseInterventions
      .filter((a) => a.isCorrect)
      .reduce((acc, curr) => acc + curr.scoreWeight, 0);

    caseItem.nurseInterventions.forEach((a) => {
      const isSelected = selectedActions.includes(a.id);
      if (isSelected && a.isCorrect) {
        score += a.scoreWeight;
      } else if (isSelected && !a.isCorrect) {
        score += a.scoreWeight; // penalty
      }
    });

    const finalPercentage = Math.max(0, Math.min(100, Math.round((score / (maxScore || 100)) * 100)));
    setCalculatedScore(finalPercentage);
    setIsCaseSubmitted(true);
    setActiveTab('review');
    onCompleteCase(caseItem.id, finalPercentage);
    hospitalAudio.playInteractionChime();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-slate-950/85 backdrop-blur-md overflow-hidden">
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-700 rounded-3xl shadow-2xl flex flex-col max-h-[92vh] overflow-hidden">
        {/* Top Header */}
        <div className="p-4 md:p-5 bg-gradient-to-r from-slate-900 via-sky-950/70 to-slate-900 border-b border-slate-700/80 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-sky-500 to-teal-400 flex items-center justify-center shadow">
              <Stethoscope className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-sky-400 bg-sky-950 px-2.5 py-0.5 rounded-full border border-sky-800">
                  {caseItem.caseCode}
                </span>
                <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full border ${
                  caseItem.triageLevel.includes('Merah') ? 'bg-rose-950/80 text-rose-400 border-rose-800' :
                  caseItem.triageLevel.includes('Kuning') ? 'bg-amber-950/80 text-amber-400 border-amber-800' :
                  'bg-emerald-950/80 text-emerald-400 border-emerald-800'
                }`}>
                  {caseItem.triageLevel}
                </span>
              </div>
              <h2 className="text-base sm:text-lg font-bold text-white mt-0.5 line-clamp-1">{caseItem.title}</h2>
              <p className="text-xs text-slate-400">
                Pasien: {caseItem.patientName} ({caseItem.age} th, {caseItem.gender}) • Lokasi: {caseItem.roomLocation}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onOpenVoiceDialogue(caseItem.patientName, 'pasien', 'kesakitan')}
              className="hidden sm:flex items-center gap-1.5 px-3 py-2 bg-gradient-to-r from-sky-500 to-teal-500 text-white text-xs font-bold rounded-xl shadow hover:from-sky-600 hover:to-teal-600 active:scale-95 transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Bicara dengan Pasien</span>
            </button>
            <button
              onClick={onClose}
              className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-1 px-4 py-2 bg-slate-950/60 border-b border-slate-800 overflow-x-auto no-scrollbar">
          {[
            { id: 'chart', label: '1. Rekam Medis & Riwayat', icon: FileText },
            { id: 'vitals', label: '2. Tanda Vital & Fisik', icon: Activity },
            { id: 'lab', label: '3. Hasil Laboratorium', icon: FileSpreadsheet },
            { id: 'actions', label: '4. Tindakan Keperawatan', icon: HeartPulse },
            { id: 'sbar', label: '5. Konsultasi SBAR Dokter', icon: UserCheck },
            { id: 'meso', label: '6. Pelaporan MESO BPOM', icon: Pill },
            { id: 'review', label: '7. Evaluasi & Nilai', icon: Award },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-sky-600 text-white shadow'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Body */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6 text-slate-200 text-sm space-y-5">
          {/* TAB 1: REKAM MEDIS & ANAMNESIS */}
          {activeTab === 'chart' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="bg-slate-800/70 p-4 rounded-2xl border border-slate-700/60">
                <h4 className="font-bold text-sky-400 text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <ShieldAlert className="w-4 h-4 text-amber-400" />
                  Keluhan Utama Pasien
                </h4>
                <p className="text-white text-base font-semibold leading-relaxed">
                  "{caseItem.chiefComplaint}"
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-800/50 p-4 rounded-2xl border border-slate-700/50">
                  <h4 className="font-bold text-slate-300 text-xs uppercase tracking-wider mb-2">
                    Riwayat Penyakit & Anamnesis Mendalam
                  </h4>
                  <p className="text-slate-300 leading-relaxed text-xs sm:text-sm">
                    {caseItem.anamnesis}
                  </p>
                </div>

                <div className="bg-slate-800/50 p-4 rounded-2xl border border-slate-700/50">
                  <h4 className="font-bold text-slate-300 text-xs uppercase tracking-wider mb-2">
                    Daftar Riwayat Obat yang Dikonsumsi
                  </h4>
                  <div className="space-y-2">
                    {caseItem.medicationHistory.map((med, idx) => (
                      <div
                        key={idx}
                        className={`p-2.5 rounded-xl border flex items-center justify-between text-xs ${
                          med.isSuspectedDrug
                            ? 'bg-rose-950/40 border-rose-800/80 text-rose-200'
                            : 'bg-slate-900/60 border-slate-700 text-slate-300'
                        }`}
                      >
                        <div>
                          <div className="font-bold flex items-center gap-1.5">
                            <Pill className={`w-3.5 h-3.5 ${med.isSuspectedDrug ? 'text-rose-400' : 'text-slate-400'}`} />
                            <span>{med.drugName} ({med.dose})</span>
                          </div>
                          <div className="text-[11px] text-slate-400">
                            {med.route} • {med.timing} • Indikasi: {med.indication}
                          </div>
                        </div>
                        {med.isSuspectedDrug && (
                          <span className="bg-rose-600/30 text-rose-300 text-[10px] font-bold px-2 py-0.5 rounded-full border border-rose-500/40">
                            SUSPEK ESO
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Red Flags / Tanda Bahaya */}
              <div className="bg-rose-950/30 border border-rose-900/60 p-4 rounded-2xl">
                <h4 className="font-bold text-rose-400 text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4" />
                  Tanda Bahaya Klinis (Red Flags) yang Wajib Diwaspadai Perawat:
                </h4>
                <ul className="list-disc list-inside space-y-1 text-xs text-rose-200">
                  {caseItem.redFlags.map((rf, idx) => (
                    <li key={idx} className="font-medium">{rf}</li>
                  ))}
                </ul>
              </div>

              {/* Action buttons to trigger dialogue */}
              <div className="flex flex-wrap gap-2 pt-2">
                <button
                  onClick={() => onOpenVoiceDialogue(caseItem.patientName, 'pasien', 'kesakitan')}
                  className="px-4 py-2.5 bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold rounded-xl shadow flex items-center gap-2 active:scale-95"
                >
                  <MessageSquare className="w-4 h-4" />
                  Wawancara Pasien (Anamnesis Suara)
                </button>
                <button
                  onClick={() => onOpenVoiceDialogue('Keluarga ' + caseItem.patientName, 'keluarga', 'cemas')}
                  className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-purple-300 text-xs font-bold rounded-xl border border-purple-500/30 shadow flex items-center gap-2 active:scale-95"
                >
                  <MessageSquare className="w-4 h-4" />
                  Wawancara Keluarga Pasien
                </button>
                <button
                  onClick={() => setActiveTab('vitals')}
                  className="ml-auto px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold rounded-xl flex items-center gap-1.5"
                >
                  <span>Lanjut ke Tanda Vital</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* TAB 2: TANDA VITAL & PEMERIKSAAN FISIK */}
          {activeTab === 'vitals' && (
            <div className="space-y-4 animate-fadeIn">
              {/* Vitals Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                <div className="bg-slate-800/80 p-3 rounded-2xl border border-slate-700 flex flex-col items-center text-center">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">TEKANAN DARAH</span>
                  <span className="text-base sm:text-lg font-black text-rose-400 mt-1">{caseItem.vitalSigns.bloodPressure}</span>
                  <span className="text-[10px] text-slate-400">mmHg</span>
                </div>
                <div className="bg-slate-800/80 p-3 rounded-2xl border border-slate-700 flex flex-col items-center text-center">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">DENYUT NADI</span>
                  <span className="text-base sm:text-lg font-black text-emerald-400 mt-1">{caseItem.vitalSigns.heartRate}</span>
                  <span className="text-[10px] text-slate-400">kali/menit</span>
                </div>
                <div className="bg-slate-800/80 p-3 rounded-2xl border border-slate-700 flex flex-col items-center text-center">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">FREK. NAPAS</span>
                  <span className="text-base sm:text-lg font-black text-cyan-400 mt-1">{caseItem.vitalSigns.respiratoryRate}</span>
                  <span className="text-[10px] text-slate-400">kali/menit</span>
                </div>
                <div className="bg-slate-800/80 p-3 rounded-2xl border border-slate-700 flex flex-col items-center text-center">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">SUHU TUBUH</span>
                  <span className="text-base sm:text-lg font-black text-amber-400 mt-1">{caseItem.vitalSigns.temperature}°C</span>
                  <span className="text-[10px] text-slate-400">Axilla</span>
                </div>
                <div className="bg-slate-800/80 p-3 rounded-2xl border border-slate-700 flex flex-col items-center text-center">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">SATURASI O2</span>
                  <span className="text-base sm:text-lg font-black text-sky-400 mt-1">{caseItem.vitalSigns.spO2}%</span>
                  <span className="text-[10px] text-slate-400">Room Air</span>
                </div>
                <div className="bg-slate-800/80 p-3 rounded-2xl border border-slate-700 flex flex-col items-center text-center">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">KESADARAN GCS</span>
                  <span className="text-xs sm:text-sm font-black text-purple-400 mt-2">{caseItem.vitalSigns.gcs}</span>
                </div>
              </div>

              {/* Physical Exam Details */}
              <div className="bg-slate-800/60 p-4 rounded-2xl border border-slate-700">
                <h4 className="font-bold text-sky-400 text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Stethoscope className="w-4 h-4 text-sky-400" />
                  Temuan Pemeriksaan Fisik Objektif Dokter & Perawat:
                </h4>
                <p className="text-slate-200 text-xs sm:text-sm leading-relaxed whitespace-pre-line">
                  {caseItem.physicalExamDoctor}
                </p>
              </div>

              <div className="flex justify-end pt-2">
                <button
                  onClick={() => setActiveTab('lab')}
                  className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold rounded-xl flex items-center gap-1.5"
                >
                  <span>Lihat Hasil Laboratorium</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* TAB 3: HASIL LABORATORIUM */}
          {activeTab === 'lab' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="bg-slate-800/60 rounded-2xl border border-slate-700 overflow-hidden">
                <div className="p-3 bg-slate-800 border-b border-slate-700 flex items-center justify-between">
                  <h4 className="font-bold text-white text-xs uppercase tracking-wider flex items-center gap-1.5">
                    <FileSpreadsheet className="w-4 h-4 text-teal-400" />
                    Lembar Verifikasi Pemeriksaan Laboratorium Patologi Klinis
                  </h4>
                  <span className="text-[11px] text-slate-400">Instalasi Laboratorium RS Rajawali</span>
                </div>

                <div className="divide-y divide-slate-700/60 text-xs">
                  {caseItem.labResults.map((item, idx) => (
                    <div
                      key={idx}
                      className={`p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 ${
                        item.isAbnormal ? 'bg-rose-950/20' : 'hover:bg-slate-850'
                      }`}
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-white text-sm">{item.testName}</span>
                          {item.isAbnormal ? (
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-rose-500/20 text-rose-400 border border-rose-500/30">
                              ABNORMAL / KRITIS
                            </span>
                          ) : (
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                              NORMAL
                            </span>
                          )}
                        </div>
                        <div className="text-slate-400 text-xs mt-0.5">
                          Nilai Rujukan Normal: <span className="text-slate-300 font-mono">{item.normalRange} {item.unit}</span>
                        </div>
                      </div>

                      <div className="sm:text-right">
                        <div className={`text-base font-black font-mono ${item.isAbnormal ? 'text-rose-400' : 'text-emerald-400'}`}>
                          {item.resultValue} {item.unit}
                        </div>
                        <div className="text-[11px] text-sky-300 font-medium max-w-xs sm:ml-auto">
                          {item.clinicalSignificance}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-end pt-2">
                <button
                  onClick={() => setActiveTab('actions')}
                  className="px-4 py-2.5 bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold rounded-xl flex items-center gap-1.5 shadow"
                >
                  <span>Pilih Tindakan Keperawatan</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* TAB 4: TINDAKAN KEPERAWATAN BERCABANG */}
          {activeTab === 'actions' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="bg-sky-950/40 p-4 rounded-2xl border border-sky-800/40">
                <h4 className="font-bold text-sky-400 text-xs uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  Prioritas Tindakan Keperawatan Klinis:
                </h4>
                <p className="text-white text-xs sm:text-sm font-semibold">
                  {caseItem.primaryActionPriority}
                </p>
              </div>

              <div className="space-y-3">
                <div className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                  Pilihlah Intervensi Keperawatan yang Tepat (Pilihan Bercabang):
                </div>

                {caseItem.nurseInterventions.map((action) => {
                  const isSelected = selectedActions.includes(action.id);
                  const fb = actionFeedbacks[action.id];
                  return (
                    <div
                      key={action.id}
                      onClick={() => handleActionToggle(action.id)}
                      className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                        isSelected
                          ? action.isCorrect
                            ? 'bg-emerald-950/40 border-emerald-500 text-white shadow-lg'
                            : 'bg-rose-950/50 border-rose-500 text-white shadow-lg'
                          : 'bg-slate-800/60 hover:bg-slate-800 border-slate-700/80 text-slate-300'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-5 h-5 rounded-lg border flex items-center justify-center shrink-0 ${
                              isSelected
                                ? action.isCorrect
                                  ? 'bg-emerald-500 border-emerald-400 text-white'
                                  : 'bg-rose-500 border-rose-400 text-white'
                                : 'border-slate-600'
                            }`}
                          >
                            {isSelected && (action.isCorrect ? '✓' : '✗')}
                          </div>
                          <span className="font-semibold text-xs sm:text-sm">{action.actionName}</span>
                        </div>
                        <span className="text-[11px] text-slate-400 shrink-0 font-mono">
                          {action.scoreWeight > 0 ? `+${action.scoreWeight} Poin` : `${action.scoreWeight} Poin`}
                        </span>
                      </div>

                      {/* Immediate Clinical Consequence & Feedback */}
                      {fb && (
                        <div
                          className={`mt-3 pt-3 border-t text-xs leading-relaxed ${
                            fb.isCorrect ? 'border-emerald-800 text-emerald-300' : 'border-rose-800 text-rose-300'
                          }`}
                        >
                          <div className="font-bold mb-0.5">
                            {fb.isCorrect ? '✓ KEPUTUSAN BENAR:' : '⚠ KONSEKUENSI SALAH:'}
                          </div>
                          <p>{fb.text}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Submit Button */}
              {!isCaseSubmitted ? (
                <div className="flex justify-end pt-3">
                  <button
                    onClick={handleSubmitEvaluation}
                    disabled={selectedActions.length === 0}
                    className="px-6 py-3 bg-gradient-to-r from-sky-500 to-teal-500 hover:from-sky-600 hover:to-teal-600 disabled:opacity-40 text-white font-bold text-xs sm:text-sm rounded-xl shadow-lg transition-transform active:scale-95 cursor-pointer disabled:cursor-not-allowed"
                  >
                    Kirim & Nilai Tindakan Keperawatan
                  </button>
                </div>
              ) : (
                <div className="flex justify-end pt-3">
                  <button
                    onClick={() => setActiveTab('review')}
                    className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm rounded-xl shadow flex items-center gap-2"
                  >
                    <span>Lihat Rapor Evaluasi ({calculatedScore}%)</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          )}

          {/* TAB 5: SBAR DOKTER */}
          {activeTab === 'sbar' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="bg-slate-800/70 p-4 rounded-2xl border border-slate-700">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-bold text-sky-400 text-xs uppercase tracking-wider flex items-center gap-1.5">
                    <UserCheck className="w-4 h-4 text-sky-400" />
                    Protokol Komunikasi Efektif Antar Tenaga Kesehatan (SBAR):
                  </h4>
                  <button
                    onClick={() => onOpenVoiceDialogue('dr. Juwita Ninda Suherman, M.Kes.', 'dokter', 'tenang')}
                    className="px-3 py-1.5 bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold rounded-lg shadow flex items-center gap-1.5"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    Bicara dengan Dokter
                  </button>
                </div>

                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-700">
                    <span className="font-bold text-sky-400">S (Situation): </span>
                    <span className="text-slate-200">{caseItem.doctorConsultSBAR.situation}</span>
                  </div>
                  <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-700">
                    <span className="font-bold text-teal-400">B (Background): </span>
                    <span className="text-slate-200">{caseItem.doctorConsultSBAR.background}</span>
                  </div>
                  <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-700">
                    <span className="font-bold text-amber-400">A (Assessment): </span>
                    <span className="text-slate-200">{caseItem.doctorConsultSBAR.assessment}</span>
                  </div>
                  <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-700">
                    <span className="font-bold text-rose-400">R (Recommendation): </span>
                    <span className="text-slate-200">{caseItem.doctorConsultSBAR.recommendation}</span>
                  </div>
                </div>
              </div>

              {/* Instruksi Dokter */}
              <div className="bg-slate-800/50 p-4 rounded-2xl border border-slate-700">
                <h4 className="font-bold text-slate-300 text-xs uppercase tracking-wider mb-2">
                  Instruksi Medis Dokter Penanggung Jawab (DPJP):
                </h4>
                <ul className="list-disc list-inside space-y-1.5 text-xs text-slate-200">
                  {caseItem.doctorOrders.map((order, idx) => (
                    <li key={idx}>{order}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* TAB 6: FORMULIR MESO BPOM */}
          {activeTab === 'meso' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="bg-amber-950/20 p-4 rounded-2xl border border-amber-800/40">
                <div className="flex items-center gap-2 mb-2 text-amber-400 font-bold text-xs uppercase tracking-wider">
                  <Pill className="w-4 h-4" />
                  Formulir Pelaporan Efek Samping Obat (Formulir Kuning MESO BPOM RI):
                </div>
                <p className="text-xs text-amber-200 leading-relaxed">
                  Prinsip Farmakovigilans: "Laporkan dugaan efek samping obat meskipun hubungan sebab-akibat (kausalitas) belum terbukti pasti!"
                </p>
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <label className="block text-slate-400 font-bold mb-1">Deskripsi Manifestasi ESO & Kronologi:</label>
                  <input
                    type="text"
                    readOnly
                    value={caseItem.mesoReport.eventDescription}
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-2.5 text-slate-200 focus:outline-none"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-400 font-bold mb-1">Tingkat Kegawatan Reaksi:</label>
                    <input
                      type="text"
                      readOnly
                      value={caseItem.mesoReport.severityDegree}
                      className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-2.5 text-slate-200 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 font-bold mb-1">Tindakan Penyelamatan Awal:</label>
                    <input
                      type="text"
                      readOnly
                      value={caseItem.mesoReport.immediateAction}
                      className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-2.5 text-slate-200 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-400 font-bold mb-1">Catatan Keperawatan Tambahan (SPO Dokumentasi):</label>
                  <textarea
                    rows={3}
                    value={mesoNurseNote}
                    onChange={(e) => setMesoNurseNote(e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>
              </div>
            </div>
          )}

          {/* TAB 7: REVIEW DAN NILAI */}
          {activeTab === 'review' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-sky-500 to-teal-400 flex items-center justify-center text-white text-2xl font-black shadow-lg">
                    {calculatedScore}%
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base">
                      {calculatedScore >= 80 ? 'Kompetensi Sangat Baik (Lulus Sempurna)' : calculatedScore >= 60 ? 'Kompetensi Cukup (Lulus Bersyarat)' : 'Perlu Remedial Intervensi'}
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {calculatedScore >= 80 ? 'Anda berhasil memprioritaskan keselamatan pasien dan mencegah bahaya ESO fatal.' : 'Pelajari kembali panduan lini pertama dan tanda bahaya obat.'}
                    </p>
                  </div>
                </div>

                <button
                  onClick={onClose}
                  className="px-5 py-2.5 bg-gradient-to-r from-sky-500 to-teal-500 text-white font-bold text-xs rounded-xl shadow active:scale-95 cursor-pointer"
                >
                  Selesai & Tutup Kasus
                </button>
              </div>

              {/* Rujukan & Pembahasan Ilmiah */}
              <div className="bg-slate-800/50 p-4 rounded-2xl border border-slate-700">
                <h4 className="font-bold text-slate-300 text-xs uppercase tracking-wider mb-1.5">
                  Referensi Ilmiah & Landasan Klinis dr. Juwita Ninda Suherman, M.Kes.:
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {caseItem.references}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
