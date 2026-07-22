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
      title: "İş Güvenliği ve Verimlilik İçin Akıllı Endüstriyel Çözümler",
      subtitle: "AI kamera sistemleri, aktif uyarı donanımları, otomasyon ve özel yazılım çözümleriyle sahadaki riski görünür, yönetilebilir ve ölçülebilir hale getirin.",
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
        desc: "Forklift kazalarını önlemek için kamera izleme, operatör uyarısı ve otomatik yavaşlatma/durdurma senaryolarını birlikte çalıştırın"
      },
      fall: {
        title: "Düşme / Bayılma Algılama",
        desc: "AI Kamera tabanlı sistem ile personelin düşme veya bayılma anlarını anında tespit edin"
      },
      loading: {
        title: "Akıllı Güvenli Yükleme Rampası",
        desc: "Yapay zeka kamerasıyla TIR arkasındaki kör noktayı izleyin, risk varsa sürücüyü ve yayayı uyarın"
      },
      uwb: {
        title: "Bölgesel Yaklaşım Algısı",
        desc: "UWB cihazlarıyla riskli bölge, ekipman ve yaklaşma senaryolarını aktif uyarıya bağlayın"
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
      title: "Smart Industrial Solutions for Safety and Efficiency",
      subtitle: "Make field risks visible, manageable, and measurable with AI camera systems, active warning hardware, automation, and custom software.",
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
        desc: "Prevent forklift accidents with camera monitoring, operator alerts, and automatic speed reduction/stop scenarios"
      },
      fall: {
        title: "Fall / Fainting Detection",
        desc: "Instantly detect personnel falling or fainting moments with AI Camera-based system"
      },
      loading: {
        title: "Smart Safe Loading Dock",
        desc: "Monitor the blind spot behind reversing trucks with AI cameras and warn both driver and pedestrian when risk appears"
      },
      uwb: {
        title: "Regional Proximity Detection",
        desc: "Connect UWB-based proximity scenarios to active warnings for risk zones, people, and mobile equipment"
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
