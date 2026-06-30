'use client'

import HeroSection from '../components/HeroSection'
import ServicesSection from '../components/ServicesSection'
import SeoContentSection from '../components/SeoContentSection'
import FAQSection from '../components/FAQSection'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
      <HeroSection />
      <ServicesSection />
      <SeoContentSection />
      <FAQSection />
    </div>
  )
}
