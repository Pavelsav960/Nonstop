import type { CityData } from '../../data/cityData';

interface CityWhyChooseUsProps {
  city: CityData;
}

export default function CityWhyChooseUs({ city }: CityWhyChooseUsProps) {
  const trustSignals = [
    {
      title: `${city.responseTime} Average Response`,
      description: 'We arrive fast because we position our mobile units strategically across the St. Louis metro.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Licensed & Insured',
      description: 'Fully licensed locksmith professionals with comprehensive insurance for your protection.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: 'Upfront Pricing',
      description: 'We quote before we start. No hidden fees, no surprise charges, no bait-and-switch tactics.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white" aria-labelledby="why-choose-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 id="why-choose-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why {city.name} Residents Trust Nonstop Lock & Key
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {city.whyChooseUs}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {trustSignals.map((signal, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 sm:p-8 text-center hover:shadow-lg transition-all"
            >
              <div className="text-primary-600 flex justify-center mb-4">
                {signal.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                {signal.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {signal.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
