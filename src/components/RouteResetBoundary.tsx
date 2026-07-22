'use client'

import type { ReactNode } from 'react'
import { useLayoutEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

type RouteResetBoundaryProps = {
  children: ReactNode
}

export default function RouteResetBoundary({ children }: RouteResetBoundaryProps) {
  const pathname = usePathname()
  const [readyPath, setReadyPath] = useState(pathname)

  useLayoutEffect(() => {
    let firstFrame = 0
    let secondFrame = 0

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })

    firstFrame = window.requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })

      secondFrame = window.requestAnimationFrame(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
        setReadyPath(pathname)
      })
    })

    return () => {
      window.cancelAnimationFrame(firstFrame)
      window.cancelAnimationFrame(secondFrame)
    }
  }, [pathname])

  if (readyPath !== pathname) {
    return <div className="min-h-[100svh] bg-white" aria-hidden="true" />
  }

  return <div key={pathname}>{children}</div>
}
