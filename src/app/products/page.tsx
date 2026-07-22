export default function ProductsPage() {
  const products = [
    {
      name: "Hareketli Ekipman - Yaya Güvenliği",
      desc: "Forklift kazalarını önlemek için kamera izleme, UWB hassas mesafe kontrolü, operatör uyarısı, sesli ikaz ve otomatik yavaşlatma/durdurma senaryolarını birlikte çalıştırın."
    },
    {
      name: "Bölge Yaya Güvenliği",
      desc: "Köşe, kavşak, kapı ve yaya geçitlerinde kamera, UWB, trafik lambası, hologram, şerit LED ve forklift yavaşlatma senaryolarıyla çarpışma riskini azaltın."
    },
    {
      name: "Yükleme Rampası Güvenliği",
      desc: "Yapay zeka kamerasıyla TIR arkasındaki kör noktayı izleyin; personel varsa kırmızı ışık ve yüksek sesli uyarı ile güvenli yanaşma sürecini yönetin."
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
              className="p-6 border border-gray-200 dark:border-gray-700 rounded-2xl bg-gray-50 dark:bg-gray-800 hover:shadow-lg transition duration-300"
            >
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {product.name}
              </h2>
              <p className="text-gray-700 dark:text-gray-400 leading-relaxed">
                {product.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
