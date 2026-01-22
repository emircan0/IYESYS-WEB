'use client'

import Link from 'next/link'
import { Facebook, Linkedin, Twitter, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Üst Bölüm */}
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          
          {/* Şirket Bilgisi */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              AI Kamera Sistemleri
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-sm leading-relaxed">
              En son teknoloji yapay zeka ve kamera çözümleri ile işletmenizi güçlendirin. 
              Güvenli ve verimli bir ortam yaratın.
            </p>
          </div>

          {/* Hızlı Linkler ve Sosyal Medya */}
          <div className="flex-1 flex flex-col sm:flex-row justify-between gap-12">
            
            {/* Hızlı Linkler */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Hızlı Linkler
              </h3>
              <ul className="grid grid-cols-2 sm:block gap-2">
                {[
                  { href: '/', label: 'Ana Sayfa' },
                  { href: '/about', label: 'Hakkımızda' },
                  { href: '/services', label: 'Hizmetler' },
                  { href: '/products', label: 'Ürünler' },
                  { href: '/contact', label: 'İletişim' },
                ].map(link => (
                  <li key={link.href}>
                    <Link 
                      href={link.href} 
                      className="hover:text-blue-600 dark:hover:text-blue-400 transition"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sosyal Medya */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Bizi Takip Edin
              </h3>
              <div className="flex gap-4">
                {[ 
                  { icon: Facebook, href: '#' },
                  { icon: Linkedin, href: '#' },
                  { icon: Twitter, href: '#' },
                  { icon: Instagram, href: '#' },
                ].map(({ icon: Icon, href }, i) => (
                  <Link key={i} href={href} 
                    className="p-2 rounded-full hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 transition">
                    <Icon size={20} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Alt Bölüm */}
        <div className="border-t border-gray-300 dark:border-gray-700 mt-12 pt-6 text-center text-sm text-gray-600 dark:text-gray-400">
          &copy; {new Date().getFullYear()} IYESYS AI Solutions System. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  )
}
