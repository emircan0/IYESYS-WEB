'use client'

import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: "Forklift kazaları nasıl önlenir?",
    answer: "Forklift kazaları, IYESYS'in geliştirdiği yapay zeka destekli forklift kamera sistemleri ve yaya algılama teknolojileri ile önlenir. Sistem, tehlike anında forklift hız yavaşlatma mekanizmasını veya forklift durdurma sistemini devreye sokarak operatörleri ve yayaları anında uyarır."
  },
  {
    question: "Yapay zekalı iş kazaları çözümleri nelerdir?",
    answer: "Yapay zeka (AI) çözümlerimiz, kameralar aracılığıyla üretim alanını 7/24 izler. İş sağlığı ve güvenliği (İSG) standartlarına uyulup uyulmadığını, baret ve yelek (KKD) kullanımını ve tehlikeli alan ihlallerini gerçek zamanlı tespit ederek kaza önleyici sistem olarak çalışır."
  },
  {
    question: "Fabrika iş kazası önleyici sistemler nasıl çalışır?",
    answer: "Fabrikanın kilit noktalarına yerleştirilen yapay zeka kameraları ve IoT sensörleri ile veri toplanır. İş güvenliğinde yapay zeka uygulamaları, bu verileri anlık işleyerek potansiyel riskleri algılar ve aktif uyarı sistemlerini (sesli/ışıklı alarm, otomatik yavaşlatma) devreye alır."
  },
  {
    question: "IoT iş kazaları ve güvenliği sistemlerinizin avantajı nedir?",
    answer: "IoT (Nesnelerin İnterneti) cihazlarımız, yapay zeka yazılımlarımızla entegre çalışarak sadece anlık uyarı vermekle kalmaz, aynı zamanda gelişmiş risk analizi ve iş kazası bildirimi yapar. Veriye dayalı bu sistemler, proaktif iş kazası önlemleri almanızı ve fabrikanızı daha güvenli yönetmenizi sağlar."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Sıkça Sorulan Sorular
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Yapay zeka destekli İSG çözümlerimiz hakkında merak edilenler.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`border rounded-2xl transition-colors duration-200 ${isOpen ? 'bg-blue-50/50 border-blue-200 dark:bg-blue-900/10 dark:border-blue-800/30' : 'bg-white border-gray-200 dark:bg-gray-800/50 dark:border-gray-700'}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none group"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-gray-900 dark:text-white pr-8 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {faq.question}
                  </span>
                  <span className={`text-blue-600 dark:text-blue-400 transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}>
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </span>
                </button>
                {/* 
                  IMPORTANT: For SEO, the text is ALWAYS in the DOM. 
                  We use max-height, opacity, and grid layout trick to animate height while keeping it physically in the HTML.
                */}
                <div 
                  className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 pb-6' : 'grid-rows-[0fr] opacity-0'}`}
                  aria-hidden={!isOpen}
                >
                  <div className="overflow-hidden px-6">
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed pt-2">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
