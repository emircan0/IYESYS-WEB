import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Endüstriyel Güvenlik, Otomasyon ve Yapay Zeka Çözümleri | IYESYS',
  description:
    'IYESYS çözümleri; iş güvenliği kamera sistemi, forklift yaya güvenliği, PLC SCADA otomasyon, üretim verimliliği, kalite kontrol, araç takip ve özel yazılım çözümlerini kapsar.',
  keywords: [
    'iş güvenliği çözümleri',
    'yapay zeka kamera sistemi',
    'forklift yaya güvenliği',
    'PLC SCADA otomasyon',
    'üretim verimliliği',
    'kalite kontrol sistemi',
    'araç takip sistemi',
    'özel yazılım geliştirme',
    'İSG kamera sistemi',
    'endüstriyel otomasyon',
  ],
}

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children
}
