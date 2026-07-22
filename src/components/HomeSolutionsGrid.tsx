'use client'

import Link from 'next/link'
import type { CSSProperties } from 'react'
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
  Truck,
  Wrench,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import {
  serviceCatalog,
  serviceCategoryOrder,
  serviceCategoryThemes,
  type ServiceCatalogItem,
} from '@/lib/serviceCatalog'

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

function SolutionCard({ service, index }: { service: ServiceCatalogItem; index: number }) {
  const Icon = serviceIcons[service.href] || Boxes
  const theme = serviceCategoryThemes[service.category]

  return (
    <Link
      href={service.href}
      className="group relative flex min-h-[245px] flex-col overflow-hidden rounded-lg border bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
      style={{
        borderColor: `${service.accent}33`,
        animationDelay: `${index * 35}ms`,
      }}
    >
      <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-50 transition duration-300 group-hover:scale-x-100" style={{ backgroundColor: service.accent }} />
      <div className="flex items-start justify-between gap-4">
        <div
          className="flex h-12 w-12 items-center justify-center rounded-lg transition duration-300 group-hover:scale-105"
          style={{ backgroundColor: theme.soft, color: service.accent }}
        >
          <Icon className="h-5 w-5" />
        </div>
        <span
          className="rounded-full px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.14em]"
          style={{ backgroundColor: theme.soft, color: theme.text }}
        >
          {theme.shortLabel}
        </span>
      </div>

      <h3 className="mt-5 text-lg font-black leading-tight text-slate-950 transition group-hover:text-[var(--card-accent)]" style={{ '--card-accent': service.accent } as CSSProperties}>
        {service.title}
      </h3>
      <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">{service.desc}</p>

      <div className="mt-auto flex items-center justify-between pt-5">
        <div className="flex flex-wrap gap-1.5">
          {service.tags.slice(0, 2).map((tag) => (
            <span key={tag} className="rounded-full bg-slate-100 px-2 py-1 text-[11px] font-bold text-slate-600">
              {tag}
            </span>
          ))}
        </div>
        <ArrowRight className="h-4 w-4 shrink-0 text-slate-300 transition group-hover:translate-x-1" style={{ color: service.accent }} />
      </div>
    </Link>
  )
}

export default function HomeSolutionsGrid() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-slate-700">
              <Factory className="h-4 w-4 text-slate-950" />
              Tüm çözümler
            </div>
            <h2 className="max-w-3xl text-3xl font-black leading-[1.08] tracking-tight text-slate-950 sm:text-5xl">
              Güvenlikten verimliliğe, sahada karşılığı olan yerli sistemler
            </h2>
          </div>
          <p className="max-w-3xl text-base font-medium leading-8 text-slate-600">
            IYESYS; iş güvenliği kamera sistemlerinden üretim verimliliğine, PLC otomasyondan özel yazılıma kadar sahada karşılığı olan çözümler geliştirir. Her çözüm, mevcut altyapınızı ve gerçek operasyon akışınızı dikkate alarak uygulanabilir bir mühendislik planına dönüştürülür.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap gap-2">
          {serviceCategoryOrder.map((category) => {
            const theme = serviceCategoryThemes[category]
            return (
              <span
                key={category}
                className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-black"
                style={{ borderColor: theme.border, backgroundColor: theme.soft, color: theme.text }}
              >
                <span className="h-2 w-2 rounded-full" style={{ backgroundColor: theme.accent }} />
                {theme.label}
              </span>
            )
          })}
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {serviceCatalog.map((service, index) => (
            <SolutionCard key={service.href} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
