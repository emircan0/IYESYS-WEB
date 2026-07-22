import type { Metadata } from 'next'
import ServiceDetailPage from '@/components/ServiceDetailPage'
import { serviceDetailContent } from '@/lib/serviceDetailContent'
import { getServiceSeo } from '@/lib/serviceSeo'

const page = serviceDetailContent['urun-gelistirme']
const seo = getServiceSeo(page.title)

export const metadata: Metadata = {
  title: `${page.title} | IYESYS`,
  description: page.description,
  keywords: seo.keywords,
  alternates: { canonical: '/services/urun-gelistirme' },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: '/services/urun-gelistirme',
    siteName: 'IYESYS',
    title: `${page.title} | IYESYS`,
    description: page.description,
    images: [{ url: '/og-solutions.png', width: 1731, height: 909, alt: 'IYESYS Ar-Ge, ürün geliştirme ve filo yönetimi çözümleri' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${page.title} | IYESYS`,
    description: page.description,
    images: ['/og-solutions.png'],
  },
}

export default function Page() {
  return <ServiceDetailPage page={page} />
}
