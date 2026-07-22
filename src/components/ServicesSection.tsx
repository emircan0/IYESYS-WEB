'use client'

import Link from 'next/link'
import { ArrowLeft, ArrowRight, Sparkles } from 'lucide-react'
import { useEffect, useMemo, useRef, useState } from 'react'
import { serviceCatalog, serviceCategoryThemes } from '@/lib/serviceCatalog'

const intervalMs = 3200

const getIndex = (index: number) => {
  const total = serviceCatalog.length
  return (index + total) % total
}

const getViewport = () => {
  if (typeof window === 'undefined') {
    return { compact: false, shift: 520 }
  }

  const width = window.innerWidth
  return {
    compact: width < 768,
    shift: Math.min(620, Math.max(340, width * 0.33)),
  }
}

export default function ServicesSection() {
  const [active, setActive] = useState(0)
  const [timerSeed, setTimerSeed] = useState(0)
  const [viewport, setViewport] = useState(getViewport)
  const autoTimerRef = useRef<number | null>(null)
  const activeService = serviceCatalog[active]
  const activeTheme = serviceCategoryThemes[activeService.category]

  const visibleServices = useMemo(
    () =>
      [-2, -1, 0, 1, 2].map((offset) => {
        const index = getIndex(active + offset)
        return { service: serviceCatalog[index], index, offset }
      }),
    [active]
  )

  useEffect(() => {
    const handleResize = () => setViewport(getViewport())
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (autoTimerRef.current !== null) {
      window.clearTimeout(autoTimerRef.current)
    }

    autoTimerRef.current = window.setTimeout(() => {
      setActive((current) => getIndex(current + 1))
    }, intervalMs)

    return () => {
      if (autoTimerRef.current !== null) {
        window.clearTimeout(autoTimerRef.current)
        autoTimerRef.current = null
      }
    }
  }, [active, timerSeed])

  const resetAutoTimer = () => {
    if (autoTimerRef.current !== null) {
      window.clearTimeout(autoTimerRef.current)
      autoTimerRef.current = null
    }
    setTimerSeed((seed) => seed + 1)
  }

  const selectService = (index: number) => {
    resetAutoTimer()
    setActive(index)
  }

  const go = (direction: -1 | 1) => {
    resetAutoTimer()
    setActive((current) => getIndex(current + direction))
  }

  return (
    <section id="solution-flow" className="relative isolate overflow-hidden bg-slate-950 pt-32 text-white sm:pt-36">
      {serviceCatalog.map((service, index) => (
        <div
          key={service.href}
          className="absolute inset-0 -z-20 bg-cover bg-center transition-opacity duration-700"
          style={{
            backgroundImage: `url(${service.image})`,
            opacity: index === active ? 1 : 0,
          }}
        />
      ))}
      <div className="absolute inset-0 -z-10 bg-slate-950/78" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-slate-950 to-transparent" />

      <div className="mx-auto w-full px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto mb-8 max-w-4xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-white backdrop-blur">
            <Sparkles className="h-4 w-4" style={{ color: activeService.accent }} />
            Çözümlerimiz
          </div>
          <h1 className="text-3xl font-black leading-[1.14] tracking-tight sm:text-5xl">
            Sahanız için doğru çözümü buradan seçin
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm font-medium leading-7 text-slate-300 sm:text-base">
            İş güvenliği, üretim verimliliği, otomasyon, özel yazılım, Ar-Ge ve saha operasyonları için geliştirdiğimiz çözümleri tek portföyde inceleyin.
          </p>
        </div>

        <div className="relative mx-auto h-[360px] w-full max-w-[1780px] overflow-hidden py-8 md:h-[370px]">
          {visibleServices.map(({ service, index, offset }) => {
            const isCenter = offset === 0
            const sideVisible = !viewport.compact && Math.abs(offset) === 1
            const theme = serviceCategoryThemes[service.category]
            const opacity = isCenter ? 1 : sideVisible ? 0.42 : 0
            const scale = isCenter ? 1 : sideVisible ? 0.9 : 0.78
            const blur = isCenter ? 0 : sideVisible ? 1.1 : 2.4

            return (
              <button
                key={service.href}
                type="button"
                onClick={() => selectService(index)}
                className={`group absolute left-1/2 top-1/2 min-w-0 rounded-2xl px-4 py-8 text-center transition-[transform,opacity,filter] duration-[1150ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  isCenter ? 'w-[88vw] max-w-[700px] md:w-[42vw]' : 'w-[70vw] max-w-[500px] md:w-[27vw]'
                }`}
                style={{
                  transform: `translate3d(calc(-50% + ${offset * viewport.shift}px), -50%, 0) scale(${scale})`,
                  opacity,
                  filter: `blur(${blur}px)`,
                  zIndex: 10 - Math.abs(offset),
                  pointerEvents: Math.abs(offset) <= 1 ? 'auto' : 'none',
                }}
              >
                <span
                  className="mx-auto inline-flex max-w-full items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] sm:text-[11px]"
                  style={{ borderColor: theme.border, backgroundColor: `${service.accent}24`, color: service.accent }}
                >
                  {theme.shortLabel}
                </span>
                <span
                  className={`mx-auto mt-4 block text-balance font-black tracking-tight text-white ${
                    isCenter
                      ? 'max-w-[680px] text-3xl leading-[1.18] sm:text-4xl xl:text-5xl'
                      : 'max-w-[500px] text-xl leading-[1.2] lg:text-2xl 2xl:text-3xl'
                  }`}
                >
                  {service.title}
                </span>
                <span
                  className={`mx-auto mt-5 block max-w-xl text-sm font-medium leading-7 text-slate-300 transition ${
                    isCenter ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  {service.desc}
                </span>
              </button>
            )
          })}
        </div>

        <div className="mx-auto mt-2 flex max-w-4xl flex-col items-center justify-center gap-4 sm:flex-row sm:justify-between">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => go(-1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur transition hover:bg-white/20"
              aria-label="Önceki çözüm"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur transition hover:bg-white/20"
              aria-label="Sonraki çözüm"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>

          <Link
            href={activeService.href}
            className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-black text-slate-950 transition hover:-translate-y-0.5 hover:bg-slate-200"
            style={{ boxShadow: `0 18px 44px rgba(${activeTheme.accentRgb}, 0.2)` }}
          >
            {activeService.title} sayfasına git
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
