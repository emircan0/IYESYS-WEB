'use client'

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { Target, Globe, Users } from 'lucide-react'
import { motion } from 'framer-motion'

export default function About() {
  const infos = [
    {
      title: "Misyonumuz",
      desc: "Yenilikçi teknolojilerle üretimi dönüştürmek ve müşterilerimizin operasyonlarını optimize etmek.",
      icon: <Target className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Vizyonumuz",
      desc: "Endüstriyel yapay zeka ve IoT alanında lider bir global teknoloji şirketi olmak.",
      icon: <Globe className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Değerlerimiz",
      desc: "Yenilikçilik, güvenilirlik, sürdürülebilirlik ve müşteri memnuniyeti odaklı çalışmak.",
      icon: <Users className="w-6 h-6 text-blue-600" />
    }
  ]

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
      <Navbar />

      <main className="flex-grow">
        <section className="bg-gray-50 dark:bg-gray-800 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Hakkımızda
            </h1>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-12">
              Firmamız, yapay zeka ve endüstriyel IoT çözümleri sunan lider teknoloji şirketlerinden biridir.  
              Amacımız, üretim süreçlerini optimize etmek ve veri odaklı çözümlerle müşterilerimizin verimliliğini artırmaktır.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {infos.map((info, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5, scale: 1.03 }}
                  className="p-6 border rounded-2xl bg-white dark:bg-gray-700 hover:shadow-lg transition cursor-pointer text-center"
                >
                  <div className="flex justify-center mb-4">
                    {info.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{info.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300">{info.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
