import type { CityData } from '../../data/cityData';

interface CitySecurityTipsProps {
  city: CityData;
}

export default function CitySecurityTips({ city }: CitySecurityTipsProps) {
  return (
    <section className="py-16 sm:py-24 bg-gray-50" aria-labelledby="security-tips-heading">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 id="security-tips-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Home Security Tips for {city.name} Residents
          </h2>
        </div>

        <div className="space-y-4">
          {city.securityTips.map((tip, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md flex items-start space-x-4"
            >
              <div className="flex-shrink-0 w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                {index + 1}
              </div>
              <p className="text-gray-700 leading-relaxed pt-1.5">
                {tip}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">
            Serving {city.name} and Surrounding Areas
          </h3>
          <div className="bg-white rounded-xl p-6 sm:p-8 shadow-md">
            <p className="text-lg text-gray-700 leading-relaxed">
              {city.servingParagraph}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
