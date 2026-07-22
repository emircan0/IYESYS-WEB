import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Yapay Zeka Destekli İSG',
  description: 'Yapay Zeka (AI) destekli İş Sağlığı ve Güvenliği (İSG) sistemlerinin endüstriyel fabrikalarda iş kazalarını nasıl önlediğini teknik detaylarıyla keşfedin.',
  openGraph: {
    title: 'Yapay Zeka Destekli İSG',
    description: 'Edge computing ve derin öğrenme ile donatılmış yeni nesil İSG sistemleri.',
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
            Yapay Zeka Destekli İş Güvenliği (İSG) Sistemleri Nelerdir?
          </h1>
          
          <div className="flex items-center gap-4 text-slate-500 text-[15px]">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold">
                IE
              </div>
              <span className="font-medium text-slate-900">IYESYS Engineering</span>
            </div>
            <span>·</span>
            <span>12 Mart 2024</span>
            <span>·</span>
            <span>7 dk okuma</span>
          </div>
        </header>

        {/* Hero Image */}
        <div className="w-full h-[250px] sm:h-[400px] mb-12 rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
          <img 
            src="/img/hareketliekipman-yaya1.png" 
            alt="Yapay Zeka İş Güvenliği Kamera Sistemleri" 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>

        {/* Content */}
        <div className="prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-blue-600">
          
          <p className="lead text-xl text-slate-600 mb-8 font-medium leading-relaxed">
            Sahada yıllarca mühendislik yapmış biriyseniz, şu manzarayı çok iyi bilirsiniz: İSG denetimi yaklaşırken herkes baretini takar, yeleğini ilikler; denetim bittiği an her şey eski rutinine döner. Peki, 7/24 uyumayan, yorulmayan ve duygusal davranmayan bir denetçimiz olsaydı? İşte yapay zeka (AI) tam da bu noktada oyuna dahil oluyor.
          </p>

          <h2>Geleneksel İSG Neden Tıkanıyor?</h2>
          <p>
            Geleneksel iş güvenliği kültürü büyük oranda "reaktif" yani tepkiseldir. Fabrikalarda onlarca prosedür yazılır, eğitimler verilir, uyarı levhaları asılır. Ancak günün sonunda, 10.000 metrekarelik bir üretim tesisindeki yüzlerce personeli aynı anda takip etmek insan doğasına aykırıdır. Bir kaza olduğunda kameralar sadece olan biteni kaydetmekten öteye gidemez. Biz mühendisler ise kazadan sonra "keşke" demek yerine, "kazayı olmadan saniyeler önce nasıl durdururuz" sorusunun peşindeyiz.
          </p>

          <h2>Yapay Zeka Destekli İSG Sistemlerinin Kalbi: Görüntü İşleme</h2>
          <p>
            Yapay zeka iş güvenliği sistemleri, fabrikanızdaki standart IP kameraları "akıllı birer göze" dönüştürür. Sistem, RTSP akışları üzerinden aldığı canlı kamera görüntülerini anlık olarak analiz eder. Arka planda genellikle CNN (Convolutional Neural Network) tabanlı, özellikle YOLO (You Only Look Once) mimarisinin optimize edilmiş versiyonları çalışır.
          </p>
          
          <p>
            Bu derin öğrenme algoritmaları sayesinde yazılım; ekrandaki piksellerin sadece bir renk kümesi olmadığını, o piksellerin bir "insan", bir "forklift" veya bir "baret" olduğunu saniyenin onda biri gibi bir sürede anlar.
          </p>
          
          <h3>Temel Saha Uygulamaları ve Tespit Senaryoları</h3>
          <ul>
            <li><strong>Dinamik KKD Denetimi:</strong> Personel sahaya girdiği anda baret, reflektörlü yelek veya iş gözlüğü eksikliği tespit edilir. Geleneksel sistemler gibi kuralı sadece kapıda değil, sahanın her metrekaresinde kontrol eder.</li>
            <li><strong>Red Zone (Tehlikeli Alan) İhlalleri:</strong> Çalışanların girmemesi gereken aktif robotik kolların etrafına sanal sınırlar çizilir. Bu sınıra yaklaşıldığında sistem ön uyarı verir, sınır geçilirse PLC entegrasyonu ile makineyi anında acil duruşa (E-Stop) geçirir.</li>
            <li><strong>Ergonomi ve Hareketsizlik Analizi (Man Down):</strong> Yalnız çalışan (lone worker) personelin aniden yere düşmesi veya uzun süre hareketsiz kalması durumunda sistem bunu bir anomali olarak algılar ve sağlık ekiplerine lokasyon bilgisiyle alarm gönderir.</li>
          </ul>

          <h2>Teknik Altyapı: Bulut mu, Edge Computing mi?</h2>
          <p>
            İşin mühendislik kısmında en çok tartıştığımız konu gecikme süresidir (latency). İş güvenliğinde 2 saniyelik bir gecikme felaketle sonuçlanabilir. Bu yüzden bulut (cloud) tabanlı işlemeler yerine <strong>Edge Computing (Uç Bilişim)</strong> mimarisini kullanıyoruz. 
          </p>
          <p>
            Kameralardan gelen veriler, sahaya kurulan endüstriyel GPU'lu sunucularda (NVIDIA Jetson serisi veya RTX mimarili edge cihazlar) lokal olarak işlenir. Bu sayede <em>Inference</em> (çıkarım) süreleri 15-20 milisaniye seviyelerine iner. Kısacası, bir işçinin eli pres makinesinin tehlike sınırını geçtiği an, sistem bunu algılayıp PLC'ye Modbus TCP üzerinden durdurma sinyalini göz açıp kapayıncaya kadar gönderir.
          </p>

          <blockquote>
            "Otonom İSG sistemleri, bir ceza mekanizması değil; sahadaki işçiyi eve sağ salim göndermeye yemin etmiş görünmez bir kalkan gibidir."
          </blockquote>

          <h2>Yatırımın Geri Dönüşü (ROI) ve Psikolojik Etki</h2>
          <p>
            Yapay zeka tabanlı iş güvenliği kamera sistemleri kurulduğunda ilk haftalarda yüzlerce ihlal alarmı alınır. Bu beklenen bir durumdur. Ancak ikinci haftadan itibaren "sistemin sürekli izlediği ve uyardığı" bilinci sahaya yerleştiğinde, kural ihlalleri organik olarak %80-90 oranında azalır.
          </p>
          <p>
            Maddi açıdan baktığımızda; önlenen tek bir ciddi iş kazası, durmayan üretim hatları ve sıfıra inen tazminat riskleri, sistemin kendi kendini aylar içinde amorti etmesini sağlar.
          </p>

          <h2>Geleceğe Bakış</h2>
          <p>
            Fabrikaların dijital ikizlerinin (Digital Twin) oluşturulduğu, Endüstri 4.0'ın norm haline geldiği günümüzde, İSG uygulamalarının analog kalması düşünülemez. Yapay zeka destekli otonom iş güvenliği sistemleri, üretim sahaları için artık bir lüks veya prestij projesi değil, "sıfır kaza" vizyonunun en temel mühendislik bileşenidir.
          </p>
        </div>
        
      </article>
    </div>
  )
}
