'use client'

import { FileText, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function TermsOfServicePage() {
    const lastUpdated = "10 Mart 2026"

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 text-slate-900 dark:text-slate-100 transition-colors duration-300 font-sans pt-32 pb-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Üst Kısım */}
                <div className="mb-12">
                    <Link href="/" className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline mb-6 font-medium">
                        <ArrowLeft className="w-4 h-4" /> Ana Sayfaya Dön
                    </Link>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-purple-100 dark:bg-purple-900/50 rounded-2xl text-purple-600 dark:text-purple-400">
                            <FileText className="w-8 h-8" />
                        </div>
                        <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight">Kullanım Şartları</h1>
                    </div>
                    <p className="text-slate-500 dark:text-slate-400">Son Güncelleme: {lastUpdated}</p>
                </div>

                {/* İçerik */}
                <div className="space-y-10 text-lg leading-relaxed text-slate-700 dark:text-slate-300">

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">1. Taraflar ve Kabul</h2>
                        <p>
                            Bu Kullanım Şartları Sözleşmesi ("Sözleşme"), iyesys.com web sitesini ve <strong>IYESYS YAZILIM BİLİŞİM VE TEKNOLOJİ A.Ş.</strong> ("IYESYS") tarafından sağlanan yapay zeka tabanlı iş güvenliği yazılımları ve donanımlarını ("Hizmetler") kullanan her gerçek veya tüzel kişi ("Kullanıcı" veya "Müşteri") arasında akdedilmiştir. Hizmetlerimizi kullanarak veya web sitemizi ziyaret ederek bu şartları okuduğunuzu, anladığınızı ve kabul ettiğinizi beyan edersiniz.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">2. Hizmetlerin Kapsamı ve Sınırları (Sorumluluk Reddi)</h2>
                        <p className="mb-4">
                            IYESYS, endüstriyel sahalarda (forklift, yükleme rampası, fabrika içi yaya bölgeleri vb.) kaza risklerini azaltmayı hedefleyen yapay zeka destekli kamera ve sensör uyarı sistemleri üretir. Ancak Kullanıcı aşağıdaki hususları peşinen kabul eder:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 font-medium text-slate-800 dark:text-slate-200 bg-slate-50 dark:bg-gray-800 p-6 rounded-xl border border-slate-200 dark:border-gray-700">
                            <li>Sistemlerimiz birer <strong>"Erken Uyarı ve Destek"</strong> sistemidir. İnsan dikkatinin, operatör eğitiminin ve fiziksel iş güvenliği önlemlerinin yerini tutmaz.</li>
                            <li>Yapay zeka sistemleri çevresel faktörlere (ışık, toz, kör noktalar, kamera kirlenmesi) bağlı olarak %100 doğrulukla çalışmayabilir veya hatalı/eksik uyarı (false-positive / false-negative) üretebilir.</li>
                            <li>IYESYS, donanım veya yazılımın kullanımından veya uyarı vermemesinden kaynaklanabilecek doğrudan, dolaylı, maddi veya bedensel (yaralanma, ölüm dahil) hiçbir kazadan veya zarardan yasal olarak sorumlu tutulamaz. İş güvenliğinin sağlanmasında nihai sorumluluk tamamen işverene ve ilgili operatörlere aittir.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">3. Fikri Mülkiyet Hakları</h2>
                        <p>
                            IYESYS tarafından geliştirilen tüm yapay zeka modelleri, kaynak kodları, yazılım mimarisi, tasarımlar, logolar, metinler, grafikler ve markalar <strong>IYESYS YAZILIM BİLİŞİM VE TEKNOLOJİ A.Ş.</strong>'nin münhasır mülkiyetindedir ve ulusal/uluslararası telif hakları yasaları ile korunmaktadır. Kullanıcı, IYESYS'in yazılı izni olmaksızın donanımların içini açamaz, yazılımlara tersine mühendislik (reverse-engineering) yapamaz, kodları kopyalayamaz, çoğaltamaz veya ticari amaçla 3. partilere satamaz.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">4. Kullanıcı Yükümlülükleri</h2>
                        <p className="mb-4">Kullanıcı, IYESYS sistemlerini kullanırken aşağıdaki kurallara uymakla yükümlüdür:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Sistemlerin fiziksel bütünlüğüne (kamera lensleri, kablolama, işlemci üniteleri) zarar vermemek ve periyodik bakımlarını (temizlik vb.) sağlamak.</li>
                            <li>Yazılım arayüzlerine yetkisiz erişim sağlamaya çalışmamak veya sistemleri hackleme girişiminde bulunmamak.</li>
                            <li>Sistemi yasadışı amaçlarla, örneğin çalışanların gizliliğini ihlal edecek izinsiz izleme faaliyetleri için kullanmamak.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">5. Hizmet Kesintileri ve Güncellemeler</h2>
                        <p>
                            IYESYS, sistem performansını artırmak ve güvenlik açıklarını kapatmak amacıyla yazılımlarına uzaktan veya yerinde güncellemeler yapabilir. Bakım ve güncelleme çalışmaları sırasında oluşabilecek geçici hizmet kesintilerinden şirketimiz sorumlu tutulamaz. Donanım arızalarında garanti kapsamı, Taraflar arasında imzalanan özel Satış/Hizmet Sözleşmesi hükümleri doğrultusunda işletilir.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">6. Sözleşmenin Değiştirilmesi</h2>
                        <p>
                            IYESYS, yasal gereklilikler veya yeni teknolojilerin entegrasyonu gibi nedenlerle bu Kullanım Şartları'nı önceden haber vermeksizin tek taraflı olarak değiştirme hakkını saklı tutar. Güncel şartlar web sitemizde yayınlandığı andan itibaren geçerlilik kazanır.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">7. Uyuşmazlıkların Çözümü</h2>
                        <p>
                            İşbu Sözleşme'nin uygulanmasından ve yorumlanmasından doğacak her türlü uyuşmazlıkta Türkiye Cumhuriyeti kanunları uygulanacak olup, uyuşmazlıkların çözümünde İstanbul Mahkemeleri ve İcra Daireleri münhasıran yetkilidir.
                        </p>
                    </section>

                </div>
            </div>
        </div>
    )
}