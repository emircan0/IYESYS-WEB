import { getSupabaseClient } from './supabaseClient'

export type Faq = {
  question: string
  answer: string
}

export async function getPublishedFaqs(): Promise<Faq[]> {
  const supabase = getSupabaseClient()
  const { data, error } = await supabase
    .from('faqs')
    .select('question, answer')
    .eq('status', 'published')
    .order('sort_order', { ascending: true })
    .order('created_at', { ascending: true })

  if (error) {
    console.error('Failed to fetch FAQs:', error.message)
    return []
  }

  return data
}
