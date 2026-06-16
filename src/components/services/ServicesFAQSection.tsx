import { useState } from 'react';
import { BUSINESS } from '../../constants';

const faqs = [
  {
    question: 'Are all your locksmith services available 24/7?',
    answer:
      'Yes. Emergency lockouts (car, house, commercial) and broken key extractions are available around the clock, including weekends and holidays. Larger projects like full lock installations, rekeying multiple doors, or smart-lock setups can usually be scheduled the same day if you call before noon.',
  },
  {
    question: 'Do you offer the same services in every city you serve?',
    answer: `Yes. Every service on this page is available across all ${20} cities we list in St. Louis County, with the same upfront pricing. The closest mobile technician handles your call regardless of which city you are in.`,
  },
  {
    question: 'What is the difference between rekeying a lock and replacing it?',
    answer:
      'Rekeying changes the internal pins of your existing lock so old keys no longer work, while keeping the same hardware. It is usually faster and significantly cheaper than replacement. Replacement is for damaged, worn-out, or outdated locks where the hardware itself needs swapping. We will tell you honestly which makes sense for your situation when you call.',
  },
  {
    question: 'Do you work on all car makes and models?',
    answer:
      'Yes. We program keys and key fobs and handle ignition repair for nearly every major brand including Ford, Chevrolet, Honda, Toyota, Nissan, Hyundai, Subaru, BMW, Mercedes-Benz, Audi, Acura, and Lexus. Call with your year, make, and model and we will confirm before dispatching.',
  },
  {
    question: 'Can you install any brand of smart lock?',
    answer:
      'Yes. We install and configure Schlage Encode, Yale Assure, August, Kwikset Halo, Ring, Google Nest, and other major smart-lock brands. We can also help you compare options and pick the right model for your home or business if you have not bought one yet.',
  },
  {
    question: 'Do you handle commercial security beyond simple lockouts?',
    answer: `Yes. We help businesses with master key systems, multi-door rekeying after staff changes, high-security and Grade 1 commercial locks, panic bars, and access control. Call ${BUSINESS.phone} to discuss specifics and we will give you an upfront quote.`,
  },
];

export default function ServicesFAQSection() {
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
    <section className="section-ref bg-white" aria-labelledby="services-faq-heading">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }} />
      <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-primary-600 text-[14px] sm:text-[16px] font-semibold tracking-wide normal-case mb-3">
            FAQ
          </p>
          <h2 id="services-faq-heading" className="text-[#17171A] max-w-4xl mx-auto px-2">
            Common Questions About Our Services
          </h2>
          <p className="mt-4 text-[16px] sm:text-[18px] lg:text-[19px] text-gray-700 max-w-2xl mx-auto leading-relaxed px-4 font-medium">
            Quick answers about what we offer, how pricing works, and what to expect.
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
