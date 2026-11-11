import { QuizQuestion } from '../types/medical';

export const QUESTIONS_DATA: QuizQuestion[] = [
  // Bagian I. Soal Teori (Nomor 1-15)
  {
    id: 1,
    type: 'Teori',
    question: 'Efek samping obat (ESO) paling tepat didefinisikan sebagai ....',
    options: [
      { key: 'A', text: 'Respons obat yang selalu muncul pada setiap pasien' },
      { key: 'B', text: 'Respons obat yang merugikan atau tidak diinginkan pada penggunaan obat untuk pencegahan, diagnosis, atau terapi' },
      { key: 'C', text: 'Efek terapeutik yang diharapkan setelah obat diberikan' },
      { key: 'D', text: 'Kegagalan obat mencapai kadar terapeutik' },
      { key: 'E', text: 'Gejala penyakit yang muncul sebelum pasien menerima obat' }
    ],
    correctAnswer: 'B',
    explanation: 'ESO merupakan respons obat yang merugikan/tidak diinginkan yang terjadi pada dosis yang lazim digunakan manusia untuk pencegahan, diagnosis, atau terapi. Keluhan yang muncul setelah pemberian obat tetap perlu dikaji kronologinya secara seksama.'
  },
  {
    id: 2,
    type: 'Teori',
    question: 'Pernyataan yang paling membedakan toksisitas dari efek samping biasa adalah ....',
    options: [
      { key: 'A', text: 'Toksisitas hanya terjadi pada pasien anak' },
      { key: 'B', text: 'Toksisitas selalu merupakan reaksi alergi' },
      { key: 'C', text: 'Toksisitas merupakan efek merugikan yang lebih berat dan sering berkaitan dengan dosis, kadar obat, atau akumulasi' },
      { key: 'D', text: 'Toksisitas hanya terjadi pada penggunaan obat topikal' },
      { key: 'E', text: 'Toksisitas tidak memerlukan pemantauan klinis' }
    ],
    correctAnswer: 'C',
    explanation: 'Toksisitas umumnya berderajat lebih berat dan berkaitan dengan kelebihan dosis (overdose), kadar plasma tinggi melampaui jendela terapi, atau akumulasi akibat penurunan klirens organ eliminasi.'
  },
  {
    id: 3,
    type: 'Teori',
    question: 'Pemberian insulin pada pasien dengan defisiensi insulin termasuk contoh terapi ....',
    options: [
      { key: 'A', text: 'Kausal' },
      { key: 'B', text: 'Simptomatis' },
      { key: 'C', text: 'Substitusi' },
      { key: 'D', text: 'Profilaksis' },
      { key: 'E', text: 'Rehabilitatif' }
    ],
    correctAnswer: 'C',
    explanation: 'Terapi substitusi adalah terapi untuk menggantikan zat fisiologis esensial yang normalnya diproduksi tubuh namun tidak cukup atau tidak tersedia, seperti insulin pada diabetes melitus tipe 1.'
  },
  {
    id: 4,
    type: 'Teori',
    question: 'Karakteristik utama ESO tipe A adalah ....',
    options: [
      { key: 'A', text: 'Tidak dapat diperkirakan dan tidak berhubungan dengan dosis' },
      { key: 'B', text: 'Selalu dimediasi IgE' },
      { key: 'C', text: 'Hanya terjadi pada pasien dengan riwayat alergi' },
      { key: 'D', text: 'Dapat diperkirakan dan umumnya berkaitan dengan efek farmakologis atau dosis' },
      { key: 'E', text: 'Hanya terjadi setelah obat dihentikan' }
    ],
    correctAnswer: 'D',
    explanation: 'ESO tipe A (Augmented) mencakup 80% kasus ESO, bersifat dapat diperkirakan (predictable) dari aksi farmakologis obat, dan bergantung pada dosis (dose-dependent) atau akumulasi.'
  },
  {
    id: 5,
    type: 'Teori',
    question: 'Pernyataan yang tepat mengenai ESO tipe B adalah ....',
    options: [
      { key: 'A', text: 'Selalu dapat diprediksi dari dosis obat' },
      { key: 'B', text: 'Merupakan reaksi yang tidak lazim dan tidak mudah diprediksi dari efek farmakologis normal obat' },
      { key: 'C', text: 'Hanya berupa mual dan muntah' },
      { key: 'D', text: 'Tidak pernah mengancam nyawa' },
      { key: 'E', text: 'Selalu terjadi akibat kesalahan pemberian obat' }
    ],
    correctAnswer: 'B',
    explanation: 'ESO tipe B (Bizarre) adalah reaksi merugikan yang aneh, tidak mudah diprediksi dari farmakologi obat yang biasa, tidak bergantung pada dosis, dan sering berkaitan dengan hipersensitivitas imunologis atau faktor genetik.'
  },
  {
    id: 6,
    type: 'Teori',
    question: 'Faktor yang paling meningkatkan risiko interaksi obat pada pasien lansia adalah ....',
    options: [
      { key: 'A', text: 'Penggunaan satu obat sesuai resep' },
      { key: 'B', text: 'Polifarmasi atau penggunaan banyak obat secara bersamaan' },
      { key: 'C', text: 'Pola tidur teratur' },
      { key: 'D', text: 'Aktivitas fisik ringan' },
      { key: 'E', text: 'Asupan air yang cukup' }
    ],
    correctAnswer: 'B',
    explanation: 'Polifarmasi (penggunaan >= 5 obat secara bersamaan) merupakan pemicu utama interaksi obat, duplikasi terapi, dan reaksi merugikan, terutama pada lansia yang mengalami penurunan faal ginjal dan hati.'
  },
  {
    id: 7,
    type: 'Teori',
    question: 'Pada pasien dengan gangguan ginjal, risiko akumulasi obat meningkat terutama karena ....',
    options: [
      { key: 'A', text: 'Absorpsi obat selalu meningkat' },
      { key: 'B', text: 'Distribusi obat berhenti sepenuhnya' },
      { key: 'C', text: 'Eliminasi obat atau metabolit melalui ginjal dapat menurun' },
      { key: 'D', text: 'Semua obat berubah menjadi tidak aktif' },
      { key: 'E', text: 'Metabolisme di kulit meningkat' }
    ],
    correctAnswer: 'C',
    explanation: 'Penurunan laju filtrasi glomerulus (GFR) pada gangguan ginjal memperlambat klirens dan eliminasi obat atau metabolit aktifnya keluar dari tubuh, memicu peningkatan kadar dalam darah hingga tingkat toksik.'
  },
  {
    id: 8,
    type: 'Teori',
    question: 'Hipersensitivitas tipe I umumnya dimediasi oleh ....',
    options: [
      { key: 'A', text: 'IgG yang menyerang eritrosit' },
      { key: 'B', text: 'Kompleks imun yang mengendap di jaringan' },
      { key: 'C', text: 'Sel T yang memicu inflamasi tertunda' },
      { key: 'D', text: 'IgE yang mengaktivasi sel mast dan basofil' },
      { key: 'E', text: 'Penurunan produksi antibodi' }
    ],
    correctAnswer: 'D',
    explanation: 'Hipersensitivitas tipe I (Immediate) dimediasi oleh antibodi IgE yang berikatan pada reseptor sel mast dan basofil, melepaskan mediator kimia vasoaktif seperti histamin dalam hitungan menit.'
  },
  {
    id: 9,
    type: 'Teori',
    question: 'Mekanisme utama hipersensitivitas tipe II adalah ....',
    options: [
      { key: 'A', text: 'Kompleks antigen-antibodi mengendap di jaringan' },
      { key: 'B', text: 'Antibodi IgG atau IgM berikatan dengan komponen permukaan sel dan memicu kerusakan/perubahan fungsi sel' },
      { key: 'C', text: 'Aktivasi sel T tanpa keterlibatan antibodi' },
      { key: 'D', text: 'Pelepasan histamin tanpa mekanisme imun' },
      { key: 'E', text: 'Penurunan eliminasi obat melalui ginjal' }
    ],
    correctAnswer: 'B',
    explanation: 'Hipersensitivitas tipe II (Sitotoksik) melibatkan antibodi IgG atau IgM yang berikatan dengan hapten obat pada membran sel, mengaktifkan komplemen atau sel Natural Killer untuk menghancurkan sel darah tersebut.'
  },
  {
    id: 10,
    type: 'Teori',
    question: 'Manifestasi yang sesuai dengan hipersensitivitas tipe III adalah ....',
    options: [
      { key: 'A', text: 'Serum sickness dan glomerulonefritis akibat pengendapan kompleks imun' },
      { key: 'B', text: 'Apnea berkepanjangan setelah suksinilkolin' },
      { key: 'C', text: 'Hipoglikemia setelah insulin' },
      { key: 'D', text: 'Konstipasi setelah opioid' },
      { key: 'E', text: 'Tinnitus setelah aminoglikosida' }
    ],
    correctAnswer: 'A',
    explanation: 'Hipersensitivitas tipe III ditandai oleh pengendapan kompleks antigen-antibodi pada pembuluh darah kapiler atau glomerulus ginjal, memicu vaskulitis, serum sickness, atau glomerulonefritis.'
  },
  {
    id: 11,
    type: 'Teori',
    question: 'Hipersensitivitas tipe IV berbeda dari tipe I karena tipe IV ....',
    options: [
      { key: 'A', text: 'Selalu muncul dalam hitungan detik dan dimediasi IgE' },
      { key: 'B', text: 'Dimediasi sel T dan dapat muncul secara tertunda' },
      { key: 'C', text: 'Hanya menyerang eritrosit' },
      { key: 'D', text: 'Tidak pernah mengenai kulit' },
      { key: 'E', text: 'Selalu disebabkan overdosis' }
    ],
    correctAnswer: 'B',
    explanation: 'Hipersensitivitas tipe IV (Delayed-type hypersensitivity) diperantarai oleh sel T memori spesifik (bukan antibodi) dan memerlukan waktu sensitisasi serta aktivasi yang tertunda (24–72 jam atau lebih).'
  },
  {
    id: 12,
    type: 'Teori',
    question: 'Reaksi pseudoalergi paling tepat dijelaskan sebagai ....',
    options: [
      { key: 'A', text: 'Reaksi yang selalu disebabkan antibodi IgE' },
      { key: 'B', text: 'Reaksi yang menyerupai alergi, tetapi tidak melalui mekanisme imun spesifik yang sama' },
      { key: 'C', text: 'Reaksi akibat penghentian obat' },
      { key: 'D', text: 'Efek terapeutik yang berlebihan' },
      { key: 'E', text: 'Reaksi yang hanya terjadi pada kehamilan' }
    ],
    correctAnswer: 'B',
    explanation: 'Pseudoalergi (reaksi anafilaktoid) memunculkan gejala klinis yang serupa dengan reaksi alergi (urtikaria, flushing, bronkospasme), namun terjadi karena pelepasan langsung histamin tanpa mediasi antibodi IgE.'
  },
  {
    id: 13,
    type: 'Teori',
    question: 'Farmakogenetika mempelajari ....',
    options: [
      { key: 'A', text: 'Hubungan pola makan dengan waktu pemberian obat' },
      { key: 'B', text: 'Pengaruh variasi gen terhadap respons seseorang terhadap obat' },
      { key: 'C', text: 'Pengaruh suhu penyimpanan terhadap warna obat' },
      { key: 'D', text: 'Hubungan aktivitas fisik dengan tekanan darah' },
      { key: 'E', text: 'Pengaruh ukuran tablet terhadap kepatuhan' }
    ],
    correctAnswer: 'B',
    explanation: 'Farmakogenetika meneliti bagaimana variasi DNA dan polimorfisme genetik memengaruhi laju metabolisme obat, efektivitas terapi, dan kecenderungan timbulnya efek samping obat.'
  },
  {
    id: 14,
    type: 'Teori',
    question: 'Pasien dengan defisiensi G6PD perlu diwaspadai terhadap obat/zat pemicu tertentu karena dapat mengalami ....',
    options: [
      { key: 'A', text: 'Hipertensi akut' },
      { key: 'B', text: 'Hemolisis akibat stres oksidatif pada eritrosit' },
      { key: 'C', text: 'Ototoksisitas permanen' },
      { key: 'D', text: 'Hiperglikemia berat' },
      { key: 'E', text: 'Konstipasi kronis' }
    ],
    correctAnswer: 'B',
    explanation: 'Enzim G6PD penting untuk mempertahankan kadar glutation tereduksi pada sel darah merah. Tanpa enzim ini, obat pemicu oksidatif (seperti primakuin, dapson, sulfonamida) memicu hemolisis masif eritrosit.'
  },
  {
    id: 15,
    type: 'Teori',
    question: 'Dokumentasi dugaan ESO yang paling tepat adalah ....',
    options: [
      { key: 'A', text: 'Menulis "alergi obat" tanpa rincian' },
      { key: 'B', text: 'Mencatat hanya nama obat' },
      { key: 'C', text: 'Mencatat nama obat, dosis, rute, waktu pemberian, onset gejala, temuan objektif, tindakan, respons, dan pelaporan' },
      { key: 'D', text: 'Mencatat keluhan setelah pasien pulang saja' },
      { key: 'E', text: 'Menghapus obat dari daftar tanpa dokumentasi' }
    ],
    correctAnswer: 'C',
    explanation: 'Dokumentasi keperawatan harus faktual, lengkap, dan kronologis: mencakup identitas obat, dosis, rute, waktu kejadian, tanda vital objektif, tindakan yang dilakukan, respons pasien, serta pelaporan ke DPJP dan farmasi.'
  },

  // Bagian II. Soal Kasus Klinis (Nomor 16-30)
  // Kasus 1: Hipoglikemia pada pengguna insulin (16-18)
  {
    id: 16,
    type: 'Kasus Klinis',
    scenarioTitle: 'Kasus 1: Hipoglikemia pada Pengguna Insulin',
    caseScenario: 'Ny. A, 63 tahun, dengan diabetes melitus tipe 2, menggunakan insulin kerja cepat 8 unit sebelum makan. Pasien hanya menghabiskan beberapa suap karena mual. Satu jam kemudian pasien berkeringat dingin, gemetar, berdebar, dan sulit berkonsentrasi. TD 118/74, HR 108, RR 20, SpO2 98%, kulit dingin lembap, GCS 14 (mampu menelan). GDS 48 mg/dL.',
    question: 'Masalah yang paling mungkin dialami Ny. A adalah ....',
    options: [
      { key: 'A', text: 'Hiperglikemia akibat insulin' },
      { key: 'B', text: 'Hipoglikemia terkait ketidakseimbangan insulin dan asupan makan' },
      { key: 'C', text: 'Anafilaksis terhadap insulin' },
      { key: 'D', text: 'Toksisitas hati' },
      { key: 'E', text: 'Reaksi putus obat' }
    ],
    correctAnswer: 'B',
    explanation: 'GDS 48 mg/dL disertai gejala adrenergik dan neuroglikopenik (keringat dingin, tremor, palpitasi, konfusi) akibat insulin yang tetap bekerja sementara asupan karbohidrat tidak mencukupi merupakan hipoglikemia (ESO tipe A).'
  },
  {
    id: 17,
    type: 'Kasus Klinis',
    scenarioTitle: 'Kasus 1: Hipoglikemia pada Pengguna Insulin',
    caseScenario: 'Ny. A (63 th), GDS 48 mg/dL, berkeringat dingin, takikardia 108x/m, sadar dan mampu menelan.',
    question: 'Data yang harus diprioritaskan perawat pada kondisi tersebut adalah ....',
    options: [
      { key: 'A', text: 'Warna rambut dan pola tidur' },
      { key: 'B', text: 'GDS, tingkat kesadaran, kemampuan menelan, waktu/dosis insulin, dan asupan terakhir' },
      { key: 'C', text: 'Riwayat imunisasi saja' },
      { key: 'D', text: 'Berat badan keluarga' },
      { key: 'E', text: 'Riwayat alergi makanan saja' }
    ],
    correctAnswer: 'B',
    explanation: 'Data kritis meliputi: nilai glukosa darah sewaktu (GDS), status kesadaran dan patensi menelan (menentukan rute koreksi glukosa aman), serta dosis/waktu injeksi insulin dan jumlah makanan terakhir.'
  },
  {
    id: 18,
    type: 'Kasus Klinis',
    scenarioTitle: 'Kasus 1: Hipoglikemia pada Pengguna Insulin',
    caseScenario: 'Pasien sadar, GCS 14, mampu mengikuti instruksi dan mampu menelan cairan dengan baik.',
    question: 'Tindakan awal yang tepat pada pasien yang sadar dan mampu menelan adalah ....',
    options: [
      { key: 'A', text: 'Memberikan minum sebanyak-banyaknya tanpa pemeriksaan ulang' },
      { key: 'B', text: 'Memberikan 15 gram karbohidrat kerja cepat dan memeriksa ulang glukosa setelah 15 menit sesuai protokol' },
      { key: 'C', text: 'Memaksa pasien tidur' },
      { key: 'D', text: 'Memberikan insulin tambahan' },
      { key: 'E', text: 'Menunda tindakan sampai hasil HbA1c keluar' }
    ],
    correctAnswer: 'B',
    explanation: 'Aturan 15 (Rule of 15): Berikan 15 gram karbohidrat kerja cepat per oral (misal 150-200 mL jus buah manis atau 3-4 sendok gula), lalu periksa ulang GDS setelah 15 menit sampai mencapai target > 70 mg/dL.'
  },

  // Kasus 2: Anafilaksis setelah pemberian antibiotik (19-21)
  {
    id: 19,
    type: 'Kasus Klinis',
    scenarioTitle: 'Kasus 2: Anafilaksis Setelah Pemberian Antibiotik',
    caseScenario: 'Tn. B, 28 tahun, pneumonia, mendapat dosis pertama ceftriaxone IV. Lima menit kemudian mengeluh gatal seluruh tubuh, urtikaria, bibir bengkak, suara serak, sesak napas. TD 78/46 mmHg, HR 132 x/m, RR 30 x/m, SpO2 88%, mengi bilateral.',
    question: 'Dugaan masalah paling tepat pada Tn. B adalah ....',
    options: [
      { key: 'A', text: 'Efek samping gastrointestinal ringan' },
      { key: 'B', text: 'Anafilaksis akibat hipersensitivitas obat' },
      { key: 'C', text: 'Toksisitas ginjal kronis' },
      { key: 'D', text: 'Reaksi penghentian obat' },
      { key: 'E', text: 'Hipoglikemia' }
    ],
    correctAnswer: 'B',
    explanation: 'Onset sangat cepat (5 menit pasca antibiotik IV) disertai keterlibatan mukokutan (urtikaria, edema bibir), gangguan airway/breathing (suara serak, stridor/mengi), dan sirkulasi (syok hipotensi 78/46) memenuhi kriteria diagnosis anafilaksis.'
  },
  {
    id: 20,
    type: 'Kasus Klinis',
    scenarioTitle: 'Kasus 2: Anafilaksis Setelah Pemberian Antibiotik',
    caseScenario: 'Tn. B mengalami syok anafilaktik dengan hipotensi 78/46 mmHg dan sesak napas berat.',
    question: 'Tindakan farmakologis lini pertama pada anafilaksis adalah ....',
    options: [
      { key: 'A', text: 'Antihistamin oral saja' },
      { key: 'B', text: 'Kortikosteroid oral saja' },
      { key: 'C', text: 'Epinefrin/adrenalin intramuskular sesuai protokol' },
      { key: 'D', text: 'Antibiotik dosis tambahan' },
      { key: 'E', text: 'Diuretik intravena' }
    ],
    correctAnswer: 'C',
    explanation: 'Epinefrin / adrenalin IM pada paha anterolateral (vastus lateralis) adalah satu-satunya terapi penyelamat jiwa lini pertama pada anafilaksis. Epinefrin membalikkan vasodilatasi, menurunkan edema laring, dan menghasilkan bronkodilatasi.'
  },
  {
    id: 21,
    type: 'Kasus Klinis',
    scenarioTitle: 'Kasus 2: Anafilaksis Setelah Pemberian Antibiotik',
    caseScenario: 'Dokter dan tim perawat mempersiapkan tata laksana lanjutan resusitasi syok anafilaksis.',
    question: 'Pernyataan yang benar mengenai antihistamin dan kortikosteroid pada kasus ini adalah ....',
    options: [
      { key: 'A', text: 'Keduanya menggantikan epinefrin' },
      { key: 'B', text: 'Keduanya harus diberikan sebelum penilaian ABC' },
      { key: 'C', text: 'Keduanya tidak boleh menunda atau menggantikan epinefrin' },
      { key: 'D', text: 'Keduanya mengatasi hipotensi secara langsung sebagai terapi utama' },
      { key: 'E', text: 'Keduanya membuat dokumentasi tidak diperlukan' }
    ],
    correctAnswer: 'C',
    explanation: 'Antihistamin (H1-bloker) dan kortikosteroid hanyalah terapi tambahan (adjuvant) untuk mengurangi pruritus dan mencegah reaksi bifasik, dan sama sekali TIDAK BOLEH menunda atau menggantikan suntikan epinefrin IM.'
  },

  // Kasus 3: Polifarmasi pada lansia dengan gangguan ginjal (22-24)
  {
    id: 22,
    type: 'Kasus Klinis',
    scenarioTitle: 'Kasus 3: Polifarmasi pada Lansia dengan Gangguan Ginjal',
    caseScenario: 'Tn. C, 78 tahun, riwayat hipertensi dan CKD, mengonsumsi lisinopril, furosemid, metformin, ibuprofen yang dibeli sendiri, dan ramuan herbal. Mengalami diare 3 hari, asupan kurang, pusing berdiri, lemah. TD tidur 104/66, berdiri 86/54 (ortostatik). Kreatinin 2,4 (sebelumnya 1,6), eGFR 27, Kalium 5,6 mmol/L, urine 0,4 mL/kg/jam.',
    question: 'Masalah yang paling perlu dicurigai pada Tn. C adalah ....',
    options: [
      { key: 'A', text: 'Interaksi/akumulasi obat disertai penurunan fungsi ginjal akut di atas penyakit ginjal kronis' },
      { key: 'B', text: 'Anafilaksis tipe I' },
      { key: 'C', text: 'Hipersensitivitas tipe IV' },
      { key: 'D', text: 'Efek terapeutik insulin' },
      { key: 'E', text: 'Reaksi fotosensitivitas' }
    ],
    correctAnswer: 'A',
    explanation: 'Kombinasi dehidrasi, penggunaan ACE inhibitor (lisinopril), diuretik (furosemid), dan OAINS (ibuprofen) yang dikenal sebagai triple whammy memicu Acute Kidney Injury (AKI on CKD), hiperkalemia, dan hipotensi ortostatik.'
  },
  {
    id: 23,
    type: 'Kasus Klinis',
    scenarioTitle: 'Kasus 3: Polifarmasi pada Lansia dengan Gangguan Ginjal',
    caseScenario: 'Tn. C (78 th), kreatinin 2,4 mg/dL, kalium 5,6 mmol/L, hipotensi ortostatik positif.',
    question: 'Kombinasi data yang paling penting untuk pengkajian lanjutan adalah ....',
    options: [
      { key: 'A', text: 'Warna rambut dan kebiasaan menonton' },
      { key: 'B', text: 'Daftar semua obat termasuk herbal, tekanan darah ortostatik, kreatinin/eGFR, elektrolit, dan output urine' },
      { key: 'C', text: 'Riwayat perjalanan saja' },
      { key: 'D', text: 'Pola tidur keluarga' },
      { key: 'E', text: 'Pemeriksaan ketajaman penglihatan saja' }
    ],
    correctAnswer: 'B',
    explanation: 'Data prioritas komprehensif: rekonsiliasi seluruh obat/herbal, tanda vital ortostatik (risiko jatuh), parameter faal ginjal (kreatinin/eGFR/ureum), elektrolit serum (waspadai aritmia karena kalium 5,6), dan balans haluaran urine.'
  },
  {
    id: 24,
    type: 'Kasus Klinis',
    scenarioTitle: 'Kasus 3: Polifarmasi pada Lansia dengan Gangguan Ginjal',
    caseScenario: 'Pasien berisiko jatuh tinggi dan kalium darah meningkat.',
    question: 'Tindakan keperawatan yang paling tepat adalah ....',
    options: [
      { key: 'A', text: 'Menghentikan seluruh obat secara mandiri' },
      { key: 'B', text: 'Menganjurkan pasien menggandakan dosis diuretik' },
      { key: 'C', text: 'Mencegah jatuh, memantau kondisi dan output urine, serta segera melaporkan perubahan fungsi ginjal/kalium kepada dokter' },
      { key: 'D', text: 'Mengabaikan obat bebas dan herbal' },
      { key: 'E', text: 'Memulangkan pasien tanpa edukasi' }
    ],
    correctAnswer: 'C',
    explanation: 'Intervensi keperawatan utama: pasang gelang risiko jatuh kuning, pantau urine dan EKG, lakukan rekonsiliasi obat, serta komunikasikan temuan hiperkalemia dan peningkatan kreatinin ke DPJP untuk penyesuaian resep.'
  },

  // Kasus 4: Dugaan hepatotoksisitas akibat obat antituberkulosis (25-27)
  {
    id: 25,
    type: 'Kasus Klinis',
    scenarioTitle: 'Kasus 4: Dugaan Hepatotoksisitas Akibat Obat TB',
    caseScenario: 'Ny. D, 34 tahun, mengonsumsi OAT kombinasi selama 3 minggu. Sejak 4 hari terakhir mual menetap, tidak nafsu makan, lemas, nyeri perut kanan atas, urin warna gelap (seperti teh), dan sklera ikterik. ALT 680 U/L, AST 520 U/L, Bilirubin total 4,2 mg/dL.',
    question: 'Dugaan masalah utama pada Ny. D adalah ....',
    options: [
      { key: 'A', text: 'Ototoksisitas' },
      { key: 'B', text: 'Hepatotoksisitas atau cedera hati yang diduga berkaitan dengan obat' },
      { key: 'C', text: 'Hipoglikemia' },
      { key: 'D', text: 'Agranulositosis' },
      { key: 'E', text: 'Reaksi putus benzodiazepin' }
    ],
    correctAnswer: 'B',
    explanation: 'Kombinasi OAT (khususnya Isoniazid, Rifampisin, Pirazinamid) berisiko memicu cedera hepatoseluler imbas obat (Drug-Induced Liver Injury / DILI), terbukti dengan peningkatan ALT/AST > 10x batas normal dan hiperbilirubinemia.'
  },
  {
    id: 26,
    type: 'Kasus Klinis',
    scenarioTitle: 'Kasus 4: Dugaan Hepatotoksisitas Akibat Obat TB',
    caseScenario: 'Ny. D memiliki gejala klinis ikterus dan urin gelap pekat.',
    question: 'Pemeriksaan laboratorium yang paling relevan untuk menilai dugaan cedera hati dan fungsi sintesis hati adalah ....',
    options: [
      { key: 'A', text: 'ALT, AST, bilirubin, dan INR' },
      { key: 'B', text: 'Hemoglobin dan hematokrit saja' },
      { key: 'C', text: 'Troponin dan CK-MB saja' },
      { key: 'D', text: 'Amilase saja' },
      { key: 'E', text: 'GDS saja' }
    ],
    correctAnswer: 'A',
    explanation: 'ALT dan AST merefleksikan integritas kerusakan hepatosit; bilirubin menggambarkan fungsi ekskresi hepatobilier; sedangkan INR/PT merefleksikan kapasitas sintesis faktor koagulasi hati (menilai ada tidaknya gagal hati akut).'
  },
  {
    id: 27,
    type: 'Kasus Klinis',
    scenarioTitle: 'Kasus 4: Dugaan Hepatotoksisitas Akibat Obat TB',
    caseScenario: 'Hasil laboratorium menunjukkan ALT 680 U/L, AST 520 U/L, dan sklera ikterik jelas.',
    question: 'Tindakan keperawatan yang tepat adalah ....',
    options: [
      { key: 'A', text: 'Menganjurkan pasien memulai ulang semua obat tanpa evaluasi' },
      { key: 'B', text: 'Mengabaikan ikterus karena merupakan efek normal terapi' },
      { key: 'C', text: 'Melaporkan segera temuan klinis dan laboratorium, memantau tanda perburukan, serta mengikuti instruksi dokter/program TB' },
      { key: 'D', text: 'Memberikan obat bebas untuk mengatasi semua keluhan' },
      { key: 'E', text: 'Mengubah dosis obat antituberkulosis secara mandiri' }
    ],
    correctAnswer: 'C',
    explanation: 'Sesuai pedoman TB nasional dan WHO: jika transaminase > 3x normal disertai ikterus/gejala, OAT hepatotoksik harus ditunda sementara di bawah instruksi dokter, pasien diobservasi ketat, dan dilaporkan ke program TB.'
  },

  // Kasus 5: Reaksi kulit berat setelah penggunaan lamotrigin (28-30)
  {
    id: 28,
    type: 'Kasus Klinis',
    scenarioTitle: 'Kasus 5: Reaksi Kulit Berat Setelah Lamotrigin',
    caseScenario: 'Ny. E, 22 tahun, terapi lamotrigin untuk epilepsi sejak 2 minggu lalu. Dua hari terakhir demam 38,7 C, kulit terasa nyeri hebat, muncul ruam makula keunguan meluas dari badan, lepuh/bula, erosi mukosa bibir berdarah, dan mata merah meradang.',
    question: 'Kondisi yang paling perlu dicurigai adalah ....',
    options: [
      { key: 'A', text: 'Urtikaria ringan tanpa komplikasi' },
      { key: 'B', text: 'Sindrom Stevens-Johnson atau spektrum nekrolisis epidermal toksik terkait obat' },
      { key: 'C', text: 'Konstipasi akibat opioid' },
      { key: 'D', text: 'Hipoglikemia' },
      { key: 'E', text: 'Efek terapeutik obat' }
    ],
    correctAnswer: 'B',
    explanation: 'Adanya ruam makulopapular keunguan, lepuh/bula, epidermolisis, disertai keterlibatan minimal dua selaput mukosa (mulut dan konjungtiva mata) pasca antikonvulsan mengindikasikan Sindrom Stevens-Johnson (SJS).'
  },
  {
    id: 29,
    type: 'Kasus Klinis',
    scenarioTitle: 'Kasus 5: Reaksi Kulit Berat Setelah Lamotrigin',
    caseScenario: 'Ny. E mengalami lesi pada mulut dan mata, serta nyeri kulit.',
    question: 'Temuan yang paling kuat menunjukkan reaksi kulit berat dan bukan ruam ringan adalah ....',
    options: [
      { key: 'A', text: 'Ruam terbatas tanpa keluhan sistemik' },
      { key: 'B', text: 'Kulit nyeri, lepuh/pengelupasan, demam, dan lesi mukosa mulut/mata' },
      { key: 'C', text: 'Kulit kering setelah mandi' },
      { key: 'D', text: 'Gatal ringan tanpa ruam' },
      { key: 'E', text: 'Tidak ada perubahan kondisi umum' }
    ],
    correctAnswer: 'B',
    explanation: 'Tanda bahaya reaksi kulit berat (SCAR / Severe Cutaneous Adverse Reactions): nyeri kulit berat, pembentukan bula/lepuh, pengelupasan epidermis (Nikolsky sign), demam tinggi, dan lesi erosi mukosa multipel.'
  },
  {
    id: 30,
    type: 'Kasus Klinis',
    scenarioTitle: 'Kasus 5: Reaksi Kulit Berat Setelah Lamotrigin',
    caseScenario: 'Pasien didiagnosis suspek SJS akibat lamotrigin.',
    question: 'Prioritas tindakan perawat adalah ....',
    options: [
      { key: 'A', text: 'Menunggu ruam hilang sendiri' },
      { key: 'B', text: 'Memberikan kembali lamotrigin untuk memastikan penyebab' },
      { key: 'C', text: 'Melakukan eskalasi segera, memastikan obat tersangka tidak diberikan lagi sesuai instruksi, memantau kondisi, dan mendokumentasikan kronologi serta temuan' },
      { key: 'D', text: 'Hanya mencatat keluhan gatal' },
      { key: 'E', text: 'Menghentikan seluruh terapi pasien secara mandiri' }
    ],
    correctAnswer: 'C',
    explanation: 'Prioritas keperawatan mutlak: segera pastikan obat tersangka distop, pasang label alergi merah, laporkan ke tim dokter spesialis untuk rawat luka aseptik dan pemantauan cairan, serta dokumentasikan secara teliti.'
  }
];
