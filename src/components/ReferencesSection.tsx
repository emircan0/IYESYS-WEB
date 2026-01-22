'use client'

export default function ReferencesSection() {
  const references = [
    { logo: "/logos/xyz.png", name: "XYZ Şirketi" },
    { logo: "/logos/abc.png", name: "ABC Şirketi" },
    { logo: "/logos/def.png", name: "DEF Şirketi" },
    { logo: "/logos/ghi.png", name: "GHI Şirketi" },
    { logo: "/logos/jkl.png", name: "JKL Şirketi" },
  ]

  return (
    <section id="references" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Referanslarımız
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-12 items-center justify-items-center">
          {references.map((ref, idx) => (
            <div
              key={idx}
              className="w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center transition-all duration-300 transform hover:scale-110 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md p-4"
            >
              {ref.logo && (
                <img 
                  src={ref.logo} 
                  alt={ref.name} 
                  className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300" 
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}