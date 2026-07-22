import type { Metadata } from 'next'
import ServiceDetailPage from '@/components/ServiceDetailPage'
import { serviceDetailContent } from '@/lib/serviceDetailContent'

const page = serviceDetailContent['warning-systems']

export const metadata: Metadata = {
  title: `${page.title} | IYESYS`,
  description: page.description,
}

export default function Page() {
  return <ServiceDetailPage page={page} />
}
