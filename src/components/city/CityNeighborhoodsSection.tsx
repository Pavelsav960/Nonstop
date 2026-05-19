import { MapPin } from 'lucide-react';
import { BUSINESS } from '../../constants';
import type { CityData } from '../../data/cityData';

type Props = { city: CityData };

export default function CityNeighborhoodsSection({ city }: Props) {
  return (
    <section id="service-areas" className="section-ref bg-[#F5F5F5]">
      <div className="container-ref">
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-primary-600 text-[14px] sm:text-[16px] font-semibold tracking-wide normal-case mb-3">
            Service Areas
          </p>
          <h2 className="text-[#17171A] max-w-4xl mx-auto px-2">
            Serving Every Neighborhood In {city.name}
          </h2>
          <p className="mt-4 text-[16px] sm:text-[18px] lg:text-[19px] text-gray-700 max-w-2xl mx-auto leading-relaxed px-4 font-medium">
            {city.servingParagraph}
          </p>
        </div>

        {/* Neighborhood chips */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 mb-12 sm:mb-14 max-w-5xl mx-auto">
          {city.neighborhoods.map((neighborhood) => (
            <div
              key={neighborhood}
              className="flex items-center gap-2.5 sm:gap-3 bg-white rounded-2xl px-3 py-3 sm:px-4 sm:py-3.5 border border-gray-200 shadow-sm"
            >
              <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-primary-50 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-4 h-4 text-primary-600" strokeWidth={2.5} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-[13px] sm:text-[15px] font-bold text-[#17171A] normal-case leading-tight">
                  {neighborhood}
                </span>
              </span>
            </div>
          ))}
        </div>

        {/* City Map */}
        <div className="rounded-2xl overflow-hidden shadow-md border border-gray-200 mb-10 sm:mb-12 max-w-5xl mx-auto">
          <iframe
            title={`${BUSINESS.name} - Locksmith service area in ${city.name}, MO`}
            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(city.name + ', MO')}&center=${city.lat},${city.lng}&zoom=13&maptype=roadmap`}
            width="100%"
            height="380"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* CTA */}
        <div className="text-center max-w-xl mx-auto">
          <p className="text-[15px] sm:text-[16px] text-gray-600 mb-5 leading-relaxed normal-case">
            We come to you anywhere in {city.name}. Average arrival: <strong className="text-[#17171A] font-bold">{city.responseTime}</strong>.
          </p>
          <a
            href={BUSINESS.phoneTel}
            className="inline-flex items-center justify-center gap-2 bg-primary-500 hover:bg-primary-600 text-white font-bold text-[15px] sm:text-base py-3 px-6 rounded-lg shadow-sm hover:shadow-md transition-all"
          >
            Call {BUSINESS.phone}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
