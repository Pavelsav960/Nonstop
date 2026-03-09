import { Helmet } from 'react-helmet-async';
import type { ServiceData } from '../data/serviceData';

interface ServiceSEOProps {
  service: ServiceData;
}

export default function ServiceSEO({ service }: ServiceSEOProps) {
  const canonicalUrl = `https://nonstoplockandkey.com/services/${service.slug}`;
  const logoUrl = 'https://nonstoplockandkey.com/nonstop-lock-and-key-st-louis-locksmith-logo-no-bg-final-cut.png';

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.name,
    name: `${service.name} in St. Louis, MO`,
    description: service.shortDescription,
    url: canonicalUrl,
    provider: {
      '@type': 'LocalBusiness',
      additionalType: 'Locksmith',
      name: 'Nonstop Lock & Key Co.',
      image: logoUrl,
      telephone: '+13145321112',
      email: 'Nonstoplockandkeyco@gmail.com',
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'St. Louis',
        addressRegion: 'MO',
        addressCountry: 'US',
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '100',
        bestRating: '5',
        worstRating: '1',
      },
    },
    areaServed: {
      '@type': 'City',
      name: 'St. Louis',
      containedInPlace: {
        '@type': 'State',
        name: 'Missouri',
      },
    },
    offers: {
      '@type': 'Offer',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: service.startingPrice.replace('$', '').replace('/lock', '').replace('/Lock', ''),
        priceCurrency: 'USD',
        unitText: 'per service',
      },
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

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
      {
        '@type': 'ListItem',
        position: 3,
        name: service.name,
        item: canonicalUrl,
      },
    ],
  };

  return (
    <Helmet>
      <title>{service.metaTitle}</title>
      <meta name="description" content={service.metaDescription} />
      <meta name="keywords" content={`${service.name.toLowerCase()} st louis, ${service.slug.replace(/-/g, ' ')} st louis mo, ${service.category.toLowerCase()} locksmith st louis, locksmith ${service.name.toLowerCase()}, ${service.name.toLowerCase()} near me`} />
      <meta name="author" content="Nonstop Lock & Key Co." />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />

      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:title" content={service.metaTitle} />
      <meta property="og:description" content={service.metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={logoUrl} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="Nonstop Lock & Key Co." />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={service.metaTitle} />
      <meta name="twitter:description" content={service.metaDescription} />
      <meta name="twitter:image" content={logoUrl} />

      <meta name="geo.region" content="US-MO" />
      <meta name="geo.placename" content="St. Louis" />

      <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
    </Helmet>
  );
}
