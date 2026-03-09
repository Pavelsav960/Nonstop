import { Helmet } from 'react-helmet-async';
import { BUSINESS } from '../constants';

export default function HomeSEO() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Do you provide 24/7 emergency locksmith services in St. Louis?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Yes! We offer 24/7 emergency locksmith services throughout St. Louis and surrounding areas. Whether you're locked out at 3am in Clayton or need emergency service in Chesterfield on a Sunday, we're available around the clock with an average 30-minute response time.",
        },
      },
      {
        '@type': 'Question',
        name: 'What areas of St. Louis do you serve?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "We serve all of St. Louis and the surrounding metro area, including Clayton, University City, Webster Groves, Kirkwood, Chesterfield, Ballwin, Florissant, Creve Coeur, and more. If you're in the greater St. Louis area, we can help!",
        },
      },
      {
        '@type': 'Question',
        name: 'How much does a locksmith cost in St. Louis?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Pricing varies based on the service needed. We offer competitive rates with transparent pricing - no hidden fees. Emergency lockouts typically start around $75-$150, while lock rekeying and installation vary by complexity. Call ${BUSINESS.phone} for a free quote specific to your needs.`,
        },
      },
      {
        '@type': 'Question',
        name: 'Are you licensed and insured in Missouri?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely! We are fully licensed and insured to operate in St. Louis and throughout Missouri. Our technicians are certified professionals with years of experience providing quality locksmith services.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you make new car keys in St. Louis?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! We provide mobile automotive locksmith services throughout St. Louis. We can cut and program new car keys, key fobs, and transponder keys for most vehicle makes and models right at your location.',
        },
      },
      {
        '@type': 'Question',
        name: 'How quickly can you respond to a lockout in St. Louis?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our average response time in the St. Louis metro area is 30 minutes or less. We prioritize emergency lockout situations and have mobile units strategically positioned throughout Clayton, Chesterfield, University City, and other St. Louis neighborhoods for rapid response.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you rekey locks for new homeowners in St. Louis?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Yes, we highly recommend rekeying your locks when moving into a new home in St. Louis. This ensures you're the only one with keys to your property. We can rekey all your locks to work with a single key for added convenience.",
        },
      },
      {
        '@type': 'Question',
        name: 'What types of locks can you install for St. Louis businesses?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "We install a wide range of commercial locks for St. Louis businesses, including high-security locks, electronic access control systems, panic bars, master key systems, and more. We work with businesses throughout downtown St. Louis, Clayton's business district, and all commercial areas.",
        },
      },
    ],
  };

  return (
    <Helmet>
      <title>24/7 Emergency Locksmith St. Louis | {BUSINESS.legalName} | Fast Service</title>
      <meta name="description" content={`24/7 emergency locksmith services in ${BUSINESS.city}, ${BUSINESS.state}. Fast response for lockouts, key replacement, lock rekeying & more. Residential, commercial & automotive. Call ${BUSINESS.phone} now!`} />
      <meta name="author" content={BUSINESS.legalName} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />

      <link rel="canonical" href={BUSINESS.url} />

      <meta property="og:title" content={`24/7 Emergency Locksmith ${BUSINESS.city} | ${BUSINESS.name} | ${BUSINESS.phone}`} />
      <meta property="og:description" content={`Fast, reliable 24/7 locksmith services in ${BUSINESS.city}. Emergency lockouts, key services, and lock repairs. Call ${BUSINESS.phone}`} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={BUSINESS.url} />
      <meta property="og:image" content={BUSINESS.logo} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content={BUSINESS.legalName} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`24/7 Emergency Locksmith ${BUSINESS.city} | ${BUSINESS.name}`} />
      <meta name="twitter:description" content={`Fast, reliable 24/7 locksmith services in ${BUSINESS.city}. Call ${BUSINESS.phone}`} />
      <meta name="twitter:image" content={BUSINESS.logo} />

      <meta name="geo.region" content={BUSINESS.region} />
      <meta name="geo.placename" content={BUSINESS.city} />
      <meta name="geo.position" content={`${BUSINESS.lat};${BUSINESS.lng}`} />
      <meta name="ICBM" content={`${BUSINESS.lat}, ${BUSINESS.lng}`} />

      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
    </Helmet>
  );
}
