import { Link } from 'react-router';
import { KeyRound } from 'lucide-react';
import { serviceData } from '../../data/services';

export default function ContactServicesSection() {
  return (
    <section className="section-ref bg-white" aria-labelledby="contact-services-heading">
      <div className="container-ref">
        <div className="text-center mb-10 sm:mb-12">
          <p className="text-primary-600 text-[14px] sm:text-[16px] font-semibold tracking-wide normal-case mb-3">
            Our Services
          </p>
          <h2 id="contact-services-heading" className="text-[#17171A] max-w-4xl mx-auto px-2">
            All The Locksmith Services We Offer
          </h2>
          <p className="mt-4 text-[16px] sm:text-[18px] text-gray-700 max-w-2xl mx-auto leading-relaxed px-4 font-medium">
            Tap any service for details, pricing info, and FAQs specific to that job.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-2.5">
            {serviceData.map((service) => (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-white border border-gray-200 hover:border-primary-400 hover:bg-primary-50 rounded-full text-[14px] sm:text-[15px] font-medium text-[#17171A] hover:text-primary-700 shadow-sm hover:shadow-md transition-all group"
                aria-label={`Learn about ${service.name}`}
              >
                <KeyRound className="w-3.5 h-3.5 text-primary-500 group-hover:text-primary-600 transition-colors" strokeWidth={2.5} aria-hidden="true" />
                {service.name}
              </Link>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-1 text-primary-600 hover:text-primary-700 font-semibold text-[15px] sm:text-base underline underline-offset-4 transition-colors"
            >
              View all services
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
