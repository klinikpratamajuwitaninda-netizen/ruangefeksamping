import { SlideItem } from '../types/medical';

export const SLIDES_DATA: SlideItem[] = [
  {
    id: 1,
    slideNumber: 1,
    title: "Efek Samping Obat (ESO)",
    subtitle: "Farmakologi untuk Keselamatan Pasien dalam Praktik Keperawatan",
    topicCategory: "Pendahuluan",
    keyPoints: [
      "Materi Pembelajaran Farmakologi Keperawatan berbasis kompetensi klinis.",
      "Disusun oleh dr. Juwita Ninda Suherman, M.Kes. untuk Mahasiswa Keperawatan Institut Kesehatan Rajawali Bandung.",
      "Fokus pada pengenalan dini tanda bahaya, tindakan darurat, dokumentasi SBAR, dan pelaporan MESO.",
      "Prinsip fundamental: Keselamatan pasien (Patient Safety) melalui penggunaan obat yang rasional dan aman."
    ],
    clinicalHighlight: "Keamanan obat adalah pilar utama pelayanan keperawatan profesional di rumah sakit.",
    visualDiagramType: "infographic",
    sourceCitation: "dr. Juwita Ninda Suherman, M.Kes. | Institut Kesehatan Rajawali Bandung"
  },
  {
    id: 2,
    slideNumber: 2,
    title: "Sejarah Efek Samping Obat",
    subtitle: "Dari Tragedi Keselamatan Obat Menuju Sistem Pemantauan Global",
    topicCategory: "Sejarah & Regulasi",
    keyPoints: [
      "1848 - Kasus Kloroform: Kematian Hannah Greener setelah anestesi kloroform menjadi tonggak awal perhatian bahaya obat.",
      "1937–1938 - Tragedi Sulfanilamid: Pelarut dietilen glikol beracun memicu >100 kematian di AS, melahirkan Food, Drug, and Cosmetic Act 1938.",
      "1961–1962 - Tragedi Talidomid: Obat sedatif/morning sickness menimbulkan fokomelia (ribuan bayi cacat anggota tubuh), memperketat uji teratogenik.",
      "1968 - WHO PIDM: Pembentukan Programme for International Drug Monitoring untuk pertukaran sinyal keamanan obat dunia.",
      "1975–1990 - MESO Indonesia: Uji coba pemantauan ESO di 6 RS percontohan (1975), pembentukan program nasional sukarela (1980), dan resmi bergabung dengan WHO (1990)."
    ],
    clinicalHighlight: "Keamanan obat tidak berakhir saat obat disetujui atau dipasarkan; perawat adalah garis depan pemantauan di bangsal.",
    visualDiagramType: "timeline",
    sourceCitation: "FDA (1938); WHO-UMC (1968); BPOM RI MESO Nasional; Khan et al. (2024)"
  },
  {
    id: 3,
    slideNumber: 3,
    title: "Tiga Bentuk Efek Penggunaan Obat",
    subtitle: "Membedakan Efek Terapeutik, Efek Samping, dan Toksisitas",
    topicCategory: "Konsep Dasar",
    keyPoints: [
      "Efek Utama/Terapeutik: Respons yang memang diharapkan dan menjadi tujuan terapi medis (contoh: penurunan tensi pada antihipertensi, penurunan gula darah pada insulin).",
      "Efek Samping Obat (ESO): Respons yang tidak menjadi tujuan terapi dan tidak diinginkan, namun dapat muncul pada DOSIS LAZIM/ANJURAN (contoh: konstipasi opioid, batuk kering ACE inhibitor).",
      "Toksisitas Obat: Efek merugikan dengan derajat lebih berat, umumnya berkaitan erat dengan DOSIS BERLEBIH, kadar plasma di atas rentang terapeutik, atau kegagalan eliminasi organ.",
      "Prinsip pengkajian: Jangan langsung menyimpulkan hubungan kausal tanpa menganalisis kronologi waktu dan riwayat klinis."
    ],
    clinicalHighlight: "ESO terjadi pada dosis anjuran, sedangkan toksisitas sering berkaitan dengan kelebihan dosis atau akumulasi metabolit.",
    visualDiagramType: "comparison",
    sourceCitation: "Modul Farmakologi Institut Kesehatan Rajawali; WHO Technical Report Series"
  },
  {
    id: 4,
    slideNumber: 4,
    title: "Efek Terapeutik: Tiga Jenis Terapi",
    subtitle: "Kausal, Simptomatis, dan Substitusi",
    topicCategory: "Konsep Dasar",
    keyPoints: [
      "Terapi Kausal: Menghilangkan mikroorganisme atau agen etiologi penyebab utama penyakit (contoh: antibiotik ceftriaxone untuk pneumonia bakteri sensitif, OAT untuk Mycobacterium tuberculosis).",
      "Terapi Simptomatis: Meringankan keluhan/gejala klinis tanpa menyembuhkan penyebab dasarnya (contoh: parasetamol untuk demam, morfin untuk nyeri fraktur berat).",
      "Terapi Substitusi: Menggantikan hormon, enzim, atau zat fisiologis esensial yang tidak cukup diproduksi oleh tubuh pasien (contoh: insulin pada diabetes tipe 1, levotiroksin pada hipotiroid).",
      "Perawat wajib memahami tujuan terapi setiap obat untuk menetapkan parameter keberhasilan vs tanda reaksi merugikan."
    ],
    clinicalHighlight: "Memahami tujuan terapi mencegah salah mengartikan respons normal obat sebagai kejadian efek samping.",
    visualDiagramType: "flowchart",
    sourceCitation: "dr. Juwita Ninda Suherman, M.Kes. • Efek Samping Obat"
  },
  {
    id: 5,
    slideNumber: 5,
    title: "Definisi dan Dampak ESO",
    subtitle: "Dampak Klinis, Psikologis, dan Beban Finansial Pelayanan",
    topicCategory: "Konsep Dasar",
    keyPoints: [
      "Definisi Formal WHO: Setiap respons terhadap obat yang merugikan dan tidak diharapkan, terjadi pada dosis normal manusia untuk profilaksis, diagnosis, atau terapi.",
      "Dampak Klinis: Memperpanjang hari rawat inap (Length of Stay), menimbulkan komplikasi iatrogenik baru, hingga kondisi darurat yang mengancam nyawa (syok anafilaksis, SJS, gagal organ).",
      "Dampak Psikologis Pasien: Kecemasan tinggi, trauma minum obat, dan ketidakpatuhan (non-adherence) pada terapi esensial jangka panjang.",
      "Dampak Ekonomi Kesehatan: Peningkatan biaya perawatan lanjutan, pemeriksaan penunjang darurat, dan beban klaim jaminan kesehatan."
    ],
    clinicalHighlight: "Pencegahan dan deteksi dini ESO merupakan komponen fundamental patient safety dan indikator mutu akreditasi RS.",
    visualDiagramType: "infographic",
    sourceCitation: "WHO Medication Without Harm (2017); Permenkes Keselamatan Pasien"
  },
  {
    id: 6,
    slideNumber: 6,
    title: "Peta Konsep Klasifikasi Besar ESO",
    subtitle: "Bagan Struktur ESO Tipe A vs ESO Tipe B",
    topicCategory: "Klasifikasi ESO",
    keyPoints: [
      "ESO Tipe A (Augmented - 80% dari seluruh kasus): Dapat diprediksi dari farmakologi obat, tergantung dosis (Dose-dependent), angka morbiditas tinggi namun mortalitas relatif rendah.",
      "Subbagian Tipe A: (1) Efek bukan efek utama, (2) Dosis tinggi/relatif berlebih, (3) Efek penghentian obat (rebound/withdrawal), (4) Interaksi obat-obat.",
      "ESO Tipe B (Bizarre - 10-15% kasus): Tidak dapat diprediksi dari mekanisme kerja lazim, tidak tergantung dosis (Dose-independent), angka mortalitas lebih tinggi.",
      "Subbagian Tipe B: (1) Hipersensitivitas imunologis (Tipe I, II, III, IV), (2) Intoleransi obat, (3) Reaksi pseudoalergi, (4) Idiosinkrasi genetik."
    ],
    clinicalHighlight: "80% ESO adalah Tipe A yang bisa dicegah dengan kalkulasi dosis, penyesuaian fungsi ginjal/hati, dan pemantauan klinis.",
    visualDiagramType: "flowchart",
    sourceCitation: "Bahan Perkuliahan dr. Juwita Ninda Suherman, M.Kes."
  },
  {
    id: 7,
    slideNumber: 7,
    title: "Klasifikasi ESO: Karakteristik Perbandingan",
    subtitle: "Tipe A (Augmented) vs Tipe B (Bizarre)",
    topicCategory: "Klasifikasi ESO",
    keyPoints: [
      "Prediktabilitas: Tipe A dapat diprediksi secara farmakologis; Tipe B tidak dapat diprediksi dari aksi normal obat.",
      "Hubungan Dosis: Tipe A sangat dipengaruhi dosis, frekuensi, dan kecepatan eliminasi; Tipe B dapat timbul pada dosis sangat kecil sekalipun.",
      "Contoh Klinis: Hipoglikemia akibat insulin (Tipe A) vs Anafilaksis akibat penisilin atau ceftriaxone (Tipe B).",
      "Implikasi Keperawatan: Pada Tipe A periksa dosis, fungsi organ eliminasi, dan interaksi; pada Tipe B hentikan segera alergen tersangka dan pasang penanda gelang merah alergi."
    ],
    clinicalHighlight: "Literatur farmakologi modern juga mengenal tipe C (Chronic), D (Delayed), E (End of use), dan F (Failure).",
    visualDiagramType: "comparison",
    sourceCitation: "Edwards & Aronson Lancet Classification; Modul Rajawali"
  },
  {
    id: 8,
    slideNumber: 8,
    title: "Faktor Pendorong Terjadinya ESO",
    subtitle: "Kerentanan Pasien, Polifarmasi, dan Variasi Biologis",
    topicCategory: "Faktor Risiko",
    keyPoints: [
      "Polifarmasi: Penggunaan >= 5 obat secara bersamaan melipatgandakan eksponensial potensi interaksi farmakokinetik dan farmakodinamik.",
      "Ekstrem Usia: Neonatus/bayi (fungsi ginjal dan enzim hati belum matur) serta Geriatri/lansia (penurunan massa ginjal, GFR turun, peningkatan fraksi obat bebas).",
      "Faktor Gender & Hormonal: Volume distribusi berbeda, pengaruh estrogen/progesteron pada aktivitas enzim CYP450.",
      "Gangguan Fungsi Organ Dasar: Penyakit ginjal kronis (CKD), sirosis/hepatitis, gagal jantung kongestif (perfusi ginjal menurun).",
      "Variasi Farmakokinetika & Genetik: Polimorfisme enzim pemetabolisme (slow acetylator, defisiensi G6PD, mutasi HLA-B*1502)."
    ],
    clinicalHighlight: "Selalu telaah kondisi pasien secara menyeluruh, jangan sekadar membaca resep tanpa mengecek profil klinis.",
    visualDiagramType: "infographic",
    sourceCitation: "dr. Juwita Ninda Suherman, M.Kes. • Bahan Ajar Farmakologi"
  },
  {
    id: 9,
    slideNumber: 9,
    title: "ESO Tipe A: Reaksi yang Dapat Diprediksi",
    subtitle: "Mekanisme Eksaserbasi Aksi Farmakologis Normal",
    topicCategory: "ESO Tipe A",
    keyPoints: [
      "Terjadi karena intensitas kerja obat melampaui batas yang diinginkan pada organ target.",
      "Dapat dipicu oleh: dosis absolut terlalu tinggi, klirens ginjal menurun, atau interaksi penghambatan enzim CYP450.",
      "Penanganan klinis: Penyesuaian dosis berdasarkan eGFR/klirens kreatinin, pemanjangan interval pemberian, atau titrasi bertahap.",
      "Peran perawat: Monitoring laboratorium serial (kadar obat dalam darah/TDM jika tersedia) dan tanda klinis kelebihan efek."
    ],
    clinicalHighlight: "Dosis standar buku teks belum tentu aman untuk pasien geriatri dengan kreatinin yang meningkat.",
    visualDiagramType: "flowchart",
    sourceCitation: "Bahan Ajar ESO Rajawali; KDIGO Guidelines"
  },
  {
    id: 10,
    slideNumber: 10,
    title: "ESO Tipe A: Efek Bukan Efek Utama Obat",
    subtitle: "Manifestasi Sering pada Sistem Organ Non-Target",
    topicCategory: "ESO Tipe A",
    keyPoints: [
      "Perdarahan Saluran Cerna / Uterus: Hambatan COX-1 oleh OAINS non-selektif menurunkan prostaglandin pelindung mukosa lambung; warfarin memicu perdarahan.",
      "Konstipasi Berat: Terjadi pada opioid (hambatan motilitas usus), amitriptilin (efek antikolinergik), preparat zat besi, diltiazem/nifedipin, dan antasida aluminium.",
      "Mimpi Buruk & Gangguan Tidur: Efek lipofilik obat menembus blood-brain barrier (propranolol, simvastatin, kaptopril).",
      "Dispepsia & Erosi Lambung: Efek iritatif langsung atau sistemik dari OAINS, kortikosteroid oral, zat besi, metformin, atau teofilin."
    ],
    clinicalHighlight: "Tanyakan selalu riwayat BAB, nyeri ulu hati, melena, dan kualitas tidur pasien saat visite keperawatan.",
    visualDiagramType: "comparison",
    sourceCitation: "dr. Juwita Ninda Suherman, M.Kes."
  },
  {
    id: 11,
    slideNumber: 11,
    title: "ESO Tipe A: Edema dan Perubahan Kulit",
    subtitle: "Retensi Cairan, Perubahan Vaskular, dan Melanosis",
    topicCategory: "ESO Tipe A",
    keyPoints: [
      "Edema Perifer: Penumpukan cairan interstisial pada ekstremitas bawah akibat vasodilatasi arteriol prekapiler (contoh klasik: amlodipin) atau retensi natrium (kortikosteroid, OAINS).",
      "Perubahan Pigmentasi & Melanosis: Pengendapan pigmen melanin atau kompleks obat pada dermis (klorpromazin, amiodaron, minosiklin).",
      "Disfungsi Seksual / Impotensi: Efek samping farmakologis antihipertensi (beta-blocker), antidepresan (SSRI), atau antihistamin generasi pertama.",
      "Pemeriksaan perawat: Uji pitting edema pada pretibial, penimbangan berat badan harian, evaluasi turgor kulit, dan balans cairan harian."
    ],
    clinicalHighlight: "Bedakan pitting edema akibat amlodipin (vasodilatasi) dengan edema anasarka akibat gagal jantung atau sindrom nefrotik.",
    visualDiagramType: "infographic",
    sourceCitation: "Modul Praktik Keperawatan Farmakologi Rajawali"
  },
  {
    id: 12,
    slideNumber: 12,
    title: "ESO Tipe A: Perubahan Darah dan Hati",
    subtitle: "Supresi Hematologi dan Kolestasis Hepatobilier",
    topicCategory: "ESO Tipe A",
    keyPoints: [
      "Anemia Hemolitik: Kerusakan eritrosit terakselerasi; klinis ditandai pucat, kelelahan berat, sklera ikterik, dan urin berwarna pekat seperti teh.",
      "Neutropenia & Agranulositosis: Penurunan drastis hitung neutrofil absolut (<500/uL), memicu demam mendadak, stomatitis ulseratif, dan rentan sepsis fatal.",
      "Jaundice & Kolestasis: Gangguan ekskresi empedu atau cedera hepatosit terakumulasi; ditandai ikterus, pruritus hebat, dan feses pucat (dempul).",
      "Kewaspadaan perawat: Demam baru pada pasien yang mendapat kemoterapi, tiourasil, atau karbamazepin adalah sinyal darurat supresi sumsum tulang."
    ],
    clinicalHighlight: "Lakukan isolasi protektif dan hubungi dokter segera jika neutrofil absolut pasien turun di bawah rentang aman.",
    visualDiagramType: "comparison",
    sourceCitation: "dr. Juwita Ninda Suherman, M.Kes. • Bahan Ajar Farmakologi"
  },
  {
    id: 13,
    slideNumber: 13,
    title: "Toksisitas Akibat Dosis Relatif Terlalu Besar",
    subtitle: "Klirens Organ Terganggu Menyebabkan Akumulasi Toksik",
    topicCategory: "Toksisitas Organ",
    keyPoints: [
      "Dosis Relatif Berlebih: Dosis yang diberikan sesuai panduan standar untuk dewasa sehat, namun menjadi toksik karena kapasitas eliminasi pasien merosot.",
      "Penurunan GFR Ginjal: Menahan metabolit aktif obat berindeks terapi sempit (digoksin, gentamisin, litium, vancomisin).",
      "Disfungsi Hepatik: Mengurangi kapasitas metabolisme fase I (CYP450) dan fase II (konjugasi glukuronida), meningkatkan bioavailabilitas obat.",
      "Hipoperfusi Sirkulasi: Syok kardiogenik atau dehidrasi berat menurunkan aliran darah ginjal, mempercepat akumulasi zat toksik."
    ],
    clinicalHighlight: "Kewenangan perawat: Laporkan nilai kreatinin dan ureum abnormal sebelum memberikan dosis antibiotik nefrotoksik berikutnya.",
    visualDiagramType: "flowchart",
    sourceCitation: "KDIGO Clinical Practice Guideline; Modul Institut Kesehatan Rajawali"
  },
  {
    id: 14,
    slideNumber: 14,
    title: "Nefrotoksisitas: Risiko Kerusakan pada Ginjal",
    subtitle: "Identifikasi Obat, Pemantauan Intake-Output, dan Marker Serum",
    topicCategory: "Toksisitas Organ",
    keyPoints: [
      "Definisi: Penurunan fungsi ginjal akut atau kerusakan tubular akibat paparan zat nefrotoksik.",
      "Kelompok Obat Pemicu Utama: Aminoglikosida (gentamisin, amikasin), OAINS dosis tinggi, amfoterisin B, asiklovir IV, media kontras radiologi, dan cisplatin.",
      "Parameter Pengkajian Vital: Pantau haluaran urine ketat (target minimal 0,5 mL/kgBB/jam), kreatinin serum serial, eGFR, dan proteinuria.",
      "Pencegahan Iatrogenik: Pastikan hidrasi cairan intravena adekuat sebelum dan sesudah pemberian obat nefrotoksik; hindari kombinasi 'triple whammy' (ACE-I + Diuretik + OAINS)."
    ],
    clinicalHighlight: "Penurunan produksi urine adalah tanda peringatan dini sebelum kenaikan kreatinin serum terdeteksi.",
    visualDiagramType: "infographic",
    sourceCitation: "KDIGO AKI Guidelines (2024); Modul ESO Rajawali"
  },
  {
    id: 15,
    slideNumber: 15,
    title: "Ototoksisitas: Risiko pada Pendengaran & Keseimbangan",
    subtitle: "Kerusakan Koklea dan Aparatus Vestibular Telinga Dalam",
    topicCategory: "Toksisitas Organ",
    keyPoints: [
      "Patofisiologi: Kerusakan sel rambut sensorik pada koklea (gangguan pendengaran) dan labirin vestibular (gangguan keseimbangan/vertigo).",
      "Obat Penyebab Terkenal: Antibiotik aminoglikosida (gentamisin, kanamisin, streptomisin), kemoterapi platinum (cisplatin), diuretik kuat dosis tinggi (furosemid IV bolus cepat), kuinina, dan salisilat dosis toksik.",
      "Manifestasi Awal: Tinnitus bernada tinggi (telinga berdenging), rasa penuh di telinga, vertigo berputar, mual gerak, dan ataksia.",
      "Intervensi: Bila timbul tinnitus baru, tunda dosis berikutnya dan laporkan ke dokter untuk uji audiometri serta penggantian alternatif obat."
    ],
    clinicalHighlight: "Injeksi furosemid bolus intravena wajib diberikan secara perlahan (maksimal 4 mg/menit) untuk mencegah ototoksisitas permanen.",
    visualDiagramType: "comparison",
    sourceCitation: "dr. Juwita Ninda Suherman, M.Kes. • Efek Samping Obat"
  },
  {
    id: 16,
    slideNumber: 16,
    title: "Hepatotoksisitas dan Supresi Sumsum Tulang",
    subtitle: "Drug-Induced Liver Injury (DILI) dan Pansitopenia",
    topicCategory: "Toksisitas Organ",
    keyPoints: [
      "Drug-Induced Liver Injury (DILI): Kerusakan hepatosit atau kolestasis akibat metabolit reaktif. Pemicu utama: OAT (Isoniazid, Rifampisin, Pirazinamid), parasetamol dosis berlebih, metotreksat, karbamazepin.",
      "Klinis Hepatotoksisitas: Mual menetap, anoreksia, nyeri kuadran kanan atas abdomen, urin gelap (teh pekat), sklera ikterik, kenaikan ALT/AST > 3-5x batas normal atas.",
      "Supresi Sumsum Tulang (Myelosupresi): Penurunan produksi sel punca hematopoietik (anemia, leukopenia, trombositopenia).",
      "Tanda Bahaya Myelosupresi: Demam menggigil (febrile neutropenia), petekie pada ekstremitas, epistaksis, atau gusi berdarah spontan."
    ],
    clinicalHighlight: "Hentikan OAT sementara jika transaminase meningkat > 5x normal tanpa gejala, atau > 3x normal disertai gejala ikterus/mual.",
    visualDiagramType: "infographic",
    sourceCitation: "WHO TB Treatment Guidelines; American College of Gastroenterology DILI Guidelines"
  },
  {
    id: 17,
    slideNumber: 17,
    title: "Respons Akibat Penghentian Obat",
    subtitle: "Fenomena Rebound dan Sindrom Putus Obat (Withdrawal)",
    topicCategory: "Penghentian Obat",
    keyPoints: [
      "Rebound Effect: Kembalinya gejala penyakit asal dengan intensitas yang lebih parah setelah obat dihentikan mendadak (contoh: lonjakan krisis hipertensi akibat stop klonidin atau beta-blocker).",
      "Withdrawal Syndrome: Kumpulan gejala fisik dan psikologis akibat ketergantungan neurokimiawi (contoh: kecemasan akut, tremor, insomnia, kejang akibat stop benzodiazepin).",
      "Insufisiensi Adrenal Akut: Penghentian mendadak kortikosteroid jangka panjang memicu atrofi adrenal dan syok krisis Addisonian.",
      "Protokol Klinis: Obat-obat ini wajib dilakukan tapering-off (penurunan dosis bertahap) di bawah pengawasan medis."
    ],
    clinicalHighlight: "Edukasi pasien: Jangan pernah menghentikan konsumsi obat jantung, steroid, atau penenang secara mandiri tanpa izin dokter.",
    visualDiagramType: "flowchart",
    sourceCitation: "Modul Pembelajaran ESO dr. Juwita Ninda Suherman, M.Kes."
  },
  {
    id: 18,
    slideNumber: 18,
    title: "ESO Akibat Interaksi Obat",
    subtitle: "Interaksi Farmakokinetik & Farmakodinamik yang Mematikan",
    topicCategory: "Interaksi Obat",
    keyPoints: [
      "Interaksi Farmakodinamik Sinergis: Warfarin + Aspirin meningkatkan risiko perdarahan masif saluran cerna secara eksponensial karena kombinasi antikoagulan dan antiplatelet.",
      "Interaksi Farmakokinetik (CYP450): Penghambatan enzim CYP3A4 oleh ketokonazol atau eritromisin melipatgandakan kadar statin, memicu rhabdomiolisis.",
      "Antagonisme: Pemberian OAINS menurunkan efek vasodilatasi antihipertensi ACE inhibitor karena supresi sintesis prostaglandin ginjal.",
      "Solusi Perawat: Lakukan rekonsiliasi obat menyeluruh (obat resep, OTC, suplemen, jamu/herbal) saat pasien admission, transfer ruangan, dan discharge."
    ],
    clinicalHighlight: "Rekonsiliasi obat adalah prosedur wajib keselamatan pasien untuk mencegah duplikasi dan interaksi obat fatal.",
    visualDiagramType: "comparison",
    sourceCitation: "WHO Medication Without Harm (2017); Joint Commission International"
  },
  {
    id: 19,
    slideNumber: 19,
    title: "ESO Tipe B: Reaksi Tidak Terduga (Bizarre)",
    subtitle: "Hipersensitivitas, Intoleransi, Pseudoalergi, dan Idiosinkrasi",
    topicCategory: "ESO Tipe B",
    keyPoints: [
      "Reaksi tidak biasa yang tidak berhubungan dengan aksi farmakologis utama obat.",
      "Sulit diprediksi hanya dari profil dosis; dapat terjadi pada dosis sangat kecil sekalipun.",
      "Sering kali memiliki dasar imunologis (alergi sejati) atau kerentanan genetik spesifik.",
      "Tingkat morbiditas dan mortalitas tinggi: Memerlukan penghentian seketika obat penyebab dan penandaan status alergi permanen."
    ],
    clinicalHighlight: "Pasien dengan riwayat reaksi anafilaksis antibiotik golongan penisilin tidak boleh diberikan obat sefalosporin tertentu tanpa uji kehati-hatian.",
    visualDiagramType: "infographic",
    sourceCitation: "dr. Juwita Ninda Suherman, M.Kes. • Bahan Perkuliahan ESO"
  },
  {
    id: 20,
    slideNumber: 20,
    title: "Intoleransi, Alergi, dan Pseudoalergi",
    subtitle: "Membedakan Mekanisme Imunologis vs Non-Imunologis",
    topicCategory: "ESO Tipe B",
    keyPoints: [
      "Intoleransi: Ambang batas toleransi tubuh terhadap efek samping farmakologis lebih rendah dari populasi umum (contoh: tinitus pada dosis aspirin sangat rendah).",
      "Alergi Obat: Hipersensitivitas imunologis sejati yang melibatkan sensitisasi antibodi (IgE, IgG, IgM) atau sel T memori spesifik.",
      "Pseudoalergi (Reaksi Anafilaktoid): Manifestasi klinis menyerupai alergi hebat (urtikaria, bronkospasme, flushing), namun terjadi akibat pelepasan langsung histamin tanpa mediasi antibodi IgE.",
      "Pemicu Pseudoalergi: Infus vancomisin cepat (Red Man Syndrome), analgesik opioid, media kontras radiologi, dan relaksan otot."
    ],
    clinicalHighlight: "Dokumentasikan reaksi secara spesifik: catat nama obat, gejala objektif, waktu kemunculan, bukan sekadar menulis 'alergi'.",
    visualDiagramType: "comparison",
    sourceCitation: "World Allergy Organization (WAO) Guidance; Modul Rajawali"
  },
  {
    id: 21,
    slideNumber: 21,
    title: "Hipersensitivitas Tipe I: Reaksi Segera (Immediate)",
    subtitle: "Mediasi Antibodi IgE dan Degranulasi Sel Mast",
    topicCategory: "Hipersensitivitas",
    keyPoints: [
      "Waktu Onset: Sangat cepat, berkisar beberapa detik hingga beberapa menit (maksimal 1-2 jam) pasca pemberian obat.",
      "Mekanisme: Ikatan silang (cross-linking) antigen obat dengan IgE pada reseptor Fc-epsilon-RI di permukaan sel mast dan basofil.",
      "Pelepasan Mediator: Degranulasi cepat histamin, leukotrien C4/D4, prostaglandin D2, dan platelet-activating factor (PAF).",
      "Manifestasi Klinis: Pruritus hebat, eritema, urtikaria (bentol), angioedema wajah/bibir, stridor laring, bronkospasme mengi, hipotensi, kolaps kardiovaskular."
    ],
    clinicalHighlight: "Hambatan jalan napas dan penurunan tekanan darah (syok) merupakan keadaan gawat darurat merah!",
    visualDiagramType: "mechanism",
    sourceCitation: "World Allergy Organization Anaphylaxis Guidance (2020)"
  },
  {
    id: 22,
    slideNumber: 22,
    title: "Diagram Visual Reaksi Hipersensitivitas Tipe I",
    subtitle: "Pemicu Alergen, Sensitisasi, dan Gejala Sistemik",
    topicCategory: "Hipersensitivitas",
    keyPoints: [
      "Alergen Pemicu Utama: Antibiotik beta-laktam (penisilin, sefalosporin), pelemas otot anestesi, bisa serangga, makanan, lateks.",
      "Sensitisasi Awal: Paparan awal membentuk antibodi IgE spesifik yang menempel di membran sel mast.",
      "Re-Exposure: Paparan kedua memicu pelepasan eksplosif mediator inflamasi.",
      "Target Organ: Kulit (urtikaria), pernapasan (asma/angioedema laring), sirkulasi darah (vasodilatasi masif & syok)."
    ],
    clinicalHighlight: "Jangan pernah meremehkan rasa gatal di telapak tangan atau suara serak setelah injeksi antibiotik!",
    visualDiagramType: "mechanism",
    sourceCitation: "Immunology 5th Ed; Modul dr. Juwita Ninda Suherman, M.Kes."
  },
  {
    id: 23,
    slideNumber: 23,
    title: "Mekanisme Degranulasi Sel Mast",
    subtitle: "Jalur Biokimia Pelepasan Histamin dan Sitokin",
    topicCategory: "Hipersensitivitas",
    keyPoints: [
      "Sensitization Phase: Antigen obat dipresentasikan ke sel B menghasilkan IgE spesifik yang mengikat reseptor Fc-epsilon-RI.",
      "Effector Phase: Masuknya kembali antigen mengikat silang molekul IgE memicu influx kalsium intraseluler.",
      "Eksositosis Granula: Granula melepaskan histamin preformed, heparina, dan triptase dalam hitungan detik.",
      "Sintesis Sekunder: Aktivasi fosfolipase A2 membentuk leukotrien dan sitokin (TNF-alpha, IL-4, IL-13) yang memperpanjang reaksi fase lambat."
    ],
    clinicalHighlight: "Tryptase serum yang diperiksa 1-2 jam pasca reaksi menjadi biomarker konfirmasi degranulasi sel mast.",
    visualDiagramType: "mechanism",
    sourceCitation: "Goldsby RA et al. Immunology; WHO Pharmacovigilance Guidelines"
  },
  {
    id: 24,
    slideNumber: 24,
    title: "Tanda Klinis dan Tata Laksana Anafilaksis",
    subtitle: "Pedoman Penyelamatan Jiwa Resusitasi Sirkulasi & Jalan Napas",
    topicCategory: "Kegawatdaruratan ESO",
    keyPoints: [
      "Kriteria Klinis Inti: Onset cepat (menit-jam) mengenai kulit/mukosa PLUS gangguan respirasi (dyspnea, wheezing, stridor) ATAU penurunan tensi darah (hipotensi sistolik <90 mmHg).",
      "Gejala Gastrointestinal: Kram perut hebat, muntah, dan diare sering menyertai anafilaksis akibat stimulasi otot polos usus.",
      "Tindakan Lini Pertama: INJEKSI EPINEFRIN/ADRENALIN INTRAMUSKULAR (IM) pada paha anterolateral (vastus lateralis) secepat mungkin!",
      "Dosis Dewasa: 0,3 - 0,5 mL larutan 1:1.000 (0,3-0,5 mg IM); Dosis Anak: 0,01 mg/kgBB (maks 0,3 mg). Dapat diulang tiap 5-15 menit bila belum ada respons adekuat."
    ],
    clinicalHighlight: "Antihistamin dan kortikosteroid BUKAN terapi lini pertama dan TIDAK BOLEH menunda epinefrin!",
    visualDiagramType: "infographic",
    sourceCitation: "World Allergy Organization Anaphylaxis Guidance (2020); Resuscitation Council UK"
  },
  {
    id: 25,
    slideNumber: 25,
    title: "Algoritma Syok Anafilaktik (KMK 514 / 2015)",
    subtitle: "Panduan Praktik Klinis Resmi Pelayanan Kesehatan Indonesia",
    topicCategory: "Kegawatdaruratan ESO",
    keyPoints: [
      "Langkah 1: Identifikasi gejala dan SEGERA HENTIKAN pemberian obat/alergen yang dicurigai.",
      "Langkah 2: Berikan Oksigen aliran tinggi 3–10 Liter/menit melalui masker kanul.",
      "Langkah 3: Suntikkan Epinefrin (1:1.000) 0,3–0,5 mL IM pada paha anterolateral (anak 0,01 mg/kgBB).",
      "Langkah 4: Evaluasi 5–15 menit; ulangi dosis epinefrin bila belum ada perbaikan klinis.",
      "Langkah 5 (Terapi Tambahan): Berikan cairan IV kristaloid 1–2 L NaCl 0,9% atau Ringer Laktat guyur cepat; injeksi Difenhidramin 5–20 mg IV/IM pelan; Deksametason 5–10 mg IV; Salbutamol inhalasi bila bronkospasme berat.",
      "Langkah 6: Observasi minimal 6 jam di ruang rawat intensif untuk memantau reaksi bifasik."
    ],
    clinicalHighlight: "Pemberian posisi syok: baringkan pasien terlentang dengan tungkai ditinggikan (Trendelenburg), kecuali jika sesak napas berat.",
    visualDiagramType: "flowchart",
    sourceCitation: "Keputusan Menteri Kesehatan RI No. HK.02.02/MENKES/514/2015"
  },
  {
    id: 26,
    slideNumber: 26,
    title: "Patofisiologi Saluran Napas pada Reaksi Alergi",
    subtitle: "Bronkokonstriksi, Edema Dinding, dan Air Trapping",
    topicCategory: "Hipersensitivitas",
    keyPoints: [
      "Saluran Napas Normal: Otot polos relaksasi, diameter lumen luas, aliran udara inspirasi-ekspirasi lancar.",
      "Saluran Napas Asmatik/Alergik: Terjadi inflamasi kronis, dinding bronkus menebal, dan hipersekresi mukus kental.",
      "Saat Serangan Akut Terpapar Obat: Otot polos bronkus mengalami konstriksi hebat (spasme), lumen menyempit drastis, memicu 'Air Trapping' di alveolus.",
      "Dampak Klinis: Terdengar wheezing ekspiratori difus, retraksi dinding dada, takipnea > 30 x/menit, dan desaturasi SpO2 < 90%."
    ],
    clinicalHighlight: "Epinefrin bekerja pada reseptor beta-2 adrenergik paru untuk menghasilkan bronkodilatasi kuat dan segera.",
    visualDiagramType: "mechanism",
    sourceCitation: "dr. Juwita Ninda Suherman, M.Kes. • Bahan Ajar Farmakologi"
  },
  {
    id: 27,
    slideNumber: 27,
    title: "Hipersensitivitas Tipe II: Reaksi Sitotoksik",
    subtitle: "Destruksi Sel Darah Diperantarai Antibodi IgG dan IgM",
    topicCategory: "Hipersensitivitas",
    keyPoints: [
      "Mekanisme: Antibodi IgG atau IgM berikatan dengan antigen hapten obat yang melekat pada permukaan membran eritrosit, trombosit, atau granulosit.",
      "Efektor: Lisis sel melalui aktivasi kaskade komplemen (MAC) atau fagositosis selular oleh sel Natural Killer (ADCC).",
      "Manifestasi Klinis: Anemia hemolitik autoimun (lemas, pucat, ikterik), Trombositopenia (petekie, purpura, hematuria), dan Agranulositosis.",
      "Contoh Obat Pemicu: Penisilin dosis tinggi (hemolisis), metildopa, sulfonamida, propiltiourasil (PTU), dan kuinidin."
    ],
    clinicalHighlight: "Pantau nilai Darah Lengkap serial: penurunan hemoglobin, leukosit, atau trombosit mendadak harus dicurigai reaksi sitotoksik.",
    visualDiagramType: "mechanism",
    sourceCitation: "Pallardy et al. Toxicol Sci (2024); Modul Institut Kesehatan Rajawali"
  },
  {
    id: 28,
    slideNumber: 28,
    title: "Diagram Mekanisme Sitotoksisitas Tipe II",
    subtitle: "Ikatan Kompleks Antigen-Antibodi dan Lisis Sel Darah",
    topicCategory: "Hipersensitivitas",
    keyPoints: [
      "Surface Antigen: Molekul obat bertindak sebagai hapten menempel pada membran sel target normal.",
      "Antibody Binding: Antibodi spesifik IgG mengenali antigen dan menempel via fragmen Fab.",
      "Fc-Receptor: Sel Natural Killer (NK) mengikat fragmen Fc IgG, mensekresikan perforin dan granzim.",
      "Complement-Mediated Lysis: Komplemen C5b-C9 membentuk pori membran, menyebabkan lisis sel osmotik."
    ],
    clinicalHighlight: "Uji Coombs direk positif merupakan konfirmasi keterlibatan antibodi pada anemia hemolitik imbas obat.",
    visualDiagramType: "mechanism",
    sourceCitation: "Immunology 5th Ed; Bahan Perkuliahan dr. Juwita Ninda Suherman, M.Kes."
  },
  {
    id: 29,
    slideNumber: 29,
    title: "Hipersensitivitas Tipe III: Kompleks Imun",
    subtitle: "Pengendapan Kompleks Antigen-Antibodi pada Dinding Endotel",
    topicCategory: "Hipersensitivitas",
    keyPoints: [
      "Mekanisme: Pembentukan kompleks antigen-antibodi (Ag-Ab) yang beredar dalam sirkulasi darah dan mengendap di mikrovaskular.",
      "Lokasi Pengendapan: Dinding arteriol kapiler kulit, glomerulus ginjal, sinovium persendian, dan pleura paru.",
      "Inflamasi Jaringan: Aktivasi komplemen C3a/C5a menarik sel neutrofil yang melepaskan enzim lisosomal perusak jaringan (vaskulitis).",
      "Klinis Khas: Trias Serum Sickness (demam tinggi, artralgia/nyeri sendi, urtikaria persisten), glomerulonefritis (proteinuria, hematuria)."
    ],
    clinicalHighlight: "Onset reaksi tipe III biasanya tertunda 7–14 hari setelah paparan awal obat (serum antitetanus, antibiotik).",
    visualDiagramType: "mechanism",
    sourceCitation: "dr. Juwita Ninda Suherman, M.Kes. • Efek Samping Obat"
  },
  {
    id: 30,
    slideNumber: 30,
    title: "Diagram Kaskade Inflamasi Tipe III",
    subtitle: "Deposisi Kompleks, Aktivasi Komplemen, dan Kerusakan Endotel",
    topicCategory: "Hipersensitivitas",
    keyPoints: [
      "Tahap 1: Pengendapan kompleks imun (Ag-Ab) pada lamina basalis membran pembuluh endotel.",
      "Tahap 2: Aktivasi kaskade komplemen menghasilkan mediator anafilatoksin.",
      "Tahap 3: Rekrutmen neutrofil polimorfonuklear (PMN) yang memicu generasi Reactive Oxygen Species (ROS).",
      "Tahap 4: Agregasi platelet memicu mikrotrombus, iskemia lokal, dan nekrosis jaringan vaskular."
    ],
    clinicalHighlight: "Kaji adanya bengkak sendi, ruam purpurik teraba (palpable purpura), dan pemantauan fungsi urin secara teratur.",
    visualDiagramType: "flowchart",
    sourceCitation: "Immunology Research Group; Modul Rajawali"
  },
  {
    id: 31,
    slideNumber: 31,
    title: "Hipersensitivitas Tipe IV: Reaksi Tertunda (Cell-Mediated)",
    subtitle: "Mediasi Sel T Memori dan Makrofag",
    topicCategory: "Hipersensitivitas",
    keyPoints: [
      "Perbedaan Utama: Reaksi ini TIDAK dimediasi oleh antibodi humoral, melainkan oleh sel T (Th1, Th2, CTL).",
      "Jeda Onset: Karakteristik 'delayed', umumnya muncul 24 hingga 72 jam bahkan berminggu-minggu setelah paparan.",
      "Manifestasi Ringan-Sedang: Dermatitis kontak alergika akibat sediaan salep topikal (anestesi lokal, neomisin, hidrokortison).",
      "Manifestasi Berat (SCAR): Severe Cutaneous Adverse Reactions seperti Sindrom Stevens-Johnson (SJS), Toxic Epidermal Necrolysis (TEN), dan DRESS."
    ],
    clinicalHighlight: "Tanyakan riwayat salep atau obat yang dioleskan beberapa hari lalu bila pasien datang dengan ruam eksim lokal.",
    visualDiagramType: "comparison",
    sourceCitation: "Pallardy et al. Toxicol Sci (2024); Bahan Ajar Farmakologi"
  },
  {
    id: 32,
    slideNumber: 32,
    title: "Diagram Jalur Seluler Hipersensitivitas Tipe IV",
    subtitle: "Fase Sensitisasi APC dan Fase Efektor Sitokin",
    topicCategory: "Hipersensitivitas",
    keyPoints: [
      "Sensitisation Phase: Sel penyaji antigen (Dendritik/Makrofag) mempresentasikan fragmen obat ke sel T CD4+ atau CD8+ naif.",
      "Diferensiasi: Terbentuk sel T memori (DTH cells / Th1).",
      "Effector Phase: Paparan ulang memicu pelepasan masif IFN-gamma, TNF-beta, IL-2, dan sitokin kemotaktik.",
      "Aktivasi Makrofag: Makrofag tereksitasi melepaskan radikal oksigen dan oksida nitrat yang merusak matriks jaringan epitel."
    ],
    clinicalHighlight: "Pemulihan reaksi tipe IV membutuhkan waktu berminggu-minggu karena eliminasi sel T memori berlangsung lambat.",
    visualDiagramType: "mechanism",
    sourceCitation: "Goldsby RA et al. Immunology 5th Ed, 2003, p 384"
  },
  {
    id: 33,
    slideNumber: 33,
    title: "Spektrum Sitotoksik Sel T: Dermatitis Kontak hingga SJS/TEN",
    subtitle: "Pelepasan Granzim dan Luas Nekrolisis Epidermis",
    topicCategory: "Reaksi Kulit Berat",
    keyPoints: [
      "Dermatitis Kontak: Terlokalisasi pada area kontak fisik dengan alergen (misal paparan nikel, salep antibiotik topikal).",
      "Reaksi Imbas Obat Sistemik (SJS/TEN): Sitotoksisitas diperantarai sel T sitotoksik (CD8+) dan sel NK yang melepaskan Granzim B, Perforin, dan Granulisin.",
      "Sindrom Stevens-Johnson (SJS): Pelepasan dan nekrolisis epidermis mengenai <10% luas permukaan tubuh (BSA).",
      "Overlap SJS/TEN: Pengelupasan epidermis antara 10%–30% BSA.",
      "Toxic Epidermal Necrolysis (TEN / Sindrom Lyell): Nekrolisis masif >30% BSA menyerupai luka bakar derajat dua luas."
    ],
    clinicalHighlight: "Nikolsky sign positif (lapisan kulit terkelupas saat digosok pelan) adalah tanda khas kegawatan SJS/TEN!",
    visualDiagramType: "comparison",
    sourceCitation: "Mokbel et al. In Vivo (2024); Modul Institut Kesehatan Rajawali"
  },
  {
    id: 34,
    slideNumber: 34,
    title: "Tabel Lengkap Klasifikasi Subtipe Hipersensitivitas",
    subtitle: "Matriks Perbandingan Tipe I, II, III, IVa, IVb, IVc, dan IVd",
    topicCategory: "Hipersensitivitas",
    keyPoints: [
      "Tipe I: Mediator IgE | Efektor Sel Mast | Contoh: Anafilaksis sistemik, rinitis alergi, urtikaria akut.",
      "Tipe II: Mediator IgG/IgM | Efektor Sel FcR (Makrofag, NK) | Contoh: Anemia hemolitik, trombositopenia imbas obat.",
      "Tipe III: Mediator Kompleks IgG-Antigen | Efektor Komplemen & Neutrofil | Contoh: Serum sickness, vaskulitis Arthus.",
      "Tipe IVa: Sel Th1 (IFN-gamma, TNF-alpha) | Efektor Makrofag | Contoh: Reaksi tuberkulin, dermatitis kontak.",
      "Tipe IVb: Sel Th2 (IL-4, IL-5, IL-13) | Efektor Eosinofil | Contoh: DRESS syndrome, eksantema makulopapular dengan eosinofilia.",
      "Tipe IVc: Sel T Sitotoksik CD8+ (Perforin, Granzim B) | Efektor CTL | Contoh: SJS, TEN, eksantema bulosa.",
      "Tipe IVd: Sel T (CXCL-8, GM-CSF) | Efektor Neutrofil | Contoh: AGEP (Acute Generalized Exanthematous Pustulosis)."
    ],
    clinicalHighlight: "Subklasifikasi Gell & Coombs yang diperluas oleh Pichler memperjelas fenotipe klinis reaksi kulit berat akibat obat.",
    visualDiagramType: "comparison",
    sourceCitation: "Pichler WJ; Pallardy et al. (2024); dr. Juwita Ninda Suherman, M.Kes."
  },
  {
    id: 35,
    slideNumber: 35,
    title: "Manifestasi Alergi Obat pada Praktik Klinis",
    subtitle: "Urtikaria, Angioedema, Fotosensitivitas, dan Gejala Sistemik",
    topicCategory: "Manifestasi Klinis",
    keyPoints: [
      "Urtikaria: Plak eritematosa edematosa berbatas tegas, sangat gatal (pruritus), bersifat transien/berpindah tempat dalam 24 jam.",
      "Angioedema: Pembengkakan non-pitting jaringan submukosa/dermis dalam; predileksi pada bibir, kelopak mata, lidah, pita suara, dan uvula.",
      "Fotosensitivitas: Reaksi eritema atau erupsi kulit hebat akibat interaksi obat dengan sinar ultraviolet (contoh: doksisiklin, siprofloksasin, amiodaron).",
      "Gejala Respirasi & Sistemik: Rasa tercekik di leher, stridor, sinkop, keringat dingin, takikardia kompensatoir."
    ],
    clinicalHighlight: "Jangan menunggu semua tanda syok muncul: bila ada urtikaria disertai bibir membesar dan suara serak, segera aktivasi emergency!",
    visualDiagramType: "infographic",
    sourceCitation: "World Allergy Organization Guidance; Bahan Ajar Rajawali"
  },
  {
    id: 36,
    slideNumber: 36,
    title: "Reaksi Kulit Berat Akibat Obat (SCAR)",
    subtitle: "Tanda Bahaya Klinis yang Tidak Boleh Diabaikan",
    topicCategory: "Reaksi Kulit Berat",
    keyPoints: [
      "Karakteristik SCAR: Sindrom Stevens-Johnson (SJS), Toxic Epidermal Necrolysis (TEN), DRESS (Drug Reaction with Eosinophilia and Systemic Symptoms).",
      "Tanda Bahaya Utama: Nyeri kulit hebat seperti terbakar, bula/lepuh berisi cairan, deskuamasi (kulit mengelupas seperti kertas basah).",
      "Keterlibatan Mukosa (Minimal 2 Lokasi): Erosi hemoragik pada bibir/mulut (stomatitis berat), konjungtivitis mata berat berisiko kebutaan, ulserasi genital/uretra.",
      "Obat Risiko Tinggi: Karbamazepin, fenitoin, lamotrigin, allopurinol, nevirapin, dan kotrimoksazol."
    ],
    clinicalHighlight: "Jangan pernah menganggap ruam luas dengan demam tinggi sebagai 'sekadar gatal alergi biasa'!",
    visualDiagramType: "comparison",
    sourceCitation: "dr. Juwita Ninda Suherman, M.Kes. • Bahan Perkuliahan ESO"
  },
  {
    id: 37,
    slideNumber: 37,
    title: "Idiosinkrasi Obat",
    subtitle: "Respons Abnormalitas Genetik Individu Tanpa Mediasi Imun",
    topicCategory: "Farmakogenetika",
    keyPoints: [
      "Definisi: Reaksi kualitatif yang sama sekali tidak lazim, terjadi pada proporsi populasi sangat kecil karena perbedaan karakteristik enzimatik atau genetik bawaan.",
      "Bukan Alergi Imunologis: Tidak melibatkan sensitisasi antibodi sebelumnya, namun dapat bermanifestasi berat sejak dosis perdana.",
      "Contoh Klinis Klasik: (1) Angioedema ketiadaan enzim pemecah bradikinin akibat ACE inhibitor; (2) Anemia aplastik fatal terkait kloramfenikol.",
      "Lupus Imbas Obat (Drug-Induced Lupus): Pembentukan antibodi anti-histon akibat prokainamid atau hidralazin pada asetilator lambat."
    ],
    clinicalHighlight: "Catat dan laporkan riwayat reaksi aneh keluarga pasien sebagai data kewaspadaan resep masa depan.",
    visualDiagramType: "infographic",
    sourceCitation: "dr. Juwita Ninda Suherman, M.Kes. • Bahan Ajar Farmakologi"
  },
  {
    id: 38,
    slideNumber: 38,
    title: "Farmakogenetika: Mengapa Respons Tiap Pasien Berbeda?",
    subtitle: "Polimorfisme Enzim Metabolisme dan Sensitivitas Reseptor",
    topicCategory: "Farmakogenetika",
    keyPoints: [
      "Peran Genomik: Variasi urutan DNA pada gen penyandi enzim sitokrom P450, transporter membran, atau reseptor biologis menentukan nasib obat di tubuh.",
      "Fenotipe Metabolisme: Poor Metabolizer (kadar obat melonjak toksik pada dosis lazim) vs Ultrarapid Metabolizer (obat cepat hilang atau prodrug cepat menjadi toksit).",
      "Contoh Enzim Penting: CYP2C9 dan VKORC1 pada terapi warfarin (risiko pendarahan), CYP2D6 pada bioaktivasi kodein menjadi morfin.",
      "Masa Depan Personalized Medicine: Skrining genetik sebelum pemberian obat berisiko tinggi kini direkomendasikan pada pedoman internasional."
    ],
    clinicalHighlight: "Dua pasien dengan diagnosis, usia, dan obat yang persis sama dapat menghasilkan respons klinis yang saling bertolak belakang.",
    visualDiagramType: "flowchart",
    sourceCitation: "Mokbel, Weedon, & Jackson. In Vivo (2024); CPIC Guidelines"
  },
  {
    id: 39,
    slideNumber: 39,
    title: "Contoh Farmakogenetika: Defisiensi Enzim G6PD",
    subtitle: "Stres Oksidatif, Heinz Bodies, dan Hemolisis Akut",
    topicCategory: "Farmakogenetika",
    keyPoints: [
      "Fisiologi Normal: Enzim Glucose-6-Phosphate Dehydrogenase (G6PD) menghasilkan NADPH untuk menjaga Glutation Tereduksi (GSH) yang melindungi eritrosit dari radikal bebas.",
      "Kondisi Defisiensi: Eritrosit rentan mengalami stres oksidatif hebat saat terpapar obat pengoksidasi.",
      "Obat Pemicu Hemolisis: Primakuin (antimalaria), sulfonamida (dapson, kotrimoksazol), rasburikase, nitrofurantoin, dan kacang fava (favisme).",
      "Klinis Hemolisis Akut: Lemas mendadak, pucat, ikterus sklera, nyeri pinggang, hematuria/urin hitam pekat, dan penurunan drastis hemoglobin."
    ],
    clinicalHighlight: "Sebelum meresepkan primakuin atau dapson, pastikan pasien telah diskrining status defisiensi G6PD.",
    visualDiagramType: "mechanism",
    sourceCitation: "WHO Guidelines on G6PD Deficiency; Modul dr. Juwita Ninda Suherman, M.Kes."
  },
  {
    id: 40,
    slideNumber: 40,
    title: "Farmakogenetika Lanjutan, Teratogenesis, & Pelaporan MESO",
    subtitle: "Apnea Suksinilkolin, Teratogen Janin, dan Alur Pelaporan MESO",
    topicCategory: "Keselamatan & Pelaporan",
    keyPoints: [
      "Pseudocholinesterase Atipikal: Mutasi gen BCHE menyebabkan kelumpuhan otot napas dan apnea memanjang berjam-jam setelah anestesi suksinilkolin.",
      "Variasi Asetilasi INH: Slow acetylator meningkatkan risiko neuropati perifer dan hepatotoksisitas pada pengobatan tuberkulosis.",
      "Prinsip Keamanan Obat pada Kehamilan: Hindari teratogen fase blastogenesis, organogenesis/embriogenesis (talidomid, tetrasiklin, asam valproat, warfarin).",
      "Alur Pelaporan MESO (Formulir Kuning BPOM): (1) Stabilkan kondisi pasien, (2) Laporkan segera ke DPJP, (3) Rekonsiliasi dengan instalasi farmasi klinis, (4) Lengkapi formulir MESO resmi, (5) Dokumentasikan di rekam medis elektronik."
    ],
    clinicalHighlight: "Prinsip Utama: Laporkan dugaan ESO meskipun korelasi sebab-akibatnya belum terbukti pasti!",
    visualDiagramType: "flowchart",
    sourceCitation: "BPOM RI Pusat Farmakovigilans Nasional; WHO Guidelines; dr. Juwita Ninda Suherman, M.Kes."
  }
];
