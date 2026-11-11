/**
 * Procedural Web Audio Synthesizer and Web Speech TTS Engine
 * Provides authentic hospital soundscapes, heart monitor beeps, chimes,
 * and multi-voice Indonesian text-to-speech for all medical simulation characters.
 */

class HospitalAudioSystem {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false;

  private initContext() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public setMuted(muted: boolean) {
    this.isMuted = muted;
    if (muted && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  }

  public playFootstep() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(80, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(30, this.ctx.currentTime + 0.08);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(300, this.ctx.currentTime);

    gain.gain.setValueAtTime(0.06, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.08);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.08);
  }

  public playHeartBeep(bpm: number = 75, isAlarm: boolean = false) {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    const freq = isAlarm ? 880 : 520;
    osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

    const volume = isAlarm ? 0.08 : 0.03;
    gain.gain.setValueAtTime(volume, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.12);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.12);
  }

  public playInteractionChime() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc1.type = 'sine';
    osc2.type = 'triangle';

    osc1.frequency.setValueAtTime(523.25, now); // C5
    osc1.frequency.setValueAtTime(659.25, now + 0.08); // E5
    osc1.frequency.setValueAtTime(783.99, now + 0.16); // G5

    osc2.frequency.setValueAtTime(261.63, now); // C4

    gain.gain.setValueAtTime(0.05, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);

    osc1.connect(gain);
    osc2.connect(gain);
    gain.connect(this.ctx.destination);

    osc1.start(now);
    osc2.start(now);
    osc1.stop(now + 0.4);
    osc2.stop(now + 0.4);
  }

  public playEmergencyAlarm() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(800, now);
    osc.frequency.linearRampToValueAtTime(1200, now + 0.15);
    osc.frequency.linearRampToValueAtTime(800, now + 0.3);

    gain.gain.setValueAtTime(0.07, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.35);
  }

  /**
   * High quality Multi-Character Indonesian Text-to-Speech
   */
  public speakCharacter(
    text: string,
    role: 'pasien' | 'dokter' | 'perawat' | 'keluarga' | 'apoteker' | 'lab',
    emotion: string = 'neutral',
    gender: 'female' | 'male' = 'female',
    age: number = 30,
    onStart?: () => void,
    onEnd?: () => void
  ) {
    if (this.isMuted || !('speechSynthesis' in window)) {
      if (onEnd) setTimeout(onEnd, 1000);
      return;
    }

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'id-ID';

    // Personality & Emotional Voice Modulations
    let pitch = 1.0;
    let rate = 1.0;

    if (role === 'pasien') {
      if (age > 60) {
        // Elderly patient: slower, slightly lower pitch, weak
        pitch = gender === 'female' ? 0.95 : 0.85;
        rate = 0.85;
      } else if (age < 15) {
        // Child patient: higher pitch, timid
        pitch = 1.35;
        rate = 1.05;
      } else {
        // Adult patient
        pitch = gender === 'female' ? 1.15 : 0.95;
        rate = emotion === 'kesakitan' || emotion === 'cemas' ? 0.88 : 0.95;
      }
    } else if (role === 'dokter') {
      // Confident, professional, clear
      pitch = gender === 'female' ? 1.05 : 0.9;
      rate = 1.02;
    } else if (role === 'perawat') {
      // Warm, approachable, communicative
      pitch = gender === 'female' ? 1.1 : 0.95;
      rate = 1.0;
    } else if (role === 'keluarga') {
      // Anxious, urgent or curious
      pitch = gender === 'female' ? 1.2 : 1.0;
      rate = emotion === 'cemas' ? 1.12 : 0.95;
    } else if (role === 'apoteker' || role === 'lab') {
      // Articulate, scientific, calm
      pitch = 1.0;
      rate = 1.0;
    }

    // Apply emotion modifiers
    if (emotion === 'kesakitan') {
      rate *= 0.88;
      pitch *= 0.95;
    } else if (emotion === 'cemas' || emotion === 'panik') {
      rate *= 1.15;
      pitch *= 1.1;
    } else if (emotion === 'tenang') {
      rate *= 0.95;
    }

    utterance.pitch = Math.max(0.5, Math.min(2.0, pitch));
    utterance.rate = Math.max(0.5, Math.min(1.5, rate));

    // Try finding Indonesian voice if available
    const voices = window.speechSynthesis.getVoices();
    const indonesianVoices = voices.filter(v => v.lang.startsWith('id') || v.lang.startsWith('ID'));
    if (indonesianVoices.length > 0) {
      if (gender === 'female') {
        const femaleVoice = indonesianVoices.find(v => v.name.toLowerCase().includes('female') || v.name.toLowerCase().includes('gadis') || v.name.toLowerCase().includes('siti') || v.name.toLowerCase().includes('damayanti'));
        utterance.voice = femaleVoice || indonesianVoices[0];
      } else {
        const maleVoice = indonesianVoices.find(v => v.name.toLowerCase().includes('male') || v.name.toLowerCase().includes('budi') || v.name.toLowerCase().includes('ardian'));
        utterance.voice = maleVoice || indonesianVoices[0];
      }
    }

    utterance.onstart = () => {
      if (onStart) onStart();
    };

    utterance.onend = () => {
      if (onEnd) onEnd();
    };

    utterance.onerror = (e) => {
      console.warn('TTS speech error:', e);
      if (onEnd) onEnd();
    };

    window.speechSynthesis.speak(utterance);
  }

  public stopSpeaking() {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  }
}

export const hospitalAudio = new HospitalAudioSystem();
