'use client'

import { Mail, Users, Briefcase, Heart, Rocket, Target } from 'lucide-react'

export default function CareersPage() {
  const benefits = [
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "İnovasyon Odaklı",
      desc: "Yapay zeka ve IoT teknolojilerinde öncü projeler"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Dinamik Ekip",
      desc: "Uzman ve yaratıcı profesyonellerle çalışma fırsatı"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Kariyer Gelişimi",
      desc: "Sürekli öğrenme ve gelişim imkanları"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "İş-Yaşam Dengesi",
      desc: "Esnek çalışma modelleri ve destekleyici ortam"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <section className="max-w-6xl mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 text-white mb-6 shadow-lg">
            <Briefcase className="w-10 h-10" />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Kariyer Fırsatları
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
            IYESYS'e ve yapay zeka tabanlı endüstriyel güvenlik çözümlerimize gösterdiğiniz ilgi için teşekkür ederiz. 
            Alanında fark yaratan, dinamik ekibimizi büyütmeye her zaman değer veriyoruz.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, idx) => (
            <div 
              key={idx}
              className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-2"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 text-white mb-4 group-hover:scale-110 transition-transform">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>

        {/* General Application Section */}
        <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-gray-100 max-w-3xl mx-auto overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5"></div>
          
          <div className="relative text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 text-white mb-6 shadow-lg">
              <Mail className="w-8 h-8" />
            </div>
            
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Genel Başvuru
            </h2>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-lg">
                Şu anda listelenen aktif bir açık pozisyonumuz bulunmamaktadır. 
                Ancak, IYESYS ailesinin bir parçası olmak isteyen yetenekli profesyonellerin 
                başvurularını her zaman değerlendirmeye alıyoruz.
              </p>
              
              <div className="pt-6 pb-4">
                <div className="inline-block bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl px-8 py-6 border border-blue-100">
                  <p className="text-gray-800 mb-3">
                    Gelecekteki fırsatlar için özgeçmişinizi bizimle paylaşmak isterseniz:
                  </p>
                  <a 
                    href="mailto:info@iyesys.com.tr" 
                    className="inline-flex items-center gap-2 text-xl font-semibold text-blue-600 hover:text-purple-600 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    info@iyesys.com.tr
                  </a>
                </div>
              </div>

              <p className="text-sm text-gray-600 pt-4">
                Başvurunuzda pozisyon tercihinizi, deneyimlerinizi ve neden IYESYS'te çalışmak istediğinizi belirtmeniz değerlendirme sürecini hızlandıracaktır.
              </p>
            </div>
          </div>
        </div>

        {/* Why Join Us Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-10 text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">
              Neden IYESYS?
            </h3>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              Endüstriyel güvenlikte yapay zeka ile fark yaratan, teknolojinin sınırlarını zorlayan bir ekibin parçası olun. 
              Birlikte geleceği inşa edelim.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}