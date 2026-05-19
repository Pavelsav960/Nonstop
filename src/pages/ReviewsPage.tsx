import { Link } from 'react-router';
import { Helmet } from 'react-helmet-async';
import { Phone, KeyRound, MapPin, ShieldCheck } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import HowWeAreDifferent from '../components/HowWeAreDifferent';
import Guarantee from '../components/Guarantee';
import Contact from '../components/Contact';
import ReviewsGrid, { reviews } from '../components/reviews/ReviewsGrid';
import LeaveReviewSection from '../components/reviews/LeaveReviewSection';
import { BUSINESS } from '../constants';
import { cityData } from '../data/cityData';
import { serviceData } from '../data/services';
import vanImage from '../assets/images/nonstop-lock-and-key-mobile-locksmith-van-st-louis-mo.jpeg';

export default function ReviewsPage() {
  const logoUrl = BUSINESS.logo;

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${BUSINESS.url}/reviews#breadcrumb`,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BUSINESS.url },
      { '@type': 'ListItem', position: 2, name: 'Reviews', item: `${BUSINESS.url}/reviews` },
    ],
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    additionalType: 'Locksmith',
    '@id': `${BUSINESS.url}#localbusiness`,
    name: BUSINESS.legalName,
    image: logoUrl,
    url: BUSINESS.url,
    telephone: BUSINESS.phoneRaw,
    priceRange: BUSINESS.priceRange,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS.streetAddress,
      addressLocality: BUSINESS.addressCity,
      addressRegion: BUSINESS.state,
      postalCode: BUSINESS.postalCode,
      addressCountry: 'US',
    },
    geo: { '@type': 'GeoCoordinates', latitude: BUSINESS.lat, longitude: BUSINESS.lng },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: BUSINESS.ratingValue,
      reviewCount: BUSINESS.reviewCount,
      bestRating: '5',
      worstRating: '1',
    },
    review: reviews.map((r) => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: r.name },
      datePublished: r.date,
      reviewBody: r.text,
      reviewRating: {
        '@type': 'Rating',
        ratingValue: r.rating.toString(),
        bestRating: '5',
        worstRating: '1',
      },
      itemReviewed: {
        '@type': 'LocalBusiness',
        '@id': `${BUSINESS.url}#localbusiness`,
        name: BUSINESS.name,
      },
    })),
    sameAs: [BUSINESS.gbpUrl],
  };

  return (
    <div className="min-h-screen animate-fade-in">
      <Helmet>
        <title>Customer Reviews | {BUSINESS.name} | 5-Star Locksmith in St. Louis</title>
        <meta
          name="description"
          content={`Read ${BUSINESS.reviewCount}+ five-star customer reviews of ${BUSINESS.name}. Real testimonials from St. Louis County residents who trusted us for lockouts, key replacement, rekeys, and 24/7 emergency service. Call ${BUSINESS.phone}.`}
        />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" href={`${BUSINESS.url}/reviews`} />
        <meta property="og:title" content={`Customer Reviews | ${BUSINESS.name} | 5-Star Locksmith in St. Louis`} />
        <meta property="og:description" content={`Read ${BUSINESS.reviewCount}+ five-star reviews from real customers. Trusted locksmith in ${BUSINESS.city} for car lockouts, lock rekeying, key replacement, and 24/7 emergency service.`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${BUSINESS.url}/reviews`} />
        <meta property="og:image" content={logoUrl} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content={BUSINESS.legalName} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`Customer Reviews | ${BUSINESS.name} | 5-Star Locksmith in St. Louis`} />
        <meta name="twitter:description" content={`Read ${BUSINESS.reviewCount}+ five-star reviews from real customers. Trusted locksmith in ${BUSINESS.city}.`} />
        <meta name="twitter:image" content={logoUrl} />
        <meta name="geo.region" content={BUSINESS.region} />
        <meta name="geo.placename" content={`${BUSINESS.city}, ${BUSINESS.state}`} />
        <meta name="geo.position" content={`${BUSINESS.lat};${BUSINESS.lng}`} />
        <meta name="ICBM" content={`${BUSINESS.lat}, ${BUSINESS.lng}`} />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
      </Helmet>

      <Navigation />

      <main>
        {/* HERO — dark navy + dot pattern, 2-col asymmetric like homepage */}
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
                    Customer Reviews
                  </p>
                  <h1 className="!text-[2.25rem] sm:!text-5xl md:!text-6xl lg:!text-[64px] !font-bold !leading-[1.05] mb-6">
                    Real Reviews From<br />
                    <span className="text-primary-500">Real St. Louis Customers</span>
                  </h1>
                  <p className="text-xl md:text-2xl text-white/85 leading-relaxed mb-8">
                    See why your neighbors trust {BUSINESS.name} for their lock and key needs.
                  </p>

                  {/* CTAs */}
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
                      href={BUSINESS.gbpReviewUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white text-lg font-semibold py-4 px-6 rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300 tracking-wide"
                    >
                      Leave A Review
                    </a>
                  </div>
                </div>

                {/* RIGHT — Branded van photo with floating badge */}
                <div className="w-full max-w-full relative pb-10 sm:pb-12">
                  <div className="relative h-72 sm:h-96 md:h-[420px] lg:h-[460px] rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={vanImage}
                      alt={`${BUSINESS.name} mobile locksmith van serving St. Louis County, MO`}
                      loading="eager"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                  </div>

                  {/* Floating brand badge */}
                  <div className="absolute -bottom-1 sm:-bottom-2 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-[280px] bg-primary-500 text-white p-5 sm:p-6 rounded-2xl shadow-lg">
                    <div className="flex items-center gap-2 mb-1.5">
                      <ShieldCheck className="w-5 h-5 flex-shrink-0" strokeWidth={2.5} />
                      <p className="text-[15px] sm:text-base font-bold normal-case">
                        Family-Owned Since 2010
                      </p>
                    </div>
                    <p className="text-[13px] sm:text-[14px] opacity-90 normal-case leading-snug">
                      Licensed, insured, and trusted by St. Louis County for over 16 years.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* REVIEWS GRID — main content */}
        <ReviewsGrid />

        {/* LEAVE A GOOGLE REVIEW CTA */}
        <LeaveReviewSection />

        {/* HOW WE ARE DIFFERENT — universal */}
        <HowWeAreDifferent />

        {/* SERVICE AREAS — chips linking to city pages */}
        <section className="section-ref bg-[#F5F5F5]" aria-labelledby="reviews-areas-heading">
          <div className="container-ref">
            <div className="text-center mb-10 sm:mb-12">
              <p className="text-primary-600 text-[14px] sm:text-[16px] font-semibold tracking-wide normal-case mb-3">
                Reviews By Location
              </p>
              <h2 id="reviews-areas-heading" className="text-[#17171A] max-w-4xl mx-auto px-2">
                See What Neighbors In Your City Are Saying
              </h2>
              <p className="mt-4 text-[16px] sm:text-[18px] text-gray-700 max-w-2xl mx-auto leading-relaxed px-4 font-medium">
                Tap your city for local reviews, response times, and pricing specific to your area.
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="flex flex-wrap justify-center gap-2 sm:gap-2.5">
                {cityData.map((city) => (
                  <Link
                    key={city.slug}
                    to={`/locksmith/${city.slug}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-white border border-gray-200 hover:border-primary-400 hover:bg-primary-50 rounded-full text-[14px] sm:text-[15px] font-medium text-[#17171A] hover:text-primary-700 shadow-sm hover:shadow-md transition-all group"
                    aria-label={`Locksmith reviews in ${city.name}, MO`}
                  >
                    <MapPin className="w-3.5 h-3.5 text-primary-500 group-hover:text-primary-600 transition-colors" strokeWidth={2.5} aria-hidden="true" />
                    {city.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* GUARANTEE — universal mid-page breaker */}
        <Guarantee />

        {/* SERVICES — chips linking to service pages */}
        <section className="section-ref bg-white" aria-labelledby="reviews-services-heading">
          <div className="container-ref">
            <div className="text-center mb-10 sm:mb-12">
              <p className="text-primary-600 text-[14px] sm:text-[16px] font-semibold tracking-wide normal-case mb-3">
                Reviews By Service
              </p>
              <h2 id="reviews-services-heading" className="text-[#17171A] max-w-4xl mx-auto px-2">
                Browse Reviews By What We Do
              </h2>
              <p className="mt-4 text-[16px] sm:text-[18px] text-gray-700 max-w-2xl mx-auto leading-relaxed px-4 font-medium">
                Each service page includes reviews from customers who used that exact service.
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="flex flex-wrap justify-center gap-2 sm:gap-2.5">
                {serviceData.map((service) => (
                  <Link
                    key={service.slug}
                    to={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-white border border-gray-200 hover:border-primary-400 hover:bg-primary-50 rounded-full text-[14px] sm:text-[15px] font-medium text-[#17171A] hover:text-primary-700 shadow-sm hover:shadow-md transition-all group"
                    aria-label={`Read reviews about ${service.name}`}
                  >
                    <KeyRound className="w-3.5 h-3.5 text-primary-500 group-hover:text-primary-600 transition-colors" strokeWidth={2.5} aria-hidden="true" />
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT — universal */}
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
