'use client'

import type { CSSProperties } from 'react'
import { Shapes } from 'lucide-react'
import { DynamicIcon, type IconName } from 'lucide-react/dynamic'

export default function CategoryIcon({
  name,
  className,
  style,
}: {
  name: string
  className?: string
  style?: CSSProperties
}) {
  return (
    <DynamicIcon
      name={name as IconName}
      className={className}
      style={style}
      fallback={() => <Shapes className={className} style={style} />}
    />
  )
}
