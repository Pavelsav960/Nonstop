import type { ServiceData } from '../../data/serviceData';

interface ServiceBenefitsProps {
  service: ServiceData;
}

export default function ServiceBenefits({ service }: ServiceBenefitsProps) {
  return (
    <section className="py-16 sm:py-24 bg-gray-50" aria-labelledby="benefits-heading">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 id="benefits-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Our {service.name}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Nonstop Lock & Key delivers professional results with transparent pricing and fast service.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {service.benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mt-0.5">
                  <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-700 font-medium leading-relaxed">{benefit}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
