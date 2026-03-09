import { Link, useLocation } from 'react-router';
import { cityData } from '../data/cityData';
import { serviceData } from '../data/serviceData';
import { BUSINESS } from '../constants';

const featuredCities = cityData.slice(0, 10);

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const handleScrollLink = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12 pb-20 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Nonstop <span className="text-primary-400">Lock & Key</span>
            </h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Your trusted 24/7 locksmith service in St. Louis, MO. Fast, reliable, and professional locksmith solutions for residential, commercial, and automotive security needs.
            </p>
            <div className="mt-4 space-y-2">
              <a href={BUSINESS.phoneTel} className="flex items-center space-x-2 text-gray-400 hover:text-primary-400 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>{BUSINESS.phone}</span>
              </a>
              <a href={`mailto:${BUSINESS.email}`} className="flex items-center space-x-2 text-gray-400 hover:text-primary-400 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-sm">{BUSINESS.email}</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {serviceData.map((service) => (
                <li key={service.slug}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  to="/services"
                  className="text-primary-400 hover:text-primary-300 transition-colors text-sm font-medium inline-flex items-center gap-1"
                >
                  View All Services
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Service Areas</h4>
            <ul className="space-y-2">
              {featuredCities.map((city) => (
                <li key={city.slug}>
                  <Link
                    to={`/locksmith/${city.slug}`}
                    className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    Locksmith {city.name}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  to="/service-areas"
                  className="text-primary-400 hover:text-primary-300 transition-colors text-sm font-medium inline-flex items-center gap-1"
                >
                  View All Service Areas
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">
                <strong className="text-white">Phone:</strong>
                <br />
                <a href={BUSINESS.phoneTel} className="hover:text-primary-400 transition-colors">
                  {BUSINESS.phone}
                </a>
              </li>
              <li className="text-gray-400">
                <strong className="text-white">Email:</strong>
                <br />
                <a href={`mailto:${BUSINESS.email}`} className="hover:text-primary-400 transition-colors">
                  {BUSINESS.email}
                </a>
              </li>
              <li className="text-gray-400">
                <strong className="text-white">Service Area:</strong>
                <br />
                St. Louis, MO & Surrounding Areas
              </li>
              <li className="pt-2">
                <a
                  href={BUSINESS.gbpReviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors text-sm font-medium"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  Leave a Google Review
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {currentYear} Nonstop Lock & Key. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
