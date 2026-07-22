export type ServiceSeo = {
  title: string
  copy: string
  keywords: string[]
}

const seoByTitle: Record<string, ServiceSeo> = {
  'Filo Yönetimi ve Araç Takip Sistemleri': {
    title: 'Filo yönetimi ve araç operasyonlarında canlı kontrol',
    copy: 'Araç takip sistemi, GPS takip, rota yönetimi ve filo takip yazılımı; konum, görev, bekleme, rota ve bakım bilgisini tek operasyon panelinde toplar. IYESYS; araçların nerede olduğunu, hangi göreve bağlı çalıştığını, nerede beklediğini ve bakım sürecinin ne zaman devreye girmesi gerektiğini görünür hale getirir. Böylece servis, lojistik ve saha ekipleri daha planlı yönetilir.',
    keywords: ['araç takip sistemi', 'filo takip sistemi', 'GPS araç takip', 'canlı araç takibi', 'rota takip sistemi', 'sürücü davranışı analizi', 'yakıt takip sistemi', 'araç bakım takibi'],
  },
  'Ar-Ge ve Mühendislik Danışmanlığı': {
    title: 'Fikirden prototipe Ar-Ge ve mühendislik yol haritası',
    copy: 'Endüstriyel Ar-Ge projelerinde fikir, prototip, MVP, saha testi ve ürünleşme aşamalarının aynı teknik çerçevede ilerlemesi gerekir. IYESYS; elektronik, mekanik, yazılım, IoT ve saha koşullarını birlikte değerlendirerek ürün fikrinin uygulanabilirliğini erken aşamada netleştirir.',
    keywords: ['Ar-Ge danışmanlık', 'ürün geliştirme danışmanlığı', 'prototip geliştirme', 'teknik fizibilite', 'MVP geliştirme', 'endüstriyel Ar-Ge', 'saha pilotu', 'inovasyon danışmanlığı'],
  },
  'Gıda Firmaları İçin Kamera ile Hijyen Tespiti': {
    title: 'Gıda üretiminde hijyen kurallarının kamera ile takibi',
    copy: 'Gıda üretim hattında bone, maske, eldiven, önlük ve hijyen kıyafeti kontrolü kalite güvence için kritik bir denetim alanıdır. IYESYS, mevcut kameralarınız veya projeye özel kurulacak kameralarla hijyen ihlallerini algılar, yönetim paneline aktarır ve kalite ekiplerinin manuel kontrol yükünü azaltır.',
    keywords: ['hijyen kontrol sistemi', 'gıda güvenliği kamera sistemi', 'bone maske kontrolü', 'eldiven tespiti', 'önlük kontrol sistemi', 'yapay zeka hijyen denetimi', 'gıda üretim hattı kamera analizi', 'hijyen kıyafeti kontrolü'],
  },
  'Hakediş ve Operasyon Yönetimi': {
    title: 'Fotoğraflı saha kaydından onaylı hakediş raporuna',
    copy: 'Hakediş takip yazılımı; poz ve iş kalemi yönetimini, mobil saha kaydını, fotoğraf-konum-zaman kanıtını, kontrol ve revizyon adımlarını dönemsel hakediş raporuyla birleştirir. IYESYS; montaj, bakım, şantiye ve taşeron operasyonlarında tamamlanan işin doğrulanabilir, onaylı ve izlenebilir biçimde yönetilmesini sağlar.',
    keywords: ['hakediş takip yazılımı', 'hakediş yönetimi', 'mobil saha uygulaması', 'saha operasyon yönetimi', 'taşeron hakediş takibi', 'iş ilerleme raporu', 'fotoğraflı saha kaydı', 'dijital hakediş sistemi', 'kontrol onay akışı'],
  },
  'Kalite Kontrol': {
    title: 'Üretim hattında yapay zeka destekli kalite kontrol',
    copy: 'Yapay zeka kalite kontrol, görüntü işleme ve makine görüşü çözümleri; yüzey kusuru, eksik parça, yanlış montaj, çapak, renk farkı ve ölçüye bağlı görsel sapmaları daha erken yakalamak için kullanılır. IYESYS, kamera, lens, aydınlatma, model doğrulama ve hat entegrasyonunu birlikte ele alarak sahada sürdürülebilir bir kontrol yapısı kurar.',
    keywords: ['yapay zeka kalite kontrol', 'görüntü işleme kalite kontrol', 'machine vision kalite kontrol', 'hat üstü kalite kontrol', 'yüzey kusuru tespiti', 'eksik parça kontrolü', 'kamera ile kalite kontrol', 'üretim kalite kontrol sistemi'],
  },
  'Mevcut Kamera Sistemleri ile İSG Entegrasyonu': {
    title: 'Mevcut kameraları akıllı İSG denetim katmanına dönüştürün',
    copy: 'İş güvenliği kamera sistemi, yapay zeka kamera analizi, forklift güvenliği, KKD kontrolü ve tehlikeli alan güvenliği mevcut IP kamera veya RTSP altyapısıyla uygulanabilir. IYESYS, uygun kamera görüntülerini analiz eder; riskleri kayıt altına alır, ekipleri uyarır ve yönetim panelinden izlenebilir hale getirir.',
    keywords: ['iş güvenliği kamera sistemi', 'yapay zeka kamera sistemi', 'İSG kamera entegrasyonu', 'RTSP kamera analizi', 'KKD kontrol sistemi', 'forklift güvenliği kamera analizi', 'tehlikeli alan kamera sistemi', 'AI kamera güvenlik sistemi'],
  },
  'Mağaza / İşletmede Verimlilik Analizi': {
    title: 'Müşteri akışı, yoğunluk ve bekleme sürelerini görünür kılın',
    copy: 'Mağaza yoğunluk analizi, müşteri sayma sistemi, ısı haritası, kuyruk analizi ve alan kullanım raporları; personel planlama ve operasyon kararlarını veriye bağlar. IYESYS, mağaza veya işletme içindeki hareketi anlaşılır raporlara dönüştürerek hangi saat, alan ve süreçte iyileştirme gerektiğini netleştirir.',
    keywords: ['mağaza yoğunluk analizi', 'müşteri sayma sistemi', 'ısı haritası analizi', 'kuyruk analizi', 'personel planlama', 'alan kullanım analizi', 'perakende verimlilik analizi', 'işletme verimlilik analizi'],
  },
  'Mekanik Tasarım / Çizim': {
    title: '3D mekanik tasarımdan çalışan prototipe bütünleşik mühendislik',
    copy: 'Mekanik 3D çizim ve tasarım; parçanın geometrisini, bağlantılarını, toleranslarını, malzemesini ve üretim yöntemini daha üretim başlamadan netleştirir. IYESYS; 3D modelleme, teknik resim, fikstür ve aparat tasarımı ile prototip üretim sürecini birlikte yürütür. Tasarlanan parça istenilen malzemeye göre prototipe dönüştürülür; montaj ve saha koşullarında test edilerek gerekli revizyonlarla son haline getirilir.',
    keywords: ['mekanik 3D tasarım', 'teknik çizim', '3D modelleme', 'prototip üretim', 'makine parçası tasarımı', 'fikstür tasarımı', 'mekanik prototip', 'malzemeye özel prototip'],
  },
  'Mobil / Web / Masaüstü Uygulamaları': {
    title: 'CRM, web panel, mobil ve masaüstü uygulama geliştirme',
    copy: 'Özel yazılım geliştirme, CRM yazılımı, web panel geliştirme, mobil uygulama, masaüstü uygulama, iş emri yazılımı ve dashboard projeleri hazır paketlerin yetmediği operasyonlarda değer üretir. IYESYS; rol bazlı yetki, raporlama, bildirim, dosya, onay, müşteri takibi ve entegrasyon akışlarını işletmenizin gerçek sürecine göre tasarlar.',
    keywords: ['özel yazılım geliştirme', 'CRM yazılımı', 'web panel geliştirme', 'mobil uygulama geliştirme', 'masaüstü uygulama geliştirme', 'saha takip uygulaması', 'iş emri yazılımı', 'dashboard yazılımı', 'kurumsal uygulama geliştirme'],
  },
  'PLC / SCADA / IO Sistemleri': {
    title: 'Makine, proses ve tesis verisini kontrol edilebilir hale getirin',
    copy: 'PLC otomasyon, SCADA sistemi, IO modül entegrasyonu, pano otomasyonu ve proses izleme altyapısı; üretimde güvenli kontrol, alarm yönetimi ve doğru raporlama için temel katmandır. IYESYS, okunabilir kontrol senaryoları, doğru sinyal yapısı ve planlı devreye alma yaklaşımıyla otomasyon projelerini sahaya taşır.',
    keywords: ['PLC otomasyon', 'SCADA sistemi', 'IO sistemleri', 'endüstriyel otomasyon', 'pano otomasyonu', 'makine otomasyonu', 'proses izleme sistemi', 'PLC SCADA entegrasyonu'],
  },
  'Pnömatik / Hidrolik Sistemler': {
    title: 'Basınç, hareket ve güç aktarımında güvenilir sistem tasarımı',
    copy: 'Pnömatik sistemler, hidrolik sistemler, valf adası, hidrolik güç ünitesi, basınç kontrolü ve aktüatör uygulamalarında doğru komponent seçimi kadar bakım kolaylığı ve otomasyon bağlantısı da önemlidir. IYESYS, mevcut problemleri analiz eder veya yeni sistemi çalışma çevrimine göre tasarlar.',
    keywords: ['pnömatik sistemler', 'hidrolik sistemler', 'valf adası', 'hidrolik güç ünitesi', 'basınç kontrolü', 'aktüatör kontrolü', 'pnömatik hidrolik tasarım', 'makine bakım çözümleri'],
  },
  'Tehlikeli Alan Yönetimi': {
    title: 'Tehlikeli makine alanlarında ihlali algılayın, uyarın ve güvenli duruş başlatın',
    copy: 'Tehlikeli alan yönetimi; robot hücresi, pres, konveyör, enerji odası ve operatörün girmemesi gereken makine bölgelerinde kamera ile alan ihlali tespiti için kullanılır. IYESYS, kişi alana girdiği anda uyarı oluşturur, olayı kayıt altına alır ve senaryo gerektiriyorsa makineyi hızlı şekilde güvenli duruşa alır.',
    keywords: ['tehlikeli alan güvenliği', 'kamera ile alan ihlali tespiti', 'makine durdurma sistemi', 'robot hücresi güvenliği', 'yetkisiz giriş algılama', 'aktif uyarı sistemi', 'endüstriyel risk yönetimi', 'makine güvenliği kamera sistemi'],
  },
  'Üretim Süreçleri ve Verimlilik Analizi': {
    title: 'OEE, duruş ve çevrim süresini anlaşılır raporlara dönüştürün',
    copy: 'Üretim verimliliği, OEE takibi, duruş takip sistemi, çevrim süresi analizi, vardiya performansı ve kapasite kullanımı; üretim yöneticilerinin günlük kararlarını doğrudan etkiler. IYESYS, makine, sensör veya operatör verilerini okunabilir dashboardlara dönüştürerek kaybın nerede oluştuğunu gösterir.',
    keywords: ['üretim verimliliği', 'OEE takibi', 'duruş takip sistemi', 'çevrim süresi analizi', 'vardiya performansı', 'üretim takip sistemi', 'fire oranı takibi', 'kapasite kullanım analizi'],
  },
  'Ürün Geliştirme': {
    title: 'Endüstriyel fikri çalışır ve üretilebilir ürüne dönüştürün',
    copy: 'Ürün geliştirme, endüstriyel prototip, IoT ürün geliştirme, gömülü sistem tasarımı, kamera sensör ürünü ve pilot üretim süreçleri çok disiplinli mühendislik ister. IYESYS, donanım, yazılım, mekanik tasarım ve saha testini birlikte yürüterek fikrin gerçek kullanım koşullarına hazırlanmasını sağlar.',
    keywords: ['ürün geliştirme', 'endüstriyel prototip', 'IoT ürün geliştirme', 'gömülü sistem tasarımı', 'kamera sensör ürünü', 'pilot üretim', 'ürünleşme süreci', 'donanım yazılım geliştirme'],
  },
  'Hareketli Ekipman - Yaya Güvenliği': {
    title: 'IYESYS forklift güvenlik, kamera izleme ve otomatik yavaşlatma/durdurma sistemi',
    copy: 'IYESYS forklift güvenlik sistemi; forklift kaza önleme, forklift yaya güvenliği, forklift kamera sistemi, forklift geri görüş kamerası, forklift operatör uyarı sistemi ve forklift sesli uyarı sistemi ihtiyaçlarını tek yapıda toplar. Forklift üzerindeki kameralar insanı algılar, operatör monitörü risk yönünü gösterir, UWB hassas mesafe kontrol cihazı diğer forkliftler ve tehlikeli bölgeler için otomatik yavaşlatma veya durdurma senaryosunu devreye alabilir.',
    keywords: ['forklift kaza önleme sistemi', 'forklift güvenlik sistemi', 'forklift yavaşlatma sistemi', 'forklift insan çarpışma önleme', 'forklift kamera sistemi', 'forklift operatör uyarı sistemi', 'forklift operatör kamera izleme sistemi', 'forklift geri görüş kamerası', 'forklift sesli uyarı sistemi', 'forklift yaya güvenliği', 'forklift çarpışma önleme sistemi', 'forklift hız düşürme sistemi'],
  },
  'Bölge Yaya Güvenliği': {
    title: 'IYESYS bölge yaya güvenliği, kör kavşak ve forklift uyarı sistemi',
    copy: 'Bölge yaya güvenliği; depo yaya geçidi, kör kavşak, kapı bölgesi, raf arası geçiş ve forklift koridorlarında insan-ekipman veya ekipman-ekipman çarpışma riskini yönetir. IYESYS; kamera, UWB hassas mesafe sistemi, forklift yavaşlatma/durdurma, hologram dur uyarısı, trafik lambası, şerit LED, sesli anons, otomatik kapı ve yönetim paneli senaryolarını tek güvenlik akışında çalıştırabilir.',
    keywords: ['bölge yaya güvenliği', 'forklift yaya uyarı sistemi', 'forklift yavaşlatma sistemi', 'forklift durdurma sistemi', 'UWB güvenlik sistemi', 'UWB hassas mesafe sistemi', 'hologram dur uyarısı', 'depo yaya geçidi güvenliği', 'kör kavşak güvenliği', 'trafik lambası uyarı sistemi', 'şerit LED uyarı sistemi', 'ekipman çarpışma önleme', 'otomatik kapı forklift sistemi'],
  },
  'Yükleme Rampası Güvenliği': {
    title: 'Yükleme rampalarında TIR arkası kör nokta ve kapı güvenliği',
    copy: 'Yükleme rampası güvenliği, TIR yanaşma kontrolü, TIR arkası insan algılama, rampa kapısı kilidi, trafik lambası, LED uyarı ve yüksek sesli anons senaryoları için tasarlanır. IYESYS, yapay zeka kamerasıyla geri yanaşma kör noktasını izler; güvenli koşul oluştuğunda yeşil yönlendirme, risk oluştuğunda kırmızı uyarı ve kapı kontrolü çalıştırabilir.',
    keywords: ['yükleme rampası güvenliği', 'TIR arkası insan algılama', 'rampa kapısı kilidi', 'TIR yanaşma kontrolü', 'depo rampa güvenliği', 'trafik lambası rampa sistemi', 'dock safety', 'rampa uyarı sistemi'],
  },
  'Aktif Uyarı Sistemleri': {
    title: 'Sahada duyulan, görülen ve otomasyona bağlanan uyarılar',
    copy: 'Aktif uyarı sistemleri; sesli anons, ışıklı ikaz, şerit LED, trafik lambası, projektör ve PLC bağlantılı uyarı donanımlarını kapsar. IYESYS, uyarı donanımını sahadaki hareket akışını yöneten bir güvenlik katmanı olarak tasarlar.',
    keywords: ['aktif uyarı sistemi', 'sesli anons sistemi', 'ışıklı ikaz sistemi', 'PLC uyarı sistemi', 'trafik lambası otomasyonu', 'şerit LED uyarı', 'endüstriyel ikaz sistemi', 'iş güvenliği uyarı sistemi'],
  },
  'Gömülü Yazılım ve IoT Çözümleri': {
    title: 'Endüstriyel IoT, gömülü yazılım ve sensör verisi yönetimi',
    copy: 'Gömülü yazılım, endüstriyel IoT sistemi, sensör verisi toplama, edge gateway, cihaz haberleşmesi ve IoT dashboard projeleri sahadaki ekipmanı izlenebilir hale getirir. IYESYS; mikrodenetleyici yazılımı, sensör entegrasyonu, veri toplama servisi, alarm yapısı ve yönetim panelini işletmenizin gerçek saha koşullarına göre tasarlar.',
    keywords: ['gömülü yazılım', 'endüstriyel IoT sistemi', 'IoT dashboard', 'sensör verisi toplama', 'edge gateway', 'cihaz haberleşmesi', 'Modbus entegrasyonu', 'MQTT IoT sistemi', 'özel IoT çözümü'],
  },
}

const fallbackSeo: ServiceSeo = {
  title: 'Sahanızdaki problemi uygulanabilir bir çözüme dönüştürün',
  copy: 'IYESYS; iş güvenliği, yapay zeka kamera sistemleri, üretim verimliliği, endüstriyel otomasyon, özel yazılım ve saha operasyonları için mevcut altyapınıza uyumlu çözümler geliştirir. Amaç, karmaşık teknolojiyi anlaşılır, ölçülebilir ve sahada kullanılabilir hale getirmektir.',
  keywords: ['iş güvenliği çözümleri', 'endüstriyel otomasyon', 'yapay zeka kamera sistemi', 'üretim verimliliği', 'özel yazılım geliştirme'],
}

export const getServiceSeo = (title: string) => seoByTitle[title] || fallbackSeo
