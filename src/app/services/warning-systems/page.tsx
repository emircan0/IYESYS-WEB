'use client'

import { Zap, Bell, Volume2, ShieldAlert, ArrowRight, Eye, Radio, Lightbulb, Mic2, Hexagon, Activity } from 'lucide-react'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function WarningSystems() {
  const [activeImage, setActiveImage] = useState(0)
  const sliderImages = ['/img/32.png', '/img/33.png']

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % sliderImages.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="bg-white text-slate-900 font-sans">

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 lg:pt-40 lg:pb-32 overflow-hidden bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-700 font-bold text-sm tracking-wide shadow-sm">
              <ShieldAlert className="w-4 h-4 text-blue-600" /> Modüler İkaz Donanımları
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight tracking-tight text-slate-900">
              Endüstriyel <br />
              <span className="text-blue-600">Sinyalizasyon Çözümleri</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl font-light">
              Endüstriyel sinyalizasyon çözümlerimiz, yaya ve ekipman etkileşiminin yoğun olduğu alanlarda güvenliği artırmak ve operasyon akışını desteklemek için geliştirilmektedir. İhtiyaca özel tasarlanan sistemlerimiz kapsamında; yüksek sesli ve konuşabilen anons sistemleri, kapı ve geçişler için renkli şerit LED uyarı sistemleri, trafik lambaları ve talebe göre cam logolu logo projektörleri sunuyoruz. Her çözüm, sahadaki risk senaryolarına ve işletme süreçlerine uygun olarak özelleştirilebilmektedir.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all hover:scale-105 shadow-xl shadow-blue-500/20 flex items-center gap-2"
              >
                Donanımlarımızı İnceleyin <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div className="relative mt-12 lg:mt-0">
            <div className="bg-white rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden border border-slate-200 shadow-2xl relative aspect-video lg:aspect-[10/9] min-h-[280px] lg:min-h-[450px] transform lg:scale-[1.1] lg:translate-x-8 transition-transform duration-500 hover:scale-[1.12]">
              <img
                src="/img/35.png"
                alt="Uyarı Donanımları"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Components Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">Teknik Donanım ve Entegrasyon Kapsamı</h2>
          <p className="text-slate-600 max-w-4xl mx-auto font-light leading-relaxed">
            İhtiyaca özel tasarlanan sistemlerimiz kapsamında; yüksek sesli ve konuşabilen anons sistemleri, kapı ve geçişler için renkli şerit LED uyarı sistemleri, trafik lambaları ve talebe göre cam logolu logo projektörleri sunuyoruz.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Endüstriyel Logo Projektörleri",
              desc: "Kritik risk bölgelerinde ve yaya yollarında, zemine veya duvara yüksek kontrastlı uyarı logoları yansıtan gelişmiş projeksiyon sistemleri.",
              icon: Lightbulb,
              color: "blue"
            },
            {
              title: "Akıllı Sesli Anons Sistemleri",
              desc: "Gürültülü ortamlarda net duyulabilen, senaryoya göre çok dilli ve özelleştirilebilir konuşan uyarı donanımları.",
              icon: Mic2,
              color: "indigo"
            },
            {
              title: "Renkli Şerit LED Sistemleri",
              desc: "Kapı geçişleri ve yükleme alanlarında, sistem durumuna göre renk değiştiren yüksek görünürlüklü görsel ikaz çözümleri.",
              icon: Zap,
              color: "cyan"
            },
            {
              title: "Sinyalizasyon Trafik Lambaları",
              desc: "Araç ve forklift trafiğini yönetmek için otomasyon sistemlerine entegre edilebilen, dayanıklı ve yüksek performanslı ışık birimleri.",
              icon: Activity,
              color: "emerald"
            }
          ].map((item, idx) => (
            <div key={idx} className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:shadow-xl transition-all group hover:-translate-y-1">
              <div className={`w-14 h-14 bg-white text-${item.color}-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform`}>
                <item.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Detailed Content Section */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shadow-sm">
                <Bell className="w-8 h-8" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">Operasyonel Farkındalık ve <br />Güvenli Hareket Akışı</h2>
              <p className="text-lg text-slate-600 leading-relaxed font-light">
                Çözümlerimiz yalnızca görsel ve sesli uyarı üretmekle kalmaz, aynı zamanda sahada farkındalık oluşturarak kontrollü ve güvenli hareket akışına katkı sağlar. Forklift geçişleri, yaya yolları, yükleme alanları ve kritik risk bölgelerinde; sesli anons, ışıklı yönlendirme ve projeksiyon tabanlı uyarılar birlikte kullanılarak güçlü bir sinyalizasyon altyapısı oluşturulur.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed font-light">
                Modüler yapısı sayesinde bu sistemler, talebe bağlı olarak IoT, AI ve farklı elektronik kontrol altyapılarıyla entegre çalışabilecek şekilde kurgulanabilir; böylece ihtiyaçlara göre genişleyebilen esnek ve ölçeklenebilir çözümler sunar.
              </p>
              <ul className="space-y-4 pt-4">
                {[
                  "Risk senaryolarına ve işletme süreçlerine tam uyumlu özelleştirme",
                  "Yüksek sesli ve akıllı anons sistemleri ile işitsel farkındalık",
                  "Şerit LED ve logo projektörleri ile görsel yönlendirme",
                  "IoT ve AI altyapılarıyla genişletilebilir modüler mimari"
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-4 text-slate-700 font-medium">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="leading-relaxed">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="bg-slate-50 p-4 rounded-[3rem] border border-slate-200 shadow-inner">
                <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl relative">
                  {sliderImages.map((src, idx) => (
                    <img
                      key={src}
                      src={src}
                      alt={`Saha Uygulaması ${idx + 1}`}
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${activeImage === idx ? 'opacity-100' : 'opacity-0'}`}
                    />
                  ))}
                  {/* Slider Indicators */}
                  <div className="absolute bottom-6 right-6 flex gap-2 z-20">
                    {sliderImages.map((_, idx) => (
                      <div
                        key={idx}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${activeImage === idx ? 'bg-blue-600 w-6' : 'bg-white/50'}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
