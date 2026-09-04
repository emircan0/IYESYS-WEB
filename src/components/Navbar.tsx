'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowRight, ChevronDown, Code2, Cpu, Menu, ShieldCheck, Truck, Wrench, X, Zap } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import clsx from 'clsx'
import {
  serviceCatalog,
  serviceCategoryOrder,
  serviceCategoryThemes,
  type ServiceCategory,
} from '@/lib/serviceCatalog'

const categoryIcons: Record<ServiceCategory, LucideIcon> = {
  safety: ShieldCheck,
  efficiency: Zap,
  automation: Cpu,
  software: Code2,
  engineering: Wrench,
  operations: Truck,
}

const darkHeroRoutes = new Set(['/', '/services', '/about'])

export default function Navbar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('safety')
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false)
  const headerOnDarkHero = !scrolled && darkHeroRoutes.has(pathname)
  const servicesActive = pathname === '/services' || pathname.startsWith('/services/')

  const menuData = useMemo(
    () =>
      serviceCategoryOrder.map((category) => {
        const theme = serviceCategoryThemes[category]
        return {
          id: category,
          icon: categoryIcons[category],
          category: theme.label,
          desc: theme.desc,
          accent: theme.accent,
          soft: theme.soft,
          text: theme.text,
          items: serviceCatalog
            .filter((service) => service.category === category)
            .map((service) => ({ href: service.href, label: service.title })),
        }
      }),
    []
  )

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinkClass = (active: boolean) =>
    clsx(
      'px-3 py-2 text-[14px] font-semibold transition-colors duration-200 whitespace-nowrap',
      active ? 'text-black' : 'text-slate-600 hover:text-black'
    )

  const activeCategoryData = menuData.find((m) => m.id === activeCategory) || menuData[0]

  return (
    <nav
      className={clsx(
        'fixed left-0 top-0 z-50 w-full transition-all duration-300',
        scrolled ? 'border-b border-slate-200 bg-white shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="flex h-24 items-center justify-between">
          <Link href="/" className="mr-8 flex shrink-0 items-center gap-3">
            <Image
              src="/icon.png"
              alt="IYESYS Logo"
              width={48}
              height={48}
              priority
              className={clsx(
                'h-11 w-11 object-contain transition-all duration-300',
                headerOnDarkHero ? 'brightness-0 invert' : 'brightness-0'
              )}
            />
            <span className={clsx('text-2xl font-bold tracking-widest', headerOnDarkHero ? 'text-white' : 'text-black')}>IYESYS</span>
          </Link>

          <div className="hidden flex-1 items-center justify-center gap-6 lg:flex">
            <Link
              href="/"
                className={clsx(
                  'px-4 py-2 text-[14px] font-semibold transition-colors duration-200 whitespace-nowrap',
                  headerOnDarkHero ? 'text-slate-300 hover:text-white' : navLinkClass(pathname === '/')
                )}
              >
              Ana Sayfa
            </Link>

            <div
              className="relative px-2 py-4"
              onMouseEnter={() => setIsMegaMenuOpen(true)}
              onMouseLeave={() => setIsMegaMenuOpen(false)}
            >
              <Link
                href="/services"
                className={clsx(
                  'flex items-center gap-1.5 text-[15px] font-bold transition-colors duration-200 whitespace-nowrap',
                  headerOnDarkHero
                    ? servicesActive
                      ? 'text-white'
                      : 'text-slate-300 hover:text-white'
                    : servicesActive
                      ? 'text-black'
                      : 'text-slate-600 hover:text-black'
                )}
              >
                Çözümlerimiz
                <ChevronDown className={clsx('h-4 w-4 transition-transform duration-300', isMegaMenuOpen && 'rotate-180')} />
              </Link>

              <div
                className={clsx(
                  'absolute left-0 z-50 mt-4 w-[900px] transition-all duration-300',
                  isMegaMenuOpen ? 'visible translate-y-0 opacity-100' : 'invisible translate-y-2 opacity-0'
                )}
              >
                <div className="absolute -top-4 left-0 h-4 w-full bg-transparent" />
                <div className="flex min-h-[400px] overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-2xl">
                  <div className="flex w-5/12 flex-col gap-1 border-r border-slate-100 bg-slate-50 p-4">
                    {menuData.map((menu) => {
                      const Icon = menu.icon
                      const isActive = activeCategory === menu.id
                      return (
                        <div
                          key={menu.id}
                          onMouseEnter={() => setActiveCategory(menu.id)}
                          className={clsx(
                            'flex cursor-pointer items-center gap-3 rounded-xl border p-3 transition-all duration-200',
                            isActive ? 'border-slate-100 bg-white shadow-sm' : 'border-transparent hover:bg-slate-100/60'
                          )}
                        >
                          <div
                            className="rounded-lg p-2 transition-colors"
                            style={{
                              backgroundColor: isActive ? menu.accent : '#E2E8F0',
                              color: isActive ? '#FFFFFF' : '#64748B',
                            }}
                          >
                            <Icon className="h-5 w-5" />
                          </div>
                          <div className="flex min-w-0 flex-col">
                            <span className="text-[13px] font-bold text-black">{menu.category}</span>
                            <span className="truncate text-[11px] text-slate-500">{menu.desc}</span>
                          </div>
                        </div>
                      )
                    })}
                  </div>

                  <div className="w-7/12 bg-white p-8">
                    <h3
                      className="mb-6 border-b border-slate-100 pb-3 text-[11px] font-bold uppercase tracking-widest"
                      style={{ color: activeCategoryData.text }}
                    >
                      {activeCategoryData.category}
                    </h3>
                    <div className="flex flex-col gap-2">
                      {activeCategoryData.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="group/link flex items-center justify-between rounded-lg border border-transparent p-3 transition-colors hover:border-slate-100 hover:bg-slate-50"
                        >
                          <span className="text-[14px] font-semibold text-slate-700 transition-colors group-hover/link:text-black">
                            {item.label}
                          </span>
                          <ArrowRight className="h-4 w-4 -translate-x-2 text-slate-300 opacity-0 transition-all group-hover/link:translate-x-0 group-hover/link:opacity-100" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Link href="/about" className={clsx('px-4 py-2 text-[14px] font-semibold transition-colors duration-200 whitespace-nowrap', headerOnDarkHero ? 'text-slate-300 hover:text-white' : navLinkClass(pathname === '/about'))}>Hakkımızda</Link>
            <Link href="/insights" className={clsx('px-4 py-2 text-[14px] font-semibold transition-colors duration-200 whitespace-nowrap', headerOnDarkHero ? 'text-slate-300 hover:text-white' : navLinkClass(pathname === '/insights'))}>Teknoloji & Blog</Link>
            <Link href="/careers" className={clsx('px-4 py-2 text-[14px] font-semibold transition-colors duration-200 whitespace-nowrap', headerOnDarkHero ? 'text-slate-300 hover:text-white' : navLinkClass(pathname === '/careers'))}>Kariyer</Link>
            <Link href="/contact" className={clsx('px-4 py-2 text-[14px] font-semibold transition-colors duration-200 whitespace-nowrap', headerOnDarkHero ? 'text-slate-300 hover:text-white' : navLinkClass(pathname === '/contact'))}>İletişim</Link>
          </div>

          <div className="hidden shrink-0 items-center lg:flex">
            <Link
              href="/contact"
              className={clsx(
                'rounded-sm px-7 py-3 text-[14px] font-bold transition-colors duration-200',
                headerOnDarkHero ? 'bg-white text-black hover:bg-slate-200' : 'bg-black text-white hover:bg-slate-800'
              )}
            >
              Demo Talep Et
            </Link>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={clsx('rounded-md p-2 transition-colors', headerOnDarkHero ? 'text-white' : 'text-black')}
              aria-label="Menüyü aç"
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        <div className={clsx('absolute left-0 w-full overflow-y-auto bg-white shadow-2xl transition-all duration-300 lg:hidden', mobileOpen ? 'max-h-[85vh] border-b border-slate-200 opacity-100' : 'max-h-0 opacity-0')}>
          <div className="flex flex-col gap-2 px-4 py-6">
            <Link href="/" className="rounded-lg px-4 py-3 text-base font-semibold text-black hover:bg-slate-50" onClick={() => setMobileOpen(false)}>Ana Sayfa</Link>
            <div className="px-4 py-3">
              <Link href="/services" className="mb-4 block text-base font-semibold text-black" onClick={() => setMobileOpen(false)}>Çözümlerimiz</Link>
              <div className="flex flex-col gap-6 border-l-2 border-slate-100 pl-4">
                {menuData.map((section) => (
                  <div key={section.category}>
                    <span className="mb-3 flex items-center gap-2 text-[12px] font-bold uppercase tracking-widest text-slate-800">
                      <section.icon className="h-4 w-4" style={{ color: section.accent }} />
                      {section.category}
                    </span>
                    <div className="flex flex-col gap-1">
                      {section.items.map((item) => (
                        <Link key={item.href} href={item.href} className="rounded-lg px-3 py-2 text-[14px] font-medium text-slate-600 transition-colors hover:bg-slate-50 hover:text-black" onClick={() => setMobileOpen(false)}>
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Link href="/about" className="rounded-lg px-4 py-3 text-base font-semibold text-black hover:bg-slate-50" onClick={() => setMobileOpen(false)}>Hakkımızda</Link>
            <Link href="/insights" className="rounded-lg px-4 py-3 text-base font-semibold text-black hover:bg-slate-50" onClick={() => setMobileOpen(false)}>Teknoloji & Blog</Link>
            <Link href="/careers" className="rounded-lg px-4 py-3 text-base font-semibold text-black hover:bg-slate-50" onClick={() => setMobileOpen(false)}>Kariyer</Link>
            <Link href="/contact" className="rounded-lg px-4 py-3 text-base font-semibold text-black hover:bg-slate-50" onClick={() => setMobileOpen(false)}>İletişim</Link>
            <div className="mt-4 border-t border-slate-100 pb-4 pt-4">
              <Link href="/contact" className="flex justify-center rounded-lg bg-black px-4 py-3 text-base font-bold text-white" onClick={() => setMobileOpen(false)}>
                Demo Talep Et
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
