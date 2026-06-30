import { MetadataRoute } from 'next'

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
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1 : 0.8,
  }))
}
