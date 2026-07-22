'use client'

import { Shield, AlertTriangle, Truck, CheckCircle, Zap, Eye, Radio, Activity, Settings } from 'lucide-react'
import Link from 'next/link'

export default function ServicesPage() {
  const services = [
    {
      title: "Hareketli Ekipman - Yaya Güvenliği",
      desc: "AI tabanlı görüntü işleme teknolojisi ile kör noktaları ve yaya hareketlerini anlık analiz eden aktif koruma sistemi. Riskli durumlarda otonom yavaşlatma ve operatör uyarı protokollerini devreye sokar.",
      icon: <Shield className="w-8 h-8" />,
      color: "from-blue-600 to-cyan-500",
      checkColor: "text-blue-500",
      features: ["Otonom Hız Kontrolü", "AI Nesne Tanıma", "Aktif Operatör Arayüzü"],
      href: "/services/forklift-safety"
    },
    {
      title: "Alan Güvenliği",
      desc: "Tesis içerisindeki kritik bölgeleri kesintisiz izleyen ve izinsiz girişleri milisaniyeler içinde raporlayan güvenlik ağı. Entegre ikaz birimleri ile sahadaki durumsal farkındalığı maksimize eder.",
      icon: <AlertTriangle className="w-8 h-8" />,
      color: "from-emerald-500 to-teal-500",
      checkColor: "text-emerald-500",
      features: ["Sürekli Alan Analizi", "Otonom İkaz Yönetimi", "Erişim Kontrol Protokolleri"],
      href: "/services/area-safety"
    },
    {
      title: "Rampa Güvenliği",
      desc: "Lojistik operasyonlarında tır yanaşma ve yükleme süreçlerini denetleyen akıllı kontrol sistemi. Personel güvenliğini önceliklendirerek rampa kapılarını ve uyarı sistemlerini otonom olarak yönetir.",
      icon: <Truck className="w-8 h-8" />,
      color: "from-blue-600 to-slate-500",
      checkColor: "text-blue-500",
      features: ["AI Arka Bölge Tespiti", "Akıllı Kapı Kilit Entegrasyonu", "Sürücü Rehberlik Sistemleri"],
      href: "/services/dock-safety"
    },
    {
      title: "İşletmeye Özel Çözümler",
      desc: "İşletmenizin operasyonel verimliliğini artıran özel yazılım ve IoT altyapıları. Mevcut ERP/MES sistemlerinizle tam entegre, ölçeklenebilir ve yüksek güvenlikli teknoloji çözümleri.",
      icon: <Settings className="w-8 h-8" />,
      color: "from-blue-600 to-indigo-600",
      checkColor: "text-indigo-500",
      features: ["Özel Yazılım & Dashboard", "Endüstriyel IoT Sensör Ağları", "Sistem Entegrasyonları"],
      href: "/services/custom-solutions"
    },
    {
      title: "Aktif Uyarı Sistemleri",
      desc: "İşletmenizin özel senaryolarına göre tetiklenebilen, PLC ve otomasyon sistemleri ile tam uyumlu modüler uyarı donanımları. Görsel ve işitsel ikaz birimlerini ihtiyacınıza göre yapılandırın.",
      icon: <Zap className="w-8 h-8" />,
      color: "from-amber-500 to-orange-600",
      checkColor: "text-amber-500",
      features: ["Modüler Uyarı Birimleri", "PLC & Buton Entegrasyonu", "Özel Senaryo Desteği"],
      href: "/services/warning-systems"
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
    <div className="min-h-screen bg-gradient-to-br from-slate-300 via-blue-200 to-slate-300">
      <section className="max-w-7xl mx-auto px-4 py-12 sm:py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Çözümlerimiz
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
            Endüstriyel güvenlik ve akıllı otomasyon çözümlerimiz, sahanızdaki riskleri yönetmenizi ve operasyonel verimliliği artırmanızı sağlar.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, idx) => (
            <Link
              key={idx}
              href={service.href}
              className="group relative bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 hover:border-slate-300 hover:-translate-y-2 overflow-hidden block"
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity`}></div>

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
                      <CheckCircle className={`w-4 h-4 ${service.checkColor} flex-shrink-0`} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Corner Accent */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-20 rounded-bl-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform`}></div>
            </Link>
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
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 sm:p-12 text-white shadow-2xl">
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
