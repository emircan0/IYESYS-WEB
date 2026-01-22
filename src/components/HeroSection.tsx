'use client'

import Link from 'next/link'
import { Shield, Zap, Eye } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-gray-900">
      
      {/* Video Arka Plan */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover opacity-40"
      >
        <source src="/iyesys/video.mp4" type="video/mp4" />
        Tarayıcınız video etiketini desteklemiyor.
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 via-gray-900/80 to-purple-900/50"></div>

      {/* İçerik */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col justify-center">
        
        {/* Ana İçerik */}
        <div className="text-center text-white space-y-8">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 backdrop-blur-sm">
            <Zap className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-300">Yeni Nesil Güvenlik Teknolojisi</span>
          </div>

          {/* Ana Başlık */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
            Yapay Zeka ile <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Güvenliği Yeniden Tanımlayın
            </span>
          </h1>

          {/* Alt Başlık */}
          <p className="mt-6 text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            AI destekli kamera sistemlerimizle işinizi daha güvenli ve verimli hale getirin. 
            Gerçek zamanlı analiz ve otomatik uyarılarla zamandan ve maliyetten tasarruf edin.
          </p>
          
          {/* CTA Butonları */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/services" 
              className="group px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-blue-500/50 hover:scale-105 flex items-center gap-2"
            >
              Hizmetlerimizi İnceleyin
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link 
              href="/contact" 
              className="px-8 py-4 rounded-xl border-2 border-white/30 text-white font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 backdrop-blur-sm hover:scale-105"
            >
              Bizimle İletişime Geçin
            </Link>
          </div>

          {/* Özellik İkonları */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="p-3 rounded-full bg-blue-500/20">
                <Shield className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="font-semibold text-lg">7/24 Koruma</h3>
              <p className="text-sm text-gray-400">Kesintisiz güvenlik izleme</p>
            </div>

            <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="p-3 rounded-full bg-purple-500/20">
                <Eye className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="font-semibold text-lg">Akıllı Analiz</h3>
              <p className="text-sm text-gray-400">AI tabanlı tehdit tespiti</p>
            </div>

            <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="p-3 rounded-full bg-cyan-500/20">
                <Zap className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="font-semibold text-lg">Hızlı Tepki</h3>
              <p className="text-sm text-gray-400">Anında uyarı sistemi</p>
            </div>
          </div>
        </div>

      </div>

      {/* Alt Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent"></div>
    </section>
  )
}