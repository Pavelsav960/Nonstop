import { Link } from 'react-router';
import { Helmet } from 'react-helmet-async';
import { BUSINESS } from '../constants';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { cityData } from '../data/cityData';

export default function ServiceAreasPage() {
  const logoUrl = BUSINESS.logo;

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://nonstoplockandkey.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Service Areas',
        item: 'https://nonstoplockandkey.com/service-areas',
      },
    ],
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    additionalType: 'Locksmith',
    name: BUSINESS.legalName,
    image: logoUrl,
    url: 'https://nonstoplockandkey.com/service-areas',
    telephone: BUSINESS.phoneRaw,
    priceRange: BUSINESS.priceRange,
    areaServed: cityData.map((city) => ({
      '@type': 'City',
      name: city.name,
      containedInPlace: { '@type': 'State', name: 'Missouri' },
    })),
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
  };

  return (
    <div className="min-h-screen animate-fade-in">
      <Helmet>
        <title>Locksmith Service Areas | St. Louis Metro | Nonstop Lock & Key</title>
        <meta name="description" content={`Nonstop Lock & Key provides 24/7 locksmith services across 20+ cities in the St. Louis metro area. Find your city for local pricing, response times, and reviews. Call ${BUSINESS.phone}.`} />
        <meta name="author" content={BUSINESS.legalName} />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" href="https://nonstoplockandkey.com/service-areas" />
        <meta property="og:title" content="Locksmith Service Areas | St. Louis Metro | Nonstop Lock & Key" />
        <meta property="og:description" content="24/7 locksmith services across 20+ cities in the St. Louis metro. Find your city for local info." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nonstoplockandkey.com/service-areas" />
        <meta property="og:image" content={logoUrl} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content={BUSINESS.legalName} />
        <meta name="geo.region" content="US-MO" />
        <meta name="geo.placename" content={BUSINESS.city} />
        <meta name="geo.position" content={`${BUSINESS.lat};${BUSINESS.lng}`} />
        <meta name="ICBM" content={`${BUSINESS.lat}, ${BUSINESS.lng}`} />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
      </Helmet>

      <Navigation />

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
              <span className="font-medium text-gray-900">Service Areas</span>
            </li>
          </ol>
        </div>
      </nav>

      <header className="pt-8 pb-16 sm:pt-12 sm:pb-24 bg-gradient-to-br from-primary-600 to-primary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Locksmith Service Areas
          </h1>
          <p className="text-xl sm:text-2xl text-primary-100 max-w-3xl mx-auto mb-8">
            Nonstop Lock & Key provides 24/7 mobile locksmith services across the greater St. Louis metropolitan area. Select your city below for local pricing, response times, and customer reviews.
          </p>
          <a
            href={BUSINESS.phoneTel}
            className="inline-block px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg text-lg"
          >
            Call {BUSINESS.phone}
          </a>
        </div>
      </header>

      <main>
        <section className="py-16 sm:py-24 bg-white" aria-labelledby="cities-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="cities-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">
              Cities We Serve
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Click any city to see detailed information about our locksmith services, transparent pricing, local reviews, and estimated response times for that area.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {cityData.map((city) => (
                <Link
                  key={city.slug}
                  to={`/locksmith/${city.slug}`}
                  className="group bg-gray-50 rounded-xl p-6 hover:shadow-lg hover:bg-primary-50 transition-all"
                >
                  <div className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                        {city.name}, MO
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">
                        Response: {city.responseTime}
                      </p>
                      <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                        {city.description.substring(0, 100)}...
                      </p>
                      <span className="inline-flex items-center text-sm font-medium text-primary-600 mt-3 group-hover:translate-x-1 transition-transform">
                        View Details
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24 bg-gray-50" aria-labelledby="coverage-heading">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="coverage-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
              Full St. Louis Metro Coverage
            </h2>
            <div className="bg-white rounded-xl p-8 shadow-md">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Nonstop Lock & Key operates a fleet of fully equipped mobile locksmith units strategically positioned across the St. Louis metropolitan area. This means whether you are in downtown St. Louis, the western suburbs of Chesterfield and Ballwin, or anywhere in between, a licensed locksmith can reach you fast.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our service area spans St. Louis city and the surrounding St. Louis County communities. We cover residential neighborhoods, commercial districts, shopping centers, office parks, and hospital campuses throughout the metro. If your city is not listed above, call us anyway — we likely cover your area.
              </p>
              <div className="border-t border-gray-200 pt-6 mt-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Customers Across St. Louis Choose Us:</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    '24/7 availability including holidays',
                    'Upfront pricing with no hidden fees',
                    'Licensed and insured technicians',
                    'Fast response times across the metro',
                    'Residential, commercial, and automotive',
                    '4.9-star rating from 100+ reviews',
                  ].map((item, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <svg className="w-5 h-5 text-primary-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24 bg-white" aria-labelledby="map-heading">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="map-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
              St. Louis Metro Service Map
            </h2>
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <iframe
                title="Nonstop Lock & Key St. Louis metro service area map"
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=St.+Louis+Metro+Area,+MO&center=38.6270,-90.3994&zoom=11&maptype=roadmap"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-8 sm:p-12 text-center text-white shadow-2xl">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Don't See Your City?
              </h2>
              <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
                We serve the entire St. Louis metro area. Call us and we will confirm coverage and give you an estimated arrival time for your location.
              </p>
              <a
                href={BUSINESS.phoneTel}
                className="inline-block px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg text-lg"
              >
                Call {BUSINESS.phone}
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
