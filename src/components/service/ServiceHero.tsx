import { BUSINESS } from '../../constants';
import type { ServiceData } from '../../data/serviceData';

interface ServiceHeroProps {
  service: ServiceData;
}

export default function ServiceHero({ service }: ServiceHeroProps) {
  return (
    <header className="pt-8 pb-16 sm:pt-12 sm:pb-24 bg-gradient-to-br from-primary-600 to-primary-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white">
          <span className="inline-block px-4 py-1.5 bg-white/15 rounded-full text-sm font-medium text-primary-100 mb-6">
            {service.category} Locksmith
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            {service.name} in St. Louis, MO
          </h1>
          <p className="text-xl sm:text-2xl text-primary-100 max-w-3xl mx-auto mb-4">
            {service.shortDescription}
          </p>
          <p className="text-lg text-primary-200 mb-8">
            Starting at <span className="text-white font-bold text-2xl">{service.startingPrice}</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={BUSINESS.phoneTel}
              className="inline-block px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg text-lg"
            >
              Call Now: {BUSINESS.phone}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
