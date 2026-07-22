'use client'

import type { CSSProperties, ReactNode } from 'react'
import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'

type ScrollRevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  style?: CSSProperties
}

export default function ScrollReveal({ children, className = '', delay = 0, style }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visiblePath, setVisiblePath] = useState<string | null>(null)
  const pathname = usePathname()
  const visible = visiblePath === pathname

  useEffect(() => {
    const node = ref.current
    setVisiblePath(null)
    if (!node) return

    let observer: IntersectionObserver | null = null
    let firstFrame = 0
    let secondFrame = 0
    let startTimer: number | null = null

    const startObserver = () => {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry?.isIntersecting) return
          setVisiblePath(pathname)
          observer?.disconnect()
        },
        { rootMargin: '0px 0px -8% 0px', threshold: 0.18 },
      )

      observer.observe(node)
    }

    firstFrame = window.requestAnimationFrame(() => {
      secondFrame = window.requestAnimationFrame(() => {
        startTimer = window.setTimeout(startObserver, 120)
      })
    })

    return () => {
      window.cancelAnimationFrame(firstFrame)
      window.cancelAnimationFrame(secondFrame)
      if (startTimer) window.clearTimeout(startTimer)
      observer?.disconnect()
    }
  }, [pathname])

  return (
    <div
      ref={ref}
      className={`${className} ${visible ? 'is-visible' : 'is-hidden'} transform-gpu transition-[opacity,transform,filter] duration-[820ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
        visible ? 'translate-y-0 scale-100 opacity-100 blur-0' : 'translate-y-8 scale-[0.97] opacity-0 blur-sm'
      }`}
      style={{ ...style, transitionDelay: visible ? `${delay}ms` : '0ms' }}
    >
      {children}
    </div>
  )
}
