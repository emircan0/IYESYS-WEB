// src/app/layout.tsx
import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { LanguageProvider } from '../contexts/LanguageContext'
import { ThemeProvider } from '../components/ThemeProvider'
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Yapay Zeka Destekli İSG ve Forklift Kazası Önleme Sistemleri | IYESYS',
  description: 'IYESYS, fabrikalar ve endüstriyel sahalar için yapay zeka destekli iş güvenliği, forklift kazası önleme, yaya algılama ve İSG kamera sistemleri geliştirir.',
  keywords: 'Yapay Zeka, İş Sağlığı ve Güvenliği, İSG, IoT İş Kazaları ve Güvenliği, İş Kazası Önleme Sistemleri, Forklift Kaza Sistemleri, Forklift Yavaşlatma Sistemleri, Forklift Kamera Sistemleri, İş Güvenliği Yapay Zeka, Fabrika İş Kazası Önleyici',
  authors: [{ name: 'IYESYS' }],
  icons: {
    icon: [
      { url: '/favicon.ico?v=2', sizes: 'any' },
      { url: '/favicon-32x32.png?v=2', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-16x16.png?v=2', type: 'image/png', sizes: '16x16' },
      { url: '/icon-192.png?v=2', type: 'image/png', sizes: '192x192' },
      { url: '/icon-512.png?v=2', type: 'image/png', sizes: '512x512' },
    ],
    apple: [
      { url: '/apple-touch-icon.png?v=2', type: 'image/png', sizes: '180x180' },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://iyesys.com',
    siteName: 'IYESYS',
    title: 'Yapay Zeka Destekli İSG ve Forklift Kazası Önleme Sistemleri | IYESYS',
    description: 'IYESYS, fabrikalar ve endüstriyel sahalar için yapay zeka destekli iş güvenliği ve forklift kazası önleme sistemleri geliştirir.',
  }
}

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f9fafb' },
    { media: '(prefers-color-scheme: dark)', color: '#111827' }
  ],
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
            <SpeedInsights />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
