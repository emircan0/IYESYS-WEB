'use client'

import React from 'react'
import { useForm, ValidationError } from '@formspree/react'
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react'

export default function Contact() {
  // Formspree kancası (ID'nizi buraya ekledim)
  const [state, handleSubmit] = useForm("mkovokdj");

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "E-posta",
      content: "info@iyesys.com.tr",
      link: "mailto:info@iyesys.com.tr"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Telefon",
      content: "+90 (500) 123 45 67",
      link: "tel:+905001234567"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Adres",
      content: "İstanbul, Türkiye",
      link: null
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Bize Ulaşın</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              Sorularınız veya iş birliği talepleriniz için bizimle iletişime geçin.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Sol Kolon - İletişim Bilgileri */}
            <div className="lg:col-span-1 space-y-6">
              {contactInfo.map((info, idx) => (
                <div key={idx} className="group bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 text-white flex items-center justify-center">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{info.title}</h3>
                      <p className="text-gray-600 text-sm">{info.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Sağ Kolon - Form */}
            <div className="lg:col-span-2">
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-2xl border border-gray-100">

                {/* Başarı Mesajı */}
                {state.succeeded ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-12 h-12" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Mesajınız Alındı!</h2>
                    <p className="text-gray-600">En kısa sürede size geri dönüş yapacağız.</p>
                    <button
                      onClick={() => window.location.reload()}
                      className="mt-6 text-blue-600 font-semibold hover:underline"
                    >
                      Yeni bir mesaj gönder
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Ad Soyad *</label>
                        <input
                          id="name"
                          type="text"
                          name="name"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all bg-white text-gray-900" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">E-posta *</label>
                        <input
                          id="email"
                          type="email"
                          name="email"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all bg-white text-gray-900" />
                        <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-xs mt-1" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Telefon</label>
                        <input
                          id="phone"
                          type="tel"
                          name="phone"
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all bg-white text-gray-900" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Konu</label>
                        <input
                          id="subject"
                          type="text"
                          name="subject"
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all bg-white text-gray-900" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Mesajınız *</label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all bg-white text-gray-900" />
                      <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-xs mt-1" />
                    </div>

                    <div className="flex items-center justify-between pt-4">
                      <p className="text-sm text-gray-500">* Zorunlu alanlar</p>
                      <button
                        type="submit"
                        disabled={state.submitting}
                        className="group flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all hover:scale-105 shadow-lg disabled:opacity-50"
                      >
                        {state.submitting ? (
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        ) : (
                          <>
                            <span className="font-semibold">Gönder</span>
                            <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}