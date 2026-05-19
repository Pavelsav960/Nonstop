import { Link } from 'react-router';
import { serviceData } from '../../data/serviceData';
import { BUSINESS } from '../../constants';
import type { CityData } from '../../data/cityData';

type Props = { city: CityData };

const TOP_SERVICE_SLUGS = [
  'car-lockout',
  'house-lockout',
  'lock-rekey',
  'car-key-replacement',
  'key-fob-programming',
  'lock-installation-replacement',
];

const featuredServices = TOP_SERVICE_SLUGS
  .map((slug) => serviceData.find((s) => s.slug === slug))
  .filter((s): s is NonNullable<typeof s> => Boolean(s));

const categoryIcon: Record<string, JSX.Element> = {
  Automotive: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 17h.01M16 17h.01M3 11l1.5-5A2 2 0 016.4 4h11.2a2 2 0 011.9 1.4L21 11M3 11h18M3 11v6a1 1 0 001 1h1a2 2 0 104 0h6a2 2 0 104 0h1a1 1 0 001-1v-6" />
    </svg>
  ),
  Residential: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  ),
  Emergency: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  General: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
    </svg>
  ),
};

export default function CityServicesSection({ city }: Props) {
  return (
    <section className="section-ref bg-[#F5F5F5]">
      <div className="container-ref">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-primary-600 text-[14px] sm:text-[16px] font-semibold tracking-wide normal-case mb-3">
            Our Services
          </p>
          <h2 className="text-[#17171A] max-w-4xl mx-auto px-2">
            Locksmith Services In {city.name}
          </h2>
          <p className="mt-4 text-[16px] sm:text-[18px] lg:text-[19px] text-gray-700 max-w-2xl mx-auto leading-relaxed px-4 font-medium">
            <strong className="text-[#17171A] font-bold">24/7 emergency response</strong> for lockouts, lock rekeys, key fob programming, and more, serving {city.name} homes, cars, and businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {featuredServices.map((service) => (
            <Link
              key={service.slug}
              to={`/services/${service.slug}`}
              aria-label={`${service.name} in ${city.name}, MO`}
              className="group bg-white rounded-2xl p-6 sm:p-7 border border-gray-200 shadow-sm hover:shadow-md hover:border-primary-300 transition-all duration-300 flex flex-col"
            >
              <div className="text-primary-500 mb-4 transition-transform duration-300 group-hover:scale-105">
                {categoryIcon[service.category] || categoryIcon.General}
              </div>
              <p className="text-primary-600 text-[12px] font-bold tracking-[0.06em] uppercase mb-2">
                {service.category}
              </p>
              <h3 className="!text-[22px] sm:!text-[24px] lg:!text-[26px] !font-bold text-[#17171A] group-hover:text-primary-600 transition-colors leading-[1.2]">
                {service.name}
              </h3>
              <p className="text-gray-700 leading-[1.6] text-[15px] sm:text-[16px] mt-3 normal-case flex-1 font-medium">
                {service.shortDescription}
              </p>
              <span className="inline-flex items-center text-primary-600 font-bold text-[15px] sm:text-[16px] mt-5 group-hover:gap-2 transition-all gap-1 normal-case">
                View Service in {city.name}
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          ))}
        </div>

        {/* Related services prose */}
        <div className="mt-12 sm:mt-14 max-w-3xl mx-auto text-center px-4">
          <p className="text-[14px] sm:text-[15px] text-gray-600 leading-[1.7] normal-case">
            We also handle <strong className="font-semibold text-[#17171A]">front door lock installation</strong>, <strong className="font-semibold text-[#17171A]">smart lock setup</strong>, lock changes, keyless entry systems, key duplication, transponder key programming, car key cutting, and more in <strong className="font-semibold text-[#17171A]">{city.name}</strong>. Our mobile team handles it 24/7.
          </p>
        </div>

        {/* Bottom CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 mt-8 sm:mt-10">
          <Link
            to="/services"
            className="inline-flex items-center justify-center gap-2 bg-primary-500 hover:bg-primary-600 text-white font-bold text-[15px] sm:text-base py-3 px-6 rounded-lg shadow-sm hover:shadow-md transition-all"
          >
            View All Services
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          <a
            href={BUSINESS.phoneTel}
            className="inline-flex items-center gap-1 text-primary-600 hover:text-primary-700 font-semibold text-[15px] sm:text-base underline underline-offset-4 transition-colors"
          >
            Or Call {BUSINESS.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
