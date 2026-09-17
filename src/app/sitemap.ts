import { MetadataRoute } from 'next'
import { getPublishedMenu } from '@/lib/menu'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.iyesys.com'
  const { items } = await getPublishedMenu()

  const routes = [
    '',
    '/about',
    '/careers',
    '/contact',
    '/faq',
    '/privacy',
    '/products',
    '/references',
    '/services',
    '/sunum',
    '/terms',
    ...items.map((service) => service.href),
  ]

  return [...new Set(routes)].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1 : 0.8,
  }))
}
