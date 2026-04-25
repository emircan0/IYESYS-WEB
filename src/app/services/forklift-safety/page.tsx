'use client'

import { Radio, Zap, ShieldAlert, CheckCircle2, ArrowRight, Activity } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function MobileEquipmentSafetyPage() {
  const [activeImage, setActiveImage] = useState(0)
  const images = ['/img/18.png', '/img/27.png']

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % images.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="bg-white text-slate-900 font-sans">

      {/* 1. HERO BÖLÜMÜ */}
      <section className="relative pt-24 pb-16 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 w-full grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 font-bold text-sm tracking-wide">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-600"></span>
              </span>
              AI Koruma
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight text-slate-900">
              Hareketli Ekipman Çevresinde <br />
              <span className="text-blue-600">Anlık Güvenlik</span>
            </h1>

            <div className="space-y-4 max-w-lg">
              <p className="text-lg sm:text-xl text-slate-800 leading-relaxed font-medium">
                AI kamera ve UWB teknolojisi ile yaya ve diğer araç hareketlerini anlık izleyerek, riskli durumlarda operatörü uyarır ve ekipmanı otomatik yavaşlatır.
              </p>
            </div>
          </div>

          {/* Hero Görseli - Geçişli Yapı */}
          <div className="relative">
            <div className="aspect-[4/3] bg-slate-50 rounded-[3rem] overflow-hidden border border-slate-100 shadow-2xl relative">
              {images.map((src, idx) => (
                <img
                  key={src}
                  src={src}
                  alt={`Hareketli Ekipman Güvenliği ${idx + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                    activeImage === idx ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
              
              {/* Overlay Indicators */}
              <div className="absolute bottom-6 right-6 flex gap-2">
                {images.map((_, idx) => (
                  <div 
                    key={idx}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      activeImage === idx ? 'bg-blue-600 w-6' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
            
            {/* Yüzen İstatistik Kartı */}
            <div className="absolute -bottom-6 -left-4 sm:-bottom-8 sm:-left-8 bg-white p-4 sm:p-6 rounded-2xl shadow-xl border border-slate-100 max-w-[200px] sm:max-w-xs z-10">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Activity className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <div className="text-[10px] sm:text-xs text-slate-500 font-bold uppercase tracking-wider text-nowrap">Tepki Süresi</div>
                  <div className="text-xl sm:text-2xl font-black text-slate-900">Anında</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. AI & UWB İLE ÇİFT KATMANLI MÜDAHALE - PROFESYONEL DÜZEN */}
      <section className="py-24 lg:py-32 relative overflow-hidden bg-white">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(37,99,235,0.03)_0%,transparent_50%)]"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            {/* Sol Metin Alanı */}
            <div className="lg:col-span-6 space-y-10">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-50 text-blue-700 font-bold text-xs uppercase tracking-widest">
                  Aktif Güvenlik Müdahalesi
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-slate-900 leading-tight">
                  Sadece Uyarmaz, <br />
                  <span className="text-blue-600">Müdahale Eder</span>
                </h2>
              </div>

              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-light">
                IYESYS sistemi, <span className="font-bold text-slate-900">AI kamera</span> ile yayaları ve <span className="font-bold text-slate-900">UWB teknolojisi</span> ile diğer hareketli araçları anlık tespit eder. Sistem, riskli yakınlaşmalarda ekipmanı <span className="text-blue-600 font-bold italic underline decoration-blue-200">otomatik olarak güvenli hıza düşürerek</span> olası kazaların önüne geçer.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 pt-4">
                {[
                  { title: "AI & UWB Hibrit", desc: "Canlılar ve tüm ekipmanlar için tam kapsamlı koruma.", icon: <ShieldAlert className="w-5 h-5" /> },
                  { title: "Hız Müdahalesi", desc: "Operatörden bağımsız aktif yavaşlatma sistemi.", icon: <Zap className="w-5 h-5" /> }
                ].map((item, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl hover:border-blue-100 transition-all duration-300 group">
                    <div className="w-10 h-10 bg-white shadow-sm rounded-xl flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      {item.icon}
                    </div>
                    <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-sm text-slate-500 leading-snug">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Sağ Görsel Alanı */}
            <div className="lg:col-span-6 relative">
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.15)] border-8 border-white">
                <img
                  src="/img/22.png"
                  alt="AI & UWB Otomatik Müdahale"
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              {/* Arka Plan Dekoratif Elemanlar */}
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-blue-400/10 rounded-full blur-3xl"></div>
              
            </div>

          </div>
        </div>
      </section>

      {/* 4. AI KAMERA DESTEĞİ (Yorum satırında bırakıldı)
      <section className="py-24 max-w-7xl mx-auto px-4"> ... </section> */}

    </div>
  )
}