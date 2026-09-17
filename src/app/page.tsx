import HeroSection from '../components/HeroSection'
import SolutionsPortfolio from '../components/SolutionsPortfolio'
import SeoContentSection from '../components/SeoContentSection'
import { getPublishedMenu } from '../lib/menu'

export const revalidate = 60

export default async function Home() {
  const { categories, items } = await getPublishedMenu()

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <HeroSection />
      <SolutionsPortfolio
        items={items}
        categories={categories}
        badge="Çözümlerimiz"
        title="Güvenlikten verimliliğe, sahada karşılığı olan çözümler"
        description="IYESYS; iş güvenliği kamera sistemlerinden üretim verimliliğine, otomasyondan özel yazılıma kadar sahada karşılığı olan çözümler geliştirir. İhtiyacınıza en uygun kategoriyi seçin."
      />
      <SeoContentSection />
    </div>
  )
}
