import { Phone } from 'lucide-react';
import { BUSINESS } from '../constants';

export default function Guarantee() {
  return (
    <section
      className="bg-gray-900 py-14 sm:py-18 lg:py-20"
      aria-labelledby="guarantee-heading"
    >
      <div className="container-ref">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-20 lg:gap-28 items-center">
          {/* Left section: 100% Guarantee badge */}
          <div className="flex justify-center md:justify-end">
            <div
              className="relative w-52 h-52 sm:w-60 sm:h-60 lg:w-72 lg:h-72 rounded-full border-[3px] border-white p-2.5 flex items-center justify-center"
              aria-hidden="true"
            >
              <div className="w-full h-full rounded-full border-[3px] border-white flex flex-col items-center justify-center">
                <span className="text-white text-[48px] sm:text-[56px] lg:text-[68px] font-bold leading-none">
                  100%
                </span>
                <span className="bg-white text-gray-900 text-[12px] sm:text-[13px] lg:text-[15px] font-bold tracking-[0.18em] mt-3 px-3 py-1 rounded-sm">
                  GUARANTEE
                </span>
              </div>
            </div>
          </div>

          {/* Right section: text starts at the middle, flows right */}
          <div className="text-center md:text-left max-w-xl">
            <p className="text-white/80 text-[14px] sm:text-[15px] font-semibold tracking-wide normal-case mb-4">
              Our Promise
            </p>
            <h2
              id="guarantee-heading"
              className="text-white !text-[26px] sm:!text-[32px] lg:!text-[40px] !font-bold leading-[1.2] mb-8"
            >
              <span className="sm:whitespace-nowrap">Honest Service Every Time.</span> Transparent Pricing, No Hidden Fees.
            </h2>
            <a
              href={BUSINESS.phoneTel}
              className="inline-flex items-center justify-center gap-2 bg-primary-500 hover:bg-primary-600 text-white text-base sm:text-lg font-bold py-3.5 px-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl"
              aria-label={`Call ${BUSINESS.name} at ${BUSINESS.phone}`}
            >
              <Phone className="h-5 w-5 flex-shrink-0 animate-pulse" />
              <span>Call Now: {BUSINESS.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
