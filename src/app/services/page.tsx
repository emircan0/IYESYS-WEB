import Link from 'next/link'
import { ArrowRight, Factory } from 'lucide-react'
import ServicesSection from '@/components/ServicesSection'
import SolutionsPortfolio from '@/components/SolutionsPortfolio'
import { getPublishedMenu } from '@/lib/menu'

export const revalidate = 60

export default async function ServicesPage() {
  const { categories, items } = await getPublishedMenu()

  return (
    <div className="min-h-screen bg-white text-slate-950">
      <ServicesSection items={items} categories={categories} />

      <SolutionsPortfolio
        items={items}
        categories={categories}
        badge="Çözüm Portföyü"
        title="Sahada ölçülebilir sonuç üreten çözüm portföyü"
        description="İşletmenizdeki riskleri, verimlilik kayıplarını, otomasyon eksiklerini ve dijital takip ihtiyacını doğru başlık altında değerlendirin. Her çözüm sayfası; ne işe yaradığını, hangi sahalarda kullanıldığını ve nasıl devreye alınabileceğini anlaşılır bir dille açıklar."
      />

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-lg border border-slate-200 bg-slate-950 p-8 text-white shadow-2xl sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center lg:p-12">
          <div className="flex items-start gap-5">
            <div className="hidden h-12 w-12 items-center justify-center rounded-lg bg-white/10 text-white sm:flex">
              <Factory className="h-6 w-6" />
            </div>
            <div>
              <span className="text-xs font-black uppercase tracking-[0.18em] text-slate-300">Sahaya özel kurgu</span>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
                Hangi çözümden başlayacağınızı birlikte netleştirelim.
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-8 text-slate-300">
                Kamera altyapınız, otomasyon seviyeniz, üretim akışınız ve öncelikli riskleriniz üzerinden en doğru ilk adımı çıkaralım.
              </p>
            </div>
          </div>
          <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-4 text-sm font-black text-slate-950 transition hover:-translate-y-0.5 hover:bg-slate-200">
            Demo Talep Et
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
