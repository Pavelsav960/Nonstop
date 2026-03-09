import { BUSINESS } from '../../constants';
import type { CityData } from '../../data/cityData';

interface CityReviewsProps {
  city: CityData;
}

export default function CityReviews({ city }: CityReviewsProps) {
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <section className="py-16 sm:py-24 bg-white" aria-labelledby="reviews-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 id="reviews-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What {city.name} Customers Say About Us
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {city.reviews.map((review, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-shadow"
              itemScope
              itemType="https://schema.org/Review"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900" itemProp="author">
                    {review.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {formatDate(review.date)}
                  </p>
                </div>
                <div className="flex text-yellow-400" itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                  <meta itemProp="ratingValue" content={review.rating.toString()} />
                  <meta itemProp="bestRating" content="5" />
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4" itemProp="reviewBody">
                &ldquo;{review.text}&rdquo;
              </p>
              <span className="inline-block bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                {review.service}
              </span>
              <meta itemProp="datePublished" content={review.date} />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-8 h-8 fill-current" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <span className="text-2xl font-bold text-gray-900 ml-3">4.9/5</span>
          </div>
          <p className="text-gray-600 mb-6">
            Based on 100+ reviews across St. Louis
          </p>
          <a
            href={BUSINESS.phoneTel}
            className="inline-block px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-all transform hover:scale-105 shadow-lg"
          >
            Call {BUSINESS.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
