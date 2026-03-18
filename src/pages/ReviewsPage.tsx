import { Link } from 'react-router';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { BUSINESS } from '../constants';
import { cityData } from '../data/cityData';

const reviews = [
  {
    name: 'Michael T.',
    location: 'Clayton',
    rating: 5,
    date: '2025-01-15',
    service: 'House Lockout',
    text: 'Locked out of my condo on Forsyth at 2am after losing my keys at dinner. Called Nonstop Lock & Key and they had a technician at my door in under 20 minutes on a Saturday night. He opened the deadbolt without a single mark on the door, then rekeyed it on the spot so the lost keys wouldn\'t work.',
  },
  {
    name: 'Sarah M.',
    location: 'University City',
    rating: 5,
    date: '2025-02-10',
    service: 'Lock Rekeying',
    text: 'Had all the locks rekeyed after closing on our house in University City. The technician arrived on time, rekeyed five exterior doors in about two hours, and set everything to work with a single key. He even tightened a loose strike plate he noticed on the back door.',
  },
  {
    name: 'David C.',
    location: 'Chesterfield',
    rating: 5,
    date: '2025-01-28',
    service: 'Car Key Replacement',
    text: 'Lost my only car key at Chesterfield Mall and was stranded in the parking lot. Nonstop Lock & Key came out, cut a new transponder key, and programmed it to start the engine — all in the parking lot in about 40 minutes. Saved me from an expensive tow to the dealership.',
  },
  {
    name: 'Jennifer W.',
    location: 'Webster Groves',
    rating: 5,
    date: '2025-02-05',
    service: 'Smart Lock Installation',
    text: 'Had Nonstop install a Schlage Encode smart lock on our front door in Webster Groves. The technician handled the installation cleanly, set up the app on both our phones, and programmed guest codes for the dog walker. Very knowledgeable about smart lock brands.',
  },
  {
    name: 'Jason P.',
    location: 'Kirkwood',
    rating: 5,
    date: '2025-03-01',
    service: 'Emergency Locksmith',
    text: 'Broken key snapped off in our front door lock at 11pm on a weeknight in Kirkwood. Called Nonstop and the locksmith arrived in about 25 minutes. He extracted the broken piece, tested the cylinder, and determined the lock was still in good shape. Quick and professional.',
  },
  {
    name: 'Angela R.',
    location: 'Ballwin',
    rating: 5,
    date: '2025-02-20',
    service: 'Car Lockout',
    text: 'Locked my keys in the car with the engine running outside the grocery store on Manchester Road in Ballwin. Called in a panic and they treated it as a priority. Technician arrived in under 30 minutes and had the door open in two minutes flat. No damage at all.',
  },
  {
    name: 'Marcus J.',
    location: 'Maryland Heights',
    rating: 5,
    date: '2025-03-10',
    service: 'Car Lockout',
    text: 'Locked my keys in the car at the Hollywood Casino parking garage on a Friday night. Called Nonstop Lock & Key expecting a long wait, but the technician arrived in about 20 minutes. He had the door open quickly without any damage. Great service when I really needed it.',
  },
  {
    name: 'Patricia W.',
    location: 'Shrewsbury',
    rating: 5,
    date: '2025-01-22',
    service: 'Lock Replacement',
    text: 'The deadbolt on our front door on MacKenzie Road had a worn-out mechanism that was getting harder to turn every day. The technician from Nonstop replaced it with a heavy-duty Kwikset deadbolt and made sure everything was aligned perfectly. Door locks and unlocks smoothly now.',
  },
  {
    name: 'Karen M.',
    location: 'Creve Coeur',
    rating: 5,
    date: '2025-02-15',
    service: 'Car Lockout',
    text: 'Locked my keys inside the car at Dierbergs on Olive Boulevard while loading groceries. Called Nonstop Lock & Key and the technician was there in about 25 minutes. He had the door open in no time without a scratch. Fair price and fast response — exactly what you need in that situation.',
  },
  {
    name: 'Greg M.',
    location: 'St. Ann',
    rating: 5,
    date: '2025-03-05',
    service: 'Car Lockout',
    text: 'Locked my keys in the car at Lambert Airport after getting back from a red-eye at 5am. Called Nonstop and they dispatched someone to the parking garage right away. Technician arrived quickly and got me back in without any fuss. A lifesaver at that hour.',
  },
  {
    name: 'Michelle W.',
    location: 'Manchester',
    rating: 5,
    date: '2025-02-28',
    service: 'Lock Rekeying',
    text: 'Had six doors rekeyed at our office plaza on Manchester Road after a staff change. The technician was efficient, professional, and rekeyed all six locks to work with a single master key in under two hours. Great communication throughout the process.',
  },
  {
    name: 'Linda S.',
    location: 'Overland',
    rating: 5,
    date: '2025-01-30',
    service: 'Car Key Replacement',
    text: 'Needed a replacement key for my Honda after losing the spare. The technician came to my house on Midland Avenue, cut and programmed a new transponder key on the spot. Cost significantly less than what the Honda dealer quoted. Will definitely use them again.',
  },
];

export default function ReviewsPage() {
  const logoUrl = BUSINESS.logo;

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: BUSINESS.url,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Reviews',
        item: `${BUSINESS.url}/reviews`,
      },
    ],
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    additionalType: 'Locksmith',
    name: BUSINESS.legalName,
    image: logoUrl,
    url: BUSINESS.url,
    telephone: BUSINESS.phoneRaw,
    priceRange: BUSINESS.priceRange,
    address: {
      '@type': 'PostalAddress',
      addressLocality: BUSINESS.city,
      addressRegion: BUSINESS.state,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS.lat,
      longitude: BUSINESS.lng,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: BUSINESS.ratingValue,
      reviewCount: BUSINESS.reviewCount,
      bestRating: '5',
      worstRating: '1',
    },
    sameAs: [
      BUSINESS.gbpUrl,
    ],
  };

  return (
    <div className="min-h-screen animate-fade-in">
      <Helmet>
        <title>Customer Reviews | {BUSINESS.name} | 4.9 Stars in St. Louis</title>
        <meta
          name="description"
          content={`Read 100+ five-star reviews from real customers. ${BUSINESS.name} is the trusted locksmith in ${BUSINESS.city}, ${BUSINESS.state} for car lockouts, lock rekeying, key replacement, and emergency service. Call ${BUSINESS.phone}.`}
        />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" href={`${BUSINESS.url}/reviews`} />
        <meta property="og:title" content={`Customer Reviews | ${BUSINESS.name} | 4.9 Stars in St. Louis`} />
        <meta
          property="og:description"
          content={`Read 100+ five-star reviews from real customers. ${BUSINESS.name} is the trusted locksmith in ${BUSINESS.city} for car lockouts, lock rekeying, key replacement, and 24/7 emergency service.`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${BUSINESS.url}/reviews`} />
        <meta property="og:image" content={logoUrl} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content={BUSINESS.legalName} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`Customer Reviews | ${BUSINESS.name} | 4.9 Stars in St. Louis`} />
        <meta
          name="twitter:description"
          content={`Read 100+ five-star reviews from real customers. ${BUSINESS.name} is the trusted locksmith in ${BUSINESS.city} for car lockouts, lock rekeying, and emergency service.`}
        />
        <meta name="twitter:image" content={logoUrl} />
        <meta name="geo.region" content={BUSINESS.region} />
        <meta name="geo.placename" content={BUSINESS.city} />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
      </Helmet>

      <Navigation />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="bg-gray-100 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li>
              <Link to="/" className="hover:text-primary-600 transition-colors">Home</Link>
            </li>
            <li className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="font-medium text-gray-900">Reviews</span>
            </li>
          </ol>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <header className="pt-8 pb-16 sm:pt-12 sm:pb-24 bg-gradient-to-br from-primary-600 to-primary-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              What Our Customers Say
            </h1>
            <p className="text-xl sm:text-2xl text-primary-100 max-w-3xl mx-auto mb-8">
              Real reviews from real people across the St. Louis metro area. See why homeowners and drivers trust {BUSINESS.name} for all their lock and key needs.
            </p>
            <div className="flex items-center justify-center space-x-3">
              <div className="flex text-yellow-300">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-9 h-9 sm:w-10 sm:h-10 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <span className="text-3xl sm:text-4xl font-bold">{BUSINESS.ratingValue}/5</span>
              <span className="text-primary-200 text-lg sm:text-xl">from {BUSINESS.reviewCount}+ reviews</span>
            </div>
          </div>
        </header>

        {/* Reviews Grid */}
        <section className="py-16 sm:py-24 bg-white" aria-labelledby="reviews-grid-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="reviews-grid-heading" className="sr-only">Customer Reviews</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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
                        {review.location}, MO
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
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-block text-xs font-medium bg-primary-50 text-primary-700 px-2 py-1 rounded-full">
                      {review.service}
                    </span>
                    <time className="text-xs text-gray-400" itemProp="datePublished" dateTime={review.date}>
                      {new Date(review.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                    </time>
                  </div>
                  <p className="text-gray-700 leading-relaxed" itemProp="reviewBody">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <div itemProp="itemReviewed" itemScope itemType="https://schema.org/LocalBusiness">
                    <meta itemProp="name" content={BUSINESS.legalName} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Review Summary Stats */}
        <section className="py-16 sm:py-20 bg-gray-50" aria-labelledby="stats-heading">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="stats-heading" className="sr-only">Review Statistics</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="bg-white rounded-xl p-8 shadow-md">
                <p className="text-4xl sm:text-5xl font-bold text-primary-600 mb-2">{BUSINESS.reviewCount}+</p>
                <p className="text-lg text-gray-600 font-medium">Verified Reviews</p>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-md">
                <p className="text-4xl sm:text-5xl font-bold text-primary-600 mb-2">{BUSINESS.ratingValue}/5</p>
                <p className="text-lg text-gray-600 font-medium">Average Rating</p>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-md">
                <p className="text-4xl sm:text-5xl font-bold text-primary-600 mb-2">20+</p>
                <p className="text-lg text-gray-600 font-medium">Cities Represented</p>
              </div>
            </div>
          </div>
        </section>

        {/* Google Review CTA */}
        <section className="py-16 sm:py-24 bg-white" aria-labelledby="google-review-heading">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 sm:p-12 shadow-lg border border-gray-100">
              <svg className="w-12 h-12 mx-auto mb-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <h2 id="google-review-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Had a Great Experience? Leave Us a Review!
              </h2>
              <p className="text-gray-600 text-lg mb-8 max-w-xl mx-auto">
                Your feedback helps other St. Louis residents find a locksmith they can trust. It only takes a minute and means the world to our small business.
              </p>
              <a
                href={BUSINESS.gbpReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-all transform hover:scale-105 shadow-lg text-lg"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#fff"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#fff" opacity="0.8"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#fff" opacity="0.6"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#fff" opacity="0.9"/>
                </svg>
                Leave a Google Review
              </a>
            </div>
          </div>
        </section>

        {/* Serving All of St. Louis */}
        <section className="py-16 sm:py-24 bg-gray-50" aria-labelledby="service-areas-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 id="service-areas-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Serving All of St. Louis
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We proudly serve over 20 cities across the St. Louis metro area. Click on your city to see local reviews, pricing, and response times.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {cityData.map((city) => (
                <Link
                  key={city.slug}
                  to={`/locksmith/${city.slug}`}
                  className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all border border-gray-100 group"
                >
                  <p className="text-sm font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                    Locksmith in {city.name}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-24 bg-gradient-to-br from-primary-600 to-primary-800" aria-labelledby="cta-heading">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h2 id="cta-heading" className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Experience 5-Star Locksmith Service?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied customers across St. Louis. Available 24/7 for emergencies, with fast response times and upfront pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href={BUSINESS.phoneTel}
                className="inline-block px-10 py-5 bg-white text-primary-600 font-bold rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg text-xl"
              >
                Call Now: {BUSINESS.phone}
              </a>
              <Link
                to="/contact"
                className="inline-block px-8 py-5 bg-primary-700 text-white font-bold rounded-lg hover:bg-primary-900 transition-all border-2 border-white/30 text-xl"
              >
                Request a Free Quote
              </Link>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 text-primary-100 text-sm">
              <Link to="/about" className="hover:text-white transition-colors underline underline-offset-2">About Us</Link>
              <Link to="/services" className="hover:text-white transition-colors underline underline-offset-2">Our Services</Link>
              <Link to="/service-areas" className="hover:text-white transition-colors underline underline-offset-2">Service Areas</Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
