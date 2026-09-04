import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'

const articlesDirectory = path.join(process.cwd(), 'content/articles')

export interface ArticleMeta {
  slug: string
  title: string
  date: string
  displayDate?: string
  author: string
  authorInitials: string
  readingTime: string
  image: string
  excerpt: string
  claps?: string
  comments?: string
  reposts?: string
}

export interface ArticleDetail extends ArticleMeta {
  contentHtml: string
}

export function getAllArticles(): ArticleMeta[] {
  if (!fs.existsSync(articlesDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(articlesDirectory)
  const allArticles = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '')
      const fullPath = path.join(articlesDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      // Calculate approximate reading time if not specified
      const words = content.trim().split(/\s+/).length
      const estimatedMinutes = Math.max(1, Math.ceil(words / 200))
      const autoReadingTime = `${estimatedMinutes} dk okuma`

      return {
        slug,
        title: data.title || slug,
        date: data.date || '',
        displayDate: data.displayDate || data.date || '',
        author: data.author || 'IYESYS',
        authorInitials: data.authorInitials || (data.author ? data.author.slice(0, 2).toUpperCase() : 'IY'),
        readingTime: data.readingTime || autoReadingTime,
        image: data.image || '/img/hareketliekipman-yaya1.png',
        excerpt: data.excerpt || content.slice(0, 160).replace(/[#*`_]/g, '') + '...',
        claps: data.claps,
        comments: data.comments,
        reposts: data.reposts,
      } as ArticleMeta
    })

  // Sort by date descending
  return allArticles.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export async function getArticleBySlug(slug: string): Promise<ArticleDetail | null> {
  const fullPath = path.join(articlesDirectory, `${slug}.md`)
  if (!fs.existsSync(fullPath)) {
    return null
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  const contentHtml = await marked.parse(content)

  const words = content.trim().split(/\s+/).length
  const estimatedMinutes = Math.max(1, Math.ceil(words / 200))
  const autoReadingTime = `${estimatedMinutes} dk okuma`

  return {
    slug,
    title: data.title || slug,
    date: data.date || '',
    displayDate: data.displayDate || data.date || '',
    author: data.author || 'IYESYS',
    authorInitials: data.authorInitials || (data.author ? data.author.slice(0, 2).toUpperCase() : 'IY'),
    readingTime: data.readingTime || autoReadingTime,
    image: data.image || '/img/hareketliekipman-yaya1.png',
    excerpt: data.excerpt || '',
    claps: data.claps,
    comments: data.comments,
    reposts: data.reposts,
    contentHtml,
  }
}
