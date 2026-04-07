// src/app/layout.tsx
import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { LanguageProvider } from '../contexts/LanguageContext'
import { ThemeProvider } from '../components/ThemeProvider'
import { Analytics } from "@vercel/analytics/next"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'IYESYS - Yapay Zeka ile Endüstriyel Güvenlik Çözümleri',
  description: 'AI Kamera Sistemleri, UWB Teknolojisi ve IoT çözümleri ile endüstriyel güvenliği artırın. Forklift güvenliği, düşme algılama ve akıllı yükleme rampası sistemleri.',
  keywords: 'yapay zeka, endüstriyel güvenlik, AI kamera, forklift güvenliği, UWB teknoloji, IoT çözümleri',
  authors: [{ name: 'IYESYS' }],
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://iyesys.com.tr',
    siteName: 'IYESYS',
    title: 'IYESYS - Yapay Zeka ile Endüstriyel Güvenlik',
    description: 'Endüstriyel güvenliği sağlamak için yapay zeka teknolojisi',
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className="scroll-smooth" suppressHydrationWarning>
      <body className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 antialiased" suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <LanguageProvider>
            <div className="flex flex-col min-h-screen">
              <Navbar />
              <main className="flex-1 pt-16">{children}</main>
              <Footer />
            </div>
            <Analytics />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}