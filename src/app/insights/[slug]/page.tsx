import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { getAllArticles, getArticleBySlug } from '@/lib/articles'

interface ArticlePageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const articles = getAllArticles()
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params
  const article = await getArticleBySlug(slug)

  if (!article) {
    return {
      title: 'Yazı Bulunamadı | IYESYS',
    }
  }

  return {
    title: `${article.title} | IYESYS Teknoloji & Blog`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: article.image ? [{ url: article.image }] : undefined,
    },
  }
}

export default async function ArticleDetailPage({ params }: ArticlePageProps) {
  const { slug } = await params
  const article = await getArticleBySlug(slug)

  if (!article) {
    notFound()
  }

  return (
    <div className="bg-white min-h-screen font-sans text-slate-900 pt-32 pb-24">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <div className="mb-8">
          <Link 
            href="/insights" 
            className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Teknoloji & Blog'a Dön
          </Link>
        </div>

        {/* Header */}
        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6 tracking-tight">
            {article.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-slate-500 text-[14px] sm:text-[15px]">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold">
                {article.authorInitials}
              </div>
              <span className="font-medium text-slate-900">{article.author}</span>
            </div>
            {article.displayDate && (
              <>
                <span>·</span>
                <span>{article.displayDate}</span>
              </>
            )}
            <span>·</span>
            <span>{article.readingTime}</span>
          </div>
        </header>

        {/* Hero Image */}
        {article.image && (
          <div className="w-full h-[250px] sm:h-[400px] mb-12 rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
            <img 
              src={article.image} 
              alt={article.title} 
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Content */}
        <div 
          className="prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-blue-600 prose-img:rounded-xl leading-relaxed"
          dangerouslySetInnerHTML={{ __html: article.contentHtml }}
        />
        
      </article>
    </div>
  )
}
