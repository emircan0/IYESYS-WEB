'use client'

import { Shield, AlertTriangle, Truck, CheckCircle, Zap, Eye, Radio, Activity } from 'lucide-react'
import Link from 'next/link'

export default function ServicesPage() {
  const services = [
    {
      title: "Forklift - Yaya Güvenliği",
      desc: "Forklift üzerine entegre edilen yapay zeka destekli kamera, kör noktaları ve yaya hareketlerini anlık olarak algılar. Riskli durumlarda operatörü sesli ve görsel uyarılarla bilgilendirir, forklifti yavaşlatabilir ve operatöre anlık görüntü sağlayarak güvenli müdahaleyi destekler.",
      icon: <Shield className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      features: ["Anlık Sesli ve Görsel Uyarılar", "Risk Anında Otomatik Yavaşlatma", "Operatöre Canlı Görüntü"]
    },
    {
      title: "Bölge Güvenliği",
      desc: "Yapay zeka destekli kamera sistemi, belirlenen alanları sürekli izleyerek forklift–yaya etkileşimlerini ve izinsiz bölge girişlerini anlık olarak algılar. Riskli durum tespit edildiğinde, ilgili bölgede sesli ve görsel uyarılar devreye girerek çalışanların farkındalığını artırır ve tehlikeli alanlara kontrolsüz erişimi görünür kılar.",
      icon: <AlertTriangle className="w-8 h-8" />,
      color: "from-emerald-500 to-teal-500",
      features: ["Sürekli Alan İzleme", "İzinsiz Giriş Algılama", "Bölgesel Sesli/Görsel Uyarı"]
    },
    {
      title: "Yükleme Rampası Güvenliği",
      desc: "Yükleme rampasına konumlandırılan yapay zeka destekli kamera sistemi, kör noktalardaki personel varlığını ve riskli durumları anlık olarak algılar. Tehlike tespit edildiğinde sesli ve görsel uyarılar devreye girer; sistem, tır rampaya doğru konumlandıktan sonra kapının açılmasına izin vererek kontrollü ve güvenli bir yükleme süreci sağlar.",
      icon: <Truck className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      features: ["Kör Nokta Personel Algılama", "Sesli ve Görsel Uyarı", "Kontrollü Kapı Erişimi"]
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
            Yapay zeka tabanlı uyarı çözümlerimiz, potansiyel tehlikeleri görünür kılarak güvenli çalışma ortamını destekler.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-2 overflow-hidden"
            >
              {/* Gradient Background on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="relative z-10">
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

        {/* Benefits Section 
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-xl border border-gray-100 relative z-10">
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
        */}

        {/* CTA Section */}
        <div className="mt-16 text-center relative z-10">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">
              İşyerinizin Güvenliğini Artırın
            </h3>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8">
              İhtiyaçlarınıza özel çözümler geliştirmek için sizinle çalışmaya hazırız
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all hover:scale-105 shadow-xl"
            >
              Demo Talep Edin
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}