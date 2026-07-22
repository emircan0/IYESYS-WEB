'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('iyesys_cookie_consent')
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('iyesys_cookie_consent', 'accepted')
    setShowBanner(false)
  }

  const handleReject = () => {
    localStorage.setItem('iyesys_cookie_consent', 'rejected')
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] md:bottom-6 md:left-auto md:right-6 md:max-w-[360px]">
      <div className="flex flex-col gap-3 border-t border-slate-200 bg-white p-5 shadow-2xl md:rounded-sm md:border">
        <div className="flex-1">
          <h3 className="mb-2 font-bold tracking-tight text-black">Çerez Kullanımı</h3>
          <p className="text-sm font-medium leading-relaxed text-slate-600">
            Size daha iyi bir deneyim sunmak, site trafiğini analiz etmek ve hizmetlerimizi kişiselleştirmek için çerezleri (cookies) kullanıyoruz. 
            Detaylı bilgi için <Link href="/privacy" className="text-black underline font-bold">Gizlilik Politikamızı</Link> inceleyebilirsiniz.
          </p>
        </div>
        <div className="flex w-full flex-col gap-2">
          <button 
            onClick={handleAccept}
            className="w-full bg-black text-white py-2.5 rounded-sm text-sm font-bold hover:bg-slate-800 transition-colors"
          >
            Tümünü Kabul Et
          </button>
          <button 
            onClick={handleReject}
            className="w-full bg-slate-100 text-black py-2.5 rounded-sm text-sm font-bold hover:bg-slate-200 transition-colors"
          >
            Sadece Zorunluları Kabul Et
          </button>
        </div>
      </div>
    </div>
  )
}
