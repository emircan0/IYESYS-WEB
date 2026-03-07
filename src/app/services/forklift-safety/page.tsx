'use client'

import { Radio, Zap, ShieldAlert, CheckCircle2, ArrowRight, Activity } from 'lucide-react'

export default function ForkliftSafetyPage() {
  return (
    <div className="bg-white text-slate-900 font-sans">

      {/* 1. HERO BÖLÜMÜ */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 w-full grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 font-bold text-sm tracking-wide">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-600"></span>
              </span>
              AI Koruma
            </div>

            <h1 className="text-5xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight text-slate-900">
              Forklift Çevresinde <br />
              <span className="text-blue-600">Anlık Güvenlik</span>
            </h1>

            <div className="space-y-4 max-w-lg">
              <p className="text-xl text-slate-800 leading-relaxed font-medium">
                Forklift çevresindeki yaya hareketlerini anlık izleyerek, riskli durumlarda operatörü zamanında uyarır.
              </p>
            </div>

            {/* <div className="flex gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-xl shadow-blue-200 flex items-center gap-2">
                Demo Talep Et <ArrowRight className="w-5 h-5" />
              </button>
            </div> */}
          </div>

          {/* Hero Görseli */}
          <div className="relative">
            <div className="aspect-[4/3] bg-slate-50 rounded-[3rem] overflow-hidden border border-slate-100 shadow-2xl relative">
              <img
                src="/img/4.png"
                alt="Forklift 360 Derece Güvenlik"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Yüzen İstatistik Kartı */}
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-xs">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                  <Activity className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Tepki Süresi</div>
                  <div className="text-2xl font-black text-slate-900">Anında</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. UWB TEKNOLOJİSİ (Yorum satırında bırakıldı) 
      <section className="py-24 max-w-7xl mx-auto px-4 border-t border-slate-100"> ... </section>  */}

      {/* 3. OTOMATİK YAVAŞLATMA (SAĞ GÖRSEL - SOL METİN) */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-6">
            <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mb-4">
              <Zap className="w-8 h-8" />
            </div>
            <h2 className="text-4xl font-bold text-slate-900">Sadece Uyarmaz, Müdahale Eder</h2>
            <p className="text-lg text-slate-600 leading-relaxed font-light">
              Forklift–yaya etkileşiminin yoğun olduğu alanlarda riskler çoğu zaman fark edilmeden oluşur.
              Forklift üzerine entegre edilen kamera sistemi, yaya hareketlerini ve kör noktaları anlık olarak algılar.
              Tehlike durumunda operatörü sesli ve görsel uyarılarla bilgilendirir, gerektiğinde forklifti otomatik
              olarak yavaşlatır. Aynı anda operatöre canlı görüntü sağlayarak güvenli karar alınmasını destekler.
            </p>
          </div>
          <div className="aspect-video bg-white rounded-3xl border border-slate-200 shadow-lg overflow-hidden">
            <img
              src="/img/5.png"
              alt="Otomatik Yavaşlatma Müdahalesi"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* 4. AI KAMERA DESTEĞİ (Yorum satırında bırakıldı)
      <section className="py-24 max-w-7xl mx-auto px-4"> ... </section> */}

    </div>
  )
}