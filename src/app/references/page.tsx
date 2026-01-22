'use client'

import { Building2, TrendingUp, Award, Users, CheckCircle, Star } from 'lucide-react'

export default function ReferencesPage() {
  const references = [
    { 
      name: "XYZ Fabrika", 
      desc: "Üretim hattı otomasyonu ve AI kamera entegrasyonu.",
      icon: <Building2 className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      industry: "Üretim"
    },
    { 
      name: "ABC Lojistik", 
      desc: "Depo güvenliği ve personel takibi çözümleri.",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-emerald-500 to-teal-500",
      industry: "Lojistik"
    },
    { 
      name: "DEF Enerji", 
      desc: "Endüstriyel IoT ile veri analitiği projeleri.",
      icon: <Award className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      industry: "Enerji"
    }
  ]

  const stats = [
    { number: "150+", label: "Mutlu Müşteri", icon: <Users className="w-6 h-6" /> },
    { number: "500+", label: "Tamamlanan Proje", icon: <CheckCircle className="w-6 h-6" /> },
    { number: "%98", label: "Müşteri Memnuniyeti", icon: <Star className="w-6 h-6" /> }
  ]

  const achievements = [
    "Türkiye'nin önde gelen sanayi kuruluşlarına hizmet",
    "7/24 kesintisiz teknik destek ve danışmanlık",
    "Sektöründe kanıtlanmış AI ve IoT teknolojileri",
    "Hızlı kurulum ve minimum iş kesintisi"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <section className="max-w-7xl mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Referanslarımız
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
            AI Kamera Sistemleri olarak güven veren iş ortaklarımız ve başarılı projelerimiz ile sektörde öncü olduk. 
            İşte bazı referanslarımız:
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, idx) => (
            <div 
              key={idx}
              className="group bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-1"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 text-white mb-4 mx-auto group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2 text-center">
                {stat.number}
              </div>
              <div className="text-gray-600 text-center font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* References Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {references.map((ref, idx) => (
            <div
              key={idx}
              className="group relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-2 overflow-hidden"
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative text-center">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${ref.color} text-white mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                  {ref.icon}
                </div>

                {/* Industry Badge */}
                <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full mb-4">
                  {ref.industry}
                </div>

                {/* Company Name */}
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  {ref.name}
                </h2>

                {/* Description */}
                <p className="text-gray-700 leading-relaxed">
                  {ref.desc}
                </p>
              </div>

              {/* Corner Accent */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${ref.color} opacity-10 rounded-bl-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform`}></div>
            </div>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-xl border border-gray-100 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Neden Bizi Tercih Ediyorlar?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, idx) => (
              <div key={idx} className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <p className="text-gray-700 leading-relaxed pt-1">
                  {achievement}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">
              Siz de Referanslarımıza Katılın
            </h3>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8">
              İşletmeniz için özel güvenlik çözümleri geliştirmek üzere sizinle çalışmaktan mutluluk duyarız
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all hover:scale-105 shadow-xl">
              İletişime Geçin
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}