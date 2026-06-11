import { useState } from 'react';
import { BUSINESS } from '../../constants';
import { cityData } from '../../data/cityData';

const faqs = [
  {
    question: `Do you really serve all ${cityData.length} cities you list?`,
    answer: `Yes. Our mobile fleet is positioned across St. Louis County so we can reach every city listed within our standard 15–30 minute window. Each city has its own dedicated page with local pricing details, response times, and reviews from real customers in that area.`,
  },
  {
    question: 'Are response times the same in every city?',
    answer: `Most cities see a 15–30 minute average arrival. A few outlying areas (Saint Charles, Town and Country) may add 5–10 minutes during peak hours or bad weather. We give you an honest ETA when you call so there are no surprises.`,
  },
  {
    question: 'Do you charge extra for outlying areas?',
    answer: `No. We charge the same upfront rate across every city we list, with no hidden distance fees. After-hours, weekend, and holiday rates are the same regardless of which St. Louis County city you are in. If a job ever requires extra time or parts, the technician will quote it on-site before doing the work.`,
  },
  {
    question: 'Do you cover areas outside St. Louis County?',
    answer: `Our standard service area is St. Louis County and the cities listed on this page, including Saint Charles just over the line. If you are slightly outside that area, call ${BUSINESS.phone} — we often cover nearby zip codes and will give you an honest answer on the phone whether we can reach you.`,
  },
  {
    question: 'Can you come the same day to my city?',
    answer: `For most jobs across St. Louis County, yes — usually within an hour. Emergency lockouts and lost keys are handled within 15–30 minutes. Larger installs (multiple lock replacements, smart lock installations) can usually be scheduled the same day if you call before noon.`,
  },
  {
    question: 'What if my zip code is not on your list?',
    answer: `Call us anyway. The city list is the cities where we have routine demand and dedicated pricing. We regularly help neighborhoods just outside the listed cities and can often dispatch a tech the same hour. There is no charge for asking.`,
  },
];

export default function ServiceAreasFAQSection() {
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
    <section className="section-ref bg-[#F5F5F5]" aria-labelledby="areas-faq-heading">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }} />
      <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-primary-600 text-[14px] sm:text-[16px] font-semibold tracking-wide normal-case mb-3">
            FAQ
          </p>
          <h2 id="areas-faq-heading" className="text-[#17171A] max-w-4xl mx-auto px-2">
            Service Areas — Frequently Asked Questions
          </h2>
          <p className="mt-4 text-[16px] sm:text-[18px] lg:text-[19px] text-gray-700 max-w-2xl mx-auto leading-relaxed px-4 font-medium">
            Quick answers about coverage, response times, and what to expect from your local technician.
          </p>
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
