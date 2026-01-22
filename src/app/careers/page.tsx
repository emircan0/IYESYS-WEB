'use client'

export default function CareersPage() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 text-center">
        Kariyer Fırsatları
      </h1>
      <p className="text-gray-700 dark:text-gray-300 text-center mb-10 leading-relaxed">
        AI Kamera Sistemleri olarak sürekli büyüyen ekibimize katılmak isteyen yetenekleri arıyoruz. 
        Aşağıdaki açık pozisyonlara göz atabilir ve başvurunuzu iletebilirsiniz.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {[
          { title: "Yazılım Mühendisi", desc: "Endüstriyel IoT ve AI projelerinde yazılım geliştirin." },
          { title: "Veri Analisti", desc: "Üretim verilerini analiz ederek raporlar ve öngörüler üretin." },
          { title: "Satış ve Pazarlama Uzmanı", desc: "Kurumsal müşteriler için çözümlerimizi tanıtın." },
          { title: "Destek Mühendisi", desc: "Müşteri sorularını yanıtlayın ve teknik destek sağlayın." },
        ].map((job, i) => (
          <div key={i} className="bg-white dark:bg-gray-800 p-6 shadow-md rounded-lg hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{job.title}</h2>
            <p className="text-gray-700 dark:text-gray-300">{job.desc}</p>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
              Başvur
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}
