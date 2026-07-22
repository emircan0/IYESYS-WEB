'use client'

import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: "IYESYS tam olarak ne yapar ve işletmeme nasıl bir değer katar?",
    answer: "IYESYS, endüstriyel tesislerdeki güvenlik ve verimlilik açıklarını yapay zeka ve görüntü işleme teknolojileriyle çözer. Sahadaki kameralar ve sensörler aracılığıyla iş kazalarını önceden tespit eder, otonom sistemlerle (otomatik fren, bariyer) tehlikeyi durdurur ve operasyonel hataları raporlayarak karlılığınızı artırır."
  },
  {
    question: "Kurduğunuz sistemler günlük üretim hızımızı yavaşlatır mı?",
    answer: "Hayır, tam aksine operasyonunuzun daha akıcı olmasını sağlar. Sistemlerimiz sadece gerçek bir risk algıladığında (örneğin forkliftin kör noktasına aniden biri çıktığında) devreye girer. Yanlış alarmlar minimuma indirildiği için üretim duraklamaz."
  },
  {
    question: "Hangi sektörlere ve tesislere hizmet veriyorsunuz?",
    answer: "Lojistik depoları, otomotiv fabrikaları, gıda tesisleri, ağır sanayi ve üretim bantları başta olmak üzere iş güvenliğinin ve operasyonel verimliliğin kritik olduğu tüm endüstriyel alanlara anahtar teslim çözümler sunuyoruz."
  },
  {
    question: "Sistemin çalışması için fabrikada sürekli internet bağlantısı şart mı?",
    answer: "Hayır. Sistemlerimiz internetten bağımsız olarak tesisinizin kendi iç ağında (offline) kapalı devre çalışabilecek şekilde tasarlanmıştır. İnternet bağlantısı sadece isteğe bağlı uzaktan teknik destek veya yazılım güncellemeleri için kullanılır."
  },
  {
    question: "Sistemlerin kurulumu ve sahaya entegrasyon süreci ne kadar sürer?",
    answer: "Tesisinize ait projelendirme (Keşif) aşamasından sonra donanımların montajı ve yazılım entegrasyonu, operasyonunuzu durdurmadan paralel olarak yürütülür. Donanım hacmine bağlı olarak ortalama sistem devreye alma süremiz proje bazında belirlenir ve 'plug-and-play' (tak-çalıştır) altyapımız sayesinde çok hızlıdır."
  },
  {
    question: "Hareketli ekipman (Forklift vb.) yaya algılama sisteminin tespit hassasiyeti nedir?",
    answer: "Geliştirdiğimiz derin öğrenme modelleri sayesinde, çok düşük ışıkta bile özel yansıtıcı yelek veya tag/sensör gereksinimi duymadan yayaları tespit edebilmekteyiz. Forklift üzerine kurduğumuz donanımlar, 360 derece kör nokta kontrolü ile tehlike anında otomatik fren/yavaşlatma protokollerini tetikler."
  },
  {
    question: "Gıda tesislerindeki hijyen kontrolleri yapay zeka ile nasıl denetleniyor?",
    answer: "Kritik hijyen bölgelerindeki kameralar üzerinden personelin bone, maske, önlük ve eldiven kullanımını anlık olarak analiz ediyoruz. Eksik veya hatalı KKD (Kişisel Koruyucu Donanım) tespit edildiğinde giriş turnikeleri kilitlenebilir veya yönetici ekranına anında uyarı düşer."
  },
  {
    question: "Mevcut IP veya CCTV kamera altyapımıza entegrasyon sağlanabiliyor mu?",
    answer: "Evet. Edge Computing (Uç Bilişim) destekli mini sunucularımız sayesinde tesisinizde hali hazırda bulunan ONVIF/RTSP destekli kameralara doğrudan entegre olabiliyoruz. Kamera donanımınızı tamamen değiştirmenize gerek kalmadan mevcut altyapınızı akıllandırıyoruz."
  },
  {
    question: "PLC, SCADA ve IO modülleri ile otonom donanım entegrasyonu nasıl sağlanır?",
    answer: "Yapay zeka analiz motorumuzdan çıkan alarm sinyallerini endüstriyel röleler, Ethernet modülleri veya doğrudan PLC (Siemens, Allen-Bradley vb.) üzerinden sahadaki ekipmanlara (uyarı ışıkları, turnikeler, bariyerler, makine durdurma switch'leri) milisaniyelik gecikmelerle (low-latency) aktarabiliyoruz."
  },
  {
    question: "Bulut (Cloud) altyapısı zorunlu mu, lokal (On-Premise) sunucu kullanımı mümkün mü?",
    answer: "Endüstriyel veri güvenliği ve gizlilik gereksinimlerinizi anlıyoruz. Tüm görüntü işleme ve analiz süreçleri tamamen tesisinizdeki lokal sunucularda (On-Premise) çevrimdışı olarak çalışabilmektedir. Dışarıya veya buluta hiçbir şekilde görüntü aktarımı yapılmaz."
  },
  {
    question: "Tesisimize özel Dashboard (Yönetici Paneli) ERP sistemlerimize bağlanabiliyor mu?",
    answer: "Tamamen kendi yazılım ekibimiz tarafından geliştirilen veri panellerimiz; SAP, Oracle veya size özel geliştirilmiş iç ERP/MES sistemleri ile API veya veritabanı (SQL) köprüleri üzerinden haberleşebilir. Hakediş, vardiya yönetimi ve verimlilik analizlerini doğrudan kendi sisteminizden takip edebilirsiniz."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-[1px] bg-black" />
            <span className="text-black text-xs font-bold uppercase tracking-[0.2em]">SSS</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-black leading-[1.1] tracking-tight">
            Sıkça Sorulan Sorular
          </h2>
          <p className="mt-4 text-slate-500 text-lg font-light leading-relaxed">
            Yapay zeka entegrasyonları, donanım uyumluluğu ve operasyonel işleyiş hakkında teknik detaylar.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-sm border transition-all duration-300 ${
                  isOpen
                    ? 'border-black bg-slate-50'
                    : 'border-slate-200 bg-white hover:border-black/50'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center gap-6 group"
                  aria-expanded={isOpen}
                >
                  <span className={`font-bold text-[15px] md:text-base leading-snug transition-colors ${
                    isOpen ? 'text-black' : 'text-slate-800 group-hover:text-black'
                  }`}>
                    {faq.question}
                  </span>
                  <span className={`flex-shrink-0 w-7 h-7 rounded-full border transition-all duration-300 flex items-center justify-center ${
                    isOpen
                      ? 'border-black bg-black text-white'
                      : 'border-slate-300 text-slate-400 group-hover:border-black group-hover:text-black'
                  }`}>
                    {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 pb-5' : 'grid-rows-[0fr] opacity-0'}`}
                  aria-hidden={!isOpen}
                >
                  <div className="overflow-hidden px-6">
                    <p className="text-slate-600 text-[14px] md:text-[15px] font-medium leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
