import { getSupabaseClient } from './supabaseClient'
import { MENU_THEME_COLORS, type MenuTheme, type ThemeColors } from './menuThemes'

export type ResolvedCategory = ThemeColors & {
  id: string
  slug: string
  label: string
  shortLabel: string
  desc: string
}

export type MenuItem = {
  title: string
  href: string
  category: string
  categoryLabel: string
  desc: string
  image: string
  accent: string
  accentRgb: string
}

type CategoryRow = {
  id: string
  slug: string
  label: string
  short_label: string
  description: string
  theme: MenuTheme
  sort_order: number
}

type ItemRow = {
  slug: string
  title: string
  description: string
  image_url: string | null
  sort_order: number
  category_id: string
}

const FALLBACK_IMAGE = '/img/hareketliekipman-yaya1.png'

export async function getPublishedMenu(): Promise<{ categories: ResolvedCategory[]; items: MenuItem[] }> {
  const supabase = getSupabaseClient()

  const [{ data: categoryRows, error: categoryError }, { data: itemRows, error: itemError }] = await Promise.all([
    supabase
      .from('menu_categories')
      .select('id, slug, label, short_label, description, theme, sort_order')
      .eq('status', 'published')
      .order('sort_order', { ascending: true }),
    supabase
      .from('menu_items')
      .select('slug, title, description, image_url, sort_order, category_id')
      .eq('status', 'published')
      .order('sort_order', { ascending: true }),
  ])

  if (categoryError) {
    console.error('Failed to fetch menu categories:', categoryError.message)
    return { categories: [], items: [] }
  }
  if (itemError) {
    console.error('Failed to fetch menu items:', itemError.message)
    return { categories: [], items: [] }
  }

  const categories: ResolvedCategory[] = (categoryRows as CategoryRow[]).map((row) => ({
    id: row.id,
    slug: row.slug,
    label: row.label,
    shortLabel: row.short_label,
    desc: row.description,
    ...MENU_THEME_COLORS[row.theme],
  }))

  const categoryById = new Map(categories.map((c) => [c.id, c]))

  const items: MenuItem[] = (itemRows as ItemRow[])
    .map((row) => {
      const category = categoryById.get(row.category_id)
      if (!category) return null
      return {
        title: row.title,
        href: `/services/${row.slug}`,
        category: category.slug,
        categoryLabel: category.label,
        desc: row.description,
        image: row.image_url || FALLBACK_IMAGE,
        accent: category.accent,
        accentRgb: category.accentRgb,
      }
    })
    .filter((item): item is MenuItem => item !== null)

  return { categories, items }
}
