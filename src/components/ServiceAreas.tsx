import { Link } from 'react-router';
import { BUSINESS } from '../constants';
import { cityData } from '../data/cityData';

export default function ServiceAreas() {
  return (
    <section id="service-areas" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            St. Louis Areas We Serve
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Providing fast, reliable locksmith services throughout the greater St. Louis metropolitan area and surrounding communities
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {cityData.map((city) => (
              <Link
                key={city.slug}
                to={`/locksmith/${city.slug}`}
                className="flex items-center gap-2 p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-all duration-300 group"
              >
                <svg
                  className="w-5 h-5 text-primary-600 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div className="min-w-0">
                  <span className="block text-sm font-medium text-gray-700 group-hover:text-primary-600 truncate">
                    Locksmith {city.name}
                  </span>
                  <span className="block text-xs text-gray-400">
                    {city.responseTime}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 sm:mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Don't see your area listed? We serve the entire St. Louis metro area!
            </p>
            <a
              href={BUSINESS.phoneTel}
              className="inline-block px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-all transform hover:scale-105 shadow-lg"
            >
              Call {BUSINESS.phone} to Confirm Service
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
