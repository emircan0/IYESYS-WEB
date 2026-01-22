// ========================================
// NAVBAR COMPONENT
// ========================================

'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Sun, Moon, Menu, X, Sparkles } from 'lucide-react'
import { useEffect, useState } from 'react'
import clsx from 'clsx'

export default function Navbar() {
  const pathname = usePathname()
  const [darkMode, setDarkMode] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Tema bilgisini localStorage'den al
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark')
      setDarkMode(true)
    }
    setMounted(true)
  }, [])

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Dark mod toggle
  const toggleDarkMode = () => {
    const html = document.documentElement
    if (html.classList.contains('dark')) {
      html.classList.remove('dark')
      localStorage.setItem('theme', 'light')
      setDarkMode(false)
    } else {
      html.classList.add('dark')
      localStorage.setItem('theme', 'dark')
      setDarkMode(true)
    }
  }

  const links = [
    { href: '/', label: 'Ana Sayfa' },
    { href: '/about', label: 'Hakkımızda' },
    { href: '/services', label: 'Çözümlerimiz' },
    { href: '/contact', label: 'İletişim' },
    { href: '/careers', label: 'Kariyer' },
    { href: '/references', label: '' },
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
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                IYESYS
              </span>
              <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                AI Solutions System
              </span>
            </div>
          </Link>

          {/* Masaüstü Menü */}
          <div className="hidden lg:flex items-center gap-1">
            {links.map(link => (
              <Link 
                key={link.href} 
                href={link.href}
                className={clsx(
                  'relative px-4 py-2 rounded-lg transition-all duration-300 font-medium',
                  pathname === link.href
                    ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30'
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                )}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></span>
                )}
              </Link>
            ))}
          </div>

          {/* Sağ Taraf Butonlar */}
          <div className="flex items-center gap-2">
            {/* Dark Mode Toggle */}
            <button 
              onClick={toggleDarkMode} 
              className="relative p-2.5 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 group overflow-hidden"
              aria-label="Dark mode toggle"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity"></div>
              {darkMode ? (
                <Sun size={20} className="text-yellow-500 relative z-10" />
              ) : (
                <Moon size={20} className="text-gray-700 dark:text-gray-300 relative z-10" />
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setMobileOpen(!mobileOpen)} 
              className="lg:hidden p-2.5 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
              aria-label="Menu toggle"
            >
              {mobileOpen ? (
                <X size={24} className="text-gray-700 dark:text-gray-300" />
              ) : (
                <Menu size={24} className="text-gray-700 dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobil Menü */}
        <div className={clsx(
          "lg:hidden overflow-hidden transition-all duration-300",
          mobileOpen ? "max-h-96 pb-6" : "max-h-0"
        )}>
          <div className="flex flex-col gap-2 pt-4 border-t border-gray-200 dark:border-gray-800">
            {links.map(link => (
              <Link 
                key={link.href} 
                href={link.href}
                className={clsx(
                  'px-4 py-3 rounded-xl transition-all duration-300 font-medium',
                  pathname === link.href
                    ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                )}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
