export type ESOCategory = 'Tipe A' | 'Tipe B' | 'Interaksi' | 'Toksisitas Organ' | 'Khusus/Genetik';

export type TriageLevel = 'Gawat Darurat (Merah)' | 'Urgensi Tinggi (Kuning)' | 'Sedang (Hijau)';

export interface VitalSigns {
  bloodPressure: string; // e.g. "78/46 mmHg"
  heartRate: number; // bpm
  respiratoryRate: number | string; // x/min or descriptive
  temperature: number; // C
  spO2: number; // %
  gcs: string; // e.g. "E4V5M6 (15)" or "14"
}

export interface LabResultItem {
  testName: string;
  resultValue: string;
  unit: string;
  normalRange: string;
  isAbnormal: boolean;
  clinicalSignificance: string;
}

export interface MedicationRecordItem {
  drugName: string;
  dose: string;
  route: string;
  timing: string;
  indication: string;
  isSuspectedDrug?: boolean;
}

export interface ClinicalCase {
  id: number;
  groupTitle: string; // Group 1 to 5
  groupNumber: number;
  caseCode: string; // e.g. "KASUS-01"
  title: string;
  patientName: string;
  age: number;
  gender: 'Laki-laki' | 'Perempuan';
  roomLocation: string; // e.g. "Ruang Rawat Inap Bed 1", "Ruang IGD Bed 2", "ICU Bed 1"
  roomKey: string; // e.g. 'inpatient', 'er', 'icu', 'doctor_room', 'observation'
  chiefComplaint: string;
  anamnesis: string;
  historyOfPresentIllness: string;
  pastMedicalHistory: string;
  medicationHistory: MedicationRecordItem[];
  physicalExamDoctor: string;
  vitalSigns: VitalSigns;
  labResults: LabResultItem[];
  suspectedESO: string;
  esoType: ESOCategory;
  triageLevel: TriageLevel;
  redFlags: string[]; // Tanda bahaya
  primaryActionPriority: string;
  doctorOrders: string[];
  nurseInterventions: {
    id: string;
    actionName: string;
    isCorrect: boolean;
    feedback: string;
    scoreWeight: number;
  }[];
  familyQuestion: string;
  familyIdealAnswer: string;
  doctorConsultSBAR: {
    situation: string;
    background: string;
    assessment: string;
    recommendation: string;
  };
  mesoReport: {
    eventDescription: string;
    severityDegree: string;
    immediateAction: string;
  };
  references: string;
}

export interface QuizQuestion {
  id: number;
  type: 'Teori' | 'Kasus Klinis';
  caseScenario?: string;
  scenarioTitle?: string;
  question: string;
  options: {
    key: 'A' | 'B' | 'C' | 'D' | 'E';
    text: string;
  }[];
  correctAnswer: 'A' | 'B' | 'C' | 'D' | 'E';
  explanation: string;
}

export interface SlideItem {
  id: number;
  slideNumber: number;
  title: string;
  subtitle?: string;
  topicCategory: string;
  keyPoints: string[];
  clinicalHighlight: string;
  visualDiagramType?: 'flowchart' | 'comparison' | 'timeline' | 'mechanism' | 'infographic';
  sourceCitation: string;
}

export interface NPCCharacter {
  id: string;
  name: string;
  role: 'pasien' | 'dokter' | 'perawat' | 'keluarga' | 'apoteker' | 'lab';
  gender: 'female' | 'male';
  hasHijab?: boolean;
  avatarColor?: string;
  position: [number, number, number];
  rotation: number;
  currentRoom: string;
  dialogueGreeting: string;
  dialogueAudioVoice: 'female_weak' | 'female_young' | 'male_doctor' | 'female_doctor' | 'elderly' | 'nurse';
}

export interface StudentProgress {
  studentName: string;
  nim: string;
  completedSlides: number[];
  completedCases: number[];
  caseScores: Record<number, number>; // caseId -> score 0-100
  quizAttempts: {
    date: string;
    score: number;
    totalQuestions: number;
    details: Record<number, 'A' | 'B' | 'C' | 'D' | 'E'>;
  }[];
  highScore: number;
  customAvatar: {
    hijabColor: string;
    scrubColor: string;
    shoeColor: string;
    skinTone: string;
  };
  audioMuted: boolean;
}
