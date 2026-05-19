import { useState } from 'react';
import { BUSINESS } from '../../constants';
import { cityData } from '../../data/cityData';

const faqs = [
  {
    question: `How long has ${BUSINESS.name} been a locksmith in St. Louis?`,
    answer: `${BUSINESS.name} has served the St. Louis area since 2010. Our family-owned mobile locksmith team brings over 16 years of combined experience to every job, from emergency lockouts to high-security installations.`,
  },
  {
    question: 'Are you licensed and insured to work in Missouri?',
    answer: 'Yes. We are fully licensed and insured to provide locksmith services throughout Missouri. Every technician carries proper credentials and we are happy to verify our license details on request.',
  },
  {
    question: `Is ${BUSINESS.name} family-owned and operated?`,
    answer: `Yes. We are a family-owned business based in St. Louis County, not a national franchise or call-center dispatch service. When you call us, you reach a real local locksmith who answers to the same owner every day.`,
  },
  {
    question: 'What areas of St. Louis County do you serve?',
    answer: `We provide mobile locksmith service to ${cityData.length} cities across St. Louis County, including St. Louis, Clayton, Webster Groves, Kirkwood, Chesterfield, Ballwin, Creve Coeur, Saint Charles, and more. Visit our Service Areas page for the full list and local response times.`,
  },
  {
    question: 'Are you really available 24 hours a day, including holidays?',
    answer: `Yes. We answer the phone 24 hours a day, 7 days a week, 365 days a year. Emergencies do not follow business hours, and neither do we. Whether you are locked out at 3am on Christmas or first thing on a workday, we will dispatch a technician right away.`,
  },
];

export default function AboutFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const ldJson = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  return (
    <section className="section-ref bg-white" aria-labelledby="about-faq-heading">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }} />
      <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-primary-600 text-[14px] sm:text-[16px] font-semibold tracking-wide normal-case mb-3">
            FAQ
          </p>
          <h2 id="about-faq-heading" className="text-[#17171A] max-w-4xl mx-auto px-2">
            About Nonstop Lock & Key
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-4 sm:py-5 text-left hover:bg-gray-50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <h3 className="!text-[16px] sm:!text-[18px] !font-bold text-[#17171A] flex-1 normal-case leading-snug">
                    {faq.question}
                  </h3>
                  <svg
                    className={`w-5 h-5 text-primary-600 flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-[15px] sm:text-[16px] text-gray-700 leading-[1.65] normal-case">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
