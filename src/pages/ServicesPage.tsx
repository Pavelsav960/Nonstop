import { Link } from 'react-router';
import { Helmet } from 'react-helmet-async';
import {
  Phone,
  MapPin,
  Car,
  Home,
  Building2,
  KeyRound,
  Key,
  Smartphone,
  Wrench,
  Hammer,
  Wifi,
  Unlock,
  ShieldCheck,
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import HowWeAreDifferent from '../components/HowWeAreDifferent';
import Guarantee from '../components/Guarantee';
import Contact from '../components/Contact';
import ServicesFAQSection from '../components/services/ServicesFAQSection';
import { BUSINESS } from '../constants';
import { serviceData } from '../data/services';
import { cityData } from '../data/cityData';
import vanImage from '../assets/images/nonstop-lock-and-key-mobile-locksmith-van-st-louis-mo.webp';

const iconBySlug: Record<string, React.ComponentType<{ className?: string; strokeWidth?: number }>> = {
  'car-lockout': Car,
  'car-key-replacement': KeyRound,
  'key-fob-programming': Smartphone,
  'ignition-repair': Wrench,
  'house-lockout': Home,
  'lock-rekey': Key,
  'lock-installation-replacement': Hammer,
  'smart-lock-installation': Wifi,
  'commercial-lockout': Building2,
  'broken-key-extraction': Unlock,
  'safe-opening': ShieldCheck,
};

const groups: Array<{
  label: string;
  description: string;
  slugs: string[];
}> = [
  {
    label: 'Automotive',
    description:
      'Car keys, lockouts, ignition repair, and key fob programming for every major make and model. Mobile service to your driveway, parking lot, or wherever you got stuck.',
    slugs: ['car-lockout', 'car-key-replacement', 'key-fob-programming', 'ignition-repair'],
  },
  {
    label: 'Residential',
    description:
      'Home lockouts, lock rekeying after a move, new lock installations, and smart-lock setup. Same-day service across St. Louis County.',
    slugs: ['house-lockout', 'lock-rekey', 'lock-installation-replacement', 'smart-lock-installation'],
  },
  {
    label: 'Commercial & Specialty',
    description:
      'Commercial property lockouts, broken key extraction without lock damage, and safe opening for residential and business safes.',
    slugs: ['commercial-lockout', 'broken-key-extraction', 'safe-opening'],
  },
];

export default function ServicesPage() {
  const logoUrl = BUSINESS.logo;
  const serviceMap = new Map(serviceData.map((s) => [s.slug, s]));

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${BUSINESS.url}/services#breadcrumb`,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BUSINESS.url },
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${BUSINESS.url}/services` },
    ],
  };

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Locksmith Services in St. Louis County',
    numberOfItems: serviceData.length,
    itemListElement: serviceData.map((service, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Service',
        name: service.name,
        url: `${BUSINESS.url}/services/${service.slug}`,
        provider: { '@id': `${BUSINESS.url}#localbusiness` },
      },
    })),
  };

  const collectionPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${BUSINESS.url}/services#collectionpage`,
    url: `${BUSINESS.url}/services`,
    name: 'Locksmith Services in St. Louis County',
    description: `Family-owned 24/7 mobile locksmith offering residential, automotive, and commercial services across St. Louis County, MO.`,
    inLanguage: 'en-US',
    isPartOf: { '@type': 'WebSite', '@id': `${BUSINESS.url}#website` },
    about: { '@id': `${BUSINESS.url}#localbusiness` },
    breadcrumb: { '@id': `${BUSINESS.url}/services#breadcrumb` },
  };

  return (
    <div className="min-h-screen animate-fade-in">
      <Helmet>
        <title>Locksmith Services in St. Louis County | Nonstop Lock & Key</title>
        <meta
          name="description"
          content={`Family-owned 24/7 mobile locksmith offering residential, automotive, and commercial services across St. Louis County, MO. Car lockouts, key replacement, lock rekey, smart locks, and more. Call ${BUSINESS.phone}.`}
        />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" href={`${BUSINESS.url}/services`} />
        <meta property="og:title" content={`Locksmith Services in St. Louis County | ${BUSINESS.name}`} />
        <meta property="og:description" content={`24/7 mobile locksmith services across St. Louis County. Residential, automotive, and commercial.`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${BUSINESS.url}/services`} />
        <meta property="og:image" content={logoUrl} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content={BUSINESS.legalName} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`Locksmith Services in St. Louis County | ${BUSINESS.name}`} />
        <meta name="twitter:description" content={`24/7 mobile locksmith. Residential, automotive, and commercial services across St. Louis County.`} />
        <meta name="twitter:image" content={logoUrl} />
        <meta name="geo.region" content={BUSINESS.region} />
        <meta name="geo.placename" content={`${BUSINESS.city}, ${BUSINESS.state}`} />
        <meta name="geo.position" content={`${BUSINESS.lat};${BUSINESS.lng}`} />
        <meta name="ICBM" content={`${BUSINESS.lat}, ${BUSINESS.lng}`} />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(collectionPageSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(itemListSchema)}</script>
      </Helmet>

      <Navigation />

      <main>
        {/* HERO — dark navy + dot pattern, 2-col asymmetric */}
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
                    Our Services
                  </p>
                  <h1 className="!text-[2.25rem] sm:!text-5xl md:!text-6xl lg:!text-[64px] !font-bold !leading-[1.05] mb-6">
                    Every Locksmith Service<br />
                    <span className="text-primary-500">In St. Louis County</span>
                  </h1>
                  <p className="text-xl md:text-2xl text-white/85 leading-relaxed mb-8">
                    From emergency lockouts to smart lock installations, our family-owned mobile fleet handles every locksmith job. Same crew, same upfront pricing, every service.
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
                      href="#all-services"
                      className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white text-lg font-semibold py-4 px-6 rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300 tracking-wide"
                    >
                      Browse Services
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* RIGHT — Van image with floating badge */}
                <div className="w-full max-w-full relative pb-10 sm:pb-12">
                  <div className="relative h-72 sm:h-96 md:h-[420px] lg:h-[460px] rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={vanImage}
                      alt={`${BUSINESS.name} mobile locksmith van offering full-service locksmith work across St. Louis County, MO`}
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
                        Full-Service Locksmith
                      </p>
                    </div>
                    <p className="text-[13px] sm:text-[14px] opacity-90 normal-case leading-snug">
                      Residential, automotive, and commercial work handled by one family-owned crew.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* SERVICES GRID — grouped by category */}
        <section id="all-services" className="section-ref bg-white scroll-mt-20" aria-labelledby="services-grid-heading">
          <div className="container-ref">
            <div className="text-center mb-12 sm:mb-14">
              <p className="text-primary-600 text-[14px] sm:text-[16px] font-semibold tracking-wide normal-case mb-3">
                Browse By Type
              </p>
              <h2 id="services-grid-heading" className="text-[#17171A] max-w-4xl mx-auto px-2">
                All The Locksmith Services We Offer
              </h2>
              <p className="mt-4 text-[16px] sm:text-[18px] lg:text-[19px] text-gray-700 max-w-2xl mx-auto leading-relaxed px-4 font-medium">
                Tap any service for details, what's included, and customer reviews specific to that job.
              </p>
            </div>

            <div className="space-y-14 sm:space-y-16 max-w-6xl mx-auto">
              {groups.map((group) => (
                <div key={group.label}>
                  <div className="mb-7 sm:mb-8 max-w-3xl">
                    <h3 className="!text-[22px] sm:!text-[26px] !font-bold text-[#17171A] mb-2 normal-case">
                      {group.label}
                    </h3>
                    <p className="text-[15px] sm:text-[16px] text-gray-700 leading-[1.6] normal-case">
                      {group.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                    {group.slugs.map((slug) => {
                      const service = serviceMap.get(slug);
                      if (!service) return null;
                      const Icon = iconBySlug[slug] ?? Key;
                      return (
                        <Link
                          key={slug}
                          to={`/services/${slug}`}
                          aria-label={`Learn about ${service.name}`}
                          className="group bg-white rounded-2xl p-5 sm:p-6 border border-gray-200 shadow-sm hover:shadow-md hover:border-primary-300 transition-all duration-300 flex flex-col"
                        >
                          <div className="flex items-center gap-3 mb-3">
                            <span className="w-11 h-11 rounded-full bg-primary-50 group-hover:bg-primary-500 flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                              <Icon
                                className="w-5 h-5 text-primary-600 group-hover:text-white transition-colors duration-300"
                                strokeWidth={2.5}
                              />
                            </span>
                            <h4 className="!text-[17px] sm:!text-[18px] !font-bold text-[#17171A] group-hover:text-primary-600 transition-colors leading-tight normal-case">
                              {service.name}
                            </h4>
                          </div>
                          <p className="text-[14px] text-gray-600 leading-[1.55] mt-1 normal-case flex-1">
                            {service.shortDescription}
                          </p>
                          <span className="inline-flex items-center text-primary-600 font-bold text-[14px] mt-4 group-hover:gap-2 transition-all gap-1 normal-case">
                            Learn more
                            <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                            </svg>
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW WE ARE DIFFERENT — universal */}
        <HowWeAreDifferent />

        {/* SERVICE AREAS — chip grid linking to city pages */}
        <section className="section-ref bg-[#F5F5F5]" aria-labelledby="services-areas-heading">
          <div className="container-ref">
            <div className="text-center mb-10 sm:mb-12">
              <p className="text-primary-600 text-[14px] sm:text-[16px] font-semibold tracking-wide normal-case mb-3">
                Where We Work
              </p>
              <h2 id="services-areas-heading" className="text-[#17171A] max-w-4xl mx-auto px-2">
                Every Service, In Every City We Serve
              </h2>
              <p className="mt-4 text-[16px] sm:text-[18px] text-gray-700 max-w-2xl mx-auto leading-relaxed px-4 font-medium">
                Tap your city for local response times, pricing, and reviews from real customers near you.
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="flex flex-wrap justify-center gap-2 sm:gap-2.5">
                {cityData.map((city) => (
                  <Link
                    key={city.slug}
                    to={`/locksmith/${city.slug}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-white border border-gray-200 hover:border-primary-400 hover:bg-primary-50 rounded-full text-[14px] sm:text-[15px] font-medium text-[#17171A] hover:text-primary-700 shadow-sm hover:shadow-md transition-all group"
                    aria-label={`Locksmith services in ${city.name}, MO`}
                  >
                    <MapPin className="w-3.5 h-3.5 text-primary-500 group-hover:text-primary-600 transition-colors" strokeWidth={2.5} aria-hidden="true" />
                    {city.name}
                  </Link>
                ))}
              </div>

              <div className="text-center mt-8 sm:mt-10">
                <Link
                  to="/service-areas"
                  className="inline-flex items-center gap-1 text-primary-600 hover:text-primary-700 font-semibold text-[15px] sm:text-base underline underline-offset-4 transition-colors"
                >
                  View all service areas
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ — services-specific */}
        <ServicesFAQSection />

        {/* GUARANTEE — universal */}
        <Guarantee />

        {/* CONTACT — universal */}
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
