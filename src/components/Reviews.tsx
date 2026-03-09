const reviews = [
  {
    name: 'Michael Thompson',
    location: 'Clayton, MO',
    rating: 5,
    date: '2024-02-15',
    text: 'Locked out of my house at 2am in Clayton. They arrived in 20 minutes and had me back inside quickly. Professional and friendly service!',
  },
  {
    name: 'Sarah Martinez',
    location: 'University City, MO',
    rating: 5,
    date: '2024-02-10',
    text: 'Needed my locks rekeyed after moving to University City. Fast service, fair pricing, and they explained everything clearly. Highly recommend!',
  },
  {
    name: 'David Chen',
    location: 'Chesterfield, MO',
    rating: 5,
    date: '2024-02-05',
    text: 'Lost my car keys at the Chesterfield Mall. They came out and made new keys on the spot. Saved my day! Great service.',
  },
  {
    name: 'Jennifer Williams',
    location: 'Webster Groves, MO',
    rating: 5,
    date: '2024-01-28',
    text: 'Best locksmith in St. Louis! Upgraded our home security system in Webster Groves. Very knowledgeable and professional team.',
  },
];

export default function Reviews() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What St. Louis Customers Say
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Real reviews from real customers across the St. Louis metro area
          </p>
          <div className="flex items-center justify-center mt-6 space-x-2">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-8 h-8 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <span className="text-2xl font-bold text-gray-900 ml-3">4.9/5</span>
            <span className="text-gray-600 ml-2">from 100+ reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {reviews.map((review, index) => (
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
                  <p className="text-sm text-gray-500 flex items-center mt-1">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    {review.location}
                  </p>
                </div>
                <div className="flex text-yellow-400" itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                  <meta itemProp="ratingValue" content={review.rating.toString()} />
                  <meta itemProp="bestRating" content="5" />
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed" itemProp="reviewBody">
                "{review.text}"
              </p>
              <meta itemProp="datePublished" content={review.date} />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Join hundreds of satisfied customers across St. Louis
          </p>
          <a
            href="tel:+13145321112"
            className="inline-block px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-all transform hover:scale-105 shadow-lg"
          >
            Call (314) 532-1112 for Fast Service
          </a>
        </div>
      </div>
    </section>
  );
}
