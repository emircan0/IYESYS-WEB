'use client'

import React from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, ArrowRight } from 'lucide-react'

export default function Contact() {
  const [status, setStatus] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = React.useState('');

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: "E-posta",
      content: "info@iyesys.com",
      link: "mailto:info@iyesys.com"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Adres",
      content: "İstanbul, Türkiye",
      link: null
    }
  ]

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('success');
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.error || 'Mesaj gönderilemedi.');
        setStatus('error');
      }
    } catch (error) {
      setErrorMessage('Bağlantı hatası oluştu.');
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6 tracking-tight">
            İletişim
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Kurumsal çözümlerimiz, demo talepleriniz veya iş birliği fırsatları için uzman ekibimizle iletişime geçin.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Sol Kolon - İletişim Bilgileri */}
          <div className="lg:col-span-4 space-y-10">
            <div>
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6 border-b border-slate-200 pb-3">
                İletişim Bilgileri
              </h3>
              <div className="flex flex-col gap-8">
                {contactInfo.map((info, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-sm bg-black text-white flex items-center justify-center mt-1">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-black text-base mb-1">{info.title}</h4>
                      {info.link ? (
                        <a href={info.link} className="text-slate-600 hover:text-black transition-colors font-medium">
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-slate-600 font-medium">{info.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6 border-b border-slate-200 pb-3">
                Destek Saatleri
              </h3>
              <div className="bg-white p-6 rounded-md border border-slate-200">
                <p className="text-slate-600 font-medium leading-relaxed">
                  Pazartesi - Cuma<br/>
                  <span className="text-black font-bold">09:00 - 18:00</span>
                </p>
              </div>
            </div>
          </div>

          {/* Sağ Kolon - Form */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-md p-8 md:p-12 shadow-sm border border-slate-200">
              
              {/* Başarı Mesajı */}
              {status === 'success' ? (
                <div className="text-center py-16">
                  <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h2 className="text-2xl font-bold text-black mb-3">Talebiniz Alındı</h2>
                  <p className="text-slate-600 mb-8 max-w-md mx-auto">
                    İletişim bilgileriniz bize ulaştı. İlgili birimimiz en kısa sürede sizinle iletişime geçecektir.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="inline-flex items-center justify-center px-6 py-3 bg-slate-100 text-black font-bold rounded-sm hover:bg-slate-200 transition-colors"
                  >
                    Yeni Mesaj Gönder
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-black mb-2">Ad Soyad <span className="text-red-500">*</span></label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        required
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm focus:bg-white focus:ring-1 focus:ring-black focus:border-black outline-none transition-all text-black" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-black mb-2">Kurumsal E-posta <span className="text-red-500">*</span></label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm focus:bg-white focus:ring-1 focus:ring-black focus:border-black outline-none transition-all text-black" 
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-black mb-2">Telefon</label>
                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm focus:bg-white focus:ring-1 focus:ring-black focus:border-black outline-none transition-all text-black" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-black mb-2">Konu / Şirket Adı</label>
                      <input
                        id="subject"
                        type="text"
                        name="subject"
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm focus:bg-white focus:ring-1 focus:ring-black focus:border-black outline-none transition-all text-black" 
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-black mb-2">Mesajınız <span className="text-red-500">*</span></label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm focus:bg-white focus:ring-1 focus:ring-black focus:border-black outline-none transition-all text-black resize-y" 
                    />
                  </div>

                  {status === 'error' && (
                    <div className="p-4 bg-red-50 text-red-600 rounded-sm text-sm border border-red-100 flex items-center gap-2 font-medium">
                      <AlertCircle className="w-4 h-4" /> {errorMessage}
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-slate-100 gap-4">
                    <p className="text-xs text-slate-500 font-medium">
                      <span className="text-red-500">*</span> İşaretli alanların doldurulması zorunludur.
                    </p>
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="group flex items-center justify-center gap-2 px-8 py-3.5 bg-black text-white rounded-sm hover:bg-slate-800 transition-all font-bold w-full sm:w-auto disabled:opacity-50"
                    >
                      {status === 'loading' ? (
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      ) : (
                        <>
                          <span>Talebi Gönder</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
    </div>
  )
}