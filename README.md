# IYESYS Web Sitesi

IYESYS kurumsal web sitesi; Next.js (App Router), TypeScript, Tailwind CSS ve Markdown tabanlı içerik yönetim motoru ile geliştirilmiştir.

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

## 📝 Teknoloji & Blog: Yeni Makale / Yazı Ekleme Rehberi

Sitemizdeki **Teknoloji & Blog** (`/insights`) sayfası tamamen **Git & Markdown** tabanlı çalışır. Hiçbir React veya kod dosyasına dokunmadan yeni makale ekleyebilirsiniz.

### 1. Yeni Bir Makale Dosyası Açma
`content/articles/` klasörü altına `.md` uzantılı bir dosya oluşturun.

* **Örnek Dosya Adı:** `content/articles/yapay-zeka-is-guvenligi.md`
* **Önemli:** Belirlediğiniz dosya adı (uzantısız hali), yazının URL adresi (slug) olur.
  > `yapay-zeka-is-guvenligi.md` ➔ `https://iyesys.com/insights/yapay-zeka-is-guvenligi`

---

### 2. Dosya Başı Bilgileri (Frontmatter Şablonu)
Oluşturduğunuz `.md` dosyasının **en başına** aşağıdaki bloğu ekleyin ve kendi içeriğinize göre doldurun:

```markdown
---
title: "Makalenizin Tam Başlığı"
date: "2024-03-20"
displayDate: "20 Mart 2024"
author: "Yazar Adı veya IYESYS Ekibi"
authorInitials: "IE"
readingTime: "5 dk okuma"
image: "/img/hareketliekipman-yaya1.png"
excerpt: "Yazınızın liste sayfasında ve arama motorlarında (SEO) görünecek 1-2 cümlelik kısa özeti."
---
```

#### Alanların Anlamları:
| Alan | Açıklama |
| :--- | :--- |
| `title` | Makalenin ana başlığı. |
| `date` | Sıralama için kullanılan tarih formatı (`YYYY-MM-DD`). En yeni yazılar otomatik olarak en üstte listelenir. |
| `displayDate` | Okuyucuya gösterilen tarih metni (örn: `"20 Mart 2024"`). |
| `author` | Yazar veya departman adı (örn: `"IYESYS Mühendislik"`). |
| `authorInitials` | Yazar avatarında görünecek 2 harfli kısaltma (örn: `"IE"` veya `"AH"`). |
| `readingTime` | Tahmini okuma süresi (boş bırakırsanız kelime sayısına göre otomatik hesaplanır). |
| `image` | Kapak görseli. `public/` klasöründeki bir görselin yolu (örn: `/img/ornek.png`) veya harici bir web linki (`https://...`). |
| `excerpt` | Blog kartında ve SEO meta açıklamasında çıkacak kısa özet. |

---

### 3. İçeriği Yazma (Markdown Formatı)
Frontmatter bloğundaki `---` işaretinin hemen altından başlayarak yazınızı dilediğiniz gibi yazabilirsiniz:

```markdown
Giriş paragrafınızı buraya yazın. İstediğiniz kelimeleri **kalın** veya *italik* yapabilirsiniz.

## 1. İlk Ana Başlık
Normal paragraflarınızı buraya yazabilirsiniz.

### Alt Başlık
* Madde 1
* Madde 2
* Madde 3

> "Önemli bir alıntıyı veya dikkat çekici bir cümleyi bu şekilde vurgulayabilirsiniz."

### Görsel Ekleme
Yazının içine ek bir görsel yerleştirmek isterseniz:
![Görsel Açıklaması](/img/ilgili-gorsel.png)
```

---

### 4. Yayına Alma (Deploy)
1. Dosyayı kaydedin (`git add content/articles/yeni-yazi.md`).
2. Commit edin ve GitHub'a push yapın (`git commit -m "feat: yeni blog yazısı" && git push`).
3. Vercel otomatik olarak siteyi yeniden derleyecek ve yazınız anında yayına girecektir!
