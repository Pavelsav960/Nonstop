import { Link } from 'react-router';
import { cityData } from '../../data/cityData';
import type { ServiceData } from '../../data/serviceData';

interface ServiceAreaLinksProps {
  service: ServiceData;
}

export default function ServiceAreaLinks({ service }: ServiceAreaLinksProps) {
  return (
    <section className="py-16 sm:py-24 bg-gray-50" aria-labelledby="service-areas-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 id="service-areas-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {service.name} Across St. Louis
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide {service.name.toLowerCase()} throughout the greater St. Louis metro area. Select your city for local details.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {cityData.map((city) => (
            <Link
              key={city.slug}
              to={`/locksmith/${city.slug}`}
              className="flex items-center justify-center p-4 bg-white rounded-lg hover:bg-primary-50 hover:text-primary-600 transition-all text-center group shadow-sm"
            >
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-primary-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium text-gray-700 group-hover:text-primary-600">{city.name}</span>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            to="/service-areas"
            className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-semibold text-lg"
          >
            <span>View All Service Areas</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
