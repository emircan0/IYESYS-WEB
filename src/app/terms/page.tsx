'use client'

import { FileText, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function TermsOfServicePage() {
    const lastUpdated = "10 Mart 2026"

    return (
        <div className="min-h-screen bg-slate-50 pt-32 pb-24 font-sans">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Üst Kısım */}
                <div className="mb-16">
                    <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-black transition-colors mb-8 font-bold text-sm uppercase tracking-widest">
                        <ArrowLeft className="w-4 h-4" /> Ana Sayfaya Dön
                    </Link>
                    <div className="flex items-center gap-5 mb-6">
                        <div className="flex items-center justify-center w-14 h-14 bg-black text-white rounded-sm">
                            <FileText className="w-7 h-7" />
                        </div>
                        <h1 className="text-4xl lg:text-5xl font-bold text-black tracking-tight">Kullanım Şartları</h1>
                    </div>
                    <p className="text-slate-500 font-medium">Son Güncelleme: {lastUpdated}</p>
                </div>

                {/* İçerik */}
                <div className="bg-white rounded-sm border border-slate-200 p-8 md:p-12 shadow-sm space-y-12 text-[17px] leading-relaxed text-slate-700">

                    <section>
                        <h2 className="text-2xl font-bold text-black mb-4 tracking-tight">1. Taraflar ve Kabul</h2>
                        <p className="font-medium">
                            Bu Kullanım Şartları Sözleşmesi ("Sözleşme"), iyesys.com web sitesini ve <strong className="text-black">IYESYS YAZILIM BİLİŞİM VE TEKNOLOJİ A.Ş.</strong> ("IYESYS") tarafından sağlanan yapay zeka tabanlı iş güvenliği yazılımları ve donanımlarını ("Hizmetler") kullanan her gerçek veya tüzel kişi ("Kullanıcı" veya "Müşteri") arasında akdedilmiştir. Hizmetlerimizi kullanarak veya web sitemizi ziyaret ederek bu şartları okuduğunuzu, anladığınızı ve kabul ettiğinizi beyan edersiniz.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-black mb-4 tracking-tight">2. Hizmetlerin Kapsamı ve Sınırları (Sorumluluk Reddi)</h2>
                        <p className="mb-4 font-medium">
                            IYESYS, endüstriyel sahalarda (hareketli ekipman, yükleme rampası, fabrika içi yaya bölgeleri vb.) kaza risklerini azaltmayı hedefleyen yapay zeka destekli kamera ve sensör uyarı sistemleri üretir. Ancak Kullanıcı aşağıdaki hususları peşinen kabul eder:
                        </p>
                        <ul className="list-disc pl-6 space-y-3 font-semibold text-black bg-slate-50 p-6 rounded-sm border border-slate-200">
                            <li>Sistemlerimiz birer <strong>"Erken Uyarı ve Destek"</strong> sistemidir. İnsan dikkatinin, operatör eğitiminin ve fiziksel iş güvenliği önlemlerinin yerini tutmaz.</li>
                            <li>Yapay zeka sistemleri çevresel faktörlere (ışık, toz, kör noktalar, kamera kirlenmesi) bağlı olarak %100 doğrulukla çalışmayabilir veya hatalı/eksik uyarı (false-positive / false-negative) üretebilir.</li>
                            <li>IYESYS, donanım veya yazılımın kullanımından veya uyarı vermemesinden kaynaklanabilecek doğrudan, dolaylı, maddi veya bedensel (yaralanma, ölüm dahil) hiçbir kazadan veya zarardan yasal olarak sorumlu tutulamaz. İş güvenliğinin sağlanmasında nihai sorumluluk tamamen işverene ve ilgili operatörlere aittir.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-black mb-4 tracking-tight">3. Fikri Mülkiyet Hakları</h2>
                        <p className="font-medium">
                            IYESYS tarafından geliştirilen tüm yapay zeka modelleri, kaynak kodları, yazılım mimarisi, tasarımlar, logolar, metinler, grafikler ve markalar <strong className="text-black">IYESYS YAZILIM BİLİŞİM VE TEKNOLOJİ A.Ş.</strong>'nin münhasır mülkiyetindedir ve ulusal/uluslararası telif hakları yasaları ile korunmaktadır. Kullanıcı, IYESYS'in yazılı izni olmaksızın donanımların içini açamaz, yazılımlara tersine mühendislik (reverse-engineering) yapamaz, kodları kopyalayamaz, çoğaltamaz veya ticari amaçla 3. partilere satamaz.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-black mb-4 tracking-tight">4. Kullanıcı Yükümlülükleri</h2>
                        <p className="mb-4 font-medium">Kullanıcı, IYESYS sistemlerini kullanırken aşağıdaki kurallara uymakla yükümlüdür:</p>
                        <ul className="list-disc pl-6 space-y-3 font-medium">
                            <li>Sistemlerin fiziksel bütünlüğüne (kamera lensleri, kablolama, işlemci üniteleri) zarar vermemek ve periyodik bakımlarını (temizlik vb.) sağlamak.</li>
                            <li>Yazılım arayüzlerine yetkisiz erişim sağlamaya çalışmamak veya sistemleri hackleme girişiminde bulunmamak.</li>
                            <li>Sistemi yasadışı amaçlarla, örneğin çalışanların gizliliğini ihlal edecek izinsiz izleme faaliyetleri için kullanmamak.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-black mb-4 tracking-tight">5. Hizmet Kesintileri ve Güncellemeler</h2>
                        <p className="font-medium">
                            IYESYS, sistem performansını artırmak ve güvenlik açıklarını kapatmak amacıyla yazılımlarına uzaktan veya yerinde güncellemeler yapabilir. Bakım ve güncelleme çalışmaları sırasında oluşabilecek geçici hizmet kesintilerinden şirketimiz sorumlu tutulamaz. Donanım arızalarında garanti kapsamı, Taraflar arasında imzalanan özel Satış/Hizmet Sözleşmesi hükümleri doğrultusunda işletilir.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-black mb-4 tracking-tight">6. Sözleşmenin Değiştirilmesi</h2>
                        <p className="font-medium">
                            IYESYS, yasal gereklilikler veya yeni teknolojilerin entegrasyonu gibi nedenlerle bu Kullanım Şartları'nı önceden haber vermeksizin tek taraflı olarak değiştirme hakkını saklı tutar. Güncel şartlar web sitemizde yayınlandığı andan itibaren geçerlilik kazanır.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-black mb-4 tracking-tight">7. Uyuşmazlıkların Çözümü</h2>
                        <p className="font-medium">
                            İşbu Sözleşme'nin uygulanmasından ve yorumlanmasından doğacak her türlü uyuşmazlıkta Türkiye Cumhuriyeti kanunları uygulanacak olup, uyuşmazlıkların çözümünde İstanbul Mahkemeleri ve İcra Daireleri münhasıran yetkilidir.
                        </p>
                    </section>

                </div>
            </div>
        </div>
    )
}