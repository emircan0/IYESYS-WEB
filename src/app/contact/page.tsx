'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus({ type: '', message: '' })

    // Form verilerini mailto linki ile gönder
    const subject = encodeURIComponent(formData.subject || 'Web Sitesi İletişim Formu')
    const body = encodeURIComponent(
      `Ad Soyad: ${formData.name}\n` +
      `E-posta: ${formData.email}\n` +
      `Telefon: ${formData.phone}\n\n` +
      `Mesaj:\n${formData.message}`
    )
    
    const mailtoLink = `mailto:info@iyesys.com.tr?subject=${subject}&body=${body}`
    
    // Mailto linkini aç
    window.location.href = mailtoLink
    
    // Başarı mesajı göster
    setTimeout(() => {
      setStatus({
        type: 'success',
        message: 'E-posta istemciniz açıldı. Mesajınızı gözden geçirip gönderebilirsiniz.'
      })
      setIsSubmitting(false)
      
      // Formu temizle
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })
    }, 500)
  }

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
      content: "+90 (XXX) XXX XX XX",
      link: "tel:+90XXXXXXXXXX"
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
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Bize Ulaşın
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              Sorularınız veya iş birliği talepleriniz için bizimle iletişime geçin. 
              En kısa sürede size dönüş yapacağız.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info Cards */}
            <div className="lg:col-span-1 space-y-6">
              {contactInfo.map((info, idx) => (
                <div
                  key={idx}
                  className="group bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                      {info.icon}
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {info.title}
                      </h3>
                      {info.link ? (
                        <a 
                          href={info.link}
                          className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-gray-600 text-sm">{info.content}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {/* Working Hours */}
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-6 text-white shadow-lg">
                <h3 className="font-bold text-lg mb-4">Çalışma Saatleri</h3>
                <div className="space-y-2 text-sm text-blue-100">
                  <div className="flex justify-between">
                    <span>Pazartesi - Cuma</span>
                    <span className="font-semibold text-white">09:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Cumartesi - Pazar</span>
                    <span className="font-semibold text-white">Kapalı</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-2xl border border-gray-100">
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Ad Soyad *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        E-posta *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Telefon
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Konu
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Mesajınız *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none resize-none"
                      required
                    />
                  </div>

                  {/* Status Message */}
                  {status.message && (
                    <div className={`flex items-center gap-3 p-4 rounded-xl ${
                      status.type === 'success' 
                        ? 'bg-green-50 text-green-800 border border-green-200' 
                        : 'bg-red-50 text-red-800 border border-red-200'
                    }`}>
                      {status.type === 'success' ? (
                        <CheckCircle className="w-5 h-5 flex-shrink-0" />
                      ) : (
                        <AlertCircle className="w-5 h-5 flex-shrink-0" />
                      )}
                      <p className="text-sm">{status.message}</p>
                    </div>
                  )}

                  <div className="flex items-center justify-between pt-4">
                    <p className="text-sm text-gray-500">
                      * Zorunlu alanlar
                    </p>
                    <button
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="group flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Gönderiliyor...</span>
                        </>
                      ) : (
                        <>
                          <span className="font-semibold">Gönder</span>
                          <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}