'use client'

import type { CSSProperties } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  BellRing,
  Boxes,
  BrainCircuit,
  Camera,
  ChartNoAxesCombined,
  ClipboardCheck,
  Code2,
  Cpu,
  Factory,
  Gauge,
  HardHat,
  Layers3,
  MapPinned,
  PackageCheck,
  Radar,
  Route,
  ScanLine,
  Settings2,
  ShieldCheck,
  Sparkles,
  Truck,
  Wrench,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import ServicesSection from '@/components/ServicesSection'
import {
  serviceCatalog,
  serviceCategoryOrder,
  serviceCategoryThemes,
  type ServiceCatalogItem,
  type ServiceCategory,
} from '@/lib/serviceCatalog'

const categoryIcons: Record<ServiceCategory, LucideIcon> = {
  safety: ShieldCheck,
  efficiency: Gauge,
  automation: Cpu,
  software: Code2,
  engineering: Wrench,
  operations: Truck,
}

const serviceIcons: Record<string, LucideIcon> = {
  '/services/forklift-safety': Radar,
  '/services/area-safety': ShieldCheck,
  '/services/dock-safety': Truck,
  '/services/tehlikeli-alan': HardHat,
  '/services/kamera-sistemi-isg-entegrasyonu': Camera,
  '/services/gida-firmalari-kamera-hijyen': ClipboardCheck,
  '/services/kalite-kontrol': ScanLine,
  '/services/uretim-verimlilik': Gauge,
  '/services/magaza-isletme-verimlilik': ChartNoAxesCombined,
  '/services/warning-systems': BellRing,
  '/services/plc-scada-io-sistemler': Cpu,
  '/services/pnomatik-hidrolik-sistemler': Settings2,
  '/services/mobil-web-uygulamalari': Code2,
  '/services/custom-solutions': Layers3,
  '/services/mekanik-tasarim-cizim': Wrench,
  '/services/arge-danismanlik': BrainCircuit,
  '/services/urun-gelistirme': PackageCheck,
  '/services/arac-takip': Route,
  '/services/hakedis': MapPinned,
}

function SolutionCard({ service }: { service: ServiceCatalogItem }) {
  const Icon = serviceIcons[service.href] || Boxes
  const theme = serviceCategoryThemes[service.category]

  return (
    <Link
      href={service.href}
      className="group relative overflow-hidden rounded-lg border bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
      style={{ borderColor: `${service.accent}30`, '--accent': service.accent } as CSSProperties}
    >
      <div className="relative overflow-hidden bg-slate-100">
        <Image
          src={service.image}
          alt={service.title}
          width={760}
          height={480}
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
          className="aspect-[16/10] w-full object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/72 via-slate-950/10 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3">
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.12em] text-slate-950">
            <Icon className="h-3.5 w-3.5" style={{ color: service.accent }} />
            {theme.shortLabel}
          </div>
          <ArrowRight className="h-5 w-5 text-white transition group-hover:translate-x-1" />
        </div>
      </div>

      <div className="p-5">
        <div className="mb-4 h-1 w-10 rounded-full transition duration-300 group-hover:w-20" style={{ backgroundColor: service.accent }} />
        <h3 className="text-xl font-black leading-tight text-slate-950 transition group-hover:text-[var(--accent)]">
          {service.title}
        </h3>
        <p className="mt-3 text-sm leading-7 text-slate-600">{service.desc}</p>

        <div className="mt-5">
          <div className="mb-2 text-[11px] font-black uppercase tracking-[0.16em] text-slate-400">Odak alanları</div>
          <div className="flex flex-wrap gap-2">
            {service.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border px-2.5 py-1 text-[11px] font-bold"
                style={{ borderColor: theme.border, backgroundColor: theme.soft, color: theme.text }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white text-slate-950">
      <ServicesSection />

      <section className="border-b border-slate-200 bg-white py-18 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.78fr_1.22fr] lg:items-end lg:px-8">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-slate-700">
              <Sparkles className="h-4 w-4 text-slate-950" />
              Çözüm Portföyü
            </div>
            <h2 className="max-w-3xl text-3xl font-black leading-[1.08] tracking-tight text-slate-950 sm:text-5xl">
              Sahada ölçülebilir sonuç üreten çözüm portföyü
            </h2>
          </div>
          <p className="max-w-3xl text-base font-medium leading-8 text-slate-600">
            İşletmenizdeki riskleri, verimlilik kayıplarını, otomasyon eksiklerini ve dijital takip ihtiyacını doğru başlık altında değerlendirin. Her çözüm sayfası; ne işe yaradığını, hangi sahalarda kullanıldığını ve nasıl devreye alınabileceğini anlaşılır bir dille açıklar.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl space-y-14 px-4 sm:px-6 lg:px-8">
          {serviceCategoryOrder.map((category) => {
            const theme = serviceCategoryThemes[category]
            const Icon = categoryIcons[category]
            const services = serviceCatalog.filter((service) => service.category === category)

            return (
              <div key={category} className="grid gap-6 lg:grid-cols-[360px_1fr]">
                <div className="lg:sticky lg:top-28 lg:self-start">
                  <div className="rounded-lg border bg-white p-6 shadow-sm" style={{ borderColor: theme.border }}>
                    <div
                      className="mb-5 flex h-14 w-14 items-center justify-center rounded-lg text-white shadow-lg"
                      style={{ background: theme.gradient, boxShadow: `0 18px 42px rgba(${theme.accentRgb}, 0.22)` }}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="text-xs font-black uppercase tracking-[0.18em]" style={{ color: theme.text }}>
                      {services.length} çözüm
                    </div>
                    <h2 className="mt-3 text-2xl font-black leading-tight text-slate-950">{theme.label}</h2>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{theme.desc}</p>
                  </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                  {services.map((service) => (
                    <SolutionCard key={service.href} service={service} />
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-lg border border-slate-200 bg-slate-950 p-8 text-white shadow-2xl sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center lg:p-12">
          <div className="flex items-start gap-5">
            <div className="hidden h-12 w-12 items-center justify-center rounded-lg bg-white/10 text-white sm:flex">
              <Factory className="h-6 w-6" />
            </div>
            <div>
              <span className="text-xs font-black uppercase tracking-[0.18em] text-slate-300">Sahaya özel kurgu</span>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
                Hangi çözümden başlayacağınızı birlikte netleştirelim.
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-8 text-slate-300">
                Kamera altyapınız, otomasyon seviyeniz, üretim akışınız ve öncelikli riskleriniz üzerinden en doğru ilk adımı çıkaralım.
              </p>
            </div>
          </div>
          <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-4 text-sm font-black text-slate-950 transition hover:-translate-y-0.5 hover:bg-slate-200">
            Demo Talep Et
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
