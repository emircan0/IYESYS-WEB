'use client'

import { useState } from 'react'
import { Cpu, BarChart2, Cog, X, ArrowRight, CheckCircle } from 'lucide-react'

const services = [
  {
    title: "AI Kamera Sistemleri",
    desc: "Üretim hattınızı izleyen akıllı kameralar ile kalite kontrolünü otomatikleştirin.",
    icon: Cpu,
    color: "blue",
    gradient: "from-blue-500 to-cyan-500",
    detail: "AI Kamera Sistemleri, üretim hattınızı izleyip kalite kontrolünü otomatikleştirir. Gerçek zamanlı analizler sayesinde hataları önler ve verimliliği artırır.",
    features: [
      "Gerçek zamanlı hata tespiti",
      "7/24 otomatik izleme",
      "Yüksek doğruluk oranı",
      "Kolay entegrasyon"
    ]
  },
  {
    title: "Veri Analizi & Optimizasyon",
    desc: "IoT cihazlarından gelen verileri analiz ederek operasyonel verimliliği artırın.",
    icon: BarChart2,
    color: "purple",
    gradient: "from-purple-500 to-pink-500",
    detail: "Veri Analizi & Optimizasyon hizmetimiz, IoT cihazlarından gelen verileri işleyerek operasyonel süreçlerinizi iyileştirir ve karar alma süreçlerinizi hızlandırır.",
    features: [
      "Detaylı performans raporları",
      "Tahmine dayalı analizler",
      "Özelleştirilebilir dashboardlar",
      "API entegrasyonu"
    ]
  },
  {
    title: "Endüstriyel Otomasyon",
    desc: "Üretim süreçlerinizi otomatikleştirerek zaman ve maliyet tasarrufu sağlayın.",
    icon: Cog,
    color: "emerald",
    gradient: "from-emerald-500 to-teal-500",
    detail: "Endüstriyel Otomasyon çözümlerimiz üretim süreçlerinizi otomatikleştirir, iş gücü maliyetlerini düşürür ve süreçlerinizi daha verimli hale getirir.",
    features: [
      "Tam süreç otomasyonu",
      "Akıllı kaynak yönetimi",
      "Uzaktan kontrol imkanı",
      "Enerji tasarrufu"
    ]
  }
]

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState<number | null>(null)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 relative overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800">
            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">Hizmetlerimiz</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Çözümlerimiz
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            İşletmenizin ihtiyaçlarına özel, yenilikçi teknoloji çözümleri sunuyoruz
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon
            const isHovered = hoveredCard === idx
            
            return (
              <div
                key={idx}
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => setSelectedService(idx)}
                className="group relative flex flex-col items-center text-center p-8 rounded-2xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 transition-all duration-300 hover:border-transparent hover:shadow-2xl cursor-pointer overflow-hidden"
                style={{
                  transform: isHovered ? 'translateY(-8px)' : 'translateY(0)'
                }}
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                {/* Icon */}
                <div className={`relative mb-6 p-4 rounded-2xl bg-gradient-to-br ${service.gradient} transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                  <Icon className="w-10 h-10 text-white" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 relative z-10">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 relative z-10 leading-relaxed">
                  {service.desc}
                </p>
                
                {/* CTA Button */}
                <button className="relative z-10 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white font-semibold group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:text-white transition-all duration-300">
                  Detayları Gör
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                {/* Corner Accent */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 rounded-bl-full transition-opacity duration-300`}></div>
              </div>
            )
          })}
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
                  <CheckCircle className={`w-6 h-6 text-${services[selectedService].color}-600 flex-shrink-0 mt-0.5`} />
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