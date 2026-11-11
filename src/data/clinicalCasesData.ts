import { ClinicalCase } from '../types/medical';

export const CLINICAL_CASES: ClinicalCase[] = [
  // ==================== KELOMPOK 1 ====================
  {
    id: 1,
    groupTitle: "Kelompok 1 — Gangguan Metabolik dan Reaksi Akut",
    groupNumber: 1,
    caseCode: "KASUS-01",
    title: "Hipoglikemia pada Pengguna Insulin Akibat Asupan Makan Berkurang",
    patientName: "Ny. Aisyah",
    age: 63,
    gender: "Perempuan",
    roomLocation: "Ruang Rawat Inap Melati - Bed 1",
    roomKey: "inpatient",
    chiefComplaint: "Keringat dingin, gemetar hebat, berdebar, dan merasa lemas seperti melayang.",
    anamnesis: "Pasien dengan riwayat DM Tipe 2 menyuntikkan insulin kerja cepat (Aspart) 8 unit secara subkutan 15 menit sebelum sarapan pagi. Pasien hanya menghabiskan 3 suap bubur karena mual. Sekitar 1 jam kemudian pasien merasa berkeringat dingin membasahi pakaian, tangan tremor, berdebar, dan sulit berkonsentrasi. Pasien masih sadar dan mampu menelan.",
    historyOfPresentIllness: "DM Tipe 2 terkontrol insulin selama 4 tahun. Mual dialami sejak kemarin malam.",
    pastMedicalHistory: "Hipertensi grade 1, dislipidemia.",
    medicationHistory: [
      { drugName: "Insulin Aspart (Rapid-Acting)", dose: "8 Unit SC", route: "Subkutan", timing: "Sebelum makan", indication: "DM Tipe 2", isSuspectedDrug: true },
      { drugName: "Metformin", dose: "500 mg", route: "Oral", timing: "2x sehari bersama makan", indication: "DM Tipe 2" },
      { drugName: "Amlodipin", dose: "5 mg", route: "Oral", timing: "1x sehari pagi", indication: "Hipertensi" }
    ],
    physicalExamDoctor: "Tekanan darah 118/74 mmHg, Nadi 108 kali/menit teraba cepat dan kuat, Pernapasan 20 kali/menit, Suhu 36,2°C, SpO₂ 98% room air. Kulit teraba basah, dingin, dan lembap. Pasien tampak gelisah namun orientasi waktu, tempat, dan orang masih terjaga (GCS 14-15), refleks menelan baik.",
    vitalSigns: {
      bloodPressure: "118/74 mmHg",
      heartRate: 108,
      respiratoryRate: 20,
      temperature: 36.2,
      spO2: 98,
      gcs: "E4V5M6 (15)"
    },
    labResults: [
      { testName: "Glukosa Darah Sewaktu (GDS) Awal", resultValue: "48", unit: "mg/dL", normalRange: "70–140", isAbnormal: true, clinicalSignificance: "Hipoglikemia klinis bermakna (<70 mg/dL)" },
      { testName: "Natrium Serum", resultValue: "137", unit: "mmol/L", normalRange: "135–145", isAbnormal: false, clinicalSignificance: "Dalam batas normal" },
      { testName: "Kalium Serum", resultValue: "4.1", unit: "mmol/L", normalRange: "3.5–5.0", isAbnormal: false, clinicalSignificance: "Dalam batas normal" },
      { testName: "GDS 15 Menit Post-Intervensi", resultValue: "76", unit: "mg/dL", normalRange: "70–140", isAbnormal: false, clinicalSignificance: "Respons adekuat Rule of 15" }
    ],
    suspectedESO: "Hipoglikemia iatrogenik imbas insulin kerja cepat",
    esoType: "Tipe A",
    triageLevel: "Urgensi Tinggi (Kuning)",
    redFlags: [
      "Penurunan kesadaran mendadak / koma hipoglikemik",
      "Kejang umum / defisit neurologis fokal",
      "Ketidakmampuan menelan (risiko aspirasi paru berat)"
    ],
    primaryActionPriority: "Koreksi glukosa segera dengan 15 gram karbohidrat kerja cepat per oral sesuai Rule of 15.",
    doctorOrders: [
      "Berikan 15 gram karbohidrat kerja cepat oral (misal 150-200 mL teh manis/jus buah)",
      "Periksa ulang GDS bedside 15 menit pasca intervensi",
      "Beri snack karbohidrat kompleks setelah GDS > 70 mg/dL",
      "Evaluasi ulang penyesuaian dosis insulin dengan asupan kalori makan harian"
    ],
    nurseInterventions: [
      { id: "act-1", actionName: "Cek GDS bedside dan konfirmasi refleks menelan pasien", isCorrect: true, feedback: "Tepat sekali! Memastikan nilai glukosa dan kemampuan menelan adalah langkah pertama yang krusial sebelum memberi asupan oral.", scoreWeight: 25 },
      { id: "act-2", actionName: "Berikan 150-200 mL air teh manis hangat (mengandung ~15 g gula)", isCorrect: true, feedback: "Bagus! Menerapkan 'Rule of 15' yang direkomendasikan ADA.", scoreWeight: 25 },
      { id: "act-3", actionName: "Suntikkan insulin tambahan 4 unit untuk menstabilkan kondisi", isCorrect: false, feedback: "FATAL! Menyuntikkan insulin pada pasien hipoglikemia dapat memicu koma dan henti jantung!", scoreWeight: -50 },
      { id: "act-4", actionName: "Re-evaluasi GDS 15 menit kemudian dan catat di lembar pemantauan", isCorrect: true, feedback: "Sangat baik! Memastikan glukosa naik melampaui 70 mg/dL dan mencegah re-hipoglikemia.", scoreWeight: 25 },
      { id: "act-5", actionName: "Edukasi pasien & keluarga pentingnya asupan karbohidrat sebelum menyuntik insulin", isCorrect: true, feedback: "Edukasi keselamatan pasien yang sangat tepat.", scoreWeight: 25 }
    ],
    familyQuestion: "Suster, kenapa ibu saya bisa gemetaran dan basah keringat dingin begini setelah disuntik obatnya?",
    familyIdealAnswer: "Ibu mengalami hipoglikemia, yaitu kadar gula darah yang turun di bawah normal (48 mg/dL). Hal ini terjadi karena obat insulin sudah bekerja sementara ibu tadi hanya makan sedikit. Kami sudah memberikan minuman manis untuk menaikkan gulanya, dan 15 menit lagi akan kita cek ulang. Ibu tidak boleh ditinggal sendirian dulu ya.",
    doctorConsultSBAR: {
      situation: "Lapor dr. Sp.PD, pasien Ny. Aisyah di Bed 1 mengalami hipoglikemia dengan GDS 48 mg/dL 1 jam pasca injeksi insulin Aspart 8 unit.",
      background: "Pasien riwayat DM tipe 2, pagi ini asupan makan hanya 3 suap karena merasa mual.",
      assessment: "Pasien sadar, GCS 15, refleks menelan baik, keringat dingin, HR 108x/m. Sudah diberikan 15g karbohidrat oral.",
      recommendation: "GDS 15 menit naik menjadi 76 mg/dL. Kami sarankan penyesuaian dosis insulin pagi dan obat antiemetik untuk mengatasi mual."
    },
    mesoReport: {
      eventDescription: "Hipoglikemia simtomatik (GDS 48 mg/dL) 1 jam pasca injeksi insulin kerja cepat dengan intake makan suboptimal.",
      severityDegree: "Sedang (Memerlukan intervensi medis cepat)",
      immediateAction: "Pemberian 15g glukosa kerja cepat oral, monitoring serial, evaluasi dosis insulin."
    },
    references: "American Diabetes Association (ADA) Standards of Care in Diabetes 2026; Modul ESO Rajawali."
  },
  {
    id: 2,
    groupTitle: "Kelompok 1 — Gangguan Metabolik dan Reaksi Akut",
    groupNumber: 1,
    caseCode: "KASUS-02",
    title: "Anafilaksis Setelah Pemberian Antibiotik Ceftriaxone IV",
    patientName: "Tn. Budi Pratama",
    age: 28,
    gender: "Laki-laki",
    roomLocation: "Ruang IGD - Bed Resusitasi 1",
    roomKey: "er",
    chiefComplaint: "Sesak napas hebat, gatal seluruh tubuh, bibir menebal bengkak, dan pandangan gelap.",
    anamnesis: "Pasien dirawat dengan pneumonia komunitas. Perawat memulai infus ceftriaxone 1 gram dilarutkan dalam 100 mL NaCl 0,9%. Lima menit setelah infus tetesan pertama mengalir, pasien berteriak gatal di telapak tangan lalu menyebar ke seluruh tubuh, muncul bentol-bentol merah merata, bibir membengkak, suara menjadi serak seperti tercekik, sesak napas berat, dan mengeluh kepala sangat pusing.",
    historyOfPresentIllness: "Pneumonia bakteri sejak 2 hari lalu.",
    pastMedicalHistory: "Tidak ada riwayat alergi obat yang tercatat sebelumnya.",
    medicationHistory: [
      { drugName: "Ceftriaxone IV", dose: "1 gram", route: "Intravena Drip", timing: "Hari ke-1 jam 09.00", indication: "Pneumonia", isSuspectedDrug: true },
      { drugName: "Parasetamol", dose: "500 mg", route: "Oral", timing: "Bila demam", indication: "Antipiretik" }
    ],
    physicalExamDoctor: "TD 78/46 mmHg (Hipotensi berat), Nadi 132 x/menit kecil dan cepat, Pernapasan 32 x/menit dengan retraksi suprasternal, SpO₂ 87% room air. Terdengar wheezing ekspirasi difus dan stridor laring inspiratoir ringan. Urtikaria menyeluruh eritematosa, angioedema jelas pada labium oris dan palpebra.",
    vitalSigns: {
      bloodPressure: "78/46 mmHg",
      heartRate: 132,
      respiratoryRate: 32,
      temperature: 37.0,
      spO2: 87,
      gcs: "E3V4M6 (13) - Letargis"
    },
    labResults: [
      { testName: "Serum Tryptase (1 jam post-kejadian)", resultValue: "19.2", unit: "ng/mL", normalRange: "< 11.4", isAbnormal: true, clinicalSignificance: "Peningkatan degranulasi sel mast" },
      { testName: "Laktat Darah", resultValue: "3.4", unit: "mmol/L", normalRange: "0.5–2.0", isAbnormal: true, clinicalSignificance: "Hipoperfusi jaringan sekunder syok anafilaktik" },
      { testName: "Analisa Gas Darah: pH", resultValue: "7.31", unit: "", normalRange: "7.35–7.45", isAbnormal: true, clinicalSignificance: "Asidosis metabolik/respiratorik kompensasi" }
    ],
    suspectedESO: "Syok Anafilaktik Imbas Antibiotik Beta-Laktam Sefalosporin",
    esoType: "Tipe B",
    triageLevel: "Gawat Darurat (Merah)",
    redFlags: [
      "Stridor dan pembengkakan laring (ancaman sumbatan total jalan napas)",
      "Syok hipotensi refrakter (TD sistolik < 80 mmHg)",
      "Henti napas atau henti jantung mendadak"
    ],
    primaryActionPriority: "Hentikan infus seketika, aktifkan Code Blue/respons emergensi, berikan Epinefrin 1:1.000 0,5 mL IM pada paha anterolateral!",
    doctorOrders: [
      "Stop segera infus ceftriaxone, cabut selang infus (jangan flush!)",
      "Injeksi Epinefrin 1:1.000 0,5 mg (0,5 mL) IM di paha anterolateral kanan",
      "Oksigen masker non-rebreathing 10–12 L/menit",
      "Pasang akses IV jarum besar (18G), guyur kristaloid NaCl 0,9% 1.000 mL cepat",
      "Injeksi Difenhidramin 50 mg IV pelan dan Deksametason 10 mg IV (sebagai terapi adjuvan, setelah epinefrin)",
      "Observasi ketat di ICU/ruang resusitasi minimal 6–12 jam"
    ],
    nurseInterventions: [
      { id: "act-1", actionName: "Hentikan segera tetesan infus antibiotik dan pertahankan patensi vena dengan selang baru", isCorrect: true, feedback: "Langkah pertama mutlak! Jangan sekali-kali mem-flush sisa antibiotik di selang!", scoreWeight: 25 },
      { id: "act-2", actionName: "Panggil bantuan tim emergensi dan siapkan Epinefrin IM 0,5 mg", isCorrect: true, feedback: "Tindakan cepat menyelamatkan nyawa!", scoreWeight: 25 },
      { id: "act-3", actionName: "Posisikan pasien Trendelenburg/berbaring dengan kaki terangkat dan beri O2 masker 10 L/m", isCorrect: true, feedback: "Memaksimalkan venous return ke jantung dan perfusi serebral.", scoreWeight: 25 },
      { id: "act-4", actionName: "Berikan tablet antihistamin oral dan suruh pasien banyak minum", isCorrect: false, feedback: "SALAH BESAR! Pasien syok dan terancam airway tidak boleh menelan tablet oral (risiko aspirasi dan onset lambat)!", scoreWeight: -50 },
      { id: "act-5", actionName: "Pasang gelang tanda alergi merah dan catat reaksi di rekam medis", isCorrect: true, feedback: "Mencegah paparan ulang sefalosporin di masa depan.", scoreWeight: 25 }
    ],
    familyQuestion: "Suster!! Suami saya kenapa tidak bisa bernapas dan mukanya bengkak semua?! Dia mau meninggal ya Sus?!",
    familyIdealAnswer: "Bapak sedang mengalami reaksi alergi berat mendadak terhadap antibiotik yang tadi masuk. Tim dokter dan kami sedang melakukan tindakan darurat: obat suntikan penyelamat sudah kami masukkan ke paha bapak dan oksigen sudah terpasang. Tolong beri ruang dan doakan kami menanganinya sekarang.",
    doctorConsultSBAR: {
      situation: "Dokter, pasien Tn. Budi di Bed Resusitasi mengalami syok anafilaktik 5 menit setelah infus ceftriaxone dimulai.",
      background: "Pneumonia komunitas, tanpa riwayat alergi sebelumnya.",
      assessment: "TD 78/46 mmHg, HR 132x/m, RR 32x/m, SpO2 87%, stridor, angioedema bibir, urtikaria menyeluruh. Infus sudah distop.",
      recommendation: "Mohon konfirmasi instruksi injeksi Epinefrin 0,5 mg IM paha anterolateral, O2 NRM 10 L/m, dan loading NaCl 0,9% 1 L cepat."
    },
    mesoReport: {
      eventDescription: "Syok anafilaktik dengan kolaps hemodinamik dan spasme jalan napas 5 menit pasca tetesan pertama ceftriaxone IV.",
      severityDegree: "Gawat Darurat / Mengancam Jiwa",
      immediateAction: "Epinefrin IM, O2 aliran tinggi, resusitasi cairan kristaloid, pemantauan intensif."
    },
    references: "World Allergy Organization (WAO) Anaphylaxis Guidance 2020; KMK No 514/2015."
  },
  {
    id: 3,
    groupTitle: "Kelompok 1 — Gangguan Metabolik dan Reaksi Akut",
    groupNumber: 1,
    caseCode: "KASUS-03",
    title: "Polifarmasi pada Lansia dengan Gangguan Ginjal Akut (AKI on CKD)",
    patientName: "Tn. Cokroaminoto",
    age: 78,
    gender: "Laki-laki",
    roomLocation: "Ruang Rawat Inap Dahlia - Bed 3",
    roomKey: "inpatient",
    chiefComplaint: "Pusing melayang saat berdiri, badan sangat lemas, mual, dan buang air kecil sangat sedikit.",
    anamnesis: "Pasien geriatri dengan riwayat hipertensi dan CKD stadium 3A. Mengonsumsi rutin lisinopril 10 mg, furosemid 40 mg, dan metformin 500 mg. Karena nyeri sendi lutut hebat dalam seminggu terakhir, pasien membeli sendiri ibuprofen 400 mg 3x sehari di apotek bebas dan meminum ramuan herbal pegal linu. Dalam 3 hari terakhir pasien diare cair 4x/hari dan asupan minum sangat kurang.",
    historyOfPresentIllness: "Pusing berputar terutama saat berdiri dari ranjang (hampir terjatuh). Kencing hanya 1 gelas kecil dalam 24 jam.",
    pastMedicalHistory: "CKD stadium 3A (kreatinin baseline 1.6 mg/dL, eGFR 42 mL/menit), hipertensi 15 tahun.",
    medicationHistory: [
      { drugName: "Lisinopril", dose: "10 mg", route: "Oral", timing: "1x sehari pagi", indication: "Hipertensi/CKD", isSuspectedDrug: true },
      { drugName: "Furosemid", dose: "40 mg", route: "Oral", timing: "1x sehari pagi", indication: "Diuretik", isSuspectedDrug: true },
      { drugName: "Ibuprofen (OTC)", dose: "400 mg", route: "Oral", timing: "3x sehari", indication: "Nyeri sendi", isSuspectedDrug: true },
      { drugName: "Metformin", dose: "500 mg", route: "Oral", timing: "2x sehari", indication: "DM Tipe 2", isSuspectedDrug: true },
      { drugName: "Jamu Herbal Pegal Linu", dose: "1 bungkus", route: "Oral", timing: "1x sehari malam", indication: "Herbal", isSuspectedDrug: true }
    ],
    physicalExamDoctor: "TD berbaring 104/66 mmHg, TD berdiri 86/54 mmHg (Hipotensi Ortostatik positif, delta sistolik 18 mmHg). Nadi 104 kali/menit teraba lemah. Turgor kulit menurun, mukosa bibir kering pecah-pecah. Produksi urin via kateter hanya 0,4 mL/kgBB/jam.",
    vitalSigns: {
      bloodPressure: "104/66 (berbaring) / 86/54 (berdiri)",
      heartRate: 104,
      respiratoryRate: 18,
      temperature: 36.8,
      spO2: 96,
      gcs: "E4V5M6 (15)"
    },
    labResults: [
      { testName: "Kreatinin Serum Saat Ini", resultValue: "2.4", unit: "mg/dL", normalRange: "0.7–1.3", isAbnormal: true, clinicalSignificance: "Peningkatan tajam dari baseline 1.6 mg/dL (AKI)" },
      { testName: "eGFR", resultValue: "27", unit: "mL/min/1.73m²", normalRange: "> 60", isAbnormal: true, clinicalSignificance: "Penurunan ke stadium 4" },
      { testName: "Ureum Darah", resultValue: "89", unit: "mg/dL", normalRange: "15–45", isAbnormal: true, clinicalSignificance: "Azotemia pre-renal" },
      { testName: "Kalium Serum", resultValue: "5.6", unit: "mmol/L", normalRange: "3.5–5.0", isAbnormal: true, clinicalSignificance: "Hiperkalemia sedang (risiko aritmia EKG)" },
      { testName: "Natrium Serum", resultValue: "132", unit: "mmol/L", normalRange: "135–145", isAbnormal: true, clinicalSignificance: "Hiponatremia hipovolemik" }
    ],
    suspectedESO: "Acute Kidney Injury & Hiperkalemia akibat kombinasi Triple Whammy (ACEI + Diuretik + OAINS)",
    esoType: "Interaksi",
    triageLevel: "Urgensi Tinggi (Kuning)",
    redFlags: [
      "Perubahan gelombang T tinggi lancip (peaked T wave) pada EKG (aritmia letal)",
      "Anuria / oliguria refrakter (<0,3 mL/kg/jam)",
      "Asidosis laktat berat akibat retensi metformin"
    ],
    primaryActionPriority: "Pencegahan risiko jatuh, hentikan sementara ibuprofen, lisinopril, dan metformin, pasang monitor EKG, dan rehidrasi cairan.",
    doctorOrders: [
      "Stop segera: Ibuprofen, Lisinopril, Metformin, dan Furosemid",
      "Pasang monitor EKG kontinu untuk memantau aritmia hiperkalemia",
      "Rehidrasi cairan intravena NaCl 0,9% 500 mL dalam 2 jam pertama",
      "Pasang foley kateter dengan urinometer ukur output per jam",
      "Cek ulang elektrolit dan fungsi ginjal 12 jam kemudian"
    ],
    nurseInterventions: [
      { id: "act-1", actionName: "Pasang gelang risiko jatuh kuning dan edukasi bed-rest total dengan pengaman ranjang", isCorrect: true, feedback: "Penting! Hipotensi ortostatik sangat berisiko memicu cedera fraktur pada lansia.", scoreWeight: 25 },
      { id: "act-2", actionName: "Lakukan rekonsiliasi obat menyeluruh dan amankan obat bebas/herbal dari samping tempat tidur pasien", isCorrect: true, feedback: "Mencegah konsumsi ganda obat nefrotoksik tanpa izin.", scoreWeight: 25 },
      { id: "act-3", actionName: "Pantau EKG kontinu dan hitung balans intake-output cairan per jam", isCorrect: true, feedback: "Tindakan klinis yang sangat teliti mendeteksi aritmia kalium 5,6.", scoreWeight: 25 },
      { id: "act-4", actionName: "Menganjurkan keluarga menambah dosis furosemid agar kencing pasien bertambah", isCorrect: false, feedback: "BERBAHAYA! Menambah diuretik pada pasien hipovolemia akan memperburuk nekrosis tubular akut!", scoreWeight: -50 }
    ],
    familyQuestion: "Sus, kakek kan minum jamu biar sendinya gak kaku, kok malah lemas dan tensinya anjlok begini ya?",
    familyIdealAnswer: "Bapak mengalami interaksi antara obat herbal, obat antinyeri ibuprofen yang dibeli bebas, dan obat darah tinggi. Kombinasi ini bersama kekurangan cairan membuat ginjal bapak terbebani sehingga kencing berkurang dan garam kalium darah naik. Untuk saat ini obat-obatan tersebut dihentikan sementara dan dokter memberikan infus cairan untuk memulihkan ginjal bapak.",
    doctorConsultSBAR: {
      situation: "Lapor dr. Sp.PD, pasien Tn. Cokroaminoto Bed 3 mengalami AKI on CKD dan hipotensi ortostatik.",
      background: "Riwayat CKD, rutin lisinopril & furosemid, menambah ibuprofen OTC 3x400mg dan herbal, diare 3 hari.",
      assessment: "TD duduk 86/54, kreatinin melonjak ke 2,4, eGFR 27, Kalium 5,6 mmol/L, urine 0,4 mL/kg/jam.",
      recommendation: "Mohon konfirmasi penghentian ibuprofen, lisinopril, metformin, dan rencana rehidrasi infus kristaloid."
    },
    mesoReport: {
      eventDescription: "Penurunan fungsi ginjal akut dan hiperkalemia imbas kombinasi lisinopril, furosemid, dan ibuprofen pada lansia.",
      severityDegree: "Serius (Menyebabkan perpanjangan hari rawat dan penurunan organ)",
      immediateAction: "Penghentian obat nefrotoksik, rehidrasi cairan, monitoring EKG dan urin harian."
    },
    references: "KDIGO Clinical Practice Guideline for CKD 2024; Farhana & Nafisa (2023)."
  },
  {
    id: 4,
    groupTitle: "Kelompok 1 — Gangguan Metabolik dan Reaksi Akut",
    groupNumber: 1,
    caseCode: "KASUS-04",
    title: "Dugaan Hepatotoksisitas Akibat Obat Antituberkulosis (OAT)",
    patientName: "Ny. Dewi Sartika",
    age: 34,
    gender: "Perempuan",
    roomLocation: "Ruang Rawat Inap Cempaka - Bed 2",
    roomKey: "inpatient",
    chiefComplaint: "Mual menetap, muntah, perut kanan atas nyeri tertekan, mata menguning, dan urin seperti teh.",
    anamnesis: "Pasien sedang menjalani terapi TB paru fase intensif dengan Fix-Dose Combination (FDC) 4FDC (Rifampisin, Isoniazid, Pirazinamid, Etambutol) selama 3 minggu. Sejak 4 hari terakhir pasien mual hebat, muntah setiap kali makan, nafsu makan hilang, lemas, sklera mata tampak kuning mencolok, dan urin berwarna gelap kecokelatan. Pasien menyangkal minum alkohol, obat herbal, atau obat warung.",
    historyOfPresentIllness: "TB Paru BTA positif terkonfirmasi sejak 1 bulan lalu.",
    pastMedicalHistory: "Tidak ada riwayat hepatitis virus B/C sebelumnya.",
    medicationHistory: [
      { drugName: "Kombinasi FDC OAT (RHZE)", dose: "3 tablet 4FDC", route: "Oral", timing: "1x sehari pagi saat perut kosong", indication: "TB Paru Aktif", isSuspectedDrug: true },
      { drugName: "Piridoksin (Vitamin B6)", dose: "10 mg", route: "Oral", timing: "1x sehari", indication: "Pencegahan neuropati INH" }
    ],
    physicalExamDoctor: "TD 116/72 mmHg, Nadi 96 x/menit, Pernapasan 18 x/menit, Suhu 37,2°C. Sklera ikterik bilateral grade 3, mukosa sublingual ikterik. Nyeri tekan pada kuadran kanan atas abdomen (regio hipokondrium kanan), hepar teraba membesar 1 jari di bawah arkus kosta tepi tajam lunak. Tidak ada flapping tremor (asteriksis), GCS 15.",
    vitalSigns: {
      bloodPressure: "116/72 mmHg",
      heartRate: 96,
      respiratoryRate: 18,
      temperature: 37.2,
      spO2: 99,
      gcs: "E4V5M6 (15)"
    },
    labResults: [
      { testName: "ALT (SGPT)", resultValue: "680", unit: "U/L", normalRange: "< 35", isAbnormal: true, clinicalSignificance: "Peningkatan >19x batas atas (Cedera Hepatoseluler Akut)" },
      { testName: "AST (SGOT)", resultValue: "520", unit: "U/L", normalRange: "< 35", isAbnormal: true, clinicalSignificance: "Peningkatan nekrosis hepatosit" },
      { testName: "Alkaline Phosphatase (ALP)", resultValue: "180", unit: "U/L", normalRange: "40–130", isAbnormal: true, clinicalSignificance: "Kolestasis intrahepatik ringan" },
      { testName: "Bilirubin Total", resultValue: "4.2", unit: "mg/dL", normalRange: "0.2–1.2", isAbnormal: true, clinicalSignificance: "Hiperbilirubinemia nyata (ikterus)" },
      { testName: "INR / Prothrombin Time", resultValue: "1.3", unit: "", normalRange: "0.8–1.2", isAbnormal: true, clinicalSignificance: "Mulai terpengaruh fungsi sintesis hati" },
      { testName: "Albumin Serum", resultValue: "3.8", unit: "g/dL", normalRange: "3.5–5.0", isAbnormal: false, clinicalSignificance: "Masih dalam batas normal" }
    ],
    suspectedESO: "Drug-Induced Liver Injury (DILI) terkait regimen OAT",
    esoType: "Toksisitas Organ",
    triageLevel: "Urgensi Tinggi (Kuning)",
    redFlags: [
      "Ensefalopati hepatikum (konfusi, disorientasi, asteriksis)",
      "Koagulopati berat (INR > 1.5, hematemesis/melena)",
      "Gagal hati akut fulminan"
    ],
    primaryActionPriority: "Tunda pemberian seluruh obat OAT tersangka, laporkan ke DPJP untuk protokol DILI TB, periksa panel hepatitis virus.",
    doctorOrders: [
      "Hentikan sementara seluruh regimen 4FDC",
      "Pemeriksaan HBsAg, Anti-HCV, dan USG hepar",
      "Infus cairan dekstrosa 5% dan terapi hepatoprotektor sesuai protokol RS",
      "Evaluasi laboratorium SGOT/SGPT, Bilirubin, dan INR setiap 48–72 jam",
      "Re-challenge OAT bertahap hanya setelah transaminase < 2x normal"
    ],
    nurseInterventions: [
      { id: "act-1", actionName: "Tahan dosis OAT pagi ini dan segera laporkan nilai ALT/AST 680 U/L ke dokter", isCorrect: true, feedback: "Langkah penyelamatan krusial sesuai panduan WHO/Kemenkes TB.", scoreWeight: 25 },
      { id: "act-2", actionName: "Kaji tanda ensefalopati hepatik (kesadaran, tremor tangan) dan perdarahan gusi", isCorrect: true, feedback: "Sangat teliti mendeteksi dekompensasi hati akut.", scoreWeight: 25 },
      { id: "act-3", actionName: "Anjurkan pasien tetap meminum OAT dan hanya diberi obat mual agar TB tidak kebal", isCorrect: false, feedback: "FATAL! Meneruskan OAT pada transaminase >5x normal dapat memicu nekrosis hepar masif dan kematian!", scoreWeight: -50 },
      { id: "act-4", actionName: "Dokumentasikan di formulir MESO dan buku TB 01 rekam medis", isCorrect: true, feedback: "Standar pelaporan farmakovigilans yang sangat baik.", scoreWeight: 25 }
    ],
    familyQuestion: "Suster, kenapa mata anak saya jadi kuning begini semenjak minum obat tuberkulosisnya ya?",
    familyIdealAnswer: "Obat tuberkulosis yang diminum bekerja membersihkan kuman di paru, tetapi pada sebagian orang dapat membebani organ hati. Hasil lab menunjukkan enzim hati Ibu Dewi meningkat tinggi dan menyebabkan mata kuning. Untuk keamanan, obat TB dihentikan sementara waktu agar hatinya pulih kembali, nanti dokter ahli akan mengatur ulang jenis obat yang paling aman.",
    doctorConsultSBAR: {
      situation: "Lapor dr. Sp.P / Sp.PD, pasien Ny. Dewi Sartika di Cempaka Bed 2 dicurigai mengalami DILI berat akibat OAT.",
      background: "Pengobatan TB minggu ke-3 dengan FDC. Mual, muntah, sklera ikterik, urin gelap.",
      assessment: "ALT 680 U/L, AST 520 U/L, Bilirubin total 4,2 mg/dL, INR 1,3. OAT pagi ini sudah kami tahan.",
      recommendation: "Mohon arahan penghentian OAT, pemeriksaan panel hepatitis, dan rencana terapi suportif cairan."
    },
    mesoReport: {
      eventDescription: "Drug-Induced Liver Injury dengan transaminase >15x normal dan ikterus 3 minggu pasca inisiasi regimen OAT.",
      severityDegree: "Serius (Menyebabkan penahanan terapi esensial dan rawat inap)",
      immediateAction: "Penahanan OAT sementara, hepatoprotektor, evaluasi transaminase serial."
    },
    references: "WHO Consolidated Guidelines on Tuberculosis (2022); ACG Clinical Guideline DILI."
  },
  {
    id: 5,
    groupTitle: "Kelompok 1 — Gangguan Metabolik dan Reaksi Akut",
    groupNumber: 1,
    caseCode: "KASUS-05",
    title: "Sindrom Stevens-Johnson (SJS) Akibat Lamotrigin",
    patientName: "Nn. Erika",
    age: 22,
    gender: "Perempuan",
    roomLocation: "Ruang Rawat Inap Isolasi Melati - Bed 4",
    roomKey: "inpatient",
    chiefComplaint: "Kulit perih seperti terbakar, demam tinggi, bibir pecah berdarah, dan mata perih silau.",
    anamnesis: "Pasien baru terdiagnosis epilepsi fokal dan mulai mengonsumsi lamotrigin 2 minggu lalu dengan peningkatan dosis yang agak cepat. Dua hari terakhir pasien mengalami demam menggigil 38,7°C, sakit tenggorokan, kemudian muncul ruam bercak kemerahan keunguan (makula targetoid) yang menyebar dari dada ke punggung dan wajah. Kulit terasa sangat nyeri bila tersentuh, muncul gelembung lepuh (bula), serta bibir dan rongga mulut mengelupas berdarah.",
    historyOfPresentIllness: "Epilepsi awitan baru sejak 1 bulan lalu.",
    pastMedicalHistory: "Tidak ada riwayat alergi obat sebelumnya.",
    medicationHistory: [
      { drugName: "Lamotrigin", dose: "50 mg", route: "Oral", timing: "2x sehari", indication: "Epilepsi", isSuspectedDrug: true },
      { drugName: "Parasetamol", dose: "500 mg", route: "Oral", timing: "Bila demam", indication: "Antipiretik" }
    ],
    physicalExamDoctor: "Suhu 38,7°C, Nadi 116 x/menit, TD 108/68 mmHg, RR 20 x/menit, SpO₂ 98%. Ditemukan ruam makulopapular eritematosa keunguan luas mengenai ~8% luas permukaan tubuh (BSA) dengan beberapa bula kendur. Tanda Nikolsky positif (epidermis bergeser bila ditekan). Lesi erosi hemoragik krusta tebal pada bibir dan mukosa bukal, injeksi konjungtiva bilateral dengan sekret serosa.",
    vitalSigns: {
      bloodPressure: "108/68 mmHg",
      heartRate: 116,
      respiratoryRate: 20,
      temperature: 38.7,
      spO2: 98,
      gcs: "E4V5M6 (15)"
    },
    labResults: [
      { testName: "Leukosit Darah", resultValue: "3100", unit: "/µL", normalRange: "4000–10000", isAbnormal: true, clinicalSignificance: "Leukopenia ringan imbas toksisitas obat" },
      { testName: "Hemoglobin", resultValue: "12.1", unit: "g/dL", normalRange: "12.0–15.5", isAbnormal: false, clinicalSignificance: "Normal" },
      { testName: "Trombosit", resultValue: "175000", unit: "/µL", normalRange: "150000–450000", isAbnormal: false, clinicalSignificance: "Normal" },
      { testName: "ALT (SGPT)", resultValue: "98", unit: "U/L", normalRange: "< 35", isAbnormal: true, clinicalSignificance: "Keterlibatan organ sistemik ringan" },
      { testName: "Kreatinin Serum", resultValue: "1.1", unit: "mg/dL", normalRange: "0.6–1.1", isAbnormal: false, clinicalSignificance: "Fungsi ginjal stabil" }
    ],
    suspectedESO: "Stevens-Johnson Syndrome (SJS / SCAR) Akibat Antikonvulsan Lamotrigin",
    esoType: "Tipe B",
    triageLevel: "Gawat Darurat (Merah)",
    redFlags: [
      "Perluasan nekrolisis epidermis > 10% (transisi menuju Toxic Epidermal Necrolysis / TEN)",
      "Keterlibatan kornea mata (risiko kebutaan permanen akibat sinekia/ulkus)",
      "Sepsis akibat hilangnya barier kulit dan syok hipovolemik"
    ],
    primaryActionPriority: "Stop lamotrigin seketika, rawat isolasi steril, rawat luka kulit aseptik non-adheren, konsultasi dokter mata dan kulit.",
    doctorOrders: [
      "Hentikan lamotrigin permanen, catat kontraindikasi mutlak di rekam medis",
      "Rawat di ruang isolasi steril dengan alas tempat tidur lembut steril",
      "Koreksi cairan IV ringer laktat sesuai rumus luka bakar modifikasi",
      "Perawatan luka erosi kulit dengan kassa sofratulle / petroleum jelly steril",
      "Konsultasi segera ke Spesialis Kulit & Kelamin (Sp.KK) dan Spesialis Mata (Sp.M)",
      "Tetes mata lubrikan air mata buatan tanpa pengawet tiap 2 jam"
    ],
    nurseInterventions: [
      { id: "act-1", actionName: "Hentikan segera lamotrigin dan pastikan tidak ada dosis lanjutan yang diberikan", isCorrect: true, feedback: "Prioritas nomor satu untuk membatasi penyebaran nekrolisis kulit.", scoreWeight: 25 },
      { id: "act-2", actionName: "Lakukan perawatan kulit tanpa plester perekat langsung dan jaga suhu ruangan tetap hangat", isCorrect: true, feedback: "Kulit sangat rapuh; plester dapat mencabik epidermis yang terlepas.", scoreWeight: 25 },
      { id: "act-3", actionName: "Berikan kompres air panas dan gosok ruam dengan alkohol", isCorrect: false, feedback: "BERBAHAYA & MERUSAK! Alkohol dan air panas menyebabkan nyeri ekstrem dan merusak barier dermis!", scoreWeight: -50 },
      { id: "act-4", actionName: "Bersihkan mukosa bibir dengan normal salin lembut dan kolaborasi tetes mata steril", isCorrect: true, feedback: "Menyelamatkan penglihatan dan mencegah infeksi sekunder mulut.", scoreWeight: 25 }
    ],
    familyQuestion: "Sus, kulit anak saya melepuh seperti disiram air panas begini, apa bisa sembuh tanpa cacat?",
    familyIdealAnswer: "Kondisi ini disebut Sindrom Stevens-Johnson, reaksi hipersensitivitas berat terhadap obat epilepsi lamotrigin. Kami sudah menghentikan obat tersebut dan merawat Erika di ruangan bersih steril agar kulitnya tidak terkena infeksi. Dokter spesialis kulit dan mata juga sedang menangani perawatan mata dan bibirnya secara intensif.",
    doctorConsultSBAR: {
      situation: "Lapor dr. Sp.A / Sp.KK, pasien Nn. Erika di Bed 4 isolasi terdiagnosis suspek SJS BSA ~8%.",
      background: "Konsumsi lamotrigin 2 minggu, demam tinggi, nyeri kulit, bula kendur, erosi bibir dan konjungtivitis.",
      assessment: "Nikolsky sign positif, leukosit 3.100, SGPT 98 U/L. Lamotrigin sudah kami stop.",
      recommendation: "Mohon evaluasi langsung untuk tata laksana kortikosteroid sistemik/IVIG dan instruksi perawatan luka mukokutan."
    },
    mesoReport: {
      eventDescription: "Stevens-Johnson Syndrome (bula, Nikolsky positif, keterlibatan 2 mukosa) pasca 14 hari pemakaian lamotrigin.",
      severityDegree: "Mengancam Jiwa (SCAR / Severe Cutaneous Adverse Reaction)",
      immediateAction: "Stop permanen obat, perawatan luka aseptik, konsul Sp.KK & Sp.M, pelaporan farmakovigilans."
    },
    references: "Pallardy et al. Toxicol Sci 2024; Mokbel et al. In Vivo 2024; Modul Rajawali."
  },

  // ==================== KELOMPOK 2 (6 - 14) ====================
  {
    id: 6,
    groupTitle: "Kelompok 2 — Toksisitas Organ dan Perdarahan",
    groupNumber: 2,
    caseCode: "KASUS-06",
    title: "Perdarahan Gastrointestinal Masif Akibat Penggunaan OAINS Jangka Panjang",
    patientName: "Tn. Hartono",
    age: 67,
    gender: "Laki-laki",
    roomLocation: "Ruang Rawat Inap Melati - Bed 5",
    roomKey: "inpatient",
    chiefComplaint: "Buang air besar hitam pekat seperti petis (melena), muntah cairan hitam, dan badan lemas pucat.",
    anamnesis: "Pasien mengonsumsi natrium diklofenak 50 mg 3x sehari dan piroksikam 20 mg yang dibeli sendiri untuk meredakan radang sendi osteoartritis selama 2 bulan terakhir tanpa obat pelindung lambung. Pagi ini pasien BAB feses hitam lengket berbau khas 3 kali dan muntah kopi hitam (hematemesis). Pasien mengeluh pusing berat berkunang-kunang.",
    historyOfPresentIllness: "Osteoartritis genu bilateral 5 tahun.",
    pastMedicalHistory: "Dispepsia kronis.",
    medicationHistory: [
      { drugName: "Natrium Diklofenak", dose: "50 mg", route: "Oral", timing: "3x sehari", indication: "Nyeri sendi", isSuspectedDrug: true },
      { drugName: "Piroksikam", dose: "20 mg", route: "Oral", timing: "1x sehari", indication: "Nyeri sendi", isSuspectedDrug: true }
    ],
    physicalExamDoctor: "TD 92/58 mmHg, Nadi 118 x/menit kecil dan cepat, Konjungtiva anemis sangat pucat, Akral dingin, Nyeri tekan epigastrium (+), Colok dubur (RT): feses hitam melena (+).",
    vitalSigns: { bloodPressure: "92/58 mmHg", heartRate: 118, respiratoryRate: 22, temperature: 36.4, spO2: 95, gcs: "E4V5M6 (15)" },
    labResults: [
      { testName: "Hemoglobin", resultValue: "6.8", unit: "g/dL", normalRange: "13.0–17.0", isAbnormal: true, clinicalSignificance: "Anemia berat sekunder perdarahan aktif saluran cerna" },
      { testName: "Hematokrit", resultValue: "21", unit: "%", normalRange: "40–50", isAbnormal: true, clinicalSignificance: "Penurunan volume eritrosit nyata" },
      { testName: "Trombosit", resultValue: "210000", unit: "/µL", normalRange: "150000–450000", isAbnormal: false, clinicalSignificance: "Normal" },
      { testName: "Ureum Darah", resultValue: "78", unit: "mg/dL", normalRange: "15–45", isAbnormal: true, clinicalSignificance: "Peningkatan rasio BUN/Kreatinin (GI bleed)" }
    ],
    suspectedESO: "Gastropati OAINS dengan Perdarahan Saluran Cerna Bagian Atas (SCBA)",
    esoType: "Tipe A",
    triageLevel: "Gawat Darurat (Merah)",
    redFlags: ["Syok hemoragik (tensi terus menurun, takikardia berat)", "Penurunan kesadaran akibat hipoperfusi serebral"],
    primaryActionPriority: "Hentikan seluruh OAINS, resusitasi cairan kristaloid 2 jalur IV, pasang NGT dekompresi, siapkan transfusi PRC, injeksi PPI dosis tinggi bolus.",
    doctorOrders: ["Stop OAINS", "Omeprazol 80 mg IV bolus lanjut drip 8 mg/jam", "Transfusi PRC 2 labu", "Puasa sementara", "Rencana endoskopi SCBA"],
    nurseInterventions: [
      { id: "act-1", actionName: "Pasang 2 jalur infus IV jarum besar (18G) dan guyur NaCl 0,9%", isCorrect: true, feedback: "Resusitasi hemodinamik prioritas utama syok hemoragik.", scoreWeight: 30 },
      { id: "act-2", actionName: "Hentikan segera seluruh OAINS dan pasang selang NGT untuk bilas lambung", isCorrect: true, feedback: "Mencegah erosi mukosa bertambah parah dan memantau perdarahan aktif.", scoreWeight: 35 },
      { id: "act-3", actionName: "Beri makan bubur hangat dan suruh minum obat pereda nyeri sendinya", isCorrect: false, feedback: "FATAL! Pasien perdarahan saluran cerna aktif wajib dipuasakan!", scoreWeight: -50 },
      { id: "act-4", actionName: "Kirim sampel darah untuk crossmatch transfusi darah emergensi", isCorrect: true, feedback: "Tepat, Hb 6,8 g/dL membutuhkan transfusi darah segera.", scoreWeight: 35 }
    ],
    familyQuestion: "Sus, kenapa kakek BAB-nya hitam seperti aspal dan lemas sekali?",
    familyIdealAnswer: "Bapak mengalami luka dan perdarahan di lambung akibat konsumsi obat antinyeri OAINS dalam waktu lama tanpa pelindung lambung. Darah yang tercampur asam lambung berubah menjadi hitam. Saat ini kami sedang mengalirkan cairan infus dan mempersiapkan tambahan darah untuk memulihkan tenaga bapak.",
    doctorConsultSBAR: {
      situation: "Dokter, Tn. Hartono di Bed 5 mengalami perdarahan SCBA aktif dengan melena dan hematemesis.",
      background: "Konsumsi rutin diklofenak & piroksikam bebas 2 bulan.",
      assessment: "TD 92/58, HR 118x/m pucat, Hb anjlok ke 6,8 g/dL, NGT keluar cairan kopi kehitaman.",
      recommendation: "Mohon acc transfusi 2 unit PRC dan instruksi infus drip Omeprazol 8 mg/jam."
    },
    mesoReport: {
      eventDescription: "Melena dan hematemesis masif (Hb 6,8 g/dL) imbas pemakaian ganda natrium diklofenak dan piroksikam.",
      severityDegree: "Gawat Darurat",
      immediateAction: "Penghentian OAINS, resusitasi cairan, transfusi PRC, PPI IV drip."
    },
    references: "American College of Gastroenterology (ACG) Ulcer Bleeding Guidelines; Modul Rajawali."
  },
  {
    id: 7,
    groupTitle: "Kelompok 2 — Toksisitas Organ dan Perdarahan",
    groupNumber: 2,
    caseCode: "KASUS-07",
    title: "Peningkatan Risiko Perdarahan Masif Akibat Interaksi Warfarin dan Aspirin",
    patientName: "Tn. Iwan Santoso",
    age: 71,
    gender: "Laki-laki",
    roomLocation: "Ruang Rawat Inap Melati - Bed 6",
    roomKey: "inpatient",
    chiefComplaint: "Mimisan deras yang tidak kunjung berhenti, gusi berdarah spontan, dan lebam ungu luas di kedua lengan.",
    anamnesis: "Pasien pengguna warfarin 4 mg/hari untuk atrial fibrilasi pasca stroke iskemik. Tiga hari lalu pasien mengalami flu dan sakit kepala lalu meminum tablet aspirin 500 mg 3 kali sehari. Hari ini timbul epistaksis masif dari kedua lubang hidung, hematuria (kencing merah), dan hematoma spontan di paha.",
    historyOfPresentIllness: "Atrial Fibrilasi non-valvular 3 tahun.",
    pastMedicalHistory: "Stroke iskemik lama, hipertensi.",
    medicationHistory: [
      { drugName: "Warfarin", dose: "4 mg", route: "Oral", timing: "1x sehari malam", indication: "Pencegahan tromboemboli AF", isSuspectedDrug: true },
      { drugName: "Aspirin (Asam Asetilsalisilat)", dose: "500 mg", route: "Oral", timing: "3x sehari", indication: "Sakit kepala OTC", isSuspectedDrug: true }
    ],
    physicalExamDoctor: "TD 124/80 mmHg, Nadi 88 x/menit ireguler (AF), Epistaksis aktif anterior & posterior, purpura dan ekimosis luas di ekstremitas, urin bag tampak merah gelap kemerahan.",
    vitalSigns: { bloodPressure: "124/80 mmHg", heartRate: 88, respiratoryRate: 18, temperature: 36.7, spO2: 98, gcs: "E4V5M6 (15)" },
    labResults: [
      { testName: "INR (International Normalized Ratio)", resultValue: "6.8", unit: "", normalRange: "2.0–3.0 (terapi AF)", isAbnormal: true, clinicalSignificance: "INR supraterapeutik kritis (>5.0 risiko perdarahan intrakranial fatal)" },
      { testName: "Hemoglobin", resultValue: "10.2", unit: "g/dL", normalRange: "13.0–17.0", isAbnormal: true, clinicalSignificance: "Anemia sekunder perdarahan aktif" },
      { testName: "Trombosit", resultValue: "185000", unit: "/µL", normalRange: "150000–450000", isAbnormal: false, clinicalSignificance: "Jumlah normal, namun fungsi dihambat aspirin" }
    ],
    suspectedESO: "Toksisitas Koagulopati Supraterapeutik Akibat Interaksi Sinergis Antikoagulan & Antiplatelet",
    esoType: "Interaksi",
    triageLevel: "Gawat Darurat (Merah)",
    redFlags: ["Tanda perdarahan intrakranial (sakit kepala hebat mendadak, muntah proyektil, defisit neurologis)", "Syok hemoragik"],
    primaryActionPriority: "Hentikan warfarin dan aspirin, pasang tampon hidung anterior, berikan Vitamin K1 (Fitomenadion) IV pelan dan FFP.",
    doctorOrders: ["Stop Warfarin & Aspirin", "Vitamin K1 5–10 mg IV dalam 50 mL NaCl 0,9% tetes lambat", "Transfusi Fresh Frozen Plasma (FFP) 2 unit", "Pasang tampon hidung Bellocq/anterior", "Cek ulang INR tiap 6 jam"],
    nurseInterventions: [
      { id: "act-1", actionName: "Tahan segera dosis warfarin malam ini dan hentikan aspirin", isCorrect: true, feedback: "Benar! Menghilangkan pemicu koagulopati berlebih.", scoreWeight: 30 },
      { id: "act-2", actionName: "Pasang tampon tekan pada hidung dan posisikan kepala condong ke depan (bukan menengadah)", isCorrect: true, feedback: "Mencegah darah tertelan ke lambung atau menyumbat saluran napas.", scoreWeight: 35 },
      { id: "act-3", actionName: "Siapkan pemberian Vitamin K1 intravena dan pantau tanda defisit neurologis pupil", isCorrect: true, feedback: "Antidotum esensial warfarin dan deteksi dini perdarahan otak.", scoreWeight: 35 },
      { id: "act-4", actionName: "Anjurkan pasien meniup hidung keras-keras agar darah beku keluar", isCorrect: false, feedback: "SALAH! Meniup hidung merusak bekuan darah rapuh dan memicu epistaksis lebih hebat!", scoreWeight: -50 }
    ],
    familyQuestion: "Sus, kenapa darah dari hidungnya tidak mau membeku padahal sudah ditekan berjam-jam?",
    familyIdealAnswer: "Bapak mengonsumsi obat pengencer darah warfarin yang bekerja semakin kuat berlebihan karena berinteraksi dengan aspirin yang diminum kemarin. Darah menjadi sangat encer (nilai INR mencapai 6,8 padahal batas amannya 2-3). Saat ini dokter memberikan obat penawar khusus (Vitamin K) dan plasma darah agar pembekuan darah bapak kembali normal.",
    doctorConsultSBAR: {
      situation: "Dokter, Tn. Iwan di Bed 6 mengalami perdarahan mukosa hebat dengan INR 6,8.",
      background: "Rutin warfarin, minum aspirin 3x500mg selama 3 hari.",
      assessment: "Epistaksis aktif, hematuria, ekimosis luas. Warfarin dan aspirin sudah distop.",
      recommendation: "Mohon instruksi pemberian Vitamin K1 IV 5 mg dan transfusi FFP 2 labu untuk koreksi cepat INR."
    },
    mesoReport: {
      eventDescription: "Koagulopati berat (INR 6,8) disertai epistaksis dan hematuria akibat interaksi warfarin dan aspirin.",
      severityDegree: "Mengancam Jiwa",
      immediateAction: "Stop obat, Vitamin K1 IV, transfusi FFP, tamponade epistaksis."
    },
    references: "CHEST Antithrombotic Guidelines; WHO Medication Without Harm (2017)."
  },
  {
    id: 8,
    groupTitle: "Kelompok 2 — Toksisitas Organ dan Perdarahan",
    groupNumber: 2,
    caseCode: "KASUS-08",
    title: "Nefrotoksisitas Akut Imbas Antibiotik Gentamisin pada Pasien Sepsis",
    patientName: "Tn. Joko Susilo",
    age: 59,
    gender: "Laki-laki",
    roomLocation: "Ruang Rawat Inap Cempaka - Bed 3",
    roomKey: "inpatient",
    chiefComplaint: "Jumlah buang air kecil menurun drastis dan kedua kelopak mata bengkak.",
    anamnesis: "Pasien dirawat hari ke-7 karena infeksi saluran kemih komplikata dengan sepsis gram negatif. Mendapat terapi gentamisin 80 mg IV tiap 8 jam. Pasien tidak dilakukan Therapeutic Drug Monitoring (TDM) kadar palung (trough level). Dalam 48 jam terakhir, urine tampungan kateter hanya berkisar 200–250 mL/24 jam.",
    historyOfPresentIllness: "Urosepsis e.c. E. coli.",
    pastMedicalHistory: "Diabetes melitus 10 tahun.",
    medicationHistory: [
      { drugName: "Gentamisin IV", dose: "80 mg", route: "Intravena", timing: "Tiap 8 jam", indication: "Urosepsis", isSuspectedDrug: true },
      { drugName: "Ceftriaxone", dose: "1 g", route: "Intravena", timing: "Tiap 12 jam", indication: "Sepsis" }
    ],
    physicalExamDoctor: "TD 142/86 mmHg, Nadi 84 x/menit, Suhu 37,0°C. Edema periorbital bilateral (+), ronkhi basah halus basal bilateral paru (kelebihan beban cairan), edema pretibial pitting +2.",
    vitalSigns: { bloodPressure: "142/86 mmHg", heartRate: 84, respiratoryRate: 20, temperature: 37.0, spO2: 96, gcs: "E4V5M6 (15)" },
    labResults: [
      { testName: "Kreatinin Serum", resultValue: "3.6", unit: "mg/dL", normalRange: "0.7–1.3", isAbnormal: true, clinicalSignificance: "Lonjakan tajam dari baseline 0.9 mg/dL (Acute Tubular Necrosis)" },
      { testName: "eGFR", resultValue: "18", unit: "mL/min/1.73m²", normalRange: "> 60", isAbnormal: true, clinicalSignificance: "Gagal ginjal akut stadium 3 KDIGO" },
      { testName: "Kadar Palung (Trough) Gentamisin", resultValue: "4.2", unit: "µg/mL", normalRange: "< 1.0–2.0", isAbnormal: true, clinicalSignificance: "Akumulasi toksik pada tubulus ginjal proksimal" },
      { testName: "Proteinuria Kualitatif", resultValue: "+2", unit: "", normalRange: "Negatif", isAbnormal: true, clinicalSignificance: "Kerusakan membran glomerulus/tubulus" }
    ],
    suspectedESO: "Acute Tubular Necrosis (ATN) Nefrotoksisitas Imbas Aminoglikosida",
    esoType: "Toksisitas Organ",
    triageLevel: "Urgensi Tinggi (Kuning)",
    redFlags: ["Anuria (<100 mL/24 jam)", "Edema paru akut / asidosis metabolik berat", "Uremia sindrom (ensefalopati uremikum)"],
    primaryActionPriority: "Hentikan segera gentamisin, ganti antibiotik non-nefrotoksik, monitor balans cairan ketat, batasi asupan kalium dan cairan.",
    doctorOrders: ["Stop gentamisin segera", "Ganti dengan Meropenem dosis penyesuaian ginjal", "Konsultasi ke Dokter Spesialis Penyakit Dalam / Ginjal-Hipertensi", "Pantau urin tampung kateter per jam", "Evaluasi indikasi hemodialisis"],
    nurseInterventions: [
      { id: "act-1", actionName: "Tahan pemberian gentamisin dan laporkan hasil trough level 4,2 µg/mL dan kreatinin 3,6 ke DPJP", isCorrect: true, feedback: "Tindakan profesional mencegah nekrosis tubulus permanen.", scoreWeight: 35 },
      { id: "act-2", actionName: "Pasang urinometer dan hitung balans cairan input vs output setiap pergantian dinas", isCorrect: true, feedback: "Sangat penting memantau kecukupan diuresis.", scoreWeight: 35 },
      { id: "act-3", actionName: "Tetap menyuntikkan gentamisin karena jadwal antibiotik tidak boleh telat", isCorrect: false, feedback: "SANGAT BERBAHAYA! Memberikan aminoglikosida saat ginjal anuria akan mematikan nefron yang tersisa!", scoreWeight: -50 },
      { id: "act-4", actionName: "Periksa tanda kelebihan cairan (ronkhi paru, sesak napas) dan batasi intake natrium", isCorrect: true, feedback: "Mencegah edema paru kardiogenik.", scoreWeight: 30 }
    ],
    familyQuestion: "Sus, kenapa kencing bapak tinggal sedikit sekali dan kelopak matanya bengkak?",
    familyIdealAnswer: "Bapak mengalami gangguan fungsi ginjal akibat efek samping antibiotik gentamisin yang menumpuk di ginjal. Saat ini obat gentamisin sudah resmi dihentikan oleh dokter dan diganti dengan antibiotik lain yang lebih aman bagi ginjal. Kami memasang selang kencing untuk memantau pemulihan ginjal bapak secara cermat.",
    doctorConsultSBAR: {
      situation: "Lapor dr. Sp.PD, pasien Tn. Joko di Bed 3 mengalami AKI berat stadium 3 e.c. nefrotoksisitas gentamisin.",
      background: "Gentamisin hari ke-7 untuk urosepsis. Output urine turun menjadi < 250 mL/24 jam.",
      assessment: "Kreatinin 3,6 mg/dL, trough level 4,2, ronkhi basal paru (+). Gentamisin sudah kami tahan.",
      recommendation: "Mohon konfirmasi penghentian gentamisin, beralih ke meropenem dosis renal, dan arahan pembatasan cairan."
    },
    mesoReport: {
      eventDescription: "Acute Kidney Injury berat (kreatinin 3,6 mg/dL) imbas akumulasi antibiotik aminoglikosida gentamisin.",
      severityDegree: "Serius (Menyebabkan penurunan fungsi organ)",
      immediateAction: "Stop gentamisin, monitor intake-output ketat, ganti antibiotik non-nefrotoksik."
    },
    references: "KDIGO Clinical Practice Guideline for AKI 2024; Farhana & Nafisa (2023)."
  },
  {
    id: 9,
    groupTitle: "Kelompok 2 — Toksisitas Organ dan Perdarahan",
    groupNumber: 2,
    caseCode: "KASUS-09",
    title: "Ototoksisitas Koklear & Vestibular Akibat Terapi Aminoglikosida",
    patientName: "Ny. Ratna Galih",
    age: 46,
    gender: "Perempuan",
    roomLocation: "Ruang Rawat Inap Cempaka - Bed 4",
    roomKey: "inpatient",
    chiefComplaint: "Telinga berdenging keras tanpa henti (tinnitus), pendengaran berkurang, dan pusing berputar saat menoleh.",
    anamnesis: "Pasien mendapat terapi amikasin 500 mg IV tiap 12 jam untuk infeksi MDR-TB selama 3 minggu. Sejak 3 hari terakhir pasien mendengar suara mendenging tinggi di kedua telinga seperti peluit. Pasien kesulitan mendengar instruksi perawat bila tidak berbicara keras, dan merasa ruangan berputar goyah saat bangun dari tempat tidur.",
    historyOfPresentIllness: "MDR-TB dalam regimen paduan jangka panjang.",
    pastMedicalHistory: "Tidak ada riwayat trauma akustik atau infeksi telinga sebelumnya.",
    medicationHistory: [
      { drugName: "Amikasin", dose: "500 mg", route: "Intravena Drip", timing: "Tiap 12 jam", indication: "MDR-TB", isSuspectedDrug: true },
      { drugName: "Levofloksasin", dose: "750 mg", route: "Oral", timing: "1x sehari", indication: "MDR-TB" },
      { drugName: "Bedaquiline", dose: "400 mg", route: "Oral", timing: "Regimen TB", indication: "MDR-TB" }
    ],
    physicalExamDoctor: "Pemeriksaan THT: Membran timpani intak, refleks cahaya (+), tidak ada serumen obstruktif. Tes bisik kasar: pendengaran berkurang signifikan pada frekuensi tinggi. Tes Romberg: goyah saat mata tertutup (disfungsi vestibular). Nistagmus horizontal halus (+).",
    vitalSigns: { bloodPressure: "120/78 mmHg", heartRate: 76, respiratoryRate: 18, temperature: 36.6, spO2: 99, gcs: "E4V5M6 (15)" },
    labResults: [
      { testName: "Kadar Puncak Amikasin", resultValue: "38", unit: "µg/mL", normalRange: "20–30", isAbnormal: true, clinicalSignificance: "Kadar puncak supraterapeutik berisiko ototoksik" },
      { testName: "Kreatinin Serum", resultValue: "1.4", unit: "mg/dL", normalRange: "0.6–1.1", isAbnormal: true, clinicalSignificance: "Penurunan klirens ginjal memperparah ototoksisitas" },
      { testName: "Audiometri Nada Murni (PTA)", resultValue: "Sensorineural Hearing Loss 45 dB pada 4000-8000 Hz", unit: "", normalRange: "Normal (<25 dB)", isAbnormal: true, clinicalSignificance: "Kerusakan sel rambut luar koklea permanen bila dilanjutkan" }
    ],
    suspectedESO: "Ototoksisitas Sensorineural & Vestibulopati Imbas Amikasin",
    esoType: "Toksisitas Organ",
    triageLevel: "Urgensi Tinggi (Kuning)",
    redFlags: ["Tuli saraf sensorineural total bilateral", "Ataksia vestibular berat yang memicu trauma jatuh kepala"],
    primaryActionPriority: "Hentikan segera amikasin, konsultasi dokter Sp.THT untuk audiometri lengkap, ganti regimen MDR-TB bebas aminoglikosida.",
    doctorOrders: ["Tunda amikasin", "Konsul THT-KL untuk evaluasi audiogram serial", "Substitusi amikasin dengan Linezolid / Clofazimine sesuai panduan TB", "Edukasi bahaya jatuh"],
    nurseInterventions: [
      { id: "act-1", actionName: "Tahan dosis amikasin dan segera laporkan keluhan tinnitus baru ke dokter TB", isCorrect: true, feedback: "Tinnitus adalah tanda peringatan dini sebelum ketulian permanen terjadi.", scoreWeight: 35 },
      { id: "act-2", actionName: "Bantu mobilisasi pasien, pasang pegangan ranjang, dan anjurkan tidak bangun terburu-buru", isCorrect: true, feedback: "Mencegah jatuh akibat gangguan vestibular.", scoreWeight: 35 },
      { id: "act-3", actionName: "Bersihkan liang telinga dengan cairan pembersih asam keras", isCorrect: false, feedback: "SALAH! Masalahnya ada di saraf telinga dalam (koklea), bukan kotoran liang telinga!", scoreWeight: -50 },
      { id: "act-4", actionName: "Bicara dengan nada rendah, jelas, dan berhadapan langsung dengan pasien", isCorrect: true, feedback: "Komunikasi terapeutik adaptif pada gangguan sensorineural frekuensi tinggi.", scoreWeight: 30 }
    ],
    familyQuestion: "Sus, kenapa telinga istri saya berdenging terus dan jalannya sempoyongan seperti mau jatuh?",
    familyIdealAnswer: "Obat suntik amikasin yang diberikan untuk tuberkulosis memiliki efek samping pada organ pendengaran dan saraf keseimbangan di telinga bagian dalam. Gejala denging dan sempoyongan adalah tanda peringatannya. Dokter sudah menghentikan suntikan ini dan menggantinya dengan obat minum agar pendengaran ibu Ratna tidak rusak permanen.",
    doctorConsultSBAR: {
      situation: "Dokter, Ny. Ratna di Bed 4 mengeluh tinnitus nada tinggi hebat dan vertigo sejak 3 hari amikasin.",
      background: "MDR-TB minggu ke-3 dengan amikasin 2x500mg. Kreatinin naik ke 1,4 mg/dL.",
      assessment: "Tes bisik menurun pada nada tinggi, Romberg positif goyah. Amikasin pagi ini kami tahan.",
      recommendation: "Mohon konfirmasi pergantian ke regimen oral bebas suntikan dan rujukan audiometri THT."
    },
    mesoReport: {
      eventDescription: "Tinnitus persisten dan tuli sensorineural nada tinggi akibat pemberian amikasin intravena.",
      severityDegree: "Serius (Menimbulkan kecacatan sensorik)",
      immediateAction: "Stop amikasin, pemeriksaan audiometri THT, penggantian regimen MDR-TB."
    },
    references: "WHO Consolidated Guidelines on Drug-Resistant TB 2022; Modul ESO Rajawali."
  },
  {
    id: 10,
    groupTitle: "Kelompok 2 — Toksisitas Organ dan Perdarahan",
    groupNumber: 2,
    caseCode: "KASUS-10",
    title: "Depresi Pernapasan dan Penurunan Kesadaran Akibat Toksisitas Opioid",
    patientName: "Tn. Kemal",
    age: 42,
    gender: "Laki-laki",
    roomLocation: "Ruang Rawat Inap Melati - Bed 2",
    roomKey: "inpatient",
    chiefComplaint: "Tidur sangat dalam sulit dibangunkan, napas lambat tersengal-sengal, dan ujung bibir membiru (sianosis).",
    anamnesis: "Pasien pasca operasi fusi tulang belakang lumbosakral (open reduction internal fixation) hari ke-1. Pasien dipasang Patient-Controlled Analgesia (PCA) morfin intravena. Karena nyeri pasca operasi masih terasa, keluarga pasien berulang kali menekan tombol bolus PCA setiap 10 menit tanpa mematuhi jeda lockout time. Pasien kemudian tertidur lelap, mendengkur berat, dan frekuensi napas merosot tajam.",
    historyOfPresentIllness: "Post-op ORIF vertebra lumbal 24 jam lalu.",
    pastMedicalHistory: "Tidak ada riwayat asma atau PPOK.",
    medicationHistory: [
      { drugName: "Morfin Sulfat IV (PCA)", dose: "1 mg bolus", route: "Intravena PCA", timing: "Sesuai kebutuhan", indication: "Nyeri pasca bedah", isSuspectedDrug: true },
      { drugName: "Ketorolak", dose: "30 mg", route: "Intravena", timing: "Tiap 8 jam", indication: "Analgesik" }
    ],
    physicalExamDoctor: "GCS E1V1M3 (5) - Koma/Stupor dalam. Pernapasan 6 kali/menit bradipnea dangkal, terdapat periode apnea 10 detik. SpO₂ 78% room air. Sianosis pada kuku dan perioral. Pupil miosis pinpoint bilateral (diameter 1 mm, reaktif minimal terhadap cahaya). Akral hangat basah.",
    vitalSigns: { bloodPressure: "96/60 mmHg", heartRate: 52, respiratoryRate: 6, temperature: 36.1, spO2: 78, gcs: "E1V1M3 (5) - Koma" },
    labResults: [
      { testName: "Analisa Gas Darah (AGD): PaCO2", resultValue: "68", unit: "mmHg", normalRange: "35–45", isAbnormal: true, clinicalSignificance: "Hiperkapnia berat akibat hipoventilasi alveolar" },
      { testName: "AGD: pH", resultValue: "7.19", unit: "", normalRange: "7.35–7.45", isAbnormal: true, clinicalSignificance: "Asidosis respiratorik akut tidak terkompensasi" },
      { testName: "AGD: PaO2", resultValue: "52", unit: "mmHg", normalRange: "80–100", isAbnormal: true, clinicalSignificance: "Hipoksemia berat" }
    ],
    suspectedESO: "Overdosis & Toksisitas Opioid dengan Gagal Napas Akut Tipe 2",
    esoType: "Tipe A",
    triageLevel: "Gawat Darurat (Merah)",
    redFlags: ["Henti napas total (Respiratory Arrest)", "Pupil pinpoint miosis bilateral", "Asidosis respiratorik fatal (pH < 7.20)"],
    primaryActionPriority: "Hentikan PCA morfin, ventilasi bagging dengan bag-valve-mask O2 100%, suntikkan Nalokson IV 0,4 mg pelan.",
    doctorOrders: ["Stop segera PCA morfin", "Bantu ventilasi BVM (Ambu bag) 10-12 x/menit dengan O2 100%", "Injeksi Nalokson HCl 0,4 mg IV dapat diulang tiap 2-3 menit hingga RR > 12 x/m", "Siapkan intubasi bila tidak ada respons", "Pindah rawat ke ICU"],
    nurseInterventions: [
      { id: "act-1", actionName: "Hentikan pompa PCA morfin dan amankan tombol PCA dari jangkauan keluarga", isCorrect: true, feedback: "Memutus paparan opioid berlebih seketika.", scoreWeight: 25 },
      { id: "act-2", actionName: "Lakukan bagging BVM O2 100% dan panggil tim Code Blue", isCorrect: true, feedback: "Mengatasi hipoksemia kritis dan hiperkapnia.", scoreWeight: 35 },
      { id: "act-3", actionName: "Ambil ampul Nalokson 0,4 mg IV dan injeksikan secara perlahan atas instruksi dokter", isCorrect: true, feedback: "Antidotum spesifik antagonis reseptor opioid mu murni.", scoreWeight: 35 },
      { id: "act-4", actionName: "Beri minum kopi hangat agar pasien cepat bangun", isCorrect: false, feedback: "FATAL! Pasien koma akan mengalami aspirasi paru fatal bila dimasukkan cairan oral!", scoreWeight: -50 },
      { id: "act-5", actionName: "Edukasi keluarga bahwa tombol PCA hanya boleh ditekan oleh pasien sendiri", isCorrect: true, feedback: "Pencegahan 'PCA by proxy' yang dilarang keras dalam keselamatan pasien.", scoreWeight: 25 }
    ],
    familyQuestion: "Suster!! Kenapa adik saya tidur mendengkur dan bibirnya biru tidak mau bangun?! Tadi saya cuma bantu pencet tombol pereda nyerinya!",
    familyIdealAnswer: "Pasien mengalami keracunan obat pereda nyeri morfin karena tombol penekan ditekan berlebihan oleh keluarga. Obat ini menekan pusat pernapasan di otak sehingga napasnya turun menjadi 6 kali per menit dan oksigennya anjlok. Kami sedang memberikan napas bantuan dan menyuntikkan obat penawar nalokson untuk membangunkannya kembali.",
    doctorConsultSBAR: {
      situation: "Dokter Code Blue, pasien Tn. Kemal di Bed 2 mengalami henti napas akibat overdosis PCA morfin.",
      background: "Post-op ORIF vertebra, keluarga menekan tombol bolus PCA berkali-kali.",
      assessment: "GCS 5, pupil pinpoint miosis, RR 6 x/m dangkal, SpO2 78%, PaCO2 68 mmHg. Pompa morfin sudah dicabut.",
      recommendation: "Sedang dilakukan BVM O2 100%, mohon instruksi injeksi Nalokson 0,4 mg IV bolus pelan."
    },
    mesoReport: {
      eventDescription: "Depresi pernapasan berat (RR 6x/m, SpO2 78%, asidosis respiratorik) pasca pemberian berlebih morfin IV PCA.",
      severityDegree: "Gawat Darurat / Mengancam Jiwa",
      immediateAction: "Ventilasi BVM, administrasi Nalokson IV, transfer ICU."
    },
    references: "American Heart Association (AHA) ACLS Opioid Overdose Protocol; Modul Rajawali."
  },
  {
    id: 11,
    groupTitle: "Kelompok 2 — Toksisitas Organ dan Perdarahan",
    groupNumber: 2,
    caseCode: "KASUS-11",
    title: "Konstipasi Berat dan Impaksi Fekal Imbas Penggunaan Opioid Pasca Trauma",
    patientName: "Tn. Badar",
    age: 51,
    gender: "Laki-laki",
    roomLocation: "Ruang Rawat Inap Melati - Bed 3",
    roomKey: "inpatient",
    chiefComplaint: "Perut kembung membesar keras, nyeri melilit, dan tidak bisa BAB sama sekali selama 6 hari.",
    anamnesis: "Pasien pasca fraktur femur dextra 2 minggu lalu yang mengonsumsi kodein 30 mg 3x sehari dikombinasikan parasetamol untuk mengatasi nyeri fraktur. Pasien tidak diberikan laksatif profilaksis. Pasien merasa begah hebat, mual, flatus berkurang, dan merasa kotoran menyumbat di anus namun keras membatu.",
    historyOfPresentIllness: "Fraktur femur tertutup 2 minggu lalu.",
    pastMedicalHistory: "Tidak ada riwayat hemoroid.",
    medicationHistory: [
      { drugName: "Kodein Sulfat", dose: "30 mg", route: "Oral", timing: "3x sehari", indication: "Analgesik moderat", isSuspectedDrug: true },
      { drugName: "Parasetamol", dose: "500 mg", route: "Oral", timing: "3x sehari", indication: "Analgesik" }
    ],
    physicalExamDoctor: "Abdomen distensi tampak membuncit tegang, perkusi hipertimpani, bising usus hipoaktif (1-2x/menit). Palpasi terdapat massa fekal keras pada kuadran kiri bawah (kolon desenden). Colok dubur (Rectal Toucher): ampula rekti teraba penuh dengan skibala (feses keras membatu mengering).",
    vitalSigns: { bloodPressure: "130/84 mmHg", heartRate: 88, respiratoryRate: 20, temperature: 36.8, spO2: 98, gcs: "E4V5M6 (15)" },
    labResults: [
      { testName: "Foto Polos Abdomen (BNO 3 Posisi)", resultValue: "Fecal impaction masif di kolon sigmoid & rektum, distensi kolon proksimal", unit: "", normalRange: "Normal", isAbnormal: true, clinicalSignificance: "Impaksi fekal komplit akibat stasis motilitas usus" },
      { testName: "Kalium Serum", resultValue: "4.0", unit: "mmol/L", normalRange: "3.5–5.0", isAbnormal: false, clinicalSignificance: "Normal" },
      { testName: "Leukosit Darah", resultValue: "8200", unit: "/µL", normalRange: "4000–10000", isAbnormal: false, clinicalSignificance: "Tidak ada tanda perforasi usus" }
    ],
    suspectedESO: "Opioid-Induced Constipation (OIC) dengan Impaksi Fekal Obstruktif",
    esoType: "Tipe A",
    triageLevel: "Sedang (Hijau)",
    redFlags: ["Obstruksi usus mekanik total / ileus paralitik lanjut", "Perforasi kolon akibat stercoral ulceration"],
    primaryActionPriority: "Evaluasi pengurangan dosis kodein, lakukan evakuasi manual feses (manual disimpaction), berikan enema gliserin dan laksatif osmotik (laktulosa / PEG).",
    doctorOrders: ["Titrasi turun dosis kodein, pertimbangkan analgesik non-opioid", "Lakukan manual disimpaction dengan pelumas anestesi lokal secara lembut", "Klisma / Enema gliserin rektal 100 mL", "Laktulosa sirup 2x15 mL oral", "Tingkatkan hidrasi oral 2–2,5 L/hari bila tidak kontraindikasi"],
    nurseInterventions: [
      { id: "act-1", actionName: "Lakukan pengkajian pola eliminasi BAB dan auskultasi bising usus rutin", isCorrect: true, feedback: "Mendeteksi ileus dan impaksi sedini mungkin.", scoreWeight: 25 },
      { id: "act-2", actionName: "Kolaborasi evakuasi fekal manual secara aseptik dan pemberian enema", isCorrect: true, feedback: "Mengeluarkan sumbatan mekanik di ampula rekti.", scoreWeight: 35 },
      { id: "act-3", actionName: "Berikan laksatif serat tinggi tanpa menambah air minum", isCorrect: false, feedback: "SALAH! Serat tinggi tanpa hidrasi adekuat akan memperparah batu fekal!", scoreWeight: -40 },
      { id: "act-4", actionName: "Edukasi pentingnya laksatif stimulan/osmotik bersamaan setiap resep opioid", isCorrect: true, feedback: "Prinsip emas: 'The hand that writes the opioid prescription should write the bowel regimen'.", scoreWeight: 40 }
    ],
    familyQuestion: "Sus, perut suami saya keras membuncit dan tidak bisa BAB hampir seminggu, apa ususnya buntu?",
    familyIdealAnswer: "Bukan usus buntu Bu, melainkan efek samping obat pereda nyeri kodein yang diminum. Obat golongan ini memperlambat gerak usus dan menyerap air di tinja sehingga feses menjadi sangat keras membatu di anus. Kami akan melakukan tindakan pelembutan dan pembersihan kotoran, serta memberikan sirup pencahar agar buang air besarnya lancar kembali.",
    doctorConsultSBAR: {
      situation: "Dokter, Tn. Badar di Bed 3 mengeluh impaksi fekal dan konstipasi obstruktif 6 hari pasca terapi kodein.",
      background: "Fraktur femur, rutin kodein 3x30mg tanpa obat pencahar.",
      assessment: "BNO menunjukkan impaksi feses masif di rektum, perut distensi, skibala teraba keras.",
      recommendation: "Mohon instruksi enema gliserin, manual disimpaction, dan laktulosa sirup serta penyesuaian dosis opioid."
    },
    mesoReport: {
      eventDescription: "Opioid-Induced Constipation berat dengan impaksi fekal rektal akibat terapi kodein tanpa profilaksis laksatif.",
      severityDegree: "Sedang",
      immediateAction: "Manual disimpaction, enema gliserin, laktulosa, hidrasi oral."
    },
    references: "American Gastroenterological Association (AGA) Guideline on Opioid-Induced Constipation; Modul Rajawali."
  },
  {
    id: 12,
    groupTitle: "Kelompok 2 — Toksisitas Organ dan Perdarahan",
    groupNumber: 2,
    caseCode: "KASUS-12",
    title: "Toksisitas Digoksin Akibat Penurunan Fungsi Ginjal dan Hipokalemia",
    patientName: "Ny. Maryam",
    age: 74,
    gender: "Perempuan",
    roomLocation: "Ruang Rawat Inap Melati - Bed 4",
    roomKey: "inpatient",
    chiefComplaint: "Mual muntah hebat, pandangan tampak kekuningan berhalo (xanthopsia), dan dada berdebar tidak teratur.",
    anamnesis: "Pasien gagal jantung kongestif (CHF) dan fibrilasi atrium mengonsumsi digoksin 0,25 mg 1x sehari dan furosemid 40 mg 1x sehari. Sejak 3 hari lalu nafsu makan menurun, mual terus-menerus, merasa lampu di ruangan dikelilingi cincin cahaya kuning kehijauan (halo vision), dan denyut nadi teraba sangat pelan diselingi jeda hilang.",
    historyOfPresentIllness: "Gagal jantung NYHA class III, atrial fibrillation.",
    pastMedicalHistory: "Hipertensi geriatri.",
    medicationHistory: [
      { drugName: "Digoksin", dose: "0,25 mg", route: "Oral", timing: "1x sehari pagi", indication: "Gagal jantung & AF", isSuspectedDrug: true },
      { drugName: "Furosemid", dose: "40 mg", route: "Oral", timing: "1x sehari pagi", indication: "Diuretik gagal jantung", isSuspectedDrug: true },
      { drugName: "Kaptopril", dose: "25 mg", route: "Oral", timing: "3x sehari", indication: "Gagal jantung" }
    ],
    physicalExamDoctor: "TD 102/64 mmHg, Nadi 44 x/menit ireguler lambat (Bradikardia dengan ventrikular ekstrasistol), SpO₂ 97%. EKG menunjukkan irama junctional bradikardia dengan PVC bigemini multipel dan depresi segmen ST berbentuk 'scooped' (centang ke bawah khas efek digoksin).",
    vitalSigns: { bloodPressure: "102/64 mmHg", heartRate: 44, respiratoryRate: 18, temperature: 36.5, spO2: 97, gcs: "E4V5M6 (15)" },
    labResults: [
      { testName: "Kadar Serum Digoksin", resultValue: "3.4", unit: "ng/mL", normalRange: "0.5–0.9", isAbnormal: true, clinicalSignificance: "Kadar toksik berat (>2.0 ng/mL)" },
      { testName: "Kalium Serum", resultValue: "2.8", unit: "mmol/L", normalRange: "3.5–5.0", isAbnormal: true, clinicalSignificance: "Hipokalemia berat imbas furosemid (memperparah ikatan digoksin pada Na/K-ATPase)" },
      { testName: "Kreatinin Serum", resultValue: "2.1", unit: "mg/dL", normalRange: "0.6–1.1", isAbnormal: true, clinicalSignificance: "Gagal ginjal akut memperlambat eliminasi digoksin" }
    ],
    suspectedESO: "Toksisitas Glikosida Jantung (Digoxin Toxicity) dengan Disritmia Ventrikel",
    esoType: "Tipe A",
    triageLevel: "Gawat Darurat (Merah)",
    redFlags: ["Aritmia ventrikel maligna (VT/VF) atau henti jantung asistol", "Blok atrioventrikular total (Total AV Block)"],
    primaryActionPriority: "Hentikan digoksin dan furosemid, pasang monitor EKG kontinu, koreksi kalium intravena perlahan, dan siapkan antibodi spesifik digoksin (DigiFab).",
    doctorOrders: ["Stop Digoksin & Furosemid", "Pasang EKG monitor kontinu di ICU/ICCU", "Koreksi Kalium KCL 25 mEq dalam 500 mL NaCl 0,9% via syringe pump pelan", "Siapkan Digoxin-Specific Antibody Fragments (DigiFab) bila aritmia mengancam nyawa", "Atropin 0,5 mg IV bila HR < 40 x/m"],
    nurseInterventions: [
      { id: "act-1", actionName: "Tahan segera digoksin pagi ini dan pasang monitor defibrilator di samping ranjang", isCorrect: true, feedback: "Mencegah aritmia ventrikel letal.", scoreWeight: 35 },
      { id: "act-2", actionName: "Lakukan koreksi kalium sesuai protokol dan pastikan tidak disuntik bolus cepat", isCorrect: true, feedback: "KCL bolus langsung dapat menyebabkan henti jantung fatal!", scoreWeight: 35 },
      { id: "act-3", actionName: "Memberikan injeksi kalsium glukonat IV cepat", isCorrect: false, feedback: "KONTRAINDIKASI! Kalsium IV pada keracunan digoksin dapat memicu 'stone heart' (kontraktur jantung permanen)!", scoreWeight: -50 },
      { id: "act-4", actionName: "Kaji gangguan visual xanthopsia (pandangan kuning) dan mual pasien", isCorrect: true, feedback: "Gejala khas toksisitas digoksin pada saraf optikus.", scoreWeight: 30 }
    ],
    familyQuestion: "Sus, kenapa ibu melihat lampu seperti ada lingkaran kuning dan denyut nadinya lambat sekali?",
    familyIdealAnswer: "Gejala melihat lingkaran kuning dan mual tersebut merupakan tanda khas keracunan obat jantung digoksin. Hal ini dipicu karena kadar kalium darah ibu turun dan ginjalnya sedang menurun sehingga obat menumpuk. Dokter sudah menyetop obat tersebut dan sedang memberikan infus penambah kalium untuk menetralkan racun obat di jantung ibu.",
    doctorConsultSBAR: {
      situation: "Dokter, Ny. Maryam di Bed 4 mengalami toksisitas digoksin berat dengan aritmia PVC bigemini.",
      background: "Rutin digoksin & furosemid. Mual muntah, halo kuning penglihatan.",
      assessment: "Kadar digoksin 3,4 ng/mL, Kalium 2,8 mmol/L, HR 44 x/m bradikardia ireguler.",
      recommendation: "Mohon konfirmasi infus koreksi KCl dan ketersediaan antidotum DigiFab di farmasi."
    },
    mesoReport: {
      eventDescription: "Toksisitas digoksin berat (kadar 3,4 ng/mL, xanthopsia, PVC bigemini) dipicu hipokalemia dan AKI.",
      severityDegree: "Mengancam Jiwa",
      immediateAction: "Stop digoksin, monitor EKG ketat, koreksi kalium, persiapan DigiFab."
    },
    references: "AHA Heart Failure Guidelines; Goldfrank's Toxicologic Emergencies; Modul Rajawali."
  },
  {
    id: 13,
    groupTitle: "Kelompok 2 — Toksisitas Organ dan Perdarahan",
    groupNumber: 2,
    caseCode: "KASUS-13",
    title: "Toksisitas Lithium Akibat Interaksi Diuretik Tiazid dan Dehidrasi",
    patientName: "Tn. Lukman",
    age: 48,
    gender: "Laki-laki",
    roomLocation: "Ruang Rawat Inap Dahlia - Bed 1",
    roomKey: "inpatient",
    chiefComplaint: "Tangan gemetar kasar (tremor), jalan sempoyongan tidak seimbang (ataksia), bicara pelo, dan sering kencing banyak.",
    anamnesis: "Pasien dengan gangguan bipolar terkontrol lithium karbonat 400 mg 2x sehari. Satu minggu lalu pasien mendapat tambahan obat antihipertensi hidroklorotiazid (HCT) 25 mg dari puskesmas. Dalam beberapa hari terakhir cuaca panas terik, pasien sedikit minum air. Hari ini pasien mengalami tremor kasar di kedua tangan, gerakan bola mata cepat tak terkontrol (nistagmus), muntah, dan bicara meracau bingung.",
    historyOfPresentIllness: "Gangguan afektif bipolar terkontrol 5 tahun.",
    pastMedicalHistory: "Hipertensi esensial baru terdiagnosis.",
    medicationHistory: [
      { drugName: "Lithium Karbonat", dose: "400 mg", route: "Oral", timing: "2x sehari", indication: "Gangguan Bipolar", isSuspectedDrug: true },
      { drugName: "Hidroklorotiazid (HCT)", dose: "25 mg", route: "Oral", timing: "1x sehari pagi", indication: "Hipertensi", isSuspectedDrug: true }
    ],
    physicalExamDoctor: "TD 108/66 mmHg, Nadi 92 x/menit, Suhu 36,9°C. Pasien tampak konfusi, disorientasi tempat dan waktu, tremor kasar postural pada kedua tangan, ataksia saat berjalan (gait goyah), hiperrefleksia fisiologis (+3), klonus pergelangan kaki (+).",
    vitalSigns: { bloodPressure: "108/66 mmHg", heartRate: 92, respiratoryRate: 18, temperature: 36.9, spO2: 98, gcs: "E3V4M6 (13) - Konfusi" },
    labResults: [
      { testName: "Kadar Serum Lithium", resultValue: "2.8", unit: "mEq/L", normalRange: "0.6–1.2 (terapeutik)", isAbnormal: true, clinicalSignificance: "Toksisitas lithium berat (>2.5 mEq/L risiko kerusakan saraf permanen/koma)" },
      { testName: "Natrium Serum", resultValue: "130", unit: "mmol/L", normalRange: "135–145", isAbnormal: true, clinicalSignificance: "Hiponatremia (meningkatkan reabsorpsi lithium di tubulus ginjal proksimal)" },
      { testName: "Kreatinin Serum", resultValue: "1.8", unit: "mg/dL", normalRange: "0.7–1.3", isAbnormal: true, clinicalSignificance: "Penurunan klirens ginjal sekunder dehidrasi" }
    ],
    suspectedESO: "Neurotoksisitas Lithium Akibat Penurunan Ekskresi Natrium/Lithium oleh Diuretik Tiazid",
    esoType: "Interaksi",
    triageLevel: "Gawat Darurat (Merah)",
    redFlags: ["Kejang epileptik umum (status epileptikus)", "Koma dan henti sirkulasi", "Gejala ekstrapiramidal ireversibel"],
    primaryActionPriority: "Hentikan lithium dan HCT, hidrasi masif infus NaCl 0,9% untuk mendorong natriuresis dan ekskresi lithium, siapkan hemodialisis cito.",
    doctorOrders: ["Stop Lithium Karbonat & HCT", "Infus NaCl 0,9% 2.000–3.000 mL/24 jam untuk memaksimalkan klirens litium", "Pasang kateter urin pantau diuresis", "Konsultasi ke Dokter Spesialis Ginjal untuk hemodialisis bila kadar > 2.5 mEq/L disertai gejala neurologis berat"],
    nurseInterventions: [
      { id: "act-1", actionName: "Tahan segera pemberian lithium dan amankan lingkungan pasien dari cedera jatuh/kejang", isCorrect: true, feedback: "Tepat, ataksia dan konfusi sangat rentan trauma fisik.", scoreWeight: 35 },
      { id: "act-2", actionName: "Guyur cairan kristaloid NaCl 0,9% sesuai instruksi dokter untuk membuang lithium via urin", isCorrect: true, feedback: "Natrium bersaing dengan lithium di tubulus proksimal; hidrasi garam membuang lithium.", scoreWeight: 35 },
      { id: "act-3", actionName: "Memberikan obat penenang tidur tambahan oral karena pasien gelisah", isCorrect: false, feedback: "BERBAHAYA! Sedatif dapat memperburuk depresi SSP dan menutupi perburukan koma lithium!", scoreWeight: -50 },
      { id: "act-4", actionName: "Siapkan akses hemodialisis dan cek ulang kadar lithium serial tiap 6 jam", isCorrect: true, feedback: "Hemodialisis adalah terapi definitif pada kadar >2.5 mEq/L simtomatik.", scoreWeight: 30 }
    ],
    familyQuestion: "Sus, kenapa suami saya jalannya oleng, tangannya gemetar hebat, dan bicaranya ngelantur?",
    familyIdealAnswer: "Bapak mengalami keracunan obat lithium. Obat darah tinggi jenis tiazid yang baru diminum bersama kekurangan minum menyebabkan kadar lithium darah melonjak tinggi hingga 2,8 (batas aman hanya sampai 1,2). Obat tersebut sudah dihentikan dan kami sedang membilas racunnya dengan infus cairan garam serta memantau apakah perlu cuci darah darurat.",
    doctorConsultSBAR: {
      situation: "Dokter Sp.KJ / Sp.PD, pasien Tn. Lukman di Dahlia 1 mengalami intoksikasi lithium berat (2,8 mEq/L).",
      background: "Bipolar rutin lithium, baru ditambah HCT 25mg seminggu lalu, dehidrasi.",
      assessment: "Ataksia, tremor kasar, klonus, konfusi, kreatinin 1,8, natrium 130. Lithium sudah distop.",
      recommendation: "Mohon konfirmasi protokol rehidrasi NaCl 0,9% intensif dan konsul nefrologi untuk hemodialisis cito."
    },
    mesoReport: {
      eventDescription: "Toksisitas lithium berat (2,8 mEq/L dengan ataksia dan konfusi) akibat interaksi deplesi natrium oleh HCT.",
      severityDegree: "Mengancam Jiwa",
      immediateAction: "Stop lithium & HCT, infus salin agresif, persiapan hemodialisis."
    },
    references: "American Psychiatric Association (APA) Bipolar Guidelines; UpToDate Lithium Toxicity."
  },
  {
    id: 14,
    groupTitle: "Kelompok 2 — Toksisitas Organ dan Perdarahan",
    groupNumber: 2,
    caseCode: "KASUS-14",
    title: "Miopati dan Rhabdomiolisis Akibat Interaksi Statin dan Fibrat",
    patientName: "Tn. Subagyo",
    age: 55,
    gender: "Laki-laki",
    roomLocation: "Ruang Rawat Inap Dahlia - Bed 2",
    roomKey: "inpatient",
    chiefComplaint: "Nyeri otot hebat seluruh badan, betis kram kaku, dan air kencing berwarna merah tua seperti air teh pekat/cola.",
    anamnesis: "Pasien dengan dislipidemia campuran mengonsumsi atorvastatin 40 mg 1x sehari malam. Karena trigliserida masih tinggi, dokter poliklinik menambahkan gemfibrozil 600 mg 2x sehari 10 hari lalu. Dua hari terakhir pasien mengeluh nyeri otot paha dan betis yang sangat pegal ngilu, kelemahan otot ekstremitas (sulit bangkit dari kursi), dan urin berubah warna gelap cokelat kemerahan.",
    historyOfPresentIllness: "Dislipidemia aterogenik, PJK stabil.",
    pastMedicalHistory: "Pemasangan stent koroner 2 tahun lalu.",
    medicationHistory: [
      { drugName: "Atorvastatin", dose: "40 mg", route: "Oral", timing: "1x sehari malam", indication: "Dislipidemia", isSuspectedDrug: true },
      { drugName: "Gemfibrozil", dose: "600 mg", route: "Oral", timing: "2x sehari", indication: "Hipertrigliseridemia", isSuspectedDrug: true },
      { drugName: "Aspirin", dose: "80 mg", route: "Oral", timing: "1x sehari", indication: "PJK" }
    ],
    physicalExamDoctor: "TD 130/80 mmHg, Nadi 88 x/menit, Suhu 37,1°C. Nyeri tekan difus pada otot gastroknemius dan kuadriseps bilateral. Kekuatan motorik ekstremitas bawah menurun 4/5. Tidak ada tanda radang sendi. Urin di selang kateter tampak berwarna cokelat gelap kemerahan khas mioglobinuria.",
    vitalSigns: { bloodPressure: "130/80 mmHg", heartRate: 88, respiratoryRate: 18, temperature: 37.1, spO2: 98, gcs: "E4V5M6 (15)" },
    labResults: [
      { testName: "Kreatin Kinase (CK / CPK Total)", resultValue: "18500", unit: "U/L", normalRange: "30–200", isAbnormal: true, clinicalSignificance: "Peningkatan masif >90x normal (Rhabdomiolisis berat)" },
      { testName: "Mioglobin Urin", resultValue: "Positif Pekat", unit: "", normalRange: "Negatif", isAbnormal: true, clinicalSignificance: "Pelepasan protein otot nefrotoksik" },
      { testName: "Kreatinin Serum", resultValue: "2.3", unit: "mg/dL", normalRange: "0.7–1.3", isAbnormal: true, clinicalSignificance: "Acute Kidney Injury akibat obstruksi tubulus oleh mioglobin" },
      { testName: "Kalium Serum", resultValue: "5.4", unit: "mmol/L", normalRange: "3.5–5.0", isAbnormal: true, clinicalSignificance: "Hiperkalemia pelepasan intraseluler miotoksisitas" }
    ],
    suspectedESO: "Rhabdomiolisis Akut dengan Gagal Ginjal Imbas Interaksi Atorvastatin dan Gemfibrozil",
    esoType: "Interaksi",
    triageLevel: "Gawat Darurat (Merah)",
    redFlags: ["Acute Kidney Injury berat dengan anuria", "Hiperkalemia letal memicu henti jantung", "Sindrom kompartemen ekstremitas"],
    primaryActionPriority: "Hentikan seketika atorvastatin dan gemfibrozil, rehidrasi cairan intravena masif (NaCl 0,9% 300-500 mL/jam) dengan alkalisasi urin (Natrium Bikarbonat).",
    doctorOrders: ["Stop Atorvastatin dan Gemfibrozil permanen", "Loading cairan NaCl 0,9% 1.000 mL dalam 1 jam pertama, lanjut 300 mL/jam target urine 200–300 mL/jam", "Natrium Bikarbonat IV untuk alkalisasi urin (target pH urin > 6.5)", "Pantau CK total dan elektrolit tiap 12 jam", "Evaluasi risiko sindrom kompartemen"],
    nurseInterventions: [
      { id: "act-1", actionName: "Hentikan pemberian statin dan fibrat serta pastikan pasien istirahat tirah baring", isCorrect: true, feedback: "Mencegah kerusakan serat otot lebih lanjut.", scoreWeight: 35 },
      { id: "act-2", actionName: "Pasang kateter urin foley dan ukur target produksi urin minimal 200-300 mL/jam", isCorrect: true, feedback: "Kunci mencegah presipitasi mioglobin di tubulus ginjal.", scoreWeight: 35 },
      { id: "act-3", actionName: "Anjurkan pasien berolahraga lari dan memijat otot betisnya keras-keras", isCorrect: false, feedback: "FATAL! Olahraga dan pemijatan mempercepat lisis otot dan memperberat pelepasan mioglobin toksik!", scoreWeight: -50 },
      { id: "act-4", actionName: "Laporkan warna urin gelap dan nilai CK 18.500 U/L segera ke dokter", isCorrect: true, feedback: "Komunikasi kritis kondisi gawat darurat rhabdomiolisis.", scoreWeight: 30 }
    ],
    familyQuestion: "Sus, kenapa air seni suami saya hitam pekat seperti air teh basi dan badannya tidak bisa digerakkan?",
    familyIdealAnswer: "Bapak mengalami kerusakan jaringan otot yang cepat (disebut rhabdomiolisis). Ini terjadi akibat interaksi antara obat kolesterol statin dan obat penurun lemak gemfibrozil yang diminum bersamaan. Protein dari otot yang luruh dibuang melalui ginjal dan membuat air seni berwarna gelap. Kami sedang mengalirkan cairan infus dalam jumlah besar untuk membilas ginjal bapak agar tidak rusak.",
    doctorConsultSBAR: {
      situation: "Dokter Sp.PD, pasien Tn. Subagyo di Dahlia 2 mengalami rhabdomiolisis berat dengan CK 18.500 U/L.",
      background: "Kombinasi atorvastatin 40mg + gemfibrozil 2x600mg 10 hari.",
      assessment: "Urin warna cola mioglobinuria (+), kreatinin 2,3 mg/dL, kalium 5,4. Obat lipid sudah distop.",
      recommendation: "Mohon konfirmasi protokol hidrasi agresif 300 mL/jam dan alkalisasi natrium bikarbonat."
    },
    mesoReport: {
      eventDescription: "Rhabdomiolisis masif (CK 18.500 U/L) dengan mioglobinuria dan AKI akibat interaksi atorvastatin dan gemfibrozil.",
      severityDegree: "Mengancam Jiwa",
      immediateAction: "Stop obat lipid, hidrasi salin agresif, alkalisasi urin, pemantauan urinometer."
    },
    references: "ACC/AHA Cholesterol Guidelines; UpToDate Rhabdomyolysis; Modul Rajawali."
  },

  // ==================== KELOMPOK 3 (15 - 20) ====================
  {
    id: 15,
    groupTitle: "Kelompok 3 — Reaksi Neurologis dan Kardiovaskular",
    groupNumber: 3,
    caseCode: "KASUS-15",
    title: "Sindrom Serotonin Akibat Kombinasi Antidepresan SSRI dan Analgesik Tramadol",
    patientName: "Ny. Shinta",
    age: 38,
    gender: "Perempuan",
    roomLocation: "Ruang Rawat Inap Dahlia - Bed 4",
    roomKey: "inpatient",
    chiefComplaint: "Gelisah bergerak terus tanpa henti, demam tinggi, gemetar bergetar (klonus), dan diare mendadak.",
    anamnesis: "Pasien sedang mengonsumsi fluoksetin 20 mg 1x sehari untuk depresi mayor. Dua hari lalu pasien mengalami nyeri gigi akut dan diresepkan tramadol 50 mg 3x sehari oleh klinik gigi. Sejak tadi malam pasien berkeringat deras, pupil membesar lebar (midriasis), tremor tak sadar, otot kaku menyentak (mioklonus spontan), serta gelisah bicara cepat (agitasi).",
    historyOfPresentIllness: "Depresi mayor terkontrol 6 bulan.",
    pastMedicalHistory: "Tidak ada riwayat kejang.",
    medicationHistory: [
      { drugName: "Fluoksetin", dose: "20 mg", route: "Oral", timing: "1x sehari pagi", indication: "Depresi Mayor", isSuspectedDrug: true },
      { drugName: "Tramadol", dose: "50 mg", route: "Oral", timing: "3x sehari", indication: "Nyeri gigi", isSuspectedDrug: true }
    ],
    physicalExamDoctor: "Suhu 38,9°C (Hipertermia), TD 156/94 mmHg, Nadi 126 x/menit, RR 24 x/menit, SpO₂ 98%. Pasien sangat gelisah (agitasi). Diaforesis berat (keringat membasahi baju), pupil midriasis bilateral 5 mm. Klonus okular (+), klonus pergelangan kaki spontan dan terinduksi (>5 ketukan), hiperrefleksia ekstremitas bawah > atas. Bising usus hiperaktif borborigmi.",
    vitalSigns: { bloodPressure: "156/94 mmHg", heartRate: 126, respiratoryRate: 24, temperature: 38.9, spO2: 98, gcs: "E4V4M6 (14) - Agitasi" },
    labResults: [
      { testName: "Kriteria Hunter untuk Sindrom Serotonin", resultValue: "Positif Terpenuhi (Klonus Spontan + Diaforesis + Agitasi + Hipertermia)", unit: "", normalRange: "Negatif", isAbnormal: true, clinicalSignificance: "Diagnosis definitif sindrom toksisitas serotonin" },
      { testName: "Kreatin Kinase (CK)", resultValue: "1200", unit: "U/L", normalRange: "30–200", isAbnormal: true, clinicalSignificance: "Mulai terjadi kerusakan serat otot akibat mioklonus konstan" },
      { testName: "Leukosit Darah", resultValue: "11500", unit: "/µL", normalRange: "4000–10000", isAbnormal: true, clinicalSignificance: "Leukositosis reaktif stres fisiologis" }
    ],
    suspectedESO: "Sindrom Serotonin Akut Imbas Sinergisme Serotonergik Fluoksetin & Tramadol",
    esoType: "Interaksi",
    triageLevel: "Gawat Darurat (Merah)",
    redFlags: ["Hipertermia ganas (>40°C) memicu rhabdomiolisis dan DIC", "Rigiditas otot respirasi dan kegagalan ventilasi"],
    primaryActionPriority: "Hentikan segera fluoksetin dan tramadol, berikan sedasi benzodiazepin (Diazepam IV), pendinginan aktif, dan antagonis serotonin (Siproheptadin).",
    doctorOrders: ["Stop seluruh agen serotonergik", "Diazepam 5–10 mg IV pelan untuk meredakan agitasi dan klonus otot", "Pendinginan eksternal aktif (cooling blanket, es axilla)", "Siproheptadin oral/NGT 12 mg dosis awal lanjut 2 mg tiap 2 jam", "Monitor suhu inti dan saturasi kontinu"],
    nurseInterventions: [
      { id: "act-1", actionName: "Hentikan pemberian tramadol dan fluoksetin seketika", isCorrect: true, feedback: "Memutus kelebihan stimulasi reseptor 5-HT.", scoreWeight: 30 },
      { id: "act-2", actionName: "Lakukan kompres dingin dan berikan hidrasi IV untuk menurunkan hipertermia", isCorrect: true, feedback: "Mencegah kerusakan multiorgan akibat hipertermia ganas.", scoreWeight: 35 },
      { id: "act-3", actionName: "Berikan antipiretik parasetamol oral dosis ganda", isCorrect: false, feedback: "TIDAK EFEKTIF! Hipertermia pada sindrom serotonin berasal dari aktivitas otot perifer, bukan set point hipotalamus!", scoreWeight: -40 },
      { id: "act-4", actionName: "Kolaborasi injeksi diazepam IV untuk mengontrol tremor dan agitasi", isCorrect: true, feedback: "Benzodiazepin adalah pilar utama stabilisasi neuromuskular sindrom serotonin.", scoreWeight: 35 }
    ],
    familyQuestion: "Sus, kenapa adik saya gelisah ketakutan, badannya panas tinggi dan kakinya menyentak-nyentak sendiri?",
    familyIdealAnswer: "Adik mengalami sindrom serotonin, yaitu kelebihan zat kimia serotonin di saraf akibat kombinasi obat depresi fluoksetin dengan obat pereda sakit gigi tramadol. Hal ini menyebabkan otot bergetar kaku dan suhu tubuh naik. Obat-obat tersebut sudah dihentikan dan kami sedang menyuntikkan obat penenang khusus serta kompres dingin untuk meredakan gejalanya.",
    doctorConsultSBAR: {
      situation: "Dokter, Ny. Shinta di Dahlia 4 memenuhi kriteria Hunter untuk Sindrom Serotonin berat.",
      background: "Rutin fluoksetin, baru minum tramadol 3x50mg 2 hari untuk sakit gigi.",
      assessment: "Suhu 38,9 C, HR 126x/m, klonus spontan, diaforesis, agitasi. Obat serotonergik sudah distop.",
      recommendation: "Mohon izin injeksi Diazepam 5 mg IV pelan dan peresepan antidotum Siproheptadin."
    },
    mesoReport: {
      eventDescription: "Sindrom Serotonin berat (klonus, hipertermia 38,9 C, agitasi) imbas kombinasi fluoksetin dan tramadol.",
      severityDegree: "Mengancam Jiwa",
      immediateAction: "Stop agen serotonergik, diazepam IV, pendinginan aktif, siproheptadin."
    },
    references: "Boyer EW, Shannon M. The Serotonin Syndrome. N Engl J Med; Modul Rajawali."
  },
  {
    id: 16,
    groupTitle: "Kelompok 3 — Reaksi Neurologis dan Kardiovaskular",
    groupNumber: 3,
    caseCode: "KASUS-16",
    title: "Neuroleptic Malignant Syndrome (NMS) Akibat Antipsikotik Haloperidol",
    patientName: "Tn. Rahmat",
    age: 32,
    gender: "Laki-laki",
    roomLocation: "Ruang Rawat Inap Isolasi Dahlia - Bed 5",
    roomKey: "inpatient",
    chiefComplaint: "Kekakuan otot seluruh tubuh seperti pipa timah ('lead-pipe rigidity'), demam tinggi membara, dan penurunan kesadaran.",
    anamnesis: "Pasien dengan skizofrenia akut mendapat terapi haloperidol 5 mg IM 2 kali sehari selama 4 hari untuk mengatasi agitasi. Sejak 24 jam terakhir pasien menjadi sangat kaku tidak dapat ditekuk tangan dan kakinya, demam melonjak hingga 40,1°C, berkeringat basah kuyup, tensi naik turun tidak stabil (labil), dan sulit diajak berkomunikasi (stupor).",
    historyOfPresentIllness: "Skizofrenia paranoid eksaserbasi akut.",
    pastMedicalHistory: "Tidak ada riwayat alergi.",
    medicationHistory: [
      { drugName: "Haloperidol", dose: "5 mg", route: "Intramuskular", timing: "2x sehari", indication: "Agitasi psikotik", isSuspectedDrug: true },
      { drugName: "Triheksifenidil", dose: "2 mg", route: "Oral", timing: "1x sehari", indication: "Antikolinergik" }
    ],
    physicalExamDoctor: "Suhu rektal 40,1°C (Hipertermia ekstrem), TD labil berfluktuasi 170/100 hingga 110/70 mmHg, Nadi 130 x/menit, RR 28 x/menit. Tingkat kesadaran Stupor (GCS E2V2M4: 8). Pemeriksaan motorik: rigiditas 'lead-pipe' ekstrem pada keempat ekstremitas dan leher. Refleks tendon menurun/hiporefleksia (kontras dengan sindrom serotonin). Diaforesis berat, lidah kering.",
    vitalSigns: { bloodPressure: "170/100 mmHg (labil)", heartRate: 130, respiratoryRate: 28, temperature: 40.1, spO2: 95, gcs: "E2V2M4 (8) - Stupor" },
    labResults: [
      { testName: "Kreatin Kinase (CK Serum)", resultValue: "24000", unit: "U/L", normalRange: "30–200", isAbnormal: true, clinicalSignificance: "Rhabdomiolisis masif sekunder rigiditas otot ekstrem" },
      { testName: "Leukosit Darah", resultValue: "18600", unit: "/µL", normalRange: "4000–10000", isAbnormal: true, clinicalSignificance: "Leukositosis dramatis khas NMS" },
      { testName: "Kreatinin Serum", resultValue: "2.6", unit: "mg/dL", normalRange: "0.7–1.3", isAbnormal: true, clinicalSignificance: "Acute Kidney Injury akibat myoglobinuria" }
    ],
    suspectedESO: "Neuroleptic Malignant Syndrome (NMS) Akibat Blokade Dopamin D2 Sentral",
    esoType: "Tipe B",
    triageLevel: "Gawat Darurat (Merah)",
    redFlags: ["Hipertermia maligna >40°C memicu disfungsi multiorgan", "Gagal ginjal akut anurik", "Kolaps kardiovaskular otonom"],
    primaryActionPriority: "Hentikan seketika haloperidol, rujuk rawat intensif (ICU), pendinginan agresif, berikan agonis dopamin (Bromokriptin) atau Dantrolen.",
    doctorOrders: ["Stop Haloperidol permanen", "Transfer segera ke ICU", "Dantrolen 1–2,5 mg/kgBB IV atau Bromokriptin 2,5–5 mg via NGT tiap 8 jam", "Hidrasi cairan kristaloid 3.000 mL/24 jam", "Pendinginan eksternal aktif", "Koreksi asam basa dan hemodialisis bila perlu"],
    nurseInterventions: [
      { id: "act-1", actionName: "Hentikan suntikan haloperidol dan pasang monitor tanda vital kontinu di ruang isolasi/ICU", isCorrect: true, feedback: "Memutus blokade reseptor dopamin hipotalamus dan korpus striatum.", scoreWeight: 35 },
      { id: "act-2", actionName: "Lakukan pemasangan kompres es, selimut pendingin, dan rehidrasi cairan IV", isCorrect: true, feedback: "Menyelamatkan otak dari kerusakan panas >40°C.", scoreWeight: 35 },
      { id: "act-3", actionName: "Memberikan injeksi klorpromazin untuk meredakan demamnya", isCorrect: false, feedback: "FATAL! Klorpromazin adalah antipsikotik lain yang akan memperburuk NMS hingga kematian!", scoreWeight: -50 },
      { id: "act-4", actionName: "Pasang selang NGT dan bantu pemberian obat relaksan Dantrolen / Bromokriptin", isCorrect: true, feedback: "Terapi spesifik relaksasi retikulum sarkoplasma otot rangka.", scoreWeight: 30 }
    ],
    familyQuestion: "Sus, kenapa badan anak saya kaku seperti kayu, badannya panas sekali dan tidak sadar?",
    familyIdealAnswer: "Pasien mengalami komplikasi langka dan berat dari obat antipsikotik haloperidol yang disebut Sindrom Neuroleptik Maligna. Obat ini mengunci reseptor dopamin sehingga suhu tubuh naik drastis dan otot menjadi sangat kaku. Kami telah menghentikan obat tersebut dan memindahkannya ke ICU untuk pendinginan dan obat pelemas otot khusus.",
    doctorConsultSBAR: {
      situation: "Dokter ICU, pasien Tn. Rahmat di Isolasi 5 mengalami krisis Neuroleptic Malignant Syndrome.",
      background: "Haloperidol 2x5mg IM hari ke-4 untuk agitasi psikotik.",
      assessment: "Suhu 40,1 C, tensi labil 170/100, lead-pipe rigidity, CK 24.000, leukosit 18.600, stupor. Haloperidol distop.",
      recommendation: "Mohon izin segera transfer ke ICU untuk inisiasi Dantrolen IV dan hidrasi proteksi ginjal."
    },
    mesoReport: {
      eventDescription: "Neuroleptic Malignant Syndrome (suhu 40,1 C, lead-pipe rigidity, CK 24.000 U/L) akibat haloperidol IM.",
      severityDegree: "Mengancam Jiwa",
      immediateAction: "Stop antipsikotik, ICU transfer, Dantrolen IV, pendinginan aktif, rehidrasi masif."
    },
    references: "Strawn JR et al. Neuroleptic Malignant Syndrome. Am J Psychiatry; Modul Rajawali."
  },
  {
    id: 17,
    groupTitle: "Kelompok 3 — Reaksi Neurologis dan Kardiovaskular",
    groupNumber: 3,
    caseCode: "KASUS-17",
    title: "Pemanjangan Interval QT & Aritmia Torsades de Pointes Imbas Polifarmasi",
    patientName: "Ny. Rostini",
    age: 62,
    gender: "Perempuan",
    roomLocation: "Ruang Rawat Inap Cempaka - Bed 5",
    roomKey: "inpatient",
    chiefComplaint: "Pingsan mendadak saat duduk (sinkop), dada berdegup kencang melompat-lompat, dan pusing gelap.",
    anamnesis: "Pasien dirawat dengan pneumonia dan infeksi jamur kandidiasis. Pasien mendapat infus levofloksasin 750 mg 1x sehari, flukonazol 200 mg 1x sehari, dan ondansetron 8 mg IV 3x sehari untuk mual. Pasien juga mengalami diare yang menyebabkan hipokalemia (K 3.1 mmol/L). Beberapa menit lalu pasien pingsan hilang kesadaran selama 30 detik di ranjang.",
    historyOfPresentIllness: "Pneumonia nosokomial dan kandidiasis oral.",
    pastMedicalHistory: "Penyakit jantung koroner.",
    medicationHistory: [
      { drugName: "Levofloksasin IV", dose: "750 mg", route: "Intravena", timing: "1x sehari", indication: "Pneumonia", isSuspectedDrug: true },
      { drugName: "Flukonazol IV", dose: "200 mg", route: "Intravena", timing: "1x sehari", indication: "Kandidiasis", isSuspectedDrug: true },
      { drugName: "Ondansetron IV", dose: "8 mg", route: "Intravena", timing: "3x sehari", indication: "Antiemetik", isSuspectedDrug: true },
      { drugName: "Furosemid", dose: "20 mg", route: "Oral", timing: "1x sehari", indication: "Edema" }
    ],
    physicalExamDoctor: "TD 94/60 mmHg, Nadi 110 x/menit ireguler, SpO₂ 96%. Monitor EKG menunjukkan takikardia ventrikel polimorfik dengan karakteristik memutar mengitari garis isoelektrik khas Torsades de Pointes (TdP) yang diselingi pemanjangan QTc baseline mencapai 560 ms (Normal QTc wanita < 460 ms).",
    vitalSigns: { bloodPressure: "94/60 mmHg", heartRate: 110, respiratoryRate: 20, temperature: 36.8, spO2: 96, gcs: "E4V4M6 (14) - Pasca Sinkop" },
    labResults: [
      { testName: "Interval QTc pada EKG 12 Lead", resultValue: "560", unit: "ms", normalRange: "< 460 (wanita)", isAbnormal: true, clinicalSignificance: "Pemanjangan QTc kritis (>500 ms pemicu Torsades de Pointes)" },
      { testName: "Kalium Serum", resultValue: "3.1", unit: "mmol/L", normalRange: "3.5–5.0", isAbnormal: true, clinicalSignificance: "Hipokalemia memperlambat repolarisasi miokardium" },
      { testName: "Magnesium Serum", resultValue: "1.4", unit: "mg/dL", normalRange: "1.7–2.2", isAbnormal: true, clinicalSignificance: "Hipomagnesemia memperkuat instabilitas kelistrikan ventrikel" }
    ],
    suspectedESO: "Drug-Induced Long QT Syndrome (LQTS) & Torsades de Pointes",
    esoType: "Interaksi",
    triageLevel: "Gawat Darurat (Merah)",
    redFlags: ["Degenerasi Torsades de Pointes menjadi Fibrilasi Ventrikel (VF) henti jantung", "Sinkop berulang dengan kolaps hemodinamik"],
    primaryActionPriority: "Hentikan levofloksasin, flukonazol, dan ondansetron; injeksikan Magnesium Sulfat (MgSO4) 2 gram IV bolus pelan, koreksi kalium, siapkan defibrilator.",
    doctorOrders: ["Stop segera Levofloksasin, Flukonazol, dan Ondansetron", "Injeksi Magnesium Sulfat (MgSO4 20%) 2 gram dalam 100 mL D5% IV selama 10–15 menit", "Koreksi Kalium target > 4.5 mmol/L", "Pasang paddle defibrilator bersiap kardioversi tersinkronisasi / defibrilasi bila TdP menetap", "Ganti antibiotik dengan kelas yang aman untuk QT (misal beta laktam)"],
    nurseInterventions: [
      { id: "act-1", actionName: "Hentikan pemberian obat pemicu pemanjangan QT dan siapkan troli emergency defibrilator", isCorrect: true, feedback: "Penyelamatan jiwa primer aritmia letal.", scoreWeight: 35 },
      { id: "act-2", actionName: "Berikan Magnesium Sulfat 2 g IV drip pelan sesuai resep dokter", isCorrect: true, feedback: "Magnesium menstabilkan potensial aksi miokard dan memutus Torsades.", scoreWeight: 35 },
      { id: "act-3", actionName: "Memberikan injeksi amiodaron IV cepat", isCorrect: false, feedback: "KONTRAINDIKASI MUTLAK! Amiodaron memperpanjang QT lebih lanjut dan memicu asistol!", scoreWeight: -50 },
      { id: "act-4", actionName: "Pantau EKG strip kontinu dan ukur interval QTc berkala", isCorrect: true, feedback: "Memastikan QTc memendek kembali ke <460 ms.", scoreWeight: 30 }
    ],
    familyQuestion: "Sus, kenapa tiba-tiba ibu pingsan dan monitor jantungnya berbunyi garis gelombang tidak karuan?",
    familyIdealAnswer: "Ibu mengalami gangguan irama jantung berbahaya yang disebut Torsades de Pointes. Ini terjadi karena interaksi beberapa obat (antibiotik levofloksasin, antijamur, dan obat mual) yang dikombinasikan dengan kadar garam kalium yang rendah. Kami sudah menghentikan obat-obat tersebut dan memberikan suntikan magnesium untuk menstabilkan irama denyut jantung ibu.",
    doctorConsultSBAR: {
      situation: "Dokter Jaga ICU, pasien Ny. Rostini di Cempaka 5 mengalami aritmia Torsades de Pointes dengan QTc 560 ms.",
      background: "Terapi kombinasi Levofloksasin + Flukonazol + Ondansetron, hipokalemia 3.1 mmol/L.",
      assessment: "Episode TdP berulang, pasca sinkop, Mg 1.4 mg/dL. Obat-obat QT prolonging sudah distop.",
      recommendation: "Mohon izin pemberian MgSO4 2g IV dan koreksi KCl infus target K > 4.5."
    },
    mesoReport: {
      eventDescription: "Pemanjangan interval QTc (560 ms) dan episode Torsades de Pointes akibat kombinasi levofloksasin, flukonazol, ondansetron.",
      severityDegree: "Mengancam Jiwa",
      immediateAction: "Stop obat penyebab, MgSO4 IV bolus pelan, koreksi kalium, defibrilator stand-by."
    },
    references: "AHA/ACC Scientific Statement on Prevention of Torsades de Pointes; CredibleMeds QT drugs list."
  },
  {
    id: 18,
    groupTitle: "Kelompok 3 — Reaksi Neurologis dan Kardiovaskular",
    groupNumber: 3,
    caseCode: "KASUS-18",
    title: "Angioedema Obstruktif Akut Akibat ACE Inhibitor (Kaptopril)",
    patientName: "Tn. Anwar",
    age: 58,
    gender: "Laki-laki",
    roomLocation: "Ruang Rawat Inap Dahlia - Bed 3",
    roomKey: "inpatient",
    chiefComplaint: "Lidah membesar tebal memenuhi mulut, bibir jontor bengkak, dan sulit menelan ludah.",
    anamnesis: "Pasien baru mulai mengonsumsi kaptopril 25 mg 2x sehari untuk hipertensi sejak 5 hari lalu. Pagi ini saat bangun tidur pasien kaget mendapati bibir bawah dan atas membengkak tebal, lidah membesar hingga sulit dimasukkan ke dalam mulut, suara terdengar sengau parau (hot-potato voice), dan air liur menetes karena tidak dapat menelan. Tidak ada gatal atau bentol di badan.",
    historyOfPresentIllness: "Hipertensi esensial baru.",
    pastMedicalHistory: "Tidak ada riwayat alergi makanan.",
    medicationHistory: [
      { drugName: "Kaptopril", dose: "25 mg", route: "Oral", timing: "2x sehari", indication: "Hipertensi", isSuspectedDrug: true },
      { drugName: "Aspirin", dose: "80 mg", route: "Oral", timing: "1x sehari", indication: "Pencegahan kardiovaskular" }
    ],
    physicalExamDoctor: "TD 148/88 mmHg, Nadi 96 x/menit, RR 22 x/menit, SpO₂ 96%. Angioedema masif non-pitting pada bibir, lidah (makroglosia obstruktif), dan uvula. Tidak ada urtikaria (khas angioedema bradikinin, bukan histaminergik). Stridor inspiratoir ringan saat bernapas dalam.",
    vitalSigns: { bloodPressure: "148/88 mmHg", heartRate: 96, respiratoryRate: 22, temperature: 36.7, spO2: 96, gcs: "E4V5M6 (15)" },
    labResults: [
      { testName: "Komplemen C4", resultValue: "28", unit: "mg/dL", normalRange: "16–47", isAbnormal: false, clinicalSignificance: "Normal (menyingkirkan Angioedema Herediter defisiensi C1-INH)" },
      { testName: "IgE Total", resultValue: "45", unit: "IU/mL", normalRange: "< 100", isAbnormal: false, clinicalSignificance: "Normal (bukan reaksi hipersensitivitas Tipe I klasik)" },
      { testName: "Kreatinin Serum", resultValue: "1.0", unit: "mg/dL", normalRange: "0.7–1.3", isAbnormal: false, clinicalSignificance: "Fungsi ginjal normal" }
    ],
    suspectedESO: "Bradykinin-Mediated Angioedema Akibat Penghambatan Enzim ACE",
    esoType: "Tipe A",
    triageLevel: "Gawat Darurat (Merah)",
    redFlags: ["Obstruksi jalan napas atas total (asfiksia fatal)", "Gagal intubasi oral karena makroglosia (memerlukan krikotiroidotomi emergensi)"],
    primaryActionPriority: "Hentikan segera kaptopril permanen, amankan jalan napas (siapkan intubasi/krikotiroidotomi), berikan oksigenasi, dan pertimbangkan Icatibant / FFP.",
    doctorOrders: ["Stop Kaptopril permanen, beri label peringatan di berkas rekam medis", "Konsultasi emergensi Spesialis Anestesi untuk manajemen jalan napas sulit", "Siapkan set krikotiroidotomi di samping tempat tidur", "Injeksi Epinefrin IM 0,5 mg dan Deksametason 10 mg IV (meskipun respons bradikinin lambat)", "Icatibant 30 mg SC atau transfusi 2 unit FFP (mengandung enzim penonaktif bradikinin)"],
    nurseInterventions: [
      { id: "act-1", actionName: "Hentikan segera kaptopril dan pasang label kontraindikasi mutlak seluruh golongan ACE-I", isCorrect: true, feedback: "Mencegah paparan ulang yang berakibat fatal.", scoreWeight: 30 },
      { id: "act-2", actionName: "Posisikan fowler tinggi, berikan O2 kanul, dan siapkan alat suction serta set intubasi jalan napas sulit", isCorrect: true, feedback: "Antisipasi sumbatan laring total sewaktu-waktu.", scoreWeight: 40 },
      { id: "act-3", actionName: "Menyuruh pasien meminum air putih banyak untuk meredakan haus", isCorrect: false, feedback: "BERBAHAYA! Pasien tidak mampu menelan (disfagia berat), air akan langsung masuk ke trakea memicu aspirasi!", scoreWeight: -50 },
      { id: "act-4", actionName: "Pantau suara napas stridor dan kedalaman retraksi leher tiap 10 menit", isCorrect: true, feedback: "Deteksi dini kegagalan ventilasi mekanik.", scoreWeight: 30 }
    ],
    familyQuestion: "Sus, bibir dan lidah bapak bengkak besar sekali sampai tidak bisa bicara, apakah tersengat lebah?",
    familyIdealAnswer: "Bukan tersengat lebah Pak/Bu, ini adalah efek samping khusus dari obat tensi Kaptopril yang baru diminum. Obat ini menyebabkan penumpukan zat bradikinin alami tubuh yang membuat jaringan bibir dan lidah bengkak. Kami sudah menghentikan obat tersebut dan tim dokter anestesi sedang bersiap menjaga saluran napas bapak tetap aman terbuka.",
    doctorConsultSBAR: {
      situation: "Dokter Anestesi & Sp.PD, pasien Tn. Anwar di Dahlia 3 mengalami angioedema lidah berat imbas Kaptopril.",
      background: "Konsumsi kaptopril hari ke-5. Lidah membesar memenuhi orofaring, drooling saliva (+).",
      assessment: "Stridor inspiratoir mulai terdengar, saturasi 96%. Kaptopril sudah distop.",
      recommendation: "Mohon evaluasi segera di samping ranjang untuk kesiapan intubasi fiberoptik / krikotiroidotomi."
    },
    mesoReport: {
      eventDescription: "Angioedema lidah dan bibir masif mengancam jalan napas akibat akumulasi bradikinin imbas Kaptopril.",
      severityDegree: "Mengancam Jiwa",
      immediateAction: "Stop ACE-I permanen, proteksi jalan napas sulit, FFP/Icatibant."
    },
    references: "WAO/EAACI Angioedema Guidelines; Bas M et al. ACE-inhibitor-induced angioedema; Modul Rajawali."
  },
  {
    id: 19,
    groupTitle: "Kelompok 3 — Reaksi Neurologis dan Kardiovaskular",
    groupNumber: 3,
    caseCode: "KASUS-19",
    title: "Edema Perifer Pretibial Bilateral Akibat Antihipertensi Amlodipin",
    patientName: "Ny. Farida",
    age: 56,
    gender: "Perempuan",
    roomLocation: "Ruang Rawat Inap Melati - Bed 1",
    roomKey: "inpatient",
    chiefComplaint: "Kedua pergelangan kaki bengkak melembung, sepatu tidak muat, dan terasa berat saat berjalan.",
    anamnesis: "Pasien mengonsumsi amlodipin 10 mg 1x sehari untuk hipertensi sejak 3 minggu lalu (sebelumnya dosis 5 mg dinaikkan menjadi 10 mg karena tensi belum mencapai target). Pasien cemas mengira bengkak tersebut adalah gagal ginjal atau gagal jantung. Pasien tidak merasa sesak napas saat berbaring (ortopnea negatif) dan tidak ada batuk malam hari.",
    historyOfPresentIllness: "Hipertensi esensial 6 tahun.",
    pastMedicalHistory: "Tidak ada riwayat penyakit ginjal atau jantung.",
    medicationHistory: [
      { drugName: "Amlodipin", dose: "10 mg", route: "Oral", timing: "1x sehari pagi", indication: "Hipertensi", isSuspectedDrug: true }
    ],
    physicalExamDoctor: "TD 128/82 mmHg, Nadi 78 x/menit, RR 18 x/menit, SpO₂ 99%. JVP 5-2 cmH2O (tidak meningkat). Suara paru vesikuler bersih tanpa ronkhi. Abdomen supel, hepar tidak teraba. Ekstremitas inferior: Pitting edema bilateral simetris grade +2 pada pretibial dan maleolus medialis, tidak ada tanda eritema atau nyeri selulitis.",
    vitalSigns: { bloodPressure: "128/82 mmHg", heartRate: 78, respiratoryRate: 18, temperature: 36.6, spO2: 99, gcs: "E4V5M6 (15)" },
    labResults: [
      { testName: "Kreatinin Serum", resultValue: "0.8", unit: "mg/dL", normalRange: "0.6–1.1", isAbnormal: false, clinicalSignificance: "Fungsi ginjal normal" },
      { testName: "Albumin Serum", resultValue: "4.1", unit: "g/dL", normalRange: "3.5–5.0", isAbnormal: false, clinicalSignificance: "Tekanan onkotik normal (menyingkirkan hipoalbuminemia)" },
      { testName: "NT-proBNP", resultValue: "65", unit: "pg/mL", normalRange: "< 125", isAbnormal: false, clinicalSignificance: "Menyingkirkan gagal jantung kongestif" }
    ],
    suspectedESO: "Vasodilatory Edema Perifer Akibat Calcium Channel Blocker (CCB Diihidropiridin)",
    esoType: "Tipe A",
    triageLevel: "Sedang (Hijau)",
    redFlags: ["Edema anasarka menyeluruh", "Sesak napas akut dan ronkhi paru (gagal jantung kongestif)", "Edema asimetris dengan nyeri betis (Deep Vein Thrombosis / DVT)"],
    primaryActionPriority: "Edukasi elevasi tungkai saat istirahat, hindari berdiri terlalu lama, evaluasi penurunan dosis amlodipin ke 5 mg atau kombinasi dengan ARB/ACE-I.",
    doctorOrders: ["Turunkan dosis Amlodipin menjadi 5 mg atau ganti kombinasi dengan Candesartan/Valsartan (venodilatasi menyeimbangkan tekanan kapiler)", "Edukasi elevasi kaki setinggi jantung saat berbaring", "Gunakan stoking kompresi elastis bila perlu", "Hindari pemberian diuretik berlebihan"],
    nurseInterventions: [
      { id: "act-1", actionName: "Kaji derajat pitting edema pretibial dan ukur lingkar pergelangan kaki secara berkala", isCorrect: true, feedback: "Evaluasi objektif tingkat keparahan retensi cairan interstisial.", scoreWeight: 35 },
      { id: "act-2", actionName: "Edukasi pasien menopang kaki dengan bantal saat tidur dan menjelaskan mekanisme vasodilatasi obat", isCorrect: true, feedback: "Menenangkan kecemasan pasien bahwa ginjalnya tidak rusak.", scoreWeight: 35 },
      { id: "act-3", actionName: "Memberikan furosemid dosis tinggi mandiri tanpa instruksi dokter", isCorrect: false, feedback: "SALAH! Edema CCB bukan karena retensi cairan absolut, melainkan ekstravasasi akibat vasodilatasi arteriol; diuretik tidak efektif dan memicu dehidrasi!", scoreWeight: -45 },
      { id: "act-4", actionName: "Kolaborasi dengan dokter untuk penyesuaian dosis amlodipin atau kombinasi ARB", isCorrect: true, feedback: "ARB/ACE-I merelaksasi venula post-kapiler, menurunkan tekanan kapiler dan mengatasi edema amlodipin.", scoreWeight: 30 }
    ],
    familyQuestion: "Sus, apakah kaki ibu saya yang bengkak ini tanda sakit ginjalnya sudah rusak parah?",
    familyIdealAnswer: "Bukan Bu, hasil pemeriksaan darah dan urin menunjukkan fungsi ginjal ibu Farida normal sekali. Bengkak ini murni efek samping dari obat tensi Amlodipin yang melebarkan pembuluh darah halus di kaki sehingga cairan merembes ke jaringan sekitarnya. Ini tidak berbahaya bagi ginjal. Nanti dokter akan menyesuaikan dosisnya dan saat istirahat kaki ibu bisa diganjal bantal agar bengkaknya cepat kempes.",
    doctorConsultSBAR: {
      situation: "Dokter Sp.PD, pasien Ny. Farida mengeluh pitting edema bilateral pretibial +2 pasca kenaikan amlodipin 10mg.",
      background: "Amlodipin dinaikkan 3 minggu lalu. Fungsi ginjal (kreatinin 0,8) dan NT-proBNP normal.",
      assessment: "Edema perifer e.c. ekstravasasi kapiler CCB, tensi terkontrol 128/82 mmHg.",
      recommendation: "Mohon pertimbangan penurunan amlodipin ke 5 mg dikombinasikan dengan ARB (Candesartan 8 mg)."
    },
    mesoReport: {
      eventDescription: "Pitting edema pretibial bilateral simetris grade +2 timbul setelah titrasi amlodipin hingga 10 mg.",
      severityDegree: "Ringan - Sedang (Efek samping farmakologis Tipe A)",
      immediateAction: "Elevasi tungkai, penyesuaian dosis CCB, edukasi pasien."
    },
    references: "Makani H et al. Peripheral edema associated with calcium channel blockers. J Clin Hypertens; Modul Rajawali."
  },
  {
    id: 20,
    groupTitle: "Kelompok 3 — Reaksi Neurologis dan Kardiovaskular",
    groupNumber: 3,
    caseCode: "KASUS-20",
    title: "Reaksi Infus Cepat Vancomisin Menyerupai Alergi (Red Man Syndrome)",
    patientName: "Tn. Dimas",
    age: 31,
    gender: "Laki-laki",
    roomLocation: "Ruang Rawat Inap Cempaka - Bed 1",
    roomKey: "inpatient",
    chiefComplaint: "Kulit wajah, leher, dan dada mendadak merah membara panas, gatal hebat, dan pusing melayang saat infus masuk.",
    anamnesis: "Pasien dirawat dengan infeksi tulang osteomielitis MRSA. Pasien dijadwalkan menerima infus vancomisin 1 gram dalam 100 mL NaCl 0,9%. Karena terburu-buru, perawat mengatur tetesan infus habis dalam waktu 20 menit (seharusnya minimal 60 menit per 1 gram). Sepuluh menit kemudian pasien mengeluh kulit wajah dan dada atas terasa panas terbakar, muncul bercak kemerahan menyala (flushing eritematosa), gatal, dan dada berdebar.",
    historyOfPresentIllness: "Osteomielitis kronis femur sinistra pasca kecelakaan.",
    pastMedicalHistory: "Tidak ada riwayat alergi antibiotik.",
    medicationHistory: [
      { drugName: "Vancomisin IV Drip", dose: "1 gram", route: "Intravena", timing: "Tiap 12 jam", indication: "Osteomielitis MRSA", isSuspectedDrug: true }
    ],
    physicalExamDoctor: "TD 94/56 mmHg (Penurunan transien tensi darah), Nadi 106 x/menit, RR 20 x/menit, Suhu 36,9°C, SpO₂ 98%. Ditemukan eritema difus kemerahan cerah menyala pada wajah, leher, bahu, dan punggung atas ('Red Man / Red Neck'). Tidak ada mengi wheezing pada auskultasi paru, tidak ada angioedema pada bibir atau lidah.",
    vitalSigns: { bloodPressure: "94/56 mmHg", heartRate: 106, respiratoryRate: 20, temperature: 36.9, spO2: 98, gcs: "E4V5M6 (15)" },
    labResults: [
      { testName: "Histamin Plasma", resultValue: "Tinggi Signifikan", unit: "", normalRange: "Normal", isAbnormal: true, clinicalSignificance: "Pelepasan histamin langsung non-imunologis dari sel mast" },
      { testName: "IgE Spesifik Vancomisin", resultValue: "Negatif", unit: "", normalRange: "Negatif", isAbnormal: false, clinicalSignificance: "Bukan reaksi anafilaksis Tipe I imunologis" }
    ],
    suspectedESO: "Pseudoalergi / Reaksi Anafilaktoid (Red Man Syndrome) Akibat Infus Vancomisin Cepat",
    esoType: "Tipe B",
    triageLevel: "Urgensi Tinggi (Kuning)",
    redFlags: ["Spasme otot dada berat (chest muscle rigidity)", "Syok vasodilatasi berat menetap"],
    primaryActionPriority: "Hentikan infus seketika, injeksikan difenhidramin IV pelan, tunggu gejala reda, lalu mulai kembali infus dengan kecepatan lambat (minimal 1,5 - 2 jam) dengan pengenceran cairan yang lebih banyak.",
    doctorOrders: ["Hentikan infus vancomisin sementara", "Injeksi Difenhidramin 25–50 mg IV pelan", "Berikan loading cairan kristaloid 250 mL bila TD masih rendah", "Setelah ruam merah mereda, lanjutkan infus vancomisin dengan pengenceran minimal 250 mL diberikan dalam waktu 2 jam"],
    nurseInterventions: [
      { id: "act-1", actionName: "Hentikan infus vancomisin segera dan periksa tanda vital lengkap", isCorrect: true, feedback: "Langkah utama memutus degranulasi histamin langsung.", scoreWeight: 35 },
      { id: "act-2", actionName: "Kolaborasi injeksi antihistamin difenhidramin dan amati pemulihan warna kulit", isCorrect: true, feedback: "Memblok reseptor H1 yang teraktivasi histamin masif.", scoreWeight: 35 },
      { id: "act-3", actionName: "Menyuntikkan epinefrin 0,5 mg IM dan memvonis pasien alergi mati terhadap vancomisin", isCorrect: false, feedback: "KELIRU! Ini adalah reaksi pseudoalergi kecepatan infus, bukan alergi IgE sejati; vancomisin tetap dapat dilanjutkan dengan tetesan diperlambat!", scoreWeight: -45 },
      { id: "act-4", actionName: "Encerkan sisa vancomisin dalam 250 mL cairan dan berikan perlahan minimal 120 menit", isCorrect: true, feedback: "Protokol pencegahan standar Red Man Syndrome.", scoreWeight: 30 }
    ],
    familyQuestion: "Sus, kenapa badan atas suami saya langsung merah menyala seperti udang rebus setelah infusnya jalan cepat?",
    familyIdealAnswer: "Kondisi ini disebut Red Man Syndrome, yaitu reaksi pelepasan zat histamin akibat cairan antibiotik vancomisin masuk terlalu cepat ke pembuluh darah. Ini bukan alergi permanen, melainkan karena laju infus yang terlalu laju. Kami sudah menyetop infusnya dan memberikan obat pereda merah gatal. Setelah tenang, infusnya akan kita encerkan dan jalankan secara sangat pelan selama 2 jam.",
    doctorConsultSBAR: {
      situation: "Dokter, Tn. Dimas di Cempaka 1 mengalami flushing Red Man Syndrome pasca infus vancomisin 20 menit.",
      background: "MRSA osteomielitis, dosis vancomisin 1 gram IV.",
      assessment: "Eritema wajah & dada atas (+), gatal, TD 94/56, wheezing negatif. Infus sudah distop.",
      recommendation: "Mohon izin injeksi difenhidramin 50 mg IV dan rencana pelambatan infus vancomisin 2 jam."
    },
    mesoReport: {
      eventDescription: "Red Man Syndrome (flushing leher dada masif, pruritus, hipotensi transien) akibat laju infus vancomisin terlalu cepat.",
      severityDegree: "Sedang (Reaksi anafilaktoid laju infus)",
      immediateAction: "Stop sementara, difenhidramin IV, perlambatan laju infus vancomisin."
    },
    references: "Sivagnanam S et al. Red man syndrome. Crit Care Nurse; Modul Rajawali."
  },

  // ==================== KELOMPOK 4 (21 - 26) ====================
  {
    id: 21,
    groupTitle: "Kelompok 4 — Reaksi Imunologis dan Hematologis",
    groupNumber: 4,
    caseCode: "KASUS-21",
    title: "Dermatitis Kontak Alergika Akibat Penggunaan Salep Antibiotik Neomisin Topikal",
    patientName: "Tn. Gunawan",
    age: 44,
    gender: "Laki-laki",
    roomLocation: "Ruang Rawat Inap Melati - Bed 2",
    roomKey: "inpatient",
    chiefComplaint: "Luka lecet di lengan malah bertambah merah bengkak berair, gatal menyiksa, dan berbentol-bentol kecil.",
    anamnesis: "Pasien mengalami luka lecet di lengan bawah kanan akibat jatuh dari sepeda 5 hari lalu. Pasien mengoleskan salep antibiotik kombinasi yang mengandung neomisin sulfat 3 kali sehari. Hari ke-3 kulit di sekitar luka lecet mulai terasa sangat gatal, memerah persis sesuai bentuk olesan salep, timbul papul eritematosa dan vesikel kecil berisi cairan bening yang pecah basah (madidans).",
    historyOfPresentIllness: "Vulnus excoriatum lengan kanan bawah.",
    pastMedicalHistory: "Riwayat alergi plester perekat.",
    medicationHistory: [
      { drugName: "Salep Neomisin Sulfat Topikal", dose: "Oles tipis", route: "Topikal", timing: "3x sehari", indication: "Luka lecet", isSuspectedDrug: true }
    ],
    physicalExamDoctor: "Status lokalis regio antebrachii dextra: Tampak plak eritematosa berbatas tegas berkonfigurasi geografis sesuai area aplikasi salep, disertai vesikel miliaria, eksudasi serosa (weeping), dan krusta kekuningan. Tidak ada tanda selulitis sistemik, tidak ada demam.",
    vitalSigns: { bloodPressure: "122/78 mmHg", heartRate: 74, respiratoryRate: 16, temperature: 36.6, spO2: 99, gcs: "E4V5M6 (15)" },
    labResults: [
      { testName: "Patch Test (Uji Tempel Epikutan) - Tertunda", resultValue: "Positif Kuat (++ neomisin)", unit: "", normalRange: "Negatif", isAbnormal: true, clinicalSignificance: "Reaksi hipersensitivitas Tipe IV diperantarai sel T memori" },
      { testName: "Gram Kerokan Kulit", resultValue: "Tidak ditemukan bakteri patogen", unit: "", normalRange: "Negatif", isAbnormal: false, clinicalSignificance: "Bukan infeksi impetigo sekunder" }
    ],
    suspectedESO: "Allergic Contact Dermatitis (Hipersensitivitas Tipe IV) Imbas Neomisin",
    esoType: "Tipe B",
    triageLevel: "Sedang (Hijau)",
    redFlags: ["Infeksi bakteri sekunder (selulitis/abses)", "Eritroderma eksfoliativa luas"],
    primaryActionPriority: "Hentikan segera salep neomisin, kompres basah NaCl 0,9% untuk mengeringkan lesi eksudatif, berikan kortikosteroid topikal potensi sedang.",
    doctorOrders: ["Stop salep neomisin permanen", "Kompres terbuka kasa steril NaCl 0,9% 3x sehari 15 menit", "Salep Hidrokortison 2,5% atau Mometason furoat oles tipis 2x sehari", "Cetirizin 10 mg 1x sehari malam untuk pruritus"],
    nurseInterventions: [
      { id: "act-1", actionName: "Hentikan penggunaan salep neomisin dan bersihkan sisa salep di kulit secara lembut", isCorrect: true, feedback: "Menghilangkan paparan antigen kontak langsung.", scoreWeight: 35 },
      { id: "act-2", actionName: "Lakukan kompres basah salin steril untuk meredakan eksudat dan rasa gatal", isCorrect: true, feedback: "Prinsip dermatologi: 'basah kompres basah, kering beri salep'.", scoreWeight: 35 },
      { id: "act-3", actionName: "Mengoleskan salep antibiotik neomisin lebih tebal agar kuman mati", isCorrect: false, feedback: "SALAH BESAR! Menambah neomisin akan memicu peradangan sel T yang lebih parah dan meluas!", scoreWeight: -50 },
      { id: "act-4", actionName: "Edukasi pasien untuk selalu membaca komposisi salep bebas agar terhindar dari neomisin", isCorrect: true, feedback: "Neomisin adalah salah satu alergen kontak topikal tersering di dunia.", scoreWeight: 30 }
    ],
    familyQuestion: "Sus, lukanya kok malah tambah melepuh merah dan berair setelah dikasih salep antibiotik mahal ini?",
    familyIdealAnswer: "Kulit bapak mengalami alergi kontak tertunda terhadap bahan antibiotik neomisin di dalam salep tersebut. Bukannya menyembuhkan, zat ini justru memicu peradangan sel kulit sehingga timbul bintil berair dan gatal. Salep ini harus segera distop dan diganti dengan kompres pembersih serta krim antiradang.",
    doctorConsultSBAR: {
      situation: "Dokter, Tn. Gunawan di Melati 2 mengalami dermatitis kontak alergi eksudatif pada lengan kanan.",
      background: "Aplikasi salep neomisin 5 hari pada luka lecet.",
      assessment: "Plak eritema batas tegas sesuai olesan salep, vesikel madidans. Neomisin sudah distop.",
      recommendation: "Mohon konfirmasi terapi kompres NaCl 0,9% dan kortikosteroid topikal."
    },
    mesoReport: {
      eventDescription: "Dermatitis kontak alergika akut eksudatif imbas penggunaan salep antibiotik neomisin topikal.",
      severityDegree: "Ringan - Sedang",
      immediateAction: "Stop salep, kompres salin, kortikosteroid topikal."
    },
    references: "Pallardy et al. Toxicol Sci 2024; American Contact Dermatitis Society; Modul Rajawali."
  },
  {
    id: 22,
    groupTitle: "Kelompok 4 — Reaksi Imunologis dan Hematologis",
    groupNumber: 4,
    caseCode: "KASUS-22",
    title: "Reaksi Fotosensitivitas Kulit Akibat Terapi Doksisiklin",
    patientName: "Nn. Citra",
    age: 24,
    gender: "Perempuan",
    roomLocation: "Ruang Rawat Inap Melati - Bed 3",
    roomKey: "inpatient",
    chiefComplaint: "Kulit wajah, leher, dan lengan merah padam melepuh perih terbakar setelah beraktivitas di luar ruangan.",
    anamnesis: "Pasien mengonsumsi doksisiklin 100 mg 2x sehari untuk terapi jerawat inflamasi (acne vulgaris) selama 1 minggu. Kemarin siang pasien menghadiri acara di luar ruangan terbuka selama 45 menit di bawah terik matahari tanpa tabir surya. Beberapa jam kemudian kulit yang terpapar sinar matahari berubah menjadi merah padam membengkak, terasa perih menyengat seperti terbakar matahari ekstrem (sunburn berat), dan muncul lenting bula kecil.",
    historyOfPresentIllness: "Acne vulgaris papulopustulosa.",
    pastMedicalHistory: "Tidak ada riwayat lupus eritematosus sistemik.",
    medicationHistory: [
      { drugName: "Doksisiklin", dose: "100 mg", route: "Oral", timing: "2x sehari", indication: "Acne vulgaris", isSuspectedDrug: true }
    ],
    physicalExamDoctor: "Suhu 37,2°C, TD 114/72 mmHg. Eritema menyengat berbatas sangat tegas pada area yang terpapar sinar matahari (muka, garis leher V-neck pakaian, dan kedua lengan bawah). Area kulit di balik baju tertutup tampak normal bersih sempurna (menandakan reaksi fototoksik). Nikolsky sign negatif.",
    vitalSigns: { bloodPressure: "114/72 mmHg", heartRate: 80, respiratoryRate: 16, temperature: 37.2, spO2: 99, gcs: "E4V5M6 (15)" },
    labResults: [
      { testName: "ANA Test (Antinuclear Antibody)", resultValue: "Negatif", unit: "", normalRange: "Negatif", isAbnormal: false, clinicalSignificance: "Menyingkirkan erupsi fotosensitif akibat Systemic Lupus Erythematosus" },
      { testName: "Darah Lengkap", resultValue: "Normal", unit: "", normalRange: "Normal", isAbnormal: false, clinicalSignificance: "Tidak ada keterlibatan supresi hematologi sistemik" }
    ],
    suspectedESO: "Fototoksisitas Imbas Antibiotik Golongan Tetrasiklin (Doksisiklin)",
    esoType: "Tipe A",
    triageLevel: "Sedang (Hijau)",
    redFlags: ["Pelepasan kuku foto-onikolisis", "Luka bakar derajat dua luas dengan bula pecah terinfeksi"],
    primaryActionPriority: "Hentikan doksisiklin, hindari paparan sinar UV matahari, berikan kompres dingin dan pelembap emolen, serta edukasi penggunaan tabir surya berspektrum luas.",
    doctorOrders: ["Stop doksisiklin, ganti alternatif antibiotik non-fotosensitisasi", "Kompres dingin dengan handuk basah steril", "Krim emolien penyejuk (aloe vera / ceramide) dan kortikosteroid topikal ringan", "Edukasi penggunaan sunscreen SPF 50+ dan pakaian pelindung UV"],
    nurseInterventions: [
      { id: "act-1", actionName: "Hentikan pemberian doksisiklin dan anjurkan tirah baring di ruangan teduh tanpa sinar matahari langsung", isCorrect: true, feedback: "Mencegah aktivasi fotokimia molekul obat di lapisan kulit.", scoreWeight: 35 },
      { id: "act-2", actionName: "Berikan kompres dingin steril dan analgesik pereda nyeri perih", isCorrect: true, feedback: "Meredakan inflamasi dan nyeri pembakaran eritematosa.", scoreWeight: 35 },
      { id: "act-3", actionName: "Menyarankan pasien berjemur matahari pagi agar kulitnya mengering", isCorrect: false, feedback: "FATAL! Paparan sinar UV tambahan akan memicu bula melepuh dan nekrosis jaringan kulit!", scoreWeight: -50 },
      { id: "act-4", actionName: "Edukasi pentingnya tabir surya dan menghindari sinar UV saat meminum antibiotik tetrasiklin/fluorokuinolon", isCorrect: true, feedback: "Pencegahan primer yang wajib disampaikan saat penyerahan obat.", scoreWeight: 30 }
    ],
    familyQuestion: "Sus, kok cuma muka sama lengan saja yang gosong perih merah begini, sedangkan badan yang ketutup baju mulus?",
    familyIdealAnswer: "Ini adalah reaksi fototoksisitas dari obat doksisiklin. Obat ini menyerap energi sinar ultraviolet matahari dan melepaskan zat yang merusak sel kulit di area yang terkena sinar langsung. Itulah kenapa kulit di balik baju tetap bersih aman. Obat ini sudah disetop dan kami rawat dengan kompres dingin serta krim penyejuk.",
    doctorConsultSBAR: {
      situation: "Dokter Sp.KK, pasien Nn. Citra di Melati 3 mengalami fototoksisitas berat pasca terapi doksisiklin.",
      background: "Konsumsi doksisiklin 100mg 7 hari, terpapar sinar matahari terik 45 menit.",
      assessment: "Eritema batas tegas area V-neck dan lengan, nyeri perih, bula kecil. Doksisiklin distop.",
      recommendation: "Mohon konfirmasi terapi emolien, kortikosteroid topikal, dan penggantian terapi jerawat."
    },
    mesoReport: {
      eventDescription: "Fototoksisitas kulit akut berbatas tegas menyerupai sunburn berat imbas konsumsi doksisiklin dan paparan UV.",
      severityDegree: "Sedang",
      immediateAction: "Stop doksisiklin, proteksi UV total, kompres dingin, emolien."
    },
    references: "Koren G et al. Drug-induced photosensitivity; Modul ESO Rajawali."
  },
  {
    id: 23,
    groupTitle: "Kelompok 4 — Reaksi Imunologis dan Hematologis",
    groupNumber: 4,
    caseCode: "KASUS-23",
    title: "Agranulositosis Mengancam Jiwa Akibat Obat Antitiroid (Propiltiourasil / PTU)",
    patientName: "Ny. Tina",
    age: 29,
    gender: "Perempuan",
    roomLocation: "Ruang Rawat Inap Isolasi Melati - Bed 5",
    roomKey: "inpatient",
    chiefComplaint: "Demam tinggi menggigil mendadak, sakit menelan luar biasa hebat, dan timbul luka sariawan bernanah di tenggorokan.",
    anamnesis: "Pasien terdiagnosis penyakit Graves (hipertiroidisme) dan mulai mengonsumsi propiltiourasil (PTU) 100 mg 3x sehari sejak 1 bulan lalu. Pasien tidak diedukasi untuk waspada terhadap demam atau radang tenggorokan. Dua hari lalu pasien mendadak demam tinggi 39,5°C, tenggorokan terasa tersayat saat menelan, bibir bengkak bernanah, dan tubuh sangat lemah tak bertenaga.",
    historyOfPresentIllness: "Penyakit Graves hipertiroid.",
    pastMedicalHistory: "Tidak ada riwayat alergi.",
    medicationHistory: [
      { drugName: "Propiltiourasil (PTU)", dose: "100 mg", route: "Oral", timing: "3x sehari", indication: "Hipertiroidisme Graves", isSuspectedDrug: true },
      { drugName: "Propranolol", dose: "10 mg", route: "Oral", timing: "3x sehari", indication: "Kontrol takikardia" }
    ],
    physicalExamDoctor: "Suhu 39,6°C, TD 110/70 mmHg, Nadi 120 x/menit, RR 22 x/menit, SpO₂ 97%. Faring dan tonsil hiperemis berat dengan eksudat pseudomembran kekuningan dan ulkus nekrotik multipel di palatum dan uvula (agranulocytic angina). Limfadenopati servikalis nyeri tekan bilateral. Pasien tampak septik lemah.",
    vitalSigns: { bloodPressure: "110/70 mmHg", heartRate: 120, respiratoryRate: 22, temperature: 39.6, spO2: 97, gcs: "E4V5M6 (15)" },
    labResults: [
      { testName: "Hitung Leukosit Total", resultValue: "850", unit: "/µL", normalRange: "4000–10000", isAbnormal: true, clinicalSignificance: "Leukopenia berat ekstrem" },
      { testName: "Absolute Neutrophil Count (ANC)", resultValue: "80", unit: "/µL", normalRange: "1500–8000", isAbnormal: true, clinicalSignificance: "Agranulositosis fatal (ANC < 100/µL, risiko sepsis fatal)" },
      { testName: "Hemoglobin", resultValue: "12.4", unit: "g/dL", normalRange: "12.0–15.5", isAbnormal: false, clinicalSignificance: "Garis eritroid utuh" },
      { testName: "Trombosit", resultValue: "190000", unit: "/µL", normalRange: "150000–450000", isAbnormal: false, clinicalSignificance: "Trombosit normal" }
    ],
    suspectedESO: "Agranulositosis Diperantarai Imun (Hipersensitivitas Tipe II) Imbas Propiltiourasil",
    esoType: "Tipe B",
    triageLevel: "Gawat Darurat (Merah)",
    redFlags: ["Sepsis neutropenik dan syok septik", "Ulkus nekrotik faring berdarah dan sumbatan jalan napas"],
    primaryActionPriority: "Hentikan PTU seketika dan permanen, rawat isolasi protektif neutropenik steril, berikan antibiotik broad-spectrum IV (Piperasilin-Tazobaktam) dan G-CSF (Filgrastim).",
    doctorOrders: ["Stop PTU permanen, catat kontraindikasi antitiroid tionamid", "Rawat di ruang isolasi protektif reverse isolation (petugas wajib APD steril)", "Injeksi Filgrastim (G-CSF) 300 µg SC 1x sehari untuk merangsang produksi granulosit sumsum tulang", "Antibiotik broad-spectrum spektrum luas IV (Meropenem / Pip-Tazo)", "Kultur darah dan swab tenggorokan serial"],
    nurseInterventions: [
      { id: "act-1", actionName: "Tahan segera dosis PTU dan pastikan pasien dirawat di ruang isolasi imunosupresi steril", isCorrect: true, feedback: "Mencegah patogen oportunistik masuk saat pertahanan tubuh nol.", scoreWeight: 35 },
      { id: "act-2", actionName: "Lakukan kebersihan tangan ketat, larang makanan mentah, dan pantau suhu berkala", isCorrect: true, feedback: "Prosedur baku perawatan neutropenia berat.", scoreWeight: 35 },
      { id: "act-3", actionName: "Menunda antibiotik sampai demam turun sendiri", isCorrect: false, feedback: "FATAL! Pasien neutropenia dengan demam harus mendapat antibiotik empiris dalam waktu 1 jam pertama (Golden Hour) untuk mencegah syok septik!", scoreWeight: -50 },
      { id: "act-4", actionName: "Kolaborasi injeksi G-CSF (Filgrastim) dan pantau kenaikan nilai leukosit harian", isCorrect: true, feedback: "Membantu mempercepat pemulihan produksi granulosit.", scoreWeight: 30 }
    ],
    familyQuestion: "Sus, kenapa sariawan di tenggorokannya sampai bernanah dan dokter bilang sel darah putihnya hampir habis?",
    familyIdealAnswer: "Ibu Tina mengalami efek samping langka dan sangat berbahaya dari obat tiroid PTU yang disebut agranulositosis. Obat ini menyebabkan antibodi menghancurkan sel darah putih pembasmi kuman hingga tersisa sangat sedikit (hanya 80 dari normalnya ribuan). Akibatnya kuman di mulut dan tenggorokan mengganas. Kami merawatnya di ruang steril khusus dan menyuntikkan obat perangsang sel darah putih agar cepat pulih.",
    doctorConsultSBAR: {
      situation: "Dokter Sp.PD, pasien Ny. Tina di Isolasi 5 mengalami agranulositosis terkonfirmasi (ANC 80/uL).",
      background: "Penyakit Graves, konsumsi PTU 3x100mg 1 bulan. Demam 39,6 C, ulkus faring nekrotik.",
      assessment: "Febrile neutropenia berat berisiko syok sepsis. PTU sudah kami stop permanen.",
      recommendation: "Mohon persetujuan isolasi steril, inisiasi Filgrastim G-CSF 300 mcg SC, dan antibiotik Meropenem IV."
    },
    mesoReport: {
      eventDescription: "Agranulositosis akut berat (ANC 80/uL) disertai ulkus nekrotik faring dan demam tinggi imbas PTU.",
      severityDegree: "Mengancam Jiwa",
      immediateAction: "Stop PTU permanen, isolasi protektif, G-CSF Filgrastim, antibiotik broad-spectrum."
    },
    references: "American Thyroid Association (ATA) Guidelines; Pallardy et al. Toxicol Sci (2024); Modul Rajawali."
  },
  {
    id: 24,
    groupTitle: "Kelompok 4 — Reaksi Imunologis dan Hematologis",
    groupNumber: 4,
    caseCode: "KASUS-24",
    title: "Hemolisis Akut Akibat Defisiensi Enzim G6PD Pasca Paparan Primakuin",
    patientName: "Tn. Zulkifli",
    age: 26,
    gender: "Laki-laki",
    roomLocation: "Ruang Rawat Inap Cempaka - Bed 6",
    roomKey: "inpatient",
    chiefComplaint: "Air kencing berwarna hitam pekat seperti Coca-Cola, badan mendadak lemas lunglai, sesak napas, dan mata sangat kuning.",
    anamnesis: "Pasien sedang dirawat karena malaria vivax dan hari ke-2 mulai mengonsumsi primakuin 15 mg/hari untuk eradikasi hipnozoit di hati. Pasien belum pernah diskrining status enzim G6PD. Pagi ini pasien merasa lemas luar biasa, pusing berputar, napas memburu tersengal saat berjalan ke kamar mandi, dan urin yang keluar di kloset berwarna merah kehitaman pekat.",
    historyOfPresentIllness: "Malaria vivax pasca bepergian ke daerah endemis.",
    pastMedicalHistory: "Tidak ada riwayat batu empedu atau penyakit ginjal.",
    medicationHistory: [
      { drugName: "Primakuin Fosfat", dose: "15 mg", route: "Oral", timing: "1x sehari", indication: "Radikal kure malaria vivax", isSuspectedDrug: true },
      { drugName: "DHP (Dihidroartemisinin-Piperakuin)", dose: "3 tablet", route: "Oral", timing: "1x sehari", indication: "Malaria vivax" }
    ],
    physicalExamDoctor: "TD 102/62 mmHg, Nadi 116 x/menit, RR 26 x/menit, Suhu 37,4°C, SpO₂ 93% room air. Konjungtiva anemis sangat pucat, sklera ikterik mencolok (+3). Telapak tangan dan kuku pucat keabuan. Hepatosplenomegali ringan. Urin di urine bag tampak berwarna cokelat tua kehitaman pekat (hemoglobinuria).",
    vitalSigns: { bloodPressure: "102/62 mmHg", heartRate: 116, respiratoryRate: 26, temperature: 37.4, spO2: 93, gcs: "E4V5M6 (15)" },
    labResults: [
      { testName: "Hemoglobin", resultValue: "6.2", unit: "g/dL", normalRange: "13.0–17.0", isAbnormal: true, clinicalSignificance: "Penurunan anjlok dari baseline 13.8 g/dL (Krisis Hemolisis Masif)" },
      { testName: "Bilirubin Indirek", resultValue: "5.8", unit: "mg/dL", normalRange: "0.2–0.8", isAbnormal: true, clinicalSignificance: "Hiperbilirubinemia hemolitik indirek masif" },
      { testName: "Aktivitas Enzim G6PD", resultValue: "0.8", unit: "U/g Hb", normalRange: "7.0–14.0", isAbnormal: true, clinicalSignificance: "Defisiensi G6PD Klas II berat" },
      { testName: "Hapus Darah Tepi", resultValue: "Heinz bodies (+), bite cells (+), fragmentosit (+)", unit: "", normalRange: "Normal", isAbnormal: true, clinicalSignificance: "Tanda klasik presipitasi hemoglobin teroksidasi dan hemolisis" }
    ],
    suspectedESO: "Krisis Hemolitik Akut Imbas Obat Oksidan pada Pasien Defisiensi G6PD",
    esoType: "Khusus/Genetik",
    triageLevel: "Gawat Darurat (Merah)",
    redFlags: ["Gagal ginjal akut sekunder hemoglobinuria masif (pigment nephropathy)", "Syok anoksia jaringan sekunder anemia berat"],
    primaryActionPriority: "Hentikan primakuin segera, berikan oksigenasi, hidrasi cairan kristaloid untuk mencegah gagal ginjal tubulus, siapkan transfusi PRC darah tersaring.",
    doctorOrders: ["Stop Primakuin seketika dan permanen", "Oksigen nasal kanul 3–4 L/menit", "Hidrasi intravena NaCl 0,9% 2.000–3.000 mL/24 jam target urine > 100 mL/jam", "Transfusi Packed Red Cells (PRC) 2 unit perlahan", "Catat riwayat defisiensi G6PD pada gelang identitas pasien"],
    nurseInterventions: [
      { id: "act-1", actionName: "Hentikan pemberian primakuin dan pasang label alergi genetik defisiensi G6PD", isCorrect: true, feedback: "Mencegah paparan lebih lanjut dari obat pemicu oksidatif.", scoreWeight: 35 },
      { id: "act-2", actionName: "Pasang infus hidrasi cepat dan pantau pembersihan warna urin hemoglobinuria", isCorrect: true, feedback: "Diuresis paksa mencegah pengendapan kristal hemoglobin di tubulus ginjal.", scoreWeight: 35 },
      { id: "act-3", actionName: "Memberikan obat dapson atau sulfonamida untuk menurunkan panas", isCorrect: false, feedback: "FATAL! Dapson dan sulfa adalah obat pemicu stres oksidatif kuat yang akan mempercepat hemolisis!", scoreWeight: -50 },
      { id: "act-4", actionName: "Bantu transfusi darah PRC dan observasi tanda reaksi transfusi", isCorrect: true, feedback: "Menyelamatkan oksigenasi jaringan tubuh pasien.", scoreWeight: 30 }
    ],
    familyQuestion: "Sus, kenapa air seni pasien berubah seperti warna kopi dan darahnya turun drastis setelah minum obat malaria?",
    familyIdealAnswer: "Bapak memiliki kelainan genetik bawaan yaitu kekurangan enzim G6PD di dalam sel darah merahnya. Obat antimalaria primakuin memicu stres oksidasi yang membuat sel darah merah pecah beramai-ramai sehingga darahnya turun ke 6,2 dan warna urinnya menjadi hitam pekat karena zat darah yang terbuang. Kami sudah menghentikan obatnya dan sedang mentransfusikan darah baru serta cairan infus untuk melindungi ginjal bapak.",
    doctorConsultSBAR: {
      situation: "Dokter Sp.PD, pasien Tn. Zulkifli di Cempaka 6 mengalami krisis hemolisis akut akibat primakuin.",
      background: "Malaria vivax, primakuin hari ke-2. Hemoglobin anjlok dari 13,8 ke 6,2 g/dL.",
      assessment: "Urin warna cola, ikterus, enzim G6PD 0,8 U/gHb, Heinz bodies (+). Primakuin sudah distop.",
      recommendation: "Mohon izin transfusi 2 unit PRC dan instruksi hidrasi infus untuk cegah gagal ginjal."
    },
    mesoReport: {
      eventDescription: "Hemolisis intravaskular akut berat (Hb 6,2 g/dL, hemoglobinuria) imbas primakuin pada defisiensi G6PD.",
      severityDegree: "Mengancam Jiwa",
      immediateAction: "Stop primakuin, transfusi PRC, hidrasi cairan, kartu waspada G6PD."
    },
    references: "WHO Guidelines on G6PD Deficiency and Malaria Treatment; Modul Rajawali."
  },
  {
    id: 25,
    groupTitle: "Kelompok 4 — Reaksi Imunologis dan Hematologis",
    groupNumber: 4,
    caseCode: "KASUS-25",
    title: "Heparin-Induced Thrombocytopenia (HIT) Tipe II dengan Trombosis Vaskular",
    patientName: "Tn. Hendro",
    age: 64,
    gender: "Laki-laki",
    roomLocation: "Ruang Rawat Inap Melati - Bed 4",
    roomKey: "inpatient",
    chiefComplaint: "Kaki kiri mendadak bengkak tegang nyeri kebiruan, dan jumlah trombosit darah turun drastis.",
    anamnesis: "Pasien sedang dirawat pasca operasi penggantian sendi panggul (total hip replacement) hari ke-7 dan mendapat injeksi Unfractionated Heparin (UFH) subkutan 5.000 unit tiap 12 jam untuk profilaksis DVT. Trombosit sebelum operasi adalah 260.000/uL. Hari ini hasil lab rutin menunjukkan trombosit anjlok menjadi 88.000/uL (penurunan >50%). Pada saat bersamaan betis kiri pasien membengkak tegang, nyeri saat dorsofleksi (Homan sign positif), dan hangat kemerahan.",
    historyOfPresentIllness: "Post-op Total Hip Replacement hari ke-7.",
    pastMedicalHistory: "Osteoartritis berat.",
    medicationHistory: [
      { drugName: "Heparin (UFH)", dose: "5.000 Unit", route: "Subkutan", timing: "Tiap 12 jam", indication: "Profilaksis tromboemboli", isSuspectedDrug: true }
    ],
    physicalExamDoctor: "TD 134/82 mmHg, Nadi 86 x/menit, SpO₂ 98%. Tungkai kiri bawah bengkak tegang dengan selisih lingkar betis +4 cm dibanding kanan. Nyeri tekan pada muskulus gastroknemius sinistra. Tidak ada petekie atau perdarahan (kontras dengan trombositopenia biasa, HIT justru memicu pembekuan darah/trombosis!).",
    vitalSigns: { bloodPressure: "134/82 mmHg", heartRate: 86, respiratoryRate: 18, temperature: 36.8, spO2: 98, gcs: "E4V5M6 (15)" },
    labResults: [
      { testName: "Jumlah Trombosit Darah", resultValue: "88000", unit: "/µL", normalRange: "150000–450000", isAbnormal: true, clinicalSignificance: "Penurunan >50% dari baseline hari ke-7 heparin (Skor 4Ts Tinggi)" },
      { testName: "Antibodi Anti-Platelet Factor 4 (PF4) / Heparin ELISA", resultValue: "Positif Kuat (OD 2.4)", unit: "", normalRange: "Negatif (<0.4)", isAbnormal: true, clinicalSignificance: "Konfirmasi autoantibodi IgG aktivasi trombosit HIT" },
      { testName: "USG Doppler Vaskular Tungkai", resultValue: "Oklusi trombus pada Vena Poplitea sinistra", unit: "", normalRange: "Normal", isAbnormal: true, clinicalSignificance: "Deep Vein Thrombosis sekunder HIT" }
    ],
    suspectedESO: "Heparin-Induced Thrombocytopenia Tipe II (Immune-Mediated HIT with Thrombosis)",
    esoType: "Tipe B",
    triageLevel: "Gawat Darurat (Merah)",
    redFlags: ["Emboli paru masif (Pulmonary Embolism) memicu henti napas", "Iskemia tungkai akut / gangren yang membutuhkan amputasi"],
    primaryActionPriority: "Hentikan seketika seluruh bentuk heparin (termasuk heparin flush selang IV), ganti dengan antikoagulan non-heparin (Fondaparinux / Argatroban), jangan beri transfusi trombosit!",
    doctorOrders: ["Stop seluruh pajanan Heparin (UFH, LMWH, dan heparin lock)", "Mulai antikoagulan non-heparin: Fondaparinux 7,5 mg SC 1x sehari atau Argatroban drip", "JANGAN memberikan transfusi trombosit (menambah bahan bakar trombosis)", "Tunda pemberian warfarin hingga trombosit pulih > 150.000/uL", "Evaluasi tanda emboli paru"],
    nurseInterventions: [
      { id: "act-1", actionName: "Hentikan suntikan heparin dan lepas semua kunci heparin (heparin lock) di selang infus", isCorrect: true, feedback: "Memutus pembentukan kompleks imun PF4-heparin.", scoreWeight: 35 },
      { id: "act-2", actionName: "Menolak memberikan transfusi trombosit dan mengedukasi tim bahwa HIT adalah kondisi protrombotik", isCorrect: true, feedback: "Pintar! Transfusi trombosit pada HIT seperti menyiram bensin ke api pembekuan darah!", scoreWeight: 35 },
      { id: "act-3", actionName: "Memberikan transfusi konsentrat trombosit 4 kantong karena trombosit < 100.000", isCorrect: false, feedback: "FATAL! Transfusi trombosit pada HIT memicu trombosis arteri masif, stroke, dan amputasi!", scoreWeight: -50 },
      { id: "act-4", actionName: "Pantau lingkar betis, pulsasi nadi dorsalis pedis, dan tanda sesak napas akut", isCorrect: true, feedback: "Deteksi komplikasi DVT dan emboli paru.", scoreWeight: 30 }
    ],
    familyQuestion: "Sus, katanya keping darah (trombosit) bapak turun, tapi kok kakinya malah bengkak tersumbat bekuan darah?",
    familyIdealAnswer: "Ini adalah kondisi khusus yang disebut HIT (Heparin-Induced Thrombocytopenia). Obat suntik heparin yang seharusnya mencegah pembekuan darah justru memicu reaksi antibodi yang membuat keping darah saling menempel dan menggumpal di pembuluh vena kaki. Akibatnya keping darah bebas turun, tetapi bekuan darah terbentuk. Kami sudah menghentikan heparin dan menggantinya dengan antikoagulan jenis lain.",
    doctorConsultSBAR: {
      situation: "Dokter Spesialis Bedah Ortopedi & Sp.PD, pasien Tn. Hendro mengalami HIT Tipe II dengan DVT poplitea.",
      background: "Post-op THR hari ke-7, UFH 2x5000 unit. Trombosit turun 66% dari 260.000 ke 88.000.",
      assessment: "Skor 4Ts 8 (High Probability), DVT kiri (+). Heparin sudah distop total.",
      recommendation: "Mohon konfirmasi peralihan terapi ke Fondaparinux 7,5 mg SC dan larangan transfusi trombosit."
    },
    mesoReport: {
      eventDescription: "Heparin-Induced Thrombocytopenia Tipe II (penurunan trombosit >50% dengan DVT vena poplitea) hari ke-7 UFH.",
      severityDegree: "Mengancam Jiwa",
      immediateAction: "Stop total heparin, antikoagulan non-heparin Fondaparinux, hindari transfusi platelet."
    },
    references: "American Society of Hematology (ASH) Guidelines for HIT 2024; Modul Rajawali."
  },
  {
    id: 26,
    groupTitle: "Kelompok 4 — Reaksi Imunologis dan Hematologis",
    groupNumber: 4,
    caseCode: "KASUS-26",
    title: "Serum Sickness-Like Reaction (SSLR) Setelah Pemberian Antibiotik Sefaklor",
    patientName: "An. Raffa",
    age: 8,
    gender: "Laki-laki",
    roomLocation: "Ruang Rawat Inap Melati - Bed 6",
    roomKey: "inpatient",
    chiefComplaint: "Sendi lutut dan pergelangan tangan bengkak nyeri sulit berjalan, demam, dan muncul bentol merah keunguan.",
    anamnesis: "Anak Raffa dirawat dengan otitis media akut dan mengonsumsi antibiotik sirup sefaklor selama 9 hari. Kemarin malam anak mengeluh lutut dan pergelangan tangan sangat sakit bila digerakkan hingga menangis tidak mau berdiri, demam naik turun 38,5°C, dan muncul bentol urtikaria kemerahan keunguan di punggung dan tungkai yang menetap tidak berpindah-pindah.",
    historyOfPresentIllness: "Otitis media supuratif akut fase resolusi.",
    pastMedicalHistory: "Tidak ada riwayat sakit reumatik.",
    medicationHistory: [
      { drugName: "Sefaklor Sirup", dose: "250 mg", route: "Oral", timing: "3x sehari", indication: "Otitis media akut", isSuspectedDrug: true }
    ],
    physicalExamDoctor: "Suhu 38,5°C, Nadi 104 x/menit, RR 20 x/menit, SpO₂ 99%. Artritis simetris pada genu bilateral dan artikulasio radiokarpea: bengkak, hangat, nyeri gerak aktif/pasif (+). Ruam urtikaria plak eritematosa anular keunguan pada paha dan punggung. Limfadenopati servikal dan inguinal teraba membesar. Tidak ada edema wajah atau sesak napas.",
    vitalSigns: { bloodPressure: "100/65 mmHg", heartRate: 104, respiratoryRate: 20, temperature: 38.5, spO2: 99, gcs: "E4V5M6 (15)" },
    labResults: [
      { testName: "Laju Endap Darah (LED / ESR)", resultValue: "68", unit: "mm/jam", normalRange: "0–15", isAbnormal: true, clinicalSignificance: "Inflamasi sistemik vaskulitis kompleks imun" },
      { testName: "C-Reactive Protein (CRP)", resultValue: "42", unit: "mg/L", normalRange: "< 5", isAbnormal: true, clinicalSignificance: "Marker inflamasi aktif" },
      { testName: "Urinalisis Lengkap", resultValue: "Protein trace, Eritrosit 1-2/LPB", unit: "", normalRange: "Normal", isAbnormal: false, clinicalSignificance: "Tidak ditemukan glomerulonefritis berat" }
    ],
    suspectedESO: "Serum Sickness-Like Reaction (Hipersensitivitas Tipe III) Imbas Antibiotik Sefalosporin",
    esoType: "Tipe B",
    triageLevel: "Sedang (Hijau)",
    redFlags: ["Glomerulonefritis dengan hematuria makroskopis dan oliguria", "Keterlibatan vaskulitis organ dalam"],
    primaryActionPriority: "Hentikan sefaklor seketika, berikan kortikosteroid oral (Prednison), analgesik antipiretik, dan istirahatkan sendi.",
    doctorOrders: ["Stop Sefaklor permanen", "Prednison 1 mg/kgBB/hari terbagi 2 dosis selama 5–7 hari lalu tappering off", "Parasetamol sirup bila demam/nyeri", "Imobilisasi sendi sementara dengan bantal penyangga", "Pantau urinalisis ulang 1 minggu kemudian"],
    nurseInterventions: [
      { id: "act-1", actionName: "Hentikan antibiotik sefaklor dan catat alergi golongan sefalosporin", isCorrect: true, feedback: "Mencegah penumpukan kompleks antigen-antibodi di sinovium sendi.", scoreWeight: 35 },
      { id: "act-2", actionName: "Sangga sendi yang bengkak dengan bantal empuk dan kompres dingin nyaman", isCorrect: true, feedback: "Mengurangi rasa sakit dan inflamasi artralgia.", scoreWeight: 35 },
      { id: "act-3", actionName: "Memaksa anak berjalan dan memijat sendi lututnya", isCorrect: false, feedback: "SALAH! Sendi sedang meradang akut; pemijatan akan menambah kerusakan membran sinovial!", scoreWeight: -45 },
      { id: "act-4", actionName: "Edukasi orang tua bahwa gejala akan membaik bertahap setelah obat dihentikan", isCorrect: true, feedback: "Memberikan ketenangan psikologis bagi keluarga pasien anak.", scoreWeight: 30 }
    ],
    familyQuestion: "Sus, anak saya kenapa sendinya bengkak semua tidak bisa jalan setelah minum antibiotik 9 hari?",
    familyIdealAnswer: "Anak Raffa mengalami reaksi seperti serum sickness (Serum Sickness-Like Reaction). Tubuh anak membentuk antibodi yang mengikat sisa obat sefaklor dan endapannya menempel di persendian dan kulit, menimbulkan bengkak sendi dan demam. Kondisi ini bukan kelumpuhan permanen. Setelah antibiotik distop dan diberikan obat antiradang, sendinya akan sembuh total dalam beberapa hari.",
    doctorConsultSBAR: {
      situation: "Dokter Sp.A, pasien An. Raffa di Melati 6 mengalami Serum Sickness-Like Reaction pasca sefaklor.",
      background: "Otitis media, sefaklor hari ke-9. Artritis genu bilateral, demam 38,5 C, ruam keunguan.",
      assessment: "LED 68 mm/jam, CRP 42 mg/L, urine stabil. Sefaklor sudah distop.",
      recommendation: "Mohon resep Prednison oral dosis inflamasi dan analgesik suportif."
    },
    mesoReport: {
      eventDescription: "Serum Sickness-Like Reaction (artralgia genu bilateral berat, demam, urtikaria) pasca 9 hari terapi sefaklor.",
      severityDegree: "Sedang",
      immediateAction: "Stop sefaklor, kortikosteroid oral, analgesik, pemantauan urin."
    },
    references: "Pallardy et al. Toxicol Sci 2024; American Academy of Pediatrics; Modul Rajawali."
  },

  // ==================== KELOMPOK 5 (27 - 30) ====================
  {
    id: 27,
    groupTitle: "Kelompok 5 — Reaksi Penggunaan Obat Khusus",
    groupNumber: 5,
    caseCode: "KASUS-27",
    title: "Asidosis Laktat Terkait Akumulasi Metformin pada Pasien Gagal Ginjal Akut",
    patientName: "Ny. Rohanah",
    age: 69,
    gender: "Perempuan",
    roomLocation: "Ruang Rawat Inap Dahlia - Bed 6",
    roomKey: "inpatient",
    chiefComplaint: "Napas cepat dalam memburu (Kussmaul), nyeri perut kram hebat, muntah terus-menerus, dan mengantuk lemas berat.",
    anamnesis: "Pasien mengonsumsi metformin 850 mg 3x sehari untuk diabetes melitus tipe 2 selama 5 tahun. Pasien mengalami infeksi gastroenteritis akut dengan diare masif dan muntah selama 3 hari di rumah, menyebabkan dehidrasi berat dan penurunan drastis fungsi ginjal. Keluarga tetap mencekoki metformin. Pasien datang dalam kondisi napas cepat dalam dan letargis.",
    historyOfPresentIllness: "DM Tipe 2, gastroenteritis dehidrasi berat.",
    pastMedicalHistory: "Nefropati diabetik awal.",
    medicationHistory: [
      { drugName: "Metformin", dose: "850 mg", route: "Oral", timing: "3x sehari", indication: "DM Tipe 2", isSuspectedDrug: true }
    ],
    physicalExamDoctor: "TD 88/54 mmHg, Nadi 114 x/menit kecil, RR 34 x/menit cepat dan sangat dalam khas pernapasan Kussmaul (hiperventilasi kompensasi asidosis metabolik berat). Suhu 35,8°C (Hipotermia). Turgor kulit sangat jelek, mata cekung, turgor menurun. GCS E3V3M5 (11) - Somnolen.",
    vitalSigns: { bloodPressure: "88/54 mmHg", heartRate: 114, respiratoryRate: 34, temperature: 35.8, spO2: 96, gcs: "E3V3M5 (11) - Somnolen" },
    labResults: [
      { testName: "Laktat Darah", resultValue: "11.8", unit: "mmol/L", normalRange: "0.5–2.0", isAbnormal: true, clinicalSignificance: "Asidosis laktat berat mengancam jiwa (>5.0 mmol/L)" },
      { testName: "Analisa Gas Darah: pH", resultValue: "7.04", unit: "", normalRange: "7.35–7.45", isAbnormal: true, clinicalSignificance: "Asidemia berat kritis" },
      { testName: "AGD: HCO3 (Bikarbonat)", resultValue: "6.2", unit: "mmol/L", normalRange: "22–26", isAbnormal: true, clinicalSignificance: "Deplesi bikarbonat masif" },
      { testName: "Anion Gap", resultValue: "28", unit: "mEq/L", normalRange: "8–16", isAbnormal: true, clinicalSignificance: "High Anion Gap Metabolic Acidosis (HAGMA)" },
      { testName: "Kreatinin Serum", resultValue: "4.8", unit: "mg/dL", normalRange: "0.6–1.1", isAbnormal: true, clinicalSignificance: "Gagal ginjal akut berat (akumulasi metformin total)" }
    ],
    suspectedESO: "Metformin-Associated Lactic Acidosis (MALA) Akibat Akumulasi Toksik pada AKI Dehidrasi",
    esoType: "Tipe A",
    triageLevel: "Gawat Darurat (Merah)",
    redFlags: ["Henti jantung asistol sekunder asidemia berat pH < 7.00", "Kolaps sirkulasi dan koma uremikum"],
    primaryActionPriority: "Hentikan metformin seketika, resusitasi cairan kristaloid, koreksi asidosis dengan infus Natrium Bikarbonat, dan hemodialisis cito emergensi.",
    doctorOrders: ["Stop Metformin permanen", "Resusitasi cairan NaCl 0,9% 1.000 mL guyur cepat lanjut 250 mL/jam", "Infus Natrium Bikarbonat 8,4% 100 mEq dalam D5%", "Aktivasi Hemodialisis Cito (HD efektif mengeluarkan metformin dan mengoreksi asidosis)", "Pindah rawat intensif ICU"],
    nurseInterventions: [
      { id: "act-1", actionName: "Hentikan pemberian metformin dan pasang kateter urin untuk evaluasi output", isCorrect: true, feedback: "Menghindari penambahan beban toksin metformin.", scoreWeight: 30 },
      { id: "act-2", actionName: "Lakukan resusitasi infus cairan dan siapkan pasien untuk hemodialisis darurat", isCorrect: true, feedback: "Hemodialisis adalah terapi penyelamat utama MALA.", scoreWeight: 40 },
      { id: "act-3", actionName: "Memberikan suntikan obat penurun napas agar pasien tidak bernapas cepat", isCorrect: false, feedback: "FATAL! Napas Kussmaul adalah kompensasi tubuh membuang asam CO2; menghambat napas akan menurunkan pH di bawah 7,0 dan memicu kematian seketika!", scoreWeight: -50 },
      { id: "act-4", actionName: "Pantau ketat tanda vital, pola pernapasan Kussmaul, dan gas darah serial", isCorrect: true, feedback: "Monitoring resusitasi asidosis metabolik intensif.", scoreWeight: 30 }
    ],
    familyQuestion: "Sus, kenapa napas ibu saya terengah-engah sangat dalam dan badannya dingin sekali?",
    familyIdealAnswer: "Ibu Rohanah mengalami komplikasi berat yang disebut Asidosis Laktat akibat obat diabetes metformin. Saat ibu diare dan kurang minum, ginjal ibu terganggu sehingga obat metformin menumpuk dan memicu kelebihan asam berbahaya di dalam darah (pH anjlok ke 7,04). Napas cepat dalam itu adalah cara paru-paru mencoba membuang asam tersebut. Kami sedang memberikan cairan infus basa dan mempersiapkan cuci darah darurat untuk menyaring racun obatnya.",
    doctorConsultSBAR: {
      situation: "Dokter ICU & Nefrolog, pasien Ny. Rohanah di Dahlia 6 mengalami krisis MALA berat (pH 7,04, laktat 11,8).",
      background: "DM rutin metformin 3x850mg, diare 3 hari, dehidrasi berat, anuria.",
      assessment: "Pernapasan Kussmaul, kreatinin 4,8 mg/dL, HCO3 6,2 mmol/L. Metformin sudah distop.",
      recommendation: "Mohon izin inisiasi Hemodialisis Cito emergensi dan infus bikarbonat."
    },
    mesoReport: {
      eventDescription: "Metformin-Associated Lactic Acidosis (MALA berat, pH 7,04, laktat 11,8 mmol/L, kreatinin 4,8) dipicu AKI prerenal.",
      severityDegree: "Mengancam Jiwa",
      immediateAction: "Stop metformin, resusitasi salin, bikarbonat IV, hemodialisis cito."
    },
    references: "American Diabetes Association (ADA) Standards of Care 2026; KDIGO Guidelines; Modul Rajawali."
  },
  {
    id: 28,
    groupTitle: "Kelompok 5 — Reaksi Penggunaan Obat Khusus",
    groupNumber: 5,
    caseCode: "KASUS-28",
    title: "Insufisiensi Adrenal Akut (Krisis Addisonian) Akibat Penghentian Kortikosteroid Mendadak",
    patientName: "Tn. Slamet",
    age: 50,
    gender: "Laki-laki",
    roomLocation: "Ruang Rawat Inap Melati - Bed 5",
    roomKey: "inpatient",
    chiefComplaint: "Pingsan syok lemas tak berdaya, muntah-muntah, nyeri perut melilit, dan tekanan darah anjlok.",
    anamnesis: "Pasien mengonsumsi deksametason dan prednison dosis tinggi selama 1 tahun untuk mengobati asma dan nyeri sendi rematik (membeli bebas di warung jamu). Empat hari lalu obatnya habis dan pasien memutuskan berhenti sama sekali secara mendadak. Dua hari terakhir pasien mual muntah hebat, pusing melayang, badan sangat lemah hingga tidak bisa duduk, dan pingsan saat berdiri.",
    historyOfPresentIllness: "Penggunaan kortikosteroid oral kronis 1 tahun.",
    pastMedicalHistory: "Asma bronkial, rematik sendi.",
    medicationHistory: [
      { drugName: "Deksametason", dose: "1,5 mg", route: "Oral", timing: "3x sehari", indication: "Rematik (jangka panjang)", isSuspectedDrug: true },
      { drugName: "Prednison", dose: "10 mg", route: "Oral", timing: "2x sehari", indication: "Asma (jangka panjang)", isSuspectedDrug: true }
    ],
    physicalExamDoctor: "TD 76/48 mmHg (Syok refrakter vasopresor), Nadi 124 x/menit lemah halus, RR 22 x/menit, Suhu 36,0°C. Moon face (+), buffalo hump (+), striae abdomen keunguan (tanda Cushingoid fisik akibat steroid kronis). Akral dingin, turgor kulit menurun, hiperpigmentasi ringan pada lipatan kulit.",
    vitalSigns: { bloodPressure: "76/48 mmHg", heartRate: 124, respiratoryRate: 22, temperature: 36.0, spO2: 97, gcs: "E3V4M6 (13) - Letargis" },
    labResults: [
      { testName: "Kortisol Serum Pagi", resultValue: "1.2", unit: "µg/dL", normalRange: "5.0–25.0", isAbnormal: true, clinicalSignificance: "Supresi aksis HPA total (insufisiensi adrenal akut)" },
      { testName: "Glukosa Darah Sewaktu (GDS)", resultValue: "52", unit: "mg/dL", normalRange: "70–140", isAbnormal: true, clinicalSignificance: "Hipoglikemia akibat ketiadaan glukokortikoid" },
      { testName: "Natrium Serum", resultValue: "124", unit: "mmol/L", normalRange: "135–145", isAbnormal: true, clinicalSignificance: "Hiponatremia berat" },
      { testName: "Kalium Serum", resultValue: "5.7", unit: "mmol/L", normalRange: "3.5–5.0", isAbnormal: true, clinicalSignificance: "Hiperkalemia sekunder defisiensi mineralokortikoid" }
    ],
    suspectedESO: "Krisis Adrenal Akut (Addisonian Crisis) Akibat Rebound Supresi Aksis Hipotalamus-Pituitari-Adrenal (HPA)",
    esoType: "Tipe A",
    triageLevel: "Gawat Darurat (Merah)",
    redFlags: ["Syok sirkulasi refrakter terhadap cairan", "Koma hipoglikemik dan henti jantung hiperkalemia"],
    primaryActionPriority: "Resusitasi cairan kristaloid dekstrosa (D5% NaCl 0,9%), injeksi Hidrokortison IV dosis stres 100 mg bolus, koreksi hipoglikemia.",
    doctorOrders: ["Injeksi Hidrokortison 100 mg IV bolus segera, lanjut 50–100 mg tiap 6–8 jam", "Guyur infus Dextrose 5% in NaCl 0,9% (D5NS) 1.000 mL dalam 1 jam pertama", "Injeksi Dextrose 40% (D40) 2 flakon bila GDS < 60 mg/dL", "Pantau tanda vital dan elektrolit serial tiap 4 jam", "Rencanakan protokol tapering off bertahap steroid setelah kondisi stabil"],
    nurseInterventions: [
      { id: "act-1", actionName: "Pasang akses intravena cepat dan suntikkan Hidrokortison IV 100 mg atas instruksi dokter", isCorrect: true, feedback: "Menggantikan defisiensi kortisol yang memicu kolaps pembuluh darah.", scoreWeight: 40 },
      { id: "act-2", actionName: "Guyur cairan D5NS untuk mengatasi syok, hiponatremia, dan hipoglikemia", isCorrect: true, feedback: "Kombinasi terapi cairan dan glukosa sangat tepat.", scoreWeight: 35 },
      { id: "act-3", actionName: "Melarang pasien meminum steroid lagi selamanya", isCorrect: false, feedback: "KELIRU! Kelenjar adrenal pasien sedang 'tertidur' mati suri akibat supresi kronis; penghentian mendadak justru penyebab krisis ini; harus di-tapering perlahan berbulan-bulan!", scoreWeight: -45 },
      { id: "act-4", actionName: "Edukasi keluarga tentang bahaya penghentian mendadak obat kortikosteroid", isCorrect: true, feedback: "Edukasi keselamatan pasien yang sangat mendasar.", scoreWeight: 25 }
    ],
    familyQuestion: "Sus, suami saya kan cuma berhenti minum obat rematik karena merasa sudah enakan, kenapa malah pingsan tensinya hilang?",
    familyIdealAnswer: "Obat rematik yang diminum selama setahun itu mengandung kortikosteroid dosis tinggi. Obat ini mengambil alih tugas kelenjar adrenal alami tubuh, sehingga pabrik hormon alami tubuhnya 'tertidur'. Saat obat dihentikan tiba-tiba, tubuh kehabisan hormon kortisol sama sekali sehingga tekanan darah anjlok ke 76 dan gula darahnya drop drastis. Kami sedang menyuntikkan hormon pengganti darurat agar tensi bapak kembali stabil.",
    doctorConsultSBAR: {
      situation: "Dokter Sp.PD, pasien Tn. Slamet di Melati 5 mengalami krisis adrenal akut pasca stop steroid kronis.",
      background: "Konsumsi steroid bebas 1 tahun, stop mendadak 4 hari lalu. Cushingoid appearance (+).",
      assessment: "TD 76/48 syok, GDS 52 mg/dL, Na 124, K 5.7, kortisol 1.2 mcg/dL. Letargis.",
      recommendation: "Mohon konfirmasi Hidrokortison 100 mg IV bolus dan guyur cairan D5NS 1 L."
    },
    mesoReport: {
      eventDescription: "Krisis Addisonian akut (syok 76/48, hiponatremia, hipoglikemia) imbas penghentian mendadak steroid kronis.",
      severityDegree: "Mengancam Jiwa",
      immediateAction: "Hidrokortison IV dosis stres, resusitasi D5NS, pemantauan elektrolit."
    },
    references: "Endocrine Society Clinical Practice Guidelines on Adrenal Insufficiency; Modul Rajawali."
  },
  {
    id: 29,
    groupTitle: "Kelompok 5 — Reaksi Penggunaan Obat Khusus",
    groupNumber: 5,
    caseCode: "KASUS-29",
    title: "Sindrom Putus Obat (Withdrawal) Berat Setelah Penghentian Benzodiazepin Mendadak",
    patientName: "Ny. Linda",
    age: 45,
    gender: "Perempuan",
    roomLocation: "Ruang Rawat Inap Dahlia - Bed 5",
    roomKey: "inpatient",
    chiefComplaint: "Kejang kelonjotan mendadak, sangat gelisah panik, gemetar hebat seluruh badan, dan halusinasi ketakutan.",
    anamnesis: "Pasien mengonsumsi alprazolam 1 mg 3x sehari dan diazepam 5 mg malam untuk mengatasi insomnia dan gangguan cemas menyeluruh selama 3 tahun. Karena kehabisan obat dan merasa ingin lepas dari ketergantungan, pasien memutuskan menghentikan total seluruh obat penenang sejak 3 hari lalu. Pagi ini pasien mengalami tremor hebat, keringat dingin membanjir, melihat bayangan serangga merayap di dinding (halusinasi visual), dan puncaknya mengalami kejang tonik-klonik selama 2 menit.",
    historyOfPresentIllness: "Ketergantungan benzodiazepin kronis 3 tahun.",
    pastMedicalHistory: "Generalized Anxiety Disorder.",
    medicationHistory: [
      { drugName: "Alprazolam", dose: "1 mg", route: "Oral", timing: "3x sehari", indication: "Gangguan cemas kronis", isSuspectedDrug: true },
      { drugName: "Diazepam", dose: "5 mg", route: "Oral", timing: "1x malam", indication: "Insomnia", isSuspectedDrug: true }
    ],
    physicalExamDoctor: "TD 168/102 mmHg, Nadi 128 x/menit, RR 26 x/menit, Suhu 37,8°C. Pasien dalam fase pasca kejang (post-ictal konfusi). Agitasi ekstrem, tremor kasar jari tangan dan lidah, pupil dilatasi midriasis, diaforesis basah, hiperrefleksia patela (+3).",
    vitalSigns: { bloodPressure: "168/102 mmHg", heartRate: 128, respiratoryRate: 26, temperature: 37.8, spO2: 97, gcs: "E3V4M5 (12) - Agitasi Post-Ictal" },
    labResults: [
      { testName: "Glukosa Darah Sewaktu", resultValue: "108", unit: "mg/dL", normalRange: "70–140", isAbnormal: false, clinicalSignificance: "Bukan kejang hipoglikemik" },
      { testName: "Elektrolit Serum", resultValue: "Normal", unit: "", normalRange: "Normal", isAbnormal: false, clinicalSignificance: "Bukan kejang gangguan elektrolit" },
      { testName: "Skrining Toksikologi Urin", resultValue: "Benzodiazepin trace/negatif", unit: "", normalRange: "Positif bila ada obat", isAbnormal: true, clinicalSignificance: "Penurunan tajam kadar obat memicu deregulasi reseptor GABA-A" }
    ],
    suspectedESO: "Sindrom Putus Obat (Benzodiazepine Withdrawal Syndrome) Berat dengan Kejang & Delirium",
    esoType: "Tipe A",
    triageLevel: "Gawat Darurat (Merah)",
    redFlags: ["Status epileptikus konvulsif refrakter", "Hiperpireksia dan delirium tremens berat"],
    primaryActionPriority: "Stabilisasi ABC jalan napas pasca kejang, reinisiasi benzodiazepin kerja panjang (Diazepam IV titrasi pelan), pasang pengaman ranjang, lalu program tapering bertahap.",
    doctorOrders: ["Injeksi Diazepam 10 mg IV pelan (kecepatan 2 mg/menit) untuk mengontrol kejang dan agitasi", "Re-evaluasi 15 menit; dapat diulang Diazepam 5-10 mg IV bila agitasi berlanjut", "Setelah stabil, mulai protokol substitusi Diazepam oral dosis ekuivalen bertahap (tapering 10% per minggu)", "Pasang penghalang tempat tidur berlapis bantal (seizure precautions)", "Konsultasi ke Psikiater untuk rencana detoksifikasi aman"],
    nurseInterventions: [
      { id: "act-1", actionName: "Posisikan miring mantap (recovery position) dan bersihkan lendir jalan napas pasca kejang", isCorrect: true, feedback: "Mencegah aspirasi lidah jatuh ke belakang.", scoreWeight: 35 },
      { id: "act-2", actionName: "Kolaborasi injeksi diazepam IV pelan untuk memulihkan transmisi inhibisi GABA di otak", isCorrect: true, feedback: "Penanganan kausal kejang putus zat benzodiazepin.", scoreWeight: 35 },
      { id: "act-3", actionName: "Memasukkan sendok besi ke mulut pasien saat kejang", isCorrect: false, feedback: "BERBAHAYA & KELIRU! Memasukkan benda keras memicu patah gigi dan sumbatan jalan napas!", scoreWeight: -50 },
      { id: "act-4", actionName: "Edukasi keluarga bahwa obat penenang jangka panjang tidak boleh dihentikan mendadak tanpa bimbingan dokter", isCorrect: true, feedback: "Edukasi esensial mencegah withdrawal berulang.", scoreWeight: 30 }
    ],
    familyQuestion: "Sus, adik saya kan niatnya baik ingin berhenti minum obat penenang penenang itu, kenapa malah kejang-kejang dan mengamuk ketakutan?",
    familyIdealAnswer: "Obat penenang benzodiazepin yang diminum bertahun-tahun sudah membuat sistem saraf otak beradaptasi. Jika dihentikan mendadak, otak mengalami lonjakan sinyal listrik berlebihan tanpa rem alami, memicu kejang, gemetar, dan rasa takut halusinasi. Niat berhenti sangat baik, namun caranya wajib diturunkan secara bertahap sedikit demi sedikit selama berminggu-minggu di bawah pengawasan dokter.",
    doctorConsultSBAR: {
      situation: "Dokter Sp.KJ / Sp.S, pasien Ny. Linda di Dahlia 5 mengalami kejang tonik klonik e.c. withdrawal alprazolam.",
      background: "Konsumsi alprazolam 3mg/hari 3 tahun, stop mendadak 3 hari lalu.",
      assessment: "Post-ictal, TD 168/102, HR 128, tremor kasar, halusinasi visual, GCS 12.",
      recommendation: "Mohon izin injeksi Diazepam 10 mg IV pelan dan protokol substitusi tapering benzodiazepin."
    },
    mesoReport: {
      eventDescription: "Sindrom putus obat benzodiazepin berat (kejang tonik-klonik, delirium, takikardia) pasca penghentian mendadak alprazolam kronis.",
      severityDegree: "Mengancam Jiwa",
      immediateAction: "Diazepam IV titrasi, proteksi kejang, rencana tapering-off bertahap."
    },
    references: "APA Practice Guidelines for the Treatment of Patients with Substance Use Disorders; Modul Rajawali."
  },
  {
    id: 30,
    groupTitle: "Kelompok 5 — Reaksi Penggunaan Obat Khusus",
    groupNumber: 5,
    caseCode: "KASUS-30",
    title: "Paralisis Otot dan Apnea Berkepanjangan Setelah Suksinilkolin Akibat Defisiensi Pseudocholinesterase",
    patientName: "Tn. Bagus",
    age: 35,
    gender: "Laki-laki",
    roomLocation: "Ruang Tindakan / ICU Bed 1",
    roomKey: "icu",
    chiefComplaint: "Pasien tidak kunjung bernapas spontan dan otot tetap lumpuh total berjam-jam pasca operasi singkat.",
    anamnesis: "Pasien menjalani operasi darurat reposisi tertutup fraktur dislokasi bahu selama 15 menit di ruang tindakan. Diberikan anestesi umum dengan induksi propofol dan pelemas otot depolarisasi suksinilkolin 100 mg IV untuk memfasilitasi intubasi endotrakeal. Normalnya suksinilkolin terhidrolisis dalam waktu 5–10 menit. Namun setelah 2 jam operasi selesai, pasien sama sekali tidak bernapas spontan (apnea total) dan tonus otot tetap flaksid lumpuh.",
    historyOfPresentIllness: "Dislokasi sendi bahu akut.",
    pastMedicalHistory: "Tidak ada riwayat operasi sebelumnya. Terdapat riwayat paman pasien pernah koma lama setelah bius operasi usus buntu.",
    medicationHistory: [
      { drugName: "Suksinilkolin (Suxamethonium)", dose: "100 mg", route: "Intravena", timing: "Saat induksi", indication: "Pelemas otot relaksasi intubasi", isSuspectedDrug: true },
      { drugName: "Propofol", dose: "150 mg", route: "Intravena", timing: "Induksi anestesi", indication: "Hipnotik sedatif" }
    ],
    physicalExamDoctor: "Pasien terintubasi ventilator mekanik di ICU. Pasien sudah sadar membuka mata dan mengerti perintah (GCS E4VxM1), namun tidak mampu menggerakkan satu jari pun dan tidak ada usaha napas spontan (apnea flaksid total). Uji Train of Four (TOF) stimulasi saraf ulnaris: 0 dari 4 kedutan (blokade neuromuskular 100%).",
    vitalSigns: { bloodPressure: "128/80 mmHg", heartRate: 82, respiratoryRate: "12 (Ventilator mekanik kontrol penuh)", temperature: 36.8, spO2: 100, gcs: "E4VxM1 (Sadar terintubasi flaksid)" },
    labResults: [
      { testName: "Aktivitas Butyrylcholinesterase (Pseudocholinesterase) Plasma", resultValue: "420", unit: "U/L", normalRange: "5300–12900", isAbnormal: true, clinicalSignificance: "Defisiensi enzim berat genetik (homozigot varian atipikal BCHE)" },
      { testName: "Bilangan Dibukain (Dibucaine Number)", resultValue: "18", unit: "%", normalRange: "75–85", isAbnormal: true, clinicalSignificance: "Konfirmasi genotip enzim atipikal abnormal" },
      { testName: "Kalium Serum Post-Op", resultValue: "4.3", unit: "mmol/L", normalRange: "3.5–5.0", isAbnormal: false, clinicalSignificance: "Normal" }
    ],
    suspectedESO: "Prolonged Apnea & Neuromuscular Blockade Akibat Variasi Farmakogenetika Defisiensi Pseudocholinesterase",
    esoType: "Khusus/Genetik",
    triageLevel: "Gawat Darurat (Merah)",
    redFlags: ["Ekstubasi prematur yang memicu asfiksia mati lemas pada pasien sadar", "Pneumonia aspirasi", "Trauma psikologis pasien (sadar penuh tapi lumpuh tanpa sedasi adekuat)"],
    primaryActionPriority: "Pertahankan ventilasi mekanik ventilator, berikan sedasi ringan penenang agar pasien tidak panik tercekik, tunggu eliminasi enzimatis lambat alami, atau pertimbangkan transfusi FFP.",
    doctorOrders: ["Lanjutkan ventilasi mekanik di ICU hingga uji TOF pulih 4/4 dan napas spontan adekuat", "Berikan sedasi propofol/midazolam dosis titrasi rendah untuk mencegah 'anesthesia awareness' (pasien sadar terperangkap dalam tubuh lumpuh)", "Opsi: Transfusi 2 unit Fresh Frozen Plasma (FFP) untuk mensuplai enzim kolinesterase eksogen", "JANGAN berikan Neostigmin pada fase blokade depolarisasi fase 1 (memperpanjang kelumpuhan)", "Edukasi keluarga skrining genetik kolinesterase"],
    nurseInterventions: [
      { id: "act-1", actionName: "Pertahankan ventilator mekanik dan fiksasi selang endotrakeal dengan aman", isCorrect: true, feedback: "Menjamin oksigenasi hidup pasien selama otot diafragma lumpuh.", scoreWeight: 35 },
      { id: "act-2", actionName: "Berikan komunikasi empati dan sedasi tenang kepada pasien bahwa kondisinya aman dan obat bius akan hilang", isCorrect: true, feedback: "Mencegah kepanikan psikologis luar biasa (pasien sadar tapi tidak bisa napas).", scoreWeight: 35 },
      { id: "act-3", actionName: "Mencabut selang napas ventilator karena operasi sudah selesai 2 jam lalu", isCorrect: false, feedback: "FATAL! Pasien tidak memiliki usaha napas spontan; mencabut ETT akan menyebabkan kematian asfiksia dalam hitungan menit!", scoreWeight: -50 },
      { id: "act-4", actionName: "Pantau pemulihan stimulasi saraf perifer TOF setiap 30 menit", isCorrect: true, feedback: "Menilai kembalinya transmisi neuromuskular secara objektif.", scoreWeight: 30 }
    ],
    familyQuestion: "Sus, operasinya cuma 15 menit, kenapa suami saya sudah 2 jam lebih belum bisa napas sendiri dan masih dipasang mesin di ICU?",
    familyIdealAnswer: "Bapak memiliki variasi genetik langka bawaan lahir yaitu kekurangan enzim pseudokolinesterase di darahnya. Enzim ini bertugas memecah obat pelemas otot suksinilkolin yang dipakai saat pembiusan. Karena enzimnya sangat sedikit, obat tersebut butuh waktu lebih lama untuk terurai alami. Bapak sudah kami amankan dengan mesin napas di ICU dan obat penenang agar nyaman sampai obatnya terbuang habis dan otot napasnya bekerja kembali.",
    doctorConsultSBAR: {
      situation: "Dokter Anestesi & ICU, pasien Tn. Bagus di ICU Bed 1 mengalami apnea berkepanjangan 2 jam pasca suksinilkolin.",
      background: "Operasi reposisi bahu singkat 15 menit, suksinilkolin 100 mg. Riwayat keluarga apnea pembiusan (+).",
      assessment: "TOF 0/4, pseudocholinesterase rendah (420 U/L), dibucaine number 18%. Pasien sadar flaksid.",
      recommendation: "Mohon konfirmasi kelanjutan ventilasi mekanik, sedasi ringan, dan opsi transfusi 2 unit FFP."
    },
    mesoReport: {
      eventDescription: "Apnea berkepanjangan dan paralisis neuromuskular persisten pasca suksinilkolin e.c. defisiensi pseudocholinesterase genetik.",
      severityDegree: "Mengancam Jiwa (Membutuhkan dukungan ventilasi mekanik invasif)",
      immediateAction: "Ventilasi mekanik ICU, sedasi protektif, monitoring TOF serial, konseling genetik keluarga."
    },
    references: "Pallardy et al. Toxicol Sci 2024; Mokbel et al. In Vivo 2024; Modul Rajawali."
  }
];
