import { Link } from 'react-router';
import vanImage from '../assets/images/nonstop-lock-and-key-mobile-locksmith-van-st-louis-mo.jpeg';

export default function About() {
  return (
    <section id="about" className="section-ref bg-white">
      <div className="container-ref">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
          {/* Left: copy */}
          <div>
            <p className="text-primary-600 text-[14px] sm:text-[16px] font-semibold tracking-wide normal-case mb-3">
              About Us
            </p>
            <h2 className="text-[#17171A] mb-5 sm:mb-6">
              Trusted Family-Owned Locksmith In St. Louis County
            </h2>
            <p className="text-[16px] lg:text-[18px] text-[#333437] mb-4 sm:mb-5 leading-[1.6]">
              Since 2010, Nonstop Lock & Key has served homeowners, drivers, and businesses across the St. Louis area. Our family-owned mobile locksmith team covers{' '}
              <Link to="/service-areas" className="text-primary-600 hover:text-primary-700 font-medium underline-offset-2 hover:underline">
                20 cities throughout St. Louis County
              </Link>
              {' '}with a 15 to 30 minute response time, 24/7, weekends and holidays included.
            </p>
            <p className="text-[16px] lg:text-[18px] text-[#333437] mb-7 sm:mb-8 leading-[1.6]">
              From{' '}
              <Link to="/services/car-lockout" className="text-primary-600 hover:text-primary-700 font-medium underline-offset-2 hover:underline">car lockouts</Link>
              {' '}and{' '}
              <Link to="/services/car-key-replacement" className="text-primary-600 hover:text-primary-700 font-medium underline-offset-2 hover:underline">key replacement</Link>
              {' '}to{' '}
              <Link to="/services/lock-rekey" className="text-primary-600 hover:text-primary-700 font-medium underline-offset-2 hover:underline">lock rekeying</Link>
              {' '}and{' '}
              <Link to="/services/smart-lock-installation" className="text-primary-600 hover:text-primary-700 font-medium underline-offset-2 hover:underline">smart lock installation</Link>
              , our licensed technicians handle every locksmith need with upfront pricing and no hidden fees.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-2 bg-primary-500 hover:bg-primary-600 text-white font-bold text-[15px] sm:text-base py-3 px-6 rounded-lg shadow-sm hover:shadow-md transition-all"
              >
                Learn More About Us
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-1 text-primary-600 hover:text-primary-700 font-semibold text-[15px] sm:text-base underline underline-offset-4 transition-colors"
              >
                Get a Free Quote
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right: image + floating card */}
          <div className="relative mt-8 lg:mt-0">
            <div className="relative h-80 sm:h-96 lg:h-[460px] rounded-2xl overflow-hidden shadow-xl">
              <img
                src={vanImage}
                alt="Nonstop Lock & Key mobile locksmith van serving St. Louis, MO and surrounding areas"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            <div className="absolute -bottom-4 sm:-bottom-6 left-4 right-4 sm:left-auto sm:right-auto sm:-left-6 bg-primary-500 text-white p-5 sm:p-6 rounded-2xl shadow-lg sm:max-w-xs">
              <p className="text-base sm:text-lg font-bold mb-1 normal-case">Family-Owned Since 2010</p>
              <p className="text-[13px] sm:text-sm opacity-90 normal-case leading-snug">
                Licensed, insured, and trusted by St. Louis County for over 16 years.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
