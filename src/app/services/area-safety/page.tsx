'use client'

import { Eye, Map, AlertTriangle, PlayCircle, HeartPulse, ScanLine, Zap, Cpu } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function AreaSafetyPage() {
  const [activeImage, setActiveImage] = useState(0)
  const images = ['/img/28.png', '/img/29.png']

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % images.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="bg-white text-slate-900 font-sans">

      {/* 1. HERO BÖLÜMÜ - PROFESYONEL DÜZEN */}
      <section className="relative pt-24 pb-16 lg:pt-40 lg:pb-32 overflow-hidden bg-emerald-50/30">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 font-bold text-sm tracking-wide">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-600"></span>
              </span>
              Akıllı Bölge Koruma
            </div>

            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-black leading-[1.1] tracking-tight text-slate-900">
                  Entegre Saha Güvenlik <br />
                  <span className="text-emerald-600">Yönetim Sistemleri</span>
                </h1>
                <p className="text-lg text-slate-600 leading-relaxed font-medium max-w-xl">
                  IYESYS Saha Güvenliği, tesisinizdeki mevcut endüstriyel altyapıyı akıllı bir koruma katmanına dönüştürür. AI kameralarımız, sahadaki insan ve ekipman hareketini analiz ederek uyarı ve yavaşlatma sistemini çalıştırır. Merkezi yönetim ünitemiz; tespit edilen riskleri anlık işleyerek <span className="text-emerald-600 font-bold">trafik lambalarını, hologram ünitelerini, sesli anonsları</span> ve <span className="text-emerald-600 font-bold">UWB tabanlı hız kesme</span> mekanizmalarını gerçek zamanlı olarak tetikler.
                </p>
              </div>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl">
                {[
                  "AI Tabanlı Risk Analizi",
                  "Otonom Hız Kontrolü",
                  "Aktif İkaz Yönetimi"
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-slate-700 font-bold bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
                    <div className="w-6 h-6 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <ScanLine className="w-4 h-4" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Hero Görseli - Geçişli ve Doğal Boyut */}
          <div className="relative">
            <div className="bg-white rounded-[2.5rem] overflow-hidden border border-slate-200 shadow-2xl relative min-h-[350px] sm:min-h-[500px]">
              {images.map((src, idx) => (
                <img
                  key={src}
                  src={src}
                  alt={`Saha Güvenliği ${idx + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                    activeImage === idx ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}

              {/* Overlay Indicators */}
              <div className="absolute bottom-6 right-6 flex gap-2 z-20">
                {images.map((_, idx) => (
                  <div 
                    key={idx}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      activeImage === idx ? 'bg-emerald-600 w-6' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. İZİNSİZ BÖLGE GİRİŞİ VE DİJİTAL ÇİT */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center">
              <AlertTriangle className="w-8 h-8 animate-pulse" />
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">İzinsiz Bölge Girişi ve <br />Anlık Koruma Kalkanı</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Kritik çalışma alanları, robotik hücreler veya tehlikeli madde bölgeleri için yapay zeka tabanlı <span className="font-bold text-slate-900">dijital çitler</span> oluşturun. Yetkisiz bir yaya veya araç girişi algılandığında sistem saniyeler içinde alarm vererek kazaları henüz gerçekleşmeden engeller.
              </p>
            </div>

            <div className="grid gap-4">
              {[
                { title: "Sanal Güvenlik Çemberi", desc: "Çizilen sınırların ihlalinde anlık tespit.", icon: <ScanLine className="w-5 h-5" /> },
                { title: "Işıklı ve Sesli Blokaj", desc: "İhlal anında otomatik siren ve flaşör aktivasyonu.", icon: <Eye className="w-5 h-5" /> }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-slate-100 hover:border-emerald-200 transition-all">
                  <div className="text-emerald-600 bg-emerald-50 p-2 rounded-lg">{item.icon}</div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-900">{item.title}</h4>
                    <p className="text-xs text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative group">
             <div className="absolute -inset-4 bg-emerald-600/5 rounded-[3rem] blur-2xl transition-colors"></div>
             <div className="relative aspect-square bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
                <img
                  src="/img/19.png"
                  alt="Görünmeyen Riskler için Anlık Tespit"
                  className="w-full h-full object-cover"
                />
             </div>
          </div>
        </div>
      </section>

    </div>
  )
}