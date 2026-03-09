import { useParams, Link } from 'react-router';
import { BUSINESS } from '../constants';
import { cityData } from '../data/cityData';
import { serviceData } from '../data/serviceData';
import { getNearbyCities } from '../utils/nearbyCity';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import CitySEO from '../components/CitySEO';
import CityReviews from '../components/city/CityReviews';
import CityPricing from '../components/city/CityPricing';
import CityWhyChooseUs from '../components/city/CityWhyChooseUs';
import CitySecurityTips from '../components/city/CitySecurityTips';

export default function CityPage() {
  const { citySlug } = useParams<{ citySlug: string }>();
  const city = cityData.find(c => c.slug === citySlug);

  if (!city) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">City Not Found</h1>
          <Link to="/" className="text-primary-600 hover:text-primary-700 font-semibold">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen animate-fade-in">
      <CitySEO city={city} />
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
              <Link to="/service-areas" className="hover:text-primary-600 transition-colors">Service Areas</Link>
            </li>
            <li className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="font-medium text-gray-900">Locksmith {city.name}</span>
            </li>
          </ol>
        </div>
      </nav>

      <main>
        <article itemScope itemType="https://schema.org/Service">
          <meta itemProp="serviceType" content="Locksmith" />
          <meta itemProp="provider" content="Nonstop Lock & Key" />

          <header className="pt-8 pb-16 sm:pt-12 sm:pb-24 bg-gradient-to-br from-primary-600 to-primary-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center text-white">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6" itemProp="name">
                  Locksmith in {city.name}, MO
                </h1>
                <p className="text-xl sm:text-2xl text-primary-100 max-w-3xl mx-auto mb-8" itemProp="description">
                  {city.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href={BUSINESS.phoneTel}
                    className="inline-block px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg text-lg"
                  >
                    Call Now: {BUSINESS.phone}
                  </a>
                  <Link
                    to="/service-areas"
                    className="inline-block px-8 py-4 bg-primary-700 text-white font-semibold rounded-lg hover:bg-primary-800 transition-all border-2 border-white/30 text-lg"
                  >
                    View All Service Areas
                  </Link>
                </div>
              </div>
            </div>
          </header>

          <section className="py-16 sm:py-24 bg-white" aria-labelledby="how-it-works-heading">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 id="how-it-works-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  How It Works in {city.name}
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Getting locksmith help in {city.name} is simple. We handle everything so you can get back to your day.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary-600">1</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
                  <p className="text-gray-600">
                    Call {BUSINESS.phone} any time, day or night. Describe your situation and we will give you an upfront price before dispatching.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary-600">2</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">We Arrive Fast</h3>
                  <p className="text-gray-600">
                    A mobile locksmith arrives at your {city.name} location in {city.responseTime}, fully equipped to handle the job on the spot.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary-600">3</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Problem Solved</h3>
                  <p className="text-gray-600">
                    We resolve your lock or key issue quickly and professionally. You pay the price we quoted. No surprises.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 sm:py-24 bg-gray-50" aria-labelledby="services-heading">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 id="services-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Locksmith Services in {city.name}
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Professional locksmith services available 24/7 throughout {city.name} and surrounding neighborhoods
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {serviceData.map((service) => {
                  const categoryIcon: Record<string, JSX.Element> = {
                    Automotive: (
                      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 17h.01M16 17h.01M3 11l1.5-5A2 2 0 016.4 4h11.2a2 2 0 011.9 1.4L21 11M3 11h18M3 11v6a1 1 0 001 1h1a2 2 0 104 0h6a2 2 0 104 0h1a1 1 0 001-1v-6" />
                      </svg>
                    ),
                    Residential: (
                      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                    ),
                    Emergency: (
                      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ),
                    General: (
                      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                      </svg>
                    ),
                  };

                  const categoryColors: Record<string, string> = {
                    Automotive: 'bg-blue-100 text-blue-700',
                    Residential: 'bg-green-100 text-green-700',
                    Emergency: 'bg-red-100 text-red-700',
                    General: 'bg-gray-100 text-gray-700',
                  };

                  return (
                    <Link
                      key={service.slug}
                      to={`/services/${service.slug}`}
                      className="bg-white rounded-xl p-8 hover:shadow-xl transition-all transform hover:-translate-y-1 group block"
                    >
                      <div className="flex items-center justify-between mb-6">
                        <div className="text-primary-600">
                          {categoryIcon[service.category] || categoryIcon.General}
                        </div>
                        <span className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryColors[service.category] || categoryColors.General}`}>
                          {service.category}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        {service.shortDescription}
                      </p>
                      <p className="text-sm font-semibold text-gray-900 mb-4">
                        Starting at {service.startingPrice}
                      </p>
                      <span className="inline-flex items-center text-primary-600 font-medium text-sm group-hover:gap-2 transition-all gap-1">
                        {service.name} in {city.name} &rarr;
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>

          <CityWhyChooseUs city={city} />
          <CityPricing city={city} />
          <CityReviews city={city} />

          <section className="py-16 sm:py-24 bg-white" aria-labelledby="neighborhoods-heading">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 id="neighborhoods-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
                Serving {city.name} Neighborhoods
              </h2>
              <div className="bg-gray-50 rounded-xl p-8 shadow-md">
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  {city.localContext}
                </p>
                <div className="border-t border-gray-200 pt-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Areas We Serve in {city.name}:
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {city.neighborhoods.map((neighborhood, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <svg className="w-5 h-5 text-primary-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{neighborhood}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <CitySecurityTips city={city} />

          <section className="py-16 sm:py-24 bg-white" aria-labelledby="map-heading">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 id="map-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">
                Our Service Area in {city.name}
              </h2>
              <p className="text-lg text-gray-600 text-center mb-8 max-w-2xl mx-auto">
                As a mobile locksmith, we come directly to your location anywhere in {city.name} and the surrounding area. No need to come to us — we come to you, 24/7.
              </p>
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <iframe
                  title={`Nonstop Lock & Key service area map for ${city.name}, Missouri`}
                  src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(city.name + ', MO')}&center=${city.lat},${city.lng}&zoom=13&maptype=roadmap`}
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                />
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div className="flex items-center space-x-2 text-gray-700">
                      <svg className="w-5 h-5 text-primary-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-sm font-medium">Mobile service — we come to your location in {city.name}</span>
                    </div>
                    <a
                      href={BUSINESS.phoneTel}
                      className="inline-flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white text-sm font-semibold rounded-lg hover:bg-primary-700 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span>Call {BUSINESS.phone}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 sm:py-24 bg-gray-50" aria-labelledby="faq-heading">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 id="faq-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
                Frequently Asked Questions - {city.name} Locksmith
              </h2>
              <div className="space-y-6">
                {city.faqs.map((faq, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 sm:p-8 shadow-sm">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 sm:py-24 bg-white" aria-labelledby="cta-heading">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-8 sm:p-12 text-center text-white shadow-2xl">
                <h2 id="cta-heading" className="text-3xl sm:text-4xl font-bold mb-4">
                  Need a Locksmith in {city.name}?
                </h2>
                <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
                  Our experienced team is available 24/7 to help with all your locksmith needs in {city.name}. Fast response in {city.responseTime}, professional service, and upfront pricing.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                  <a
                    href={BUSINESS.phoneTel}
                    className="inline-block px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg text-lg"
                  >
                    Call {BUSINESS.phone}
                  </a>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-6 text-primary-100">
                  <div className="flex items-center space-x-2">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Licensed & Insured</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>24/7 Service</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Upfront Pricing</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </article>
      </main>

      <section className="py-16 sm:py-20 bg-gray-50" aria-labelledby="nearby-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="nearby-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
            Other Areas We Serve Near {city.name}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {getNearbyCities(city).map((nearby) => (
              <Link
                key={nearby.slug}
                to={`/locksmith/${nearby.slug}`}
                className="flex items-center justify-center p-4 bg-white rounded-lg hover:bg-primary-50 hover:text-primary-600 transition-all text-center group shadow-sm"
              >
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-primary-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-primary-600">{nearby.name}</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              to="/service-areas"
              className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-semibold text-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span>View All Service Areas</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
