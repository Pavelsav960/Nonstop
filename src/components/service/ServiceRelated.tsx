import { Link } from 'react-router';
import type { ServiceData } from '../../data/serviceData';
import { serviceData } from '../../data/serviceData';

interface ServiceRelatedProps {
  service: ServiceData;
}

export default function ServiceRelated({ service }: ServiceRelatedProps) {
  const relatedServices = service.relatedServiceSlugs
    .map((slug) => serviceData.find((s) => s.slug === slug))
    .filter((s): s is ServiceData => s !== undefined);

  if (relatedServices.length === 0) return null;

  return (
    <section className="py-16 sm:py-24 bg-white" aria-labelledby="related-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="related-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
          Related Locksmith Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedServices.map((related) => (
            <Link
              key={related.slug}
              to={`/services/${related.slug}`}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-1 group"
            >
              <span className="text-xs font-medium text-primary-600 uppercase tracking-wide">
                {related.category}
              </span>
              <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3 group-hover:text-primary-600 transition-colors">
                {related.name}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {related.shortDescription}
              </p>
              <span className="inline-flex items-center text-primary-600 font-medium text-sm group-hover:gap-2 transition-all gap-1">
                Starting at {related.startingPrice}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
