'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[760px] w-full flex-col justify-center overflow-hidden bg-slate-950 pt-24 lg:min-h-[820px]">
      <video autoPlay loop muted playsInline className="absolute inset-0 h-full w-full object-cover">
        <source src="/iyesys/anasayfa.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/48" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,rgba(0,0,0,0.08),transparent_36%),linear-gradient(180deg,rgba(0,0,0,0.16)_0%,rgba(0,0,0,0.26)_56%,rgba(0,0,0,0.58)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/58 to-transparent" />

      <div className="relative z-10 w-full">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <h1 className="text-4xl font-black leading-[1.06] tracking-tight text-white sm:text-5xl lg:text-[64px]">
              <span className="block">İş Güvenliği ve Verimliliği İçin</span>
              <span className="block">Akıllı Endüstriyel Çözümler</span>
            </h1>

            <p className="mx-auto mt-7 max-w-4xl text-base font-semibold leading-8 text-slate-100 sm:text-lg">
              IYESYS; yapay zeka destekli kamera sistemleri, otomasyon altyapıları, özel yazılım, IoT ve saha mühendisliğini bir araya getirir. Tamamen yerli mühendislik yaklaşımıyla işletmenizin risklerini görünür kılar, iş kazası önleme süreçlerini güçlendirir ve üretimden filoya kadar verimliliği ölçülebilir hale getirir.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-sm bg-white px-7 py-3.5 text-sm font-black text-black transition duration-200 hover:-translate-y-0.5 hover:bg-slate-200"
              >
                Çözümleri İncele
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-sm border border-white/70 bg-black/10 px-7 py-3.5 text-sm font-black text-white backdrop-blur transition duration-200 hover:-translate-y-0.5 hover:bg-white/12"
              >
                Keşif Görüşmesi Planla
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
