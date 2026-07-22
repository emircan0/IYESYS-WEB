export type ServiceCategory =
  | 'safety'
  | 'efficiency'
  | 'automation'
  | 'software'
  | 'engineering'
  | 'operations'

export type ServiceCatalogItem = {
  title: string
  href: string
  category: ServiceCategory
  categoryLabel: string
  desc: string
  image: string
  accent: string
  accentRgb: string
  tags: string[]
}

export type ServiceCategoryTheme = {
  label: string
  shortLabel: string
  desc: string
  accent: string
  accentRgb: string
  soft: string
  text: string
  border: string
  gradient: string
}

export const serviceCategoryOrder: ServiceCategory[] = [
  'safety',
  'efficiency',
  'automation',
  'software',
  'engineering',
  'operations',
]

export const serviceCategoryLabels: Record<ServiceCategory, string> = {
  safety: 'Güvenlik Çözümleri',
  efficiency: 'Endüstriyel Verimlilik',
  automation: 'Otomasyon Sistemleri',
  software: 'Özel Yazılım',
  engineering: 'Ar-Ge ve Mühendislik',
  operations: 'Filo Yönetimi',
}

export const serviceCategoryThemes: Record<ServiceCategory, ServiceCategoryTheme> = {
  safety: {
    label: serviceCategoryLabels.safety,
    shortLabel: 'Güvenlik',
    desc: 'İş güvenliği kamera sistemi, forklift yaya güvenliği, alan ihlali, KKD kontrolü ve rampa güvenliği çözümleri.',
    accent: '#16A34A',
    accentRgb: '22, 163, 74',
    soft: '#ECFDF3',
    text: '#166534',
    border: '#BBF7D0',
    gradient: 'linear-gradient(135deg, #16A34A 0%, #059669 100%)',
  },
  efficiency: {
    label: serviceCategoryLabels.efficiency,
    shortLabel: 'Verimlilik',
    desc: 'Üretim verimliliği, kalite kontrol, OEE, duruş analizi ve mağaza yoğunluk analizi için veri odaklı sistemler.',
    accent: '#2563EB',
    accentRgb: '37, 99, 235',
    soft: '#EFF6FF',
    text: '#1D4ED8',
    border: '#BFDBFE',
    gradient: 'linear-gradient(135deg, #2563EB 0%, #0EA5E9 100%)',
  },
  automation: {
    label: serviceCategoryLabels.automation,
    shortLabel: 'Otomasyon',
    desc: 'PLC SCADA otomasyon, IO sistemleri, pnömatik hidrolik sistemler ve aktif uyarı donanımları.',
    accent: '#DC2626',
    accentRgb: '220, 38, 38',
    soft: '#FEF2F2',
    text: '#B91C1C',
    border: '#FECACA',
    gradient: 'linear-gradient(135deg, #DC2626 0%, #B91C1C 100%)',
  },
  software: {
    label: serviceCategoryLabels.software,
    shortLabel: 'Yazılım',
    desc: 'Mobil uygulama, web panel, IoT dashboard, özel yazılım ve işletmeye özel entegrasyon projeleri.',
    accent: '#7C3AED',
    accentRgb: '124, 58, 237',
    soft: '#F5F3FF',
    text: '#6D28D9',
    border: '#DDD6FE',
    gradient: 'linear-gradient(135deg, #7C3AED 0%, #9333EA 100%)',
  },
  engineering: {
    label: serviceCategoryLabels.engineering,
    shortLabel: 'Ar-Ge',
    desc: 'Ar-Ge danışmanlık, ürün geliştirme, mekanik tasarım, teknik çizim ve prototip üretim desteği.',
    accent: '#0D9488',
    accentRgb: '13, 148, 136',
    soft: '#F0FDFA',
    text: '#0F766E',
    border: '#99F6E4',
    gradient: 'linear-gradient(135deg, #0D9488 0%, #06B6D4 100%)',
  },
  operations: {
    label: serviceCategoryLabels.operations,
    shortLabel: 'Filo',
    desc: 'Araç takip sistemi, saha operasyon yönetimi, hakediş takip yazılımı ve dijital iş akışları.',
    accent: '#EA580C',
    accentRgb: '234, 88, 12',
    soft: '#FFF7ED',
    text: '#C2410C',
    border: '#FED7AA',
    gradient: 'linear-gradient(135deg, #EA580C 0%, #F97316 100%)',
  },
}

export const serviceCatalog: ServiceCatalogItem[] = [
  {
    title: 'Hareketli Ekipman - Yaya Güvenliği',
    href: '/services/forklift-safety',
    category: 'safety',
    categoryLabel: serviceCategoryLabels.safety,
    desc: 'Forklift kazalarını önlemek için kamera izleme, UWB hassas mesafe kontrolü, operatör uyarısı, sesli ikaz ve otomatik yavaşlatma/durdurma senaryolarını birlikte çalıştırır.',
    image: '/img/hareketliekipman-yaya1.png',
    accent: '#16A34A',
    accentRgb: '22, 163, 74',
    tags: ['forklift kaza önleme', 'forklift kamera sistemi', 'hassas mesafe kontrol'],
  },
  {
    title: 'Bölge Yaya Güvenliği',
    href: '/services/area-safety',
    category: 'safety',
    categoryLabel: serviceCategoryLabels.safety,
    desc: 'Köşe, kavşak, kapı ve yaya geçitlerinde kamera ve UWB ile çarpışma riskini analiz eder; hologram, lamba, LED, sesli uyarı ve kapı senaryolarını çalıştırır.',
    image: '/img/generated-solutions/safety-forklift-ai-zone-no-device.png',
    accent: '#059669',
    accentRgb: '5, 150, 105',
    tags: ['bölge güvenliği', 'hologram uyarı', 'kapı senaryosu'],
  },
  {
    title: 'Yükleme Rampası Güvenliği',
    href: '/services/dock-safety',
    category: 'safety',
    categoryLabel: serviceCategoryLabels.safety,
    desc: 'Yapay zeka kamerasıyla TIR arkasındaki kör noktayı izler; kırmızı-yeşil ışık, yüksek sesli uyarı ve rampa kapısı kilidiyle güvenli yanaşma sağlar.',
    image: '/img/17.png',
    accent: '#22C55E',
    accentRgb: '34, 197, 94',
    tags: ['TIR arkası kamera', 'rampa kapısı', 'trafik lambası'],
  },
  {
    title: 'Tehlikeli Alan Yönetimi',
    href: '/services/tehlikeli-alan',
    category: 'safety',
    categoryLabel: serviceCategoryLabels.safety,
    desc: 'Kamera ile insanın girmemesi gereken makine, robot hücresi veya enerji bölgelerini izler; ihlal anında uyarı ve güvenli durdurma senaryosu çalıştırır.',
    image: '/img/service-unique/area-safety-scene.png',
    accent: '#15803D',
    accentRgb: '21, 128, 61',
    tags: ['kamera ile alan ihlali', 'makine durdurma', 'risk yönetimi'],
  },
  {
    title: 'Mevcut Kamera Sistemleri ile İSG Entegrasyonu',
    href: '/services/kamera-sistemi-isg-entegrasyonu',
    category: 'safety',
    categoryLabel: serviceCategoryLabels.safety,
    desc: 'Mevcut IP kameraları RTSP bağlantısıyla forklift güvenliği, KKD kontrolü ve tehlikeli alan güvenliği için akıllı İSG analiz katmanına bağlar.',
    image: '/img/service-detail/kamera-isg-entegrasyonu.png',
    accent: '#10B981',
    accentRgb: '16, 185, 129',
    tags: ['İSG kamera sistemi', 'RTSP', 'mevcut kamera analizi'],
  },
  {
    title: 'Gıda Sektörü Hijyen Tespiti',
    href: '/services/gida-firmalari-kamera-hijyen',
    category: 'safety',
    categoryLabel: serviceCategoryLabels.safety,
    desc: 'Mevcut kameralar veya projeye özel kameralarla bone, maske, eldiven ve önlük gibi hijyen kıyafetlerini yönetim paneline bağlı şekilde denetler.',
    image: '/img/service-detail/gida-hijyen-tespiti.png',
    accent: '#65A30D',
    accentRgb: '101, 163, 13',
    tags: ['hijyen tespiti', 'gıda güvenliği', 'kamera denetimi'],
  },
  {
    title: 'Yapay Zeka Destekli Kalite Kontrol',
    href: '/services/kalite-kontrol',
    category: 'efficiency',
    categoryLabel: serviceCategoryLabels.efficiency,
    desc: 'Görsel kusur, eksik parça, montaj hatası ve kalite sapmalarını hat üstünde yakalayan analiz sistemi.',
    image: '/img/service-detail/kalite-kontrol.png',
    accent: '#2563EB',
    accentRgb: '37, 99, 235',
    tags: ['görüntü işleme', 'kalite kontrol', 'hata tespiti'],
  },
  {
    title: 'Üretim Süreçleri ve Verimlilik Analizi',
    href: '/services/uretim-verimlilik',
    category: 'efficiency',
    categoryLabel: serviceCategoryLabels.efficiency,
    desc: 'Duruş, çevrim süresi, OEE, vardiya ve kapasite verilerini yönetim ekranına taşıyan üretim analitiği.',
    image: '/img/service-detail/uretim-verimlilik-analizi.png',
    accent: '#1D4ED8',
    accentRgb: '29, 78, 216',
    tags: ['üretim verimliliği', 'OEE', 'duruş analizi'],
  },
  {
    title: 'Mağaza ve İşletme Verimlilik Analizi',
    href: '/services/magaza-isletme-verimlilik',
    category: 'efficiency',
    categoryLabel: serviceCategoryLabels.efficiency,
    desc: 'Yoğunluk, kuyruk, bekleme ve alan kullanımı analizleriyle işletme kararlarını veriyle destekler.',
    image: '/img/service-detail/magaza-isletme-verimlilik.png',
    accent: '#0EA5E9',
    accentRgb: '14, 165, 233',
    tags: ['yoğunluk analizi', 'ısı haritası', 'kuyruk takibi'],
  },
  {
    title: 'Aktif Uyarı Sistemleri',
    href: '/services/warning-systems',
    category: 'automation',
    categoryLabel: serviceCategoryLabels.automation,
    desc: 'Sesli, ışıklı, butonlu ve PLC bağlantılı uyarı donanımlarını sahaya özel senaryolarla çalıştırır.',
    image: '/img/warning-systems-showcase-v4.png',
    accent: '#EF4444',
    accentRgb: '239, 68, 68',
    tags: ['aktif uyarı sistemi', 'PLC ikaz', 'sesli anons'],
  },
  {
    title: 'PLC, SCADA ve IO Sistemleri',
    href: '/services/plc-scada-io-sistemler',
    category: 'automation',
    categoryLabel: serviceCategoryLabels.automation,
    desc: 'Makine ve tesis sinyallerini PLC, SCADA, alarm ve raporlama omurgasına bağlayan otomasyon altyapısı.',
    image: '/img/service-unique/plc-scada-io-sistemler-scene.png',
    accent: '#DC2626',
    accentRgb: '220, 38, 38',
    tags: ['PLC otomasyon', 'SCADA sistemi', 'IO kontrol'],
  },
  {
    title: 'Pnömatik ve Hidrolik Sistemler',
    href: '/services/pnomatik-hidrolik-sistemler',
    category: 'automation',
    categoryLabel: serviceCategoryLabels.automation,
    desc: 'Basınç, debi, hareket ve valf kontrolünü güvenilir devre tasarımıyla yeniden düzenler.',
    image: '/img/service-detail/pnomatik-hidrolik-sistemler.png',
    accent: '#B91C1C',
    accentRgb: '185, 28, 28',
    tags: ['hidrolik sistem', 'pnömatik sistem', 'valf kontrol'],
  },
  {
    title: 'Mobil, Web ve Masaüstü Uygulamaları',
    href: '/services/mobil-web-uygulamalari',
    category: 'software',
    categoryLabel: serviceCategoryLabels.software,
    desc: 'CRM, web panel, mobil dashboard ve masaüstü uygulama akışlarını işletmeye özel geliştirir.',
    image: '/img/service-unique/software-crm-dashboard-devices.png',
    accent: '#7C3AED',
    accentRgb: '124, 58, 237',
    tags: ['CRM yazılımı', 'mobil uygulama', 'masaüstü uygulama'],
  },
  {
    title: 'Gömülü Yazılım ve IoT Çözümleri',
    href: '/services/custom-solutions',
    category: 'software',
    categoryLabel: serviceCategoryLabels.software,
    desc: 'Sensör, cihaz, edge gateway, gömülü yazılım ve IoT dashboard yapısını endüstriyel sahaya bağlar.',
    image: '/img/service-unique/embedded-iot-industrial-network.png',
    accent: '#9333EA',
    accentRgb: '147, 51, 234',
    tags: ['gömülü yazılım', 'IoT dashboard', 'sensör verisi'],
  },
  {
    title: 'Mekanik Tasarım / Çizim',
    href: '/services/mekanik-tasarim-cizim',
    category: 'engineering',
    categoryLabel: serviceCategoryLabels.engineering,
    desc: 'CAD modelleme, teknik resim, prototip ve üretim dosyalarını sahaya uygun şekilde hazırlar.',
    image: '/img/service-detail/mekanik-tasarim-cizim.png',
    accent: '#0D9488',
    accentRgb: '13, 148, 136',
    tags: ['mekanik tasarım', 'CAD çizim', 'prototip'],
  },
  {
    title: 'Ar-Ge ve Mühendislik Danışmanlığı',
    href: '/services/arge-danismanlik',
    category: 'engineering',
    categoryLabel: serviceCategoryLabels.engineering,
    desc: 'Fikir, fizibilite, prototip, saha testi ve ürünleşme adımlarını teknik yol haritasına bağlar.',
    image: '/img/service-detail/arge-danismanlik.png',
    accent: '#14B8A6',
    accentRgb: '20, 184, 166',
    tags: ['Ar-Ge danışmanlık', 'fizibilite', 'MVP'],
  },
  {
    title: 'Ürün Geliştirme',
    href: '/services/urun-gelistirme',
    category: 'engineering',
    categoryLabel: serviceCategoryLabels.engineering,
    desc: 'Donanım, yazılım, mekanik ve saha testini bir araya getirerek çalışır endüstriyel ürün geliştirir.',
    image: '/img/service-detail/urun-gelistirme.png',
    accent: '#06B6D4',
    accentRgb: '6, 182, 212',
    tags: ['ürün geliştirme', 'IoT prototip', 'pilot kurulum'],
  },
  {
    title: 'Filo Yönetimi ve Araç Takip Sistemleri',
    href: '/services/arac-takip',
    category: 'operations',
    categoryLabel: serviceCategoryLabels.operations,
    desc: 'Filo konumu, rota, görev, sürüş davranışı ve bakım süreçlerini tek panelde takip eder.',
    image: '/img/service-detail/arac-takip-sistemleri.png',
    accent: '#D97706',
    accentRgb: '217, 119, 6',
    tags: ['araç takip sistemi', 'GPS takip', 'rota yönetimi'],
  },
  {
    title: 'Hakediş ve Operasyon Yönetimi',
    href: '/services/hakedis',
    category: 'operations',
    categoryLabel: serviceCategoryLabels.operations,
    desc: 'Saha ilerlemesini fotoğraf, zaman, konum ve onay bilgisiyle hakediş raporuna dönüştürür.',
    image: '/img/service-detail/hakedis-operasyon-yonetimi.png',
    accent: '#EA580C',
    accentRgb: '234, 88, 12',
    tags: ['hakediş takip', 'saha operasyon', 'onay akışı'],
  },
]
