import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import fs from 'fs';
import path from 'path';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Geçerli bir e-posta adresi gerekli.' }, { status: 400 });
    }

    // 1. Veriyi kaydet (data/submissions.json)
    const dataPath = path.join(process.cwd(), 'data', 'submissions.json');
    let submissions = [];
    
    if (fs.existsSync(dataPath)) {
      const fileContent = fs.readFileSync(dataPath, 'utf-8');
      submissions = JSON.parse(fileContent);
    }

    const newSubmission = {
      email,
      timestamp: new Date().toISOString(),
    };

    submissions.push(newSubmission);
    fs.writeFileSync(dataPath, JSON.stringify(submissions, null, 2));

    // 2. Bildirim e-postası gönder
    const apiKey = process.env.RESEND_API_KEY;
    if (apiKey && apiKey !== 're_your_api_key_here') {
      try {
        const resend = new Resend(apiKey);
        await resend.emails.send({
          from: 'IYESYS Sunum <onboarding@resend.dev>', // Resend domain doğrulaması yapılana kadar bu varsayılan kullanılır
          to: process.env.NOTIFICATION_EMAIL || 'info@iyesys.com.tr',
          subject: 'Yeni Sunum İndirme Talebi',
          html: `<p><strong>${email}</strong> adresi ile sunum dosyası indirildi.</p><p>Tarih: ${new Date().toLocaleString('tr-TR')}</p>`,
        });
      } catch (emailError) {
        console.error('Email sending error:', emailError);
        // E-posta gönderilemese bile kayıt yapıldığı için devam ediyoruz
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Presentation API Error:', error);
    return NextResponse.json({ error: 'Sunucu hatası oluştu.' }, { status: 500 });
  }
}
