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
    // NOT: Vercel üzerinde dosya sistemi salt okunurdu; bu yüzden hata fırlatabilir.
    try {
      const dataPath = path.join(process.cwd(), 'data', 'submissions.json');
      let submissions = [];
      
      const dirPath = path.join(process.cwd(), 'data');
      if (fs.existsSync(dirPath)) {
        if (fs.existsSync(dataPath)) {
          const fileContent = fs.readFileSync(dataPath, 'utf-8');
          submissions = JSON.parse(fileContent);
        }
        submissions.push({ email, timestamp: new Date().toISOString() });
        // Veriyi sadece dosya sistemi izin verirse yazıyoruz
        try {
          fs.writeFileSync(dataPath, JSON.stringify(submissions, null, 2));
        } catch (e) {
          console.warn('Could not write to file (Expected on Vercel):', e);
        }
      }
    } catch (fsError) {
      console.error('Data storage error:', fsError);
    }

    // 2. Bildirim e-postası gönder
    const apiKey = process.env.RESEND_API_KEY;
    if (apiKey && apiKey !== 're_your_api_key_here') {
      try {
        const resend = new Resend(apiKey);
        await resend.emails.send({
          from: 'IYESYS Sunum <onboarding@resend.dev>', // Resend domain doğrulaması yapılana kadar bu varsayılan kullanılır
          to: process.env.NOTIFICATION_EMAIL || 'info@iyesys.com',
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
