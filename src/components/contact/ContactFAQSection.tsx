import { useState } from 'react';
import { BUSINESS } from '../../constants';

const faqs = [
  {
    question: 'How fast will someone respond when I call?',
    answer: `Most calls are answered within seconds by a real local team member, not a call center. Average on-site arrival across St. Louis County is 15–30 minutes, with longer reaches sometimes adding a few minutes during peak hours.`,
  },
  {
    question: 'Do you charge for service estimates?',
    answer: `No. Estimates over the phone are free, and we share an upfront price before any work begins. There are no hidden fees and no obligation if you decide not to proceed.`,
  },
  {
    question: 'What payment methods do you accept?',
    answer: `We accept all major credit and debit cards (Visa, Mastercard, American Express, Discover), as well as cash. Payment is collected on-site after the job is complete and you are satisfied with the work.`,
  },
  {
    question: 'What information should I have ready when I call?',
    answer: `Having a few details ready speeds things up: your current location or address, the type of lock or vehicle involved (make, model, and year for car keys helps), a brief description of the situation, and the best phone number for the technician to reach you on arrival.`,
  },
  {
    question: 'Are you really available after hours and on holidays?',
    answer: `Yes. We answer the phone 24 hours a day, 7 days a week, 365 days a year, including weekends and major holidays. Emergency lockouts and broken keys do not wait for business hours, and neither do we. After-hours service may include a small additional dispatch fee.`,
  },
  {
    question: 'How long does it take to get a reply to the contact form?',
    answer: `Form messages are typically answered within a few hours during the day and by the next morning if sent late at night. If you are locked out or need help right away, calling ${BUSINESS.phone} is always faster than waiting on a form reply.`,
  },
];

export default function ContactFAQSection() {
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
    <section className="section-ref bg-white" aria-labelledby="contact-faq-heading">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }} />
      <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-primary-600 text-[14px] sm:text-[16px] font-semibold tracking-wide normal-case mb-3">
            FAQ
          </p>
          <h2 id="contact-faq-heading" className="text-[#17171A] max-w-4xl mx-auto px-2">
            Questions Before You Reach Out?
          </h2>
          <p className="mt-4 text-[16px] sm:text-[18px] lg:text-[19px] text-gray-700 max-w-2xl mx-auto leading-relaxed px-4 font-medium">
            Quick answers to the things customers ask us most before they call.
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

        <div className="mt-10 sm:mt-12 text-center">
          <p className="text-[15px] sm:text-[16px] text-gray-700 normal-case mb-4">
            Still have a question? We are happy to answer.
          </p>
          <a
            href={BUSINESS.phoneTel}
            className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-[15px] sm:text-base py-3.5 px-6 rounded-lg shadow-sm hover:shadow-md transition-all"
            aria-label={`Call ${BUSINESS.name} at ${BUSINESS.phone}`}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.487 17.14l-4.065-3.696a1.001 1.001 0 00-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 00.043-1.391L6.859 3.513a1 1 0 00-1.391-.087l-2.17 1.861a1 1 0 00-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 00.648-.291l1.86-2.171a.997.997 0 00-.085-1.39z" />
            </svg>
            Call {BUSINESS.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
