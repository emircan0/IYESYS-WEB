'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown, Car, ShieldCheck, Warehouse, ArrowRight, Zap } from 'lucide-react'
import { useEffect, useState } from 'react'
import clsx from 'clsx'

export default function Navbar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Alt menü verileri
  const solutions = [
    {
      category: 'Güvenlik Çözümleri',
      items: [
        {
          href: '/services/forklift-safety',
          label: 'Hareketli Ekipman - Yaya Güvenliği',
          desc: 'Hareketli ekipman ve yaya çarpışma önleme',
          icon: <Car className="w-5 h-5" />
        },
        {
          href: '/services/area-safety',
          label: 'Bölge Yaya Güvenliği',
          desc: 'Kavşak ve yasaklı alan kontrolü',
          icon: <ShieldCheck className="w-5 h-5" />
        },
        {
          href: '/services/dock-safety',
          label: 'Yükleme Rampası Güvenliği',
          desc: 'TIR ve rampa operasyon yönetimi',
          icon: <Warehouse className="w-5 h-5" />
        },
      ]
    },
    {
      category: 'Diğer Çözümler',
      items: [
        {
          href: '/services/custom-solutions',
          label: 'İşletmelere Özel Çözümler',
          desc: 'IoT ve AI destekli saha yönetimi',
          icon: <Zap className="w-5 h-5" />
        },
        {
          href: '/services/warning-systems',
          label: 'Aktif Uyarı Sistemleri',
          desc: 'Sesli ve görsel aktif ikazlar',
          icon: <Zap className="w-5 h-5" />
        },
      ]
    }
  ]

  const navLinkClass = (active: boolean) =>
    clsx(
      'px-4 py-2 rounded-lg font-medium transition-all hover:text-blue-300',
      active ? 'text-blue-300' : 'text-slate-200'
    )

  return (
    <nav className={clsx(
      "bg-[#0b1324]/95 text-white backdrop-blur-xl fixed top-0 left-0 w-full z-50 border-b border-white/10 transition-all duration-300",
      scrolled ? "shadow-lg shadow-black/25" : "shadow-md shadow-black/10"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-400/10 rounded-full blur-xl opacity-80 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative p-1 overflow-hidden flex items-center">
                <img
                  src="/img/11.png"
                  alt="IYESYS Logo"
                  className="h-26 w-auto object-contain relative z-10"
                />
              </div>
            </div>
          </Link>

          {/* Masaüstü Menü */}
          <div className="hidden lg:flex items-center gap-1">
            <Link href="/" className={navLinkClass(pathname === '/')}>Ana Sayfa</Link>
            <Link href="/about" className={navLinkClass(pathname === '/about')}>Hakkımızda</Link>

            {/* Çözümlerimiz Dropdown */}
            <div className="relative group px-4 py-2 cursor-pointer">
              <Link href="/services" className={clsx(
                "flex items-center gap-1 font-medium transition-all group-hover:text-blue-300",
                pathname.startsWith('/services') ? "text-blue-300" : "text-slate-200"
              )}>
                Çözümlerimiz <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
              </Link>

              {/* Dropdown Content */}
              <div className="absolute left-1/2 mt-2 w-[620px] max-w-[calc(100vw-2rem)] -translate-x-1/2 translate-y-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300">
                <div className="bg-[#101a2d]/95 rounded-2xl shadow-2xl border border-white/10 p-5 overflow-hidden">
                  <div className="grid grid-cols-[1.15fr_0.85fr] gap-5">
                    {solutions.map((section, sectionIndex) => (
                      <div
                        key={section.category}
                        className={clsx("min-w-0", sectionIndex > 0 && "border-l border-white/10 pl-5")}
                      >
                        <h3 className="text-xs font-bold text-blue-300 uppercase tracking-widest mb-4">
                          {section.category}
                        </h3>
                        <div className="grid gap-2">
                          {section.items.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="flex flex-col gap-1 p-2 rounded-xl hover:bg-white/10 transition-colors group/item"
                            >
                              <div className="text-sm font-bold text-white group-hover/item:text-blue-300 transition-colors">
                                {item.label}
                              </div>
                              <div className="text-[11px] text-slate-400 leading-tight">
                                {item.desc}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-white/10 mt-6 pt-4">
                    <Link href="/services" className="text-xs font-bold text-blue-300 hover:underline flex items-center gap-1">
                      Tüm Çözümleri Gör <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Link href="/contact" className={navLinkClass(pathname === '/contact')}>İletişim</Link>
            <Link href="/careers" className={navLinkClass(pathname === '/careers')}>Kariyer</Link>
          </div>

          {/* Sağ Taraf Butonlar */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-xl bg-white/10 text-white border border-white/10 hover:bg-white/15 transition-colors"
              aria-label="Toggle Mobile Menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobil Menü */}
        <div className={clsx("lg:hidden overflow-hidden transition-all duration-300", mobileOpen ? "max-h-[1000px] pb-6" : "max-h-0")}>
          <div className="flex flex-col gap-2 pt-4 border-t border-white/10">
            <Link href="/" className="px-4 py-3 font-medium text-slate-100 hover:text-blue-300" onClick={() => setMobileOpen(false)}>Ana Sayfa</Link>
            <Link href="/about" className="px-4 py-3 font-medium text-slate-100 hover:text-blue-300 border-t border-white/10 mt-2" onClick={() => setMobileOpen(false)}>Hakkımızda</Link>
            
            <Link
              href="/services"
              className="px-4 py-2 font-bold text-xs uppercase text-slate-400 hover:text-blue-300 tracking-widest mt-2 border-t border-white/10 pt-4"
              onClick={() => setMobileOpen(false)}
            >
              Çözümlerimiz
            </Link>
            
            {solutions.map(section => (
              <div key={section.category} className="px-4 py-2">
                <div className="text-[10px] font-bold text-blue-300 uppercase mb-2 ml-2">{section.category}</div>
                {section.items.map(link => (
                  <Link key={link.href} href={link.href} className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white flex items-center gap-2" onClick={() => setMobileOpen(false)}>
                    {link.icon} {link.label}
                  </Link>
                ))}
              </div>
            ))}

            <Link href="/contact" className="px-4 py-3 font-medium text-slate-100 hover:text-blue-300 border-t border-white/10 mt-2" onClick={() => setMobileOpen(false)}>İletişim</Link>
            <Link href="/careers" className="px-4 py-3 font-medium text-slate-100 hover:text-blue-300" onClick={() => setMobileOpen(false)}>Kariyer</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
