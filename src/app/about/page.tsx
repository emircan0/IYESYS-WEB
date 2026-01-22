'use client'

import { Target, Globe, Users, TrendingUp, Award, Lightbulb } from 'lucide-react'

export default function About() {
  const infos = [
    {
      title: "Misyonumuz",
      desc: "Yenilikçi teknolojilerle üretimi dönüştürmek ve müşterilerimizin operasyonlarını optimize etmek.",
      icon: <Target className="w-8 h-8" />
    },
    {
      title: "Vizyonumuz",
      desc: "Endüstriyel yapay zeka ve IoT alanında lider bir global teknoloji şirketi olmak.",
      icon: <Globe className="w-8 h-8" />
    },
    {
      title: "Değerlerimiz",
      desc: "Yenilikçilik, güvenilirlik, sürdürülebilirlik ve müşteri memnuniyeti odaklı çalışmak.",
      icon: <Users className="w-8 h-8" />
    }
  ]

  const stats = [
    { number: "", label: "Başarılı Proje", icon: <Award className="w-5 h-5" /> },
    { number: "", label: "Mutlu Müşteri", icon: <Users className="w-5 h-5" /> },
    { number: "", label: "Müşteri Memnuniyeti", icon: <TrendingUp className="w-5 h-5" /> },
    { number: "", label: "Yıllık Deneyim", icon: <Lightbulb className="w-5 h-5" /> }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              Hakkımızda
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              Firmamız, yapay zeka ve endüstriyel IoT çözümleri sunan lider teknoloji şirketlerinden biridir.  
              Amacımız, üretim süreçlerini optimize etmek ve veri odaklı çözümlerle müşterilerimizin verimliliğini artırmaktır.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, idx) => (
              <div 
                key={idx}
                className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-1"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 text-white mb-4 mx-auto group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 text-center">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm md:text-base text-center font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Core Values */}
          <div className="grid md:grid-cols-3 gap-8">
            {infos.map((info, idx) => (
              <div
                key={idx}
                className="group relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="relative">
                  <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 text-white mb-6 group-hover:scale-110 transition-transform">
                    {info.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {info.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {info.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Geleceği Birlikte İnşa Edelim
          </h2>
          <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Yapay zeka ve IoT teknolojileriyle işletmenizi dijital dönüşüme hazırlayın
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all hover:scale-105 shadow-xl">
            Bize Ulaşın
          </button>
        </div>
      </section>
    </div>
  )
}