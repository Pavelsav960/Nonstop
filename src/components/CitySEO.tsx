import { Helmet } from 'react-helmet-async';
import type { CityData } from '../data/cityData';

interface CitySEOProps {
  city: CityData;
}

export default function CitySEO({ city }: CitySEOProps) {
  const canonicalUrl = `https://nonstoplockandkey.com/locksmith/${city.slug}`;
  const logoUrl = 'https://nonstoplockandkey.com/nonstop-lock-and-key-st-louis-locksmith-logo-no-bg-final-cut.png';

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    additionalType: 'Locksmith',
    name: 'Nonstop Lock & Key Co.',
    image: logoUrl,
    '@id': `${canonicalUrl}#business`,
    url: canonicalUrl,
    telephone: '+13145321112',
    priceRange: '$$',
    email: 'Nonstoplockandkeyco@gmail.com',
    paymentAccepted: 'Cash, Credit Card, Debit Card',
    currenciesAccepted: 'USD',
    knowsLanguage: 'English',
    address: {
      '@type': 'PostalAddress',
      addressLocality: city.name,
      addressRegion: 'MO',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: city.lat,
      longitude: city.lng,
    },
    areaServed: {
      '@type': 'City',
      name: city.name,
      containedInPlace: {
        '@type': 'State',
        name: 'Missouri',
      },
    },
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: city.lat,
        longitude: city.lng,
      },
      geoRadius: '15000',
    },
    hasMap: `https://www.google.com/maps?q=${city.lat},${city.lng}`,
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
    description: city.description,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '100',
      bestRating: '5',
      worstRating: '1',
    },
    review: city.reviews.map((review) => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: review.name,
      },
      datePublished: review.date,
      reviewBody: review.text,
      reviewRating: {
        '@type': 'Rating',
        ratingValue: review.rating.toString(),
        bestRating: '5',
        worstRating: '1',
      },
    })),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `Locksmith Services in ${city.name}`,
      itemListElement: city.pricing.map((item) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          serviceType: item.service,
          name: `${item.service} in ${city.name}, MO`,
          description: item.description,
          provider: { '@type': 'LocalBusiness', name: 'Nonstop Lock & Key Co.' },
          areaServed: { '@type': 'City', name: city.name },
        },
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: item.startingPrice.replace('$', '').replace('/lock', ''),
          priceCurrency: 'USD',
          unitText: item.startingPrice.includes('/lock') ? 'per lock' : 'per service',
        },
      })),
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: city.faqs.map((faq) => ({
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
        name: 'Service Areas',
        item: 'https://nonstoplockandkey.com/service-areas',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: `Locksmith ${city.name}`,
        item: canonicalUrl,
      },
    ],
  };

  return (
    <Helmet>
      <title>{city.metaTitle}</title>
      <meta name="description" content={city.metaDescription} />
      <meta name="keywords" content={`locksmith ${city.name}, emergency locksmith ${city.name}, 24/7 locksmith ${city.name} MO, car lockout ${city.name}, house lockout ${city.name}, lock rekey ${city.name}, locksmith near me ${city.name}`} />
      <meta name="author" content="Nonstop Lock & Key Co." />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />

      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:title" content={city.metaTitle} />
      <meta property="og:description" content={city.metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={logoUrl} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="Nonstop Lock & Key Co." />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={city.metaTitle} />
      <meta name="twitter:description" content={city.metaDescription} />
      <meta name="twitter:image" content={logoUrl} />

      <meta name="geo.region" content="US-MO" />
      <meta name="geo.placename" content={city.name} />
      <meta name="geo.position" content={`${city.lat};${city.lng}`} />
      <meta name="ICBM" content={`${city.lat}, ${city.lng}`} />

      <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
    </Helmet>
  );
}
