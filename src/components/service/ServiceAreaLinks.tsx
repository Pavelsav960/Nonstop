import { Link } from 'react-router';
import { MapPin } from 'lucide-react';
import { cityData } from '../../data/cityData';
import type { ServiceData } from '../../data/serviceData';

type Props = { service: ServiceData };

export default function ServiceAreaLinks({ service }: Props) {
  return (
    <section className="section-ref bg-[#F5F5F5]" aria-labelledby="service-areas-heading">
      <div className="container-ref">
        <div className="text-center mb-10 sm:mb-12">
          <p className="text-primary-600 text-[14px] sm:text-[16px] font-semibold tracking-wide normal-case mb-3">
            Service Areas
          </p>
          <h2 id="service-areas-heading" className="text-[#17171A] max-w-4xl mx-auto px-2">
            {service.name} Across St. Louis County
          </h2>
          <p className="mt-4 text-[16px] sm:text-[18px] lg:text-[19px] text-gray-700 max-w-2xl mx-auto leading-relaxed px-4 font-medium">
            We provide <strong className="text-[#17171A] font-bold">{service.name.toLowerCase()}</strong> in <strong className="text-[#17171A] font-bold">{cityData.length} cities</strong> across the St. Louis metro. Click your city for local pricing and response times.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto">
          {cityData.map((city) => (
            <Link
              key={city.slug}
              to={`/locksmith/${city.slug}`}
              aria-label={`${service.name} in ${city.name}, MO`}
              className="group flex items-center gap-2.5 sm:gap-3 bg-white rounded-2xl px-3 py-3 sm:px-4 sm:py-3.5 border border-gray-200 hover:border-primary-300 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-primary-50 group-hover:bg-primary-500 flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                <MapPin className="w-4 h-4 text-primary-600 group-hover:text-white transition-colors duration-300" strokeWidth={2.5} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-[13px] sm:text-[15px] font-bold text-[#17171A] group-hover:text-primary-600 transition-colors normal-case leading-tight">
                  {city.name}
                </span>
                <span className="block text-[11px] sm:text-[12px] text-gray-500 normal-case mt-1">
                  {city.responseTime}
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
