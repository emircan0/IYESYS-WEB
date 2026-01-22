'use client'

import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="bg-white dark:bg-gray-900 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center gap-12">
        
        {/* Sol Kısım - Metin */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
            Yapay Zeka ile <span className="text-blue-600 dark:text-blue-400">Güvenliği</span> Yeniden Tanımlayın
          </h1>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto lg:mx-0">
            AI destekli kamera sistemlerimizle işinizi daha güvenli ve verimli hale getirin. 
            Gerçek zamanlı analiz ve otomatik uyarılarla zamandan ve maliyetten tasarruf edin.
          </p>
          
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link 
              href="/services" 
              className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
            >
              Hizmetlerimizi İnceleyin
            </Link>
            <Link 
              href="/contact" 
              className="px-6 py-3 rounded-xl border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              Bizimle İletişime Geçin
            </Link>
          </div>
        </div>

        {/* Sağ Kısım - Ekranın Yarısını Kaplayan Video */}
        <div className="flex-1 flex justify-center lg:basis-1/6 w-full">
          <video 
            autoPlay 
            loop 
            muted 
            className="w-full h-auto rounded-2xl shadow-lg"
          >
            <source src="/iyesys/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

      </div>
    </section>
  )
}
