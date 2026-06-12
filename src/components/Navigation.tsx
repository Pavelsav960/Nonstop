import { useState, useRef } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { serviceData } from '../data/serviceData';
import { BUSINESS } from '../constants';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout>>();

  const handleNavigation = (section: string) => {
    setIsMenuOpen(false);
    setMobileServicesOpen(false);

    if (isHomePage) {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      if (section === 'home') {
        navigate('/');
      } else {
        navigate('/', { state: { scrollTo: section } });
        setTimeout(() => {
          const element = document.getElementById(section);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    }
  };

  const handleLogoClick = () => {
    navigate('/');
    setIsMenuOpen(false);
  };

  const handleDropdownEnter = () => {
    clearTimeout(dropdownTimeout.current);
    setIsServicesOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 150);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-24 relative">
          <div className="flex-shrink-0 cursor-pointer" onClick={handleLogoClick}>
            <img
              src="/nonstop-lock-and-key-st-louis-locksmith-logo-no-bg-final-cut.png"
              alt="Nonstop Lock & Key"
              className="h-16 sm:h-24 w-auto object-contain"
            />
          </div>

          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 space-x-7 items-center text-[16px]">
            <button
              onClick={() => handleNavigation('home')}
              className="text-[#17171A] hover:text-primary-600 transition-colors font-semibold"
            >
              Home
            </button>
            <div
              className="relative"
              onMouseEnter={handleDropdownEnter}
              onMouseLeave={handleDropdownLeave}
            >
              <Link
                to="/services"
                className="text-[#17171A] hover:text-primary-600 transition-colors font-semibold inline-flex items-center gap-1"
              >
                Services
                <svg className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 transition-all duration-200 ${isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}
              >
                <div className="bg-white rounded-xl shadow-xl border border-gray-200 p-4 w-[260px]">
                  <ul className="space-y-1">
                    {serviceData.map((service) => (
                      <li key={service.slug}>
                        <Link
                          to={`/services/${service.slug}`}
                          className="block px-3 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-md transition-colors"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div className="border-t border-gray-100 mt-2 pt-2">
                    <Link
                      to="/services"
                      className="block px-3 py-2 text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      View All Services
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <Link
              to="/about"
              className="text-[#17171A] hover:text-primary-600 transition-colors font-semibold"
            >
              About
            </Link>
            <Link
              to="/service-areas"
              className="text-[#17171A] hover:text-primary-600 transition-colors font-semibold"
            >
              Service Areas
            </Link>
            <Link
              to="/reviews"
              className="text-[#17171A] hover:text-primary-600 transition-colors font-semibold"
            >
              Reviews
            </Link>
            <Link
              to="/contact"
              className="text-[#17171A] hover:text-primary-600 transition-colors font-semibold"
            >
              Contact
            </Link>
          </div>

          {/* Desktop Call CTA — right side */}
          <a
            href={BUSINESS.phoneTel}
            aria-label={`Call ${BUSINESS.name} at ${BUSINESS.phone}`}
            className="hidden md:inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-[15px] py-3 px-5 rounded-lg shadow-sm hover:shadow-md transition-all whitespace-nowrap"
          >
            <Phone className="w-4 h-4 flex-shrink-0 animate-pulse" />
            <span>Call {BUSINESS.phone}</span>
          </a>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2 animate-slide-up">
            <button
              onClick={() => handleNavigation('home')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            >
              Home
            </button>
            <div>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="flex w-full items-center justify-between px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <span>Services</span>
                <svg className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileServicesOpen && (
                <div className="pl-4 mt-1 space-y-1">
                  {serviceData.map((service) => (
                    <Link
                      key={service.slug}
                      to={`/services/${service.slug}`}
                      onClick={() => { setIsMenuOpen(false); setMobileServicesOpen(false); }}
                      className="block px-4 py-1.5 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                  <Link
                    to="/services"
                    onClick={() => { setIsMenuOpen(false); setMobileServicesOpen(false); }}
                    className="block px-4 py-2 text-sm font-medium text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
                  >
                    View All Services
                  </Link>
                </div>
              )}
            </div>
            <Link
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            >
              About
            </Link>
            <Link
              to="/service-areas"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            >
              Service Areas
            </Link>
            <Link
              to="/reviews"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            >
              Reviews
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
