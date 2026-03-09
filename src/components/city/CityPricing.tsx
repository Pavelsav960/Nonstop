import { BUSINESS } from '../../constants';
import type { CityData } from '../../data/cityData';

interface CityPricingProps {
  city: CityData;
}

export default function CityPricing({ city }: CityPricingProps) {
  return (
    <section className="py-16 sm:py-24 bg-gray-50" aria-labelledby="pricing-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 id="pricing-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Locksmith Pricing in {city.name}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Transparent, upfront pricing with no hidden fees or surprise charges
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {city.pricing.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {item.service}
              </h3>
              <p className="text-3xl font-bold text-primary-600 mb-3">
                {item.startingPrice}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Final pricing depends on lock type, time of service, and complexity. Call for an exact quote.
          </p>
          <a
            href={BUSINESS.phoneTel}
            className="inline-block px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-all transform hover:scale-105 shadow-lg"
          >
            Call {BUSINESS.phone} for a Free Quote
          </a>
        </div>
      </div>
    </section>
  );
}
