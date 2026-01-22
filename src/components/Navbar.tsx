'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Sun, Moon, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const pathname = usePathname()
  const [darkMode, setDarkMode] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('theme') === 'dark') {
      document.documentElement.classList.add('dark')
      setDarkMode(true)
    }
  }, [])

  const toggleDarkMode = () => {
    const html = document.documentElement
    if (darkMode) {
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
  { href: '/services', label: 'Hizmetler' },
  { href: '/products', label: 'Ürünler' },
  { href: '/contact', label: 'İletişim' },
  { href: '/careers', label: 'Kariyer' },        // ✅ Yeni
  { href: '/references', label: 'Referanslar' }, // ✅ Yeni
]


  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md fixed top-0 left-0 w-full z-50 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        
        {/* Logo */}
<Link href="/" className="flex items-center gap-2">
  <span className="text-3xl font-extrabold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition">
    IYESYS
  </span>
  <span className="text-sm font-medium text-gray-500 dark:text-gray-300">
    AI Solutions System
  </span>
</Link>


        {/* Masaüstü Menü */}
        <div className="hidden md:flex gap-8">
          {links.map(link => (
            <Link 
              key={link.href} 
              href={link.href}
              className={`relative transition px-1 py-1 ${
                pathname === link.href 
                  ? 'text-blue-600 dark:text-blue-400 font-semibold' 
                  : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              {link.label}
              {pathname === link.href && (
                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-blue-600 dark:bg-blue-400 rounded-full"></span>
              )}
            </Link>
          ))}
        </div>

        {/* Sağ Taraf Butonlar */}
        <div className="flex items-center gap-4">
          {/* Dark Mode */}
          <button 
            onClick={toggleDarkMode} 
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            aria-label="Dark mode toggle"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Mobil Menü Toggle */}
          <button 
            onClick={() => setMobileOpen(!mobileOpen)} 
            className="md:hidden p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            aria-label="Menu toggle"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobil Menü */}
      {mobileOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-lg animate-slideDown">
          <div className="flex flex-col p-4 space-y-4">
            {links.map(link => (
              <Link 
                key={link.href} 
                href={link.href}
                className={`transition px-2 py-2 rounded-md ${
                  pathname === link.href 
                    ? 'text-blue-600 dark:text-blue-400 font-semibold bg-gray-100 dark:bg-gray-800' 
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobil Dark Mode Toggle */}
            <button 
              onClick={toggleDarkMode} 
              className="flex items-center gap-2 mt-4 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              <span className="text-gray-700 dark:text-gray-300">
                {darkMode ? 'Açık Tema' : 'Koyu Tema'}
              </span>
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
