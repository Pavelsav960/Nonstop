import { Helmet } from 'react-helmet-async';
import { Phone, MessageSquare, Truck } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import HowWeAreDifferent from '../components/HowWeAreDifferent';
import Guarantee from '../components/Guarantee';
import Contact from '../components/Contact';
import ContactAboutSnippet from '../components/contact/ContactAboutSnippet';
import ContactCommonReasonsSection from '../components/contact/ContactCommonReasonsSection';
import ContactServicesSection from '../components/contact/ContactServicesSection';
import ContactServiceAreasSection from '../components/contact/ContactServiceAreasSection';
import ContactReviewsSection from '../components/contact/ContactReviewsSection';
import ContactFAQSection from '../components/contact/ContactFAQSection';
import { BUSINESS } from '../constants';
import contactImage from '../assets/images/nonstop-lock-and-key-locksmith-arriving-at-customer-home-st-louis.webp';

export default function ContactPage() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${BUSINESS.url}#localbusiness`,
    name: BUSINESS.name,
    legalName: BUSINESS.legalName,
    url: BUSINESS.url,
    logo: BUSINESS.logo,
    image: BUSINESS.logo,
    telephone: BUSINESS.phoneRaw,
    email: BUSINESS.email,
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
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: BUSINESS.phoneRaw,
      contactType: 'customer service',
      areaServed: 'US',
      availableLanguage: 'English',
      hoursAvailable: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59',
      },
    },
    sameAs: [...BUSINESS.sameAs],
    openingHours: 'Mo-Su 00:00-23:59',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: BUSINESS.ratingValue,
      reviewCount: BUSINESS.reviewCount,
      bestRating: '5',
      worstRating: '1',
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${BUSINESS.url}/contact#breadcrumb`,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BUSINESS.url },
      { '@type': 'ListItem', position: 2, name: 'Contact', item: `${BUSINESS.url}/contact` },
    ],
  };

  const contactPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    '@id': `${BUSINESS.url}/contact#contactpage`,
    url: `${BUSINESS.url}/contact`,
    name: `Contact ${BUSINESS.name} | 24/7 Locksmith in St. Louis County`,
    description: `Reach ${BUSINESS.name} for 24/7 locksmith service across St. Louis County. Call ${BUSINESS.phone} for emergencies or send a message for a free estimate.`,
    inLanguage: 'en-US',
    isPartOf: { '@type': 'WebSite', '@id': `${BUSINESS.url}#website` },
    about: { '@id': `${BUSINESS.url}#localbusiness` },
    breadcrumb: { '@id': `${BUSINESS.url}/contact#breadcrumb` },
    mainEntity: { '@id': `${BUSINESS.url}#localbusiness` },
    primaryImageOfPage: { '@type': 'ImageObject', url: BUSINESS.logo },
    potentialAction: [
      {
        '@type': 'CommunicateAction',
        name: 'Call our 24/7 locksmith hotline',
        target: BUSINESS.phoneTel,
      },
      {
        '@type': 'CommunicateAction',
        name: `Email ${BUSINESS.name}`,
        target: `mailto:${BUSINESS.email}`,
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Contact Nonstop Lock & Key | 24/7 Locksmith St. Louis | {BUSINESS.phone}</title>
        <meta
          name="description"
          content={`Contact ${BUSINESS.name} for 24/7 locksmith services in St. Louis County. Call ${BUSINESS.phone} or send a message. Family-owned, licensed, fast response.`}
        />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" href={`${BUSINESS.url}/contact`} />
        <meta property="og:title" content={`Contact ${BUSINESS.name} | 24/7 Locksmith St. Louis`} />
        <meta property="og:description" content={`Reach ${BUSINESS.name} anytime. Call ${BUSINESS.phone} for emergency locksmith service or request a free quote.`} />
        <meta property="og:url" content={`${BUSINESS.url}/contact`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={BUSINESS.logo} />
        <meta property="og:site_name" content={BUSINESS.name} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`Contact ${BUSINESS.name} | 24/7 Locksmith St. Louis`} />
        <meta name="twitter:description" content={`Call ${BUSINESS.phone} for 24/7 locksmith services. Free quotes.`} />
        <meta name="twitter:image" content={BUSINESS.logo} />
        <meta name="geo.region" content={BUSINESS.region} />
        <meta name="geo.placename" content={`${BUSINESS.city}, ${BUSINESS.state}`} />
        <meta name="geo.position" content={`${BUSINESS.lat};${BUSINESS.lng}`} />
        <meta name="ICBM" content={`${BUSINESS.lat}, ${BUSINESS.lng}`} />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(contactPageSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
      </Helmet>

      <Navigation />

      <main>
        {/* HERO — dark navy + dot pattern (matches site) */}
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
                    Contact Us
                  </p>
                  <h1 className="!text-[2.25rem] sm:!text-5xl md:!text-6xl lg:!text-[64px] !font-bold !leading-[1.05] mb-6">
                    Contact Nonstop Lock & Key<br />
                    <span className="text-primary-500">Mobile Locksmith In St. Louis County</span>
                  </h1>
                  <p className="text-xl md:text-2xl text-white/85 leading-relaxed mb-8">
                    Available <strong className="font-bold">24/7</strong>, including holidays. Call for emergency lockouts or send a message for a free service estimate.
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
                      href="#contact"
                      className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white text-lg font-semibold py-4 px-6 rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300 tracking-wide"
                    >
                      <MessageSquare className="w-5 h-5 flex-shrink-0" />
                      Send A Message
                    </a>
                  </div>
                </div>

                {/* RIGHT — Locksmith arriving at customer image with floating badge */}
                <div className="w-full max-w-full relative pb-10 sm:pb-12">
                  <div className="relative h-72 sm:h-96 md:h-[420px] lg:h-[460px] rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={contactImage}
                      alt={`${BUSINESS.name} mobile locksmith technician arriving at a customer's home in St. Louis, MO`}
                      loading="eager"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                  </div>

                  {/* Floating brand badge */}
                  <div className="absolute -bottom-1 sm:-bottom-2 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-[280px] bg-primary-500 text-white p-5 sm:p-6 rounded-2xl shadow-lg">
                    <div className="flex items-center gap-2 mb-1.5">
                      <Truck className="w-5 h-5 flex-shrink-0" strokeWidth={2.5} />
                      <p className="text-[15px] sm:text-base font-bold normal-case">
                        We Come To You
                      </p>
                    </div>
                    <p className="text-[13px] sm:text-[14px] opacity-90 normal-case leading-snug">
                      Mobile locksmith arriving in 15–30 minutes across St. Louis County.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* ABOUT SNIPPET — humanize + link to About */}
        <ContactAboutSnippet />

        {/* CONTACT — universal section (matches homepage) */}
        <Contact />

        {/* CUSTOMER REVIEWS — moved up to build trust early */}
        <ContactReviewsSection />

        {/* HOW WE ARE DIFFERENT — universal */}
        <HowWeAreDifferent />

        {/* COMMON REASONS — user-framed routing to service pages */}
        <ContactCommonReasonsSection />

        {/* GUARANTEE — universal mid-page breaker */}
        <Guarantee />

        {/* ALL SERVICES — chip grid of 11 services */}
        <ContactServicesSection />

        {/* SERVICE AREAS — quick-link chips for 20 cities */}
        <ContactServiceAreasSection />

        {/* CONTACT FAQ */}
        <ContactFAQSection />
      </main>

      <Footer />
    </>
  );
}
