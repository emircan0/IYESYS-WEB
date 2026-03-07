'use client'

import Link from 'next/link'
import { ShieldAlert, Zap, Cpu, ArrowRight } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-gray-900">

      {/* Video Arka Plan */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover opacity-30" // Opaklık biraz kısıldı, yazı okunurluğu arttı
      >
        <source src="/iyesys/video.mp4" type="video/mp4" />
        Tarayıcınız video etiketini desteklemiyor.
      </video>

      {/* Gradient Overlay - Daha sinematik bir geçiş */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-blue-900/40"></div>

      {/* İçerik */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col justify-center pt-20">

        {/* Ana İçerik Bloğu */}
        <div className="text-center text-white space-y-8 max-w-5xl mx-auto">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 backdrop-blur-md animate-fade-in-up">
            <ShieldAlert className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-semibold text-blue-200 tracking-wide uppercase">Sıfır Kaza Vizyonu</span>
          </div>

          {/* Ana Başlık */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
            Yapay Zeka ile <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              İş Güvenliğini Yeniden Tanımlayın
            </span>
          </h1>

          {/* Alt Başlık */}
          <p className="mt-6 text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            AI destekli kamera sistemlerimizle işinizi daha güvenli ve verimli hale getirin.
            Gerçek zamanlı analiz ve otomatik uyarılarla iş güvenliğini sağlayın,
            <span className="text-white font-medium"> iş kazalarını oluşmadan önleyin.</span>
          </p>

          {/* CTA Butonları */}
          <div className="mt-10 flex flex-col sm:flex-row gap-5 justify-center items-center">
            <Link
              href="/services"
              className="group min-w-[200px] px-8 py-4 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-900/20 hover:scale-105 flex items-center justify-center gap-2"
            >
              Sistemleri İncele
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="min-w-[200px] px-8 py-4 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm hover:scale-105"
            >
              Demo Talep Et
            </Link>
          </div>
        </div>



      </div>

      {/* Alt Gradient Geçişi (Yumuşak bitiş) */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent pointer-events-none"></div>
    </section>
  )
}