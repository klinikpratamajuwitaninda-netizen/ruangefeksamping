import React, { useState, useEffect, useRef } from 'react';
import { Mic, MicOff, Volume2, Send, RefreshCw, X, ShieldAlert, HeartPulse, User } from 'lucide-react';
import { hospitalAudio } from '../../utils/audioSynthesis';
import { hospitalSpeech } from '../../utils/speechRecognition';
import { ClinicalCase } from '../../types/medical';

interface DialogueMessage {
  id: string;
  sender: 'student' | 'npc';
  senderName: string;
  text: string;
  emotion?: string;
  timestamp: string;
}

interface VoiceNPCDialogueProps {
  speakerName: string;
  speakerRole: 'pasien' | 'dokter' | 'perawat' | 'keluarga' | 'apoteker' | 'lab';
  gender?: 'female' | 'male';
  age?: number;
  initialEmotion?: string;
  emotion?: string;
  caseContext?: ClinicalCase | null;
  onClose: () => void;
  onActionSelect?: (action: string) => void;
}

export const VoiceNPCDialogue: React.FC<VoiceNPCDialogueProps> = ({
  speakerName,
  speakerRole,
  gender = 'female',
  age = 35,
  initialEmotion,
  emotion = 'cemas',
  caseContext,
  onClose,
  onActionSelect,
}) => {
  const [messages, setMessages] = useState<DialogueMessage[]>([]);
  const [inputText, setInputText] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [currentEmotion, setCurrentEmotion] = useState(emotion || initialEmotion || 'cemas');
  const [isLoadingReply, setIsLoadingReply] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Suggested quick prompts based on clinical context
  const getSuggestions = () => {
    if (speakerRole === 'pasien') {
      return [
        'Selamat pagi Ibu/Bapak, bagaimana keluhan yang dirasakan sekarang?',
        'Sejak kapan keluhan ini muncul? Apakah setelah disuntik/minum obat?',
        'Apakah Ibu/Bapak memiliki riwayat alergi obat sebelumnya?',
        'Apakah ada rasa sesak napas, gatal, atau bibir terasa bengkak?',
      ];
    } else if (speakerRole === 'dokter') {
      return [
        'Lapor Dokter, tanda vital pasien: tensi menurun dan terdapat urtikaria.',
        'Hasil laboratorium menunjukkan peningkatan kreatinin dan kalium, Dok.',
        'Apakah kami boleh menunda pemberian antibiotik tersangka ini, Dok?',
        'Mohon konfirmasi instruksi terapi lini pertama darurat, Dok.',
      ];
    } else if (speakerRole === 'keluarga') {
      return [
        'Selamat pagi Ibu/Bapak, kami tim perawat yang merawat pasien.',
        'Bisa diceritakan obat apa saja yang diminum pasien di rumah sebelum masuk RS?',
        'Keluarga tidak perlu panik, kami sedang memberikan tindakan penanganan segera.',
      ];
    } else if (speakerRole === 'apoteker') {
      return [
        'Mohon konfirmasi interaksi antara warfarin dan aspirin pada pasien ini.',
        'Berapa penyesuaian dosis gentamisin untuk pasien dengan eGFR 27 mL/menit?',
        'Apakah ada alternatif antibiotik non-beta-laktam untuk pasien suspek anafilaksis?',
      ];
    } else {
      return [
        'Bisa tolong laporkan tanda vital terbaru pasien saat ini?',
        'Troli emergensi dan oksigen sudah siap di dekat bed pasien.',
      ];
    }
  };

  const suggestions = getSuggestions();

  // Send initial NPC greeting on open
  useEffect(() => {
    let initialGreeting = `Halo Ners, ada yang bisa saya bantu?`;
    if (speakerRole === 'pasien') {
      if (caseContext) {
        initialGreeting = `Aduh Sus... ${caseContext.chiefComplaint}`;
      } else {
        initialGreeting = `Aduh Sus, badan saya rasanya lemas dan tidak nyaman sekali setelah dapat obat tadi...`;
      }
    } else if (speakerRole === 'dokter') {
      initialGreeting = `Halo Ners. Bagaimana hasil pemantauan klinis dan kondisi tanda vital pasien saat ini? Apakah ada tanda efek samping obat?`;
    } else if (speakerRole === 'keluarga') {
      initialGreeting = `Suster, tolong lihat ibu saya! Kenapa setelah dapat obat tadi kondisinya jadi begini?`;
    } else if (speakerRole === 'apoteker') {
      initialGreeting = `Halo Ners dari Farmasi Klinis. Ada resep atau potensi interaksi obat yang perlu kita rekonsiliasi bersama?`;
    }

    const firstMsg: DialogueMessage = {
      id: 'init-1',
      sender: 'npc',
      senderName: speakerName,
      text: initialGreeting,
      emotion: initialEmotion,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages([firstMsg]);

    // Speak initial greeting
    hospitalAudio.speakCharacter(
      initialGreeting,
      speakerRole,
      initialEmotion,
      gender,
      age,
      () => setIsSpeaking(true),
      () => setIsSpeaking(false)
    );

    return () => {
      hospitalAudio.stopSpeaking();
      hospitalSpeech.stopListening();
    };
  }, [speakerName, speakerRole, initialEmotion, gender, age, caseContext]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoadingReply]);

  // Handle Voice Microphone Input
  const toggleListening = () => {
    if (isListening) {
      hospitalSpeech.stopListening();
      setIsListening(false);
    } else {
      const started = hospitalSpeech.startListening(
        (transcript, isFinal) => {
          setInputText(transcript);
          if (isFinal) {
            handleSendMessage(transcript);
            hospitalSpeech.stopListening();
            setIsListening(false);
          }
        },
        (listening) => setIsListening(listening)
      );

      if (!started) {
        setMessages((prev) => [
          ...prev,
          {
            id: `sys-${Date.now()}`,
            sender: 'npc',
            senderName: 'Sistem Audio',
            text: 'ℹ️ Mikrofon belum aktif atau tidak didukung di browser ini. Anda dapat mengetik langsung pertanyaan pada kolom pesan di bawah atau memilih saran pertanyaan.',
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          },
        ]);
      }
    }
  };

  const handleSendMessage = async (userTextToSend?: string) => {
    const text = (userTextToSend || inputText).trim();
    if (!text || isLoadingReply) return;

    setInputText('');

    const userMsg: DialogueMessage = {
      id: `usr-${Date.now()}`,
      sender: 'student',
      senderName: 'Mahasiswa Keperawatan',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    const newHistory = [...messages, userMsg];
    setMessages(newHistory);
    setIsLoadingReply(true);

    try {
      const res = await fetch('/api/npc/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          npcName: speakerName,
          npcRole: speakerRole,
          caseContext: caseContext ? `${caseContext.title}. Keluhan: ${caseContext.chiefComplaint}. Anamnesis: ${caseContext.anamnesis}. Dugaan ESO: ${caseContext.suspectedESO}` : '',
          emotion: currentEmotion,
          message: text,
          history: newHistory.slice(-4),
        }),
      });

      const data = await res.json();
      const replyText = data.reply || data.fallbackReply || 'Baik Ners, saya mengerti.';
      const newEmotion = data.emotion || currentEmotion;
      setCurrentEmotion(newEmotion);

      const npcMsg: DialogueMessage = {
        id: `npc-${Date.now()}`,
        sender: 'npc',
        senderName: speakerName,
        text: replyText,
        emotion: newEmotion,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, npcMsg]);

      // Speak aloud through high-fidelity multi-voice synthesizer
      hospitalAudio.speakCharacter(
        replyText,
        speakerRole,
        newEmotion,
        gender,
        age,
        () => setIsSpeaking(true),
        () => setIsSpeaking(false)
      );
    } catch (err) {
      console.error('Error sending message:', err);
      const fallbackMsg: DialogueMessage = {
        id: `npc-err-${Date.now()}`,
        sender: 'npc',
        senderName: speakerName,
        text: 'Baik Ners, mari kita utamakan penanganan keselamatan pasien sesuai SPO klinis.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, fallbackMsg]);
    } finally {
      setIsLoadingReply(false);
    }
  };

  const repeatLastAudio = () => {
    const lastNpcMsg = [...messages].reverse().find((m) => m.sender === 'npc');
    if (lastNpcMsg) {
      hospitalAudio.speakCharacter(
        lastNpcMsg.text,
        speakerRole,
        lastNpcMsg.emotion || currentEmotion,
        gender,
        age,
        () => setIsSpeaking(true),
        () => setIsSpeaking(false)
      );
    }
  };

  const getRoleBadgeColor = () => {
    if (speakerRole === 'dokter') return 'bg-amber-500/20 text-amber-400 border-amber-500/30';
    if (speakerRole === 'pasien') return 'bg-rose-500/20 text-rose-400 border-rose-500/30';
    if (speakerRole === 'keluarga') return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
    if (speakerRole === 'apoteker') return 'bg-teal-500/20 text-teal-400 border-teal-500/30';
    return 'bg-sky-500/20 text-sky-400 border-sky-500/30';
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 bg-slate-950/80 backdrop-blur-md">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header with Speaker Persona and Emotion State */}
        <div className="p-4 md:p-5 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-b border-slate-700/80 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-sky-500 to-teal-400 p-0.5 shadow-md flex items-center justify-center">
              <div className="w-full h-full rounded-[14px] bg-slate-900 flex items-center justify-center text-xl">
                {speakerRole === 'pasien' ? '🤒' : speakerRole === 'dokter' ? '👨‍⚕️' : speakerRole === 'apoteker' ? '💊' : '👩‍⚕️'}
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-white text-base md:text-lg">{speakerName}</h3>
                <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${getRoleBadgeColor()}`}>
                  {speakerRole.toUpperCase()}
                </span>
              </div>
              <div className="text-xs text-slate-400 flex items-center gap-2 mt-0.5">
                <span>Status Emosi:</span>
                <span className="font-semibold text-sky-400 capitalize">{currentEmotion}</span>
                {isSpeaking && (
                  <span className="flex items-center gap-1 text-emerald-400 font-bold text-[11px] animate-pulse">
                    <Volume2 className="w-3.5 h-3.5" /> Berbicara...
                  </span>
                )}
                {isListening && (
                  <span className="flex items-center gap-1 text-rose-400 font-bold text-[11px] animate-pulse">
                    <Mic className="w-3.5 h-3.5" /> Mendengarkan suara...
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={repeatLastAudio}
              className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
              title="Putar Ulang Suara NPC"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2.5 rounded-xl bg-slate-800 hover:bg-rose-900/60 text-slate-400 hover:text-rose-300 transition-colors"
              title="Tutup Dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Clinical Case Context Tag if active */}
        {caseContext && (
          <div className="px-4 py-2 bg-sky-950/40 border-b border-sky-800/30 flex items-center justify-between text-xs text-sky-300">
            <div className="flex items-center gap-2 truncate">
              <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0" />
              <span className="font-semibold truncate">
                {caseContext.caseCode}: {caseContext.title}
              </span>
            </div>
            <span className="shrink-0 text-[10px] bg-sky-900/60 px-2 py-0.5 rounded-full border border-sky-600/40 font-bold text-sky-200">
              {caseContext.esoType}
            </span>
          </div>
        )}

        {/* Chat History Subtitles */}
        <div className="flex-1 overflow-y-auto p-4 md:p-5 space-y-4">
          {messages.map((msg) => {
            const isStudent = msg.sender === 'student';
            return (
              <div
                key={msg.id}
                className={`flex flex-col ${isStudent ? 'items-end' : 'items-start'} animate-fadeIn`}
              >
                <div className="flex items-center gap-1.5 mb-1 px-1">
                  <span className="text-[11px] font-semibold text-slate-400">{msg.senderName}</span>
                  <span className="text-[10px] text-slate-500">{msg.timestamp}</span>
                </div>
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-md ${
                    isStudent
                      ? 'bg-gradient-to-r from-sky-600 to-sky-500 text-white rounded-tr-none'
                      : 'bg-slate-800 text-slate-100 border border-slate-700/60 rounded-tl-none'
                  }`}
                >
                  <p>{msg.text}</p>
                </div>
              </div>
            );
          })}

          {isLoadingReply && (
            <div className="flex items-center gap-2 text-xs text-sky-400 p-2">
              <div className="w-2 h-2 rounded-full bg-sky-400 animate-bounce" />
              <div className="w-2 h-2 rounded-full bg-sky-400 animate-bounce [animation-delay:0.2s]" />
              <div className="w-2 h-2 rounded-full bg-sky-400 animate-bounce [animation-delay:0.4s]" />
              <span>{speakerName} sedang memikirkan respons...</span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Suggestion Chips */}
        <div className="px-4 py-2 bg-slate-950/60 border-t border-slate-800 flex items-center gap-2 overflow-x-auto no-scrollbar">
          <span className="text-[10px] font-bold text-slate-400 uppercase shrink-0">Saran Pertanyaan:</span>
          {suggestions.map((sug, idx) => (
            <button
              key={idx}
              onClick={() => handleSendMessage(sug)}
              className="text-xs text-sky-300 hover:text-white bg-slate-800/80 hover:bg-sky-600/60 px-3 py-1.5 rounded-full border border-sky-500/20 shrink-0 transition-colors whitespace-nowrap active:scale-95"
            >
              💬 {sug}
            </button>
          ))}
        </div>

        {/* Input Bar: Microphone Voice & Text Fallback */}
        <div className="p-3 md:p-4 bg-slate-900 border-t border-slate-800 flex items-center gap-2">
          {/* Voice Microphone Button */}
          <button
            onClick={toggleListening}
            className={`p-3 rounded-2xl flex items-center justify-center transition-all shadow-lg active:scale-95 ${
              isListening
                ? 'bg-rose-500 text-white ring-4 ring-rose-500/40 animate-pulse'
                : 'bg-slate-800 hover:bg-slate-700 text-sky-400 border border-slate-700'
            }`}
            title={isListening ? 'Hentikan Rekam Suara' : 'Bicara Menggunakan Mikrofon'}
          >
            {isListening ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
          </button>

          {/* Text Input */}
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder={
              isListening
                ? 'Mendengarkan suara Anda...'
                : 'Ketik pesan atau pertanyaan untuk pasien/dokter di sini...'
            }
            className="flex-1 bg-slate-800 text-white placeholder-slate-400 text-sm px-4 py-3 rounded-2xl border border-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-500"
          />

          {/* Send Button */}
          <button
            onClick={() => handleSendMessage()}
            disabled={!inputText.trim() || isLoadingReply}
            className="p-3 bg-gradient-to-r from-sky-500 to-teal-500 hover:from-sky-600 hover:to-teal-600 disabled:opacity-40 text-white rounded-2xl shadow-lg transition-transform active:scale-95 cursor-pointer disabled:cursor-not-allowed"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
