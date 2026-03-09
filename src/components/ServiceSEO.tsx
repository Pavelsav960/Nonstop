import { Helmet } from 'react-helmet-async';
import type { ServiceData } from '../data/serviceData';
import { BUSINESS } from '../constants';

interface ServiceSEOProps {
  service: ServiceData;
}

export default function ServiceSEO({ service }: ServiceSEOProps) {
  const canonicalUrl = `${BUSINESS.url}/services/${service.slug}`;
  const logoUrl = BUSINESS.logo;

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.name,
    name: `${service.name} in ${BUSINESS.city}, ${BUSINESS.state}`,
    description: service.shortDescription,
    url: canonicalUrl,
    provider: {
      '@type': 'LocalBusiness',
      additionalType: 'Locksmith',
      name: BUSINESS.legalName,
      image: logoUrl,
      telephone: BUSINESS.phoneRaw,
      email: BUSINESS.email,
      sameAs: [BUSINESS.gbpUrl],
      priceRange: BUSINESS.priceRange,
      address: {
        '@type': 'PostalAddress',
        addressLocality: BUSINESS.city,
        addressRegion: BUSINESS.state,
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
        ratingValue: BUSINESS.ratingValue,
        reviewCount: BUSINESS.reviewCount,
        bestRating: '5',
        worstRating: '1',
      },
    },
    areaServed: {
      '@type': 'City',
      name: BUSINESS.city,
      containedInPlace: {
        '@type': 'State',
        name: BUSINESS.stateFullName,
      },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: BUSINESS.ratingValue,
      reviewCount: BUSINESS.reviewCount,
      bestRating: '5',
      worstRating: '1',
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
        item: BUSINESS.url,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Services',
        item: `${BUSINESS.url}/services`,
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
      <meta name="author" content={BUSINESS.legalName} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />

      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:title" content={service.metaTitle} />
      <meta property="og:description" content={service.metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={logoUrl} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content={BUSINESS.legalName} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={service.metaTitle} />
      <meta name="twitter:description" content={service.metaDescription} />
      <meta name="twitter:image" content={logoUrl} />

      <meta name="geo.region" content="US-MO" />
      <meta name="geo.placename" content={BUSINESS.city} />

      <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
    </Helmet>
  );
}
