'use client'

import { useState } from 'react'
import { Cpu, BarChart2, Cog, X, Zap, CheckCircle } from 'lucide-react'

const services = [
  {
    title: "AI Kamera Sistemleri",
    desc: "Yapay zekalı kameralar ile forklift kazalarını ve ihlalleri otomatik tespit edin.",
    icon: Cpu,
    colorClass: "text-blue-600",
    gradient: "from-blue-500 to-cyan-500",
    detail: "Yapay zeka kamera sistemlerimiz, fabrikanızdaki hareketli ekipmanları, yaya hareketlerini ve kör noktaları anlık izleyerek iş kazası önleme sistemleri kurar. Forklift çevresine yaklaşma uyarılarıyla tehlikeyi proaktif olarak engeller.",
    features: [
      "Forklift ve yaya algılama",
      "Kör nokta uyarı sistemleri",
      "7/24 otomatik izleme",
      "Gerçek zamanlı hız takibi"
    ]
  },
  {
    title: "KKD Kontrolü & Veri Analizi",
    desc: "Yapay zeka destekli donanım kontrolü ile İSG kurallarına tam uyum sağlayın.",
    icon: BarChart2,
    colorClass: "text-purple-600",
    gradient: "from-purple-500 to-pink-500",
    detail: "Yapay zeka destekli kişisel koruyucu donanım kontrolü ile baret, yelek ve güvenlik ekipmanı kullanımının takibi yapılabilir. IoT cihazlarından gelen verilerle kaza risklerini analiz edin.",
    features: [
      "Baret ve yelek algılama",
      "IoT iş kazaları analizi",
      "Kural ihlali raporlama",
      "Gelişmiş risk gösterge paneli"
    ]
  },
  {
    title: "Forklift Hız Yavaşlatma",
    desc: "Akıllı yavaşlatma mekanizmalarıyla tesis içi araç trafik güvenliğini artırın.",
    icon: Cog,
    colorClass: "text-emerald-600",
    gradient: "from-emerald-500 to-teal-500",
    detail: "Forklift hız yavaşlatma sistemi ve otomatik durdurucu mekanizmalarımız sayesinde, yaya ve araç çarpışmalarını sıfıra indirmeyi hedefliyoruz. Endüstriyel otomasyon ile güvenlik standartlarınızı en üst seviyeye taşıyın.",
    features: [
      "Otomatik hız kesme",
      "Çarpışma önleyici sensörler",
      "Bölgesel hız limiti belirleme",
      "Mekanik durdurma entegrasyonu"
    ]
  }
]

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState<number | null>(null)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-[#0b1324] via-[#101a2d] to-[#0b1324] relative overflow-hidden">

      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Hizmetlerimiz
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Sahanıza ve risklerinize uygun güvenlik çözümleri sunuyoruz.
          </p>
        </div>

        {/* Service Cards */}
        {/* Özellik Kartları (2 Kolonlu Yapı) */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto w-full">

          {/* Kart 1: AI Sistem */}
          <div className="group relative p-6 sm:p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500 overflow-hidden text-left hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

            <div className="relative z-10 flex items-start gap-5">
              <div className="p-4 rounded-2xl bg-blue-500/20 text-blue-400 group-hover:scale-110 transition-transform duration-300">
                <Cpu className="w-8 h-8" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                  İş Güvenliğinde Yapay Zeka Uygulamaları
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  Görüntü işleme teknolojisi ile fabrika içi yaya ve araç hareketlerini anlık analiz eder. Forklift kazalarını ve riskli durumları insan gözünden daha hızlı tespit eden kaza önleyici sistem sunar.
                </p>
              </div>
            </div>
          </div>

          {/* Kart 2: Uyarı Sistemleri */}
          <div className="group relative p-6 sm:p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500 overflow-hidden text-left hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

            <div className="relative z-10 flex items-start gap-5">
              <div className="p-4 rounded-2xl bg-purple-500/20 text-purple-400 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-8 h-8" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                  Aktif Çarpışma ve Uyarı Sistemleri
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  Tehlike anında sesli ve görsel alarmları otomatik tetikler. Forklift operatörü ve yayaları milisaniyeler içinde uyararak, fabrika iş kazası oranlarını sıfıra indirmeyi hedefler.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Enhanced Modal */}
      {selectedService !== null && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedService(null)}
          ></div>

          {/* Modal Content */}
          <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-10 max-w-2xl w-full shadow-2xl animate-scale-in overflow-hidden">

            {/* Gradient Header Background */}
            <div className={`absolute top-0 left-0 right-0 h-32 bg-gradient-to-br ${services[selectedService].gradient} opacity-10`}></div>

            {/* Close Button */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors z-10"
            >
              <X className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </button>

            {/* Icon */}
            <div className="relative z-10 mb-6">
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${services[selectedService].gradient}`}>
                {(() => {
                  const Icon = services[selectedService].icon
                  return <Icon className="w-12 h-12 text-white" />
                })()}
              </div>
            </div>

            {/* Title */}
            <h3 className="relative z-10 text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {services[selectedService].title}
            </h3>

            {/* Description */}
            <p className="relative z-10 text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              {services[selectedService].detail}
            </p>

            {/* Features List */}
            <div className="relative z-10 space-y-3">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Özellikler:
              </h4>
              {services[selectedService].features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle className={`w-6 h-6 ${services[selectedService].colorClass} flex-shrink-0 mt-0.5`} />
                  <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button
              className={`relative z-10 mt-8 w-full py-4 rounded-xl bg-gradient-to-r ${services[selectedService].gradient} text-white font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300`}
            >
              Teklif Al
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
      `}</style>
    </section>
  )
}
