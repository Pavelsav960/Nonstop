import { Link } from 'react-router';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { BUSINESS } from '../constants';
import { cityData } from '../data/cityData';
import { serviceData } from '../data/serviceData';

export default function AboutPage() {
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
        name: 'About Us',
        item: `${BUSINESS.url}/about`,
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
    email: BUSINESS.email,
    priceRange: BUSINESS.priceRange,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS.streetAddress,
      addressLocality: BUSINESS.city,
      addressRegion: BUSINESS.state,
      postalCode: BUSINESS.postalCode,
      addressCountry: 'US',
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
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
    sameAs: [
      BUSINESS.gbpUrl,
    ],
    areaServed: cityData.map((city) => ({
      '@type': 'City',
      name: city.name,
      containedInPlace: { '@type': 'State', name: BUSINESS.stateFullName },
    })),
  };

  const differentiators = [
    {
      title: 'Upfront Pricing',
      description: 'No hidden fees, no surprises. We provide a clear quote before any work begins so you know exactly what to expect.',
      icon: (
        <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Licensed & Insured',
      description: 'We are fully licensed and insured in the state of Missouri. Your property is protected every time we work on it.',
      icon: (
        <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: '24/7 Emergency Service',
      description: 'Locked out at 2 AM on a holiday? We are here. Our team is available around the clock, including weekends and holidays.',
      icon: (
        <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Mobile Service',
      description: 'We come directly to your location — home, office, or roadside. Our fully equipped vans carry everything needed to get the job done on site.',
      icon: (
        <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      title: 'All Lock Types',
      description: 'From residential deadbolts and smart locks to commercial access systems and automotive transponder keys — we handle it all.',
      icon: (
        <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
        </svg>
      ),
    },
    {
      title: 'Satisfaction Guaranteed',
      description: 'We stand behind every job. If you are not 100% satisfied with our work, we will make it right — no questions asked.',
      icon: (
        <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
        </svg>
      ),
    },
  ];

  const stats = [
    { value: '24/7', label: 'Availability' },
    { value: '20+', label: 'Cities Served' },
    { value: '100+', label: '5-Star Reviews' },
    { value: '30-Min', label: 'Response' },
  ];

  return (
    <div className="min-h-screen animate-fade-in">
      <Helmet>
        <title>About Nonstop Lock & Key | Licensed 24/7 Locksmith in St. Louis, MO</title>
        <meta
          name="description"
          content={`Learn about Nonstop Lock & Key — a licensed, insured, 24/7 mobile locksmith serving St. Louis and 20+ surrounding cities. Residential, commercial, and automotive locksmith services. Call ${BUSINESS.phone}.`}
        />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" href={`${BUSINESS.url}/about`} />

        {/* Open Graph */}
        <meta property="og:title" content="About Nonstop Lock & Key | Licensed 24/7 Locksmith in St. Louis, MO" />
        <meta property="og:description" content="Licensed, insured, 24/7 mobile locksmith serving the St. Louis metro area. Learn about our story, services, and commitment to the community." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${BUSINESS.url}/about`} />
        <meta property="og:image" content={logoUrl} />
        <meta property="og:site_name" content={BUSINESS.name} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Nonstop Lock & Key | Licensed 24/7 Locksmith in St. Louis, MO" />
        <meta name="twitter:description" content="Licensed, insured, 24/7 mobile locksmith serving St. Louis and 20+ surrounding cities." />
        <meta name="twitter:image" content={logoUrl} />

        {/* Geo Tags */}
        <meta name="geo.region" content={BUSINESS.region} />
        <meta name="geo.placename" content={`${BUSINESS.city}, ${BUSINESS.state}`} />
        <meta name="geo.position" content={`${BUSINESS.lat};${BUSINESS.lng}`} />
        <meta name="ICBM" content={`${BUSINESS.lat}, ${BUSINESS.lng}`} />

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
              <span className="font-medium text-gray-900">About Us</span>
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-8 pb-16 sm:pt-12 sm:pb-24 bg-gradient-to-br from-primary-600 to-primary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            About Nonstop Lock & Key
          </h1>
          <p className="text-xl sm:text-2xl text-primary-100 max-w-3xl mx-auto">
            Your trusted, licensed locksmith serving the St. Louis metropolitan area around the clock — because lockouts never happen at a convenient time.
          </p>
        </div>
      </header>

      <main>
        {/* Our Story Section */}
        <section className="py-16 sm:py-24 bg-white" aria-labelledby="story-heading">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="story-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
              Our Story
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
              <p>
                Nonstop Lock & Key was founded with a simple idea: when someone in St. Louis is locked out of their home, car, or business, they deserve fast, honest help — not inflated prices or long wait times. As a locally owned and operated mobile locksmith company, we take pride in treating every customer like a neighbor, because in most cases, they are.
              </p>
              <p>
                We are fully licensed and insured in the state of {BUSINESS.stateFullName}, and every job we take on is backed by professional-grade tools, up-to-date training, and a genuine commitment to doing things right the first time. From our base in {BUSINESS.city}, our mobile units serve more than 20 cities across the greater St. Louis area, bringing full-service locksmith capabilities directly to your door — whether that is a residential home in Florissant, a commercial storefront in Clayton, or a roadside lockout on I-270.
              </p>
              <p>
                What started as a one-person operation has grown into a trusted name across the metro, with over {BUSINESS.reviewCount} five-star reviews from real customers. We cover residential, commercial, and automotive locksmith needs 24 hours a day, 7 days a week — including holidays and weekends. When you call {BUSINESS.name}, you are not getting a national call center. You are getting a real local locksmith who knows St. Louis and will be at your location fast.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Row */}
        <section className="py-12 sm:py-16 bg-gray-50" aria-label="Key business statistics">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl sm:text-5xl font-bold text-primary-600 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-lg text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What Sets Us Apart */}
        <section className="py-16 sm:py-24 bg-white" aria-labelledby="differentiators-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="differentiators-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">
              What Sets Us Apart
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              There are plenty of locksmiths in St. Louis. Here is why our customers keep choosing us — and referring their friends.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {differentiators.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all"
                >
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Areas Section */}
        <section className="py-16 sm:py-24 bg-gray-50" aria-labelledby="about-areas-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="about-areas-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">
              Cities We Serve
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Our mobile locksmith units are positioned throughout the St. Louis metro so we can reach you fast, no matter where you are. We proudly serve the following communities.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {cityData.map((city) => (
                <Link
                  key={city.slug}
                  to={`/locksmith/${city.slug}`}
                  className="flex items-center space-x-2 bg-white rounded-lg px-4 py-3 hover:shadow-md hover:bg-primary-50 transition-all group"
                >
                  <svg className="w-5 h-5 text-primary-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-900 font-medium group-hover:text-primary-600 transition-colors">
                    Locksmith in {city.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Our Services Section */}
        <section className="py-16 sm:py-24 bg-white" aria-labelledby="about-services-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="about-services-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              We offer a full range of locksmith services for homes, businesses, and vehicles across the St. Louis metro area.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceData.map((service) => (
                <Link
                  key={service.slug}
                  to={`/services/${service.slug}`}
                  className="group bg-gray-50 rounded-xl p-6 hover:shadow-lg hover:bg-primary-50 transition-all"
                >
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                      {service.shortDescription}
                    </p>
                    <div className="flex items-center justify-between mt-3">
                      <span className="text-sm font-semibold text-gray-900">From {service.startingPrice}</span>
                      <span className="inline-flex items-center text-sm font-medium text-primary-600 group-hover:translate-x-1 transition-transform">
                        Learn More
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

        {/* CTA Section */}
        <section className="py-16 sm:py-24 bg-gray-50" aria-labelledby="about-cta-heading">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-8 sm:p-12 text-center text-white shadow-2xl">
              <h2 id="about-cta-heading" className="text-3xl sm:text-4xl font-bold mb-4">
                Get a Free Quote Today
              </h2>
              <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
                Whether you are locked out right now or planning a lock upgrade, give us a call for a free, no-obligation quote. We are available 24/7 and ready to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a
                  href={BUSINESS.phoneTel}
                  className="inline-block px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg text-lg"
                >
                  Call {BUSINESS.phone}
                </a>
                <Link
                  to="/contact"
                  className="inline-block px-8 py-4 bg-primary-700 text-white font-semibold rounded-lg hover:bg-primary-900 transition-all border-2 border-white/30 text-lg"
                >
                  Send Us a Message
                </Link>
              </div>
              <Link to="/reviews" className="inline-flex items-center gap-2 text-primary-100 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
                <span>See what our customers say — 4.9/5 from 100+ reviews</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
