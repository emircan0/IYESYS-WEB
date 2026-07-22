'use client'

import HeroSection from '../components/HeroSection'
import HomeSolutionsGrid from '../components/HomeSolutionsGrid'
import SeoContentSection from '../components/SeoContentSection'
import FAQSection from '../components/FAQSection'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <HeroSection />
      <HomeSolutionsGrid />
      <SeoContentSection />
      <FAQSection />
    </div>
  )
}
