'use client'

import { FileCheck2, Settings2 } from 'lucide-react';

export default function SeoContentSection() {
  return (
    <section className="py-24 bg-slate-50 border-b border-slate-100 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-[1px] bg-black" />
            <span className="text-black text-xs font-bold uppercase tracking-[0.2em]">Yaklaşım</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-black leading-[1.1] tracking-tight max-w-4xl">
            Teknolojiyi sahadaki karar süreçlerine bağlayan güvenlik mimarisi
          </h2>
          <p className="mt-6 text-slate-500 max-w-3xl leading-relaxed text-lg font-light">
            İş güvenliği sistemi; kamera, yapay zeka analizi, aktif ikaz ve yönetim panelini aynı güvenlik akışında birleştirir. IYESYS, üretim alanındaki hareket akışını,
            riskli noktaları ve ekiplerin aksiyon alma biçimini birlikte ele alarak uygulanabilir bir iş kazası önleme yapısı kurar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="group bg-white p-10 border border-slate-200 hover:border-black transition-all duration-300 rounded-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-slate-50 border border-slate-100 text-black flex items-center justify-center flex-shrink-0 rounded-sm">
                <Settings2 className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-black">
                Sahaya göre kurulan sistem
              </h3>
            </div>
            <p className="text-slate-500 leading-relaxed text-base font-light">
              Forklift güzergahı, yaya geçişi, rampa trafiği ve yasaklı alanlar aynı harita üzerinde değerlendirilir.
              Bu sayede uyarı noktaları, hız yavaşlatma senaryoları ve raporlama ihtiyaçları işletmenin gerçek çalışma düzenine göre şekillenir.
            </p>
          </div>

          <div className="group bg-white p-10 border border-slate-200 hover:border-black transition-all duration-300 rounded-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-slate-50 border border-slate-100 text-black flex items-center justify-center flex-shrink-0 rounded-sm">
                <FileCheck2 className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-black">
                Yönetilebilir olay kaydı
              </h3>
            </div>
            <p className="text-slate-500 leading-relaxed text-base font-light">
              Kural ihlali, yaklaşma riski veya uyarı tetiklenmesi gibi olaylar takip edilebilir kayıtlara dönüşür.
              İSG, bakım ve operasyon ekipleri aynı veriye bakarak aksiyonlarını netleştirebilir.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
