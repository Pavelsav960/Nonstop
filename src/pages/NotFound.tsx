import { Link } from 'react-router';
import { Helmet } from 'react-helmet-async';
import { BUSINESS } from '../constants';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { cityData } from '../data/cityData';

const featuredCities = cityData.slice(0, 8);

export default function NotFound() {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Page Not Found | Nonstop Lock & Key</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="description" content="The page you're looking for doesn't exist. Visit our homepage or browse our locksmith service areas in St. Louis, MO." />
      </Helmet>
      <Navigation />

      <main className="pt-28 pb-16 sm:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl sm:text-8xl font-bold text-primary-600 mb-4">404</h1>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Page Not Found</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
            The page you're looking for doesn't exist or has been moved. Let us help you find what you need.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              to="/"
              className="inline-block px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-all shadow-lg"
            >
              Go to Homepage
            </Link>
            <a
              href={BUSINESS.phoneTel}
              className="inline-block px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-50 transition-all shadow-lg border-2 border-primary-600"
            >
              Call {BUSINESS.phone}
            </a>
          </div>

          <div className="text-left">
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Browse Our Service Areas</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {featuredCities.map((city) => (
                <Link
                  key={city.slug}
                  to={`/locksmith/${city.slug}`}
                  className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg hover:bg-primary-50 hover:text-primary-600 transition-colors"
                >
                  <svg className="w-4 h-4 text-primary-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-medium text-gray-700">{city.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
