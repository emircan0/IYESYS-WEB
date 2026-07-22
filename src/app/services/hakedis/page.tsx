import type { Metadata } from 'next'
import ServiceDetailPage from '@/components/ServiceDetailPage'
import { serviceDetailContent } from '@/lib/serviceDetailContent'
import { getServiceSeo } from '@/lib/serviceSeo'

const page = serviceDetailContent.hakedis
const seo = getServiceSeo(page.title)

export const metadata: Metadata = {
  title: `${page.title} | IYESYS`,
  description: page.description,
  keywords: seo.keywords,
  alternates: { canonical: '/services/hakedis' },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: '/services/hakedis',
    siteName: 'IYESYS',
    title: `${page.title} | IYESYS`,
    description: page.description,
    images: [{
      url: '/img/service-detail/hakedis-operasyon-yonetimi.png',
      width: 1672,
      height: 941,
      alt: 'IYESYS hakediş ve saha operasyon yönetimi',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${page.title} | IYESYS`,
    description: page.description,
    images: ['/img/service-detail/hakedis-operasyon-yonetimi.png'],
  },
}

export default function Page() {
  return <ServiceDetailPage page={page} />
}
