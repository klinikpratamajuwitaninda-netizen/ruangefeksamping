/**
 * Web Speech API Speech-to-Text wrapper
 * Enables nursing student to speak via microphone in Bahasa Indonesia.
 */

export interface SpeechRecognitionResultState {
  transcript: string;
  isListening: boolean;
  error: string | null;
}

export class HospitalSpeechRecognizer {
  private recognition: any = null;
  private isSupported: boolean = false;
  private isListening: boolean = false;
  private onResultCallback: ((transcript: string, isFinal: boolean) => void) | null = null;
  private onStatusChangeCallback: ((isListening: boolean) => void) | null = null;

  constructor() {
    if (typeof window !== 'undefined') {
      const SpeechRecognition =
        (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      if (SpeechRecognition) {
        this.recognition = new SpeechRecognition();
        this.recognition.continuous = false;
        this.recognition.interimResults = true;
        this.recognition.lang = 'id-ID';
        this.isSupported = true;

        this.recognition.onstart = () => {
          this.isListening = true;
          if (this.onStatusChangeCallback) this.onStatusChangeCallback(true);
        };

        this.recognition.onresult = (event: any) => {
          let interimTranscript = '';
          let finalTranscript = '';

          for (let i = event.resultIndex; i < event.results.length; ++i) {
            if (event.results[i].isFinal) {
              finalTranscript += event.results[i][0].transcript;
            } else {
              interimTranscript += event.results[i][0].transcript;
            }
          }

          const combined = finalTranscript || interimTranscript;
          if (this.onResultCallback && combined) {
            this.onResultCallback(combined, Boolean(finalTranscript));
          }
        };

        this.recognition.onerror = (event: any) => {
          console.warn('Speech recognition error:', event.error);
          this.isListening = false;
          if (this.onStatusChangeCallback) this.onStatusChangeCallback(false);
        };

        this.recognition.onend = () => {
          this.isListening = false;
          if (this.onStatusChangeCallback) this.onStatusChangeCallback(false);
        };
      }
    }
  }

  public checkSupport(): boolean {
    return this.isSupported;
  }

  public startListening(
    onResult: (transcript: string, isFinal: boolean) => void,
    onStatusChange?: (isListening: boolean) => void
  ) {
    if (!this.isSupported || !this.recognition) return false;

    this.onResultCallback = onResult;
    if (onStatusChange) this.onStatusChangeCallback = onStatusChange;

    try {
      this.recognition.start();
      return true;
    } catch (err) {
      console.warn('Failed to start speech recognition:', err);
      return false;
    }
  }

  public stopListening() {
    if (this.recognition && this.isListening) {
      try {
        this.recognition.stop();
      } catch (err) {
        console.warn('Failed to stop speech recognition:', err);
      }
    }
    this.isListening = false;
    if (this.onStatusChangeCallback) this.onStatusChangeCallback(false);
  }
}

export const hospitalSpeech = new HospitalSpeechRecognizer();
