import express, { Request, Response } from 'express';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Google GenAI client if API key is present
const apiKey = process.env.GEMINI_API_KEY;
let aiClient: GoogleGenAI | null = null;

if (apiKey && apiKey !== 'MY_GEMINI_API_KEY') {
  try {
    aiClient = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  } catch (err) {
    console.warn('Failed to initialize GoogleGenAI with provided key:', err);
  }
}

// Endpoint for conversational NPC dialog in 3D Hospital
app.post('/api/npc/chat', async (req: Request, res: Response) => {
  try {
    const { npcName, npcRole, caseContext, history, message, emotion } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    if (!aiClient) {
      // Fallback response generator if API key is not configured
      const simulatedResponses: Record<string, string[]> = {
        pasien: [
          `Aduh Sus, rasanya lemas dan agak mual... Sejak tadi setelah dapat obat, badan saya terasa tidak nyaman.`,
          `Iya Sus, tadi sekitar 15-30 menit setelah disuntik/minum obat itu, gejala ini mulai terasa semakin berat.`,
          `Tolong bantu saya Sus, apa ini efek dari obat yang tadi diberikan ya?`,
        ],
        dokter: [
          `Baik Ners, bagaimana evaluasi tanda vital dan airway pasien saat ini? Segera siapkan jalur intravena dan laporkan nilai saturasi oksigen.`,
          `Keputusan tepat. Hentikan segera obat yang dicurigai sebagai penyebab ESO dan catat di lembar formulir pemantauan efek samping obat.`,
          `Tolong segera cek gula darah sewaktu dan pantau kondisi kesadaran tiap 15 menit. Saya segera ke ruangan.`,
        ],
        keluarga: [
          `Suster, kenapa kondisi ibu saya jadi begini ya? Tadi sebelum dapat obat masih bisa diajak bicara dengan baik.`,
          `Kami sangat khawatir Sus, apakah reaksi bentol-bentol dan sesak napas ini berbahaya untuk ibu?`,
        ],
        perawat: [
          `Ners, tensi pasien baru saja kita ukur dan ada kecenderungan turun. Dokter penanggung jawab sudah kita hubungi.`,
          `Siap Ners, troli emergency dan tabung oksigen sudah disiapkan di dekat bed pasien.`,
        ],
        apoteker: [
          `Halo Ners dari Farmasi. Terkait resep tersebut, memang terdapat potensi interaksi obat atau risiko efek samping tipe B. Kami rekomendasikan evaluasi dosis dan obat alternatif.`,
        ],
      };

      const roleKey = (npcRole || 'pasien').toLowerCase();
      const list = simulatedResponses[roleKey] || simulatedResponses['pasien'];
      const chosen = list[Math.floor(Math.random() * list.length)];

      return res.json({
        reply: chosen,
        emotion: emotion || 'anxious',
        suggestedActions: [
          'Periksa tanda vital (TTV)',
          'Hentikan obat yang dicurigai',
          'Konsultasikan dengan dokter spesialis',
          'Dokumentasikan pada formulir MESO',
        ],
      });
    }

    const systemPrompt = `Anda adalah karakter non-pemain (NPC) dalam simulasi medis 3D interaktif "Rajawali Medical Simulation - Efek Samping Obat (ESO)" dari Institut Kesehatan Rajawali, disusun oleh dr. Juwita Ninda Suherman, M.Kes.
Peran Anda: ${npcName || 'NPC'} (${npcRole || 'Pasien/Keluarga/Nakes'}).
Konteks Kasus Klinis: ${caseContext || 'Simulasi Efek Samping Obat di Ruang Perawatan'}.
Emosi Saat Ini: ${emotion || 'cemas / kesakitan'}.

Instruksi:
1. Berikan jawaban dalam BAHASA INDONESIA yang sangat natural, manusiawi, dan sesuai peran klinis Anda.
2. Jika Anda Pasien: tunjukkan keluhan subjektif (misal gatal, sesak, bibir bengkak, lemas, pusing berputar, urine gelap) sesuai kasus efek samping obat.
3. Jika Anda Dokter: gunakan komunikasi profesional SBAR, tanyakan data objektif (TD, Nadi, RR, SpO2, Lab), instruksikan penanganan lini pertama (misal Adrenalin IM pada anafilaksis, karbohidrat kerja cepat pada hipoglikemia, penghentian obat).
4. Jika Anda Keluarga: perlihatkan rasa cemas yang wajar dan mintalah penjelasan dari perawat.
5. Jaga jawaban ringkas, padat (2-4 kalimat) agar cocok dengan pembacaan suara di game 3D.
6. Sertakan format JSON dengan properti "reply", "emotion" (senang/cemas/takut/tenang/kesakitan), dan "actionFeedback".`;

    const contents = [
      { text: systemPrompt },
      ...(Array.isArray(history) ? history.map((h: any) => ({ text: `${h.sender}: ${h.text}` })) : []),
      { text: `Mahasiswa Keperawatan: ${message}` },
    ];

    const response = await aiClient.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: { parts: contents },
      config: {
        responseMimeType: 'application/json',
      },
    });

    const parsed = JSON.parse(response.text || '{}');
    return res.json({
      reply: parsed.reply || response.text || 'Baik Ners, mari kita tangani bersama.',
      emotion: parsed.emotion || 'neutral',
      actionFeedback: parsed.actionFeedback || '',
    });
  } catch (error: any) {
    console.error('Error in /api/npc/chat:', error);
    return res.status(500).json({
      error: 'Gagal memproses percakapan NPC.',
      fallbackReply: 'Maaf Ners, suster/dokter sedang memeriksa instruksi lebih lanjut.',
    });
  }
});

// Endpoint for AI Explanation of 40 slides lecture
app.post('/api/ai/explain-slide', async (req: Request, res: Response) => {
  try {
    const { slideNumber, slideTitle, slidePoints, question } = req.body;

    if (!aiClient) {
      return res.json({
        explanation: `Ringkasan Klinis Slide ${slideNumber} (${slideTitle}):\n${(slidePoints || []).join('\n')}\n\nPoin Penting dr. Juwita Ninda Suherman, M.Kes.: Selalu utamakan keselamatan pasien, kenali tanda bahaya dini efek samping obat, dan laporkan secara objektif.`,
      });
    }

    const prompt = `Anda adalah asisten dosen farmakologi keperawatan untuk materi "Efek Samping Obat (ESO)" karya dr. Juwita Ninda Suherman, M.Kes. di Institut Kesehatan Rajawali.
Slide #${slideNumber}: ${slideTitle}
Poin Slide: ${JSON.stringify(slidePoints)}
Pertanyaan Mahasiswa: ${question || 'Jelaskan konsep penting dan relevansi klinis keperawatan pada slide ini.'}

Berikan penjelasan yang mendalam, jelas, berbasis sains klinis keperawatan, dan mudah dipahami dalam 3 paragraf.`;

    const response = await aiClient.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
    });

    return res.json({ explanation: response.text });
  } catch (err: any) {
    console.error('Error in /api/ai/explain-slide:', err);
    return res.status(500).json({ error: 'Gagal menghasilkan penjelasan AI.' });
  }
});

// Mount Vite in dev mode or serve static files in production
async function startServer() {
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  } else {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Rajawali Medical Simulation server running at http://0.0.0.0:${PORT}`);
  });
}

startServer();
