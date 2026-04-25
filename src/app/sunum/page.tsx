'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Download, ArrowRight, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'

export default function SunumPage() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('/api/presentation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus('success')
        // İndirmeyi başlat
        triggerDownload()
      } else {
        setStatus('error')
        setErrorMessage(data.error || 'Bir hata oluştu.')
      }
    } catch (error) {
      console.error('Submit error:', error)
      setStatus('error')
      setErrorMessage('Bağlantı hatası oluştu.')
    }
  }

  const triggerDownload = () => {
    const link = document.createElement('a')
    // Dosya adındaki boşluğu %20 olarak kodluyoruz
    link.href = '/iyesys/sunum/IYESYS_COZUMLERI.pdf'
    link.download = 'IYESYS_COZUMLERI.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Arkaplan Efektleri */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full"
      >
        <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 dark:border-gray-800 text-center">

          <AnimatePresence mode="wait">
            {status !== 'success' ? (
              <motion.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
              >
                <div className="inline-flex w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl items-center justify-center text-white mb-4 shadow-lg shadow-blue-500/30">
                  <Download className="w-8 h-8" />
                </div>

                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                  IYESYS Sunumu
                </h1>

                <p className="text-gray-600 dark:text-gray-400">
                  Endüstriyel güvenlik çözümlerimiz hakkında detaylı bilgi içeren sunumumuzu indirmek için e-posta adresinizi girin.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Mail className="w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                    </div>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="E-posta adresiniz"
                      className="block w-full pl-12 pr-4 py-4 bg-gray-50 dark:bg-gray-800 border-2 border-transparent focus:border-blue-500 rounded-2xl outline-none transition-all text-gray-900 dark:text-white"
                      disabled={status === 'loading'}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-2xl font-bold shadow-lg shadow-blue-600/25 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-70 disabled:hover:scale-100"
                  >
                    {status === 'loading' ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <>
                        <span>Sunumu İndir</span>
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>

                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="flex items-center gap-2 text-red-500 text-sm justify-center bg-red-500/10 py-3 rounded-xl border border-red-500/20"
                  >
                    <AlertCircle className="w-4 h-4" />
                    <span>{errorMessage}</span>
                  </motion.div>
                )}
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="py-8 space-y-4"
              >
                <div className="inline-flex w-20 h-20 bg-green-100 dark:bg-green-500/20 rounded-full items-center justify-center text-green-600 dark:text-green-400 mb-4">
                  <CheckCircle2 className="w-12 h-12" />
                </div>

                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Hazır!
                </h2>

                <p className="text-gray-600 dark:text-gray-400 pb-4">
                  Sunum indirme işlemi başladı. Eğer başlamadıysa aşağıdaki butona tıklayabilirsiniz.
                </p>

                <button
                  onClick={triggerDownload}
                  className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:underline"
                >
                  <Download className="w-4 h-4" />
                  Tekrar İndir
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          <p className="mt-8 text-xs text-gray-500 dark:text-gray-500">
            © {new Date().getFullYear()} IYESYS. Tüm hakları saklıdır.
          </p>
        </div>
      </motion.div>
    </div>
  )
}
