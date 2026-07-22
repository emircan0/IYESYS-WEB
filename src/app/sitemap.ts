import { MetadataRoute } from 'next'
import { serviceCatalog } from '@/lib/serviceCatalog'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.iyesys.com'
  
  const routes = [
    '',
    '/about',
    '/careers',
    '/contact',
    '/privacy',
    '/products',
    '/references',
    '/services',
    '/sunum',
    '/terms',
    ...serviceCatalog.map((service) => service.href),
  ]

  return [...new Set(routes)].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1 : 0.8,
  }))
}
