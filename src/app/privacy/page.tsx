'use client'

import { ShieldCheck, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function PrivacyPolicyPage() {
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
                            <ShieldCheck className="w-7 h-7" />
                        </div>
                        <h1 className="text-4xl lg:text-5xl font-bold text-black tracking-tight">Gizlilik Politikası</h1>
                    </div>
                    <p className="text-slate-500 font-medium">Son Güncelleme: {lastUpdated}</p>
                </div>

                {/* İçerik */}
                <div className="bg-white rounded-sm border border-slate-200 p-8 md:p-12 shadow-sm space-y-12 text-[17px] leading-relaxed text-slate-700">

                    <section>
                        <h2 className="text-2xl font-bold text-black mb-4 tracking-tight">1. Giriş ve Veri Sorumlusunun Kimliği</h2>
                        <p className="font-medium">
                            <strong>IYESYS YAZILIM BİLİŞİM VE TEKNOLOJİ A.Ş.</strong> ("IYESYS", "Şirket", "Biz") olarak, müşterilerimizin, çalışanların ve web sitemizi ziyaret eden kullanıcıların mahremiyetine ve kişisel verilerinin korunmasına büyük önem vermekteyiz. İşbu Gizlilik ve Kişisel Verilerin Korunması Politikası ("Politika"), 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") ve ilgili mevzuat uyarınca kişisel verilerinizin toplanması, işlenmesi, aktarılması ve korunmasına ilişkin esasları belirlemektedir.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-black mb-4 tracking-tight">2. Toplanan Kişisel Veriler</h2>
                        <p className="mb-4 font-medium">Hizmetlerimizi sunarken ve operasyonlarımızı yürütürken aşağıdaki veri kategorilerini toplayabiliriz:</p>
                        <ul className="list-disc pl-6 space-y-3 font-medium">
                            <li><strong className="text-black">Kimlik ve İletişim Verileri:</strong> Ad, soyad, e-posta adresi, telefon numarası, şirket bilgileri ve unvan.</li>
                            <li><strong className="text-black">Sistem ve Görüntü Verileri:</strong> Yapay zeka tabanlı iş güvenliği kamera ve sensör sistemlerimiz aracılığıyla elde edilen anlık görüntüler, konum (UWB/sensör) verileri ve olay kayıtları (Kamera sistemlerimiz kapalı devre mantığıyla çalışmakta olup, aksi belirtilmedikçe biometrik kimlik tespiti yapılmamaktadır).</li>
                            <li><strong className="text-black">İşlem ve Kullanım Verileri:</strong> Web sitemizi veya yazılım arayüzlerimizi kullanımınıza ilişkin IP adresleri, log kayıtları, çerezler (cookies) ve sistem performans verileri.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-black mb-4 tracking-tight">3. Kişisel Verilerin İşlenme Amaçları</h2>
                        <p className="mb-4 font-medium">Topladığımız kişisel veriler, KVKK'nın 5. ve 6. maddelerinde belirtilen şartlara uygun olarak aşağıdaki amaçlarla işlenmektedir:</p>
                        <ul className="list-disc pl-6 space-y-3 font-medium">
                            <li>Endüstriyel iş güvenliği çözümlerimizin (Hareketli ekipman güvenliği, bölge güvenliği vb.) kurulumu, işletilmesi ve optimizasyonunun sağlanması,</li>
                            <li>Olası iş kazalarını önlemek amacıyla yapay zeka algoritmalarımızın eğitilmesi ve sistem doğruluk oranlarının artırılması (veriler anonimleştirilerek kullanılır),</li>
                            <li>Müşteri taleplerinin, teknik destek ve demo süreçlerinin yönetilmesi,</li>
                            <li>Bilgi güvenliği süreçlerinin yürütülmesi ve yasal yükümlülüklerimizin yerine getirilmesi.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-black mb-4 tracking-tight">4. Kişisel Verilerin Aktarılması</h2>
                        <p className="font-medium">
                            IYESYS, kişisel verilerinizi kural olarak üçüncü şahıslarla paylaşmaz. Ancak, hizmetin gereği olarak (örneğin; güvenli bulut sunucu hizmetleri alınması) gizlilik sözleşmeleri çerçevesinde hizmet sağlayıcılarımızla veya yasal bir zorunluluk doğması halinde yetkili kamu kurum ve kuruluşlarıyla KVKK'nın 8. ve 9. maddelerine uygun olarak paylaşabilir.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-black mb-4 tracking-tight">5. Veri Güvenliği</h2>
                        <p className="font-medium">
                            Kişisel verilerinizin hukuka aykırı olarak işlenmesini ve verilere hukuka aykırı olarak erişilmesini önlemek, verilerin muhafazasını sağlamak amacıyla uçtan uca şifreleme, yetki matrisleri, güvenlik duvarları (firewall) ve sızma testleri gibi endüstri standartlarında uygun güvenlik düzeyini temin etmeye yönelik gerekli her türlü teknik ve idari tedbiri almaktayız.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-black mb-4 tracking-tight">6. İlgili Kişinin Hakları (KVKK Madde 11)</h2>
                        <p className="mb-4 font-medium">Kişisel veri sahibi olarak KVKK'nın 11. maddesi uyarınca aşağıdaki haklara sahipsiniz:</p>
                        <ul className="list-disc pl-6 space-y-3 font-medium">
                            <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme,</li>
                            <li>Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme,</li>
                            <li>Kişisel verilerinizin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme,</li>
                            <li>Yurt içinde veya yurt dışında kişisel verilerinizin aktarıldığı üçüncü kişileri bilme,</li>
                            <li>Kişisel verilerinizin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme ve bu kapsamda yapılan işlemin verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme,</li>
                            <li>Kişisel verilerinizin silinmesini veya yok edilmesini isteme.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-black mb-4 tracking-tight">7. İletişim</h2>
                        <p className="font-medium">
                            KVKK kapsamındaki haklarınızı kullanmak veya gizlilik politikamız ile ilgili sorularınızı iletmek için <strong className="text-black">info@iyesys.com</strong> e-posta adresi üzerinden bizimle iletişime geçebilirsiniz.
                        </p>
                    </section>

                </div>
            </div>
        </div>
    )
}