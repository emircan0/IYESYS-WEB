import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Forklift ve Yaya Çarpışma Önleyici Sistemler',
  description: 'Lojistik depoları ve fabrikalardaki forklift kazalarını önlemek için geliştirilen yapay zeka (AI) destekli yaya uyarı ve çarpışma önleyici sistemlerin teknik analizi.',
  openGraph: {
    title: 'Forklift ve Yaya Çarpışma Önleyici Uyarı Sistemleri Nasıl Çalışır?',
    description: 'Kör nokta kazalarını bitiren otonom yaya algılama ve aktif hız kesme sistemlerinin çalışma prensipleri.',
  }
}

export default function ArticlePage() {
  return (
    <div className="bg-white min-h-screen font-sans text-slate-900 pt-32 pb-24">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <div className="mb-8">
          <Link href="/insights" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Makalelere Dön
          </Link>
        </div>

        {/* Header */}
        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6 tracking-tight">
            Forklift ve Yaya Çarpışma Önleyici Uyarı Sistemleri Nasıl Çalışır?
          </h1>
          
          <div className="flex items-center gap-4 text-slate-500 text-[15px]">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold">
                AR
              </div>
              <span className="font-medium text-slate-900">IYESYS Ar-Ge</span>
            </div>
            <span>·</span>
            <span>28 Şubat 2024</span>
            <span>·</span>
            <span>8 dk okuma</span>
          </div>
        </header>

        {/* Hero Image */}
        <div className="w-full h-[250px] sm:h-[400px] mb-12 rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
          <img 
            src="/img/alan-guvenligi.png" 
            alt="Forklift Kaza Önleme ve Yaya Uyarı Sistemi" 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>

        {/* Content */}
        <div className="prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-blue-600">
          
          <p className="lead text-xl text-slate-600 mb-8 font-medium leading-relaxed">
            Yoğun bir deponun içine girdiğinizde duyduğunuz ilk şey hiç bitmeyen bir "bip bip bip" sesidir. Geri vites alarmları, uyarı kornaları ve makine gürültüleri... Peki bu ses cümbüşü içinde yayalar gerçekten uyarıları algılıyor mu? Maalesef hayır. Psikolojide buna <em>"Alarm Fatigue" (Alarm Yorgunluğu)</em> deniyor ve ölümcül forklift kazalarının en büyük sinsi sebeplerinden biri tam olarak budur.
          </p>

          <h2>Kör Nokta: Operatörün Kabusu</h2>
          <p>
            Tonlarca ağırlığındaki bir forkliftin operatör koltuğuna oturduğunuzda, önünüzdeki devasa paletler yüzünden görüş açınızın büyük bir kısmını kaybedersiniz. Rafların keskin köşeleri, yükleme rampaları ve kapı geçişleri tam bir <strong>kör nokta (blind spot)</strong> tuzağıdır. Operatörler, "Biri aniden önüme çıkacak mı?" stresiyle çalışmaktan ciddi iş gücü ve motivasyon kaybı yaşarlar. Geleneksel mavi ışıklar (blue spot) veya aynalar bu stresi sadece bir yere kadar azaltabilir.
          </p>

          <h2>Geleneksel Sensörler vs. Yapay Zeka (AI) Kameralar</h2>
          <p>
            Eski nesil <strong>çarpışma önleyici sistemler</strong> çoğunlukla ultrasonik sensörler veya RFID (radyo frekansı) etiketlere dayanırdı. Ultrasonik sensörler cansız bir palete veya duvara da ötmeye başladığında, operatörler bir süre sonra bu sesleri görmezden gelmeye (hatta fişini çekmeye) başlar. RFID sistemler ise tüm personelin bir çip takmasını gerektirir, ziyarete gelen bir misafiri veya kuryeyi algılayamaz.
          </p>
          <p>
            İşte bu noktada <strong>Yapay Zeka Destekli Forklift Kamera Sistemleri</strong> (AI Pedestrian Detection) devrimi başlar. Aracın üzerine entegre edilen bu akıllı kameralar; duvarı, paleti veya rafı umursamaz. Gelişmiş <em>Machine Vision</em> algoritmaları sayesinde doğrudan "insan formunu" tanıyacak şekilde eğitilmişlerdir. Yere eğilmiş bir işçiyi, sadece kaskı görünen bir operatörü veya hızla koşan birini saliseler içinde tespit eder.
          </p>
          
          <h3>Teknoloji Nasıl İşliyor? Dinamik Algılama Zonları</h3>
          <p>
            Makine öğrenmesi modelleri sadece bir yayanın varlığını değil, mesafesini ve yaklaşma vektörünü de hesaplar. Aracın hızına göre sistem etrafında dinamik olarak sanal kalkanlar (bölgeler) oluşturulur:
          </p>
          <ul>
            <li><strong>Yeşil Bölge (Güvenli İzleme):</strong> Yaya 5-8 metre mesafededir. Sistem tetiktedir ama operatörü rahatsız etmez.</li>
            <li><strong>Sarı Bölge (Görsel ve Sesli Uyarı):</strong> Yaya 3-5 metre arası tehlikeli alana girdiğinde, kabin içindeki ekranda yayanın yönü kırmızı bir kutu içinde gösterilir ve şiddetli bir sesli uyarı verilir.</li>
            <li><strong>Kırmızı Bölge (Aktif Müdahale):</strong> Yaya 3 metrenin altındaysa, artık sadece uyarı yetmez. </li>
          </ul>

          <h2>Kritik Mühendislik: CAN Bus Entegrasyonu ve Hız Kesme</h2>
          <p>
            İleri seviye iş güvenliği entegrasyonlarında sistem sadece bağırmakla yetinmez, inisiyatifi ele alır. IYESYS olarak gerçekleştirdiğimiz gelişmiş kurulumlarda, AI kameranın işlemcisi doğrudan forkliftin <strong>CAN Bus</strong> iletişim hattına (veya doğrudan gaz/fren pedal sinyallerine) bağlanır.
          </p>
          <p>
            Kırmızı bölgede (Red Zone) bir insan algılandığı an, sistem operatörün tepki vermesini beklemeden <em>Speed Limiter (Hız Kesici)</em> protokolünü devreye sokar. Forklift güvenli bir şekilde yavaşlatılır (örneğin maksimum 2 km/s hıza düşürülür) veya tamamen bloke edilir. Bu sayede insan faktörü, yani panik veya dikkatsizlik, kaza denkleminden tamamen çıkarılmış olur.
          </p>

          <h2>Sabit "Kör Nokta" (Kavşak) Sistemleri</h2>
          <p>
            Hareketli araçların yanı sıra depoların tehlikeli kavşaklarına kurulan <strong>sabit yaya uyarı sistemleri</strong> de zincirin diğer halkasıdır. Köşeden dönmek üzere olan bir forklift ile karşıdan gelen bir yaya birbirini göremez. Ancak tepedeki AI kamera ikisini de görür. Bir çarpışma rotası oluştuğunu algıladığında, yere yüksek lümenli bir "DUR" işareti veya devasa bir kırmızı uyarı sembolü yansıtarak tarafları kör noktaya girmeden durdurur.
          </p>

          <blockquote>
            "İyi bir iş güvenliği teknolojisi, personeli eğitmek için zorlamaz; doğal reflekslerle uyum içinde, sessizce hayat kurtarır."
          </blockquote>

          <h2>Sonuç Olarak</h2>
          <p>
            Forklift ve yaya çarpışmalarını sıfıra indirmek, artık iyi niyetli uyarı levhalarıyla veya kulak ardı edilen kornalarla başarılamaz. Makine görmesi (Machine Vision) destekli otonom sistemler, deponuzdaki iş gücünü stresten kurtarırken, iş sağlığı ve güvenliği (İSG) standartlarınızı kelimenin tam anlamıyla "insanüstü" bir boyuta taşır.
          </p>
        </div>
        
      </article>
    </div>
  )
}
