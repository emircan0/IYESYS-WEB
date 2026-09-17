import HeroSection from '../components/HeroSection'
import HomeSolutionsGrid from '../components/HomeSolutionsGrid'
import SeoContentSection from '../components/SeoContentSection'
import { getPublishedMenu } from '../lib/menu'

export const revalidate = 60

export default async function Home() {
  const { categories, items } = await getPublishedMenu()

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <HeroSection />
      <HomeSolutionsGrid categories={categories} items={items} />
      <SeoContentSection />
    </div>
  )
}
