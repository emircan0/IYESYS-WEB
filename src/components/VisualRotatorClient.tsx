'use client'

import { useEffect, useState } from 'react'

type DetailVisual = {
  src: string
  alt: string
}

type VisualRotatorClientProps = {
  visuals: DetailVisual[]
  className: string
  imageClassName: string
}

export default function VisualRotatorClient({ visuals, className, imageClassName }: VisualRotatorClientProps) {
  const [active, setActive] = useState(0)

  useEffect(() => {
    setActive(0)
    if (visuals.length <= 1) return

    const interval = window.setInterval(() => {
      setActive((current) => (current + 1) % visuals.length)
    }, 4500)

    return () => window.clearInterval(interval)
  }, [visuals])

  if (visuals.length <= 1) {
    return <img src={visuals[0].src} alt={visuals[0].alt} className={`${className} ${imageClassName}`} />
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {visuals.map((visual, index) => (
        <img
          key={visual.src}
          src={visual.src}
          alt={visual.alt}
          className={`absolute inset-0 transition-opacity duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${imageClassName} ${
            index === active ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
    </div>
  )
}
