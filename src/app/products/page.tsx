export default function ProductsPage() {
  const products = [
    {
      name: "AI Kamera Sistemi",
      desc: "Forklift ve depo güvenliği için yapay zekâ destekli kamera çözümleri."
    },
    {
      name: "RTLS Personel Takip Cihazı",
      desc: "Gerçek zamanlı konumlama ile çalışanlarınızı izleyin ve verimliliği artırın."
    },
    {
      name: "Endüstriyel IoT Sensörleri",
      desc: "Üretim hattınızı sensörler ile akıllı ve veri odaklı hale getirin."
    }
  ]

  return (
    <section className="bg-white dark:bg-gray-900 pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Ürünlerimiz
        </h1>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <div 
              key={idx} 
              className="p-6 border rounded-2xl bg-gray-50 dark:bg-gray-800 hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {product.name}
              </h2>
              <p className="text-gray-700 dark:text-gray-400">{product.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
