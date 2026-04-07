'use client'

import { Eye, Map, AlertTriangle, PlayCircle, HeartPulse, ScanLine } from 'lucide-react'

export default function AreaSafetyPage() {
  return (
    <div className="bg-white text-slate-900 font-sans">

      {/* 1. HERO BÖLÜMÜ */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight text-slate-900 mb-6">
            Görünmeyen Tehlikeleri <br />
            <span className="text-emerald-600">Görünür Kılın</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10 font-light">
            Endüstriyel sahalarda akıllı güvenlik katmanı. AI kameralar ile kritik noktaları görünür kılın ve riskli alanlarda anlık uyarı sistemleri devreye alın.
          </p>

          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row bg-white rounded-[2.5rem] border border-slate-100 shadow-2xl overflow-hidden group">
              {/* İlk Görsel */}
              <div className="relative flex-1 aspect-[4/3] md:aspect-[1/1] overflow-hidden">
                <img
                  src="/img/20.png"
                  alt="Alan Güvenliği Analizi - Görünüm 1"
                  className="w-full h-full object-cover scale-[1.65] transition-transform duration-700 group-hover:scale-[1.7]"
                />
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              {/* İkinci Görsel */}
              <div className="relative flex-1 aspect-[4/3] md:aspect-[1/1] overflow-hidden">
                <img
                  src="/img/21.png"
                  alt="Alan Güvenliği Analizi - Görünüm 2"
                  className="w-full h-full object-cover scale-[1.65] transition-transform duration-700 group-hover:scale-[1.7]"
                />
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. GÖRÜNMEYEN RİSKLER (ZIG ZAG) */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-6">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-4">
              <Map className="w-8 h-8" />
            </div>
            <h2 className="text-4xl font-bold text-slate-900">Görünmeyen Riskler için Akıllı Güvenlik</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Endüstriyel sahalarda forklift ve yaya etkileşiminin yoğun olduğu bölgelerde, riskli durumlar çoğu zaman fark edilmeden oluşur. Yapay zeka destekli kamera sistemi, belirlenen alanlarda forklift ve insan hareketlerini algılayarak olası çarpışma risklerini anlık olarak tespit eder.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Tehlike algılandığında sesli ve görsel uyarılar devreye girerek çalışanların ve operatörlerin zamanında bilgilendirilmesini sağlar. Aynı sistem, izinsiz bölge girişlerini de algılayarak tehlikeli alanlarda kontrolü destekler.
            </p>
            <div className="flex gap-4 pt-4">
              <div className="flex items-center gap-2 text-sm font-bold text-slate-700 bg-slate-100 px-4 py-2 rounded-lg">
                <ScanLine className="w-4 h-4" /> Anlık Tespit
              </div>
              <div className="flex items-center gap-2 text-sm font-bold text-slate-700 bg-slate-100 px-4 py-2 rounded-lg">
                <Eye className="w-4 h-4" /> Sesli / Görsel Uyarı
              </div>
            </div>
          </div>
          <div className="aspect-square bg-white rounded-3xl border border-slate-200 shadow-lg overflow-hidden">
            <img
              src="/img/19.png"
              alt="Görünmeyen Riskler için Anlık Tespit"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* 3. İSG VE SAĞLIK (ZIG ZAG TERS) - YORUMA ALINDI 
      <section className="py-24 bg-slate-50"> ... </section>
      */}

      {/* 4. ÖZELLİK KARTLARI - YORUMA ALINDI 
      <section className="py-24 max-w-7xl mx-auto px-4"> ... </section>
      */}

    </div>
  )
}