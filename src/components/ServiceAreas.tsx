import { Link } from 'react-router';
import { MapPin } from 'lucide-react';
import { BUSINESS } from '../constants';
import { cityData } from '../data/cityData';

export default function ServiceAreas() {
  return (
    <section id="service-areas" className="section-ref bg-[#F5F5F5]">
      <div className="container-ref">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-primary-600 text-[14px] sm:text-[16px] font-semibold tracking-wide normal-case mb-3">
            Service Areas
          </p>
          <h2 className="text-[#17171A] max-w-4xl mx-auto px-2">
            Locksmith Service Across St. Louis County
          </h2>
          <p className="mt-4 text-[16px] sm:text-[18px] lg:text-[19px] text-gray-700 max-w-2xl mx-auto leading-relaxed px-4 font-medium">
            Fast, reliable mobile locksmith service in <strong className="text-[#17171A] font-bold">{cityData.length} cities</strong> across St. Louis County and surrounding communities.
          </p>
        </div>

        {/* City chips grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 mb-12 sm:mb-14">
          {cityData.map((city) => (
            <Link
              key={city.slug}
              to={`/locksmith/${city.slug}`}
              aria-label={`Locksmith services in ${city.name}, MO with ${city.responseTime} response time`}
              className="group flex items-center gap-2.5 sm:gap-3 bg-white rounded-2xl px-3 py-3 sm:px-4 sm:py-3.5 border border-gray-200 hover:border-primary-300 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-primary-50 group-hover:bg-primary-500 flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                <MapPin className="w-4 h-4 text-primary-600 group-hover:text-white transition-colors duration-300" strokeWidth={2.5} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-[13px] sm:text-[15px] font-bold text-[#17171A] group-hover:text-primary-600 transition-colors normal-case leading-tight">
                  Locksmith {city.name}
                </span>
                <span className="block text-[11px] sm:text-[12px] text-gray-500 normal-case mt-1">
                  {city.responseTime}
                </span>
              </span>
            </Link>
          ))}
        </div>

        {/* Map */}
        <div className="rounded-2xl overflow-hidden shadow-md border border-gray-200 mb-10 sm:mb-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199412.27235498!2d-91.0323892!3d38.6894101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47405523e97a0903%3A0x6d8c00414bcad66e!2sNonstop%20Lock%20%26%20Key!5e0!3m2!1sen!2sus!4v1700000000000"
            width="100%"
            height="380"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`${BUSINESS.name} - Locksmith Service Area Map in St. Louis County`}
          />
        </div>

        {/* Bottom CTA */}
        <div className="text-center max-w-xl mx-auto">
          <p className="text-[15px] sm:text-[16px] text-gray-600 mb-5 leading-relaxed normal-case">
            Don't see your area? We cover all of St. Louis County. Call to confirm service.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5">
            <a
              href={BUSINESS.phoneTel}
              className="inline-flex items-center justify-center gap-2 bg-primary-500 hover:bg-primary-600 text-white font-bold text-[15px] sm:text-base py-3 px-6 rounded-lg shadow-sm hover:shadow-md transition-all"
              aria-label={`Call ${BUSINESS.name} at ${BUSINESS.phone}`}
            >
              Call {BUSINESS.phone}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <Link
              to="/service-areas"
              className="inline-flex items-center gap-1 text-primary-600 hover:text-primary-700 font-semibold text-[15px] sm:text-base underline underline-offset-4 transition-colors"
            >
              View All Service Areas
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
