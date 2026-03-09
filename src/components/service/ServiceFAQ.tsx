import { useState } from 'react';
import type { ServiceData } from '../../data/serviceData';

interface ServiceFAQProps {
  service: ServiceData;
}

export default function ServiceFAQ({ service }: ServiceFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 sm:py-24 bg-gray-50" aria-labelledby="faq-heading">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="faq-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
          Frequently Asked Questions - {service.name}
        </h2>
        <div className="space-y-4">
          {service.faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 sm:p-8 text-left hover:bg-gray-50 transition-colors"
                aria-expanded={openIndex === index}
              >
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <svg
                  className={`w-6 h-6 text-primary-600 flex-shrink-0 transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`transition-all duration-200 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}
              >
                <p className="px-6 sm:px-8 pb-6 sm:pb-8 text-gray-700 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
