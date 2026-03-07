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
                src="/img/7.png"
                alt="Yükleme Rampası Lojistik Yönetimi"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. SÜREÇ YÖNETİMİ (ZIG ZAG) */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 aspect-video bg-white rounded-3xl border border-slate-200 shadow-lg overflow-hidden">
            <img
              src="/img/8.png"
              alt="Rampa Kapısı ve Kontrollü Güvenlik Sistemi"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-4">
              <Lock className="w-8 h-8" />
            </div>
            <h2 className="text-4xl font-bold text-slate-900">Yükleme Rampalarında Akıllı ve Kontrollü Güvenlik</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Yükleme rampalarında tır yanaşma sırasında, arka bölgede bulunan personel ciddi güvenlik riski oluşturur. Yapay zeka destekli kamera sistemi, tırın arkasındaki insan varlığını anlık olarak algılayarak hem sürücüyü hem de personeli sesli ve görsel uyarılarla bilgilendirir.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Personel güvenli alana geçmeden sistem uyarı üretmeye devam eder. Tır rampaya doğru şekilde yanaştığında ise kapının açılmasına izin verilerek yükleme sürecinin kontrollü ve güvenli şekilde başlatılması sağlanır.
            </p>
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