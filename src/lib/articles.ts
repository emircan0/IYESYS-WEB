import sanitizeHtml from 'sanitize-html'
import { getSupabaseClient } from './supabaseClient'

const ALLOWED_TAGS = [
  'p', 'br', 'hr',
  'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
  'strong', 'em', 's', 'code', 'pre',
  'blockquote', 'ul', 'ol', 'li',
  'a', 'img',
]

function sanitizeArticleHtml(html: string): string {
  return sanitizeHtml(html, {
    allowedTags: ALLOWED_TAGS,
    allowedAttributes: {
      a: ['href', 'target', 'rel'],
      img: ['src', 'alt', 'title'],
    },
    allowedSchemes: ['http', 'https', 'mailto'],
  })
}

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

const DEFAULT_IMAGE = '/img/hareketliekipman-yaya1.png'

type ArticleRow = {
  slug: string
  title: string
  excerpt: string
  cover_image_url: string | null
  content_html: string
  published_at: string | null
  created_at: string
}

function readingTimeFromHtml(html: string): string {
  const text = html.replace(/<[^>]+>/g, ' ')
  const words = text.trim().split(/\s+/).filter(Boolean).length
  const estimatedMinutes = Math.max(1, Math.ceil(words / 200))
  return `${estimatedMinutes} dk okuma`
}

function formatDisplayDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('tr-TR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

function toMeta(row: ArticleRow): ArticleMeta {
  const date = row.published_at || row.created_at

  return {
    slug: row.slug,
    title: row.title,
    date,
    displayDate: formatDisplayDate(date),
    author: 'IYESYS',
    authorInitials: 'IY',
    readingTime: readingTimeFromHtml(row.content_html),
    image: row.cover_image_url || DEFAULT_IMAGE,
    excerpt: row.excerpt,
  }
}

export async function getAllArticles(): Promise<ArticleMeta[]> {
  const supabase = getSupabaseClient()
  const { data, error } = await supabase
    .from('articles')
    .select('slug, title, excerpt, cover_image_url, content_html, published_at, created_at')
    .eq('status', 'published')
    .order('published_at', { ascending: false })

  if (error) {
    console.error('Failed to fetch articles:', error.message)
    return []
  }

  return (data as ArticleRow[]).map(toMeta)
}

export async function getArticleBySlug(slug: string): Promise<ArticleDetail | null> {
  const supabase = getSupabaseClient()
  const { data, error } = await supabase
    .from('articles')
    .select('slug, title, excerpt, cover_image_url, content_html, published_at, created_at')
    .eq('status', 'published')
    .eq('slug', slug)
    .maybeSingle()

  if (error || !data) {
    if (error) console.error('Failed to fetch article:', error.message)
    return null
  }

  const row = data as ArticleRow

  return {
    ...toMeta(row),
    contentHtml: sanitizeArticleHtml(row.content_html),
  }
}
