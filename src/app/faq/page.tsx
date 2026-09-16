import { Metadata } from 'next'
import { getPublishedFaqs } from '@/lib/faqs'
import FAQSection from '@/components/FAQSection'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Sıkça Sorulan Sorular | IYESYS',
  description: 'IYESYS çözümleri, yapay zeka entegrasyonları, donanım uyumluluğu ve operasyonel işleyiş hakkında sıkça sorulan sorular.',
  openGraph: {
    title: 'Sıkça Sorulan Sorular | IYESYS',
    description: 'IYESYS çözümleri, yapay zeka entegrasyonları, donanım uyumluluğu ve operasyonel işleyiş hakkında sıkça sorulan sorular.',
  },
}

export default async function FaqPage() {
  const faqs = await getPublishedFaqs()

  return (
    <div className="min-h-screen bg-white pt-32">
      <FAQSection faqs={faqs} />
    </div>
  )
}
