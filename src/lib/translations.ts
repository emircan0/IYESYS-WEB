// src/lib/translations.ts
export const translations = {
  tr: {
    nav: {
      home: "Ana Sayfa",
      about: "Hakkımızda",
      services: "Çözümlerimiz",
      products: "Ürünler",
      technologies: "Teknolojiler",
      references: "Referanslar",
      careers: "Kariyer",
      contact: "İletişim"
    },
    hero: {
      title: "Yapay Zeka ile Endüstriyel Güvenliğin Geleceği",
      subtitle: "AI Kamera Sistemleri, UWB Teknolojisi ve IoT Çözümleri ile İşyerinizi Güvenli Hale Getirin",
      cta1: "Çözümlerimizi Keşfedin",
      cta2: "Demo Talep Edin",
      stats: {
        projects: "Başarılı Proje",
        clients: "Mutlu Müşteri",
        satisfaction: "Memnuniyet"
      }
    },
    services: {
      title: "Çözümlerimiz",
      securitySolutions: "Güvenlik Çözümleri",
      softwareSolutions: "Yazılım Çözümleri",
      automationSolutions: "Otomasyon Çözümleri",
      subtitle: "Yapay zeka ve IoT teknolojileriyle desteklenen endüstriyel güvenlik çözümlerimiz",
      forklift: {
        title: "Hareketli Ekipman Güvenliği",
        desc: "AI kameralar ile kör nokta ve kavşaklarda araç ve insan hareketlerini algılayın"
      },
      fall: {
        title: "Düşme / Bayılma Algılama",
        desc: "AI Kamera tabanlı sistem ile personelin düşme veya bayılma anlarını anında tespit edin"
      },
      loading: {
        title: "Akıllı Güvenli Yükleme Rampası",
        desc: "TIR algılama ve plaka okuma ile yanaşma süreçlerini kaydedin"
      },
      uwb: {
        title: "Ekipmanlar Arası Haberleşme",
        desc: "UWB tag'ler ile hareketli ekipmanlar arası mesafeyi hassas biçimde ölçün"
      }
    },
    about: {
      title: "Hakkımızda",
      mission: "Misyonumuz",
      vision: "Vizyonumuz",
      values: "Değerlerimiz",
      cta: "Geleceği Birlikte İnşa Edelim"
    },
    contact: {
      title: "Bize Ulaşın",
      subtitle: "Sorularınız veya iş birliği talepleriniz için bizimle iletişime geçin",
      name: "Ad Soyad",
      email: "E-posta",
      phone: "Telefon",
      subject: "Konu",
      message: "Mesajınız",
      send: "Gönder",
      sending: "Gönderiliyor...",
      success: "Mesajınız başarıyla gönderildi!",
      required: "Zorunlu alanlar"
    },
    footer: {
      about: "Hakkımızda",
      quickLinks: "Hızlı Bağlantılar",
      contact: "İletişim",
      followUs: "Bizi Takip Edin",
      rights: "Tüm hakları saklıdır"
    }
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Solutions",
      products: "Products",
      technologies: "Technologies",
      references: "References",
      careers: "Careers",
      contact: "Contact"
    },
    hero: {
      title: "The Future of Industrial Safety with AI",
      subtitle: "Secure Your Workplace with AI Camera Systems, UWB Technology, and IoT Solutions",
      cta1: "Explore Solutions",
      cta2: "Request Demo",
      stats: {
        projects: "Successful Projects",
        clients: "Happy Clients",
        satisfaction: "Satisfaction"
      }
    },
    services: {
      title: "Our Solutions",
      securitySolutions: "Security Solutions",
      softwareSolutions: "Software Solutions",
      automationSolutions: "Automation Solutions",
      subtitle: "Industrial safety solutions powered by artificial intelligence and IoT technologies",
      forklift: {
        title: "Mobile Equipment Safety",
        desc: "Detect vehicle/human movements in blind spots and intersections with AI cameras"
      },
      fall: {
        title: "Fall / Fainting Detection",
        desc: "Instantly detect personnel falling or fainting moments with AI Camera-based system"
      },
      loading: {
        title: "Smart Safe Loading Dock",
        desc: "Record docking processes with truck detection and license plate recognition"
      },
      uwb: {
        title: "Equipment-to-Equipment Communication",
        desc: "Precisely measure distance between mobile equipment with UWB tags"
      }
    },
    about: {
      title: "About Us",
      mission: "Our Mission",
      vision: "Our Vision",
      values: "Our Values",
      cta: "Build the Future Together"
    },
    contact: {
      title: "Contact Us",
      subtitle: "Get in touch with us for your questions or collaboration requests",
      name: "Full Name",
      email: "Email",
      phone: "Phone",
      subject: "Subject",
      message: "Your Message",
      send: "Send",
      sending: "Sending...",
      success: "Your message has been sent successfully!",
      required: "Required fields"
    },
    footer: {
      about: "About Us",
      quickLinks: "Quick Links",
      contact: "Contact",
      followUs: "Follow Us",
      rights: "All rights reserved"
    }
  }
}

export type Language = keyof typeof translations;
export type TranslationKeys = typeof translations.tr;