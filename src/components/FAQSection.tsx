'use client'

import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';
import type { Faq } from '@/lib/faqs';

export default function FAQSection({
  faqs,
  showHeading = true,
}: {
  faqs: Faq[]
  showHeading?: boolean
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (faqs.length === 0) return null;

  return (
    <section className="py-24 bg-white relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {showHeading && (
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-[1px] bg-black" />
              <span className="text-black text-xs font-bold uppercase tracking-[0.2em]">SSS</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-black leading-[1.1] tracking-tight">
              Sıkça Sorulan Sorular
            </h2>
            <p className="mt-4 text-slate-500 text-lg font-light leading-relaxed">
              Yapay zeka entegrasyonları, donanım uyumluluğu ve operasyonel işleyiş hakkında teknik detaylar.
            </p>
          </div>
        )}

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-sm border transition-all duration-300 ${
                  isOpen
                    ? 'border-black bg-slate-50'
                    : 'border-slate-200 bg-white hover:border-black/50'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center gap-6 group"
                  aria-expanded={isOpen}
                >
                  <span className={`font-bold text-[15px] md:text-base leading-snug transition-colors ${
                    isOpen ? 'text-black' : 'text-slate-800 group-hover:text-black'
                  }`}>
                    {faq.question}
                  </span>
                  <span className={`flex-shrink-0 w-7 h-7 rounded-full border transition-all duration-300 flex items-center justify-center ${
                    isOpen
                      ? 'border-black bg-black text-white'
                      : 'border-slate-300 text-slate-400 group-hover:border-black group-hover:text-black'
                  }`}>
                    {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 pb-5' : 'grid-rows-[0fr] opacity-0'}`}
                  aria-hidden={!isOpen}
                >
                  <div className="overflow-hidden px-6">
                    <p className="text-slate-600 text-[14px] md:text-[15px] font-medium leading-relaxed whitespace-pre-line">
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
