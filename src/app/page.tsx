'use client'

import HeroSection from '../components/HeroSection'
import HomeSolutionsGrid from '../components/HomeSolutionsGrid'
import SeoContentSection from '../components/SeoContentSection'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <HeroSection />
      <HomeSolutionsGrid />
      <SeoContentSection />
    </div>
  )
}
