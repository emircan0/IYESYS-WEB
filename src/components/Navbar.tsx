'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Sun, Moon, Menu, X, ChevronDown, Car, ShieldCheck, Warehouse } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import clsx from 'clsx'

export default function Navbar() {
  const pathname = usePathname()
  const { theme, resolvedTheme, setTheme } = useTheme()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleDarkMode = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }

  // Alt menü verileri
  const solutionLinks = [
    {
      href: '/services/forklift-safety',
      label: 'Forklift - Yaya Güvenliği',
      desc: 'AI & UWB tabanlı çarpışma önleme',
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

  if (!mounted) return null

  return (
    <nav className={clsx(
      "bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl fixed top-0 left-0 w-full z-50 transition-all duration-300",
      scrolled ? "shadow-lg border-b border-gray-200/50 dark:border-gray-800/50" : "shadow-md"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="relative">
              {/* Daha beyaz/açık tonlu ışık patlaması */}
              <div className="absolute inset-0 bg-white/10 dark:bg-white/10 rounded-full blur-xl opacity-80 group-hover:opacity-100 transition-opacity"></div>

              {/* Logo Görseli (Metin içeren yatay formata uygun boyutlandırıldı) */}
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
            <Link href="/" className={clsx('px-4 py-2 rounded-lg font-medium transition-all', pathname === '/' ? 'text-blue-600' : 'text-gray-700 dark:text-gray-300')}>Ana Sayfa</Link>
            <Link href="/about" className={clsx('px-4 py-2 rounded-lg font-medium transition-all', pathname === '/about' ? 'text-blue-600' : 'text-gray-700 dark:text-gray-300')}>Hakkımızda</Link>

            {/* Çözümlerimiz Dropdown */}
            <div className="relative group px-4 py-2 cursor-pointer">
              <div className={clsx(
                "flex items-center gap-1 font-medium transition-all group-hover:text-blue-600",
                pathname.startsWith('/services') ? "text-blue-600" : "text-gray-700 dark:text-gray-300"
              )}>
                Çözümlerimiz <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
              </div>

              {/* Dropdown Content */}
              <div className="absolute left-0 mt-2 w-80 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700 p-4 overflow-hidden">
                  <div className="grid gap-2">
                    {solutionLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-start gap-4 p-3 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors group/item"
                      >
                        <div className="bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-300 p-2 rounded-lg group-hover/item:scale-110 transition-transform">
                          {item.icon}
                        </div>
                        <div>
                          <div className="text-sm font-bold text-gray-900 dark:text-white">{item.label}</div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">{item.desc}</div>
                        </div>
                      </Link>
                    ))}
                    <div className="border-t border-gray-100 dark:border-gray-700 mt-2 pt-2">
                      <Link href="/services" className="text-xs font-bold text-blue-600 px-3 hover:underline">Tümünü Gör →</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Link href="/contact" className={clsx('px-4 py-2 rounded-lg font-medium transition-all', pathname === '/contact' ? 'text-blue-600' : 'text-gray-700 dark:text-gray-300')}>İletişim</Link>
            <Link href="/careers" className={clsx('px-4 py-2 rounded-lg font-medium transition-all', pathname === '/careers' ? 'text-blue-600' : 'text-gray-700 dark:text-gray-300')}>Kariyer</Link>
          </div>

          {/* Sağ Taraf Butonlar */}
          <div className="flex items-center gap-2">
            {/* Theme Toggle 
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {resolvedTheme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>   */}

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle Mobile Menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobil Menü */}
        <div className={clsx("lg:hidden overflow-hidden transition-all duration-300", mobileOpen ? "max-h-[500px] pb-6" : "max-h-0")}>
          <div className="flex flex-col gap-2 pt-4 border-t border-gray-200 dark:border-gray-800">
            <Link href="/" className="px-4 py-3 font-medium text-gray-800 dark:text-gray-200" onClick={() => setMobileOpen(false)}>Ana Sayfa</Link>
            <div className="px-4 py-2 font-bold text-xs uppercase text-gray-400 tracking-widest mt-2 border-t border-gray-100 dark:border-gray-800 pt-4">Çözümlerimiz</div>
            {solutionLinks.map(link => (
              <Link key={link.href} href={link.href} className="px-8 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 flex items-center gap-2" onClick={() => setMobileOpen(false)}>
                {link.icon} {link.label}
              </Link>
            ))}
            <Link href="/about" className="px-4 py-3 font-medium text-gray-800 dark:text-gray-200 border-t border-gray-100 dark:border-gray-800 mt-2" onClick={() => setMobileOpen(false)}>Hakkımızda</Link>
            <Link href="/contact" className="px-4 py-3 font-medium text-gray-800 dark:text-gray-200" onClick={() => setMobileOpen(false)}>İletişim</Link>
            <Link href="/careers" className="px-4 py-3 font-medium text-gray-800 dark:text-gray-200" onClick={() => setMobileOpen(false)}>Kariyer</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}