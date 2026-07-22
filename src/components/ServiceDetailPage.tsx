import type { CSSProperties } from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  CheckCircle2,
  CircleDot,
  Gauge,
  Layers3,
  LineChart,
  MapPinned,
  MonitorCheck,
  ShieldCheck,
  Smartphone,
  Workflow,
  Wrench,
} from 'lucide-react'
import type { ServiceDetailContent } from '@/lib/serviceDetailContent'
import { getServiceSeo } from '@/lib/serviceSeo'
import { serviceCategoryThemes, type ServiceCategory } from '@/lib/serviceCatalog'
import ScrollReveal from '@/components/ScrollReveal'
import VisualRotatorClient from '@/components/VisualRotatorClient'

type ServiceDetailPageProps = {
  page: ServiceDetailContent
}

type DetailVariant = 'cinematic' | 'studio' | 'console' | 'editorial'

type DetailVisual = {
  src: string
  alt: string
}

type FamilyStory = {
  line: string
  heading: string
  label: string
  icon: typeof ShieldCheck
}

type SolutionFocusCopy = {
  eyebrow: string
  heading: string
  systemLine: string
  secondParagraph: string
  thirdParagraph: string
  overviewTitle: string
  overviewIntro: string
  workflowTitle: string
  workflowIntro: string
  searchTitle: string
  searchParagraphs: string[]
  outcomesTitle: string
  useCasesTitle: string
  ctaTitle: string
  ctaCopy: string
}

const iconSet = [ShieldCheck, MonitorCheck, Gauge, Layers3]

const tint = (rgb: string, alpha: number) => `rgba(${rgb}, ${alpha})`
const letterboxedVisuals = new Set(['/img/18.png', '/img/20.png', '/img/21.png'])
const hasLetterboxedVisual = (visuals: DetailVisual[]) => visuals.some((visual) => letterboxedVisuals.has(visual.src))
const forkliftTitle = 'Hareketli Ekipman - Yaya Güvenliği'
const areaSafetyTitle = 'Bölge Yaya Güvenliği'
const dockSafetyTitle = 'Yükleme Rampası Güvenliği'
const hazardousAreaTitle = 'Tehlikeli Alan Yönetimi'
const cameraIntegrationTitle = 'Mevcut Kamera Sistemleri ile İSG Entegrasyonu'
const foodHygieneTitle = 'Gıda Firmaları İçin Kamera ile Hijyen Tespiti'
const qualityControlTitle = 'Kalite Kontrol'
const productionEfficiencyTitle = 'Üretim Süreçleri ve Verimlilik Analizi'
const businessEfficiencyTitle = 'Mağaza / İşletmede Verimlilik Analizi'
const mechanicalDesignTitle = 'Mekanik Tasarım / Çizim'
const researchConsultingTitle = 'Ar-Ge ve Mühendislik Danışmanlığı'
const productDevelopmentTitle = 'Ürün Geliştirme'
const fleetManagementTitle = 'Filo Yönetimi ve Araç Takip Sistemleri'
const progressPaymentTitle = 'Hakediş ve Operasyon Yönetimi'
const safetyFocusTitles = new Set([
  forkliftTitle,
  areaSafetyTitle,
  dockSafetyTitle,
  hazardousAreaTitle,
  cameraIntegrationTitle,
  foodHygieneTitle,
])
const efficiencyFocusTitles = new Set([qualityControlTitle, productionEfficiencyTitle, businessEfficiencyTitle])
const engineeringFocusTitles = new Set([researchConsultingTitle, productDevelopmentTitle])
const operationsFocusTitles = new Set([fleetManagementTitle, progressPaymentTitle])
const isForkliftPage = (page: ServiceDetailContent) => page.title === forkliftTitle
const isAreaSafetyPage = (page: ServiceDetailContent) => page.title === areaSafetyTitle
const usesSafetyFocusTemplate = (page: ServiceDetailContent) => safetyFocusTitles.has(page.title)
const usesEfficiencyFocusTemplate = (page: ServiceDetailContent) => efficiencyFocusTitles.has(page.title)
const usesEngineeringFocusTemplate = (page: ServiceDetailContent) => engineeringFocusTitles.has(page.title)
const usesOperationsFocusTemplate = (page: ServiceDetailContent) => operationsFocusTitles.has(page.title)
const usesMechanicalFocusTemplate = (page: ServiceDetailContent) => page.title === mechanicalDesignTitle

const heroVisualsByTitle: Record<string, DetailVisual[]> = {
  [forkliftTitle]: [
    {
      src: '/img/27.png',
      alt: 'Depo içinde kamera ve yaklaşım algısıyla izlenen iki forklift güvenlik senaryosu',
    },
    {
      src: '/img/18.png',
      alt: 'Forklift çevresinde yaya algılama ve personel güvenlik bölgesi',
    },
  ],
}

const detailVisualsByTitle: Record<string, DetailVisual | DetailVisual[]> = {
  [forkliftTitle]: {
    src: '/img/hareketliekipman-yaya1.png',
    alt: 'Forklift ve yaya geçişinde aktif uyarı bölgeleri kullanılan depo alanı',
  },
  'Bölge Yaya Güvenliği': {
    src: '/img/20.png',
    alt: 'Forklift geçişinde stop hologramı ve kırmızı uyarı alanı',
  },
  'Yükleme Rampası Güvenliği': {
    src: '/img/23.png',
    alt: 'Yükleme rampasında TIR yanaşma yönü ve trafik lambası kontrolü',
  },
  'Tehlikeli Alan Yönetimi': {
    src: '/img/alan-guvenligi.png',
    alt: 'Robot hücresi çevresinde mavi dijital güvenlik sınırı',
  },
  'Mevcut Kamera Sistemleri ile İSG Entegrasyonu': {
    src: '/img/service-unique/kamera-sistemi-isg-entegrasyonu-scene.png',
    alt: 'Mevcut kamera görüntülerinde KKD ve alan ihlali takibi yapan kontrol odası',
  },
  'Gıda Firmaları İçin Kamera ile Hijyen Tespiti': {
    src: '/img/service-unique/gida-firmalari-kamera-hijyen-scene.png',
    alt: 'Gıda üretim hattında kamera ile hijyen ve ekipman kontrolü',
  },
  'Kalite Kontrol': {
    src: '/img/service-unique/kalite-kontrol-scene.png',
    alt: 'Üretim hattında kamera ve mavi ışıkla yapılan yapay zeka kalite kontrol',
  },
  'Üretim Süreçleri ve Verimlilik Analizi': {
    src: '/img/service-unique/uretim-verimlilik-scene.png',
    alt: 'Üretim hattı üzerinde OEE ve duruş analizi ekranlarını izleyen yönetici',
  },
  'Mağaza / İşletmede Verimlilik Analizi': {
    src: '/img/service-unique/magaza-isletme-verimlilik-scene.png',
    alt: 'Mağaza yoğunluğu ve müşteri akışı analizini tablet üzerinden izleyen yönetici',
  },
  'Aktif Uyarı Sistemleri': [
    {
      src: '/img/service-unique/warning-systems-scene-red-clean.png',
      alt: 'Endüstriyel geçiş alanında kırmızı aktif uyarı ışıkları',
    },
    {
      src: '/img/service-unique/warning-systems-scene-green-clean.png',
      alt: 'Endüstriyel geçiş alanında yeşil güvenli geçiş ışıkları',
    },
  ],
  'PLC / SCADA / IO Sistemleri': {
    src: '/img/service-unique/plc-motion-control-cutout.png',
    alt: 'PLC kontrol modülü, HMI ekran, konveyör hattı, sensör ve servo motor otomasyon kesiti',
  },
  'Pnömatik / Hidrolik Sistemler': {
    src: '/img/service-unique/pnomatik-hidrolik-sistemler-scene.png',
    alt: 'Pnömatik ve hidrolik valf test düzeneğinde basınç kontrolü yapan teknisyen',
  },
  'Mobil / Web / Masaüstü Uygulamaları': {
    src: '/img/service-unique/software-crm-dashboard-devices.png',
    alt: 'CRM web paneli ve mobil dashboard arayüzü',
  },
  'Gömülü Yazılım ve IoT Çözümleri': {
    src: '/img/service-unique/embedded-iot-industrial-network.png',
    alt: 'Gömülü yazılım, edge gateway, sensör ve IoT dashboard haberleşme yapısı',
  },
  'Mekanik Tasarım / Çizim': {
    src: '/img/service-unique/mekanik-tasarim-cizim-scene.png',
    alt: 'CAD modelleme ve teknik çizim yapılan mekanik tasarım çalışma masası',
  },
  [researchConsultingTitle]: {
    src: '/img/service-unique/arge-danismanlik-scene.png',
    alt: 'Ar-Ge prototip test düzeneğini birlikte inceleyen mühendislik ekibi',
  },
  [productDevelopmentTitle]: {
    src: '/img/service-unique/urun-gelistirme-scene.png',
    alt: 'Endüstriyel IoT ürün prototipi ve kamera sensörü montaj çalışması',
  },
  [fleetManagementTitle]: {
    src: '/img/service-unique/arac-takip-scene.png',
    alt: 'Filo araç takip sistemiyle canlı rota ve operasyon yönetimi',
  },
  [progressPaymentTitle]: {
    src: '/img/service-unique/hakedis-scene.png',
    alt: 'Sahada fotoğraflı iş ilerleme kaydı ve hakediş onay akışı',
  },
}

detailVisualsByTitle['Bölge Yaya Güvenliği'] = [
  detailVisualsByTitle['Bölge Yaya Güvenliği'] as DetailVisual,
  {
    src: '/img/21.png',
    alt: 'Yaya geçidinde yeşil ışıklı güvenli geçiş uyarısı',
  },
]

detailVisualsByTitle['Yükleme Rampası Güvenliği'] = [
  detailVisualsByTitle['Yükleme Rampası Güvenliği'] as DetailVisual,
  {
    src: '/img/24.png',
    alt: 'Yükleme rampasında TIR ve personel algılama uyarı senaryosu',
  },
]

const familyStories: Record<ServiceCategory, FamilyStory> = {
  safety: {
    label: 'Saha Güvenliği',
    icon: ShieldCheck,
    heading: 'Riski erken fark eden, sahada anlaşılır uyarı üreten güvenlik yapısı.',
    line: 'Kamera analitiği, aktif ikaz, otomasyon bağlantıları ve yönetim panelleri; sahadaki risklerin zamanında görülmesi ve doğru aksiyonun alınması için birlikte kurgulanır.',
  },
  efficiency: {
    label: 'Verimlilik Analitiği',
    icon: LineChart,
    heading: 'Üretimde kaybın nerede oluştuğunu anlaşılır veriye dönüştüren analitik yapı.',
    line: 'Duruş, çevrim süresi, kalite, yoğunluk ve kapasite verileri sade ekranlarla karar sürecine bağlanır.',
  },
  automation: {
    label: 'Otomasyon Omurgası',
    icon: MonitorCheck,
    heading: 'Makine, pano, sensör ve operatör ekranını kontrollü bir otomasyon düzeninde toplar.',
    line: 'PLC, SCADA, IO, ikaz donanımı ve akışkan güç sistemleri; güvenli devreye alma ve sürdürülebilir bakım mantığıyla tasarlanır.',
  },
  software: {
    label: 'Özel Yazılım',
    icon: Smartphone,
    heading: 'Saha verisini rol bazlı ekranlara, rapora ve yönetilebilir iş akışına dönüştürür.',
    line: 'Web panel, mobil uygulama, IoT dashboard ve entegrasyonlar işletmenin gerçek çalışma düzenine göre şekillenir.',
  },
  engineering: {
    label: 'Ar-Ge ve Tasarım',
    icon: Wrench,
    heading: 'Fikri teknik olarak doğrulayan, prototipe ve üretilebilir çıktıya taşıyan mühendislik akışı.',
    line: 'Mekanik tasarım, elektronik, yazılım, test düzeneği ve saha pilotu aynı ürünleşme yol haritasında ele alınır.',
  },
  operations: {
    label: 'Filo ve Operasyon',
    icon: MapPinned,
    heading: 'Araç, ekip, görev ve saha ilerlemesini izlenebilir operasyon akışına bağlar.',
    line: 'Konum, rota, fotoğraflı kanıt, onay ve raporlama bilgisi; yönetim ekiplerinin günlük kararına hazır hale gelir.',
  },
}

const getFamily = (page: ServiceDetailContent): ServiceCategory => {
  const text = `${page.eyebrow} ${page.title}`.toLocaleLowerCase('tr-TR')

  if (text.includes('araç') || text.includes('hakediş') || text.includes('filo')) return 'operations'
  if (text.includes('ar-ge') || text.includes('mekanik') || text.includes('çizim') || text.includes('ürün')) return 'engineering'
  if (text.includes('mobil') || text.includes('web') || text.includes('yazılım') || text.includes('özel çözüm')) return 'software'
  if (text.includes('plc') || text.includes('scada') || text.includes('pnömatik') || text.includes('hidrolik') || text.includes('uyarı')) return 'automation'
  if (text.includes('kalite') || text.includes('üretim') || text.includes('proses') || text.includes('mağaza') || text.includes('verimlilik')) return 'efficiency'

  return 'safety'
}

const getVariant = (page: ServiceDetailContent): DetailVariant => {
  const title = page.title.toLocaleLowerCase('tr-TR')

  if (title.includes('gıda') || title.includes('kamera') || title.includes('tehlikeli') || title.includes('kalite')) {
    return 'cinematic'
  }

  if (title.includes('ar-ge') || title.includes('ürün') || title.includes('mekanik') || title.includes('pnömatik') || title.includes('hidrolik')) {
    return 'studio'
  }

  if (title.includes('plc') || title.includes('mobil') || title.includes('üretim') || title.includes('araç') || title.includes('hakediş')) {
    return 'console'
  }

  return 'editorial'
}

const getPageVisuals = (page: ServiceDetailContent): DetailVisual[] => {
  const detailVisuals = detailVisualsByTitle[page.title]
  const normalizedDetails = Array.isArray(detailVisuals) ? detailVisuals : detailVisuals ? [detailVisuals] : []
  const visuals = [
    { src: page.image.src, alt: page.image.alt },
    ...normalizedDetails,
  ]

  return visuals.filter((visual, index) => visuals.findIndex((item) => item.src === visual.src) === index)
}

const getHeroVisuals = (page: ServiceDetailContent) => heroVisualsByTitle[page.title] || [getPageVisuals(page)[0]]

const getSafetyFocusCopy = (page: ServiceDetailContent) => {
  if (isAreaSafetyPage(page)) {
    return {
      eyebrow: 'IYESYS Bölge Yaya Güvenliği Sistemi',
      heading: 'Köşe, kavşak, kapı ve yaya geçidi risklerini aynı güvenlik akışında yönetin.',
      systemLine: 'Sistem; bölge kamera sistemi, UWB hassas mesafe algısı, aktif ikaz donanımları ve yönetim paneli katmanlarını birlikte çalıştırır.',
      secondParagraph:
        'Köşe, kavşak, kapı ve yaya geçidi gibi riskli noktalara kurulan kameralar ve UWB cihazları; insan-ekipman, ekipman-ekipman ve bölge yaklaşımı senaryolarını analiz eder. Risk oluştuğunda forklift durdurma/yavaşlatma, sesli uyarı, hologram dur veya yaya geçidi görseli, trafik lambası ve şerit LED aynı güvenlik kuralıyla devreye alınabilir.',
      thirdParagraph:
        'Kapı bölgelerinde forklift yaklaşınca otomatik kapı açma, yayaya kırmızı ışık verme veya belirli yönden gelen ekipmana öncelik tanıma gibi saha kuralları yönetim panelinden izlenebilir ve kayıt altına alınabilir.',
      overviewIntro:
        'Bölge güvenliği; sahanın en riskli geçiş noktalarını izler. Kamera, UWB, aktif ikaz ve yönetim paneli aynı kural setiyle çalışır.',
      searchTitle: 'IYESYS Bölge Yaya Güvenliği Sistemi',
      searchParagraphs: [
        'IYESYS bölge yaya güvenliği sistemi; depo yaya geçidi güvenliği, forklift yaya uyarı sistemi, kör kavşak güvenliği, kapı geçiş güvenliği ve ekipman çarpışma önleme ihtiyaçlarını tek yapıda toplar. Amaç, forklift ve yayanın birbirini geç gördüğü noktalarda riski erken fark edip sahada görünür ve duyulur uyarıya dönüştürmektir.',
        'Sabit bölgelere yerleştirilen kamera ve UWB cihazları yaklaşma yönünü, hassas mesafeyi ve bölge ihlalini takip eder. Senaryoya göre forklift yavaşlatma veya durdurma, trafik lambası, şerit LED, hologram dur/yaya geçidi uyarısı ve sesli anons aynı anda çalışabilir.',
        'Kapı, kavşak, raf arası, sevkiyat yolu ve yoğun yaya güzergahlarında olay kayıtları yönetim panelinde izlenir. Böylece bölge güvenlik sistemi tekrar eden risk noktalarını görünür yapan ölçülebilir bir iş güvenliği katmanı haline gelir.',
      ],
    }
  }

  if (page.title === dockSafetyTitle) {
    return {
      eyebrow: 'IYESYS Yükleme Rampası Güvenliği Sistemi',
      heading: 'TIR yanaşma, personel algılama ve rampa kapısını aynı güvenlik akışında yönetin.',
      systemLine: 'Sistem; yapay zeka kamera, TIR arkası insan algılama, trafik lambası ve sesli ikaz, kapı-rampa otomasyon entegrasyonu katmanlarını birlikte çalıştırır.',
      secondParagraph:
        'Rampa bölgesine konumlandırılan yapay zeka kamerası, TIR geri yanaşırken aracın arkasındaki kör noktayı anlık izler. Personel algılandığında kırmızı ışık, LED ve yüksek sesli uyarı devreye girer; sürücü ve yaya aynı anda net şekilde uyarılır.',
      thirdParagraph:
        'Yanaşma güvenli hale geldiğinde yeşil yönlendirme çalışabilir. TIR tamamen yanaşmadan rampa kapısının açılması engellenebilir; teker kilitleme, rampa dili, kapı otomasyonu, trafik lambası ve yönetim paneli aynı operasyon akışında izlenebilir.',
      overviewIntro:
        'Yükleme rampası güvenliği; TIR hareketi, personel dolaşımı, kapı kilidi ve rampa otomasyonunu aynı kontrol kuralıyla yönetir.',
      searchTitle: 'IYESYS Yükleme Rampası Güvenliği Sistemi',
      searchParagraphs: [
        'IYESYS yükleme rampası güvenliği sistemi; TIR arkası insan algılama, rampa kapısı kilidi, TIR yanaşma kontrolü, trafik lambası rampa sistemi ve yüksek sesli uyarı ihtiyacını sahaya uygun bir güvenlik akışında toplar.',
        'Yapay zeka kamera, TIR geri yanaşırken kör noktadaki personeli takip eder. Risk oluştuğunda kırmızı ışık, LED uyarı ve sesli anons çalışır; güvenli yanaşma oluştuğunda yeşil yönlendirme ile sürücüye anlaşılır bilgi verilir.',
        'Rampa kapısı, teker kilitleme sistemi, rampa dili ve mevcut otomasyon altyapısı yönetim paneliyle birlikte ele alınır. Böylece depo rampa güvenliği, sevkiyat alanı iş güvenliği ve dock safety süreçleri kayıtlı, izlenebilir ve standart hale gelir.',
      ],
    }
  }

  if (page.title === hazardousAreaTitle) {
    return {
      eyebrow: 'IYESYS Tehlikeli Alan Yönetimi Sistemi',
      heading: 'Makine ve robot alanlarında ihlal algılandığı anda güvenli aksiyonu başlatın.',
      systemLine: 'Sistem; kamera ile alan ihlali algılama, güvenli makine durdurma, aktif uyarı ve yönetim paneli-otomasyon entegrasyonu katmanlarını birlikte çalıştırır.',
      secondParagraph:
        'Kamera analitiği, insanın girmemesi gereken robot hücresi, pres çevresi, konveyör hattı veya enerji bölgesini hassas şekilde izler. Kişi riskli alana girdiğinde sistem uyarı üretir, olayı kayıt altına alır ve sahaya tanımlanan senaryoya göre makine durdurma komutunu çalıştırabilir.',
      thirdParagraph:
        'Tehlikeli alan kuralları makine, vardiya, bakım modu ve erişim ihtiyacına göre tanımlanır. Işık, sesli anons, operatör bildirimi, reset prosedürü, kapı kilidi ve mevcut otomasyon ürünleri yönetim panelinden takip edilebilir.',
      overviewIntro:
        'Tehlikeli alan yönetimi; makine çevresi, robot hücresi, pres, konveyör ve enerji bölgelerinde kamera ile ihlal algılayan güvenlik yapısıdır.',
      searchTitle: 'IYESYS Tehlikeli Alan Yönetimi Sistemi',
      searchParagraphs: [
        'IYESYS tehlikeli alan güvenliği; kamera ile alan ihlali tespiti, makine durdurma sistemi, robot hücresi güvenliği, yetkisiz giriş algılama ve aktif uyarı sistemi ihtiyaçları için geliştirilir.',
        'Sistem, insanın girmemesi gereken makine bölgesini kamera ile izler. İhlal anında operatör uyarısı, ışıklı ikaz, sesli anons, olay kaydı ve güvenli duruş senaryosu birlikte çalışabilir.',
        'Robot hücresi, pres, konveyör, enerji odası ve bakım dışı girilmemesi gereken üretim alanlarında olay geçmişi yönetim panelinde raporlanır. Böylece makine güvenliği kamera sistemi denetlenebilir bir İSG katmanına dönüşür.',
      ],
    }
  }

  if (page.title === cameraIntegrationTitle) {
    return {
      eyebrow: 'IYESYS Mevcut Kamera İSG Entegrasyonu',
      heading: 'Sahadaki kameraları yapay zeka destekli İSG denetim katmanına bağlayın.',
      systemLine: 'Sistem; RTSP kamera bağlantısı, yapay zeka İSG analiz katmanı, uyarı ve olay kaydı, yönetim paneli raporlama katmanlarını birlikte çalıştırır.',
      secondParagraph:
        'Mevcut IP kamera veya kamera sunucusundan alınan RTSP görüntü akışları analiz altyapısına bağlanır. Kamera açıları uygun olduğunda forklift güvenliği, KKD kontrolü, tehlikeli alan güvenliği, yasak bölge ihlali ve tesisinize özel İSG kuralları aynı panelden izlenebilir.',
      thirdParagraph:
        'Kamera, alan, vardiya, ihlal türü ve olay zamanı yönetim panelinde kayıt altına alınır. İSG ekipleri tekrar eden riskleri, yoğun ihlal noktalarını ve aksiyon ihtiyacını gerçek saha görüntüsüne dayalı verilerle değerlendirebilir.',
      overviewIntro:
        'Mevcut kamera İSG entegrasyonu; sahadaki IP kamera görüntülerini yapay zeka analiz, uyarı ve raporlama katmanına bağlar.',
      searchTitle: 'IYESYS Mevcut Kamera Sistemleri ile İSG Entegrasyonu',
      searchParagraphs: [
        'IYESYS iş güvenliği kamera sistemi; yapay zeka kamera analizi, RTSP kamera analizi, KKD kontrol sistemi, forklift güvenliği kamera analizi ve tehlikeli alan kamera sistemi ihtiyaçları için mevcut kamera görüntülerini değerlendirir.',
        'IP kamera veya kamera sunucusundan gelen görüntüler üzerinden insan, KKD, alan ihlali, forklift-yaya etkileşimi ve tesisinize özel risk kuralları analiz edilebilir. Uygun kamera açılarıyla hızlı pilot çalışma yapılabilir.',
        'Olaylar yönetim paneline kamera, alan, tarih, saat ve ihlal türü bilgisiyle düşer. Böylece AI kamera güvenlik sistemi, mevcut gözetim altyapısını aktif İSG denetimi ve raporlama sürecine bağlar.',
      ],
    }
  }

  if (page.title === foodHygieneTitle) {
    return {
      eyebrow: 'IYESYS Gıda Hijyen Kamera Kontrol Sistemi',
      heading: 'Hijyen kıyafeti kontrolünü kamera analiziyle kayıtlı denetim sürecine dönüştürün.',
      systemLine: 'Sistem; hijyen ekipmanı algılama, kamera analiz katmanı, yönetim paneli bildirimi ve kalite-denetim raporlama katmanlarını birlikte çalıştırır.',
      secondParagraph:
        'Gıda üretim hattında bone, maske, eldiven, önlük ve tesisinize özel hijyen kuralları kamera görüntüleri üzerinden kontrol edilir. Uygun kamera açısı bulunan alanlarda mevcut kameralar kullanılabilir; kritik kontrol noktaları için projeye özel kamera yerleşimi planlanabilir.',
      thirdParagraph:
        'İhlal oluştuğunda kayıt yönetim paneline düşer; kalite, vardiya ve üretim sorumluları alan, saat, hat ve ihlal türüne göre denetim yapabilir. Tekrarlayan hijyen sorunları eğitim, kalite güvence ve müşteri denetimi süreçlerinde somut veriyle takip edilir.',
      overviewIntro:
        'Gıda hijyen tespiti; üretim, paketleme ve geçiş alanlarında hijyen kıyafeti kullanımını kamera ile denetleyen kayıtlı kontrol yapısıdır.',
      searchTitle: 'IYESYS Gıda Hijyen Kamera Kontrol Sistemi',
      searchParagraphs: [
        'IYESYS hijyen kontrol sistemi; gıda güvenliği kamera sistemi, bone maske kontrolü, eldiven tespiti, önlük kontrol sistemi ve yapay zeka hijyen denetimi ihtiyaçları için tasarlanır.',
        'Kamera analiz katmanı, üretim ve paketleme alanlarında hijyen kıyafetlerinin kullanımını takip eder. İhlal tespit edildiğinde olay yönetim paneline görsel kanıt, saat, alan ve kural bilgisiyle aktarılır.',
        'Gıda üretim hattı kamera analizi sayesinde kalite güvence ekipleri hijyen kıyafeti kontrolünü daha tutarlı yönetir. Raporlar denetim hazırlığı, eğitim planı ve tekrar eden ihlal noktalarının iyileştirilmesi için kullanılabilir.',
      ],
    }
  }

  return {
    eyebrow: 'IYESYS Forklift Güvenlik Sistemi',
    heading: 'İnsan, ekipman ve tehlikeli bölge yaklaşımını aynı güvenlik akışında yönetin.',
    systemLine: 'Sistem; forklift kamera sistemi, forklift hassas mesafe kontrol sistemi, operatör kamera izleme ve yönetim paneli katmanlarını birlikte çalıştırır.',
    secondParagraph:
      'Forklift üzerindeki kameralar insanı algıladığında operatör ekranda risk yönünü görür. UWB hassas mesafe cihazı diğer forkliftlere veya tehlikeli bölgelere yaklaşmayı takip eder; saha kuralına göre uyarı, yavaşlatma veya durdurma senaryosu devreye alınabilir.',
    thirdParagraph:
      'Yönetim paneli ise tehlikeli yaklaşmaları, tekrar eden kör nokta problemlerini ve ekipman bazlı olayları raporlayarak İSG ekibine ölçülebilir bir iyileştirme zemini sağlar.',
    overviewIntro:
      'Forklift trafiğinin yoğun olduğu gerçek saha akışında kamera, UWB hassas mesafe cihazı, operatör ekranı ve yönetim paneli birlikte çalışır.',
    searchTitle: 'IYESYS Forklift Güvenlik Sistemi',
    searchParagraphs: [
      'IYESYS forklift güvenlik sistemi; forklift kaza önleme, forklift yaya güvenliği, forklift kamera sistemi ve forklift yavaşlatma/durdurma ihtiyaçlarını tek yapıda toplar. Amaç, operatörün göremediği insanı, diğer forkliftleri ve tehlikeli bölge yaklaşımını sahada anlaşılır uyarıya dönüştürmektir.',
      'Forklift operatörü, kamera izleme sistemi sayesinde ön, arka ve yan kamera görüntüleri monitörden takip edilebilir. İnsan algılama, geri görüş kamera desteği, yön bilgisiyle operatör uyarısı ve sesli ikazlar aynı akışta çalışır.',
      'UWB hassas mesafe kontrol cihazı, forklift-forklift yaklaşmaları ve işletmenin tanımladığı tehlikeli bölgeler için ek güvenlik katmanı sağlar. Riskli mesafe oluştuğunda forklift sesli uyarı sistemi, operatör bildirimi, otomatik yavaşlatma veya durdurma senaryosu devreye alınabilir.',
    ],
  }
}

const getEfficiencyFocusCopy = (page: ServiceDetailContent) => {
  if (page.title === productionEfficiencyTitle) {
    return {
      eyebrow: 'IYESYS Üretim Verimlilik Analizi',
      heading: 'Duruş, çevrim süresi ve kapasite kayıplarını anlaşılır üretim verisine dönüştürün.',
      systemLine: 'Sistem; veri toplama, OEE ve duruş analizi, dashboard-vardiya raporlama ve iyileştirme takip katmanlarını birlikte çalıştırır.',
      secondParagraph:
        'Makine verisi, sensör bilgisi, operatör girişi veya mevcut sistem kayıtları üretim hattına uygun şekilde toplanır. Duruş nedeni, çevrim süresi, fire oranı, vardiya performansı ve kapasite kullanımı tek ekranda okunabilir hale gelir.',
      thirdParagraph:
        'Yönetim paneli, kaybın hangi hat, vardiya, ürün veya istasyonda oluştuğunu gösterir. Böylece üretim verimliliği, OEE takibi, duruş takip sistemi ve çevrim süresi analizi günlük iyileştirme kararlarına bağlanır.',
      overviewIntro:
        'Üretim verimlilik analizi; duruş, çevrim ve kapasite kaybını yöneticinin hızlı okuyacağı canlı göstergelere taşır.',
      searchTitle: 'IYESYS Üretim Verimlilik ve OEE Takip Sistemi',
      searchParagraphs: [
        'IYESYS üretim verimlilik analizi; OEE takibi, duruş takip sistemi, çevrim süresi analizi, vardiya performansı, üretim takip sistemi ve kapasite kullanım analizi ihtiyaçları için geliştirilir.',
        'Sistem, sahadaki makine, sensör, PLC, operatör ekranı veya manuel kayıt kaynaklarından gelen veriyi sade yönetim ekranlarına taşır. Üretim yöneticisi hangi kaybın nerede oluştuğunu, hangi vardiyada tekrar ettiğini ve hangi aksiyonun etkili olduğunu daha net görür.',
        'Hat bazlı dashboard, vardiya raporu, duruş nedeni analizi ve iyileştirme takip yapısı birlikte çalıştığında üretim verimliliği yalnızca raporlanan bir sonuç olmaktan çıkar; günlük yönetilen bir süreç haline gelir.',
      ],
    }
  }

  if (page.title === businessEfficiencyTitle) {
    return {
      eyebrow: 'IYESYS Mağaza ve İşletme Verimlilik Analizi',
      heading: 'Yoğunluk, bekleme ve alan kullanımını işletme kararına bağlayın.',
      systemLine: 'Sistem; alan yoğunluğu analizi, kuyruk-bekleme ölçümü, personel ve alan planlama, şube raporlama paneli katmanlarını birlikte çalıştırır.',
      secondParagraph:
        'Kamera veya sensör kaynaklı akış verileri, müşteri yoğunluğu, bekleme noktası, servis hızı ve alan kullanım eğilimi olarak okunur. Bu yapı mağaza, servis kabul, resepsiyon, market, depo yan alanı veya çok lokasyonlu işletmeler için kurgulanabilir.',
      thirdParagraph:
        'Yönetim paneli; saat, gün, lokasyon, alan ve hizmet noktası kırılımlarında rapor üretir. Böylece mağaza yoğunluk analizi, kuyruk analizi, personel planlama ve alan kullanım analizi daha doğru operasyon kararlarına dönüşür.',
      overviewIntro:
        'Mağaza ve işletme verimlilik analizi; yoğunluk, bekleme ve alan kullanımını operasyon kararına bağlayan sade bir ölçüm yapısı kurar.',
      searchTitle: 'IYESYS Mağaza ve İşletme Verimlilik Analizi',
      searchParagraphs: [
        'IYESYS mağaza yoğunluk analizi; müşteri sayma sistemi, kuyruk analizi, bekleme süresi takibi, ısı haritası analizi, personel planlama ve alan kullanım raporları için veri odaklı bir yapı kurar.',
        'Sistem, işletme içindeki hareketi anonim akış bilgisine dönüştürerek hangi saatte yoğunluk oluştuğunu, hangi noktada bekleme arttığını ve hangi alanların daha verimli kullanılabileceğini gösterir.',
        'Şube raporlama paneli, çok lokasyonlu işletmelerde karşılaştırılabilir metrikler üretir. Böylece personel planı, alan düzeni, hizmet noktası kapasitesi ve müşteri deneyimi daha ölçülebilir şekilde yönetilir.',
      ],
    }
  }

  return {
    eyebrow: 'IYESYS Yapay Zeka Kalite Kontrol Sistemi',
    heading: 'Üretim hattındaki görsel kalite problemlerini daha erken ve kayıtlı şekilde yakalayın.',
    systemLine: 'Sistem; kamera-lens-aydınlatma kurgusu, yapay zeka görüntü işleme modeli, hat entegrasyonu ve kalite raporlama paneli katmanlarını birlikte çalıştırır.',
    secondParagraph:
      'Ürüne özel kusur tanımları, gerçek üretim örnekleriyle netleştirilir. Eksik parça, yanlış montaj, yüzey kusuru, çapak, renk farkı, etiket doğrulama veya görsel ölçü sapması için kamera ve aydınlatma düzeni sahaya göre hazırlanır.',
    thirdParagraph:
      'Kalite paneli; hata tipi, istasyon, parti, zaman ve ürün bilgisini kayıt altına alır. Böylece yapay zeka kalite kontrol, görüntü işleme kalite kontrol ve hat üstü kalite kontrol çalışmaları operatör kararını destekleyen ölçülebilir bir yapıya dönüşür.',
    overviewIntro:
      'Kalite kontrol sistemi; operatör gözlemini destekleyen, kayıtlı ve tekrar edilebilir bir kalite denetim akışı oluşturur.',
    searchTitle: 'IYESYS Yapay Zeka Destekli Kalite Kontrol Sistemi',
    searchParagraphs: [
      'IYESYS yapay zeka kalite kontrol çözümü; görüntü işleme kalite kontrol, machine vision kalite kontrol, hat üstü kalite kontrol, yüzey kusuru tespiti, eksik parça kontrolü ve kamera ile kalite kontrol ihtiyaçları için geliştirilir.',
      'Kamera, lens, ışık ve parça konumu doğru planlandığında sistem üretim hattındaki kalite sapmalarını daha tutarlı algılar. Uygulama; montaj doğrulama, yüzey kontrolü, paketleme kontrolü, etiket doğrulama ve ürün yön kontrolü gibi senaryolara göre yapılandırılır.',
      'Hatalı ürün ayrıştırma, operatör uyarısı, PLC bağlantısı ve kalite raporlama paneli birlikte çalışabilir. Amaç, kalite problemini hat sonunda fark etmek yerine üretim akışının içinde görünür hale getirmektir.',
    ],
  }
}

const getSolutionFocusCopy = (page: ServiceDetailContent): SolutionFocusCopy | null => {
  if (page.title === researchConsultingTitle) {
    return {
      eyebrow: 'IYESYS Ar-Ge ve Mühendislik Danışmanlığı',
      heading: 'Teknik fikri, yatırım kararına hazır ve ölçülebilir bir geliştirme planına dönüştürün.',
      systemLine: 'Çalışma; problem tanımı, teknik fizibilite, çalışan MVP, saha pilotu ve ürünleşme yol haritasını tek mühendislik akışında birleştirir.',
      secondParagraph:
        'Elektronik, mekanik, gömülü yazılım, sensör, yapay zeka ve otomasyon seçenekleri aynı kabul kriterleriyle değerlendirilir. Kritik belirsizlikler, uzun geliştirme sürecine girilmeden önce test düzeneği veya çalışan prototip üzerinde ölçülür.',
      thirdParagraph:
        'Doğrulanan çözüm gerçek saha koşullarında pilot kullanıma taşınır. Performans, dayanım, entegrasyon ve kullanıcı geri bildirimleri kayıt altına alınarak bütçe, takvim, üretilebilirlik ve ölçekleme kararları somut veriye bağlanır.',
      overviewTitle: 'Belirsiz bir fikirden kontrollü Ar-Ge programına',
      overviewIntro: 'Her proje, çözülmesi gereken problemi ve doğrulanması gereken en kritik teknik varsayımı görünür hale getirerek başlar.',
      workflowTitle: 'Fizibiliteden saha pilotuna net süreç',
      workflowIntro: 'Önce riskler ayrıştırılır; ardından en kritik varsayımı ölçecek prototip geliştirilir ve saha verisiyle doğrulanır.',
      searchTitle: 'IYESYS Ar-Ge ve Mühendislik Danışmanlığı',
      searchParagraphs: [
        'IYESYS Ar-Ge ve mühendislik danışmanlığı; teknik fizibilite, MVP geliştirme, prototip tasarımı, saha pilotu ve ürünleşme yol haritası ihtiyaçlarını tek çalışma yapısında toplar. Amaç, yeni ürün veya sistem fikrinin teknik risklerini yatırım büyümeden önce ölçülebilir hale getirmektir.',
        'Elektronik kart, sensör, kamera, gömülü yazılım, haberleşme, mekanik tasarım ve otomasyon bileşenleri gerçek kullanım koşullarıyla birlikte değerlendirilir. Alternatifler; maliyet, süre, entegrasyon, performans ve bakım kriterleri üzerinden karşılaştırılır.',
        'Çalışan prototip ve saha pilotundan elde edilen sonuçlar; ürün mimarisi, üretilebilirlik, sertifikasyon, servis ve ölçekleme kararlarına girdi olur. Böylece Ar-Ge projesi sunum seviyesinde kalmaz, uygulanabilir teknik yol haritasına dönüşür.',
      ],
      outcomesTitle: 'Ar-Ge programının kazandırdıkları',
      useCasesTitle: 'Danışmanlık çalışma alanları',
      ctaTitle: 'Teknik fikriniz için ilk doğrulama planını birlikte çıkaralım.',
      ctaCopy: 'Problemi, saha koşullarını ve kritik teknik belirsizlikleri kısa bir keşif görüşmesinde netleştirip uygulanabilir ilk adımı belirleyelim.',
    }
  }

  if (page.title === productDevelopmentTitle) {
    return {
      eyebrow: 'IYESYS Endüstriyel Ürün Geliştirme',
      heading: 'Çalışan prototipi, sahada doğrulanmış ve üretime hazır bir ürüne taşıyın.',
      systemLine: 'Ürün geliştirme akışı; elektronik, gömülü yazılım, mekanik tasarım, haberleşme, kullanıcı arayüzü ve saha testini aynı ürün mimarisinde birleştirir.',
      secondParagraph:
        'Ürünün temel değerini gösterecek MVP önce en kritik fonksiyonlara odaklanır. Sensör doğruluğu, algoritma performansı, enerji ihtiyacı, haberleşme kararlılığı, montaj ve kullanım akışı erken prototiplerle test edilir.',
      thirdParagraph:
        'Saha pilotu sonrasında tasarım revizyonları, üretim dosyaları, teknik dokümantasyon, servis yaklaşımı ve versiyon planı tamamlanır. Böylece prototip, tekrarlanabilir üretime ve sürdürülebilir ürün yönetimine hazırlanır.',
      overviewTitle: 'Prototipten üretilebilir ürün mimarisine',
      overviewIntro: 'Endüstriyel ürünün bütün katmanları, laboratuvar performansı kadar montaj, bakım ve gerçek saha koşulları düşünülerek tasarlanır.',
      workflowTitle: 'MVP’den üretime hazırlığa kontrollü akış',
      workflowIntro: 'Kritik fonksiyonlar önce prototipte doğrulanır; saha pilotundan gelen veriler ürün ve üretim dosyalarına işlenir.',
      searchTitle: 'IYESYS Endüstriyel Ürün Geliştirme Hizmeti',
      searchParagraphs: [
        'IYESYS ürün geliştirme hizmeti; endüstriyel prototip, IoT ürün geliştirme, gömülü sistem tasarımı, kamera ve sensör ürünü, mekanik gövde tasarımı ve pilot üretim çalışmalarını bütünleşik biçimde yürütür.',
        'Elektronik donanım, firmware, veri haberleşmesi, web veya mobil arayüz ve mekanik tasarım aynı kabul kriterleriyle geliştirilir. Ürünün temel değerini doğrulayan MVP sayesinde teknik riskler ve kullanıcı ihtiyaçları erken aşamada görünür hale gelir.',
        'Saha pilotu tamamlandığında üretilebilirlik, test prosedürü, teknik dokümantasyon, bakım kolaylığı ve versiyon yönetimi planlanır. Amaç yalnızca çalışan bir demo değil; gerçek kullanım koşullarına hazır, geliştirilebilir bir ürün altyapısı oluşturmaktır.',
      ],
      outcomesTitle: 'Ürün geliştirme kazanımları',
      useCasesTitle: 'Geliştirilen ürün türleri',
      ctaTitle: 'Ürün fikrinizi çalışan bir ilk prototipe dönüştürelim.',
      ctaCopy: 'Kullanım senaryosunu, kritik fonksiyonları ve saha koşullarını birlikte netleştirip en doğru MVP kapsamını oluşturalım.',
    }
  }

  if (page.title === fleetManagementTitle) {
    return {
      eyebrow: 'IYESYS Filo Yönetimi ve Araç Takip',
      heading: 'Konum bilgisini, günlük operasyonu yöneten canlı filo verisine dönüştürün.',
      systemLine: 'Sistem; canlı araç haritası, rota ve bölge kuralları, sürüş-kullanım analizi, görev ve bakım yönetimi katmanlarını tek operasyon panelinde birleştirir.',
      secondParagraph:
        'GPS ve IoT cihazlarından gelen konum, hız, hareket ve bekleme bilgisi; araç, sürücü, görev ve zaman verisiyle eşleştirilir. Rota sapması, uzun bekleme, yasak bölge girişi veya geciken görev gibi olaylar otomatik kurallarla görünür hale gelir.',
      thirdParagraph:
        'Kilometre ve çalışma süresi kayıtları bakım planına bağlanır; operasyon ekipleri araç uygunluğunu, görev ilerlemesini ve geçmiş performansı aynı ekrandan izler. Yönetim raporları rota, kapasite ve filo maliyeti kararları için karşılaştırılabilir veri üretir.',
      overviewTitle: 'Haritadaki noktadan yönetilebilir filo operasyonuna',
      overviewIntro: 'Araç takibi, yalnızca konum göstermek yerine rota, görev, sürücü ve bakım kararlarını aynı veri akışında desteklemelidir.',
      workflowTitle: 'Filo keşfinden canlı operasyona',
      workflowIntro: 'Araç tipleri ve saha kuralları netleştirilir; cihaz bağlantısı, alarm senaryoları ve yönetim ekranları pilot filoda doğrulanır.',
      searchTitle: 'IYESYS Filo Yönetimi ve Araç Takip Sistemi',
      searchParagraphs: [
        'IYESYS filo yönetimi ve araç takip sistemi; GPS araç takip, canlı filo haritası, rota yönetimi, geofence, sürücü davranışı analizi, görev takibi ve araç bakım planını tek operasyon yapısında toplar.',
        'Araçların konumu, hızı, hareket yönü, bekleme süresi ve son iletişim bilgisi canlı haritada izlenir. Rota dışına çıkma, uzun rölanti, kritik bölgeye giriş, hız ihlali veya görev gecikmesi gibi durumlar işletmeye özel uyarı kurallarıyla takip edilir.',
        'Kilometre ve kullanım yoğunluğu bakım kayıtlarıyla eşleştirildiğinde filo kullanılabilirliği daha doğru planlanır. Servis, lojistik, saha ve işletme içi taşıma filoları; günlük operasyonu ve geçmiş performansı aynı raporlama panelinden yönetebilir.',
      ],
      outcomesTitle: 'Filo yönetiminin kazandırdıkları',
      useCasesTitle: 'Uygun filo ve operasyonlar',
      ctaTitle: 'Filo operasyonunuzu canlı ve ölçülebilir hale getirelim.',
      ctaCopy: 'Araç yapınızı, rota kurallarınızı, görev akışınızı ve bakım ihtiyaçlarınızı birlikte inceleyip uygun pilot kapsamını belirleyelim.',
    }
  }

  if (page.title === progressPaymentTitle) {
    return {
      eyebrow: 'IYESYS Hakediş ve Saha Operasyon Yönetimi',
      heading: 'Sahada tamamlanan işi, doğrulanabilir ve onaylı hakediş kaydına dönüştürün.',
      systemLine: 'Sistem; poz ve iş kalemi yönetimi, mobil saha kaydı, fotoğraflı kanıt, kontrol-revizyon akışı ve dönemsel hakediş raporunu tek operasyon panelinde birleştirir.',
      secondParagraph:
        'Saha ekibi tamamlanan işi miktar, ölçü birimi, lokasyon, tarih, açıklama ve fotoğraf bilgisiyle ilgili iş kalemine kaydeder. Her kayıt proje, ekip, taşeron ve dönem bilgisiyle eşleştirilerek ofiste yeniden veri toplama ihtiyacını azaltır.',
      thirdParagraph:
        'Kontrol ekibi kaydı aynı ekran üzerinden inceler; eksik bilgiyi revizyona gönderir veya uygun işi onaylar. Onaylanan işler dönemsel ilerleme ve hakediş raporlarına taşınırken bütün karar geçmişi, kanıtlarıyla birlikte izlenebilir kalır.',
      overviewTitle: 'Saha kaydından onaylı hakediş raporuna',
      overviewIntro: 'Hakediş yönetimi, sahada tamamlanan iş ile ofiste hazırlanan rapor arasında kesintisiz ve doğrulanabilir bir kayıt zinciri kurmalıdır.',
      workflowTitle: 'Proje kurulumundan dönemsel hakedişe',
      workflowIntro: 'Pozlar ve yetkiler tanımlanır; mobil saha kayıtları kontrol ve revizyon adımlarından geçerek onaylı dönem raporuna dönüşür.',
      searchTitle: 'IYESYS Hakediş ve Saha Operasyon Yönetim Sistemi',
      searchParagraphs: [
        'IYESYS hakediş takip yazılımı; poz ve iş kalemi yönetimi, fotoğraflı saha kaydı, konum ve zaman doğrulaması, taşeron ilerleme takibi, kontrol-onay akışı ve dönemsel hakediş raporlamasını tek dijital yapıda toplar.',
        'Mobil saha uygulaması üzerinden girilen miktar, açıklama ve görsel kanıtlar ilgili proje, lokasyon, ekip ve sözleşme kalemine bağlanır. Kontrol ekibi kayıtları inceleyebilir, revizyon isteyebilir ve uygun işleri kayıtlı biçimde onaylayabilir.',
        'Onaylanan saha verileri ilerleme özeti ve hakediş raporuna otomatik aktarıldığında rapor hazırlama süresi kısalır, itirazlar azalır ve proje hafızası kişilere bağlı kalmaz. Sistem; montaj, bakım, teknik servis, şantiye ve taşeron operasyonlarına göre uyarlanabilir.',
      ],
      outcomesTitle: 'Hakediş yönetiminin kazandırdıkları',
      useCasesTitle: 'Uygun proje ve operasyonlar',
      ctaTitle: 'Saha ilerlemesini kanıtlı ve onaylı bir hakediş akışına bağlayalım.',
      ctaCopy: 'Proje kalemlerinizi, saha kayıt biçiminizi, kontrol rollerini ve dönemsel rapor ihtiyacınızı birlikte inceleyip uygun pilot kapsamını belirleyelim.',
    }
  }

  return null
}

export default function ServiceDetailPage({ page }: ServiceDetailPageProps) {
  const family = getFamily(page)
  const variant = getVariant(page)
  const seo = getServiceSeo(page.title)
  const accentStyle = {
    '--accent': page.accent,
    '--accent-rgb': page.accentRgb,
  } as CSSProperties

  return (
    <div className="min-h-screen bg-white text-slate-950" style={accentStyle}>
      <FamilyHero page={page} family={family} />
      <VisualStorySection page={page} family={family} />

      {family === 'automation' ? (
        <>
          <WorkflowSection page={page} family={family} variant={variant} />
          <OverviewSection page={page} family={family} variant={variant} />
          <CapabilitySection page={page} family={family} variant={variant} />
        </>
      ) : (
        <>
          <OverviewSection page={page} family={family} variant={variant} />
          <CapabilitySection page={page} family={family} variant={variant} />
          <WorkflowSection page={page} family={family} variant={variant} />
        </>
      )}

      <SearchIntentSection page={page} family={family} title={seo.title} copy={seo.copy} keywords={seo.keywords} />
      <OutcomesSection page={page} family={family} variant={variant} />
      <CtaBand page={page} family={family} />
    </div>
  )
}

function FamilyHero({ page, family }: ServiceDetailPageProps & { family: ServiceCategory }) {
  if (family === 'efficiency') return <EfficiencyHero page={page} family={family} />
  if (family === 'automation') return <AutomationHero page={page} family={family} />
  if (family === 'software') return <SoftwareHero page={page} family={family} />
  if (family === 'engineering') return <EngineeringHero page={page} family={family} />
  if (family === 'operations') return <OperationsHero page={page} family={family} />

  return <SafetyHero page={page} family={family} />
}

function HeroIntro({
  page,
  center = false,
  dark = false,
  showEyebrow = false,
}: ServiceDetailPageProps & { family: ServiceCategory; center?: boolean; dark?: boolean; showEyebrow?: boolean }) {
  const justify = usesSafetyFocusTemplate(page)

  return (
    <div className={center ? 'mx-auto max-w-5xl text-center' : 'max-w-3xl'}>
      {showEyebrow ? (
        <span className="mb-5 inline-flex rounded-full border bg-white/80 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] shadow-sm" style={{ borderColor: tint(page.accentRgb, 0.24), color: page.accent }}>
          {page.eyebrow}
        </span>
      ) : null}
      <h1 className={`text-4xl font-black leading-[1.04] tracking-tight sm:text-5xl ${center ? 'lg:text-6xl' : 'lg:text-[52px]'} ${dark ? 'text-white' : 'text-slate-950'}`}>
        {page.title}
      </h1>
      <p className={`mt-7 text-lg font-medium leading-8 sm:text-xl ${center ? 'mx-auto max-w-4xl' : 'max-w-3xl'} ${dark ? 'text-slate-200' : 'text-slate-700'} ${justify ? 'text-justify [text-wrap:pretty]' : ''}`}>
        {page.lead}
      </p>
      <div className={`mt-9 flex flex-col gap-3 sm:flex-row ${center ? 'justify-center' : ''}`}>
        <HeroPrimaryButton page={page} />
        <HeroSecondaryButton light={!dark} />
      </div>
    </div>
  )
}

function SafetyHero({ page, family }: ServiceDetailPageProps & { family: ServiceCategory }) {
  const theme = serviceCategoryThemes[family]
  const heroVisuals = getHeroVisuals(page)
  const heroAspect = hasLetterboxedVisual(heroVisuals) ? 'aspect-[1/1]' : 'aspect-[16/11]'
  const focusedSafety = usesSafetyFocusTemplate(page)

  return (
    <section className="relative isolate overflow-hidden bg-white pt-32 text-slate-950">
      <div
        className={`${focusedSafety ? 'absolute inset-0' : 'absolute inset-x-0 top-0 h-[66%]'} -z-10`}
        style={{
          background: focusedSafety
            ? `radial-gradient(circle at 16% 8%, ${tint(theme.accentRgb, 0.07)} 0%, ${tint(theme.accentRgb, 0.025)} 28%, transparent 54%), linear-gradient(145deg, ${tint(theme.accentRgb, 0.045)} 0%, rgba(240,253,244,0.24) 38%, rgba(255,255,255,0.96) 76%, #fff 100%)`
            : `linear-gradient(135deg, ${tint(theme.accentRgb, 0.16)}, rgba(240,253,244,0.72) 42%, #fff 100%)`,
        }}
      />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <HeroIntro page={page} family={family} />

        <div className="relative sm:pb-12">
          <div className="overflow-hidden rounded-[1.75rem] border bg-white shadow-2xl" style={{ borderColor: theme.border, boxShadow: `0 28px 70px ${tint(theme.accentRgb, 0.18)}` }}>
            <VisualRotator visuals={heroVisuals} className={`${heroAspect} w-full`} imageClassName="h-full w-full object-cover" />
          </div>
          <div className="relative z-10 mt-[-3rem] px-4 sm:absolute sm:inset-x-4 sm:bottom-0 sm:mt-0 sm:px-0">
            <HeroStats page={page} family={family} />
          </div>
        </div>
      </div>
    </section>
  )
}

function EfficiencyHero({ page, family }: ServiceDetailPageProps & { family: ServiceCategory }) {
  const theme = serviceCategoryThemes[family]
  const visual = getPageVisuals(page)[0]
  const focusedEfficiency = usesEfficiencyFocusTemplate(page)

  return (
    <section className="relative isolate overflow-hidden bg-[#f7fbff] pt-32">
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `linear-gradient(90deg, ${tint(theme.accentRgb, 0.08)} 0%, #eef7ff 56%, #fff 100%)`,
        }}
      />
      <div
        className="absolute bottom-0 left-0 top-24 z-0 w-full lg:w-[66%]"
        style={{
          WebkitMaskImage: 'linear-gradient(90deg, #000 0%, #000 46%, rgba(0,0,0,0.68) 62%, transparent 100%)',
          maskImage: 'linear-gradient(90deg, #000 0%, #000 46%, rgba(0,0,0,0.68) 62%, transparent 100%)',
        }}
      >
        <img src={visual.src} alt={visual.alt} className="h-full w-full object-cover object-center" />
      </div>
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(239,247,255,0.08) 36%, rgba(239,247,255,0.86) 57%, #fff 100%), radial-gradient(circle at 80% 20%, ${tint(theme.accentRgb, 0.14)}, transparent 34%)`,
        }}
      />
      <div className="absolute inset-0 z-0 opacity-[0.32]" style={{ backgroundImage: `linear-gradient(${tint(theme.accentRgb, 0.075)} 1px, transparent 1px), linear-gradient(90deg, ${tint(theme.accentRgb, 0.075)} 1px, transparent 1px)`, backgroundSize: '46px 46px' }} />
      <div className={`relative z-10 mx-auto grid min-h-[650px] max-w-7xl items-center gap-10 px-4 pb-20 sm:px-6 lg:min-h-[720px] lg:px-8 ${focusedEfficiency ? 'lg:grid-cols-[0.82fr_1.18fr]' : 'lg:grid-cols-[0.98fr_1.02fr]'}`}>
        <div className="hidden lg:block" />
        <div className={`ml-auto text-right ${focusedEfficiency ? 'max-w-[760px]' : 'max-w-[650px]'}`}>
          {!focusedEfficiency ? (
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border bg-white/75 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] shadow-sm backdrop-blur" style={{ borderColor: theme.border, color: theme.text }}>
              <LineChart className="h-4 w-4" />
              Endüstriyel Verimlilik
            </span>
          ) : null}
          <h1 className="text-4xl font-black leading-[1.04] tracking-tight text-slate-950 sm:text-5xl lg:text-[58px]">
            {page.title}
          </h1>
          <p className={`mt-7 font-medium text-slate-700 ${focusedEfficiency ? 'ml-auto max-w-[760px] text-lg leading-8 sm:text-[19px]' : 'text-lg leading-8 sm:text-xl'}`}>
            {page.lead}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:justify-end">
            <HeroPrimaryButton page={page} />
            <HeroSecondaryButton light />
          </div>
        </div>
      </div>
    </section>
  )
}

function AutomationHero({ page, family }: ServiceDetailPageProps & { family: ServiceCategory }) {
  const visuals = getPageVisuals(page)

  return (
    <section className="bg-white pt-32 text-slate-950">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8">
        <div className="border-l-4 pl-6" style={{ borderColor: page.accent }}>
          <HeroIntro page={page} family={family} />
        </div>

        <div className="relative">
          <div
            className="absolute -inset-4 -z-10 rounded-[2rem] opacity-70 blur-2xl"
            style={{ background: `linear-gradient(135deg, ${tint(page.accentRgb, 0.18)}, transparent 62%)` }}
          />
          <img src={visuals[0].src} alt={visuals[0].alt} className="aspect-[16/10] w-full rounded-[1.35rem] object-cover shadow-[0_30px_80px_rgba(15,23,42,0.14)]" />
        </div>
      </div>
    </section>
  )
}

function SoftwareHero({ page, family }: ServiceDetailPageProps & { family: ServiceCategory }) {
  const theme = serviceCategoryThemes[family]
  const visuals = getPageVisuals(page)

  return (
    <section className="relative isolate overflow-hidden bg-white pt-32">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: `radial-gradient(circle at 82% 16%, ${tint(theme.accentRgb, 0.18)}, transparent 34%), radial-gradient(circle at 10% 72%, ${tint(theme.accentRgb, 0.08)}, transparent 30%), linear-gradient(180deg, #fff 0%, #fbf7ff 100%)`,
        }}
      />
      <div className="absolute inset-0 -z-10 opacity-[0.28]" style={{ backgroundImage: `linear-gradient(${tint(theme.accentRgb, 0.08)} 1px, transparent 1px), linear-gradient(90deg, ${tint(theme.accentRgb, 0.08)} 1px, transparent 1px)`, backgroundSize: '48px 48px' }} />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8">
        <div className="relative order-1">
          <div
            className="absolute -inset-5 -z-10 rounded-[2rem] opacity-70 blur-2xl"
            style={{ background: `linear-gradient(135deg, ${tint(theme.accentRgb, 0.18)}, transparent 62%)` }}
          />
          <img
            src={visuals[0].src}
            alt={visuals[0].alt}
            className="aspect-[16/10] w-full rounded-[1.65rem] object-cover shadow-[0_32px_86px_rgba(88,28,135,0.18)]"
          />
        </div>

        <div className="order-2 max-w-3xl">
          <h1 className="text-4xl font-black leading-[1.04] tracking-tight text-slate-950 sm:text-5xl lg:text-[54px]">
            {page.title}
          </h1>
          <p className="mt-7 max-w-3xl text-left text-lg font-medium leading-8 text-slate-700 [text-wrap:pretty] sm:text-xl">
            {page.lead}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <HeroPrimaryButton page={page} />
            <HeroSecondaryButton light />
          </div>
        </div>
      </div>
    </section>
  )
}

function EngineeringHero({ page, family }: ServiceDetailPageProps & { family: ServiceCategory }) {
  const theme = serviceCategoryThemes[family]
  const visuals = getPageVisuals(page)
  const mechanicalDesign = page.title === mechanicalDesignTitle

  return (
    <section className="relative overflow-hidden bg-white pt-32">
      <div className="absolute inset-0 opacity-60" style={{ backgroundImage: `linear-gradient(${tint(theme.accentRgb, 0.12)} 1px, transparent 1px), linear-gradient(90deg, ${tint(theme.accentRgb, 0.12)} 1px, transparent 1px)`, backgroundSize: '52px 52px' }} />
      <div className={`relative mx-auto grid items-center gap-12 px-4 pb-20 sm:px-6 lg:px-8 ${mechanicalDesign ? 'max-w-[1320px] lg:grid-cols-[0.88fr_1.12fr]' : 'max-w-7xl lg:grid-cols-[0.92fr_1.08fr]'}`}>
        <div className="order-2 lg:order-2">
          <div
            className={mechanicalDesign ? 'bg-transparent' : 'rounded-[1.75rem] border bg-white p-4 shadow-2xl'}
            style={mechanicalDesign ? undefined : { borderColor: theme.border, boxShadow: `0 28px 70px ${tint(theme.accentRgb, 0.16)}` }}
          >
            <img
              src={visuals[0].src}
              alt={visuals[0].alt}
              className={`${usesEngineeringFocusTemplate(page) ? 'aspect-[16/10]' : 'aspect-[4/3]'} w-full ${mechanicalDesign ? 'scale-[1.04] bg-transparent object-contain' : 'rounded-[1.1rem] bg-white object-cover'}`}
            />
          </div>
          {mechanicalDesign ? null : <HeroStats page={page} family={family} className="mt-4" />}
        </div>

        <div className="order-1 max-w-2xl text-left lg:order-1">
          <HeroIntro page={page} family={family} showEyebrow={usesEngineeringFocusTemplate(page)} />
        </div>
      </div>
    </section>
  )
}

function OperationsHero({ page, family }: ServiceDetailPageProps & { family: ServiceCategory }) {
  const theme = serviceCategoryThemes[family]
  const visuals = getPageVisuals(page)

  return (
    <section className="relative isolate overflow-hidden bg-white pt-32">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: `radial-gradient(circle at 12% 18%, ${tint(theme.accentRgb, 0.14)} 0%, ${tint(theme.accentRgb, 0.07)} 28%, transparent 58%), linear-gradient(180deg, #fff8ef 0%, rgba(255,250,243,0.88) 38%, rgba(255,255,255,0.72) 66%, #fff 84%, #fff 100%)`,
        }}
      />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <HeroIntro page={page} family={family} showEyebrow={usesOperationsFocusTemplate(page)} />

        <div className="relative">
          <div className="overflow-hidden rounded-xl border bg-white p-3 shadow-2xl" style={{ borderColor: theme.border }}>
            <img src={visuals[0].src} alt={visuals[0].alt} className="aspect-[16/10] w-full rounded-lg object-cover" />
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {page.stats.map((item) => (
              <div key={`${item.value}-${item.label}`} className="rounded-lg border bg-white p-4 shadow-sm" style={{ borderColor: theme.border }}>
                <div className="text-lg font-black text-slate-950">{item.value}</div>
                <div className="mt-1 text-xs font-bold leading-5" style={{ color: theme.text }}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function VisualStorySection({ page, family }: ServiceDetailPageProps & { family: ServiceCategory }) {
  if (usesSafetyFocusTemplate(page)) return <SafetyFocusVisualStorySection page={page} family={family} />
  if (usesEfficiencyFocusTemplate(page)) return <EfficiencyFocusVisualStorySection page={page} family={family} />
  if (usesMechanicalFocusTemplate(page)) return <MechanicalFocusVisualStorySection page={page} family={family} />
  if (usesEngineeringFocusTemplate(page) || usesOperationsFocusTemplate(page)) return <SolutionFocusVisualStorySection page={page} family={family} />
  if (family === 'automation') return <AutomationFocusVisualStorySection page={page} family={family} />
  if (family === 'software') return <SoftwareFocusVisualStorySection page={page} family={family} />

  const theme = serviceCategoryThemes[family]
  const visuals = getPageVisuals(page)
  const storyVisuals = visuals.length > 1 ? visuals.slice(1) : visuals
  const story = familyStories[family]
  const darkPanel = false
  const imageRadius = family === 'engineering' ? 'rounded-[1.5rem]' : 'rounded-lg'
  const storyAspect = hasLetterboxedVisual(storyVisuals) ? 'aspect-[1/1]' : 'aspect-[16/9]'

  return (
    <section className={`py-18 ${family === 'efficiency' ? 'bg-white' : family === 'engineering' ? 'bg-slate-50' : 'bg-white'}`}>
      <div className={`mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:px-8 ${
        family === 'efficiency'
          ? 'lg:grid-cols-[0.92fr_1.08fr]'
          : family === 'engineering'
            ? 'lg:grid-cols-[0.9fr_1.1fr]'
            : 'lg:grid-cols-[0.9fr_1.1fr]'
      }`}>
        <div className="grid gap-4">
          <div className={`overflow-hidden border bg-slate-100 shadow-sm ${imageRadius}`} style={{ borderColor: theme.border }}>
            <VisualRotator visuals={storyVisuals} className={`${storyAspect} w-full`} imageClassName="h-full w-full object-cover" />
          </div>
          <div className="grid gap-4">
            <div className={`border bg-white p-6 ${imageRadius}`} style={{ borderColor: theme.border }}>
              <span className="text-xs font-black uppercase tracking-[0.18em]" style={{ color: theme.text }}>
                Öne çıkan yapı
              </span>
              <div className="mt-5 space-y-4">
                {page.capabilities.slice(0, 2).map((item) => (
                  <div key={item.title} className="border-l-2 pl-4" style={{ borderColor: page.accent }}>
                    <h3 className="text-sm font-black text-slate-950">{item.title}</h3>
                    <p className="mt-1 text-justify text-sm leading-6 text-slate-600 [text-wrap:pretty]">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div
              className={`flex min-h-[230px] flex-col justify-center border p-6 ${imageRadius} ${darkPanel ? 'bg-slate-950 text-white' : 'bg-white text-slate-950'}`}
              style={{ borderColor: theme.border, boxShadow: `inset 0 0 0 1px ${tint(theme.accentRgb, 0.04)}` }}
            >
              <span className="text-xs font-black uppercase tracking-[0.18em]" style={{ color: darkPanel ? theme.accent : theme.text }}>{story.label}</span>
              <p className={`mt-4 text-justify text-base font-semibold leading-8 [text-wrap:pretty] ${darkPanel ? 'text-slate-200' : 'text-slate-700'}`}>{story.line}</p>
            </div>
          </div>
        </div>

        <div className={`flex flex-col justify-center border bg-white p-8 shadow-sm ${imageRadius}`} style={{ borderColor: theme.border }}>
          <span className="text-sm font-black uppercase tracking-[0.18em]" style={{ color: theme.text }}>
            {story.label}
          </span>
          <h2 className="mt-4 text-2xl font-black leading-[1.16] tracking-tight text-slate-950 sm:text-3xl">
            {story.heading}
          </h2>
          <p className="mt-5 text-justify text-lg leading-9 text-slate-700 [text-wrap:pretty]">{page.description}</p>
        </div>
      </div>
    </section>
  )
}

function SolutionFocusVisualStorySection({ page, family }: ServiceDetailPageProps & { family: ServiceCategory }) {
  const theme = serviceCategoryThemes[family]
  const copy = getSolutionFocusCopy(page)
  const visuals = getPageVisuals(page)
  const storyVisual = visuals[1] || visuals[0]
  const operations = family === 'operations'

  if (!copy) return null

  return (
    <section className="relative overflow-hidden bg-white py-20">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: operations
            ? `radial-gradient(circle at 88% 16%, ${tint(page.accentRgb, 0.1)}, transparent 30%), linear-gradient(180deg, #fff 0%, #fffaf3 38%, rgba(255,250,243,0.56) 66%, #fff 86%, #fff 100%)`
            : `radial-gradient(circle at 12% 14%, ${tint(page.accentRgb, 0.09)}, transparent 30%), radial-gradient(circle at 88% 58%, ${tint(page.accentRgb, 0.06)}, transparent 28%), linear-gradient(180deg, #fff 0%, #f8fafc 28%, #f8fafc 64%, #fff 86%, #fff 100%)`,
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <div>
            <span className="text-sm font-black uppercase tracking-[0.18em]" style={{ color: page.accent }}>
              {copy.eyebrow}
            </span>
            <h2 className="mt-4 max-w-xl text-3xl font-black leading-[1.12] tracking-tight text-slate-950 sm:text-4xl">
              {copy.heading}
            </h2>
            <div className="mt-7 border-l-2 pl-5 text-sm font-bold leading-7 text-slate-700" style={{ borderColor: page.accent }}>
              {copy.systemLine}
            </div>
          </div>

          <div className="space-y-5 text-justify text-lg leading-9 text-slate-700 [text-wrap:pretty]">
            <p>{copy.secondParagraph}</p>
            <p>{copy.thirdParagraph}</p>
          </div>
        </div>

        <div className={`mt-14 grid gap-10 lg:items-center ${operations ? 'lg:grid-cols-[0.94fr_1.06fr]' : 'lg:grid-cols-[1.12fr_0.88fr]'}`}>
          <ScrollReveal className={operations ? 'lg:order-2' : ''}>
            <div className="relative">
              <div
                className="absolute -inset-5 -z-10 rounded-[2.5rem] blur-2xl"
                style={{ background: `linear-gradient(135deg, ${tint(page.accentRgb, 0.18)}, transparent 64%)` }}
              />
              <div
                className={`overflow-hidden bg-white shadow-[0_34px_90px_rgba(15,23,42,0.14)] ${operations ? 'rounded-[1.35rem]' : 'rounded-[2rem]'}`}
                style={{ boxShadow: `0 34px 90px rgba(15,23,42,0.14), 0 0 0 1px ${tint(theme.accentRgb, 0.18)}` }}
              >
                <img src={storyVisual.src} alt={storyVisual.alt} className="aspect-[16/10] w-full object-cover object-center" />
              </div>
            </div>
          </ScrollReveal>

          <div className={`grid gap-4 ${operations ? 'lg:order-1 sm:grid-cols-2 lg:grid-cols-1' : ''}`}>
            {page.capabilities.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 110}>
                <div className={`border bg-white p-5 shadow-sm ${operations ? 'rounded-xl' : 'rounded-[1.15rem]'}`} style={{ borderColor: theme.border }}>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-xs font-black text-white" style={{ backgroundColor: page.accent }}>
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <div>
                      <h3 className="text-base font-black leading-6 text-slate-950">{item.title}</h3>
                      <p className="mt-2 text-justify text-sm leading-7 text-slate-600 [text-wrap:pretty]">{item.desc}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function MechanicalFocusVisualStorySection({ page, family }: ServiceDetailPageProps & { family: ServiceCategory }) {
  const theme = serviceCategoryThemes[family]
  const visuals = getPageVisuals(page)
  const storyVisual = visuals[1] || visuals[0]

  return (
    <section className="relative overflow-hidden bg-white py-20">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(circle at 12% 12%, ${tint(page.accentRgb, 0.07)}, transparent 30%), radial-gradient(circle at 88% 68%, ${tint(page.accentRgb, 0.045)}, transparent 28%), linear-gradient(180deg, #fff 0%, rgba(240,253,250,0.28) 52%, #fff 100%)`,
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
          <div>
            <span className="text-sm font-black uppercase tracking-[0.18em]" style={{ color: theme.text }}>
              3D CAD Tasarım ve Prototip
            </span>
            <h2 className="mt-4 max-w-xl text-3xl font-black leading-[1.12] tracking-tight text-slate-950 sm:text-4xl">
              Fikirden üretilebilir parçaya, ölçülü ve kontrollü bir mühendislik akışı.
            </h2>
          </div>

          <div className="space-y-5 text-justify text-lg leading-9 text-slate-700 [text-wrap:pretty]">
            <p>
              Mekanik 3D tasarım; sahadaki ihtiyacın, bağlantı noktalarının ve çalışma koşullarının doğru okunmasıyla başlar. Parça ve montaj modelleri yalnızca görsel olarak değil; malzeme, tolerans, hareket, dayanım ve üretim yöntemi birlikte düşünülerek hazırlanır.
            </p>
            <p>
              Tasarım onaylandığında üretim için gerekli teknik resimler hazırlanır. Ardından istenilen malzemeye göre prototip üretilir; ölçü, montaj ve gerçek çalışma koşulları kontrol edilerek gerekli revizyonlar ana modele işlenir.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:items-center">
          <ScrollReveal>
            <div className="relative">
              <div
                className="absolute -inset-5 -z-10 rounded-[2.5rem] blur-2xl"
                style={{ background: `linear-gradient(135deg, ${tint(page.accentRgb, 0.16)}, transparent 64%)` }}
              />
              <div className="overflow-hidden rounded-[2rem] bg-slate-100 shadow-[0_34px_90px_rgba(15,23,42,0.14)]" style={{ boxShadow: `0 34px 90px rgba(15,23,42,0.14), 0 0 0 1px ${tint(theme.accentRgb, 0.18)}` }}>
                <img src={storyVisual.src} alt={storyVisual.alt} className="aspect-[16/10] w-full object-cover object-center" />
              </div>
            </div>
          </ScrollReveal>

          <div className="grid gap-6">
            {page.capabilities.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 130}>
                <div className="grid grid-cols-[52px_1fr] gap-4">
                  <div className="relative flex justify-center">
                    <div
                      className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white text-sm font-black shadow-[0_12px_28px_rgba(15,23,42,0.08)] ring-1"
                      style={{ color: page.accent, borderColor: theme.border }}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    {index < page.capabilities.length - 1 ? (
                      <span className="absolute bottom-[-1.65rem] top-12 w-px" style={{ background: `linear-gradient(180deg, ${tint(page.accentRgb, 0.36)}, transparent)` }} />
                    ) : null}
                  </div>
                  <div className="pb-5">
                    <h3 className="text-lg font-black leading-6 text-slate-950">{item.title}</h3>
                    <p className="mt-2 text-justify text-sm leading-7 text-slate-600 [text-wrap:pretty]">{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function SoftwareFocusVisualStorySection({ page, family }: ServiceDetailPageProps & { family: ServiceCategory }) {
  const theme = serviceCategoryThemes[family]
  const embedded = page.title.includes('IoT')
  const heading = embedded
    ? 'Cihaz verisini sahadan panele uzanan ölçülebilir bir IoT akışına bağlayın.'
    : 'Kullanıcının gerçekten çalışacağı ekranları tek veri modelinde birleştirin.'
  const paragraphs = embedded
    ? [
      'Gömülü yazılım tarafında sensör, cihaz, edge gateway ve dashboard aynı çözüm mimarisinin parçalarıdır. Sahadaki veri önce doğru cihaz mantığıyla okunur, ardından güvenilir haberleşme katmanıyla yönetim paneline taşınır.',
      'Bu yapı; endüstriyel IoT sistemi, sensör verisi toplama, cihaz durum izleme, alarm üretimi, veri geçmişi ve uzaktan raporlama ihtiyaçlarını işletmeye özel hale getirir.',
    ]
    : [
      'Mobil, web ve masaüstü uygulamalarda güçlü sonuç; sadece güzel ekranlardan değil, ekranların arkasındaki doğru veri modelinden gelir. IYESYS, CRM yazılımı, web panel, mobil dashboard ve masaüstü operasyon programını aynı iş akışına göre tasarlar.',
      'Kullanıcı rolleri, müşteri kayıtları, görevler, onaylar, raporlar, dosyalar ve bildirimler sade ekranlarda toplanır. Böylece saha, ofis ve yönetim aynı güncel bilgi üzerinde çalışır.',
    ]

  if (embedded) {
    return (
      <section className="relative overflow-hidden bg-white py-20">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(circle at 50% 34%, ${tint(theme.accentRgb, 0.1)}, transparent 32%), radial-gradient(circle at 12% 80%, ${tint(theme.accentRgb, 0.07)}, transparent 28%), linear-gradient(180deg, #fff 0%, #fdfaff 58%, #fff 100%)`,
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="text-3xl font-black leading-[1.12] tracking-tight text-slate-950 sm:text-4xl">
              {heading}
            </h2>
            <div className="mx-auto mt-6 max-w-4xl space-y-4 text-lg leading-9 text-slate-700 [text-wrap:pretty]">
              {paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <SoftwareIotDashboardMockup page={page} />
        </div>
      </section>
    )
  }

  return (
    <section className="relative overflow-hidden bg-white py-20">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-black leading-[1.12] tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            {heading}
          </h2>
          <div className="mx-auto mt-6 max-w-4xl space-y-4 text-lg leading-9 text-slate-700 [text-wrap:pretty]">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <SoftwareCrmDashboardMockup page={page} />
      </div>
    </section>
  )
}

function SoftwareCrmDashboardMockup({ page }: ServiceDetailPageProps) {
  const stats = [
    { label: 'Toplam risk', value: '37', note: 'bugün' },
    { label: 'Aktif forklift', value: '12', note: 'sahada' },
    { label: 'Yoğun nokta', value: 'Kapı 3', note: '9 olay' },
  ]
  const devices = ['Forklift F-12', 'Forklift F-04', 'Kapı 3 Geçişi', 'Raf B2 Koridoru']
  const bars = [34, 46, 54, 42, 72, 62, 86, 58]
  const riskMix = [
    { label: 'Yaya yaklaşması', value: '18', width: '76%' },
    { label: 'Kör nokta', value: '11', width: '54%' },
    { label: 'Hız düşürme', value: '8', width: '42%' },
  ]
  const riskRows = [
    { area: 'Kapı 3', type: 'Yaya yaklaşması', count: '9' },
    { area: 'Raf B2', type: 'Kör nokta', count: '6' },
    { area: 'Sevkiyat', type: 'Hız düşürme', count: '5' },
  ]
  const capabilityCards = page.capabilities.slice(0, 4)

  const monitor = (
    <div className="monitor-frame relative mx-auto w-full max-w-[620px]">
      <div className="rounded-[2rem] bg-gradient-to-b from-slate-700 via-slate-950 to-black p-3 shadow-[0_42px_95px_rgba(15,23,42,.36)] ring-1 ring-slate-900/20">
        <div className="aspect-[4/3] overflow-hidden rounded-[1.35rem] bg-[#070812] text-white ring-1 ring-white/10 sm:aspect-video">
          <div className="flex h-9 items-center justify-between border-b border-white/10 bg-[#090a16] px-5 text-white">
            <div>
              <p className="text-sm font-black tracking-tight">IYESYS</p>
            </div>
            <div className="hidden items-center gap-2 sm:flex">
              <span className="h-2.5 w-2.5 rounded-full bg-violet-300 shadow-[0_0_18px_rgba(196,181,253,.85)]" />
              <span className="rounded-full bg-white/10 px-3 py-1.5 text-[11px] font-black text-violet-50">CANLI</span>
            </div>
          </div>

          <div className="grid h-[calc(100%-2.25rem)] grid-cols-1 gap-2 bg-[radial-gradient(circle_at_70%_18%,rgba(124,58,237,.22),transparent_28%),linear-gradient(135deg,#0b0c18,#111326_48%,#090a13)] p-2 md:grid-cols-[108px_minmax(0,1fr)_152px]">
            <aside className="dashboard-card-in hidden rounded-2xl bg-white/[0.07] p-2 shadow-sm ring-1 ring-white/10 backdrop-blur-xl md:block" style={{ transitionDelay: '140ms' }}>
              <div className="mb-1.5 flex items-center justify-between">
                <h3 className="text-[10px] font-black text-white">Cihazlar</h3>
                <span className="rounded-full bg-violet-400/15 px-2 py-1 text-[9px] font-black text-violet-100">Tümü</span>
              </div>
              <div className="space-y-1.5">
                {devices.map((device, index) => (
                  <div key={device} className={`rounded-xl border px-2 py-1.5 ${index === 0 ? 'border-violet-300/35 bg-violet-400/15' : 'border-white/10 bg-white/[0.045]'}`}>
                    <p className="text-[9px] font-black leading-3 text-white">{device}</p>
                    <p className="mt-0.5 text-[9px] font-semibold text-slate-400">{index < 2 ? 'Hareketli ekipman' : 'Risk noktası'}</p>
                  </div>
                ))}
              </div>
            </aside>

            <main className="grid min-h-0 grid-rows-[32px_50px_minmax(0,1fr)] gap-2 sm:grid-rows-[32px_58px_minmax(0,1fr)_50px]">
              <div className="dashboard-card-in flex items-center justify-between rounded-2xl bg-white/[0.07] px-3 shadow-sm ring-1 ring-white/10 backdrop-blur-xl" style={{ transitionDelay: '210ms' }}>
                <div className="flex gap-2">
                  <span className="rounded-full bg-violet-500 px-3 py-1 text-[9px] font-black text-white">Günlük Veri</span>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-[9px] font-black text-slate-300">Tarih</span>
                </div>
                <span className="text-[9px] font-black text-slate-300">25 Nisan</span>
              </div>

              <div className="grid grid-cols-3 gap-2">
                {stats.map((item, index) => (
                  <div
                    key={item.label}
                    className="dashboard-card-in rounded-2xl bg-white/[0.07] p-2 shadow-sm ring-1 ring-white/10 backdrop-blur-xl"
                    style={{ transitionDelay: `${280 + index * 70}ms` }}
                  >
                    <p className="text-[7px] font-black uppercase leading-3 tracking-[0.08em] text-slate-500">{item.label}</p>
                    <div className="mt-0.5 flex items-end justify-between gap-2">
                      <span className="text-lg font-black tracking-tight text-white">{item.value}</span>
                      <span className="text-[8px] font-black text-violet-200">{item.note}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="dashboard-card-in flex min-h-0 flex-col overflow-hidden rounded-xl bg-[#0d1020] p-2.5 text-white shadow-sm ring-1 ring-white/10 sm:rounded-2xl sm:p-3" style={{ transitionDelay: '500ms' }}>
                <div className="mb-1.5 flex shrink-0 items-center justify-between">
                  <div>
                    <h3 className="text-[11px] font-black">Saatlik risk trendi</h3>
                    <p className="mt-0.5 text-[9px] font-semibold text-slate-400">Gün içi risk dağılımı</p>
                  </div>
                  <span className="text-[9px] font-black text-violet-200">06:00 - 20:00</span>
                </div>
                <svg viewBox="0 0 520 120" className="min-h-0 w-full flex-1">
                  <defs>
                    <linearGradient id="monitorWaveFill" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#a78bfa" stopOpacity=".34" />
                      <stop offset="100%" stopColor="#a78bfa" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  {[24, 56, 88, 120].map((y) => (
                    <line key={y} x1="18" x2="502" y1={y * .8} y2={y * .8} stroke="rgba(255,255,255,.12)" />
                  ))}
                  <path d="M20 100 L82 96 L144 66 L208 66 L270 66 L332 26 L394 60 L456 100 L506 100 L506 112 L20 112 Z" fill="url(#monitorWaveFill)" />
                  <path className="dashboard-wave" d="M20 100 L82 96 L144 66 L208 66 L270 66 L332 26 L394 60 L456 100 L506 100" fill="none" stroke="#c4b5fd" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                  {[20, 82, 144, 208, 270, 332, 394, 456, 506].map((x, index) => (
                    <circle key={x} cx={x} cy={[100, 96, 66, 66, 66, 26, 60, 100, 100][index]} r="4" fill="#ede9fe" />
                  ))}
                </svg>
              </div>

              <div className="hidden grid-cols-2 gap-2 sm:grid">
                <div className="dashboard-card-in rounded-2xl bg-white/[0.07] px-3 py-1.5 shadow-sm ring-1 ring-white/10 backdrop-blur-xl" style={{ transitionDelay: '650ms' }}>
                  <p className="text-[8px] font-black uppercase tracking-[0.08em] text-slate-500">Saatlik ort.</p>
                  <p className="mt-0.5 text-base font-black text-white">2.4 olay</p>
                </div>
                <div className="dashboard-card-in rounded-2xl bg-white/[0.07] px-3 py-1.5 shadow-sm ring-1 ring-white/10 backdrop-blur-xl" style={{ transitionDelay: '700ms' }}>
                  <p className="text-[8px] font-black uppercase tracking-[0.08em] text-slate-500">Zirve saat</p>
                  <p className="mt-0.5 text-base font-black text-white">16:00</p>
                </div>
              </div>
            </main>

            <aside className="hidden min-h-0 grid-rows-[132px_minmax(0,1fr)] gap-2 md:grid">
              <div className="dashboard-card-in rounded-2xl bg-white/[0.07] p-2 shadow-sm ring-1 ring-white/10 backdrop-blur-xl" style={{ transitionDelay: '460ms' }}>
                <div className="mb-1.5 flex items-center justify-between">
                  <h3 className="text-[10px] font-black text-white">Günlük dağılım</h3>
                  <span className="text-[10px] font-black text-violet-200">37 olay</span>
                </div>
                <div className="grid grid-cols-[52px_1fr] items-center gap-2">
                  <div className="relative h-[52px] w-[52px]">
                    <svg viewBox="0 0 120 120" className="h-full w-full rotate-[-90deg]">
                      <circle cx="60" cy="60" r="40" fill="none" stroke="rgba(255,255,255,.12)" strokeWidth="12" />
                      <circle className="dashboard-pie" cx="60" cy="60" r="40" fill="none" stroke="#a78bfa" strokeWidth="12" strokeLinecap="round" pathLength="100" />
                    </svg>
                    <div className="absolute inset-0 grid place-items-center">
                      <span className="text-xs font-black text-white">68%</span>
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    {riskMix.map((item) => (
                      <div key={item.label}>
                        <div className="mb-0.5 flex items-center justify-between text-[8px] font-black text-slate-400">
                          <span>{item.label}</span>
                          <span>{item.value}</span>
                        </div>
                        <div className="h-1.5 rounded-full bg-white/10">
                          <div className="dashboard-bar h-full rounded-full bg-violet-400" style={{ width: item.width }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="dashboard-card-in overflow-hidden rounded-2xl bg-white/[0.07] shadow-sm ring-1 ring-white/10 backdrop-blur-xl" style={{ transitionDelay: '780ms' }}>
                <div className="border-b border-white/10 px-3 py-1.5">
                  <h3 className="text-[10px] font-black text-white">Risk tablosu</h3>
                </div>
                <div className="divide-y divide-white/10">
                  {riskRows.map((row) => (
                    <div key={row.area} className="grid grid-cols-[1fr_1fr_22px] items-center gap-2 px-3 py-1.5 text-[9px]">
                      <span className="font-black text-white">{row.area}</span>
                      <span className="font-semibold text-slate-400">{row.type}</span>
                      <span className="text-right font-black text-violet-200">{row.count}</span>
                    </div>
                  ))}
                </div>
                <div className="px-3 pb-2 pt-1.5">
                  <h3 className="mb-1.5 text-[10px] font-black text-white">Bölge yoğunluğu</h3>
                  <div className="flex h-9 items-end gap-1.5">
                    {bars.map((height, index) => (
                      <div key={`${height}-${index}`} className="flex flex-1 items-end rounded-t bg-white/10">
                        <div
                          className="dashboard-bar w-full rounded-t bg-violet-400"
                          style={{ height: `${height}%`, transitionDelay: `${880 + index * 45}ms` }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
      <div className="mx-auto h-8 w-36 bg-gradient-to-b from-slate-800 to-slate-950 shadow-[0_24px_42px_rgba(15,23,42,.24)]" />
      <div className="mx-auto h-4 w-56 rounded-b-[2rem] bg-gradient-to-b from-slate-700 to-slate-950 shadow-[0_18px_42px_rgba(15,23,42,.18)]" />
    </div>
  )

  const capabilityCard = (item: (typeof capabilityCards)[number], index: number, className = '') => (
    <div
      key={item.title}
      className={`monitor-card min-h-[180px] rounded-[1.25rem] border border-violet-200/55 bg-white/95 p-5 shadow-[0_22px_70px_rgba(88,28,135,.12)] backdrop-blur-2xl ${className}`}
      style={{ transitionDelay: `${620 + index * 130}ms` }}
    >
      <div className="mb-3 flex items-center gap-2">
        <CheckCircle2 className="h-4 w-4 shrink-0 text-violet-700" />
        <h3 className="text-base font-black text-slate-950">{item.title}</h3>
      </div>
      <p className="text-sm leading-7 text-slate-700 [text-wrap:pretty]">{item.desc}</p>
    </div>
  )

  return (
    <ScrollReveal className="software-dashboard-shell mt-14">
      <style>{`
        .software-dashboard-shell .monitor-frame {
          opacity: 0;
          transform: translateY(24px) scale(.985);
          transition: opacity 820ms ease, transform 900ms cubic-bezier(0.22, 1, 0.36, 1);
        }
        .software-dashboard-shell.is-visible .monitor-frame {
          opacity: 1;
          transform: translateY(0);
        }
        .software-dashboard-shell .monitor-card,
        .software-dashboard-shell .dashboard-card-in {
          opacity: 0;
          transform: translateY(18px) scale(.97);
          transition: opacity 760ms ease, transform 760ms cubic-bezier(0.22, 1, 0.36, 1);
        }
        .software-dashboard-shell.is-visible .monitor-card,
        .software-dashboard-shell.is-visible .dashboard-card-in {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
        .software-dashboard-shell .monitor-arrow {
          opacity: 0;
          stroke-dasharray: 520;
          stroke-dashoffset: 520;
          transition: opacity 240ms ease, stroke-dashoffset 1150ms cubic-bezier(0.22, 1, 0.36, 1);
        }
        .software-dashboard-shell.is-visible .monitor-arrow {
          opacity: 1;
          stroke-dashoffset: 0;
        }
        .software-dashboard-shell .dashboard-bar {
          transform-origin: bottom;
          transform: scaleY(.08);
          transition: transform 900ms cubic-bezier(0.22, 1, 0.36, 1);
        }
        .software-dashboard-shell.is-visible .dashboard-bar {
          transform: scaleY(1);
        }
        .software-dashboard-shell .dashboard-wave {
          stroke-dasharray: 760;
          stroke-dashoffset: 760;
          transition: stroke-dashoffset 1500ms cubic-bezier(0.22, 1, 0.36, 1);
        }
        .software-dashboard-shell.is-visible .dashboard-wave {
          stroke-dashoffset: 0;
        }
        .software-dashboard-shell .dashboard-pie {
          stroke-dasharray: 0 100;
          transition: stroke-dasharray 1150ms cubic-bezier(0.22, 1, 0.36, 1);
        }
        .software-dashboard-shell.is-visible .dashboard-pie {
          stroke-dasharray: 68 100;
        }
        @media (prefers-reduced-motion: reduce) {
          .software-dashboard-shell .monitor-frame,
          .software-dashboard-shell .monitor-card,
          .software-dashboard-shell .dashboard-card-in,
          .software-dashboard-shell .monitor-arrow,
          .software-dashboard-shell .dashboard-bar,
          .software-dashboard-shell .dashboard-wave,
          .software-dashboard-shell .dashboard-pie {
            transition-duration: 0.01ms !important;
            transition-delay: 0ms !important;
          }
        }
      `}</style>
      <div className="relative left-1/2 w-screen -translate-x-1/2 px-6 py-10 lg:py-12">
        <div className="relative z-10 mx-auto hidden h-[680px] max-w-[1760px] xl:block 2xl:h-[720px]">
          <svg aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 h-full w-full overflow-visible" viewBox="0 0 1760 720" preserveAspectRatio="none">
            <defs>
              <linearGradient id="monitorArrowLeft" x1="1" x2="0" y1="0" y2="0">
                <stop offset="0%" stopColor="#7c3aed" stopOpacity=".35" />
                <stop offset="100%" stopColor="#7c3aed" stopOpacity=".95" />
              </linearGradient>
              <linearGradient id="monitorArrowRight" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="#7c3aed" stopOpacity=".35" />
                <stop offset="100%" stopColor="#7c3aed" stopOpacity=".95" />
              </linearGradient>
              <marker id="monitorArrowHead" markerHeight="6" markerUnits="userSpaceOnUse" markerWidth="6" orient="auto" refX="5" refY="3">
                <path d="M0,0 L6,3 L0,6 Z" fill="#7c3aed" opacity=".95" />
              </marker>
            </defs>
            <path className="monitor-arrow" d="M590 300 C500 245 470 160 380 145" fill="none" stroke="url(#monitorArrowLeft)" strokeWidth="3" strokeLinecap="round" markerEnd="url(#monitorArrowHead)" style={{ transitionDelay: '480ms' }} />
            <path className="monitor-arrow" d="M590 435 C500 500 480 585 420 600" fill="none" stroke="url(#monitorArrowLeft)" strokeWidth="3" strokeLinecap="round" markerEnd="url(#monitorArrowHead)" style={{ transitionDelay: '620ms' }} />
            <path className="monitor-arrow" d="M1170 300 C1260 245 1290 160 1380 145" fill="none" stroke="url(#monitorArrowRight)" strokeWidth="3" strokeLinecap="round" markerEnd="url(#monitorArrowHead)" style={{ transitionDelay: '760ms' }} />
            <path className="monitor-arrow" d="M1170 435 C1260 500 1280 585 1340 600" fill="none" stroke="url(#monitorArrowRight)" strokeWidth="3" strokeLinecap="round" markerEnd="url(#monitorArrowHead)" style={{ transitionDelay: '900ms' }} />
          </svg>

          <div className="absolute left-[5%] top-6 z-30 w-[250px] 2xl:w-[310px]">
            {capabilityCards[0] && capabilityCard(capabilityCards[0], 0)}
          </div>
          <div className="absolute bottom-6 left-[8%] z-30 w-[250px] 2xl:w-[310px]">
            {capabilityCards[1] && capabilityCard(capabilityCards[1], 1)}
          </div>
          <div className="absolute right-[5%] top-6 z-30 w-[250px] 2xl:w-[310px]">
            {capabilityCards[2] && capabilityCard(capabilityCards[2], 2)}
          </div>
          <div className="absolute bottom-6 right-[8%] z-30 w-[250px] 2xl:w-[310px]">
            {capabilityCards[3] && capabilityCard(capabilityCards[3], 3)}
          </div>

          <div className="absolute left-1/2 top-1/2 z-20 w-[560px] -translate-x-1/2 -translate-y-1/2 2xl:w-[620px]">
            {monitor}
          </div>
        </div>

        <div className="grid gap-8 xl:hidden">
          {monitor}
          <div className="grid gap-4 sm:grid-cols-2">
            {capabilityCards.map((item, index) => capabilityCard(item, index))}
          </div>
        </div>
      </div>
    </ScrollReveal>
  )
}

function LegacySoftwareCrmDashboardMockup({ page }: ServiceDetailPageProps) {
  const metrics = [
    { label: 'Rapor hazırlama', value: '-48%' },
    { label: 'Onay bekleme', value: '-36%' },
    { label: 'Süreç görünürlüğü', value: '+42%' },
  ]
  const bars = [44, 72, 58, 86, 67, 94, 78]
  const waves = [18, 34, 28, 52, 46, 68, 60, 76, 71, 88, 82]
  const capabilityCards = page.capabilities.slice(0, 4)

  return (
    <ScrollReveal className="software-dashboard-shell mt-12">
      <style>{`
        .software-dashboard-shell .dashboard-bar {
          transform-origin: bottom;
          transform: scaleY(.08);
          transition: transform 900ms cubic-bezier(0.22, 1, 0.36, 1);
        }
        .software-dashboard-shell.is-visible .dashboard-bar {
          transform: scaleY(1);
        }
        .software-dashboard-shell .dashboard-wave {
          stroke-dasharray: 760;
          stroke-dashoffset: 760;
          transition: stroke-dashoffset 1400ms cubic-bezier(0.22, 1, 0.36, 1);
        }
        .software-dashboard-shell.is-visible .dashboard-wave {
          stroke-dashoffset: 0;
        }
        .software-dashboard-shell .dashboard-pie {
          stroke-dasharray: 0 100;
          transition: stroke-dasharray 1100ms cubic-bezier(0.22, 1, 0.36, 1);
        }
        .software-dashboard-shell.is-visible .dashboard-pie {
          stroke-dasharray: 72 100;
        }
      `}</style>
      <div className="relative overflow-hidden rounded-[2rem] bg-[#0c1018] p-4 text-white shadow-[0_34px_96px_rgba(15,23,42,0.26)] ring-1 ring-violet-300/20 sm:p-5 lg:p-6">
        <div className="absolute inset-0 opacity-45" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.055) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.055) 1px, transparent 1px)', backgroundSize: '42px 42px' }} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(124,58,237,.22),transparent_30%),radial-gradient(circle_at_90%_12%,rgba(139,92,246,.16),transparent_28%),linear-gradient(135deg,rgba(14,18,28,.92),rgba(10,13,22,.98))]" />

        <div className="relative z-10 flex items-center justify-between border-b border-white/8 px-2 pb-4">
          <div>
            <p className="text-sm font-black tracking-tight text-white">IYESYS CRM Dashboard</p>
            <p className="mt-1 text-xs font-medium text-slate-400">Operasyon, görev ve müşteri takibi</p>
          </div>
          <div className="hidden items-center gap-3 sm:flex">
            <span className="rounded-full bg-white/8 px-4 py-2 text-xs font-bold text-slate-300 ring-1 ring-white/10">Canlı görünüm</span>
            <span className="h-9 w-9 rounded-full bg-violet-400/18 ring-1 ring-violet-300/30" />
          </div>
        </div>

        <div className="relative z-10 mt-5 grid gap-4 lg:grid-cols-12">
          <div className="grid gap-4 lg:col-span-3">
            {capabilityCards.slice(0, 2).map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 130}>
                <div className="rounded-[1.15rem] border border-white/10 bg-white/[0.075] p-5 shadow-xl backdrop-blur-xl">
                  <div className="mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-violet-200" />
                    <h3 className="text-base font-black text-white">{item.title}</h3>
                  </div>
                  <p className="text-sm leading-6 text-slate-300 [text-wrap:pretty]">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="grid gap-4 lg:col-span-6">
            <div className="grid gap-4 sm:grid-cols-3">
              {metrics.map((item, index) => (
                <ScrollReveal key={item.label} delay={index * 90}>
                  <div className="rounded-[1.05rem] border border-white/10 bg-white/[0.07] p-4 backdrop-blur-xl">
                    <div className="text-2xl font-black text-violet-100">{item.value}</div>
                    <div className="mt-2 text-xs font-bold leading-4 text-slate-400">{item.label}</div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={180}>
              <div className="rounded-[1.25rem] border border-white/10 bg-white/[0.075] p-5 shadow-xl backdrop-blur-xl">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-black text-white">Haftalık iş akışı</h3>
                    <p className="mt-1 text-xs text-slate-400">Yaklaşık sistem etkisi</p>
                  </div>
                  <span className="rounded-full bg-violet-400/16 px-3 py-1 text-xs font-black text-violet-100">+31% düzen</span>
                </div>
                <div className="flex h-60 items-end gap-3 rounded-2xl bg-slate-950/35 p-4 ring-1 ring-white/[0.06]">
                  {bars.map((height, index) => (
                    <div key={`${height}-${index}`} className="flex flex-1 items-end rounded-t-xl bg-white/[0.055]">
                      <div
                        className="dashboard-bar w-full rounded-t-xl bg-gradient-to-t from-violet-700 to-violet-300"
                        style={{ height: `${height}%`, transitionDelay: `${index * 80}ms` }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={280}>
              <div className="rounded-[1.25rem] border border-white/10 bg-white/[0.075] p-5 shadow-xl backdrop-blur-xl">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-base font-black text-white">Canlı görev trendi</h3>
                  <span className="rounded-full bg-violet-400/16 px-3 py-1 text-xs font-black text-violet-100">+42% netlik</span>
                </div>
                <svg viewBox="0 0 520 150" className="h-36 w-full overflow-visible">
                  <path d="M10 108 C58 56 92 68 130 92 C174 120 200 26 250 64 C292 96 330 52 370 63 C420 77 458 26 510 40" fill="none" stroke="rgba(255,255,255,.10)" strokeWidth="18" strokeLinecap="round" />
                  <path className="dashboard-wave" d="M10 108 C58 56 92 68 130 92 C174 120 200 26 250 64 C292 96 330 52 370 63 C420 77 458 26 510 40" fill="none" stroke="#a78bfa" strokeWidth="5" strokeLinecap="round" />
                  {waves.map((top, index) => (
                    <circle key={`${top}-${index}`} cx={18 + index * 47} cy={top + 20} r="3" fill="#ddd6fe" opacity=".78" />
                  ))}
                </svg>
              </div>
            </ScrollReveal>
          </div>

          <div className="grid gap-4 lg:col-span-3">
            <ScrollReveal delay={220}>
              <div className="rounded-[1.25rem] border border-white/10 bg-white/[0.075] p-5 shadow-xl backdrop-blur-xl">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-base font-black text-white">Süreç izlenebilirliği</h3>
                  <span className="text-xl font-black text-violet-100">72%</span>
                </div>
                <div className="grid gap-5">
                  <svg viewBox="0 0 140 140" className="mx-auto h-32 w-32 rotate-[-90deg]">
                    <circle cx="70" cy="70" r="48" fill="none" stroke="rgba(255,255,255,.10)" strokeWidth="16" />
                    <circle className="dashboard-pie" cx="70" cy="70" r="48" fill="none" stroke="#8b5cf6" strokeWidth="16" strokeLinecap="round" pathLength="100" />
                  </svg>
                  <div className="space-y-2">
                    {metrics.map((item) => (
                      <div key={item.label} className="flex items-center justify-between rounded-xl bg-white/[0.06] px-3 py-2">
                        <span className="text-xs font-bold text-slate-300">{item.label}</span>
                        <span className="text-sm font-black text-violet-100">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {capabilityCards.slice(2, 4).map((item, index) => (
              <ScrollReveal key={item.title} delay={(index + 3) * 130}>
                <div className="rounded-[1.15rem] border border-white/10 bg-white/[0.075] p-5 shadow-xl backdrop-blur-xl">
                  <div className="mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-violet-200" />
                    <h3 className="text-base font-black text-white">{item.title}</h3>
                  </div>
                  <p className="text-sm leading-6 text-slate-300 [text-wrap:pretty]">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </ScrollReveal>
  )
}

function SoftwareIotDashboardMockup({ page }: ServiceDetailPageProps) {
  const nodes = page.capabilities.slice(0, 4)
  const positions = [
    'lg:absolute lg:left-0 lg:top-16 lg:w-[310px]',
    'lg:absolute lg:left-8 lg:bottom-16 lg:w-[310px]',
    'lg:absolute lg:right-0 lg:top-16 lg:w-[310px]',
    'lg:absolute lg:right-8 lg:bottom-16 lg:w-[310px]',
  ]

  return (
    <ScrollReveal className="iot-trace-shell relative mx-auto mt-16 max-w-7xl">
      <style>{`
        .iot-trace-shell .iot-trace-path {
          stroke-dasharray: 980;
          stroke-dashoffset: 980;
          transition: stroke-dashoffset 1450ms cubic-bezier(0.22, 1, 0.36, 1);
        }
        .iot-trace-shell.is-visible .iot-trace-path {
          stroke-dashoffset: 0;
        }
        .iot-trace-shell .iot-trace-dot {
          opacity: 0;
          transform: scale(.7);
          transform-origin: center;
          transition: opacity 520ms ease, transform 520ms cubic-bezier(0.22, 1, 0.36, 1);
        }
        .iot-trace-shell.is-visible .iot-trace-dot {
          opacity: 1;
          transform: scale(1);
        }
      `}</style>

      <div className="relative grid gap-5 lg:min-h-[720px] lg:block">
        <div className="pointer-events-none absolute inset-0 hidden lg:block">
          <svg className="h-full w-full overflow-visible" viewBox="0 0 1200 720" fill="none" aria-hidden="true">
            <defs>
              <linearGradient id="iotTraceLeft" x1="600" y1="360" x2="220" y2="140" gradientUnits="userSpaceOnUse">
                <stop stopColor="#06B6D4" stopOpacity="0.95" />
                <stop offset="1" stopColor="#8B5CF6" stopOpacity="0.95" />
              </linearGradient>
              <linearGradient id="iotTraceRight" x1="600" y1="360" x2="980" y2="140" gradientUnits="userSpaceOnUse">
                <stop stopColor="#8B5CF6" stopOpacity="0.95" />
                <stop offset="1" stopColor="#06B6D4" stopOpacity="0.95" />
              </linearGradient>
            </defs>
            {[
              { d: 'M600 354 C510 258 410 168 258 148', stroke: 'url(#iotTraceLeft)', delay: '120ms', dot: [258, 148] },
              { d: 'M588 404 C496 474 408 568 286 588', stroke: 'url(#iotTraceLeft)', delay: '260ms', dot: [286, 588] },
              { d: 'M612 354 C704 258 800 168 942 148', stroke: 'url(#iotTraceRight)', delay: '400ms', dot: [942, 148] },
              { d: 'M622 404 C718 500 805 570 928 588', stroke: 'url(#iotTraceRight)', delay: '540ms', dot: [928, 588] },
            ].map((trace) => (
              <g key={trace.d}>
                <path
                  className="iot-trace-path"
                  d={trace.d}
                  stroke={trace.stroke}
                  strokeWidth="3"
                  strokeLinecap="round"
                  style={{ transitionDelay: trace.delay }}
                />
                <circle
                  className="iot-trace-dot"
                  cx={trace.dot[0]}
                  cy={trace.dot[1]}
                  r="8"
                  fill="#fff"
                  stroke="#8B5CF6"
                  strokeWidth="3"
                  style={{ transitionDelay: trace.delay }}
                />
              </g>
            ))}
          </svg>
        </div>

        <div className="relative z-10 order-first flex justify-center lg:absolute lg:left-1/2 lg:top-1/2 lg:w-[560px] lg:-translate-x-1/2 lg:-translate-y-1/2 xl:w-[650px]">
          <div className="relative">
            <div className="absolute inset-x-10 bottom-5 -z-10 h-16 rounded-full bg-violet-500/18 blur-3xl" />
            <img
              src="/img/service-unique/iyesys-iot-pcb-cutout.png"
              alt="IYESYS yazılı gömülü IoT kontrol kartı"
              className="w-full object-contain drop-shadow-[0_34px_76px_rgba(15,23,42,0.18)]"
            />
          </div>
        </div>

        {nodes.map((item, index) => (
          <ScrollReveal key={item.title} delay={index * 140} className={positions[index]}>
            <div
              className="group rounded-[1.25rem] bg-white/88 p-6 shadow-[0_22px_58px_rgba(88,28,135,0.10)] ring-1 ring-violet-200/80 backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(88,28,135,0.16)]"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100 text-violet-700">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-black text-slate-950">{item.title}</h3>
              <p className="mt-3 text-justify text-sm leading-7 text-slate-600 [text-wrap:pretty]">{item.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </ScrollReveal>
  )
}

function AutomationFocusVisualStorySection({ page, family }: ServiceDetailPageProps & { family: ServiceCategory }) {
  const visuals = getPageVisuals(page)
  const storyVisuals = visuals.length > 1 ? visuals.slice(1) : visuals
  const theme = serviceCategoryThemes[family]
  const story = familyStories[family]
  const bareCutoutVisual = page.title === 'PLC / SCADA / IO Sistemleri'
  const cutoutVisual = storyVisuals[0] || visuals[0]

  return (
    <section className="relative overflow-hidden bg-white py-20">
      {!bareCutoutVisual ? (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(circle at 15% 12%, ${tint(page.accentRgb, 0.055)}, transparent 30%), radial-gradient(circle at 86% 62%, ${tint(page.accentRgb, 0.04)}, transparent 28%), linear-gradient(180deg, #fff 0%, rgba(255,247,247,0.72) 48%, #fff 100%)`,
          }}
        />
      ) : null}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            {!bareCutoutVisual ? (
              <span className="text-sm font-black uppercase tracking-[0.18em]" style={{ color: theme.text }}>
                {story.label}
              </span>
            ) : null}
            <h2 className="mt-4 text-3xl font-black leading-[1.12] tracking-tight text-slate-950 sm:text-4xl">
              {story.heading}
            </h2>
          </div>

          <div className="space-y-5 text-justify text-lg leading-9 text-slate-700 [text-wrap:pretty]">
            <p>{page.description}</p>
            <p>{story.line}</p>
          </div>
        </div>

        {bareCutoutVisual ? (
          <div className="mt-12 grid items-center gap-8 lg:grid-cols-[260px_minmax(680px,1fr)_260px] lg:gap-4 xl:-mx-16 xl:grid-cols-[280px_minmax(820px,1fr)_280px]">
            <div className="relative z-10 grid gap-8">
              {page.capabilities.slice(0, 2).map((item, index) => (
                <ScrollReveal key={item.title} delay={index * 140} className="h-full">
                  <div className="flex h-full gap-4">
                    <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg" style={{ backgroundColor: tint(page.accentRgb, 0.1), color: page.accent }}>
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="text-base font-black text-slate-950">{item.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600 [text-wrap:pretty]">{item.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <div className="order-first flex justify-center lg:order-none">
              <img
                src={cutoutVisual.src}
                alt={cutoutVisual.alt}
                className="w-full max-w-[1040px] object-contain object-center drop-shadow-[0_38px_82px_rgba(15,23,42,0.16)]"
              />
            </div>

            <div className="relative z-10 grid gap-8">
              {page.capabilities.slice(2, 4).map((item, index) => (
                <ScrollReveal key={item.title} delay={(index + 2) * 140} className="h-full">
                  <div className="flex h-full gap-4">
                    <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg" style={{ backgroundColor: tint(page.accentRgb, 0.1), color: page.accent }}>
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="text-base font-black text-slate-950">{item.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600 [text-wrap:pretty]">{item.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        ) : (
          <div className="mt-14">
          <div className="relative">
            {!bareCutoutVisual ? (
              <div
                className="absolute -inset-5 -z-10 rounded-[2.25rem] opacity-80 blur-2xl"
                style={{ background: `linear-gradient(135deg, ${tint(page.accentRgb, 0.16)}, transparent 60%)` }}
              />
            ) : null}
            <div className={bareCutoutVisual ? 'mx-auto flex min-h-[430px] max-w-6xl items-center justify-center overflow-visible' : 'overflow-hidden rounded-[1.75rem] shadow-[0_34px_90px_rgba(15,23,42,0.16)]'}>
              {storyVisuals.length > 1 ? (
                <VisualRotator
                  visuals={storyVisuals}
                  className={bareCutoutVisual ? 'aspect-[16/9] w-full overflow-visible' : 'aspect-[16/9] w-full overflow-hidden'}
                  imageClassName={bareCutoutVisual ? 'h-full w-full object-contain object-center drop-shadow-[0_34px_70px_rgba(15,23,42,0.16)]' : 'h-full w-full object-cover object-center'}
                />
              ) : (
                <img
                  src={storyVisuals[0].src}
                  alt={storyVisuals[0].alt}
                  className={bareCutoutVisual ? 'mx-auto aspect-[16/9] w-full object-contain object-center drop-shadow-[0_34px_70px_rgba(15,23,42,0.16)]' : 'aspect-[16/9] w-full object-cover object-center'}
                />
              )}
            </div>
          </div>

          <div className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {page.capabilities.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 140} className="h-full">
                <div className="flex h-full gap-4">
                  <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg" style={{ backgroundColor: tint(page.accentRgb, 0.1), color: page.accent }}>
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-black text-slate-950">{item.title}</h3>
                    <p className="mt-2 text-justify text-sm leading-7 text-slate-600 [text-wrap:pretty]">{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          </div>
        )}
      </div>
    </section>
  )
}

function EfficiencyFocusVisualStorySection({ page, family }: ServiceDetailPageProps & { family: ServiceCategory }) {
  const visuals = getPageVisuals(page)
  const storyVisual = visuals[1] || visuals[0]
  const theme = serviceCategoryThemes[family]
  const copy = getEfficiencyFocusCopy(page)
  const focusedEfficiency = usesEfficiencyFocusTemplate(page)

  return (
    <section className="relative overflow-hidden bg-white py-20">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(180deg, #fff 0%, rgba(248,251,255,0.9) 48%, #fff 100%), radial-gradient(circle at 18% 20%, ${tint(page.accentRgb, 0.055)}, transparent 32%)`,
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={`grid gap-10 lg:grid-cols-[0.95fr_1.05fr] ${focusedEfficiency ? 'lg:items-start' : 'lg:items-end'}`}>
          <div>
            <span className="text-sm font-black uppercase tracking-[0.18em]" style={{ color: theme.text }}>
              {copy.eyebrow}
            </span>
            <h2 className="mt-4 text-3xl font-black leading-[1.12] tracking-tight text-slate-950 sm:text-4xl">
              {copy.heading}
            </h2>
          </div>

          <div className="space-y-5 text-justify text-lg leading-9 text-slate-700 [text-wrap:pretty]">
            <p>
              {page.description} {copy.systemLine}
            </p>
            <p>
              {copy.secondParagraph}
            </p>
            <p>
              {copy.thirdParagraph}
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.16fr_0.84fr] lg:items-center">
          <div className="relative">
            <div
              className="absolute -inset-5 -z-10 rounded-[2.5rem] blur-2xl"
              style={{ background: `linear-gradient(135deg, ${tint(page.accentRgb, 0.18)}, transparent 64%)` }}
            />
            <div className="overflow-hidden rounded-[2rem] shadow-[0_34px_90px_rgba(15,23,42,0.16)]">
              <img src={storyVisual.src} alt={storyVisual.alt} className="aspect-[16/10] w-full object-cover object-center" />
            </div>
            {!focusedEfficiency ? (
              <div className="absolute inset-x-5 bottom-5 grid gap-3 rounded-2xl bg-slate-950/72 p-3 text-white shadow-2xl backdrop-blur md:grid-cols-3">
                {page.stats.map((item) => (
                  <div key={`${item.value}-${item.label}`} className="rounded-xl bg-white/10 px-4 py-3">
                    <div className="text-sm font-black">{item.value}</div>
                    <div className="mt-1 text-[11px] font-semibold leading-4 text-white/72">{item.label}</div>
                  </div>
                ))}
              </div>
            ) : null}
          </div>

          <div className="grid gap-6">
            {page.capabilities.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 140}>
                <EfficiencySystemItem page={page} item={item} index={index} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function EfficiencySystemItem({ page, item, index }: ServiceDetailPageProps & { item: { title: string; desc: string }; index: number }) {
  return (
    <div className="grid grid-cols-[54px_1fr] gap-4">
      <div className="relative flex justify-center">
        <div className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white text-sm font-black shadow-[0_12px_28px_rgba(15,23,42,0.08)] ring-1 ring-slate-200" style={{ color: page.accent }}>
          {String(index + 1).padStart(2, '0')}
        </div>
        {index < 3 ? (
          <span className="absolute bottom-[-1.75rem] top-12 w-px" style={{ background: `linear-gradient(180deg, ${tint(page.accentRgb, 0.35)}, transparent)` }} />
        ) : null}
      </div>
      <div className="pb-6">
        <h3 className="text-lg font-black leading-6 text-slate-950">{item.title}</h3>
        <p className="mt-2 text-justify text-base leading-8 text-slate-600 [text-wrap:pretty]">{item.desc}</p>
      </div>
    </div>
  )
}

function SafetyFocusVisualStorySection({ page, family }: ServiceDetailPageProps & { family: ServiceCategory }) {
  const visuals = getPageVisuals(page)
  const storyVisuals = visuals.length > 1 ? visuals.slice(1) : visuals
  const theme = serviceCategoryThemes[family]
  const copy = getSafetyFocusCopy(page)

  return (
    <section className="relative overflow-hidden bg-white py-20">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 14% 10%, ${tint(page.accentRgb, 0.045)}, transparent 32%), radial-gradient(circle at 86% 58%, ${tint(page.accentRgb, 0.035)}, transparent 30%), linear-gradient(180deg, #fff 0%, rgba(240,253,244,0.18) 48%, #fff 100%)`,
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
          <div>
            <span className="text-sm font-black uppercase tracking-[0.18em]" style={{ color: theme.text }}>
              {copy.eyebrow}
            </span>
            <h2 className="mt-4 text-3xl font-black leading-[1.12] tracking-tight text-slate-950 sm:text-4xl">
              {copy.heading}
            </h2>
          </div>

          <div className="space-y-5 text-justify text-lg leading-9 text-slate-700">
            <p>
              {page.description} {copy.systemLine}
            </p>
            <p>
              {copy.secondParagraph}
            </p>
            <p>
              {copy.thirdParagraph}
            </p>
          </div>
        </div>

        {isAreaSafetyPage(page) ? (
          <AreaSafetySystemShowcase page={page} family={family} visuals={storyVisuals} />
        ) : (
          <>
            <div className="relative mt-12">
              <div
                className="absolute -inset-5 -z-10 rounded-[2.2rem] opacity-80 blur-2xl"
                style={{ background: `linear-gradient(135deg, ${tint(page.accentRgb, 0.18)}, transparent 58%)` }}
              />
              <div className="overflow-hidden rounded-[1.75rem]" style={{ boxShadow: `0 34px 90px rgba(15,23,42,0.16), 0 0 0 1px ${tint(page.accentRgb, 0.22)}` }}>
                <VisualRotator visuals={storyVisuals} className="aspect-[16/9] w-full overflow-hidden rounded-[1.35rem]" imageClassName="h-full w-full object-cover object-center" />
              </div>
            </div>

            <div className="mt-14">
              <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
                {page.capabilities.map((item, index) => (
                  <ScrollReveal key={item.title} delay={index * 140} className="h-full">
                    <div className="flex h-full gap-4">
                      <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg" style={{ backgroundColor: tint(page.accentRgb, 0.1), color: page.accent }}>
                        <CheckCircle2 className="h-4 w-4" />
                      </div>
                      <div>
                        <h3 className="text-base font-black text-slate-950">{item.title}</h3>
                        <p className="mt-2 text-justify text-sm leading-7 text-slate-600">{item.desc}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  )
}

function AreaSafetySystemShowcase({ page, visuals }: ServiceDetailPageProps & { family: ServiceCategory; visuals: DetailVisual[] }) {
  const leftItems = page.capabilities.slice(0, 2)
  const rightItems = page.capabilities.slice(2, 4)

  return (
    <div className="mt-14">
      <div className="relative">
        <div
          className="absolute -inset-5 -z-10 rounded-[2.2rem] opacity-70 blur-2xl"
          style={{ background: `linear-gradient(135deg, ${tint(page.accentRgb, 0.14)}, transparent 62%)` }}
        />

        <div className="grid gap-5 lg:grid-cols-[minmax(0,0.88fr)_minmax(360px,1fr)_minmax(0,0.88fr)] lg:items-center">
          <div className="grid gap-5 lg:grid-rows-2">
            {leftItems.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 140} className="h-full">
                <AreaSafetySystemItem page={page} item={item} />
              </ScrollReveal>
            ))}
          </div>

          <div className="order-first overflow-hidden rounded-[1.6rem] shadow-[0_32px_80px_rgba(15,23,42,0.14)] lg:order-none" style={{ boxShadow: `0 32px 80px rgba(15,23,42,0.14), 0 0 0 1px ${tint(page.accentRgb, 0.22)}` }}>
            <VisualRotator visuals={visuals} className="aspect-square w-full overflow-hidden" imageClassName="h-full w-full object-cover object-center" />
          </div>

          <div className="grid gap-5 lg:grid-rows-2">
            {rightItems.map((item, index) => (
              <ScrollReveal key={item.title} delay={(index + 2) * 140} className="h-full">
                <AreaSafetySystemItem page={page} item={item} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function AreaSafetySystemItem({ page, item }: ServiceDetailPageProps & { item: { title: string; desc: string } }) {
  return (
    <div className="flex h-full min-h-[190px] flex-col justify-center px-2 py-6">
      <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg" style={{ backgroundColor: tint(page.accentRgb, 0.1), color: page.accent }}>
        <CheckCircle2 className="h-4 w-4" />
      </div>
      <h3 className="text-base font-black leading-6 text-slate-950">{item.title}</h3>
      <p className="mt-2 text-justify text-sm leading-7 text-slate-600">{item.desc}</p>
    </div>
  )
}

function OverviewSection({ page, family, variant }: ServiceDetailPageProps & { family: ServiceCategory; variant: DetailVariant }) {
  if (usesSafetyFocusTemplate(page)) return <SafetyFocusOverviewSection page={page} family={family} />
  if (usesEfficiencyFocusTemplate(page)) return <EfficiencyFocusOverviewSection page={page} family={family} />
  if (usesMechanicalFocusTemplate(page)) return <MechanicalFocusOverviewSection page={page} family={family} />
  if (usesEngineeringFocusTemplate(page) || usesOperationsFocusTemplate(page)) return <SolutionFocusOverviewSection page={page} family={family} />

  const theme = serviceCategoryThemes[family]

  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.72fr_1.28fr] lg:px-8">
        <div className="max-w-xl">
          <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-slate-50" style={{ color: page.accent }}>
            <LineChart className="h-6 w-6" />
          </div>
          <h2 className="text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
            Çözümün sahadaki karşılığı
          </h2>
          <p className="mt-5 text-justify text-base leading-8 text-slate-600 [text-wrap:pretty]">
            Önce sahadaki iş akışı, risk ve veri kaynağı anlaşılır; ardından uygulanabilir ilk adım netleştirilir.
          </p>
        </div>
        <div className="max-w-4xl space-y-7 rounded-lg border bg-white p-0" style={{ borderColor: 'transparent' }}>
          {page.overview.map((paragraph, index) => (
            <p
              key={paragraph}
              className={`${index === 0 && (family === 'safety' || variant === 'cinematic') ? 'text-justify text-xl font-black leading-9 text-slate-950 [text-wrap:pretty] sm:text-[22px] sm:leading-10' : 'text-justify text-lg leading-9 text-slate-700 [text-wrap:pretty]'}`}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-10 h-px max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-px w-full" style={{ background: `linear-gradient(90deg, transparent, ${tint(theme.accentRgb, 0.28)}, transparent)` }} />
      </div>
    </section>
  )
}

function SolutionFocusOverviewSection({ page, family }: ServiceDetailPageProps & { family: ServiceCategory }) {
  const theme = serviceCategoryThemes[family]
  const copy = getSolutionFocusCopy(page)
  const operations = family === 'operations'

  if (!copy) return null

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
          <div>
            <div className={`mb-5 inline-flex h-12 w-12 items-center justify-center bg-slate-50 ${operations ? 'rounded-lg' : 'rounded-xl'}`} style={{ color: page.accent }}>
              {page.title === progressPaymentTitle ? <Workflow className="h-6 w-6" /> : operations ? <MapPinned className="h-6 w-6" /> : <Layers3 className="h-6 w-6" />}
            </div>
            <span className="block text-sm font-black uppercase tracking-[0.18em]" style={{ color: page.accent }}>Çözümün sahadaki karşılığı</span>
            <h2 className="mt-3 max-w-xl text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
              {copy.overviewTitle}
            </h2>
          </div>
          <p className="max-w-3xl text-justify text-lg leading-9 text-slate-700 [text-wrap:pretty]">
            {copy.overviewIntro}
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {page.overview.map((paragraph, index) => (
            <ScrollReveal key={paragraph} delay={index * 120}>
              <article
                className={`group h-full border bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md ${operations ? 'rounded-xl' : 'rounded-[1.35rem]'}`}
                style={{ borderColor: theme.border, background: `linear-gradient(150deg, ${tint(page.accentRgb, 0.07)}, rgba(255,255,255,0.98) 42%)` }}
              >
                <div className="text-xs font-black uppercase tracking-[0.18em]" style={{ color: page.accent }}>
                  {String(index + 1).padStart(2, '0')}
                </div>
                <p className="mt-5 text-justify font-normal leading-8 text-slate-700 [text-wrap:pretty] group-hover:font-semibold group-hover:text-slate-900">
                  {paragraph}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function MechanicalFocusOverviewSection({ page, family }: ServiceDetailPageProps & { family: ServiceCategory }) {
  const theme = serviceCategoryThemes[family]

  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.76fr_1.24fr] lg:px-8">
        <div className="lg:pt-2">
          <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm" style={{ color: page.accent }}>
            <Layers3 className="h-6 w-6" />
          </div>
          <h2 className="max-w-md text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
            Tasarım kararını üretim ve montaj koşullarıyla birlikte verin.
          </h2>
          <p className="mt-5 max-w-lg text-justify text-base leading-8 text-slate-600 [text-wrap:pretty]">
            Her çalışma; parçanın ne yapacağı, nasıl üretileceği, nereye bağlanacağı ve prototipte hangi noktaların doğrulanacağı sorularına açık cevap üretir.
          </p>

          <div className="mt-8 grid max-w-lg gap-3">
            {page.stats.map((item) => (
              <div key={`${item.value}-${item.label}`} className="border-l-2 bg-white px-4 py-3 shadow-sm" style={{ borderColor: page.accent }}>
                <div className="text-sm font-black text-slate-950">{item.value}</div>
                <div className="mt-1 text-xs font-semibold leading-5 text-slate-500">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-7">
          {page.overview.map((paragraph, index) => (
            <p
              key={paragraph}
              className={index === 0 ? 'text-justify text-xl font-black leading-9 text-slate-950 [text-wrap:pretty] sm:text-[23px] sm:leading-10' : 'text-justify text-lg leading-9 text-slate-700 [text-wrap:pretty]'}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-12 h-px max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-px w-full" style={{ background: `linear-gradient(90deg, transparent, ${tint(theme.accentRgb, 0.28)}, transparent)` }} />
      </div>
    </section>
  )
}

function SafetyFocusOverviewSection({ page, family }: ServiceDetailPageProps & { family: ServiceCategory }) {
  const theme = serviceCategoryThemes[family]
  const copy = getSafetyFocusCopy(page)

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="mx-auto mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-slate-50" style={{ color: page.accent }}>
            <LineChart className="h-6 w-6" />
          </div>
          <h2 className="text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
            Çözümün sahadaki karşılığı
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-center text-base leading-8 text-slate-600">
            {copy.overviewIntro}
          </p>
        </div>

        <div className="mx-auto mt-11 max-w-5xl space-y-7">
          {page.overview.map((paragraph, index) => (
            <p
              key={paragraph}
              className={index === 0 ? 'text-center text-xl font-black leading-9 text-slate-950 sm:text-[23px] sm:leading-10' : 'text-center text-lg leading-9 text-slate-700'}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-12 h-px max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-px w-full" style={{ background: `linear-gradient(90deg, transparent, ${tint(theme.accentRgb, 0.26)}, transparent)` }} />
      </div>
    </section>
  )
}

function EfficiencyFocusOverviewSection({ page, family }: ServiceDetailPageProps & { family: ServiceCategory }) {
  const theme = serviceCategoryThemes[family]
  const copy = getEfficiencyFocusCopy(page)

  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:px-8">
        <div className="lg:pt-2">
          <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-white shadow-sm" style={{ color: page.accent }}>
            <LineChart className="h-6 w-6" />
          </div>
          <h2 className="max-w-md text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
            Çözümün sahadaki karşılığı
          </h2>
          <p className="mt-5 max-w-lg text-justify text-base leading-8 text-slate-600 [text-wrap:pretty]">
            {copy.overviewIntro}
          </p>
          <div className="mt-8 grid max-w-lg gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {page.stats.map((item) => (
              <div key={`${item.value}-${item.label}`} className="border-l-2 bg-white/70 px-4 py-3 shadow-sm" style={{ borderColor: page.accent }}>
                <div className="text-sm font-black text-slate-950">{item.value}</div>
                <div className="mt-1 text-xs font-semibold leading-5 text-slate-500">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-7">
          {page.overview.map((paragraph, index) => (
            <p
              key={paragraph}
              className={index === 0 ? 'text-justify text-xl font-black leading-9 text-slate-950 [text-wrap:pretty] sm:text-[23px] sm:leading-10' : 'text-justify text-lg leading-9 text-slate-700 [text-wrap:pretty]'}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-12 h-px max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-px w-full" style={{ background: `linear-gradient(90deg, transparent, ${tint(theme.accentRgb, 0.26)}, transparent)` }} />
      </div>
    </section>
  )
}

function CapabilitySection({ page, family, variant }: ServiceDetailPageProps & { family: ServiceCategory; variant: DetailVariant }) {
  if (usesSafetyFocusTemplate(page) || usesEfficiencyFocusTemplate(page) || usesMechanicalFocusTemplate(page) || usesEngineeringFocusTemplate(page) || usesOperationsFocusTemplate(page) || family === 'automation' || family === 'software') return null

  const theme = serviceCategoryThemes[family]
  const cards = page.capabilities
  const compact = family === 'engineering' || variant === 'studio'

  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <span className="text-sm font-black uppercase tracking-[0.18em]" style={{ color: page.accent }}>Yetenekler</span>
            <h2 className="mt-3 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
              Sistemin kurduğu ana katmanlar
            </h2>
          </div>
          <p className="max-w-2xl text-justify text-base leading-7 text-slate-600 [text-wrap:pretty]">
            Donanım, yazılım, veri ve saha uygulaması birlikte düşünülür; çözüm günlük operasyonda karşılık bulacak şekilde tasarlanır.
          </p>
        </div>

        <div className={compact ? 'grid gap-5 md:grid-cols-2' : 'grid gap-5 md:grid-cols-2'}>
          {cards.map((item, index) => {
            const Icon = iconSet[index % iconSet.length]
            const wide = !compact && family === 'safety' && index === 0
            return (
              <div
                key={item.title}
                className={`${wide ? 'md:col-span-2' : ''} group rounded-lg border bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl`}
                style={{ borderColor: theme.border }}
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-slate-50" style={{ color: page.accent }}>
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-black text-slate-950">{item.title}</h3>
                <p className="mt-3 text-justify text-sm leading-7 text-slate-600 [text-wrap:pretty]">{item.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function WorkflowSection({ page, family }: ServiceDetailPageProps & { family: ServiceCategory; variant: DetailVariant }) {
  if (usesMechanicalFocusTemplate(page)) return <MechanicalFocusWorkflowSection page={page} family={family} />

  const theme = serviceCategoryThemes[family]
  const focusCopy = getSolutionFocusCopy(page)
  const justify = usesSafetyFocusTemplate(page) || Boolean(focusCopy)
  const focusedEfficiency = usesEfficiencyFocusTemplate(page)
  const workflowIntro = focusCopy?.workflowIntro || (focusedEfficiency
    ? 'Proje; saha ve veri analiziyle başlar, doğrulama adımlarıyla netleşir.'
    : 'Proje; saha keşfiyle başlar ve kontrollü testlerle netleşir.')
  const workflowTitle = focusCopy?.workflowTitle || (focusedEfficiency ? 'Kurulum ve devreye alma' : 'Keşiften devreye almaya net süreç')
  const tileStyle =
    family === 'operations'
      ? 'rounded-xl bg-white'
      : family === 'automation'
        ? 'rounded-md bg-white'
        : family === 'engineering'
          ? 'rounded-[1.1rem] bg-white'
          : family === 'software'
            ? 'rounded-[1.1rem] bg-white'
            : 'rounded-lg bg-slate-50'

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={`mb-10 grid gap-8 lg:items-end ${focusedEfficiency ? 'lg:grid-cols-[0.72fr_1.28fr]' : 'lg:grid-cols-[0.85fr_1.15fr]'}`}>
          <div>
            <span className="text-sm font-black uppercase tracking-[0.18em]" style={{ color: page.accent }}>Uygulama Akışı</span>
            <h2 className="mt-3 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
              {workflowTitle}
            </h2>
          </div>
          <p className={`${justify ? 'text-justify [text-wrap:pretty]' : ''} text-slate-600 ${focusedEfficiency ? 'text-sm leading-7 xl:text-base xl:leading-8' : 'text-base leading-8'}`}>
            {workflowIntro}
          </p>
        </div>

        <div className={family === 'safety' || family === 'efficiency' ? 'grid gap-4 md:grid-cols-2' : 'space-y-4'}>
          {page.workflow.map((item, index) => (
            <div
              key={item.title}
              className={`${family === 'safety' || family === 'efficiency' ? 'block' : 'grid gap-4 sm:grid-cols-[72px_1fr]'} border p-5 ${tileStyle}`}
              style={{ borderColor: theme.border }}
            >
              <div className="flex items-start gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-sm font-black text-white" style={{ backgroundColor: page.accent }}>
                  {String(index + 1).padStart(2, '0')}
                </div>
              </div>
              <div className={family === 'safety' || family === 'efficiency' ? 'mt-5' : ''}>
                <h3 className="text-lg font-black text-slate-950">{item.title}</h3>
                <p className="mt-2 text-justify text-sm leading-7 text-slate-600 [text-wrap:pretty]">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function MechanicalFocusWorkflowSection({ page, family }: ServiceDetailPageProps & { family: ServiceCategory }) {
  const theme = serviceCategoryThemes[family]
  const deliverables = [
    'Ölçü seti ve ihtiyaç listesi',
    '3D konsept ve montaj modeli',
    'Teknik resim ve imalat planı',
    'Prototip, test notu ve revizyon',
  ]
  const cardPositions = [
    'xl:col-start-1 xl:row-start-1',
    'xl:col-start-1 xl:row-start-2',
    'xl:col-start-3 xl:row-start-1',
    'xl:col-start-3 xl:row-start-2',
  ]

  return (
    <section className="overflow-hidden bg-white py-20">
      <div className="mx-auto max-w-[1150px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-[250px_minmax(0,1fr)_250px] xl:grid-rows-2 xl:items-stretch xl:gap-x-5">
          <ScrollReveal className="order-first flex h-[360px] items-center justify-center overflow-visible md:col-span-2 sm:h-[440px] xl:col-span-1 xl:col-start-2 xl:row-span-2 xl:row-start-1 xl:h-full xl:min-h-[660px]">
            <img
              src="/img/service-unique/mechanical-3d-printer-prototype-transparent.png"
              alt="Filamentli 3D yazıcıda üretilen mekanik prototip parça"
              className="h-auto max-h-[610px] w-[132%] max-w-[820px] object-contain object-center drop-shadow-[0_30px_48px_rgba(15,23,42,0.18)]"
            />
          </ScrollReveal>

            {page.workflow.map((item, index) => (
              <ScrollReveal
                key={item.title}
                delay={index * 130}
                className={cardPositions[index]}
              >
                <div className="flex min-h-[300px] flex-col rounded-[1.1rem] border bg-slate-50 p-5" style={{ borderColor: theme.border }}>
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl text-xs font-black text-white" style={{ backgroundColor: page.accent }}>
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <span className="h-px flex-1" style={{ background: `linear-gradient(90deg, ${tint(page.accentRgb, 0.38)}, transparent)` }} />
                  </div>
                  <h3 className="mt-5 text-base font-black leading-6 text-slate-950">{item.title}</h3>
                  <p className="mt-2 flex-1 text-justify text-[13px] leading-6 text-slate-600 [text-wrap:pretty]">{item.desc}</p>
                  <div className="mt-4 border-t pt-3" style={{ borderColor: theme.border }}>
                    <span className="text-[10px] font-black uppercase tracking-[0.14em]" style={{ color: theme.text }}>Aşama çıktısı</span>
                    <p className="mt-1.5 text-[13px] font-bold leading-5 text-slate-700">{deliverables[index]}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
        </div>
      </div>
    </section>
  )
}

function OutcomesSection({ page, family, variant }: ServiceDetailPageProps & { family: ServiceCategory; variant: DetailVariant }) {
  if (usesSafetyFocusTemplate(page)) return <SafetyFocusOutcomesSection page={page} family={family} />
  if (usesEfficiencyFocusTemplate(page)) return <EfficiencyFocusOutcomesSection page={page} family={family} />
  if (usesMechanicalFocusTemplate(page)) return <MechanicalFocusOutcomesSection page={page} family={family} />
  if (usesEngineeringFocusTemplate(page) || usesOperationsFocusTemplate(page)) return <SolutionFocusOutcomesSection page={page} family={family} />

  const theme = serviceCategoryThemes[family]
  const reverse = variant === 'studio' || variant === 'editorial'
  const automation = family === 'automation'
  const softPanel = automation || family === 'software'

  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div
          className={`rounded-lg border p-8 shadow-sm ${reverse ? 'lg:order-2' : ''} ${softPanel ? 'text-slate-950' : 'bg-white'}`}
          style={softPanel
            ? {
              borderColor: theme.border,
              background: `linear-gradient(145deg, ${tint(page.accentRgb, 0.1)}, rgba(255,255,255,0.98) 48%, ${tint(page.accentRgb, 0.04)} 100%)`,
              boxShadow: `0 0 0 1px ${tint(page.accentRgb, 0.08)}, 0 22px 58px rgba(15,23,42,0.06)`,
            }
            : { borderColor: theme.border }}
        >
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg" style={{ backgroundColor: tint(page.accentRgb, 0.1), color: page.accent }}>
              <CheckCircle2 className="h-5 w-5" />
            </div>
            <h2 className="text-2xl font-black text-slate-950">Beklenen kazanımlar</h2>
          </div>
          <div className="space-y-4">
            {page.outcomes.map((item) => (
              <div key={item} className="flex gap-3 text-sm leading-7 text-slate-700">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0" style={{ color: page.accent }} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div
          className={`rounded-lg border p-8 shadow-sm ${softPanel ? 'text-slate-950' : 'bg-slate-950 text-white'}`}
          style={softPanel
            ? {
              borderColor: theme.border,
              background: `linear-gradient(145deg, ${tint(page.accentRgb, 0.1)}, rgba(255,255,255,0.98) 48%, ${tint(page.accentRgb, 0.04)} 100%)`,
              boxShadow: `0 0 0 1px ${tint(page.accentRgb, 0.08)}, 0 22px 58px rgba(15,23,42,0.06)`,
            }
            : { borderColor: tint(theme.accentRgb, 0.3) }}
        >
          <div className="mb-6 flex items-center gap-3">
            <div className={`flex h-11 w-11 items-center justify-center rounded-lg ${softPanel ? 'bg-white/80' : 'bg-white/10'}`} style={{ color: page.accent }}>
              <CircleDot className="h-5 w-5" />
            </div>
            <h2 className="text-2xl font-black">Tipik kullanım alanları</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {page.useCases.map((item) => (
              <div
                key={item}
                className={`rounded-lg border px-4 py-3 text-sm font-semibold leading-6 shadow-sm ${softPanel ? 'border-white/70 bg-white/80 text-slate-700' : 'border-white/10 bg-white/[0.04] text-slate-200'}`}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function SolutionFocusOutcomesSection({ page, family }: ServiceDetailPageProps & { family: ServiceCategory }) {
  const theme = serviceCategoryThemes[family]
  const copy = getSolutionFocusCopy(page)
  const operations = family === 'operations'

  if (!copy) return null

  const panelStyle = {
    borderColor: theme.border,
    background: `linear-gradient(145deg, ${tint(page.accentRgb, 0.1)}, rgba(255,255,255,0.98) 48%, ${tint(page.accentRgb, 0.04)} 100%)`,
    boxShadow: `0 0 0 1px ${tint(theme.accentRgb, 0.07)}, 0 22px 58px rgba(15,23,42,0.06)`,
  }

  return (
    <section className="bg-white py-20">
      <div className={`mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:px-8 ${operations ? 'lg:grid-cols-[1.08fr_0.92fr]' : 'lg:grid-cols-2'}`}>
        <div className={`border p-8 ${operations ? 'rounded-xl' : 'rounded-[1.5rem]'}`} style={panelStyle}>
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-sm" style={{ color: page.accent }}>
              <CheckCircle2 className="h-5 w-5" />
            </div>
            <h2 className="text-2xl font-black text-slate-950">{copy.outcomesTitle}</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {page.outcomes.map((item) => (
              <div key={item} className="flex gap-3 rounded-xl bg-white/80 px-4 py-3 text-sm font-semibold leading-6 text-slate-700 shadow-sm">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" style={{ color: page.accent }} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={`border p-8 ${operations ? 'rounded-xl' : 'rounded-[1.5rem]'}`} style={panelStyle}>
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-sm" style={{ color: page.accent }}>
              <CircleDot className="h-5 w-5" />
            </div>
            <h2 className="text-2xl font-black text-slate-950">{copy.useCasesTitle}</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {page.useCases.map((item) => (
              <div key={item} className="rounded-xl bg-white/80 px-4 py-3 text-sm font-semibold leading-6 text-slate-700 shadow-sm">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function MechanicalFocusOutcomesSection({ page, family }: ServiceDetailPageProps & { family: ServiceCategory }) {
  const theme = serviceCategoryThemes[family]
  const panelStyle = {
    borderColor: theme.border,
    background: `linear-gradient(145deg, ${tint(page.accentRgb, 0.1)}, rgba(255,255,255,0.98) 48%, ${tint(page.accentRgb, 0.04)} 100%)`,
  }

  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8">
        <div className="rounded-[1.5rem] border p-8 shadow-sm" style={panelStyle}>
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-sm" style={{ color: page.accent }}>
              <CheckCircle2 className="h-5 w-5" />
            </div>
            <h2 className="text-2xl font-black text-slate-950">Tasarım ve prototip kazanımları</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {page.outcomes.map((item) => (
              <div key={item} className="rounded-xl bg-white px-4 py-3 text-sm font-semibold leading-6 text-slate-700 shadow-sm">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[1.5rem] border p-8 shadow-sm" style={panelStyle}>
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-sm" style={{ color: page.accent }}>
              <CircleDot className="h-5 w-5" />
            </div>
            <h2 className="text-2xl font-black text-slate-950">Tipik çalışma alanları</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {page.useCases.map((item) => (
              <div key={item} className="rounded-xl bg-white px-4 py-3 text-sm font-semibold leading-6 text-slate-700 shadow-sm">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function SafetyFocusOutcomesSection({ page, family }: ServiceDetailPageProps & { family: ServiceCategory }) {
  const theme = serviceCategoryThemes[family]
  const panelStyle = {
    borderColor: theme.border,
    background: `linear-gradient(145deg, ${tint(page.accentRgb, 0.08)}, rgba(255,255,255,0.96) 46%, ${tint(page.accentRgb, 0.04)} 100%)`,
  }

  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="rounded-lg border p-8 shadow-sm" style={panelStyle}>
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg" style={{ backgroundColor: tint(page.accentRgb, 0.1), color: page.accent }}>
              <CircleDot className="h-5 w-5" />
            </div>
            <h2 className="text-2xl font-black text-slate-950">Kullanım alanları</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {page.useCases.map((item) => (
              <div key={item} className="rounded-lg bg-white/70 px-4 py-3 text-sm font-semibold leading-6 text-slate-700 shadow-sm">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-lg border p-8 shadow-sm" style={panelStyle}>
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg" style={{ backgroundColor: tint(page.accentRgb, 0.1), color: page.accent }}>
              <CheckCircle2 className="h-5 w-5" />
            </div>
            <h2 className="text-2xl font-black text-slate-950">Beklenen kazanımlar</h2>
          </div>
          <div className="space-y-4">
            {page.outcomes.map((item) => (
              <div key={item} className="flex gap-3 text-sm leading-7 text-slate-700">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0" style={{ color: page.accent }} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function EfficiencyFocusOutcomesSection({ page, family }: ServiceDetailPageProps & { family: ServiceCategory }) {
  const theme = serviceCategoryThemes[family]
  const focusedEfficiency = usesEfficiencyFocusTemplate(page)

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr]">
          <div
            className="rounded-[1.35rem] p-8 text-slate-950"
            style={{
              background: `linear-gradient(145deg, ${tint(page.accentRgb, 0.12)}, rgba(255,255,255,0.95) 48%, ${tint(page.accentRgb, 0.045)} 100%)`,
              boxShadow: `0 0 0 1px ${tint(theme.accentRgb, 0.18)}, 0 22px 58px rgba(15,23,42,0.07)`,
            }}
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-white/80" style={{ color: page.accent }}>
                <CircleDot className="h-5 w-5" />
              </div>
              <h2 className="text-2xl font-black text-slate-950">Kullanım alanları</h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {page.useCases.map((item) => (
                <div key={item} className="rounded-xl bg-white/80 px-4 py-3 text-sm font-semibold leading-6 text-slate-700 shadow-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div
            className={`rounded-[1.35rem] p-8 shadow-[0_24px_64px_rgba(15,23,42,0.10)] ${focusedEfficiency ? 'text-slate-950' : 'bg-slate-950 text-white'}`}
            style={focusedEfficiency ? {
              background: `linear-gradient(145deg, ${tint(page.accentRgb, 0.13)}, rgba(255,255,255,0.98) 48%, ${tint(page.accentRgb, 0.055)} 100%)`,
              boxShadow: `0 0 0 1px ${tint(theme.accentRgb, 0.18)}, 0 22px 58px rgba(15,23,42,0.07)`,
            } : undefined}
          >
            <div className="mb-6 flex items-center gap-3">
              <div className={`flex h-11 w-11 items-center justify-center rounded-lg ${focusedEfficiency ? 'bg-white/80' : 'bg-white/10'}`} style={{ color: theme.accent }}>
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <h2 className="text-2xl font-black">Beklenen kazanımlar</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {page.outcomes.map((item) => (
                <div key={item} className={`flex gap-3 text-sm leading-7 ${focusedEfficiency ? 'text-slate-700' : 'text-slate-200'}`}>
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0" style={{ color: theme.accent }} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function SearchIntentSection({ page, family, title, copy, keywords }: ServiceDetailPageProps & { family: ServiceCategory; title: string; copy: string; keywords: string[] }) {
  if (usesSafetyFocusTemplate(page)) return <SafetyFocusSearchIntentSection page={page} family={family} />
  if (usesEfficiencyFocusTemplate(page)) return <EfficiencyFocusSearchIntentSection page={page} family={family} />
  if (usesEngineeringFocusTemplate(page) || usesOperationsFocusTemplate(page)) return <SolutionFocusSearchIntentSection page={page} family={family} />

  const theme = serviceCategoryThemes[family]

  return (
    <section className="bg-slate-50">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[0.78fr_1.22fr] lg:px-8">
        <div>
          <span className="text-sm font-black uppercase tracking-[0.18em]" style={{ color: page.accent }}>Çözüm Kapsamı</span>
          <h2 className="mt-3 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">{title}</h2>
        </div>
        <div>
          <p className="text-justify text-lg leading-9 text-slate-700 [text-wrap:pretty]">{copy}</p>
          <div className="mt-7 flex flex-wrap gap-2">
            {keywords.map((keyword) => (
              <span key={keyword} className="rounded-full border bg-white px-3 py-1.5 text-xs font-black text-slate-700 shadow-sm" style={{ borderColor: theme.border }}>
                {keyword}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function SolutionFocusSearchIntentSection({ page, family }: ServiceDetailPageProps & { family: ServiceCategory }) {
  const theme = serviceCategoryThemes[family]
  const copy = getSolutionFocusCopy(page)
  const operations = family === 'operations'

  if (!copy) return null

  return (
    <section
      className="bg-white"
      style={operations ? { background: 'linear-gradient(180deg, #fff 0%, #f8fafc 18%, #f8fafc 72%, #fff 92%, #fff 100%)' } : undefined}
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className={`grid gap-10 p-6 sm:p-8 lg:grid-cols-[0.76fr_1.24fr] lg:p-10 ${operations ? 'rounded-xl bg-white' : 'rounded-[1.5rem] bg-slate-50'}`} style={{ boxShadow: `inset 0 0 0 1px ${tint(theme.accentRgb, 0.1)}` }}>
          <div>
            <span className="text-sm font-black uppercase tracking-[0.18em]" style={{ color: page.accent }}>Çözüm Kapsamı</span>
            <h2 className="mt-3 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
              {copy.searchTitle}
            </h2>
          </div>
          <div className="space-y-5 text-justify text-lg leading-9 text-slate-700 [text-wrap:pretty]">
            {copy.searchParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <div className="h-px w-full" style={{ background: `linear-gradient(90deg, ${tint(theme.accentRgb, 0.24)}, transparent)` }} />
          </div>
        </div>
      </div>
    </section>
  )
}

function SafetyFocusSearchIntentSection({ page, family }: ServiceDetailPageProps & { family: ServiceCategory }) {
  const theme = serviceCategoryThemes[family]
  const copy = getSafetyFocusCopy(page)

  return (
    <section className="bg-slate-50">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.78fr_1.22fr] lg:px-8">
        <div>
          <span className="text-sm font-black uppercase tracking-[0.18em]" style={{ color: page.accent }}>Çözüm Kapsamı</span>
          <h2 className="mt-3 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
            {copy.searchTitle}
          </h2>
        </div>
        <div className="space-y-5 text-justify text-lg leading-9 text-slate-700">
          {copy.searchParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <div className="h-px w-full" style={{ background: `linear-gradient(90deg, ${tint(theme.accentRgb, 0.22)}, transparent)` }} />
        </div>
      </div>
    </section>
  )
}

function EfficiencyFocusSearchIntentSection({ page, family }: ServiceDetailPageProps & { family: ServiceCategory }) {
  const theme = serviceCategoryThemes[family]
  const copy = getEfficiencyFocusCopy(page)

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 rounded-[1.5rem] bg-slate-50 p-6 sm:p-8 lg:grid-cols-[0.76fr_1.24fr] lg:p-10">
          <div>
            <span className="text-sm font-black uppercase tracking-[0.18em]" style={{ color: page.accent }}>Çözüm Kapsamı</span>
            <h2 className="mt-3 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
              {copy.searchTitle}
            </h2>
          </div>
          <div className="space-y-5 text-justify text-lg leading-9 text-slate-700 [text-wrap:pretty]">
            {copy.searchParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <div className="h-px w-full" style={{ background: `linear-gradient(90deg, ${tint(theme.accentRgb, 0.24)}, transparent)` }} />
          </div>
        </div>
      </div>
    </section>
  )
}

function CtaBand({ page, family }: ServiceDetailPageProps & { family: ServiceCategory }) {
  const theme = serviceCategoryThemes[family]
  const justify = usesSafetyFocusTemplate(page)
  const focusCopy = getSolutionFocusCopy(page)

  return (
    <section className="px-4 pb-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-lg p-8 text-white shadow-2xl sm:p-10 lg:p-14" style={{ background: `linear-gradient(135deg, #020617 0%, ${tint(theme.accentRgb, 0.42)} 100%)` }}>
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <span className="text-sm font-black uppercase tracking-[0.18em]" style={{ color: theme.accent }}>IYESYS ile başlayın</span>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">{focusCopy?.ctaTitle || 'Bu çözümü kendi sahanıza göre netleştirelim.'}</h2>
            <p className={`mt-4 max-w-3xl text-base leading-8 text-slate-300 ${justify || focusCopy ? 'text-justify [text-wrap:pretty]' : ''}`}>
              {focusCopy?.ctaCopy || 'Kamera, sensör, yazılım, otomasyon veya mevcut altyapınız hangi seviyede olursa olsun; önce gerçek ihtiyacı ve uygulanabilir ilk adımı birlikte çıkarıyoruz.'}
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg px-6 py-4 text-sm font-black text-white transition hover:-translate-y-0.5"
            style={{ backgroundColor: page.accent, boxShadow: `0 18px 44px ${tint(page.accentRgb, 0.25)}` }}
          >
            Demo Talep Et
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

function VisualRotator({ visuals, className, imageClassName }: { visuals: DetailVisual[]; className: string; imageClassName: string }) {
  return <VisualRotatorClient visuals={visuals} className={className} imageClassName={imageClassName} />
}

function HeroStats({ page, family, className = '', dark = false }: ServiceDetailPageProps & { family: ServiceCategory; className?: string; dark?: boolean }) {
  const theme = serviceCategoryThemes[family]

  return (
    <div className={`grid gap-3 sm:grid-cols-3 ${className}`}>
      {page.stats.map((item) => (
        <div
          key={`${item.value}-${item.label}`}
          className={`rounded-lg border p-4 shadow-sm ${dark ? 'border-white/10 bg-white/[0.08] text-white' : 'bg-white text-slate-950'}`}
          style={dark ? undefined : { borderColor: theme.border }}
        >
          <div className="text-xl font-black" style={{ color: dark ? '#fff' : page.accent }}>{item.value}</div>
          <div className={`mt-1 text-xs font-bold leading-5 ${dark ? 'text-slate-300' : 'text-slate-500'}`}>{item.label}</div>
        </div>
      ))}
    </div>
  )
}

function MetricTile({ page, item }: ServiceDetailPageProps & { item: { value: string; label: string } }) {
  return (
    <div className="rounded-lg bg-slate-50 p-4">
      <div className="text-xl font-black" style={{ color: page.accent }}>{item.value}</div>
      <div className="mt-1 text-xs font-bold leading-5 text-slate-500">{item.label}</div>
    </div>
  )
}

function HeroPrimaryButton({ page }: ServiceDetailPageProps) {
  return (
    <Link
      href="/contact"
      className="inline-flex items-center justify-center gap-2 rounded-lg px-6 py-4 text-sm font-black text-white transition hover:-translate-y-0.5"
      style={{ backgroundColor: page.accent, boxShadow: `0 18px 44px ${tint(page.accentRgb, 0.28)}` }}
    >
      Proje Görüşmesi Planla
      <ArrowRight className="h-4 w-4" />
    </Link>
  )
}

function HeroSecondaryButton({ light = false }: { light?: boolean }) {
  return (
    <Link
      href="/services"
      className={`inline-flex items-center justify-center gap-2 rounded-lg border px-6 py-4 text-sm font-black transition hover:-translate-y-0.5 ${
        light ? 'border-slate-200 bg-white text-slate-950 hover:bg-slate-50' : 'border-white/20 text-white hover:bg-white/10'
      }`}
    >
      Tüm Çözümler
      <Workflow className="h-4 w-4" />
    </Link>
  )
}
