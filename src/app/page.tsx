'use client'

import HeroSection from '../components/HeroSection'
import { Cpu, BarChart2, Smartphone } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Home() {
  const services = [
    {
      title: "AI Kamera Sistemleri",
      desc: "Üretim hattınızı izleyen akıllı kameralar ile kalite kontrolü otomatikleştirin.",
      icon: <Cpu className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Veri Analizi & Optimizasyon",
      desc: "IoT cihazlarından gelen verileri analiz ederek operasyonel verimliliği artırın.",
      icon: <BarChart2 className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Endüstriyel Otomasyon",
      desc: "Üretim süreçlerinizi otomatikleştirerek zaman ve maliyet tasarrufu sağlayın.",
      icon: <Smartphone className="w-6 h-6 text-blue-600" />
    }
  ]

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
      <HeroSection />

      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Hizmetlerimiz
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5, scale: 1.03 }}
                className="p-6 border rounded-2xl bg-gray-50 dark:bg-gray-800 hover:shadow-lg transition cursor-pointer"
              >
                <div className="flex items-center mb-4">
                  {service.icon}
                  <h3 className="ml-3 text-xl font-semibold text-gray-900 dark:text-white">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-700 dark:text-gray-400">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
