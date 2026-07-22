import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Görüntü İşleme Sistemlerinin PLC ile Entegrasyonu',
  description: 'Yapay zeka (Machine Vision) kameralarının endüstriyel otomasyon (PLC) sistemleriyle nasıl haberleştiğini ve düşük gecikmeli makine kontrolünü inceleyin.',
  openGraph: {
    title: 'Görüntü İşleme ve PLC Entegrasyonu: Sahada Nasıl Uygulanır?',
    description: 'Yapay zeka verilerinin milisaniye seviyesinde gecikmeyle PLC ve SCADA sistemlerine aktarıldığı otomasyon çözümleri.',
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
            Görüntü İşleme Sistemlerinin PLC ve SCADA ile Entegrasyonu
          </h1>
          
          <div className="flex items-center gap-4 text-slate-500 text-[15px]">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold">
                IT
              </div>
              <span className="font-medium text-slate-900">IYESYS Tech</span>
            </div>
            <span>·</span>
            <span>15 Şubat 2024</span>
            <span>·</span>
            <span>9 dk okuma</span>
          </div>
        </header>

        {/* Hero Image */}
        <div className="w-full h-[250px] sm:h-[400px] mb-12 rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
          <img 
            src="/img/warning-systems-showcase-v2.png" 
            alt="Görüntü İşleme ve PLC Otomasyon Entegrasyonu" 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>

        {/* Content */}
        <div className="prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-blue-600">
          
          <p className="lead text-xl text-slate-600 mb-8 font-medium leading-relaxed">
            Yazılım geliştiricileri ve yapay zeka uzmanları genellikle harika "Dashboard"lar (gösterge panelleri) tasarlamaya odaklanır. Ancak bir otomasyon mühendisiyseniz çok iyi bilirsiniz ki; süslü bir web arayüzü, saniyede metrelerce hızla dönen bir üretim bandını veya binlerce tonluk bir pres makinesini durduramaz. Makineyi durduran şey PLC'dir.
          </p>

          <h2>"Görmek" Yetmez, "Dokunmak" Gerekir</h2>
          <p>
            Bugün <strong>Makine Görmesi (Machine Vision)</strong> tabanlı endüstriyel kamera sistemleri, ürün üzerindeki milimetrik bir çiziği veya tehlikeli bir alana giren işçiyi anında tespit edebiliyor. Ancak asıl kritik eşik, tespit edilen bu "hatayı" sahadaki fiziksel donanıma aktarabilmektir. Python veya C++ ile yazılmış yapay zeka algoritmanız, fabrikadaki Siemens, Allen-Bradley veya Omron marka bir PLC (Programmable Logic Controller) ile aynı dili konuşamadığı sürece projeniz sahada sadece bir "deney" olarak kalır.
          </p>

          <h2>Görüntü İşleme ve PLC Nasıl Konuşur? Protokoller ve Gecikme (Latency)</h2>
          <p>
            Yapay zeka (AI) sunucusunun PLC ile konuşması için birkaç popüler endüstriyel haberleşme protokolü kullanırız. Projenin hız gereksinimlerine göre donanım ve yazılım katmanında tercih ettiğimiz yöntemler şunlardır:
          </p>
          
          <h3>1. Dijital I/O (Röle Kontakları) ile Donanımsal Tetikleme</h3>
          <p>
            Eğer ağ gecikmelerine (network latency) tahammülünüz yoksa ve sadece "Hatalı Parça Var / Yok" (Pass/Fail) şeklinde bir bilgi aktaracaksanız en garanti yöntemdir. AI cihazının üzerindeki dijital çıkış (Digital Output) pinleri, PLC'nin giriş (Input) pinlerine doğrudan kablolanır. Yapay zeka bir hata gördüğünde pini 24V seviyesine çeker, PLC bunu 1-2 milisaniye (ms) içinde algılayarak pistonu tetikler ve hatalı ürünü hattan atar.
          </p>

          <h3>2. Modbus TCP/IP: Otomasyonun Evrensel Dili</h3>
          <p>
            Endüstride "İsviçre çakısı" olarak adlandırdığımız <strong>Modbus TCP/IP</strong>, ağ (Ethernet) üzerinden görüntü işleme sonuçlarını PLC'ye aktarmak için en sık kullandığımız protokoldür. 
            AI yazılımı bir TCP soketi açar ve PLC'nin belirli adreslerine (Holding Registers veya Coils) doğrudan bit değerleri yazar. Örneğin; <code>Register 40001 = 1</code> olduğunda, PLC "Acil Stop" rutinini devreye sokar. Modbus TCP ile 10-20 ms aralığında çok kararlı tepki süreleri elde edilebilir.
          </p>

          <h3>3. Profinet ve EtherCAT (Ultra Düşük Gecikme)</h3>
          <p>
            Saniyede yüzlerce parçanın geçtiği yüksek hızlı şişeleme veya paketleme hatlarında Modbus bile yavaş kalabilir. Bu durumlarda AI kameraları doğrudan <strong>Profinet</strong> veya <strong>EtherCAT</strong> ağına bir "Slave Node" (düğüm) olarak dahil ederiz. Bu seviyede haberleşme doğrudan MAC adresleri üzerinden yapıldığı için gecikme (latency) 1 milisaniyenin bile altına iner.
          </p>

          <h2>Büyük Resmi Görmek: SCADA ve OPC UA Entegrasyonu</h2>
          <p>
            PLC sadece anlık reaksiyonlardan sorumludur (makineyi durdur, ürünü reddet). Ancak vardiya sonunda <em>"Kaç ürün sağlam çıktı?", "Hatalar genelde hangi saatlerde artıyor?"</em> gibi analizler için verilerin bir üst katmana, yani <strong>SCADA</strong> veya <strong>ERP/MES</strong> sistemlerine akması gerekir. 
          </p>
          <p>
            İşte burada <strong>OPC UA (Open Platform Communications Unified Architecture)</strong> devreye girer. Görüntü işleme sistemimiz bir OPC UA Sunucusu gibi davranarak fabrikadaki tüm kalite kontrol metriklerini, güvenli ve şifreli bir şekilde merkez SCADA ekranlarına canlı olarak aktarır.
          </p>

          <blockquote>
            "İyi bir yapay zeka modeli fabrikaya göz, iyi bir PLC entegrasyonu ise o fabrikaya kas ve sinir sistemi kazandırır."
          </blockquote>

          <h2>Sonuç Olarak</h2>
          <p>
            Bir yapay zeka projesinin fabrikada gerçek bir değer yaratması; IT (Bilgi Teknolojileri) ve OT (Operasyonel Teknolojiler) dünyalarının kusursuz bir şekilde birleşmesine bağlıdır. IYESYS olarak bizler, sadece yüksek doğrulukla çalışan kameralar geliştirmekle kalmıyor; bu akıllı gözlerin, sahadaki ağır sanayi makineleriyle milisaniyeler içinde güvenle el sıkışmasını (handshake) sağlıyoruz.
          </p>
        </div>
        
      </article>
    </div>
  )
}
