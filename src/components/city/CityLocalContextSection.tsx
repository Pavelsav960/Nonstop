import { Link } from 'react-router';
import { MapPin, Building2, Home } from 'lucide-react';
import type { CityData } from '../../data/cityData';

type Props = { city: CityData };

export default function CityLocalContextSection({ city }: Props) {
  return (
    <section className="section-ref bg-[#F5F5F5]" aria-labelledby="city-local-heading">
      <div className="container-ref">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10 sm:mb-12">
            <p className="text-primary-600 text-[14px] sm:text-[16px] font-semibold tracking-wide normal-case mb-3">
              Local Knowledge
            </p>
            <h2 id="city-local-heading" className="text-[#17171A] px-2">
              Locksmith Services Tailored To {city.name}
            </h2>
          </div>

          {/* Local context paragraph */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8 lg:p-10">
            <p className="text-[16px] sm:text-[17px] lg:text-[18px] text-[#333437] leading-[1.7] normal-case">
              {city.localContext}
            </p>

            {/* Service quick links — Common services for this area */}
            <div className="mt-8 pt-6 border-t border-gray-100">
              <p className="text-[14px] font-bold text-[#17171A] uppercase tracking-wide mb-4 normal-case">
                Common Locksmith Needs in {city.name}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                <Link
                  to="/services/house-lockout"
                  className="group flex items-center gap-3 bg-[#F5F5F5] hover:bg-primary-50 rounded-xl px-4 py-3 transition-colors"
                >
                  <span className="w-9 h-9 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                    <Home className="w-4 h-4 text-primary-600" strokeWidth={2.5} />
                  </span>
                  <span className="text-[14px] font-bold text-[#17171A] group-hover:text-primary-600 transition-colors normal-case">
                    Residential
                  </span>
                </Link>
                <Link
                  to="/services/commercial-lockout"
                  className="group flex items-center gap-3 bg-[#F5F5F5] hover:bg-primary-50 rounded-xl px-4 py-3 transition-colors"
                >
                  <span className="w-9 h-9 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-4 h-4 text-primary-600" strokeWidth={2.5} />
                  </span>
                  <span className="text-[14px] font-bold text-[#17171A] group-hover:text-primary-600 transition-colors normal-case">
                    Commercial
                  </span>
                </Link>
                <Link
                  to="/services/car-lockout"
                  className="group flex items-center gap-3 bg-[#F5F5F5] hover:bg-primary-50 rounded-xl px-4 py-3 transition-colors"
                >
                  <span className="w-9 h-9 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-primary-600" strokeWidth={2.5} />
                  </span>
                  <span className="text-[14px] font-bold text-[#17171A] group-hover:text-primary-600 transition-colors normal-case">
                    Automotive
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
