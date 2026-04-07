'use client'

import { Truck, Lock, Clock, FileText, CheckSquare, ShieldCheck } from 'lucide-react'

export default function DockSafetyPage() {
  return (
    <div className="bg-white text-slate-900 font-sans">

      {/* 1. HERO BÖLÜMÜ */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-700 font-bold text-sm tracking-wide shadow-sm">
              <Truck className="w-4 h-4 text-blue-600" /> Akıllı Lojistik Yönetimi
            </div>

            <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight text-slate-900">
              Yükleme Rampalarında <br />
              <span className="text-slate-500">Kontrollü Güvenlik</span>
            </h1>

            <p className="text-xl text-slate-600 max-w-lg leading-relaxed font-light">
              Yükleme rampalarında personel ve araç hareketlerini algılayarak, riskli durumlarda anlık uyarı ve kontrollü kapı yönetimi sağlar.
            </p>

            {/* <div className="flex gap-4">
              <button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-xl flex items-center gap-2">
                Sistem Nasıl Çalışır?
              </button>  
            </div> */}
          </div>
          <div className="relative">
            <div className="aspect-[4/3] bg-white rounded-[3rem] overflow-hidden border border-slate-200 shadow-2xl relative">
              <img
                src="/img/17.png"
                alt="Yükleme Rampası Lojistik Yönetimi"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. SÜREÇ YÖNETİMİ (DÜŞEY YERLEŞİM) */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="flex flex-col gap-16">
          
          {/* 1. Başlık Alanı */}
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm shadow-blue-100">
              <Lock className="w-8 h-8" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
              Yükleme Rampalarında <br />
              <span className="text-blue-600">Akıllı ve Kontrollü Güvenlik</span>
            </h2>
          </div>

          {/* 2. Görsel Alanı */}
          <div className="w-full aspect-[21/10] md:aspect-[21/7] bg-white rounded-[2rem] md:rounded-[3rem] border border-slate-200 shadow-2xl overflow-hidden relative group">
            <img
              src="/img/26.png"
              alt="Yükleme Rampası AI Analiz Süreci"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent pointer-events-none" />
          </div>

          {/* 3. Alt Metin Alanı */}
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10 text-left">
              <div className="space-y-4">
                <p className="text-xl text-slate-700 leading-relaxed font-light border-l-4 border-blue-500 pl-6">
                  Yükleme rampalarında tır yanaşma sırasında, arka bölgede bulunan personel ciddi güvenlik riski oluşturur.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed font-light pl-7">
                  Yapay zeka destekli kamera sistemi, tırın arkasındaki insan varlığını anlık olarak algılayarak hem sürücüyü hem de personeli sesli ve görsel uyarılarla bilgilendirir.
                </p>
              </div>
              <div className="space-y-4 pt-1">
                <p className="text-lg text-slate-600 leading-relaxed font-light">
                  Personel güvenli alana geçmeden sistem uyarı üretmeye devam eder. Tır rampaya doğru şekilde yanaştığında ise kapının açılmasına izin verilerek yükleme sürecinin kontrollü ve güvenli şekilde başlatılması sağlanır.
                </p>
                <div className="flex gap-4 pt-4">
                  <div className="px-4 py-2 bg-slate-50 border border-slate-100 rounded-lg text-sm font-bold text-slate-600">
                    # AI Tespit
                  </div>
                  <div className="px-4 py-2 bg-slate-50 border border-slate-100 rounded-lg text-sm font-bold text-slate-600">
                    # Güvenli Kapı
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* 3. PLAKA VE VERİMLİLİK (ZIG ZAG TERS) - YORUMA ALINDI
      <section className="py-24 bg-white border-t border-slate-100"> ... </section>
      */}

      {/* 4. ÖZET ÖZELLİKLER - YORUMA ALINDI
      <section className="py-20 bg-slate-900 text-white rounded-[3rem] mx-4 mb-12"> ... </section>
      */}

    </div>
  )
}