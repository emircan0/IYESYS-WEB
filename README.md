# IYESYS Web Sitesi

IYESYS kurumsal web sitesi; Next.js (App Router), TypeScript ve Tailwind CSS ile geliştirilmiştir.

---

## 🚀 Başlangıç

Projeyi yerel ortamda çalıştırmak için:

```bash
npm install
npm run dev
```

Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresine giderek siteyi görüntüleyebilirsiniz.

Production derlemesini test etmek için:

```bash
npm run build
```

---

## 📝 Teknoloji & Blog

**Teknoloji & Blog** (`/insights`) sayfası, IYESYS Admin Panel üzerinden yönetilen bir Supabase veritabanından beslenir. Yeni bir yazı eklemek, düzenlemek veya yayından kaldırmak için kod veya Git'e dokunmaya gerek yoktur - admin panele giriş yaparak yazı oluşturabilir, kapak/gövde görselleri ekleyebilir ve taslak/yayınlandı durumunu değiştirebilirsiniz.

Sayfalar 60 saniyelik ISR (Incremental Static Regeneration) ile yenilenir, yani panelde yayınlanan bir yazı en geç bir dakika içinde sitede görünür.
