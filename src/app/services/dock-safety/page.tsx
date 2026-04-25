'use client'

import { Truck, Lock, Clock, FileText, CheckSquare, ShieldCheck } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function DockSafetyPage() {
  const [activeImage, setActiveImage] = useState(0)
  const processImages = ['/img/30.png', '/img/31.png']

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % processImages.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="bg-white text-slate-900 font-sans">

      {/* 1. HERO BÖLÜMÜ */}
      <section className="relative pt-24 pb-16 lg:pt-40 lg:pb-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-700 font-bold text-sm tracking-wide shadow-sm">
              <Truck className="w-4 h-4 text-blue-600" /> Akıllı Lojistik Yönetimi
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-7xl font-extrabold leading-tight text-slate-900">
              Yükleme Rampalarında <br />
              <span className="text-slate-500">Kontrollü Güvenlik</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 max-w-lg leading-relaxed font-light">
              Yükleme rampalarında personel ve araç hareketlerini algılayarak, riskli durumlarda anlık uyarı ve kontrollü kapı yönetimi sağlar.
            </p>
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

      {/* 2. SÜREÇ YÖNETİMİ (DÜŞEY YERLEŞİM - GENİŞ GÖRSEL) */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="flex flex-col gap-16">
          
          {/* Üst Kısım: Metin İçeriği */}
          <div className="max-w-4xl mx-auto text-center space-y-10">
            <div className="space-y-6">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto shadow-sm shadow-blue-100">
                <Lock className="w-8 h-8" />
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
                Yükleme Rampalarında <br />
                <span className="text-blue-600">Akıllı ve Kontrollü Güvenlik</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-10 text-left pt-4">
              <div className="space-y-4">
                <p className="text-xl text-slate-700 leading-relaxed font-medium border-l-4 border-blue-500 pl-6">
                  Yapay zeka destekli kamera sistemi, tır yanaşma sırasında arka bölgede bulunan personeli anlık olarak algılar.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed font-light pl-7">
                   Sürücüyü ve personeli sesli/görsel uyarılarla bilgilendirir. Tır rampaya doğru şekilde yanaştığında ise kapının açılmasına izin verilerek yükleme sürecinin güvenli şekilde başlatılmasını sağlar.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {[
                  { title: "AI Personel Tespiti", desc: "Tır arkasındaki yaya varlığını milisaniyeler içinde algılama.", icon: <ShieldCheck className="w-5 h-5" /> },
                  { title: "Akıllı Kapı Kilidi", desc: "Güvenlik onaylanmadan rampa kapısının açılmasını engelleme.", icon: <Lock className="w-5 h-5" /> }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <div className="text-blue-600 bg-white p-2 rounded-lg shadow-sm">{item.icon}</div>
                    <div>
                      <h4 className="font-bold text-sm text-slate-900">{item.title}</h4>
                      <p className="text-xs text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Alt Kısım: Görsel Alanı - GEÇİŞLİ VE GENİŞ (30 & 31) */}
          <div className="relative max-w-6xl mx-auto w-full">
            <div className="w-full bg-white rounded-[2rem] md:rounded-[3rem] border border-slate-200 shadow-2xl overflow-hidden relative aspect-[16/9] sm:aspect-[16/8]">
              {processImages.map((src, idx) => (
                <img
                  key={src}
                  src={src}
                  alt={`Yükleme Rampası Süreci ${idx + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                    activeImage === idx ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
              
              {/* Overlay Indicators */}
              <div className="absolute bottom-8 right-8 flex gap-2 z-20">
                {processImages.map((_, idx) => (
                  <div 
                    key={idx}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      activeImage === idx ? 'bg-blue-600 w-8' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent pointer-events-none" />
            </div>
          </div>

        </div>
      </section>

    </div>
  )
}