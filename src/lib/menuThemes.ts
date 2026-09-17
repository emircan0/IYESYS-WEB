export type MenuTheme = 'green' | 'blue' | 'red' | 'purple' | 'teal' | 'orange'

export type ThemeColors = {
  accent: string
  accentRgb: string
  soft: string
  text: string
  border: string
  gradient: string
}

export const MENU_THEME_COLORS: Record<MenuTheme, ThemeColors> = {
  green: {
    accent: '#16A34A',
    accentRgb: '22, 163, 74',
    soft: '#ECFDF3',
    text: '#166534',
    border: '#BBF7D0',
    gradient: 'linear-gradient(135deg, #16A34A 0%, #059669 100%)',
  },
  blue: {
    accent: '#2563EB',
    accentRgb: '37, 99, 235',
    soft: '#EFF6FF',
    text: '#1D4ED8',
    border: '#BFDBFE',
    gradient: 'linear-gradient(135deg, #2563EB 0%, #0EA5E9 100%)',
  },
  red: {
    accent: '#DC2626',
    accentRgb: '220, 38, 38',
    soft: '#FEF2F2',
    text: '#B91C1C',
    border: '#FECACA',
    gradient: 'linear-gradient(135deg, #DC2626 0%, #B91C1C 100%)',
  },
  purple: {
    accent: '#7C3AED',
    accentRgb: '124, 58, 237',
    soft: '#F5F3FF',
    text: '#6D28D9',
    border: '#DDD6FE',
    gradient: 'linear-gradient(135deg, #7C3AED 0%, #9333EA 100%)',
  },
  teal: {
    accent: '#0D9488',
    accentRgb: '13, 148, 136',
    soft: '#F0FDFA',
    text: '#0F766E',
    border: '#99F6E4',
    gradient: 'linear-gradient(135deg, #0D9488 0%, #06B6D4 100%)',
  },
  orange: {
    accent: '#EA580C',
    accentRgb: '234, 88, 12',
    soft: '#FFF7ED',
    text: '#C2410C',
    border: '#FED7AA',
    gradient: 'linear-gradient(135deg, #EA580C 0%, #F97316 100%)',
  },
}
