
// ========================================
// FOOTER COMPONENT
// ========================================

'use client'

import Link from 'next/link'
import { Facebook, Linkedin, Twitter, Instagram, Mail, Phone, MapPin, ArrowRight, Sparkles } from 'lucide-react'
import clsx from 'clsx'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { href: '/', label: 'Ana Sayfa' },
    { href: '/about', label: 'Hakkımızda' },
    { href: '/services', label: 'Çözümlerimiz' },
    { href: '/contact', label: 'İletişim' },
    { href: '/careers', label: 'Kariyer' },
    { href: '/references', label: 'Referanslar' },
  ]

  const services = [
    { href: '/services#ai-camera', label: 'AI Kamera Sistemleri' },
    { href: '/services#data-analysis', label: 'Veri Analizi' },
    { href: '/services#automation', label: 'Endüstriyel Otomasyon' },
    { href: '/services#consulting', label: 'Danışmanlık' },
  ]

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:bg-blue-600' },
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:bg-blue-700' },
    { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:bg-sky-500' },
    { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:bg-pink-600' },
  ]

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 text-gray-300">
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Şirket Bilgisi */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur-lg opacity-50"></div>
                <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
              </div>
              <span className="text-2xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                IYESYS
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Yapay zeka ve ileri teknoloji ile işletmenizi geleceğe taşıyoruz. 
              Güvenli, verimli ve akıllı çözümler sunuyoruz.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-blue-400" />
                <a href="mailto:info@iyesys.com" className="hover:text-blue-400 transition-colors">
                  info@iyesys.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-blue-400" />
                <a href="tel:+905001234567" className="hover:text-blue-400 transition-colors">
                  +90 500 123 45 67
                </a>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <MapPin className="w-4 h-4 text-blue-400 mt-0.5" />
                <span className="text-gray-400">
                  İstanbul, Türkiye
                </span>
              </div>
            </div>
          </div>

          {/* Hızlı Linkler */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></span>
              Hızlı Linkler
            </h3>
            <ul className="space-y-3">
              {quickLinks.map(link => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="group flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-all duration-300"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hizmetler */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-purple-600 to-pink-600 rounded-full"></span>
              Hizmetlerimiz
            </h3>
            <ul className="space-y-3">
              {services.map(service => (
                <li key={service.href}>
                  <Link 
                    href={service.href} 
                    className="group flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-all duration-300"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    <span>{service.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sosyal Medya & Newsletter */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-pink-600 to-red-600 rounded-full"></span>
              Bizi Takip Edin
            </h3>
            <div className="flex gap-3 mb-6">
              {socialLinks.map(({ icon: Icon, href, label, color }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className={clsx(
                    "p-3 rounded-xl bg-gray-800 hover:text-white transition-all duration-300 transform hover:scale-110 hover:-translate-y-1",
                    color
                  )}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>

            {/* Newsletter */}
            <div className="mt-8">
              <h4 className="text-sm font-semibold text-white mb-3">Bülten Aboneliği</h4>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="E-posta adresiniz"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm focus:outline-none focus:border-blue-500 transition-colors"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white font-medium hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400 text-center md:text-left">
              © {currentYear} <span className="font-semibold text-white">IYESYS</span> AI Solutions System. Tüm hakları saklıdır.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-blue-400 transition-colors">
                Gizlilik Politikası
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-blue-400 transition-colors">
                Kullanım Şartları
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
    </footer>
  )
}