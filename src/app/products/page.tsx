export default function ProductsPage() {
  const products = [
    {
      name: "Hareketli Ekipman - Yaya Güvenliği",
      desc: "AI ve UWB tabanlı gelişmiş sistemlerimizle hareketli ekipman ve yayalar arasındaki olası çarpışmaları önleyin. Depo içi operasyonlarınızda maksimum güvenlik sağlayın."
    },
    {
      name: "Bölge Yaya Güvenliği",
      desc: "Kavşak, kör nokta ve yasaklı alan kontrollerini otomatikleştirin. Riskli bölgelerde yaya trafiğini akıllı sensörlerle yöneterek iş kazalarının önüne geçin."
    },
    {
      name: "Yükleme Rampası Güvenliği",
      desc: "TIR yanaşma ve rampa yükleme/boşaltma operasyonlarını güvenle yönetin. Akıllı uyarı sistemleriyle lojistik süreçlerinizde saha güvenliğini ve verimliliği artırın."
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