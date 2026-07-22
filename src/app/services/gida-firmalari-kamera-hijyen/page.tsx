import type { Metadata } from 'next'
import ServiceDetailPage from '@/components/ServiceDetailPage'
import { serviceDetailContent } from '@/lib/serviceDetailContent'
import { getServiceSeo } from '@/lib/serviceSeo'

const page = serviceDetailContent['gida-firmalari-kamera-hijyen']
const seo = getServiceSeo(page.title)

export const metadata: Metadata = {
  title: `${page.title} | IYESYS`,
  description: page.description,
  keywords: seo.keywords,
}

export default function Page() {
  return <ServiceDetailPage page={page} />
}
