// src/app/layout.tsx
import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Yapay Zeka Çözümleri - Kurumsal Site',
  description: 'Endüstriyel IoT ve yapay zeka çözümleri sunan kurumsal web sitesi',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body className="bg-gray-50 text-gray-900" suppressHydrationWarning={true}>
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
