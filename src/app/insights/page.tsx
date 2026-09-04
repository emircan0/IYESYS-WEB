import Link from 'next/link'
import { Metadata } from 'next'
import { getAllArticles } from '@/lib/articles'

export const metadata: Metadata = {
  title: 'Teknoloji & Blog | IYESYS',
  description: 'Endüstriyel yapay zekâ, görüntü işleme ve iş güvenliği teknolojileri üzerine teknik yazılar ve vaka analizleri.',
  openGraph: {
    title: 'Teknoloji & Blog | IYESYS',
    description: 'Endüstriyel yapay zekâ, görüntü işleme ve iş güvenliği teknolojileri üzerine teknik yazılar ve vaka analizleri.',
  }
}

export default function InsightsPage() {
  const articles = getAllArticles()

  return (
    <div className="bg-white min-h-screen font-sans text-slate-900 pt-32 pb-24">
      
      {/* Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Title */}
        <div className="mb-12 pb-4 border-b border-slate-100">
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Teknoloji & Blog</h1>
          <p className="text-slate-500 mt-2 text-[15px]">
            Endüstriyel yapay zekâ, görüntü işleme ve iş güvenliği teknolojileri üzerine teknik yazılar ve vaka analizleri.
          </p>
        </div>

        {/* Article Feed */}
        {articles.length === 0 ? (
          <div className="py-16 text-center text-slate-500">
            <p className="text-lg">Henüz yayınlanmış bir yazı bulunmuyor.</p>
            <p className="text-sm text-slate-400 mt-1">Yeni yazılar çok yakında burada paylaşılacaktır.</p>
          </div>
        ) : (
          <div className="flex flex-col">
            {articles.map((article) => (
              <Link 
                key={article.slug} 
                href={`/insights/${article.slug}`} 
                className="py-8 border-b border-slate-100 flex gap-6 sm:gap-8 items-start group cursor-pointer"
              >
                
                {/* Left Content */}
                <div className="flex-1 min-w-0">
                  
                  {/* Author Info */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-[10px] font-bold">
                      {article.authorInitials}
                    </div>
                    <span className="text-[14px] font-medium text-slate-900">{article.author}</span>
                    {article.displayDate && (
                      <>
                        <span className="text-slate-400 text-sm">·</span>
                        <span className="text-[14px] text-slate-500">{article.displayDate}</span>
                      </>
                    )}
                    <span className="text-slate-400 text-sm">·</span>
                    <span className="text-[13px] text-slate-400">{article.readingTime}</span>
                  </div>

                  {/* Title & Excerpt */}
                  <div className="block mb-4 sm:mb-6">
                    <h2 className="text-[20px] sm:text-[24px] font-extrabold text-slate-900 leading-[1.25] mb-2 tracking-tight group-hover:text-blue-600 transition-colors">
                      {article.title}
                    </h2>
                    <p className="text-[14px] sm:text-[15px] text-slate-500 leading-relaxed font-normal line-clamp-2 md:line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>
                </div>

                {/* Right Image */}
                {article.image && (
                  <div className="w-[110px] h-[75px] sm:w-[160px] sm:h-[107px] md:w-[220px] md:h-[145px] shrink-0 mt-1 sm:mt-2">
                    <img 
                      src={article.image} 
                      alt={article.title} 
                      className="w-full h-full object-cover rounded-md border border-slate-100 group-hover:opacity-95 transition-opacity"
                    />
                  </div>
                )}

              </Link>
            ))}
          </div>
        )}

      </div>
    </div>
  )
}
