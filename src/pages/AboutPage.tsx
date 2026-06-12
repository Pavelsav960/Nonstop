import { Link } from 'react-router';
import { Helmet } from 'react-helmet-async';
import { Phone, Clock, ShieldCheck, Users, Award, MapPin, DollarSign } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import HowWeAreDifferent from '../components/HowWeAreDifferent';
import Guarantee from '../components/Guarantee';
import Contact from '../components/Contact';
import AboutReviewsSection from '../components/about/AboutReviewsSection';
import AboutFAQSection from '../components/about/AboutFAQSection';
import AboutBrandsSection from '../components/about/AboutBrandsSection';
import { BUSINESS } from '../constants';
import { cityData } from '../data/cityData';
import vanImage from '../assets/images/nonstop-lock-and-key-mobile-locksmith-van-st-louis-mo.webp';
import technicianImage from '../assets/images/nonstop-lock-and-key-technician-rekeying-lock-st-louis.webp';

export default function AboutPage() {
  const logoUrl = BUSINESS.logo;

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BUSINESS.url },
      { '@type': 'ListItem', position: 2, name: 'About Us', item: `${BUSINESS.url}/about` },
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
    email: BUSINESS.email,
    priceRange: BUSINESS.priceRange,
    foundingDate: '2010',
    numberOfEmployees: '5',
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
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
    sameAs: [BUSINESS.gbpUrl],
    areaServed: cityData.map((city) => ({
      '@type': 'City',
      name: city.name,
      containedInPlace: { '@type': 'State', name: BUSINESS.stateFullName },
    })),
  };

  const differentiators = [
    { Icon: DollarSign, title: 'Upfront Pricing', description: 'No hidden fees, no surprises. Clear quote before any work begins.' },
    { Icon: ShieldCheck, title: 'Licensed & Insured', description: 'Fully licensed and insured in Missouri. Your property is protected.' },
    { Icon: Clock, title: '24/7 Service', description: 'Locked out at 2 AM on a holiday? We answer. Always available.' },
    { Icon: MapPin, title: 'Mobile Service', description: 'We come to you. Fully equipped vans carry everything for on-site work.' },
    { Icon: Users, title: 'Local Technicians', description: 'Real local techs, not a call center. We know every St. Louis neighborhood.' },
    { Icon: Award, title: 'Satisfaction Guaranteed', description: "If you're not 100% satisfied, we make it right. No questions asked." },
  ];

  return (
    <div className="min-h-screen animate-fade-in">
      <Helmet>
        <title>About Nonstop Lock & Key | Family-Owned Locksmith in St. Louis, MO</title>
        <meta
          name="description"
          content={`Family-owned 24/7 mobile locksmith serving ${BUSINESS.city} County since 2010. Licensed, insured, and trusted by ${BUSINESS.reviewCount}+ local customers. Call ${BUSINESS.phone}.`}
        />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" href={`${BUSINESS.url}/about`} />
        <meta property="og:title" content="About Nonstop Lock & Key | Family-Owned Locksmith in St. Louis, MO" />
        <meta property="og:description" content={`Family-owned 24/7 locksmith serving ${BUSINESS.city} County since 2010. Licensed, insured, trusted.`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${BUSINESS.url}/about`} />
        <meta property="og:image" content={logoUrl} />
        <meta property="og:site_name" content={BUSINESS.name} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Nonstop Lock & Key | Family-Owned Locksmith in St. Louis, MO" />
        <meta name="twitter:description" content={`Family-owned 24/7 locksmith serving ${BUSINESS.city} County since 2010.`} />
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
        {/* HERO — dark navy + dot pattern (matches homepage) */}
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
                    About Us
                  </p>
                  <h1 className="!text-[2.25rem] sm:!text-5xl md:!text-6xl lg:!text-[64px] !font-bold !leading-[1.05] mb-6">
                    Family-Owned. Locally Run.<br />
                    <span className="text-primary-500">Locksmith Since 2010.</span>
                  </h1>
                  <p className="text-xl md:text-2xl text-white/85 leading-relaxed mb-8">
                    A St. Louis County locksmith built on a simple idea: fast, honest service should never be a luxury.
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
                      href="#our-story"
                      className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white text-lg font-semibold py-4 px-6 rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300 tracking-wide"
                    >
                      Read Our Story
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* RIGHT — Technician image with floating badge */}
                <div className="w-full max-w-full relative pb-10 sm:pb-12">
                  <div className="relative h-72 sm:h-96 md:h-[420px] lg:h-[460px] rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={technicianImage}
                      alt={`${BUSINESS.name} locksmith technician rekeying a lock in St. Louis, MO`}
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
                        Trained Local Technicians
                      </p>
                    </div>
                    <p className="text-[13px] sm:text-[14px] opacity-90 normal-case leading-snug">
                      Licensed mobile locksmiths skilled with every major lock brand.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* OUR STORY */}
        <section id="our-story" className="section-ref bg-white scroll-mt-20" aria-labelledby="story-heading">
          <div className="container-ref">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
              <div>
                <p className="text-primary-600 text-[14px] sm:text-[16px] font-semibold tracking-wide normal-case mb-3">
                  Our Story
                </p>
                <h2 id="story-heading" className="text-[#17171A] mb-5 sm:mb-6">
                  Built On Trust, Run By Family
                </h2>
                <div className="space-y-4 text-[16px] lg:text-[18px] text-[#333437] leading-[1.65]">
                  <p>
                    Nonstop Lock & Key was founded in 2010 with a simple idea: when someone in {BUSINESS.city} is locked out of their home, car, or business, they deserve fast, honest help. No inflated prices, no long waits, no call center across the country.
                  </p>
                  <p>
                    Fully licensed and insured in {BUSINESS.stateFullName}, our family-owned mobile fleet serves <Link to="/service-areas" className="text-primary-600 hover:text-primary-700 font-medium underline-offset-2 hover:underline">{cityData.length} cities</Link> across St. Louis County. From historic homes in DeMun to commercial corridors along Manchester Road, every job gets professional-grade tools, up-to-date training, and a real commitment to doing things right the first time.
                  </p>
                  <p>
                    What started as a one-person operation has grown into a trusted name across the metro, backed by <Link to="/reviews" className="text-primary-600 hover:text-primary-700 font-medium underline-offset-2 hover:underline">{BUSINESS.reviewCount}+ five-star reviews</Link> from real customers. We answer the phone 24 hours a day, 365 days a year, including holidays.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 mt-7 sm:mt-8">
                  <a
                    href={BUSINESS.phoneTel}
                    className="inline-flex items-center justify-center gap-2 bg-primary-500 hover:bg-primary-600 text-white font-bold text-[15px] sm:text-base py-3 px-6 rounded-lg shadow-sm hover:shadow-md transition-all"
                  >
                    Call {BUSINESS.phone}
                  </a>
                  <Link
                    to="/reviews"
                    className="inline-flex items-center gap-1 text-primary-600 hover:text-primary-700 font-semibold text-[15px] sm:text-base underline underline-offset-4 transition-colors"
                  >
                    Read Our Reviews
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>

              <div className="relative mt-8 lg:mt-0">
                <div className="relative h-80 sm:h-96 lg:h-[460px] rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={vanImage}
                    alt={`${BUSINESS.name} mobile locksmith van serving St. Louis, MO and surrounding areas`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
                <div className="absolute -bottom-4 sm:-bottom-6 left-4 right-4 sm:left-auto sm:right-auto sm:-left-6 bg-primary-500 text-white p-5 sm:p-6 rounded-2xl shadow-lg sm:max-w-xs">
                  <p className="text-base sm:text-lg font-bold mb-1 normal-case">Family-Owned Since 2010</p>
                  <p className="text-[13px] sm:text-sm opacity-90 normal-case leading-snug">
                    Licensed, insured, and trusted by {BUSINESS.city} County for over 16 years.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HOW WE ARE DIFFERENT — universal */}
        <HowWeAreDifferent />

        {/* WHAT SETS US APART — 6 differentiators */}
        <section className="section-ref bg-white" aria-labelledby="differentiators-heading">
          <div className="container-ref">
            <div className="text-center mb-12 sm:mb-14">
              <p className="text-primary-600 text-[14px] sm:text-[16px] font-semibold tracking-wide normal-case mb-3">
                Why Choose Us
              </p>
              <h2 id="differentiators-heading" className="text-[#17171A] max-w-4xl mx-auto px-2">
                What Sets Nonstop Apart
              </h2>
              <p className="mt-4 text-[16px] sm:text-[18px] lg:text-[19px] text-gray-700 max-w-2xl mx-auto leading-relaxed px-4 font-medium">
                Plenty of locksmiths in St. Louis. Here's why our customers keep choosing us and referring their neighbors.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {differentiators.map(({ Icon, title, description }) => (
                <div
                  key={title}
                  className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-primary-300 transition-all duration-300 p-6 sm:p-7"
                >
                  <div className="w-12 h-12 rounded-full bg-primary-500 flex items-center justify-center shadow-sm mb-4">
                    <Icon className="w-6 h-6 text-white" strokeWidth={2.5} />
                  </div>
                  <h3 className="!text-[20px] sm:!text-[22px] !font-bold text-[#17171A] leading-tight mb-2">
                    {title}
                  </h3>
                  <p className="text-[15px] sm:text-[16px] text-gray-700 leading-[1.6] normal-case">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BRAND AFFILIATIONS — brands we service */}
        <AboutBrandsSection />

        {/* CUSTOMER REVIEWS */}
        <AboutReviewsSection />

        {/* ABOUT FAQ */}
        <AboutFAQSection />

        {/* GUARANTEE — universal */}
        <Guarantee />

        {/* CONTACT — universal */}
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
