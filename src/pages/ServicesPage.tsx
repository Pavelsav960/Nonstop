import { Link } from 'react-router';
import { Helmet } from 'react-helmet-async';
import { serviceData, servicesByCategory } from '../data/serviceData';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const categoryOrder = ['Emergency', 'Automotive', 'Residential', 'General'];
const categoryDescriptions: Record<string, string> = {
  Emergency: 'Urgent lock and key situations that need immediate attention, any time of day or night.',
  Automotive: 'Car keys, lockouts, ignition repair, and key fob services for all vehicle makes and models.',
  Residential: 'Home lock installation, rekeying, smart locks, and lockout services to protect your family.',
  General: 'Specialized locksmith services for common lock and key problems.',
};

export default function ServicesPage() {
  const logoUrl = 'https://nonstoplockandkey.com/nonstop-lock-and-key-st-louis-locksmith-logo-no-bg-final-cut.png';

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
        name: 'Services',
        item: 'https://nonstoplockandkey.com/services',
      },
    ],
  };

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Locksmith Services in St. Louis',
    itemListElement: serviceData.map((service, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: service.name,
      url: `https://nonstoplockandkey.com/services/${service.slug}`,
    })),
  };

  return (
    <div className="min-h-screen animate-fade-in">
      <Helmet>
        <title>Locksmith Services in St. Louis, MO | Nonstop Lock & Key</title>
        <meta name="description" content="Professional locksmith services in St. Louis, MO. Car lockouts, house lockouts, lock rekeying, car key replacement, smart lock installation, and 24/7 emergency service. Call (314) 532-1112." />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" href="https://nonstoplockandkey.com/services" />
        <meta property="og:title" content="Locksmith Services in St. Louis, MO | Nonstop Lock & Key" />
        <meta property="og:description" content="Professional locksmith services in St. Louis, MO. Car lockouts, house lockouts, lock rekeying, car key replacement, smart lock installation, and 24/7 emergency service." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nonstoplockandkey.com/services" />
        <meta property="og:image" content={logoUrl} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Nonstop Lock & Key Co." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Locksmith Services in St. Louis, MO | Nonstop Lock & Key" />
        <meta name="twitter:description" content="Professional locksmith services in St. Louis, MO. Car lockouts, house lockouts, lock rekeying, car key replacement, smart lock installation, and 24/7 emergency service." />
        <meta name="twitter:image" content={logoUrl} />
        <meta name="geo.region" content="US-MO" />
        <meta name="geo.placename" content="St. Louis" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(itemListSchema)}</script>
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
              <span className="font-medium text-gray-900">Services</span>
            </li>
          </ol>
        </div>
      </nav>

      <main>
        <header className="pt-8 pb-16 sm:pt-12 sm:pb-24 bg-gradient-to-br from-primary-600 to-primary-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Locksmith Services in St. Louis, MO
            </h1>
            <p className="text-xl sm:text-2xl text-primary-100 max-w-3xl mx-auto mb-8">
              Professional residential, commercial, and automotive locksmith solutions available 24/7
            </p>
            <a
              href="tel:+13145321112"
              className="inline-block px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg text-lg"
            >
              Call Now: (314) 532-1112
            </a>
          </div>
        </header>

        {categoryOrder.map((category) => {
          const services = servicesByCategory[category];
          if (!services) return null;
          return (
            <section key={category} className="py-16 sm:py-20 even:bg-gray-50 odd:bg-white" aria-labelledby={`category-${category.toLowerCase()}`}>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-10">
                  <h2 id={`category-${category.toLowerCase()}`} className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                    {category} Services
                  </h2>
                  <p className="text-gray-600 text-lg">
                    {categoryDescriptions[category]}
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      to={`/services/${service.slug}`}
                      className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-1 group"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-medium text-primary-600 uppercase tracking-wide bg-primary-50 px-3 py-1 rounded-full">
                          {service.category}
                        </span>
                        <span className="text-sm font-bold text-gray-900">
                          From {service.startingPrice}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {service.shortDescription}
                      </p>
                      <span className="inline-flex items-center text-primary-600 font-medium text-sm group-hover:gap-2 transition-all gap-1">
                        Learn More
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          );
        })}

        <section className="py-16 sm:py-24 bg-white" aria-labelledby="services-cta-heading">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-8 sm:p-12 text-center text-white shadow-2xl">
              <h2 id="services-cta-heading" className="text-3xl sm:text-4xl font-bold mb-4">
                Not Sure Which Service You Need?
              </h2>
              <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
                Call us and describe your situation. Our team will recommend the right service and provide an upfront price before sending a locksmith.
              </p>
              <a
                href="tel:+13145321112"
                className="inline-block px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg text-lg"
              >
                Call (314) 532-1112
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
