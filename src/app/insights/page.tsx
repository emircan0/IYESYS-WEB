'use client'

import Link from 'next/link'

const articles = [
  {
    title: "Endüstri 4.0'da Otonom İş Güvenliği Standartları",
    excerpt: "Geleneksel iş güvenliği yaklaşımlarının yerini alan yapay zeka destekli otonom sistemlerin fabrikalardaki kaza oranlarına doğrudan etkisi ve verimlilik analizi.",
    author: "IYESYS Engineering",
    authorInitials: "IE",
    date: "Mar 12",
    image: "/img/hareketliekipman-yaya1.png",
    claps: "4.95K",
    comments: "185",
    reposts: "41"
  },
  {
    title: "Forklift ve Yaya Etkileşiminde Kör Nokta Yönetimi",
    excerpt: "Lojistik depolarında en çok karşılaşılan forklift-yaya kazalarının temel nedenleri, kör nokta dinamikleri ve Uç Bilişim (Edge Computing) ile otonom çözüm yolları.",
    author: "IYESYS Ar-Ge",
    authorInitials: "AR",
    date: "Feb 28",
    image: "/img/alan-guvenligi.png",
    claps: "3.2K",
    comments: "94",
    reposts: "12"
  },
  {
    title: "PLC Sistemlerine Görüntü İşleme Entegrasyonu",
    excerpt: "Saha kameralarından alınan anlık verilerin milisaniyelik gecikmelerle (low-latency) PLC ve SCADA sistemlerine aktarılması ve makine durdurma protokolleri.",
    author: "IYESYS Tech",
    authorInitials: "IT",
    date: "Feb 15",
    image: "/img/warning-systems-showcase-v2.png",
    claps: "2.1K",
    comments: "45",
    reposts: "8"
  },
  {
    title: "Gıda Sektöründe Yapay Zeka ile Hijyen Denetimi",
    excerpt: "İnsan faktörünün yetersiz kaldığı kritik hijyen alanlarında bone, maske ve eldiven denetimlerinin 7/24 otonom olarak nasıl sağlandığına dair saha raporları.",
    author: "IYESYS Sektörel",
    authorInitials: "IS",
    date: "Jan 30",
    image: "/img/16.png",
    claps: "1.8K",
    comments: "32",
    reposts: "5"
  }
]

export default function InsightsPage() {
  return (
    <div className="bg-white min-h-screen font-sans text-slate-900 pt-32 pb-24">
      
      {/* Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Title (Optional, keeping it minimal like Medium feed) */}
        <div className="mb-12 pb-4 border-b border-slate-100">
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Makaleler</h1>
          <p className="text-slate-500 mt-2 text-[15px]">İş güvenliği ve yapay zeka teknolojileri üzerine sektörel makaleler ve vaka analizleri.</p>
        </div>

        {/* Article Feed */}
        <div className="flex flex-col">
          {articles.map((article, index) => (
            <Link key={index} href="#" className="py-8 border-b border-slate-100 flex gap-6 sm:gap-8 items-start group cursor-pointer">
              
              {/* Left Content */}
              <div className="flex-1 min-w-0">
                
                {/* Author Info */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-[10px] font-bold">
                    {article.authorInitials}
                  </div>
                  <span className="text-[14px] font-medium text-slate-900">{article.author}</span>
                  <span className="text-slate-400 text-sm">·</span>
                  <span className="text-[14px] text-slate-500">{article.date}</span>
                </div>

                {/* Title & Excerpt */}
                <div className="block mb-6">
                  <h2 className="text-[22px] sm:text-[26px] font-extrabold text-slate-900 leading-[1.2] mb-2 tracking-tight group-hover:text-blue-600 transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-[15px] sm:text-[16px] text-slate-500 leading-relaxed font-normal line-clamp-2 md:line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              {/* Right Image */}
              <div className="w-[120px] h-[80px] sm:w-[160px] sm:h-[107px] md:w-[240px] md:h-[160px] shrink-0 mt-2">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover rounded-sm border border-slate-100"
                />
              </div>

            </Link>
          ))}
        </div>

      </div>
    </div>
  )
}
