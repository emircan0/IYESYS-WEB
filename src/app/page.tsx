'use client'

import HeroSection from '../components/HeroSection'
import ServicesSection from '../components/ServicesSection'
import ReferencesSection from '../components/ReferencesSection'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
      <HeroSection />
      <ServicesSection />
      
    </div>
  )
}
