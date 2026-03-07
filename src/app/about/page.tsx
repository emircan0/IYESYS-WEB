'use client'

import { Target, Globe, Award, ShieldCheck, Cpu, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function About() {
  return (
    <div className="bg-white font-sans text-slate-900">

      {/* 1. HERO BÖLÜMÜ */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-100 text-red-700 font-bold text-sm tracking-wide">
              <Award className="w-4 h-4" /> %100 Yerli Yazılım
            </div>

            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-slate-900">
              Yerli Yapay Zeka ile <span className="text-blue-600">Yeni Nesil İş Güvenliği</span>
            </h1>

            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                IYESYS, tamamen yerli yazılım altyapısıyla geliştirilen yapay zeka tabanlı iş güvenliği
                çözümleri sunar. Görüntü işleme teknolojileriyle sahadaki riskleri anlık olarak analiz eder,
                kazalar oluşmadan önce tespit ederek işletmelere proaktif güvenlik yaklaşımı kazandırır.
              </p>
            </div>
          </div>

          {/* Görsel Alanı */}
          <div className="relative">
            <div className="aspect-[4/3] bg-white rounded-[2rem] overflow-hidden border border-slate-200 shadow-2xl relative">
              <img
                src="/img/15.png"
                alt="IYESYS Ar-Ge Çalışmaları"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. MİSYON & VİZYON */}
      <section className="py-24 max-w-7xl mx-auto px-4">

        {/* Misyon */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-24 border-b border-slate-100 pb-24">
          <div>
            <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
              <Target className="w-8 h-8" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Misyonumuz</h2>
            <div className="w-20 h-1 bg-blue-600 mb-8"></div>
          </div>
          <div className="prose prose-lg text-slate-600 leading-relaxed">
            <p className="mb-6">
              Misyonumuz, endüstriyel sahalarda en değerli varlık olan insan hayatını korumak için
              teknolojinin sınırlarını zorlamaktır. Geleneksel iş güvenliği yaklaşımlarının yetersiz kaldığı
              noktalarda, tamamen yerli mühendislik ile geliştirdiğimiz yapay zeka destekli sistemlerle
              sahadaki riskleri anlık olarak tespit etmeyi ve görünmez tehlikeleri görünür hale getirmeyi
              hedefliyoruz.
            </p>
            <p>
              Amacımız; kazalar meydana gelmeden önce önlem alınmasını sağlayan, proaktif ve
              sürdürülebilir iş güvenliği çözümleri sunarak, işletmelerde güvenlik kültürünü güçlendirmek
              ve insan odaklı bir çalışma ortamı oluşturmaktır.
            </p>
          </div>
        </div>

        {/* Vizyon */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="lg:order-2">
            <div className="w-14 h-14 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-6">
              <Globe className="w-8 h-8" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Vizyonumuz</h2>
            <div className="w-20 h-1 bg-purple-600 mb-8"></div>
          </div>
          <div className="lg:order-1 prose prose-lg text-slate-600 leading-relaxed">
            <p className="mb-6">
              Vizyonumuz; yapay zeka ve görüntü işleme teknolojileriyle iş güvenliğini reaktif önlemlerden
              çıkararak, öngörülebilir ve önleyici bir yapıya dönüştürmektir. Endüstriyel sahalarda insan,
              ekipman ve çevre etkileşimlerini sürekli analiz eden akıllı sistemlerimizle, kazaların
              “kaçınılmaz” olmadığı bir gelecek inşa etmeyi hedefliyoruz.
            </p>
            <p>
              Tamamen yerli yazılım altyapımızla geliştirdiğimiz çözümleri, iş güvenliği alanında global
              ölçekte referans gösterilen standartlar haline getirmek; insan hayatını merkeze alan,
              teknolojisiyle güven veren ve sahada gerçek karşılığı olan bir güvenlik ekosistemi oluşturmak
              en temel vizyonumuzdur.
            </p>
          </div>
        </div>
      </section>

      {/* 3. CTA: GÜVENLİK ODAKLI ÇAĞRI */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 text-blue-600 rounded-full mb-8">
            <ShieldCheck className="w-10 h-10" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Sıfır Kaza Vizyonuna Ortak Olun
          </h2>
          <p className="text-xl text-slate-600 mb-10 leading-relaxed">
            Fabrikanızdaki riskleri, kaza gerçekleşmeden önce tespit edin. <br className="hidden md:block" />
            Üretim sahanızda sürdürülebilir ve akıllı bir güvenlik yapısı kuralım.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all hover:scale-105 shadow-xl"
          >
            Demo Talep Edin
          </Link>
        </div>
      </section>

    </div>
  )
}