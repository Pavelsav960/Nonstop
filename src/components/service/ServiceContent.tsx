import type { ServiceData } from '../../data/serviceData';

interface ServiceContentProps {
  service: ServiceData;
}

export default function ServiceContent({ service }: ServiceContentProps) {
  return (
    <section className="py-16 sm:py-24 bg-white" aria-labelledby="service-details-heading">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="service-details-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
          About Our {service.name}
        </h2>
        <div className="prose prose-lg max-w-none">
          {service.longDescription.map((paragraph, index) => (
            <p key={index} className="text-gray-700 leading-relaxed mb-6 text-lg">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
