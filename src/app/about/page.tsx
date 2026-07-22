'use client'

import Link from 'next/link'
import {
  ArrowRight,
  Award,
  Eye,
  Globe,
  ShieldCheck,
  Target,
  Wrench,
} from 'lucide-react'

export default function About() {
  return (
    <div className="bg-white font-sans text-slate-900">
      <section className="relative isolate overflow-hidden bg-slate-950 pt-24 text-white">
        <img
          src="/img/service-detail/uretim-verimlilik-analizi.png"
          alt=""
          className="absolute inset-0 -z-30 h-full w-full object-cover opacity-[0.18]"
        />
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(135deg,#020617_0%,#07111f_48%,rgba(2,6,23,0.88)_100%)]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:76px_76px] opacity-28" />
        <div className="absolute left-1/2 top-32 -z-10 h-56 w-[760px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="mx-auto flex min-h-[calc(100vh-12px)] max-w-[1680px] flex-col items-center px-4 pb-14 sm:px-6 lg:px-8">
          <img
            src="/img/logohakkimizda.png"
            alt="IYESYS AI Solution Systems logosu"
            className="mt-1 h-[220px] w-full max-w-[700px] object-cover object-center brightness-[0.9] contrast-[1.08] saturate-[0.98] drop-shadow-[0_18px_46px_rgba(56,189,248,0.16)] sm:mt-2 sm:h-[245px] lg:h-[270px] lg:max-w-[860px]"
          />

          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/16 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-white backdrop-blur">
            <Award className="h-4 w-4 text-cyan-300" />
            %100 Yerli Teknoloji
          </div>

          <h1 className="mt-5 w-full max-w-[1600px] text-center text-3xl font-black leading-[1.05] tracking-tight text-white sm:text-4xl md:[&_span]:whitespace-nowrap lg:text-[46px] xl:text-[50px] 2xl:text-[54px]">
            <span className="block">Yerli Mühendislikle</span>
            <span className="block">Güvenlikten Verimliliğe Sahaya İnen Yapay Zeka</span>
          </h1>

          <p className="mt-5 max-w-5xl text-center text-base font-medium leading-8 text-slate-200 sm:text-lg">
            IYESYS; iş güvenliği, üretim verimliliği, otomasyon, özel yazılım, Ar-Ge ve filo yönetimi çözümlerini yerli yazılım altyapısıyla geliştirir. Sahadaki gerçek riski, kayıp zamanı ve karar ihtiyacını anlaşılır hale getiren sistemler kurar. Kamera, sensör, UWB, PLC, IoT ve yönetim panellerini işletmenin mevcut düzenine uyumlu şekilde birleştirerek teknolojiyi sahada aksiyon aldıran bir yapıya dönüştürür. Amacımız, her projede karmaşık mühendislik bilgisini ekiplerin kolayca kullanabileceği güvenilir, ölçülebilir ve sürdürülebilir çözümlere çevirmektir.
          </p>

        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-16 border-b border-slate-200 pb-20 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-green-50 text-green-700">
              <Target className="h-7 w-7" />
            </div>
            <h2 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">Misyonumuz</h2>
            <div className="mt-6 h-1 w-20 bg-green-600" />
          </div>
          <div className="space-y-6 text-lg font-medium leading-9 text-slate-600">
            <p>
              Misyonumuz, endüstriyel sahalarda en değerli varlık olan insan hayatını korumak için teknolojinin sınırlarını zorlamaktır. Geleneksel iş güvenliği yaklaşımlarının yetersiz kaldığı noktalarda, tamamen yerli mühendislik ile geliştirdiğimiz yapay zeka destekli sistemlerle sahadaki riskleri anlık olarak tespit etmeyi hedefliyoruz.
            </p>
            <p>
              Bunun yanında işletmelerin üretim, bakım, kalite, filo ve saha operasyonlarını daha ölçülebilir hale getiren çözümler geliştiriyoruz. Amacımız; kazalar meydana gelmeden önce önlem alınmasını sağlayan, verimlilik kayıplarını görünür kılan ve ekiplerin günlük kararlarını sadeleştiren sürdürülebilir bir teknoloji altyapısı sunmaktır.
            </p>
          </div>
        </div>

        <div className="grid gap-16 pt-20 lg:grid-cols-[1.28fr_0.72fr]">
          <div className="space-y-6 text-lg font-medium leading-9 text-slate-600 lg:order-1">
            <p>
              Vizyonumuz; yapay zeka, görüntü işleme, IoT ve otomasyon teknolojileriyle endüstriyel sahaları daha öngörülebilir, daha güvenli ve daha verimli yapılara dönüştürmektir. IYESYS çözümleri, sahada insan, ekipman, makine ve veri etkileşimini sürekli analiz eden akıllı bir karar katmanı kurar.
            </p>
            <p>
              Tamamen yerli yazılım altyapımızla geliştirdiğimiz çözümleri, iş güvenliği ve endüstriyel verimlilik alanında referans gösterilen standartlar haline getirmek istiyoruz. Teknolojisiyle güven veren, sahada karşılığı olan ve işletmelerin gerçek problemlerini çözen bir mühendislik ekosistemi oluşturmak en temel vizyonumuzdur.
            </p>
          </div>
          <div className="lg:order-2">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
              <Globe className="h-7 w-7" />
            </div>
            <h2 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">Vizyonumuz</h2>
            <div className="mt-6 h-1 w-20 bg-blue-600" />
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
          {[
            { icon: ShieldCheck, title: 'Güvenlik odağı', desc: 'İş kazası önleme, İSG kamera sistemi, KKD ve alan güvenliği senaryoları.' },
            { icon: Eye, title: 'Görünür veri', desc: 'Sahadaki hareket, duruş, ihlal ve performans kayıtlarını anlaşılır hale getiren paneller.' },
            { icon: Wrench, title: 'Yerli mühendislik', desc: 'Yazılım, donanım, otomasyon ve saha uygulamasını aynı teknik bakışla birleştiren ekip.' },
          ].map((item) => (
            <div key={item.title} className="rounded-lg border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-slate-950 text-white">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-black text-slate-950">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-lg bg-slate-950 p-8 text-white shadow-2xl sm:p-10 lg:p-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <span className="text-sm font-black uppercase tracking-[0.18em] text-green-300">IYESYS ile başlayın</span>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Sahanızdaki riski ve verimlilik kaybını birlikte netleştirelim.</h2>
              <p className="mt-4 max-w-3xl text-base leading-8 text-slate-300">
                Mevcut kamera, otomasyon, yazılım veya saha operasyon yapınızı inceleyip uygulanabilir ilk adımı teknik olarak çıkaralım.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-4 text-sm font-black text-slate-950 transition hover:-translate-y-0.5 hover:bg-slate-200"
            >
              Demo Talep Edin
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
