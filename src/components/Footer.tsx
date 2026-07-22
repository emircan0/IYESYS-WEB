'use client'

import Link from 'next/link'
import { Mail, MapPin, ArrowRight } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-12">
          
          {/* Brand & Address (Takes 4 columns) */}
          <div className="lg:col-span-4">
            <span className="text-2xl font-bold tracking-widest block mb-6">IYESYS</span>
            <p className="text-slate-400 text-sm leading-relaxed font-light mb-8 max-w-sm">
              Yapay zeka ve ileri teknoloji ile işletmenizi geleceğe taşıyoruz.
              Güvenli, verimli ve akıllı endüstriyel güvenlik çözümleri sunuyoruz.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-slate-400 flex-shrink-0" />
                <a href="mailto:info@iyesys.com" className="text-slate-300 hover:text-white transition-colors">
                  info@iyesys.com
                </a>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <MapPin className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300">İstanbul, Türkiye</span>
              </div>
            </div>
          </div>

          {/* Çözümler (Takes 2 columns) */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-6 text-slate-500">Çözümler</h3>
            <ul className="space-y-4">
              <li><Link href="/services" className="text-slate-300 hover:text-white transition-colors text-sm font-light">Hareketli Ekipman</Link></li>
              <li><Link href="/services" className="text-slate-300 hover:text-white transition-colors text-sm font-light">Alan Kontrolü</Link></li>
              <li><Link href="/services" className="text-slate-300 hover:text-white transition-colors text-sm font-light">Aktif Uyarılar</Link></li>
            </ul>
          </div>

          {/* Şirket (Takes 2 columns) */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-6 text-slate-500">Şirket</h3>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-slate-300 hover:text-white transition-colors text-sm font-light">Hakkımızda</Link></li>
              <li><Link href="/careers" className="text-slate-300 hover:text-white transition-colors text-sm font-light">Kariyer</Link></li>
              <li><Link href="/contact" className="text-slate-300 hover:text-white transition-colors text-sm font-light">İletişim</Link></li>
            </ul>
          </div>

          {/* Newsletter (Takes 3 columns) */}
          <div className="lg:col-span-3 lg:col-start-10">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-6 text-slate-500">
              Bülten Aboneliği
            </h3>
            <p className="text-sm text-slate-400 mb-6 font-light leading-relaxed">
              İş güvenliği trendleri ve son gelişmelerden haberdar olmak için e-posta listemize katılın.
            </p>
            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="E-posta adresiniz"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-sm text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-white transition-colors"
              />
              <button className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-white hover:bg-slate-200 rounded-sm text-black text-sm font-semibold transition-colors duration-200">
                Abone Ol
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Legal Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/10">
          <p className="text-xs text-slate-500 font-light">
            © {currentYear} IYESYS AI Solutions. Tüm hakları saklıdır.
          </p>
          <div className="flex gap-6 text-xs font-light">
            <Link href="/privacy" className="text-slate-500 hover:text-white transition-colors">Gizlilik Politikası</Link>
            <Link href="/terms" className="text-slate-500 hover:text-white transition-colors">Kullanım Şartları</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}