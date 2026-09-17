import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { getPublishedMenu } from '@/lib/menu'

export const revalidate = 60

// Only reached for items that don't have a dedicated static page under
// src/app/services/<slug>/ (Next.js matches those first) - i.e. solutions
// added from the panel that haven't gotten a full custom detail page yet.
// Renders a simple page from the panel's title/description/image so the
// link never 404s; a developer can still add a richer static page later.

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const { items } = await getPublishedMenu()
  const item = items.find((i) => i.href === `/services/${slug}`)

  if (!item) return { title: 'Çözüm Bulunamadı | IYESYS' }

  return {
    title: `${item.title} | IYESYS`,
    description: item.desc,
  }
}

export default async function ServiceItemPage({ params }: Props) {
  const { slug } = await params
  const { items } = await getPublishedMenu()
  const item = items.find((i) => i.href === `/services/${slug}`)

  if (!item) notFound()

  return (
    <div className="min-h-screen bg-white pt-32 pb-24 text-slate-950">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-black"
        >
          <ArrowLeft className="h-4 w-4" />
          Tüm Çözümler
        </Link>

        <span
          className="mt-6 inline-flex items-center rounded-full px-3 py-1 text-[11px] font-black uppercase tracking-[0.16em]"
          style={{ backgroundColor: `${item.accent}18`, color: item.accent }}
        >
          {item.categoryLabel}
        </span>

        <h1 className="mt-4 text-3xl font-black leading-tight tracking-tight sm:text-5xl">{item.title}</h1>
        <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">{item.desc}</p>

        <div className="relative mt-10 aspect-[16/9] w-full overflow-hidden rounded-xl border border-slate-200">
          <Image src={item.image} alt={item.title} fill className="object-cover" />
        </div>

        <div className="mt-12 rounded-xl border border-slate-200 bg-slate-50 p-8 text-center">
          <h2 className="text-xl font-black">Bu çözüm hakkında daha fazla bilgi alın</h2>
          <p className="mt-2 text-sm text-slate-600">
            Sahanıza özel uygulanabilirliği birlikte değerlendirelim.
          </p>
          <Link
            href="/contact"
            className="mt-5 inline-flex items-center gap-2 rounded-lg bg-black px-6 py-3 text-sm font-black text-white transition hover:bg-slate-800"
          >
            Demo Talep Et
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
