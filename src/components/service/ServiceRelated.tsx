import { Link } from 'react-router';
import type { ServiceData } from '../../data/serviceData';
import { serviceData } from '../../data/serviceData';

type Props = { service: ServiceData };

export default function ServiceRelated({ service }: Props) {
  const related = service.relatedServiceSlugs
    .map((slug) => serviceData.find((s) => s.slug === slug))
    .filter((s): s is ServiceData => Boolean(s));

  if (!related.length) return null;

  return (
    <section className="section-ref bg-[#F5F5F5]" aria-labelledby="related-services-heading">
      <div className="container-ref">
        <div className="text-center mb-10 sm:mb-12">
          <p className="text-primary-600 text-[14px] sm:text-[16px] font-semibold tracking-wide normal-case mb-3">
            Related Services
          </p>
          <h2 id="related-services-heading" className="text-[#17171A] max-w-4xl mx-auto px-2">
            You May Also Need
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 max-w-5xl mx-auto">
          {related.map((s) => (
            <Link
              key={s.slug}
              to={`/services/${s.slug}`}
              aria-label={`Learn more about ${s.name}`}
              className="group bg-white rounded-2xl p-6 sm:p-7 border border-gray-200 shadow-sm hover:shadow-md hover:border-primary-300 transition-all duration-300 flex flex-col"
            >
              <p className="text-primary-600 text-[12px] font-bold tracking-[0.06em] uppercase mb-2">
                {s.category}
              </p>
              <h3 className="!text-[20px] sm:!text-[22px] !font-bold text-[#17171A] group-hover:text-primary-600 transition-colors leading-[1.2]">
                {s.name}
              </h3>
              <p className="text-gray-700 leading-[1.6] text-[14px] sm:text-[15px] mt-3 normal-case flex-1 font-medium">
                {s.shortDescription}
              </p>
              <span className="inline-flex items-center text-primary-600 font-bold text-[14px] sm:text-[15px] mt-4 group-hover:gap-2 transition-all gap-1 normal-case">
                View Service
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
