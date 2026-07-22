export type ServiceDetailContent = {
  eyebrow: string
  title: string
  description: string
  lead: string
  image: {
    src: string
    alt: string
  }
  accent: string
  accentRgb: string
  stats: Array<{
    value: string
    label: string
  }>
  overview: string[]
  capabilities: Array<{
    title: string
    desc: string
  }>
  workflow: Array<{
    title: string
    desc: string
  }>
  outcomes: string[]
  useCases: string[]
}

export const serviceDetailContent = {
  'arac-takip': {
    eyebrow: 'Filo Yönetimi',
    title: 'Filo Yönetimi ve Araç Takip Sistemleri',
    description: 'IYESYS filo yönetimi ve araç takip sistemi; canlı konum, rota, görev, sürüş davranışı ve bakım verilerini tek operasyon ekranında birleştirir.',
    lead: 'Araçların nerede olduğunu görmekle yetinmeyin; bekleme, rota sapması, görev ilerlemesi ve bakım ihtiyacını aynı veri akışında yönetin.',
    image: {
      src: '/img/service-detail/arac-takip-sistemleri.png',
      alt: 'Lojistik sahasında tablet üzerinden araç takip sistemi izleyen operasyon yöneticisi',
    },
    accent: '#D97706',
    accentRgb: '217, 119, 6',
    stats: [
      { value: 'Canlı Harita', label: 'konum, hareket ve bekleme takibi' },
      { value: 'Rota & Bölge', label: 'geofence ve kural bazlı uyarılar' },
      { value: 'Operasyon', label: 'görev, sürücü ve bakım görünürlüğü' },
    ],
    overview: [
      'Filo yönetiminde yalnızca anlık konum değil, aracın göreviyle birlikte nasıl hareket ettiği önemlidir. IYESYS; servis araçları, lojistik filoları, saha ekipleri ve işletme içi taşıma araçları için konum verisini rota, görev, sürücü ve zaman bilgisiyle ilişkilendirir.',
      'Rota dışına çıkma, uzun bekleme, kritik bölgeye giriş, hız ihlali, görev başlangıcı veya teslimat tamamlanması gibi olaylar işletmenin kurallarına göre otomatik kayda alınabilir. Operasyon ekibi gecikmeleri harita üzerinden görür ve sahaya daha erken müdahale eder.',
      'Kilometre, çalışma süresi ve kullanım yoğunluğu; bakım planı, servis kaydı ve araç uygunluk durumu ile birlikte izlenebilir. Yönetim ekranları günlük operasyonu sadeleştirirken geçmiş kayıtlar kapasite, rota ve filo maliyeti kararları için karşılaştırılabilir veri oluşturur.',
    ],
    capabilities: [
      { title: 'Canlı Filo Haritası', desc: 'Araç konumu, hareket yönü, hız, bekleme süresi ve son iletişim bilgisi tek harita üzerinde izlenir.' },
      { title: 'Rota, Bölge ve Uyarı Kuralları', desc: 'Çalışma bölgeleri, yasak alanlar, zaman pencereleri ve rota sapmaları için otomatik bildirim senaryoları tanımlanır.' },
      { title: 'Sürüş ve Kullanım Analizi', desc: 'Ani hızlanma, sert fren, uzun rölanti, plansız duruş ve kullanım yoğunluğu araç veya sürücü bazında raporlanır.' },
      { title: 'Görev ve Bakım Entegrasyonu', desc: 'Saha görevleri konum kayıtlarıyla eşleştirilir; kilometre veya çalışma saatine bağlı bakım hatırlatmaları oluşturulur.' },
    ],
    workflow: [
      { title: 'Filo ve Operasyon Keşfi', desc: 'Araç tipleri, görev yapısı, çalışma bölgeleri, kullanıcı rolleri ve takip hedefleri netleştirilir.' },
      { title: 'Cihaz ve Veri Bağlantısı', desc: 'GPS veya IoT cihazları kurulur; mevcut araç ve görev verileri güvenli biçimde sisteme bağlanır.' },
      { title: 'Kural ve Ekran Tasarımı', desc: 'Rota, bölge, bekleme, hız, görev ve bakım kuralları operasyonun gerçek çalışma düzenine göre hazırlanır.' },
      { title: 'Pilot ve Raporlama', desc: 'Seçilen araçlarda pilot kullanım doğrulanır; canlı ekranlar ve yönetim raporları devreye alınır.' },
    ],
    outcomes: [
      'Kayıp zamanın, uzun beklemelerin ve rota sapmalarının görünür hale gelmesi',
      'Görev dağılımı ve araç kullanımının gerçek saha verisine göre planlanması',
      'Bakım kararlarının kilometre ve çalışma süresi kayıtlarına dayanması',
      'Saha, merkez ve müşteri ekipleri arasında daha izlenebilir koordinasyon kurulması',
    ],
    useCases: [
      'Servis ve bakım ekipleri',
      'Lojistik ve dağıtım filoları',
      'Fabrika içi taşıma araçları',
      'Şantiye ve saha operasyonları',
    ],
  },
  'arge-danismanlik': {
    eyebrow: 'Ar-Ge ve Mühendislik',
    title: 'Ar-Ge ve Mühendislik Danışmanlığı',
    description: 'IYESYS Ar-Ge danışmanlığı; teknik fikirleri fizibilite, prototip, doğrulama, saha pilotu ve ürünleşme adımlarından oluşan uygulanabilir bir mühendislik yol haritasına dönüştürür.',
    lead: 'Yeni ürün ve sistem fikirlerini; elektronik, mekanik, yazılım, sensör, otomasyon ve gerçek saha koşullarıyla birlikte doğrulayın.',
    image: {
      src: '/img/service-detail/arge-danismanlik.png',
      alt: 'Endüstriyel Ar-Ge laboratuvarında prototip üzerinde çalışan mühendisler',
    },
    accent: '#14B8A6',
    accentRgb: '20, 184, 166',
    stats: [
      { value: 'Fizibilite', label: 'teknik risk ve çözüm analizi' },
      { value: 'MVP', label: 'ölçülebilir çalışan prototip' },
      { value: 'Pilot', label: 'saha doğrulaması ve ürünleşme planı' },
    ],
    overview: [
      'Ar-Ge projelerinde ilk hedef mümkün olan en fazla özelliği geliştirmek değil, çözülmesi gereken problemi ve doğrulanması gereken teknik varsayımı netleştirmektir. IYESYS; kullanıcı ihtiyacını, saha koşullarını, veri kaynağını ve kabul kriterlerini aynı başlangıç çerçevesinde toplar.',
      'Sensör ve kamera seçimi, elektronik mimari, gömülü yazılım, haberleşme, mekanik yapı, güç gereksinimi ve otomasyon bağlantıları birbiriyle uyumlu biçimde değerlendirilir. Kritik riskler önce küçük test düzenekleri ve çalışan prototiplerle ölçülür.',
      'Doğrulanan yaklaşım saha pilotuna taşınır; performans, dayanım, kullanım ve bakım geri bildirimleri kayıt altına alınır. Böylece proje bir sunum veya demo seviyesinde kalmaz, yatırım ve ürünleşme kararı için somut teknik veriye dayanır.',
    ],
    capabilities: [
      { title: 'Teknik Fizibilite ve Risk Analizi', desc: 'Alternatif teknolojiler maliyet, uygulanabilirlik, entegrasyon ve saha riski açısından karşılaştırılır.' },
      { title: 'MVP ve Test Düzeneği', desc: 'Kritik varsayımı hızlı biçimde doğrulayacak çalışan prototip, deney düzeneği veya kavram kanıtı hazırlanır.' },
      { title: 'Saha Pilot Planı', desc: 'Gerçek kullanım koşulları, kabul kriterleri, ölçüm yöntemi ve başarı metrikleri netleştirilir.' },
      { title: 'Ürünleşme Yol Haritası', desc: 'Pilot sonrası tasarım revizyonları, üretilebilirlik, bakım, servis, sertifikasyon ve ölçekleme adımları planlanır.' },
    ],
    workflow: [
      { title: 'Problem ve Kabul Kriteri', desc: 'İş hedefi, kullanıcı, saha koşulu, teknik sınırlar ve ölçülebilir başarı kriterleri belirlenir.' },
      { title: 'Konsept ve Fizibilite', desc: 'Çözüm seçenekleri teknik risk, maliyet, süre ve beklenen değer açısından karşılaştırılır.' },
      { title: 'Prototip ve Doğrulama', desc: 'Seçilen yaklaşım çalışan bir MVP ile test edilir; sonuçlar ölçülerek tasarım revize edilir.' },
      { title: 'Pilot ve Yol Haritası', desc: 'Saha pilotu tamamlanır; ürünleştirme, entegrasyon, bakım ve ölçekleme adımları planlanır.' },
    ],
    outcomes: [
      'Belirsiz fikirlerin ölçülebilir teknik hedeflere dönüşmesi',
      'Kritik teknoloji ve entegrasyon risklerinin yatırım öncesinde görülmesi',
      'Prototip ve saha pilotlarının kontrollü kabul kriterleriyle yürütülmesi',
      'Yazılım, elektronik, mekanik ve operasyon ekipleri arasında ortak teknik dil kurulması',
    ],
    useCases: [
      'Yeni ürün fikri doğrulama',
      'AI kamera ve IoT prototipleri',
      'Makine imalatçıları için akıllı ürün modülleri',
      'Kurumsal inovasyon ve dijital dönüşüm projeleri',
    ],
  },
  'gida-firmalari-kamera-hijyen': {
    eyebrow: 'Gıda Güvenliği',
    title: 'Gıda Firmaları İçin Kamera ile Hijyen Tespiti',
    description: 'IYESYS hijyen tespit sistemi; mevcut kameralarınız veya projeye özel kurulacak kameralarla bone, maske, eldiven ve önlük gibi hijyen kıyafeti kurallarını yapay zeka ile denetler.',
    lead: 'Gıda üretiminde hijyen kıyafetlerinin doğru kullanılıp kullanılmadığını kamera görüntüleriyle takip edin, ihlalleri yönetim paneline aktarın ve kalite ekiplerinin denetim sürecini daha kayıtlı hale getirin.',
    image: {
      src: '/img/service-detail/gida-hijyen-tespiti.png',
      alt: 'Gıda üretim hattında hijyen ekipmanı tespiti yapan yapay zeka kamera sistemi',
    },
    accent: '#65A30D',
    accentRgb: '101, 163, 13',
    stats: [
      { value: 'KKD', label: 've hijyen ekipmanı kontrolü' },
      { value: 'Kamera', label: 'mevcut veya yeni kurulum' },
      { value: 'Panel', label: 'ihlaller ve denetim kayıtları' },
    ],
    overview: [
      'Gıda üretim tesislerinde hijyen kuralları, kalite güvence ve iş sürekliliği açısından kritik öneme sahiptir. IYESYS hijyen tespit sistemi; bone, maske, eldiven, önlük ve tesisinize özel hijyen kriterlerini kamera görüntüleri üzerinden analiz eder.',
      'Çözüm, uygun kamera açısı bulunan tesislerde mevcut kamera altyapısı üzerinden çalışabilir. Kritik hijyen noktaları için doğru açı, ışık ve kapsama alanına sahip ek kamera yerleşimi de planlanabilir.',
      'Kural ihlali oluştuğunda olay görsel kanıtıyla birlikte yönetim paneline düşer. Kalite, vardiya veya üretim sorumluları alan, saat, hat ve ihlal türüne göre kayıtları inceleyebilir; tekrar eden sorunları eğitim ve denetim süreçlerine veri olarak taşıyabilir.',
    ],
    capabilities: [
      { title: 'Hijyen Kıyafeti Kontrol Sistemi', desc: 'Bone, maske, eldiven, önlük ve tesisinize özel hijyen kıyafeti kuralları üretim alanına göre tanımlanır.' },
      { title: 'Kamera Analiz Katmanı', desc: 'Mevcut veya projeye özel kameralar; üretim, paketleme, hazırlık ve geçiş alanlarında hijyen kontrolü için analiz edilir.' },
      { title: 'Yönetim Paneli Bildirimi', desc: 'İhlaller görsel kanıt, zaman, alan, hat ve kural bilgisiyle yönetim paneline aktarılır.' },
      { title: 'Kalite ve Denetim Raporlama', desc: 'Tekrarlayan ihlal noktaları kalite güvence, eğitim ve müşteri denetimi süreçleri için raporlanır.' },
    ],
    workflow: [
      { title: 'Kamera Analizi', desc: 'Mevcut kamera açıları, ışık koşulları ve kritik kontrol noktaları değerlendirilir.' },
      { title: 'Kural Tanımı', desc: 'Her alan için hangi hijyen ekipmanının zorunlu olduğu belirlenir.' },
      { title: 'Pilot İzleme', desc: 'Model, gerçek üretim görüntüleriyle test edilerek hatalı uyarılar azaltılır.' },
      { title: 'Panel Devreye Alma', desc: 'İhlal kayıtları, görsel doğrulama ve rapor ekranları kullanıma alınır.' },
    ],
    outcomes: [
      'Hijyen kurallarının daha tutarlı ve kayıtlı denetlenmesi',
      'Kalite ekiplerinin manuel kontrol yükünün azalması',
      'Tekrarlayan ihlal noktalarının görünür hale gelmesi',
      'Denetim ve müşteri ziyaretlerinde daha güçlü kanıt sunulması',
    ],
    useCases: [
      'Et, süt ve hazır gıda üretim hatları',
      'Paketleme ve dolum alanları',
      'Soğuk zincir hazırlık alanları',
      'Kalite güvence denetimleri',
    ],
  },
  hakedis: {
    eyebrow: 'Hakediş Yönetimi',
    title: 'Hakediş ve Operasyon Yönetimi',
    description: 'IYESYS hakediş ve operasyon yönetimi; iş kalemlerini, saha ilerlemesini, fotoğraflı kanıtları, kontrol notlarını ve onay süreçlerini tek dijital kayıt yapısında birleştirir.',
    lead: 'Sahada tamamlanan işi miktar, konum, tarih ve fotoğrafla kaydedin; kontrol, revizyon ve onay sürecinden geçirerek dönemsel hakedişi doğrulanabilir verilerle hazırlayın.',
    image: {
      src: '/img/service-detail/hakedis-operasyon-yonetimi.png',
      alt: 'Endüstriyel sahada tablet üzerinden hakediş ve iş ilerleme kontrolü yapan mühendis',
    },
    accent: '#EA580C',
    accentRgb: '234, 88, 12',
    stats: [
      { value: 'Saha Kaydı', label: 'iş kalemi, miktar ve konum bilgisi' },
      { value: 'Kanıtlı Onay', label: 'fotoğraf, zaman ve kontrol geçmişi' },
      { value: 'Hakediş', label: 'dönemsel rapor ve ödeme hazırlığı' },
    ],
    overview: [
      'Hakediş süreçlerindeki temel sorun, sahada tamamlanan iş ile ofiste hazırlanan dönemsel rapor arasında doğrulanabilir bir kayıt zinciri bulunmamasıdır. IYESYS, poz ve iş kalemlerini proje, lokasyon, ekip ve dönem bilgisiyle dijitalleştirir.',
      'Saha ekibi tamamlanan işi mobil cihazdan miktar, açıklama, konum, tarih ve fotoğraf bilgisiyle kaydeder. Kontrol ekibi kaydı inceler; eksik bilgi için revizyon ister, uygun işi onaylar ve tüm karar geçmişini aynı kayıt üzerinde tutar.',
      'Onaylanan işler dönemsel ilerleme ve hakediş raporlarına otomatik olarak taşınır. Bu yapı taşeron, montaj, bakım, teknik servis ve şantiye operasyonlarında itirazları azaltır; rapor hazırlama süresini kısaltır ve proje hafızasını kurumsallaştırır.',
    ],
    capabilities: [
      { title: 'Poz ve İş Kalemi Yönetimi', desc: 'Miktar, ölçü birimi, lokasyon, ekip, sözleşme kalemi ve ilerleme durumu tek kayıt yapısında tutulur.' },
      { title: 'Fotoğraflı Saha Kanıtı', desc: 'Tamamlanan işler zaman, konum, açıklama ve görsel kanıtla kaydedilerek ilgili iş kalemine bağlanır.' },
      { title: 'Kontrol ve Onay Akışı', desc: 'Saha, kontrol, taşeron ve yönetim rolleri için revizyon, kabul ve onay adımları tanımlanır.' },
      { title: 'Hakediş ve İlerleme Raporu', desc: 'Onaylanan kayıtlar dönem, proje, lokasyon ve ekip bazında hakediş ve performans çıktılarına dönüştürülür.' },
    ],
    workflow: [
      { title: 'Proje ve İş Yapısı', desc: 'Pozlar, lokasyonlar, ölçü birimleri, ekipler ve kullanıcı yetkileri sisteme aktarılır.' },
      { title: 'Mobil Saha Kaydı', desc: 'Ekipler tamamlanan işi miktar, açıklama ve fotoğraflı kanıtla ilgili iş kalemine gönderir.' },
      { title: 'Kontrol ve Revizyon', desc: 'Yetkili kişiler kayıtları inceler; eksik bilgiyi revizyona gönderir veya uygun işi onaylar.' },
      { title: 'Dönemsel Hakediş', desc: 'Onaylanan kayıtlar seçilen dönem için ilerleme özeti ve hakediş raporuna dönüştürülür.' },
    ],
    outcomes: [
      'Saha ile ofis arasındaki ilerleme bilgisinin aynı kayıt üzerinde buluşması',
      'Hakediş raporlarının daha hızlı ve kanıtlı hazırlanması',
      'Revizyon, kabul ve onay kararlarının izlenebilir hale gelmesi',
      'Taşeron, ekip ve proje performansının karşılaştırılabilir verilerle izlenmesi',
    ],
    useCases: [
      'Endüstriyel montaj projeleri',
      'Bakım ve servis ekipleri',
      'Şantiye ilerleme takibi',
      'Taşeron hakediş yönetimi',
    ],
  },
  'kalite-kontrol': {
    eyebrow: 'Yapay Zeka Destekli Üretim',
    title: 'Kalite Kontrol',
    description: 'IYESYS kalite kontrol çözümleri; üretim hatlarında görsel hataları, ölçü sapmalarını ve tekrar eden kalite problemlerini yapay zeka ile izler.',
    lead: 'Ürün kalitesini üretim akışının içinde takip ederek hatayı erken yakalayın; tekrar eden problemleri veriye dayalı azaltın.',
    image: {
      src: '/img/service-detail/kalite-kontrol.png',
      alt: 'Üretim hattında makine görüşü ile kalite kontrol yapan kamera sistemi',
    },
    accent: '#2563EB',
    accentRgb: '37, 99, 235',
    stats: [
      { value: 'AI', label: 'görüntü işleme altyapısı' },
      { value: 'Hat üstü', label: 'anlık kontrol noktaları' },
      { value: 'İzlenebilir', label: 'hata ve parti kayıtları' },
    ],
    overview: [
      'Üretimde kalite kontrolün en zor tarafı, aynı kusurun farklı ürün, ışık ve konum koşullarında değişken görünmesidir. IYESYS; kamera, lens, aydınlatma ve model eğitimini birlikte ele alarak kontrol noktasını gerçek üretim ritmine uygun kurar.',
      'Sistem, operatör kararını destekleyen daha tutarlı ve hızlı bir kontrol katmanı oluşturur. Kritik noktalarda hatalı ürün ayrıştırma, uyarı üretme veya kalite ekibine kayıt düşme gibi senaryolar uygulanabilir.',
      'Her üretim hattı farklıdır. Bu nedenle kamera konumu, ışık açısı, parça hızı, tolerans aralığı ve raporlama ihtiyacı proje başlangıcında birlikte tasarlanır. Amaç, yüksek doğruluk kadar sürdürülebilir bakım ve sahada güvenilir kullanım sağlamaktır.',
    ],
    capabilities: [
      { title: 'Kamera, Lens ve Aydınlatma Sistemi', desc: 'Parça, yüzey ve hat hızına uygun kamera, lens ve kontrollü aydınlatma kurgusu hazırlanır.' },
      { title: 'Yapay Zeka Görüntü İşleme Modeli', desc: 'Eksik parça, yanlış montaj, yüzey kusuru, renk farkı ve ölçüye bağlı görsel sapmalar üretim verisiyle analiz edilir.' },
      { title: 'Hat Entegrasyonu ve Ayırma', desc: 'PLC, ayırıcı mekanizma, ikaz sistemi veya üretim takip yazılımıyla bağlantı kurularak hat üstü aksiyon alınır.' },
      { title: 'Kalite Paneli ve Raporlama', desc: 'Hata tipi, istasyon, zaman, parti ve ürün bazlı kayıtlar kalite iyileştirme sürecine aktarılır.' },
    ],
    workflow: [
      { title: 'Numune Analizi', desc: 'İyi ve hatalı ürün örnekleri incelenerek kontrol kriterleri netleştirilir.' },
      { title: 'Görüntü Altyapısı', desc: 'Kamera, lens, ışık ve mekanik yerleşim hat koşullarına göre belirlenir.' },
      { title: 'Model ve Kural', desc: 'AI modeli veya görüntü işleme kuralları gerçek üretim verisiyle doğrulanır.' },
      { title: 'Hat Devreye Alma', desc: 'Uyarı, ayırma, kayıt ve raporlama senaryoları üretime alınır.' },
    ],
    outcomes: [
      'Hatalı ürünlerin daha erken yakalanması',
      'Operatöre bağlı kontrol değişkenliğinin azalması',
      'Kalite problemlerinin kaynağına dair daha net veri oluşması',
      'Müşteri şikayeti ve yeniden işleme maliyetlerinin düşürülmesi',
    ],
    useCases: [
      'Montaj doğrulama',
      'Yüzey kusuru kontrolü',
      'Eksik parça ve yön kontrolü',
      'Paketleme ve etiket doğrulama',
    ],
  },
  'kamera-sistemi-isg-entegrasyonu': {
    eyebrow: 'Mevcut Kamera Altyapısı',
    title: 'Mevcut Kamera Sistemleri ile İSG Entegrasyonu',
    description: 'IYESYS mevcut kamera İSG entegrasyonu; sahadaki IP kamera altyapısını RTSP görüntü akışı üzerinden yapay zeka analiz katmanına bağlar ve forklift güvenliği, KKD kontrolü, tehlikeli alan yönetimi gibi senaryoları mevcut kameralarla çalıştırır.',
    lead: 'Mevcut kamera altyapınızı RTSP görüntü akışlarıyla akıllı İSG denetim katmanına bağlayın; forklift güvenliği, KKD kontrolü, tehlikeli alan güvenliği ve saha risklerini yönetim panelinden izlenebilir hale getirin.',
    image: {
      src: '/img/service-detail/kamera-isg-entegrasyonu.png',
      alt: 'Mevcut kamera sistemi üzerinden İSG ekipmanı ve alan ihlali analizi yapan yapay zeka paneli',
    },
    accent: '#10B981',
    accentRgb: '16, 185, 129',
    stats: [
      { value: 'RTSP', label: 'kamera sunucu bağlantısı' },
      { value: 'Mevcut', label: 'kamera altyapısıyla hızlı başlangıç' },
      { value: 'İSG', label: 'forklift, KKD ve alan güvenliği' },
    ],
    overview: [
      'IYESYS, mevcut IP kamera altyapısını yapay zeka tabanlı İSG denetim katmanına dönüştürerek kamera görüntülerini aktif risk yönetimi için kullanılabilir hale getirir.',
      'Sistem; forklift güvenliği, KKD güvenliği, tehlikeli alan güvenliği, yasak bölge ihlali ve tesisinize özel İSG senaryoları için kurgulanabilir. Uygun kamera açılarında mevcut görüntüler üzerinden analiz yapılır.',
      'Bağlantı, kamera veya kamera sunucusundan alınan RTSP görüntü akışı üzerinden planlanır. İlk adımda açı, çözünürlük, ışık, mesafe ve kapsama alanı değerlendirilir; uygun kameralarda pilot kurulum yapılır ve sonuçlar yönetim paneli üzerinden takip edilir.',
    ],
    capabilities: [
      { title: 'Mevcut Kamera Bağlantısı', desc: 'IP kamera veya kamera sunucusundan alınan RTSP görüntü akışı yapay zeka analiz altyapısına bağlanır.' },
      { title: 'Yapay Zeka İSG Analiz Katmanı', desc: 'Forklift güvenliği, KKD kontrolü, tehlikeli alan ihlali ve özel saha kuralları kamera görüntüsü üzerinden çalıştırılır.' },
      { title: 'Uyarı ve Olay Kaydı', desc: 'İhlal oluştuğunda olay zamanı, kamera bilgisi, alan ve kural türü kayıt altına alınır; ilgili ekipler uyarılabilir.' },
      { title: 'Yönetim Paneli ve Raporlama', desc: 'Kamera, alan, tarih, vardiya ve ihlal türüne göre raporlar oluşturulur; tekrar eden risk noktaları görünür hale gelir.' },
    ],
    workflow: [
      { title: 'Kamera Keşfi', desc: 'Mevcut kameraların teknik ve görsel uygunluğu incelenir.' },
      { title: 'Risk Haritası', desc: 'Hangi alanda hangi İSG kuralının takip edileceği belirlenir.' },
      { title: 'Pilot Model', desc: 'Seçilen kameralarla gerçek saha görüntüsü üzerinden doğrulama yapılır.' },
      { title: 'Yaygınlaştırma', desc: 'Başarılı senaryolar diğer alanlara kontrollü şekilde genişletilir.' },
    ],
    outcomes: [
      'Mevcut kamera yatırımının daha aktif kullanılması',
      'İSG ihlallerinin kayıtlı ve ölçülebilir hale gelmesi',
      'Saha denetimlerinin daha hedefli yapılması',
      'Kritik alanlarda anlık farkındalığın artması',
    ],
    useCases: [
      'KKD denetimi',
      'Yasak bölge ve kırmızı alan ihlalleri',
      'Yaya yolu ve ekipman etkileşimi',
      'Uzaktan saha gözetimi',
    ],
  },
  'magaza-isletme-verimlilik': {
    eyebrow: 'Perakende ve İşletme Analitiği',
    title: 'Mağaza / İşletmede Verimlilik Analizi',
    description: 'IYESYS mağaza ve işletme verimlilik analizi; yoğunluk, bekleme, alan kullanımı ve personel planlamasını anlaşılır metriklerle yönetilebilir hale getirir.',
    lead: 'İşletmenizdeki hareketi yoğunluk, bekleme ve alan kullanım verileriyle okuyun; daha doğru planlama kararları alın.',
    image: {
      src: '/img/service-detail/magaza-isletme-verimlilik.png',
      alt: 'Perakende mağazada tablet üzerinden yoğunluk ve müşteri akışı analizi yapan yönetici',
    },
    accent: '#0EA5E9',
    accentRgb: '14, 165, 233',
    stats: [
      { value: 'Isı haritası', label: 've alan yoğunluğu' },
      { value: 'Kuyruk', label: 've bekleme analizi' },
      { value: 'Planlı', label: 'personel ve alan yönetimi' },
    ],
    overview: [
      'Mağaza ve işletmelerde doğru karar, yalnızca satış sonucuna değil alanın gün içinde nasıl kullanıldığına bakarak verilir. Müşteri yoğunluğu, bekleme noktaları, servis hızı ve personel ihtiyacı birlikte izlendiğinde operasyon daha net okunur.',
      'IYESYS verimlilik analizi, kamera veya sensör kaynaklı verileri anonimleştirilmiş akış bilgisine dönüştürür. Alanların nasıl kullanıldığını, darboğazların nerede oluştuğunu ve personel planının gerçek yoğunlukla ne kadar uyumlu olduğunu anlaşılır hale getirir.',
      'Sistem mağaza, depo, servis noktası, resepsiyon, üretim yan alanı veya çok şubeli işletmeler için kurgulanabilir. Yönetim ekibi düzenli raporlarla karar alır.',
    ],
    capabilities: [
      { title: 'Alan Yoğunluğu Analizi', desc: 'Mağaza, servis, kabul veya işletme alanlarında yoğunluk ve kullanım eğilimleri anlaşılır grafiklere dönüştürülür.' },
      { title: 'Kuyruk ve Bekleme Analizi', desc: 'Kasa, danışma, servis veya kabul noktalarında bekleme süresi ve darboğaz oluşumu takip edilir.' },
      { title: 'Personel ve Alan Planlama', desc: 'Yoğunluk saatleri, alan kullanımı ve görev dağılımı daha dengeli vardiya planı için birlikte değerlendirilir.' },
      { title: 'Şube Raporlama Paneli', desc: 'Birden fazla lokasyon aynı metriklerle karşılaştırılır; yönetim ekibi şube bazlı eğilimleri tek ekrandan izler.' },
    ],
    workflow: [
      { title: 'Alan Haritası', desc: 'İzlenecek bölgeler ve operasyon hedefleri belirlenir.' },
      { title: 'Veri Kaynağı', desc: 'Kamera veya sensör altyapısının uygunluğu değerlendirilir.' },
      { title: 'Metrik Tasarımı', desc: 'Yoğunluk, bekleme, dönüşüm veya kullanım oranı gibi göstergeler tanımlanır.' },
      { title: 'Yönetim Raporu', desc: 'Günlük, haftalık ve şube bazlı raporlar oluşturulur.' },
    ],
    outcomes: [
      'Yoğun saatlerde daha doğru personel planı yapılması',
      'Az kullanılan alanların veya darboğazların fark edilmesi',
      'Müşteri deneyimini etkileyen bekleme noktalarının azalması',
      'Şubeler arasında daha adil performans karşılaştırması',
    ],
    useCases: [
      'Perakende mağazalar',
      'Market ve gıda satış noktaları',
      'Servis kabul alanları',
      'Çok lokasyonlu işletmeler',
    ],
  },
  'mekanik-tasarim-cizim': {
    eyebrow: 'Mekanik Mühendislik',
    title: 'Mekanik Tasarım / Çizim',
    description: 'IYESYS mekanik 3D tasarım, teknik çizim ve prototip üretim hizmeti; parça, aparat, fikstür ve makine alt sistemlerini üretilebilir, montajı kolay ve sahada doğrulanmış mühendislik çözümlerine dönüştürür.',
    lead: 'İhtiyacınızı 3D tasarıma, üretimi tarif eden teknik resimlere ve çalışan bir mekanik prototipe dönüştürün.',
    image: {
      src: '/img/service-unique/mechanical-technical-drawing-transparent-v2.png',
      alt: 'Endüstriyel bağlantı aparatının patlatılmış görünüşü, ölçülendirmeleri ve teknik resimleri',
    },
    accent: '#0D9488',
    accentRgb: '13, 148, 136',
    stats: [
      { value: '3D CAD', label: 'parça, montaj ve hareket modelleme' },
      { value: 'Teknik Resim', label: 'ölçü, tolerans ve imalat detayları' },
      { value: 'Prototip', label: 'malzemeye uygun üretim, test ve revizyon' },
    ],
    overview: [
      'İyi bir mekanik tasarım yalnızca parçanın geometrisini değil; üretim yöntemini, toleransları, montaj sırasını, bakım erişimini, güvenliği ve prototipte doğrulanacak kritik noktaları birlikte ele alır. IYESYS, tasarım kararlarını bu bütünlük içinde geliştirir.',
      'Kamera ve sensör bağlantı aparatları, makine koruma muhafazaları, özel fikstürler, taşıyıcı konstrüksiyonlar, cihaz gövdeleri ve üretim hattı yardımcı ekipmanları için 3D parça ve montaj modelleri hazırlanır. Hareketli parçalar, bağlantılar ve fiziksel çakışmalar dijital model üzerinde kontrol edilir.',
      'Onaylanan 3D tasarım, gerekli teknik resim ve imalat bilgileriyle üretime aktarılır. İstenilen malzemeye göre prototip üretilir; montaj ve saha denemesinden alınan geri bildirimler ana tasarıma işlenir.',
    ],
    capabilities: [
      { title: '3D CAD Tasarım ve Montaj', desc: 'Parça, montaj ve alt sistem geometrileri; bağlantı, hareket, dayanım ve üretilebilirlik koşulları dikkate alınarak modellenir.' },
      { title: 'Teknik Resim ve Üretime Hazırlık', desc: 'Ölçü, tolerans, malzeme ve imalat detaylarını açıkça gösteren teknik resimler hazırlanır; tasarım üretime uygun hale getirilir.' },
      { title: 'Prototip Üretim', desc: 'Tasarım, kullanım koşulları ve istenilen malzeme dikkate alınarak fiziksel prototipe dönüştürülür.' },
      { title: 'Test, Saha Uyumu ve Revizyon', desc: 'Prototipin ölçü, montaj, erişim ve çalışma koşulları kontrol edilir; gerekli değişiklikler kayıtlı revizyonlarla ana modele aktarılır.' },
    ],
    workflow: [
      { title: 'İhtiyaç ve Saha Ölçüsü', desc: 'Parçanın görevi, çalışma ortamı, bağlantı noktaları, yükler ve fiziksel sınırlar ölçülerek tasarım girdileri netleştirilir.' },
      { title: '3D Konsept ve Tasarım', desc: 'Alternatif geometriler; malzeme, üretim yöntemi, montaj ve bakım koşullarıyla birlikte değerlendirilir, seçilen yaklaşım 3D modele dönüştürülür.' },
      { title: 'Teknik Resim ve Üretime Hazırlık', desc: 'Parça ve montaj modelleri tamamlanır; toleranslar, bağlantılar, malzeme ve gerekli imalat detayları teknik resimde netleştirilir.' },
      { title: 'Prototip Üretim, Test ve Revizyon', desc: 'Prototip üretilip monte edilir; ölçü, uyum ve çalışma kontrollerinin ardından gerekli revizyonlar tamamlanır.' },
    ],
    outcomes: [
      'Mekanik çakışmaların ve montaj sorunlarının seri üretimden önce prototipte görülmesi',
      'Parça ve montajların seçilen üretim yöntemine uygun şekilde detaylandırılması',
      '3D tasarım, teknik resim ve prototip üzerindeki değişikliklerin aynı revizyon üzerinden yürütülmesi',
      'Saha geri bildirimlerinin kontrollü ve izlenebilir revizyonlarla ana modele aktarılması',
    ],
    useCases: [
      'Makine parçası ve aparat prototipleri',
      'Sensör, kamera ve cihaz muhafazaları',
      'Fikstür, mastar ve montaj yardımcıları',
      'Farklı malzemelerden prototip parçalar',
    ],
  },
  'mobil-web-uygulamalari': {
    eyebrow: 'Özel Yazılım',
    title: 'Mobil / Web / Masaüstü Uygulamaları',
    description: 'IYESYS mobil, web ve masaüstü uygulamaları; satış, müşteri ilişkileri, saha operasyonu, bakım, onay ve raporlama süreçlerini işletmenizin çalışma düzenine göre dijitalleştirir.',
    lead: 'CRM, web panel, mobil dashboard ve masaüstü uygulama ihtiyaçlarınızı aynı veri yapısı üzerinde çalışan, rol bazlı ve kullanımı kolay kurumsal yazılımlara dönüştürün.',
    image: {
      src: '/img/service-unique/software-crm-dashboard-devices.png',
      alt: 'Monitörde CRM web paneli ve telefonda mobil dashboard arayüzü',
    },
    accent: '#7C3AED',
    accentRgb: '124, 58, 237',
    stats: [
      { value: 'CRM', label: 'müşteri ve süreç yönetimi' },
      { value: 'Mobil', label: 'saha ve yönetici ekranları' },
      { value: 'Masaüstü', label: 'ofis ve operasyon uygulamaları' },
    ],
    overview: [
      'Kurumsal yazılım ihtiyacı yalnızca ekrana form koymak değildir; doğru veri modeli, anlaşılır kullanıcı akışı, güvenli yetkilendirme ve sürdürülebilir raporlama yapısı gerekir. IYESYS, web panel, mobil uygulama ve masaüstü yazılım projelerini sahadaki gerçek kullanıcı davranışına göre tasarlar.',
      'CRM uygulaması, iş emri yazılımı, bakım takip sistemi, satış takip paneli, müşteri portalı, teklif-onay akışı, stok hareketi, servis yönetimi veya yönetici dashboardu gibi ihtiyaçlar tek mimari altında geliştirilebilir. Kullanıcı hangi ekrandan giriş yaparsa yapsın aynı güncel veriye ulaşır.',
      'Proje sürecinde ekran tasarımı, rol bazlı yetki, veri güvenliği, bildirim, dosya yükleme, rapor alma, API entegrasyonu ve canlı kullanım sonrası bakım planı birlikte değerlendirilir. Amaç; çalışanların gerçekten kullanacağı, yöneticinin karar almasını kolaylaştıran ve şirket hafızasını güçlendiren yazılımlar üretmektir.',
    ],
    capabilities: [
      { title: 'CRM ve Web Panel', desc: 'Müşteri, teklif, görev, satış, servis ve rapor ekranları rol bazlı yönetim panelinde düzenlenir.' },
      { title: 'Mobil Dashboard', desc: 'Saha ve yönetim ekipleri için bildirim, görev, fotoğraf, form, onay ve anlık gösterge ekranları hazırlanır.' },
      { title: 'Masaüstü Uygulama', desc: 'Ofis, üretim veya operasyon bilgisayarlarında hızlı çalışan, cihaz ve dosya erişimi gerektiren uygulamalar geliştirilebilir.' },
      { title: 'API ve Sistem Entegrasyonu', desc: 'ERP, muhasebe, e-posta, SMS, harita, ödeme, IoT veya mevcut veritabanı kaynaklarıyla güvenli bağlantı kurulur.' },
    ],
    workflow: [
      { title: 'Süreç Haritası', desc: 'Kullanıcı rolleri, veri kaynakları, onay adımları ve rapor ihtiyacı netleştirilir.' },
      { title: 'Arayüz Tasarımı', desc: 'CRM, web panel, mobil ekran ve masaüstü akışları sade kullanım mantığıyla hazırlanır.' },
      { title: 'Geliştirme ve Entegrasyon', desc: 'Ön yüz, arka uç servisleri, veritabanı, API bağlantıları ve yetki katmanı birlikte kurulur.' },
      { title: 'Canlı Kullanım', desc: 'Test, eğitim, yayın, geri bildirim ve sürüm desteğiyle sistem günlük operasyona alınır.' },
    ],
    outcomes: [
      'CRM, saha ve ofis kayıtlarının tek güncel veri yapısında toplanması',
      'Mobil ve web ekranlarından hızlı, standart ve denetlenebilir veri girişi yapılması',
      'Yöneticilerin satış, servis, bakım ve operasyon metriklerini anlık izlemesi',
      'Şirket bilgisinin kişilerde değil, güvenli ve raporlanabilir sistemde kalması',
    ],
    useCases: [
      'CRM ve müşteri takip yazılımı',
      'Mobil saha uygulaması',
      'Masaüstü operasyon programı',
      'Web yönetim paneli ve dashboard',
    ],
  },
  'plc-scada-io-sistemler': {
    eyebrow: 'Endüstriyel Otomasyon',
    title: 'PLC / SCADA / IO Sistemleri',
    description: 'IYESYS PLC, SCADA ve IO sistemleri; makine ve tesis verilerini güvenilir kontrol, izleme ve raporlama altyapısına bağlar.',
    lead: 'Sahadaki makine sinyallerini, operatör ekranlarını ve yönetim raporlarını aynı otomasyon omurgasında birleştirin.',
    image: {
      src: '/img/service-unique/plc-scada-io-sistemler-scene.png',
      alt: 'PLC pano, HMI ve IO sinyallerini kontrol eden otomasyon mühendisi',
    },
    accent: '#DC2626',
    accentRgb: '220, 38, 38',
    stats: [
      { value: 'PLC', label: 'kontrol ve pano entegrasyonu' },
      { value: 'SCADA', label: 'izleme ve alarm ekranları' },
      { value: 'IO', label: 'sinyal, sensör ve veri toplama' },
    ],
    overview: [
      'PLC, SCADA ve IO sistemleri, endüstriyel tesislerin kontrol ve izleme omurgasını oluşturur. IYESYS bu altyapıyı güvenli, sürdürülebilir ve veri üreten bir yapıya dönüştürmek için tasarlar.',
      'Sistem; makine kontrolü, sensör verisi toplama, alarm yönetimi, operatör ekranları, raporlama ve üst sistem entegrasyonu ihtiyaçlarına göre kurgulanır. Mevcut panoların revizyonu, yeni pano tasarımı veya yazılım güncellemesi proje kapsamına alınabilir.',
      'Otomasyon projelerinde duruş süresi, güvenlik, bakım kolaylığı ve dokümantasyon kritik önemdedir. Bu nedenle IYESYS, sahada uygulanabilir devreye alma planı ve açık teknik dokümanla çalışır.',
    ],
    capabilities: [
      { title: 'PLC Programlama', desc: 'Makine, hat veya proses kontrol senaryoları güvenli ve okunabilir program yapısıyla hazırlanır.' },
      { title: 'SCADA Ekranları', desc: 'Operatör ve yönetim ekipleri için alarm, trend, proses ve rapor ekranları oluşturulur.' },
      { title: 'IO ve Sensör Entegrasyonu', desc: 'Dijital, analog, haberleşmeli sensör ve aktüatörler doğru veri yapısına bağlanır.' },
      { title: 'Pano ve Devreye Alma', desc: 'Saha bağlantıları, testler, sinyal doğrulama ve kabul adımları planlı şekilde yürütülür.' },
    ],
    workflow: [
      { title: 'Saha Keşfi', desc: 'Mevcut pano, makine, sinyal ve haberleşme yapısı incelenir.' },
      { title: 'Kontrol Senaryosu', desc: 'Operasyon, güvenlik ve bakım ihtiyaçlarına göre otomasyon mantığı netleştirilir.' },
      { title: 'Yazılım ve Pano', desc: 'PLC, SCADA, IO ve pano çalışmaları kontrollü revizyonlarla hazırlanır.' },
      { title: 'Test ve Kabul', desc: 'Sinyal testleri, operatör eğitimi ve devreye alma kayıtları tamamlanır.' },
    ],
    outcomes: [
      'Makine ve proses verilerinin güvenilir şekilde izlenmesi',
      'Operatör müdahalelerinin daha kontrollü hale gelmesi',
      'Alarm ve duruş nedenlerinin daha hızlı analiz edilmesi',
      'Bakım ve iyileştirme ekipleri için net dokümantasyon oluşması',
    ],
    useCases: [
      'Makine otomasyonu',
      'Proses izleme sistemleri',
      'Pano revizyonu ve IO genişletme',
      'SCADA raporlama ve alarm yönetimi',
    ],
  },
  'pnomatik-hidrolik-sistemler': {
    eyebrow: 'Akışkan Gücü',
    title: 'Pnömatik / Hidrolik Sistemler',
    description: 'IYESYS pnömatik ve hidrolik sistem çözümleri; güç aktarımı, hareket kontrolü ve bakım süreçlerini güvenli, ölçülebilir ve verimli hale getirir.',
    lead: 'Basınç, debi, hareket ve kontrol ihtiyaçlarını doğru bileşen seçimi ve otomasyon entegrasyonuyla daha güvenilir bir sistem yapısına taşıyın.',
    image: {
      src: '/img/service-detail/pnomatik-hidrolik-sistemler.png',
      alt: 'Hidrolik manifold ve pnömatik valf adası üzerinde basınç testi yapan teknisyen',
    },
    accent: '#B91C1C',
    accentRgb: '185, 28, 28',
    stats: [
      { value: 'Basınç', label: 've hareket kontrolü' },
      { value: 'Valf', label: 'manifold ve aktüatör seçimi' },
      { value: 'Bakım', label: 'odaklı devre tasarımı' },
    ],
    overview: [
      'Pnömatik ve hidrolik sistemler, üretim ekipmanlarının en kritik hareket ve güç aktarım katmanlarından biridir. IYESYS, bu sistemlerde doğru komponent seçimi, güvenli devre tasarımı, otomasyon bağlantısı ve bakım kolaylığını birlikte ele alır.',
      'Mevcut sistemlerde basınç düşümü, kaçak, yavaş hareket, kontrol kararsızlığı veya enerji kaybı gibi problemler analiz edilebilir. Yeni sistemlerde ise ihtiyaç duyulan kuvvet, hız, çevrim süresi ve güvenlik şartlarına göre tasarım yapılır.',
      'Çözüm; valf adaları, hidrolik güç üniteleri, silindirler, sensörler, regülatörler, hortum ve bağlantı elemanları gibi bileşenleri kapsayabilir. Gerekirse PLC ve SCADA sistemleriyle veri izleme ve alarm entegrasyonu sağlanır.',
    ],
    capabilities: [
      { title: 'Devre Tasarımı', desc: 'Pnömatik veya hidrolik devreler çalışma çevrimine ve güvenlik ihtiyacına göre planlanır.' },
      { title: 'Komponent Seçimi', desc: 'Silindir, valf, manifold, hortum, pompa ve sensörler doğru kapasiteyle seçilir.' },
      { title: 'Arıza Analizi', desc: 'Basınç kaybı, kaçak, ısınma, gecikme ve kararsız hareket problemleri incelenir.' },
      { title: 'Otomasyon Bağlantısı', desc: 'Basınç, konum ve durum verileri PLC veya izleme sistemlerine aktarılabilir.' },
    ],
    workflow: [
      { title: 'İhtiyaç Ölçümü', desc: 'Kuvvet, hız, çevrim süresi, basınç ve güvenlik koşulları belirlenir.' },
      { title: 'Devre Planı', desc: 'Akışkan güç şeması ve komponent yerleşimi hazırlanır.' },
      { title: 'Montaj ve Test', desc: 'Sistem bağlantıları, basınç testleri ve hareket kontrolleri yapılır.' },
      { title: 'Bakım Planı', desc: 'Filtre, yağ, kaçak ve periyodik kontrol adımları tanımlanır.' },
    ],
    outcomes: [
      'Daha kararlı hareket ve daha güvenilir ekipman performansı',
      'Enerji kaybı ve kaçak kaynaklı maliyetlerin azalması',
      'Bakım ekipleri için daha anlaşılır devre yapısı',
      'Otomasyon sistemiyle daha net arıza ve durum takibi',
    ],
    useCases: [
      'Pres ve kaldırma sistemleri',
      'Makine aktüatör devreleri',
      'Valf adası ve manifold uygulamaları',
      'Hidrolik güç ünitesi revizyonları',
    ],
  },
  'tehlikeli-alan': {
    eyebrow: 'İSG ve Risk Yönetimi',
    title: 'Tehlikeli Alan Yönetimi',
    description: 'IYESYS tehlikeli alan yönetimi; insanın girmemesi gereken makine, robot hücresi veya enerji bölgelerinde ihlali algılar, uyarı verir ve gerekli senaryoda makineyi güvenli şekilde durdurur.',
    lead: 'İnsanın girmemesi gereken makine veya robot çalışma alanları kamera ile hassas şekilde izlensin; kişi alana girdiği anda uyarı, kayıt ve güvenli makine durdurma senaryosu hızlıca devreye girsin.',
    image: {
      src: '/img/service-unique/area-safety-scene.png',
      alt: 'Makine çevresinde yeşil güvenlik bölgesiyle izlenen tehlikeli alan',
    },
    accent: '#15803D',
    accentRgb: '21, 128, 61',
    stats: [
      { value: 'İhlal', label: 'giriş ve yaklaşma algılama' },
      { value: 'Hızlı', label: 'makine durdurma senaryosu' },
      { value: 'Uyarı', label: 'ışık, ses ve olay kaydı' },
    ],
    overview: [
      'Tehlikeli alan yönetimi, insanın yaklaşmaması gereken bölgeyi teknik olarak izleyen ve ihlal anında doğru tepkiyi veren güvenlik yaklaşımıdır. Robot hücresi, pres, konveyör, enerji odası, kapalı makine alanı veya bakım dışı girilmemesi gereken bölgelerde bu yapı kritik hale gelir.',
      'IYESYS bu alanları kamera analitiğiyle izler. Bir kişi riskli bölgeye girdiğinde sistem görünür ve duyulur uyarı oluşturabilir; senaryoya göre makineyi hızlı şekilde durdurabilir, operatöre alarm gönderebilir ve olayı kayıt altına alabilir.',
      'Kurgu her makine ve tesis için ayrı yapılır. Yüksek riskli makine çevrelerinde güvenli duruş, kapı kilidi, reset prosedürü, mevcut otomasyon ürünleriyle entegrasyon ve yönetim paneli üzerinden olay geçmişi birlikte tasarlanır.',
    ],
    capabilities: [
      { title: 'Kamera ile Alan İhlali', desc: 'Kişinin makine çevresi, robot hücresi veya yasak çalışma bölgesine girmesi kamera görüntüsüyle hassas şekilde algılanır.' },
      { title: 'Güvenli Makine Durdurma Sistemi', desc: 'Makine kontrol altyapısıyla bağlantı kurularak ihlal anında hızlı durdurma veya güvenli bekleme senaryosu çalıştırılır.' },
      { title: 'Aktif Uyarı ve Kayıt Sistemi', desc: 'Kırmızı ışık, sesli anons, ikaz lambası, trafik lambası veya operatör bildirimi risk anında tetiklenir ve olay kayda alınır.' },
      { title: 'Yönetim Paneli ve Otomasyon Entegrasyonu', desc: 'İhlal, uyarı, duruş ve müdahale geçmişi panelde izlenir; mevcut sensör ve otomasyon ürünleriyle entegrasyon kurulabilir.' },
    ],
    workflow: [
      { title: 'Risk Sınıflandırma', desc: 'Alanlar, tehlike türü ve erişim kurallarına göre ayrılır.' },
      { title: 'Kamera Yerleşimi', desc: 'Kritik bölgeyi doğru açıyla görecek kamera ve ikaz noktaları saha planına göre belirlenir.' },
      { title: 'Kural Senaryosu', desc: 'Giriş, uyarı, durdurma veya bildirim mantığı tanımlanır.' },
      { title: 'Denetim', desc: 'Olay kayıtları ve raporlar İSG yönetim sürecine dahil edilir.' },
    ],
    outcomes: [
      'Yüksek riskli bölgelerde anlık farkındalığın artması',
      'Makine çalışırken yasak bölgeye giriş riskinin azalması',
      'Durdurma, uyarı ve reset süreçlerinin standart hale gelmesi',
      'İSG denetimlerinde kanıtlanabilir olay geçmişi oluşması',
    ],
    useCases: [
      'Robot hücreleri ve pres çevreleri',
      'Konveyör ve hareketli makine alanları',
      'Elektrik odaları ve enerji bölgeleri',
      'Bakım dışı girilmemesi gereken üretim alanları',
    ],
  },
  'uretim-verimlilik': {
    eyebrow: 'Üretim Analitiği',
    title: 'Üretim Süreçleri ve Verimlilik Analizi',
    description: 'IYESYS üretim verimlilik analizi; duruş, çevrim süresi, OEE, kalite kaybı ve kapasite kullanımını sahadan gelen verilerle okunabilir hale getirir.',
    lead: 'Duruş, çevrim ve kapasite kayıplarını tek panelde görün; üretimdeki gerçek darboğazı veriye dayalı yönetin.',
    image: {
      src: '/img/service-detail/uretim-verimlilik-analizi.png',
      alt: 'Akıllı üretim hattında tablet üzerinden verimlilik analizi yapan üretim yöneticisi',
    },
    accent: '#1D4ED8',
    accentRgb: '29, 78, 216',
    stats: [
      { value: 'OEE', label: 'odaklı performans görünürlüğü' },
      { value: 'Duruş', label: 've çevrim süresi takibi' },
      { value: 'Hat', label: 'bazlı raporlama' },
    ],
    overview: [
      'Üretimde verimlilik, hattın yalnızca ne kadar çalıştığını değil nerede, ne kadar ve hangi nedenle kayıp oluştuğunu anlamakla yönetilir. Duruş nedeni, çevrim süresi, üretim adedi, fire ve vardiya performansı aynı ekranda izlendiğinde iyileştirme alanları daha hızlı netleşir.',
      'IYESYS üretim verimlilik analizi, makine verileri, operatör girişleri, sensörler veya mevcut sistemlerden alınan kayıtları anlamlı performans göstergelerine dönüştürür. OEE, duruş nedeni, üretim hızı, fire oranı ve vardiya performansı gibi metrikler tek panelde takip edilebilir.',
      'Sistem, işletmenin olgunluk seviyesine göre kurgulanır. Bazı hatlarda sensör ve PLC verisi kullanılırken bazı süreçlerde mobil formlar veya operatör ekranlarıyla veri toplanabilir. Hedef, mükemmel veri beklemeden doğru iyileştirme döngüsünü başlatmaktır.',
    ],
    capabilities: [
      { title: 'Veri Toplama Sistemi', desc: 'PLC, sensör, operatör ekranı veya manuel kayıt kaynakları üretim hattına uygun veri yapısında toplanır.' },
      { title: 'OEE ve Duruş Analizi', desc: 'Planlı-plansız duruşlar, çevrim süresi, üretim hızı ve fire oranı anlaşılır performans göstergelerine dönüştürülür.' },
      { title: 'Dashboard ve Vardiya Raporlama', desc: 'Hat, vardiya, ürün ve istasyon kırılımlarında canlı ekranlar ve yönetim raporları hazırlanır.' },
      { title: 'İyileştirme Takip Sistemi', desc: 'Kayıp nedenleri aksiyonlara bağlanır; alınan kararların üretim performansına etkisi düzenli izlenir.' },
    ],
    workflow: [
      { title: 'Metrik Seçimi', desc: 'Takip edilecek performans göstergeleri üretim hedeflerine göre belirlenir.' },
      { title: 'Veri Toplama', desc: 'PLC, sensör, operatör ekranı veya manuel kayıt kaynakları sisteme bağlanır.' },
      { title: 'Dashboard', desc: 'Hat, vardiya, ürün ve duruş kırılımlarında yönetim ekranları hazırlanır.' },
      { title: 'İyileştirme', desc: 'Raporlardan çıkan kayıplar için aksiyon ve takip yapısı kurulur.' },
    ],
    outcomes: [
      'Duruş ve kayıp nedenlerinin görünür hale gelmesi',
      'Hat kapasitesinin daha gerçekçi planlanması',
      'Vardiya performansının adil ve ölçülebilir izlenmesi',
      'Verimlilik iyileştirmelerinin etki bazlı takip edilmesi',
    ],
    useCases: [
      'Montaj hatları',
      'Paketleme hatları',
      'Makine bazlı üretim takibi',
      'Vardiya ve OEE raporlaması',
    ],
  },
  'urun-gelistirme': {
    eyebrow: 'Ürünleşme ve Prototip',
    title: 'Ürün Geliştirme',
    description: 'IYESYS ürün geliştirme hizmeti; endüstriyel teknoloji fikirlerini çalışan prototipten saha pilotuna, üretilebilir tasarımdan sürdürülebilir ürün mimarisine taşır.',
    lead: 'Elektronik, gömülü yazılım, mekanik tasarım, haberleşme ve saha deneyimini tek ürün geliştirme akışında birleştirin.',
    image: {
      src: '/img/service-detail/urun-gelistirme.png',
      alt: 'Endüstriyel IoT prototipi üzerinde çalışan ürün geliştirme mühendisi',
    },
    accent: '#06B6D4',
    accentRgb: '6, 182, 212',
    stats: [
      { value: 'MVP', label: 'temel değeri doğrulayan prototip' },
      { value: 'Çok Disiplinli', label: 'donanım, yazılım ve mekanik tasarım' },
      { value: 'Pilot', label: 'saha testi ve üretime hazırlık' },
    ],
    overview: [
      'Endüstriyel bir ürünün sahada güvenilir çalışması için elektronik kart, sensör, haberleşme, gömülü yazılım, kullanıcı arayüzü, mekanik gövde, enerji yönetimi ve servis yaklaşımı birlikte tasarlanmalıdır. Tek bir disiplinin doğru olması ürünün tamamı için yeterli değildir.',
      'IYESYS, ürün fikrini önce temel değeri ölçebilecek bir MVP seviyesine indirger. Sensör doğruluğu, algoritma performansı, haberleşme kararlılığı, enerji ihtiyacı ve kullanıcı akışı erken prototiplerle test edilerek gereksiz geliştirme yükü azaltılır.',
      'Doğrulanan prototip gerçek saha koşullarında pilot kullanıma alınır. Test sonuçlarına göre donanım, yazılım ve mekanik tasarım revize edilir; teknik dokümantasyon, üretilebilirlik, bakım kolaylığı, versiyon yönetimi ve ölçeklenebilir ürün mimarisi planlanır.',
    ],
    capabilities: [
      { title: 'MVP ve Çalışan Prototip', desc: 'Ürünün temel değerini ve en kritik teknik varsayımlarını gösterecek ölçülebilir bir prototip hazırlanır.' },
      { title: 'Elektronik, Gömülü Yazılım ve IoT', desc: 'Sensör, kamera, işlemci, enerji, haberleşme ve veri toplama ihtiyaçlarına uygun ürün mimarisi kurulur.' },
      { title: 'Mekanik ve Endüstriyel Tasarım', desc: 'Gövde, bağlantı, koruma sınıfı, ısı yönetimi, montaj ve bakım ihtiyaçları ürün tasarımına dahil edilir.' },
      { title: 'Pilot, Dokümantasyon ve Ölçekleme', desc: 'Saha testi sonrasında üretim dosyaları, teknik dokümantasyon, servis yaklaşımı ve versiyon planı hazırlanır.' },
    ],
    workflow: [
      { title: 'Ürün Tanımı', desc: 'Problem, kullanıcı, değer önerisi, kullanım senaryosu ve teknik kabul kriterleri netleştirilir.' },
      { title: 'MVP ve Prototip', desc: 'Elektronik, yazılım ve mekanik tasarım ilk çalışan sistemde bir araya getirilerek kritik fonksiyonlar doğrulanır.' },
      { title: 'Saha Pilotu', desc: 'Ürün gerçek koşullarda performans, dayanım, haberleşme, montaj ve kullanıcı deneyimi açısından test edilir.' },
      { title: 'Üretime Hazırlık', desc: 'Tasarım revizyonları, teknik dokümantasyon, üretim dosyaları, servis ve ölçekleme planı tamamlanır.' },
    ],
    outcomes: [
      'Ürünün teknik ve kullanıcı risklerinin erken aşamada görülmesi',
      'Temel değeri ölçebilen, sahada test edilebilir bir prototip elde edilmesi',
      'Elektronik, yazılım ve mekanik tasarım kararlarının aynı ürün mimarisinde ilerlemesi',
      'Pilot, dokümantasyon ve üretime hazırlık sürecinin kontrollü yönetilmesi',
    ],
    useCases: [
      'Akıllı güvenlik cihazları',
      'Endüstriyel IoT ürünleri',
      'Kamera ve sensör tabanlı sistemler',
      'Makine üreticileri için dijital modüller',
    ],
  },
  'forklift-safety': {
    eyebrow: 'Endüstriyel Güvenlik',
    title: 'Hareketli Ekipman - Yaya Güvenliği',
    description: 'IYESYS forklift kaza önleme sistemi; forklift üstü kameralar, UWB hassas mesafe kontrolü, otomatik yavaşlatma/durdurma, operatör monitörü ve yönetim paneliyle yaya ve ekipman çarpışma riskini azaltır.',
    lead: 'Forklift kazalarını önlemek için insanı, diğer forkliftleri ve tehlikeli bölgeleri erken algılayan; operatörü uyaran, kameraları ekrandan izleten ve riskli yaklaşmada hareketli ekipmanı otomatik yavaşlatabilen veya durdurabilen akıllı güvenlik sistemi kurun.',
    image: {
      src: '/img/27.png',
      alt: 'Depo içinde forkliftler için kamera ve yaklaşım algısı destekli hareketli ekipman güvenlik alanları',
    },
    accent: '#16A34A',
    accentRgb: '22, 163, 74',
    stats: [
      { value: 'AI Kamera', label: 'forklift çevresi insan algılama' },
      { value: 'UWB', label: 'hassas mesafe ve bölge kontrolü' },
      { value: 'Kontrol', label: 'otomatik yavaşlatma ve durdurma' },
    ],
    overview: [
      'Forklift kaza önleme sistemi, depo ve üretim sahalarında en kritik iş güvenliği ihtiyaçlarından biridir. Forkliftin arka, yan ve ön kör noktaları; raf araları, kapı geçişleri, sevkiyat alanları ve yoğun yaya yollarında kamera, UWB, operatör uyarısı ve ekipman kontrolü birlikte çalıştığında risk daha erken fark edilir.',
      'IYESYS forklift kamera sistemi, hareketli ekipmanın üzerine yerleştirilen kameralarla çevreyi izler. Yapay zeka insanı algıladığında operatör monitöründe risk yönünü gösterir; sesli ve görsel uyarı verir. Operatör, forklift içindeki ekrandan kameraları canlı izleyebilir ve hangi tarafta insan olduğunu anlık alarm ekranında görebilir.',
      'UWB destekli hassas mesafe kontrol cihazı, diğer forkliftler ve tanımlı tehlikeli bölgeler için otomatik yavaşlatma veya durdurma senaryoları kurmaya yardımcı olur. Forklift başka bir hareketli ekipmana, riskli geçiş noktasına veya işletmenin belirlediği güvenlik bölgesine yaklaştığında sistem sesli uyarı, operatör ikazı ve ekipman kontrolünü birlikte devreye alabilir.',
    ],
    capabilities: [
      { title: 'Forklift Kamera Sistemi', desc: 'Forklift ön, arka ve yan görüş alanları kameralarla izlenir. İnsan algılandığında operatöre yön bilgisiyle alarm verilir; senaryoya göre forklift yavaşlatılabilir veya durdurulabilir.' },
      { title: 'Forklift Hassas Mesafe Kontrol Sistemi', desc: 'UWB hassas mesafe cihazı; diğer forkliftler, hareketli ekipmanlar ve tanımlı tehlikeli bölgeler için yaklaşma mesafesini takip eder. Riskli mesafede uyarı, yavaşlatma veya durdurma senaryosu çalıştırılabilir.' },
      { title: 'Kamera İzleme ve Uyarı Sistemi', desc: 'Forklift içindeki monitör canlı kamera görüntülerini gösterir. Sistem; insan mı, forklift mi, yoksa tehlikeli bölge yaklaşımı mı oluştuğunu yön bilgisiyle birlikte operatöre anlaşılır şekilde bildirir.' },
      { title: 'Yönetim Paneli Sistemi', desc: 'Tehlikeli yaklaşımlar, uyarı kayıtları, ekipman bazlı risk noktaları ve tekrar eden olaylar yönetim panelinde raporlanır. Böylece saha güvenliği ölçülebilir veriyle yönetilir.' },
    ],
    workflow: [
      { title: 'Forklift Keşfi', desc: 'Forklift tipi, görüş açıları, kamera konumları, monitör yeri ve yavaşlatma/durdurma bağlantısı sahada belirlenir.' },
      { title: 'Kaza Önleme Senaryosu', desc: 'İnsan algılama, diğer forkliftlere yaklaşma, tehlikeli bölge girişi, yön alarmı ve sesli uyarı kuralları tanımlanır.' },
      { title: 'Saha Testi', desc: 'Kamera açıları, geri görüş görüntüsü, uyarı sesleri, monitör alarmı ve otomatik yavaşlatma/durdurma davranışı gerçek kullanımda doğrulanır.' },
      { title: 'Panel ve Raporlama', desc: 'Forklift güvenlik sistemi olayları, tekrar eden riskler ve ekipman bazlı uyarı kayıtları yönetim paneline aktarılır.' },
    ],
    outcomes: [
      'Forklift-yaya ve forklift-forklift çarpışma riskinin daha erken fark edilmesi',
      'Kör nokta, geri görüş ve geçiş alanlarında operatör farkındalığının artması',
      'Riskli mesafelerde forklift yavaşlatma ve durdurma senaryolarının standart hale gelmesi',
      'İSG ekipleri için kayıtlı olay geçmişi ve iyileştirme verisi oluşması',
    ],
    useCases: [
      'Depo ve lojistik merkezleri',
      'Üretim hattı içi forklift rotaları',
      'Raf arası ve kapı geçişleri',
      'Forklift geri görüş ve kör nokta bölgeleri',
      'Tehlikeli bölge ve ekipman yaklaşma senaryoları',
    ],
  },
  'area-safety': {
    eyebrow: 'Endüstriyel Güvenlik',
    title: 'Bölge Yaya Güvenliği',
    description: 'IYESYS bölge yaya güvenliği sistemi; köşe, kavşak, kapı, yaya geçidi ve kör geçiş noktalarında kamera ve UWB cihazlarıyla yaklaşma riskini analiz eder, aktif uyarı donanımlarını ve forklift durdurma/yavaşlatma senaryolarını çalıştırır.',
    lead: 'Sabit bölgelere kurulan kamera ve UWB cihazlarıyla insan-ekipman, ekipman-ekipman ve bölge yaklaşımı risklerini erken algılayın; hologram, trafik lambası, şerit LED, sesli uyarı, otomatik kapı ve forklift yavaşlatma/durdurma senaryolarını birlikte yönetin.',
    image: {
      src: '/img/generated-solutions/safety-forklift-ai-zone-no-device.png',
      alt: 'Forklift ve yaya bölgesinde kamera, UWB ve aktif ikaz sistemi',
    },
    accent: '#059669',
    accentRgb: '5, 150, 105',
    stats: [
      { value: 'Kamera', label: 'kavşak, kapı ve yaya yolu algısı' },
      { value: 'UWB', label: 'hassas mesafe ve yaklaşma kontrolü' },
      { value: 'Aktif İkaz', label: 'hologram, lamba, LED ve kapı' },
    ],
    overview: [
      'Bölge yaya güvenliği, sahanın en riskli geçiş noktalarını izleyen çarpışma önleme yaklaşımıdır. Köşe ve kavşaklar, kapı ağızları, yaya geçitleri, dar koridorlar, sevkiyat yolları ve ekipmanların birbirini geç gördüğü kör noktalarda kamera ve UWB cihazları bölgeye yerleştirilir.',
      'IYESYS bölge güvenlik sistemi; insan-ekipman, ekipman-ekipman veya ekipmanın tanımlı riskli bölgeye yaklaşması gibi senaryoları analiz eder. Risk oluştuğunda forklift yavaşlatılabilir veya durdurulabilir; sesli uyarı, hologram dur uyarısı, yaya geçidi ışığı, trafik lambası ve şerit LED gibi ikazlar otomatik olarak çalıştırılabilir.',
      'Kapı bölgelerinde forklift yaklaşınca otomatik kapı açma, yayaya kırmızı ışık verme, forklift operatörünü sesli uyarmak veya belirli yönden gelen ekipmana geçiş önceliği tanımak gibi saha kuralları uygulanabilir. Tüm uyarılar, cihaz durumları, riskli yaklaşmalar ve tekrar eden olaylar yönetim paneli üzerinden izlenebilir.',
    ],
    capabilities: [
      { title: 'Bölge Kamera Sistemi', desc: 'Köşe, kavşak, kapı ve yaya geçidi gibi noktalarda insan, forklift ve yaklaşma yönü kamera görüntüleriyle analiz edilir. Risk görünür hale geldiğinde ilgili uyarı senaryosu çalıştırılır.' },
      { title: 'UWB Hassas Mesafe Sistemi', desc: 'UWB cihazları forklift, hareketli ekipman ve tanımlı güvenlik bölgeleri arasındaki hassas mesafeyi takip eder. Yaklaşma riski oluştuğunda yavaşlatma, durdurma veya uyarı kuralı devreye alınabilir.' },
      { title: 'Aktif Uyarı ve Yönlendirme Sistemi', desc: 'Hologram dur uyarısı, yaya geçidi ışığı, trafik lambası, şerit LED ve sesli anons sahaya göre tetiklenir. Yaya ve operatör aynı anda anlaşılır şekilde yönlendirilir.' },
      { title: 'Yönetim Paneli ve Kapı Senaryoları', desc: 'Otomatik kapı açma, geçiş önceliği, cihaz durumu ve olay kayıtları yönetim paneline bağlanır. Tekrarlayan risk noktaları raporlanarak İSG ekipleri için takip edilebilir hale gelir.' },
    ],
    workflow: [
      { title: 'Bölge Keşfi', desc: 'Kör kavşaklar, kapı ağızları, yaya geçitleri, raf araları ve yoğun forklift rotaları saha akışına göre belirlenir.' },
      { title: 'Kural Tasarımı', desc: 'İnsan-ekipman, ekipman-ekipman, kapı geçişi, yaya önceliği ve forklift yavaşlatma/durdurma senaryoları netleştirilir.' },
      { title: 'İkaz Testi', desc: 'Hologram, trafik lambası, şerit LED, sesli uyarı, otomatik kapı ve ekipman yavaşlatma davranışı gerçek saha akışında denenir.' },
      { title: 'Yönetim Paneli', desc: 'Olay kayıtları, yoğun risk noktaları, cihaz durumları ve bölge bazlı uyarı geçmişi panelden izlenebilir hale getirilir.' },
    ],
    outcomes: [
      'Forklift-yaya ve ekipman-ekipman yaklaşmalarının daha erken fark edilmesi',
      'Kör kavşak, kapı ve yaya geçidi noktalarında aktif uyarı standardı oluşması',
      'Forklift yavaşlatma/durdurma ve ikaz senaryolarının sahaya göre yönetilmesi',
      'Tekrarlayan bölge risklerinin kayıtlarla görünür hale gelmesi',
    ],
    useCases: [
      'Forklift geçiş koridorları',
      'Depo yaya geçitleri',
      'Kör kavşak ve kapı geçişleri',
      'Raf arası dar görüş noktaları',
      'Sevkiyat ve üretim içi ekipman yolları',
      'Otomatik kapı ve geçiş önceliği senaryoları',
    ],
  },
  'dock-safety': {
    eyebrow: 'Endüstriyel Güvenlik',
    title: 'Yükleme Rampası Güvenliği',
    description: 'IYESYS yükleme rampası güvenliği çözümü; yapay zeka kamerasıyla TIR arkasındaki kör noktayı izler, personel varsa sürücüyü ve yayayı uyarır, güvenli yanaşma oluşmadan rampa kapısının açılmasını engelleyebilir.',
    lead: 'TIR geri yanaşırken arkasında insan olup olmadığını kamera ile anlık izleyin; risk varsa kırmızı ışık, LED ve yüksek sesli uyarı çalışsın, güvenli durumda yeşil yönlendirme ile yanaşma tamamlanabilsin.',
    image: {
      src: '/img/17.png',
      alt: 'Yükleme rampasında TIR, personel ve kapı güvenliği kontrol sistemi',
    },
    accent: '#22C55E',
    accentRgb: '34, 197, 94',
    stats: [
      { value: 'AI Kamera', label: 'TIR arkası kör nokta izleme' },
      { value: 'Kırmızı / Yeşil', label: 'sürücü ve yaya yönlendirme' },
      { value: 'Kilitli', label: 'güvenli yanaşmaya bağlı kapı' },
    ],
    overview: [
      'Yükleme rampaları, araç hareketi, personel dolaşımı ve kapı operasyonunun aynı anda gerçekleştiği yüksek riskli alanlardır. Araç tam yanaşmadan kapı açılması, TIR arkasındaki personelin fark edilmemesi veya yükleme sırasında yanlış hareket ciddi kazalara neden olabilir.',
      'IYESYS bu alanda yapay zeka kamerasıyla TIR geri yanaşırken kör noktada insan olup olmadığını izler. Risk varsa trafik lambası veya LED kırmızıya döner, yüksek sesli uyarı hem TIR şoförünü hem de yayayı net şekilde uyarır.',
      'Yanaşma güvenli olduğunda yeşil ışıkla sürücü yönlendirilebilir. TIR tamamen yanaşmadan yükleme rampası kapısının açılması engellenebilir; teker kilitleme sistemleri, rampa kapıları, rampa dilleri ve mevcut otomasyon ürünleriyle entegrasyon kurulabilir. Tüm süreç yönetim panelinden izlenebilir.',
    ],
    capabilities: [
      { title: 'Yapay Zeka Kamera Sistemi', desc: 'Rampa arkasındaki kör nokta kamera ile izlenir; TIR geri yanaşırken insan varlığı anlık olarak algılanır.' },
      { title: 'TIR Arkası İnsan Algılama', desc: 'Personel riskli bölgede görüldüğünde sürücü ve yaya için kırmızı ışık, LED ve yüksek sesli uyarı devreye alınır.' },
      { title: 'Trafik Lambası ve Sesli Uyarı', desc: 'Kırmızı-yeşil trafik lambası, LED yönlendirme ve yüksek sesli anons sahadaki yanaşma durumuna göre çalışır.' },
      { title: 'Kapı/Rampa Otomasyon Entegrasyonu', desc: 'Rampa kapısı, rampa dili, teker kilitleme sistemi ve mevcut kontrol altyapısıyla güvenlik koşuluna bağlı entegrasyon kurulabilir.' },
    ],
    workflow: [
      { title: 'Rampa Analizi', desc: 'Kapı yapısı, araç yanaşma düzeni ve personel hareketi yerinde incelenir.' },
      { title: 'Kamera Yerleşimi', desc: 'TIR arkasındaki kör noktayı doğru görecek kamera açısı ve ışık koşulu belirlenir.' },
      { title: 'Güvenlik Mantığı', desc: 'Kırmızı-yeşil ışık, yüksek sesli uyarı, kapı kilidi ve yanaşma koşulları tanımlanır.' },
      { title: 'Panel Devreye Alma', desc: 'Saha testleri, eğitim, olay kayıtları ve yönetim ekranlarıyla sistem kullanıma alınır.' },
    ],
    outcomes: [
      'Rampa çevresinde personel ve araç riskinin daha erken fark edilmesi',
      'Kapı açma ve yükleme izni süreçlerinde kontrolün artması',
      'Depo ve lojistik ekipleri için standart güvenlik akışı oluşması',
      'Rampa olaylarının kayıt altına alınarak denetlenebilir hale gelmesi',
    ],
    useCases: [
      'Depo yükleme rampaları',
      'Lojistik sevkiyat alanları',
      'Soğuk hava ve gıda depoları',
      'Fabrika giriş-çıkış yükleme noktaları',
    ],
  },
  'warning-systems': {
    eyebrow: 'Otomasyon Sistemleri',
    title: 'Aktif Uyarı Sistemleri',
    description: 'IYESYS aktif uyarı sistemleri; sesli anons, ışıklı ikaz, trafik lambası, şerit LED, projektör ve PLC bağlantılı uyarı donanımlarını sahaya özel senaryolarla çalıştırır.',
    lead: 'Sahada insanı doğru anda uyaran, ekipmanı yönlendiren ve otomasyon sistemleriyle birlikte çalışan bir ikaz altyapısı kurun.',
    image: {
      src: '/img/warning-systems-showcase-v4.png',
      alt: 'Endüstriyel aktif uyarı sistemi, ışıklı ikaz ve sesli anons donanımları',
    },
    accent: '#EF4444',
    accentRgb: '239, 68, 68',
    stats: [
      { value: 'Sesli', label: 'anons ve yüksek görünürlüklü ikaz' },
      { value: 'PLC', label: 've sensör bağlantılı tetikleme' },
      { value: 'Modüler', label: 'sahaya özel donanım seçimi' },
    ],
    overview: [
      'Aktif uyarı sistemleri, güvenlik veya operasyon kararını sahadaki kişiye doğru anda iletmek için kullanılır. Gürültülü üretim alanlarında sesli anons, ışıklı ikaz, zemin yönlendirmesi ve trafik lambası birlikte çalışarak uyarının sahada net algılanmasını sağlar.',
      'IYESYS; ikaz donanımlarını kamera, sensör, PLC, buton, kapı sistemi veya yazılım panelinden gelen tetiklerle çalıştırabilir. Uyarının hangi durumda, hangi dilde, hangi ses seviyesinde veya hangi ışık davranışıyla verileceği saha kuralına göre tasarlanır.',
      'Çözüm; forklift geçişleri, rampa alanları, tehlikeli bölgeler, kapı geçişleri, bakım operasyonları ve makine çevreleri için uygulanabilir. Amaç, sahadaki davranışı güvenli yöne çevirmektir.',
    ],
    capabilities: [
      { title: 'Sesli Anons', desc: 'Senaryoya göre farklı mesaj, dil ve ses seviyesiyle konuşan uyarılar verilebilir.' },
      { title: 'Işıklı İkaz', desc: 'Trafik lambası, flaşör, şerit LED veya projektör ile yüksek görünürlüklü yönlendirme yapılır.' },
      { title: 'PLC ve Sensör Entegrasyonu', desc: 'Makine, kapı, buton, kamera veya sensör sinyali uyarı sistemini tetikleyebilir.' },
      { title: 'Senaryo Yönetimi', desc: 'Uyarı davranışı risk seviyesi, saat, alan veya ekipman tipine göre farklılaştırılabilir.' },
    ],
    workflow: [
      { title: 'Saha Senaryosu', desc: 'Uyarı verilmesi gereken risk, geçiş, kapı veya makine durumu netleştirilir.' },
      { title: 'Donanım Seçimi', desc: 'Ses, ışık, projektör, buton, lamba veya LED bileşenleri alana göre belirlenir.' },
      { title: 'Tetik Bağlantısı', desc: 'PLC, sensör, kamera veya yazılım panelinden gelen sinyaller test edilir.' },
      { title: 'Kabul Testi', desc: 'Uyarının duyulurluğu, görünürlüğü ve doğru anda çalışması sahada doğrulanır.' },
    ],
    outcomes: [
      'Sahadaki kişilerin riski daha erken ve net fark etmesi',
      'Geçiş, kapı ve ekipman trafiğinde yönlendirme disiplininin artması',
      'Otomasyon ve İSG sistemleri arasında uygulanabilir uyarı köprüsü kurulması',
      'Uyarı davranışının işletme kuralına göre standart hale gelmesi',
    ],
    useCases: [
      'Forklift geçiş ve kavşak uyarıları',
      'Yükleme rampası ikazları',
      'Makine çevresi ve tehlikeli alan uyarıları',
      'Kapı, turnike ve üretim hattı yönlendirmeleri',
    ],
  },
  'custom-solutions': {
    eyebrow: 'Özel Yazılım',
    title: 'Gömülü Yazılım ve IoT Çözümleri',
    description: 'IYESYS gömülü yazılım ve IoT çözümleri; sensör, cihaz, edge gateway, haberleşme altyapısı ve dashboard katmanlarını endüstriyel sahaya uygun özel mimariyle birleştirir.',
    lead: 'Sensörlerden, makinelerden ve sahadaki cihazlardan gelen veriyi gömülü yazılım, IoT haberleşmesi ve yönetim paneliyle izlenebilir bir endüstriyel çözüme dönüştürün.',
    image: {
      src: '/img/service-unique/embedded-iot-industrial-network.png',
      alt: 'Endüstriyel IoT sensörleri, edge gateway, PCB ve dashboard haberleşme yapısı',
    },
    accent: '#9333EA',
    accentRgb: '147, 51, 234',
    stats: [
      { value: 'IoT', label: 'sensör ve cihaz verisi' },
      { value: 'Edge', label: 'sahada veri işleme' },
      { value: 'Panel', label: 'izleme ve raporlama' },
    ],
    overview: [
      'Endüstriyel IoT projelerinde başarı, yalnızca sensör bağlamakla oluşmaz. Cihazın hangi veriyi üreteceği, bu verinin nasıl okunacağı, hangi haberleşme protokolüyle taşınacağı ve yönetim panelinde hangi karara dönüşeceği baştan doğru kurgulanmalıdır.',
      'IYESYS; gömülü yazılım, edge cihaz, sensör entegrasyonu, MQTT/HTTP/Modbus gibi haberleşme katmanları, veri toplama servisleri ve IoT dashboard ekranlarını işletmenin gerçek saha koşullarına göre tasarlar. Makine, ortam, enerji, güvenlik veya operasyon verisi tek bir izleme mimarisine bağlanabilir.',
      'Çözüm; üretim hattı sensörleri, sıcaklık-nem-basınç takibi, cihaz durum izleme, makine çalışma verisi, saha ekipmanı izleme, alarm üretimi ve uzaktan raporlama gibi ihtiyaçlara göre özelleştirilir. Amaç; cihaz verisini anlaşılır, güvenilir ve aksiyona dönüşebilir hale getirmektir.',
    ],
    capabilities: [
      { title: 'Gömülü Yazılım', desc: 'Mikrodenetleyici, edge cihaz veya özel donanım üzerinde çalışan kararlı firmware ve cihaz mantığı geliştirilir.' },
      { title: 'Sensör ve Haberleşme', desc: 'Sıcaklık, basınç, proximity, enerji, hareket veya makine verileri uygun protokol ve bağlantı yapısıyla okunur.' },
      { title: 'IoT Dashboard', desc: 'Cihaz durumu, alarm, trend, lokasyon, veri geçmişi ve rapor ekranları yönetim panelinde anlaşılır hale getirilir.' },
      { title: 'Endüstriyel Entegrasyon', desc: 'PLC, otomasyon altyapısı, API, veritabanı veya mevcut sistemlerle güvenli veri alışverişi kurulabilir.' },
    ],
    workflow: [
      { title: 'Saha ve Cihaz Analizi', desc: 'Ölçülecek veri, cihaz konumu, enerji, haberleşme, ortam koşulu ve entegrasyon ihtiyacı belirlenir.' },
      { title: 'Mimari Tasarım', desc: 'Sensör, gömülü yazılım, edge gateway, veri servisi ve dashboard yapısı birlikte planlanır.' },
      { title: 'Prototip ve Test', desc: 'Cihaz yazılımı, veri akışı, alarm senaryosu ve panel ekranları kontrollü pilotla doğrulanır.' },
      { title: 'Devreye Alma', desc: 'Saha kurulumu, bağlantı testleri, rapor ekranları ve bakım-destek süreciyle sistem yayına alınır.' },
    ],
    outcomes: [
      'Sensör ve cihaz verilerinin güvenilir şekilde toplanıp dashboarda aktarılması',
      'Sahadaki ekipman durumunun alarm, trend ve raporlarla izlenebilir hale gelmesi',
      'Gömülü yazılım ve IoT mimarisinin işletmeye özel senaryolarla çalışması',
      'Makine, cihaz ve yönetim paneli arasında sürdürülebilir veri akışı kurulması',
    ],
    useCases: [
      'Endüstriyel IoT dashboard',
      'Gömülü cihaz yazılımı',
      'Sensör verisi toplama sistemi',
      'Edge gateway ve saha entegrasyonu',
    ],
  },
} satisfies Record<string, ServiceDetailContent>
