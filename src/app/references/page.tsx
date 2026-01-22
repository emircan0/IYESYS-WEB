'use client'

export default function ReferencesPage() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 text-center">
        Referanslarımız
      </h1>
      <p className="text-gray-700 dark:text-gray-300 text-center mb-10 leading-relaxed">
        AI Kamera Sistemleri olarak güven veren iş ortaklarımız ve başarılı projelerimiz ile sektörde öncü olduk. 
        İşte bazı referanslarımız:
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          { name: "XYZ Fabrika", desc: "Üretim hattı otomasyonu ve AI kamera entegrasyonu." },
          { name: "ABC Lojistik", desc: "Depo güvenliği ve personel takibi çözümleri." },
          { name: "DEF Enerji", desc: "Endüstriyel IoT ile veri analitiği projeleri." },
        ].map((ref, i) => (
          <div key={i} className="bg-white dark:bg-gray-800 p-6 shadow-md rounded-lg hover:shadow-lg transition text-center">
            <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{ref.name}</h2>
            <p className="text-gray-700 dark:text-gray-300">{ref.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
