'use client'

import { Zap, Settings, ArrowRight, ShieldCheck, Database, Layers, Smartphone, LineChart, Wifi } from 'lucide-react'
import Link from 'next/link'

export default function CustomSolutions() {
  return (
    <div className="bg-white font-sans text-slate-900">

      {/* Hero Section */}
      <section className="relative pt-20 pb-12 lg:pt-40 lg:pb-32 overflow-hidden bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 font-bold text-xs lg:text-sm tracking-wide mb-6 lg:mb-8">
            <Settings className="w-4 h-4" /> Size Özel Mühendislik
          </div>

          <h1 className="text-4xl lg:text-7xl font-extrabold leading-tight tracking-tight text-slate-900 mb-6 lg:mb-8 max-w-4xl mx-auto">
            İşletmenizin İhtiyaçlarına <br className="hidden lg:block" />
            <span className="text-blue-600">Özel Teknoloji Çözümleri</span>
          </h1>

          <p className="text-base lg:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto font-light mb-8 lg:mb-10">
            IYESYS olarak, standart paketlerin ötesine geçerek operasyonel süreçlerinizi dijitalleştiren ve verimliliğinizi artıran uçtan uca yazılım ve IoT sistemleri tasarlıyoruz.
          </p>

          <div className="flex justify-center gap-4">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-6 py-3 lg:px-8 lg:py-4 rounded-xl font-bold hover:bg-blue-700 transition-all hover:scale-105 shadow-xl shadow-blue-500/20 flex items-center gap-2 text-sm lg:text-base"
            >
              Projenizi Başlatın <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 1. Yazılım ve Uygulama Geliştirme */}
      <section className="py-24 max-w-7xl mx-auto px-4 border-b border-slate-100">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center shadow-sm shadow-blue-100">
              <Database className="w-8 h-8" />
            </div>

            <div className="space-y-4">
              <h2 className="text-4xl font-extrabold text-slate-900 leading-tight">
                Yazılım ve Uygulama <br />Geliştirme
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed font-light">
                İşletmenizin veri yönetimini ve operasyonel takibini kolaylaştıracak özel yazılım çözümleri geliştiriyoruz. Masaüstü yönetim panellerinden saha ekipleri için mobil uygulamalara kadar her platformda kesintisiz entegrasyon sağlıyoruz.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 pt-4">
              <div className="flex gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <LineChart className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-900">Özel Dashboard & Raporlama</h4>
                  <p className="text-sm text-slate-600 mt-1">Saha verilerini, üretim metriklerini veya satış performansınızı gerçek zamanlı izleyebileceğiniz web tabanlı yönetim ekranları.</p>
                </div>
              </div>
              <div className="flex gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <Smartphone className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-900">Mobil Uygulama & CRM</h4>
                  <p className="text-sm text-slate-600 mt-1">Saha personelinin iş emirlerini yönetebileceği, müşteri ilişkileri takibi yapabileceğiniz iOS ve Android uyumlu kurumsal uygulamalar.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="w-full bg-slate-50 rounded-[2.5rem] border border-slate-200 shadow-2xl overflow-hidden relative aspect-[4/3]">
              <img
                src="/img/34.png"
                alt="Yazılım ve Dashboard Çözümleri"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Endüstriyel IoT Çözümleri */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div className="relative order-2 lg:order-1">
            <div className="w-full bg-slate-50 rounded-[2.5rem] border border-slate-200 shadow-2xl overflow-hidden relative aspect-[4/3]">
              <img
                src="/img/36.png"
                alt="Endüstriyel IoT Sistemleri"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-8 order-1 lg:order-2">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center shadow-sm shadow-emerald-100">
              <Wifi className="w-8 h-8" />
            </div>

            <div className="space-y-4">
              <h2 className="text-4xl font-extrabold text-slate-900 leading-tight">
                Endüstriyel IoT <br />Sistemleri
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed font-light">
                Fabrikanızdaki makineleri ve ekipmanları akıllı hale getiriyoruz. Tesisinizdeki kritik noktaları çevresel sensörler ve haberleşme modülleri ile donatarak üretim süreçlerinizi şeffaflaştırıyoruz.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 pt-4">
              <div className="flex gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <Zap className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-900">Sensör Ağları ve Veri Toplama</h4>
                  <p className="text-sm text-slate-600 mt-1">Sıcaklık, nem, basınç veya titreşim gibi verileri kablosuz sensörlerle toplayıp merkezi veritabanına iletiyoruz.</p>
                </div>
              </div>
              <div className="flex gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <Layers className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-900">Otonom Otomasyon Entegrasyonu</h4>
                  <p className="text-sm text-slate-600 mt-1">Toplanan verilerdeki anomalilere göre makine PLC'lerini veya ikaz sistemlerini insan müdahalesi olmadan tetikleme yeteneği.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
