import { Link } from 'react-router';
import { BUSINESS } from '../../constants';
import type { ServiceData } from '../../data/serviceData';

interface ServiceCTAProps {
  service: ServiceData;
}

export default function ServiceCTA({ service }: ServiceCTAProps) {
  return (
    <section className="py-16 sm:py-24 bg-white" aria-labelledby="cta-heading">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-8 sm:p-12 text-center text-white shadow-2xl">
          <h2 id="cta-heading" className="text-3xl sm:text-4xl font-bold mb-4">
            Need {service.name}?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Our experienced team is available 24/7 across the St. Louis metro area.
            Fast response, professional service, and upfront pricing starting at {service.startingPrice}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href={BUSINESS.phoneTel}
              className="inline-block px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg text-lg"
            >
              Call {BUSINESS.phone}
            </a>
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-primary-700 text-white font-semibold rounded-lg hover:bg-primary-900 transition-all border-2 border-white/30 text-lg"
            >
              Request a Free Quote
            </Link>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 text-primary-100">
            <div className="flex items-center space-x-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>24/7 Service</span>
            </div>
            <Link to="/reviews" className="flex items-center space-x-2 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
              <span>4.9/5 from 100+ Reviews</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
