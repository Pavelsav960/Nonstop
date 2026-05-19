import { Link } from 'react-router';
import { KeyRound, Home, Car, Wrench, Lock, Smartphone } from 'lucide-react';

const reasons = [
  {
    Icon: Car,
    question: 'Locked out of your car?',
    label: 'Car Lockout',
    slug: 'car-lockout',
  },
  {
    Icon: Home,
    question: 'Locked out of your house?',
    label: 'House Lockout',
    slug: 'house-lockout',
  },
  {
    Icon: KeyRound,
    question: 'Lost your car keys?',
    label: 'Car Key Replacement',
    slug: 'car-key-replacement',
  },
  {
    Icon: Wrench,
    question: 'Broken key in the lock?',
    label: 'Broken Key Extraction',
    slug: 'broken-key-extraction',
  },
  {
    Icon: Lock,
    question: 'Need locks rekeyed?',
    label: 'Lock Rekey',
    slug: 'lock-rekey',
  },
  {
    Icon: Smartphone,
    question: 'Smart lock setup or issue?',
    label: 'Smart Lock Installation',
    slug: 'smart-lock-installation',
  },
];

export default function ContactCommonReasonsSection() {
  return (
    <section className="section-ref bg-white" aria-labelledby="common-reasons-heading">
      <div className="container-ref">
        <div className="text-center mb-12 sm:mb-14">
          <p className="text-primary-600 text-[14px] sm:text-[16px] font-semibold tracking-wide normal-case mb-3">
            What Can We Help With?
          </p>
          <h2 id="common-reasons-heading" className="text-[#17171A] max-w-4xl mx-auto px-2">
            Common Reasons People Reach Out
          </h2>
          <p className="mt-4 text-[16px] sm:text-[18px] lg:text-[19px] text-gray-700 max-w-2xl mx-auto leading-relaxed px-4 font-medium">
            Already know what you need? Jump straight to your service for pricing details, FAQs, and customer reviews.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 max-w-5xl mx-auto">
          {reasons.map(({ Icon, question, label, slug }) => (
            <Link
              key={slug}
              to={`/services/${slug}`}
              className="group flex items-start gap-4 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-primary-300 transition-all duration-300 p-5 sm:p-6"
              aria-label={`Go to ${label} service page`}
            >
              <span className="w-12 h-12 rounded-full bg-primary-50 group-hover:bg-primary-500 flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                <Icon className="w-6 h-6 text-primary-600 group-hover:text-white transition-colors duration-300" strokeWidth={2.5} aria-hidden="true" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="!text-[16px] sm:!text-[17px] !font-bold text-[#17171A] leading-tight normal-case">
                  {question}
                </p>
                <span className="inline-flex items-center gap-1 mt-2 text-primary-600 group-hover:text-primary-700 font-semibold text-[14px] normal-case">
                  {label}
                  <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
