'use client'

import { Mail, Users, Briefcase, Heart, Rocket, Target, ArrowRight } from 'lucide-react'

export default function CareersPage() {
  const benefits = [
    {
      icon: <Rocket className="w-5 h-5" />,
      title: "İnovasyon Odaklı",
      desc: "Yapay zeka ve IoT teknolojilerinde öncü projeler"
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Dinamik Ekip",
      desc: "Uzman ve yaratıcı profesyonellerle çalışma fırsatı"
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: "Kariyer Gelişimi",
      desc: "Sürekli öğrenme ve gelişim imkanları"
    },
    {
      icon: <Heart className="w-5 h-5" />,
      title: "İş-Yaşam Dengesi",
      desc: "Esnek çalışma modelleri ve destekleyici ortam"
    }
  ]

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6 tracking-tight">
            Kariyer Fırsatları
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            IYESYS'e ve yapay zeka tabanlı endüstriyel güvenlik çözümlerimize gösterdiğiniz ilgi için teşekkür ederiz. 
            Alanında fark yaratan, dinamik ekibimizi büyütmeye her zaman değer veriyoruz.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-sm p-6 border border-slate-200 hover:border-black transition-colors"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-sm bg-black text-white mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-base font-bold text-black mb-2">
                {benefit.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>

        {/* General Application Section */}
        <div className="bg-white rounded-sm p-8 md:p-12 border border-slate-200 mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-sm bg-black text-white mb-6">
                <Briefcase className="w-6 h-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black tracking-tight">
                Genel Başvuru
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Şu anda listelenen aktif bir açık pozisyonumuz bulunmamaktadır. 
                Ancak, IYESYS ailesinin bir parçası olmak isteyen yetenekli profesyonellerin 
                başvurularını her zaman değerlendirmeye alıyoruz.
              </p>
              <p className="text-sm text-slate-500 font-medium">
                Başvurunuzda pozisyon tercihinizi, deneyimlerinizi ve neden IYESYS'te çalışmak istediğinizi belirtmeniz değerlendirme sürecini hızlandıracaktır.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-8 rounded-sm">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4 border-b border-slate-200 pb-2">
                Özgeçmiş Gönderimi
              </h3>
              <p className="text-slate-600 mb-6 font-medium">
                Gelecekteki fırsatlar için özgeçmişinizi bizimle e-posta aracılığıyla paylaşabilirsiniz:
              </p>
              <a 
                href="mailto:info@iyesys.com" 
                className="group flex items-center justify-between p-4 bg-white border border-slate-200 rounded-sm hover:border-black transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-black" />
                  <span className="font-bold text-black">info@iyesys.com</span>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-black group-hover:translate-x-1 transition-all" />
              </a>
            </div>
          </div>
        </div>

        {/* Why Join Us Section */}
        <div className="bg-black rounded-sm p-10 md:p-16 text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white tracking-tight">
            Neden IYESYS?
          </h3>
          <p className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Endüstriyel güvenlikte yapay zeka ile fark yaratan, teknolojinin sınırlarını zorlayan bir ekibin parçası olun. 
            Birlikte geleceği inşa edelim.
          </p>
        </div>
        
      </div>
    </div>
  )
}