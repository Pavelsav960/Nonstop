import { BUSINESS } from '../../constants';
import type { ServiceData } from '../../data/serviceData';

interface ServiceHowItWorksProps {
  service: ServiceData;
}

export default function ServiceHowItWorks({ service }: ServiceHowItWorksProps) {
  return (
    <section className="py-16 sm:py-24 bg-white" aria-labelledby="how-it-works-heading">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 id="how-it-works-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            How {service.name} Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Getting {service.name.toLowerCase()} from {BUSINESS.name} is simple. Three steps and your problem is solved.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {service.howItWorks.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">{index + 1}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
