'use client'

import { Cpu, Shield, BarChart2, Wifi } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ServicesPage() {
  const services = [
    {
      title: "Yapay Zeka Destekli Takip Sistemleri",
      desc: "Personel ve ekipman takibini gerçek zamanlı yapay zeka ile optimize edin.",
      icon: <Cpu className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Endüstriyel Güvenlik Çözümleri",
      desc: "Forklift ve iş alanı güvenliği için akıllı uyarı sistemleri geliştirin.",
      icon: <Shield className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Veri Analitiği & Raporlama",
      desc: "Üretim verilerini analiz ederek süreçlerinizi optimize edin ve karar destek sistemleri oluşturun.",
      icon: <BarChart2 className="w-6 h-6 text-blue-600" />
    },
    {
      title: "IoT Cihaz Entegrasyonu",
      desc: "Fabrika ve depolarda IoT cihazlarıyla veri toplama ve süreç otomasyonu sağlayın.",
      icon: <Wifi className="w-6 h-6 text-blue-600" />
    }
  ]

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-10 text-gray-900 dark:text-white text-center">
        Hizmetlerimiz
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
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
    </section>
  )
}
