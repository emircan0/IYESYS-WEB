import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Gıda Üretiminde Kamera Sistemleri ile Otonom Hijyen Kontrolü | IYESYS',
  description: 'Gıda tesislerinde bone, maske, eldiven denetimlerini otonomlaştıran yapay zeka kamera sistemlerinin BRC ve IFS kalite standartlarına etkisi.',
  openGraph: {
    title: 'Gıda Üretiminde Otonom Hijyen ve Kalite Kontrolü',
    description: 'Yapay zeka ile 7/24 kesintisiz KKD (bone, maske, eldiven) kontrolü ve üretim bandı hijyen güvenliği.',
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
            Gıda Üretiminde Kamera Sistemleri ile Otonom Hijyen ve Kalite Kontrolü
          </h1>
          
          <div className="flex items-center gap-4 text-slate-500 text-[15px]">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold">
                IS
              </div>
              <span className="font-medium text-slate-900">IYESYS Sektörel</span>
            </div>
            <span>·</span>
            <span>30 Ocak 2024</span>
            <span>·</span>
            <span>8 dk okuma</span>
          </div>
        </header>

        {/* Hero Image */}
        <div className="w-full h-[250px] sm:h-[400px] mb-12 rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
          <img 
            src="/img/16.png" 
            alt="Gıda Üretimi Yapay Zeka Hijyen ve Kalite Kontrol" 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>

        {/* Content */}
        <div className="prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-blue-600">
          
          <p className="lead text-xl text-slate-600 mb-8 font-medium leading-relaxed">
            Bir gıda fabrikasında Kalite Güvence (QA) Yöneticisiyseniz, en büyük kabusunuz üretim bandına düşen tek bir saç telidir. Tonlarca ürünün toplatılmasına, devasa maddi zararlara ve marka itibarının bir gecede yok olmasına sebep olabilecek bu detayı, yüzlerce çalışanın olduğu bir tesiste manuel olarak nasıl denetlersiniz? Cevap basit: Denetleyemezsiniz.
          </p>

          <h2>Manuel Denetimin "Kör Noktaları" ve BRC/IFS Baskısı</h2>
          <p>
            Vardiya amirlerinin sahada attığı turlar maalesef "o anı" kurtarır. Denetim esnasında herkesin bonesi ve maskesi tamdır. Ancak amir arkanı döndüğü an nefes almak için maske çeneye iner, mola dönüşü eldivenler unutulur. Hele ki kapıda uluslararası BRC (British Retail Consortium) veya IFS denetçileri varken, fabrikanın kaderini bir işçinin "anlık" unutkanlığına bırakmak büyük bir kumardır.
          </p>

          <h2>Yapay Zeka (AI Vision) ile Otonom Hijyen Denetimi Nasıl Çalışır?</h2>
          <p>
            Gıda güvenliğinde kuralları teknolojiyle birleştirdiğimizde, <strong>Yapay Zeka (AI) tabanlı otonom kameralar</strong> devreye girer. Üretim holünün girişlerine, dezenfeksiyon koridorlarına (Air Shower) ve üretim bantlarının üzerine yerleştirilen IP kameralar, insan hatasını devreden çıkarır.
          </p>
          
          <p>
            Sistem arka planda <em>Object Detection (Nesne Tespiti)</em> modellerini kullanarak, her bir personelin üzerinde eksik bir Kişisel Koruyucu Donanım (KKD) olup olmadığını saniyede defalarca kez analiz eder.
          </p>
          
          <h3>Zorlu Ortamlarda Algoritma (Mühendislik Detayı)</h3>
          <p>
            Gıda fabrikaları yapay zeka kameraları için çok zorlu sahalardır. Her yer paslanmaz çelikten yapıldığı için aşırı yansıma (reflection) olur; ortam buharlı, ıslak veya unludur. IYESYS olarak modellerimizi (YOLO tabanlı varyantlar) bu spesifik "gürültülü" ortamlar için eğitiyoruz. Mavi eldiven ile beyaz bone, veya maske ile sakal koruyucu arasındaki ayrımı %99'un üzerinde <em>Confidence Score (Güven Skoru)</em> ile yapabilen spesifik ağırlıklar (weights) kullanıyoruz.
          </p>

          <h2>Teoriden Pratiğe: Fiziksel Turnike (Interlock) Entegrasyonları</h2>
          <p>
            Sistemin en can alıcı noktası sadece "raporlamak" değildir. Hijyen koridorunda (Hijyen Bariyeri) ellerini dezenfekte eden bir işçi, turnikeden geçmek ister. Kameramız işçinin kafasında bone olmadığını veya maskesini takmadığını anında fark eder.
          </p>
          <ul>
            <li><strong>Anında Blokaj:</strong> Kamera röle çıkışından (veya PLC üzerinden) turnikeye sinyal gönderir ve <strong>turnike kilitlenir</strong>.</li>
            <li><strong>Anında Uyarı:</strong> Ekranda işçiye "Lütfen Bonenizi Takınız" uyarısı görsel ve sesli olarak iletilir.</li>
            <li>İşçi bonesini taktığı an (yaklaşık 200 milisaniye içinde) sistem doğrulamayı yapar ve turnike otomatik olarak açılır.</li>
          </ul>

          <h2>Aksesuar ve Takı İhlalleri (Yabancı Madde Riski)</h2>
          <p>
            Sadece bone ve maske değil; iş sağlığı ve gıda güvenliği gereği üretim alanında yüzük, saat, kolye ve küpe takmak kesinlikle yasaktır. Yüksek çözünürlüklü kameralar ve doğru ışıklandırma ile personelin ellerindeki yüzük veya saatler tespit edilerek üretim hattına yabancı madde karışma riski minimuma indirilir.
          </p>

          <blockquote>
            "Otonom hijyen kameraları, kalite kontrol yöneticilerinin gece rahat uyumasını sağlayan en güvenilir vardiya amirleridir."
          </blockquote>

          <h2>Sonuç: Gıda Güvenliğinde Sıfır Taviz</h2>
          <p>
            Manuel denetimler örnekleme usulü çalışırken, yapay zeka <strong>%100 otonom kalite kontrol</strong> sağlar. Olası bir denetimde "Biz hijyeni yapay zeka ile 7/24 garanti altına alıyoruz ve girişleri fiziksel olarak kilitliyoruz" diyebilmek, firmanızın sektördeki prestijini ve güvenilirliğini ulaşılmaz bir noktaya taşıyacaktır.
          </p>
        </div>
        
      </article>
    </div>
  )
}
