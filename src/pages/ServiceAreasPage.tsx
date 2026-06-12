import { Link } from 'react-router';
import { Helmet } from 'react-helmet-async';
import { MapPin, Phone, Clock, ShieldCheck, Star, Users, Award } from 'lucide-react';
import { BUSINESS } from '../constants';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ServiceStrip from '../components/ServiceStrip';
import HowWeAreDifferent from '../components/HowWeAreDifferent';
import Guarantee from '../components/Guarantee';
import Contact from '../components/Contact';
import { cityData } from '../data/cityData';
import serviceAreasImage from '../assets/images/nonstop-lock-and-key-st-louis-service-areas.webp';

export default function ServiceAreasPage() {
  const logoUrl = BUSINESS.logo;

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BUSINESS.url },
      { '@type': 'ListItem', position: 2, name: 'Service Areas', item: `${BUSINESS.url}/service-areas` },
    ],
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    additionalType: 'Locksmith',
    '@id': `${BUSINESS.url}#localbusiness`,
    name: BUSINESS.legalName,
    image: logoUrl,
    url: `${BUSINESS.url}/service-areas`,
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

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Locksmith Service Areas in St. Louis County',
    numberOfItems: cityData.length,
    itemListElement: cityData.map((city, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Place',
        name: city.name,
        url: `${BUSINESS.url}/locksmith/${city.slug}`,
        geo: { '@type': 'GeoCoordinates', latitude: city.lat, longitude: city.lng },
      },
    })),
  };

  return (
    <div className="min-h-screen animate-fade-in">
      <Helmet>
        <title>Locksmith Service Areas in St. Louis County | Nonstop Lock & Key</title>
        <meta name="description" content={`Family-owned 24/7 mobile locksmith serving ${cityData.length} cities across St. Louis County. Find your city for local pricing, response times, and reviews. Call ${BUSINESS.phone}.`} />
        <meta name="author" content={BUSINESS.legalName} />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" href={`${BUSINESS.url}/service-areas`} />
        <meta property="og:title" content="Locksmith Service Areas | St. Louis County | Nonstop Lock & Key" />
        <meta property="og:description" content={`24/7 mobile locksmith in ${cityData.length} cities across St. Louis County. Find your city for local info.`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${BUSINESS.url}/service-areas`} />
        <meta property="og:image" content={logoUrl} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content={BUSINESS.legalName} />
        <meta name="geo.region" content="US-MO" />
        <meta name="geo.placename" content={BUSINESS.city} />
        <meta name="geo.position" content={`${BUSINESS.lat};${BUSINESS.lng}`} />
        <meta name="ICBM" content={`${BUSINESS.lat}, ${BUSINESS.lng}`} />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(itemListSchema)}</script>
      </Helmet>

      <Navigation />

      <main>
        {/* HERO — dark navy + dot pattern matching homepage */}
        <section className="relative bg-gray-900 pt-24 pb-16 md:pt-40 md:pb-20 overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none" aria-hidden="true">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                backgroundSize: '40px 40px',
              }}
            />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-[1.3fr_1fr] gap-8 lg:gap-12 items-start w-full max-w-full overflow-hidden">

                {/* LEFT — Value prop */}
                <div className="text-white w-full max-w-full">
                  <p className="text-primary-500 text-[14px] sm:text-[16px] font-semibold tracking-[0.15em] uppercase mb-4">
                    Service Areas
                  </p>
                  <h1 className="!text-[2.25rem] sm:!text-5xl md:!text-6xl lg:!text-[64px] !font-bold !leading-[1.05] mb-6">
                    Locksmith Services Across<br />
                    <span className="text-primary-500">St. Louis County</span>
                  </h1>
                  <p className="text-xl md:text-2xl text-white/85 leading-relaxed mb-8">
                    Family-owned mobile locksmith serving <strong className="text-white font-bold">{cityData.length} cities</strong> across the St. Louis metro. 15–30 minute response, 24/7.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <a
                      href={BUSINESS.phoneTel}
                      className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white text-lg font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl tracking-wide"
                      aria-label={`Call ${BUSINESS.name} at ${BUSINESS.phone}`}
                    >
                      <Phone className="h-5 w-5 animate-pulse flex-shrink-0" />
                      <span>Call Now: {BUSINESS.phone}</span>
                    </a>
                    <a
                      href="#cities"
                      className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white text-lg font-semibold py-4 px-6 rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300 tracking-wide"
                    >
                      Browse Cities
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* RIGHT — Service areas image + floating badge */}
                <div className="w-full max-w-full relative pb-10 sm:pb-12">
                  <div className="relative h-72 sm:h-96 md:h-[420px] lg:h-[460px] rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={serviceAreasImage}
                      alt={`${BUSINESS.name} mobile locksmith serving ${cityData.length} cities across St. Louis County, MO`}
                      loading="eager"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                  </div>

                  {/* Floating brand badge */}
                  <div className="absolute -bottom-1 sm:-bottom-2 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-[280px] bg-primary-500 text-white p-5 sm:p-6 rounded-2xl shadow-lg">
                    <div className="flex items-center gap-2 mb-1.5">
                      <MapPin className="w-5 h-5 flex-shrink-0" strokeWidth={2.5} />
                      <p className="text-[15px] sm:text-base font-bold normal-case">
                        {cityData.length} Cities Covered
                      </p>
                    </div>
                    <p className="text-[13px] sm:text-[14px] opacity-90 normal-case leading-snug">
                      Mobile locksmith fleet serving every neighborhood across St. Louis County.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Service strip — universal */}
        <ServiceStrip />

        {/* CITIES GRID */}
        <section id="cities" className="section-ref bg-[#F5F5F5]">
          <div className="container-ref">
            <div className="text-center mb-12 sm:mb-14">
              <p className="text-primary-600 text-[14px] sm:text-[16px] font-semibold tracking-wide normal-case mb-3">
                Coverage
              </p>
              <h2 className="text-[#17171A] max-w-4xl mx-auto px-2">
                {cityData.length} Cities, One Trusted Locksmith
              </h2>
              <p className="mt-4 text-[16px] sm:text-[18px] lg:text-[19px] text-gray-700 max-w-2xl mx-auto leading-relaxed px-4 font-medium">
                Click your city for local pricing, response times, neighborhoods served, and reviews from real customers nearby.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
              {cityData.map((city) => (
                <Link
                  key={city.slug}
                  to={`/locksmith/${city.slug}`}
                  aria-label={`Locksmith services in ${city.name}, MO`}
                  className="group bg-white rounded-2xl p-5 sm:p-6 border border-gray-200 shadow-sm hover:shadow-md hover:border-primary-300 transition-all duration-300 flex flex-col"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-10 h-10 rounded-full bg-primary-50 group-hover:bg-primary-500 flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                      <MapPin className="w-5 h-5 text-primary-600 group-hover:text-white transition-colors duration-300" strokeWidth={2.5} />
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3 className="!text-[17px] sm:!text-[18px] !font-bold text-[#17171A] group-hover:text-primary-600 transition-colors leading-tight normal-case">
                        Locksmith {city.name}
                      </h3>
                      <p className="text-[12px] text-gray-500 mt-0.5 normal-case">
                        Response: {city.responseTime}
                      </p>
                    </div>
                  </div>
                  <p className="text-[14px] text-gray-600 leading-[1.55] mt-1 normal-case flex-1">
                    {city.description.length > 110 ? `${city.description.substring(0, 110)}…` : city.description}
                  </p>
                  <span className="inline-flex items-center text-primary-600 font-bold text-[14px] mt-4 group-hover:gap-2 transition-all gap-1 normal-case">
                    View {city.name}
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* HOW WE ARE DIFFERENT — universal */}
        <HowWeAreDifferent />

        {/* COVERAGE INFO + MAP */}
        <section className="section-ref bg-white" aria-labelledby="coverage-heading">
          <div className="container-ref">
            <div className="text-center mb-10 sm:mb-12">
              <p className="text-primary-600 text-[14px] sm:text-[16px] font-semibold tracking-wide normal-case mb-3">
                Full Metro Coverage
              </p>
              <h2 id="coverage-heading" className="text-[#17171A] max-w-4xl mx-auto px-2">
                Serving The Entire St. Louis Metro
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center max-w-6xl mx-auto">
              {/* Left: copy + features */}
              <div>
                <p className="text-[16px] lg:text-[18px] text-[#333437] leading-[1.65] mb-5">
                  Nonstop Lock & Key operates a fleet of fully equipped mobile locksmith units strategically positioned across the St. Louis metropolitan area. Whether you are in downtown St. Louis, the western suburbs of Chesterfield or Ballwin, or anywhere in between, a licensed locksmith can reach you fast.
                </p>
                <p className="text-[16px] lg:text-[18px] text-[#333437] leading-[1.65] mb-7">
                  Our service area spans St. Louis city and the surrounding St. Louis County communities. If your city is not listed, call us anyway — we likely cover your area.
                </p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { Icon: Clock, text: '24/7 service, 365 days a year' },
                    { Icon: ShieldCheck, text: 'Licensed & insured technicians' },
                    { Icon: Users, text: 'Local technicians, not call center' },
                    { Icon: Award, text: 'Family-owned since 2010' },
                    { Icon: Star, text: `${BUSINESS.ratingValue} stars from ${BUSINESS.reviewCount}+ reviews` },
                    { Icon: MapPin, text: `${cityData.length} cities served` },
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2.5">
                      <item.Icon className="w-5 h-5 text-primary-500 flex-shrink-0" strokeWidth={2.5} />
                      <span className="text-[14px] sm:text-[15px] text-[#17171A] font-medium normal-case">
                        {item.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: map */}
              <div className="rounded-2xl overflow-hidden shadow-md border border-gray-200">
                <iframe
                  title={`${BUSINESS.name} on Google Maps — St. Louis County, MO`}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199412.27235498!2d-90.48648!3d38.6270!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6d8c00414bcad66e!2sNonstop%20Lock%20%26%20Key!5e0!3m2!1sen!2sus!4v1700000000000"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>

        {/* GUARANTEE — universal */}
        <Guarantee />

        {/* CONTACT — universal */}
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
