'use client'

import { Cpu, Shield, BarChart2, Wifi, CheckCircle, Zap, Eye, Radio } from 'lucide-react'

export default function ServicesPage() {
  const services = [
    {
      title: "Akıllı Forklift & Yaya Güvenliği",
      desc: "AI kameralar ile kör nokta ve kavşaklarda forklift/insan hareketlerini algılayın. Risk anında sinyalizasyon sistemlerini tetikleyin ve UWB ile forklift içi uyarı/yavaşlatma sağlayın.",
      icon: <Cpu className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      features: ["Kör Nokta Algılama", "Kavşak Güvenliği", "Otomatik Sinyalizasyon"]
    },
    {
      title: "Düşme / Bayılma Algılama",
      desc: "AI Kamera tabanlı sistem ile personelin düşme veya bayılma anlarını anında tespit edin. Acil durum müdahalesini hızlandırmak için anlık bildirim ve olay klibi gönderin.",
      icon: <Shield className="w-8 h-8" />,
      color: "from-emerald-500 to-teal-500",
      features: ["Anlık Tespit", "Acil Bildirim", "Olay Kaydı"]
    },
    {
      title: "Akıllı Güvenli Yükleme Rampası",
      desc: "TIR algılama ve plaka okuma ile yanaşma süreçlerini kaydedin. Araç arkasında insan varlığında uyarı verin ve rampa kapılarını koşullu olarak güvenle yönetin.",
      icon: <BarChart2 className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      features: ["Plaka Okuma", "İnsan Algılama", "Akıllı Kapı Kontrolü"]
    },
    {
      title: "Forklift-Forklift Haberleşmesi (UWB)",
      desc: "UWB tag'ler ile forkliftler arası mesafeyi hassas biçimde ölçün. Tehlikeli yakınlaşmalarda operatörü uyarın, hız düşürme tetikleyin ve bölge bazlı hız kısıtları uygulayın.",
      icon: <Wifi className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      features: ["Hassas Mesafe Ölçümü", "Çarpışma Önleme", "Hız Kontrolü"]
    }
  ]

  const benefits = [
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Hızlı Kurulum",
      desc: "Minimum kesinti ile devreye alma"
    },
    {
      icon: <Eye className="w-5 h-5" />,
      title: "7/24 İzleme",
      desc: "Kesintisiz güvenlik takibi"
    },
    {
      icon: <Radio className="w-5 h-5" />,
      title: "Anlık Uyarı",
      desc: "Gerçek zamanlı tehlike bildirimi"
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      title: "Kanıtlanmış Teknoloji",
      desc: "Endüstride test edilmiş çözümler"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <section className="max-w-7xl mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Çözümlerimiz
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
            Yapay zeka ve IoT teknolojileriyle desteklenen endüstriyel güvenlik çözümlerimiz, 
            işyerinizde kazaları önler ve operasyonel verimliliği artırır.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-2 overflow-hidden"
            >
              {/* Gradient Background on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} text-white mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-700 leading-relaxed mb-6">
                  {service.desc}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {service.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Corner Accent */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-10 rounded-bl-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform`}></div>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-xl border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Neden IYESYS Çözümleri?
          </h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="text-center group">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 text-white mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  {benefit.icon}
                </div>
                <h4 className="font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h4>
                <p className="text-sm text-gray-600">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">
              İşyerinizin Güvenliğini Artırın
            </h3>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8">
              Uzman ekibimiz, ihtiyaçlarınıza özel çözümler geliştirmek için sizinle çalışmaya hazır
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all hover:scale-105 shadow-xl">
              Demo Talep Edin
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}