import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router';
import { ChevronLeft, ChevronRight, Phone } from 'lucide-react';
import { BUSINESS } from '../constants';
import VerifiedBadge from './VerifiedBadge';

export type Review = {
  name: string;
  photo: string | null;
  avatarColor?: string;
  location: string;
  rating: number;
  date: string;
  displayDate: string;
  service: string;
  text: string;
};

export const homepageReviews: Review[] = [
  {
    name: 'Tony R.',
    photo: 'https://randomuser.me/api/portraits/men/41.jpg',
    location: 'Clayton, MO',
    rating: 5,
    date: '2026-04-22',
    displayDate: '22 April 2026',
    service: 'Key Fob Programming',
    text: "My key fob for my Chevy Tahoe broke in multiple places until my truck wouldn't start at the office. Alex came the same day I called and had a new fob cut and reprogrammed in less than an hour. Would definitely call them again.",
  },
  {
    name: 'Marlee D.',
    photo: 'https://randomuser.me/api/portraits/women/28.jpg',
    location: 'Webster Groves, MO',
    rating: 5,
    date: '2026-03-30',
    displayDate: '30 March 2026',
    service: 'Key Fob Programming',
    text: "I needed a duplicate key fob for my Honda and on top of that my battery was dead in the driveway. Alex responded within minutes and not only made me a duplicate fob, he also gave my car a jump so I could actually leave. It was so appreciated! He did a wonderful job, thank you so much!",
  },
  {
    name: 'Kelly S.',
    photo: null,
    avatarColor: 'bg-[#D93025]',
    location: 'St. Louis, MO',
    rating: 5,
    date: '2026-02-15',
    displayDate: '15 February 2026',
    service: 'Car Key Replacement',
    text: "Lost the keys to my Honda Pilot near Forest Park. Called Nonstop Lock & Key and they sent a tech out in less than 20 minutes. Service was honest and transparent. Price was one of the lowest in the area. Really grateful.",
  },
  {
    name: 'Sophia L.',
    photo: 'https://randomuser.me/api/portraits/women/65.jpg',
    location: 'University City, MO',
    rating: 5,
    date: '2025-11-08',
    displayDate: '8 November 2025',
    service: 'Key Fob Programming',
    text: "i have a 2014 ford mustang and i accidentally enabled the mykey parental setting at a stoplight one day. the ford dealership quoted me $650 for a new programmed key, when i found out the price i was very nervous because i'm a college student in U City paying for all my own stuff. i started searching online and found nonstop. they were super fast, $220 for the new key with all the buttons. the tech (alex) was very kind and patient. highly recommend.",
  },
  {
    name: 'Cameron P.',
    photo: null,
    avatarColor: 'bg-[#1A73E8]',
    location: 'Ballwin, MO',
    rating: 5,
    date: '2024-09-15',
    displayDate: '15 September 2024',
    service: 'Car Key Replacement',
    text: "So quick to respond and help me with a new key for my F-150. Very pleasant to work with and quality work. Thanks again.",
  },
  {
    name: 'Derek J.',
    photo: 'https://randomuser.me/api/portraits/men/55.jpg',
    location: 'Saint Charles, MO',
    rating: 5,
    date: '2025-10-04',
    displayDate: '4 October 2025',
    service: 'Commercial Lockout',
    text: "Nonstop Lock & Key did outstanding work across all three of my rental properties. They replaced the locks, installed lockboxes at each unit, and provided new, clearly labeled key sets without any issues.\n\nWhat stood out most was their speed and efficiency. Everything was handled quickly, cleanly, and with zero back and forth. They understand how important timing is when managing rentals and they delivered exactly what they promised.\n\nIf you're a landlord or property manager looking for a reliable locksmith who gets things done right the first time, I highly recommend Nonstop Lock & Key. I'll absolutely be using them again.",
  },
  {
    name: 'Megan T.',
    photo: 'https://randomuser.me/api/portraits/women/53.jpg',
    location: 'Kirkwood, MO',
    rating: 5,
    date: '2026-01-20',
    displayDate: '20 January 2026',
    service: 'Lock Installation & Replacement',
    text: "I called about a broken deadbolt on my back door and within 20 minutes of calling, someone was at my house. Prompt and efficient service. They figured out what was wrong fast and had the equipment in the van to fix it that same visit. Very pleased and will call in the future.",
  },
  {
    name: 'Brett A.',
    photo: 'https://randomuser.me/api/portraits/men/72.jpg',
    location: 'Chesterfield, MO',
    rating: 5,
    date: '2026-03-15',
    displayDate: '15 March 2026',
    service: 'Ignition Repair',
    text: "My Tacoma handle was acting up and sometimes wouldn't open at all. Alex from Nonstop was the only one who would touch it and he fixed it. Made me a spare key and one for my wife's Honda too. Very grateful.",
  },
  {
    name: 'Anna K.',
    photo: null,
    avatarColor: 'bg-[#188038]',
    location: 'Maryland Heights, MO',
    rating: 5,
    date: '2025-12-08',
    displayDate: '8 December 2025',
    service: 'House Lockout',
    text: "Alex and his crew are top notch. I was actually locked inside my house with a busted deadbolt and he picked up when nobody else would on a Sunday morning. Was at my place in less than 30 minutes and got me out without damaging the door. Clean install on the new lock, professional and kind.",
  },
  {
    name: 'Hailey M.',
    photo: 'https://randomuser.me/api/portraits/women/19.jpg',
    location: 'Frontenac, MO',
    rating: 5,
    date: '2024-07-20',
    displayDate: '20 July 2024',
    service: 'Car Lockout',
    text: "This is the second time I've used Nonstop Lock & Key and both times I only waited about 20 minutes or less before being able to get back into my car. The service is wonderful. They won't have you sitting/waiting long at all. Definitely recommend.",
  },
  {
    name: 'Russ B.',
    photo: 'https://randomuser.me/api/portraits/men/32.jpg',
    location: 'Creve Coeur, MO',
    rating: 5,
    date: '2024-06-10',
    displayDate: '10 June 2024',
    service: 'Lock Rekey',
    text: "Closed on our new house and wanted everything rekeyed before we moved in. Alex came out the same day, did 6 exterior doors in under 90 minutes, and fixed a sticky strike plate on the back door at no extra charge. Honest pricing, exactly what was quoted.",
  },
  {
    name: 'Olivia C.',
    photo: 'https://randomuser.me/api/portraits/women/85.jpg',
    location: 'Brentwood, MO',
    rating: 5,
    date: '2026-04-04',
    displayDate: '4 April 2026',
    service: 'Car Key Replacement',
    text: "My only key fob for my Hyundai Elantra died in a packed Schnucks parking lot, groceries melting in the back. Alex showed up super fast, cut a new fob right there in the lot, and also gave me a jump because I'd killed the battery trying to start it over and over. Above and beyond, honestly.",
  },
];

const GoogleG = ({ className = 'w-6 h-6' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const BUSINESS_ID = `${BUSINESS.url}#localbusiness`;

const reviewsLdJson = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': BUSINESS_ID,
  name: BUSINESS.name,
  image: BUSINESS.logo,
  telephone: BUSINESS.phone,
  url: BUSINESS.url,
  priceRange: BUSINESS.priceRange,
  address: {
    '@type': 'PostalAddress',
    streetAddress: BUSINESS.streetAddress,
    addressLocality: BUSINESS.addressCity,
    addressRegion: BUSINESS.state,
    postalCode: BUSINESS.postalCode,
    addressCountry: 'US',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: BUSINESS.ratingValue,
    reviewCount: BUSINESS.reviewCount,
    bestRating: '5',
    worstRating: '1',
  },
  review: homepageReviews.map((r) => ({
    '@type': 'Review',
    author: {
      '@type': 'Person',
      name: r.name,
      address: {
        '@type': 'PostalAddress',
        addressLocality: r.location.split(',')[0].trim(),
        addressRegion: 'MO',
        addressCountry: 'US',
      },
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: r.rating.toString(),
      bestRating: '5',
      worstRating: '1',
    },
    reviewBody: r.text,
    datePublished: r.date,
    itemReviewed: {
      '@type': 'LocalBusiness',
      '@id': BUSINESS_ID,
      name: BUSINESS.name,
    },
  })),
};

const READ_MORE_THRESHOLD = 220; // chars; longer reviews get a Read more toggle

export default function Reviews() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const scrollCarousel = (direction: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.querySelector('article') as HTMLElement | null;
    if (!card) return;
    const amount = card.offsetWidth + 24;
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 10;
    const atStart = el.scrollLeft <= 10;

    if (direction === 'right' && atEnd) {
      el.scrollTo({ left: 0, behavior: 'smooth' });
    } else if (direction === 'left' && atStart) {
      el.scrollTo({ left: el.scrollWidth, behavior: 'smooth' });
    } else {
      el.scrollBy({ left: direction === 'left' ? -amount : amount, behavior: 'smooth' });
    }
  };

  const pauseAutoScroll = (resumeAfterMs = 8000) => {
    setIsPaused(true);
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => setIsPaused(false), resumeAfterMs);
  };

  const handleArrowClick = (direction: 'left' | 'right') => {
    scrollCarousel(direction);
    pauseAutoScroll();
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => scrollCarousel('right'), 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      const card = el.querySelector('article') as HTMLElement | null;
      if (!card) return;
      const cardW = card.offsetWidth + 24;
      const idx = Math.round(el.scrollLeft / cardW);
      setActiveIndex(idx);
    };
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToIndex = (i: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.querySelector('article') as HTMLElement | null;
    if (!card) return;
    const cardW = card.offsetWidth + 24;
    el.scrollTo({ left: cardW * i, behavior: 'smooth' });
    pauseAutoScroll();
  };

  const toggleExpanded = (index: number) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
    pauseAutoScroll();
  };

  return (
    <section id="reviews" className="section-ref bg-[#F5F5F5] overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsLdJson) }}
      />
      <div className="container-ref">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h3 className="text-primary-600 mb-3 !text-[22px] lg:!text-[24px] !font-medium">
            Testimonials
          </h3>
          <h2 className="text-[#17171A] max-w-4xl mx-auto text-[26px] sm:text-[34px] md:text-[44px] lg:text-[52px]">
            <span className="whitespace-nowrap">5-Star Rated In St. Louis</span>
            <br />
            Trusted By {BUSINESS.reviewCount}+ Happy Clients
          </h2>

          {/* Google Reviews link — explicit GBP cross-link */}
          <a
            href={BUSINESS.gbpUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 mt-6 sm:mt-7 px-5 py-2.5 bg-white border border-gray-200 hover:border-primary-300 rounded-full shadow-sm hover:shadow-md transition-all group"
            aria-label={`View Google reviews for ${BUSINESS.name}`}
          >
            <GoogleG className="w-5 h-5 flex-shrink-0" />
            <span className="text-[14px] sm:text-[15px] font-semibold text-[#17171A] normal-case">
              See Our Reviews on Google
            </span>
            <span className="inline-flex text-primary-600 font-bold text-[14px] sm:text-[15px] group-hover:translate-x-0.5 transition-transform" aria-hidden="true">
              →
            </span>
          </a>
        </div>

        {/* Review Cards carousel */}
        <div className="relative">
          {/* Left arrow (desktop only) */}
          <button
            type="button"
            onClick={() => handleArrowClick('left')}
            aria-label="Previous reviews"
            className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 md:-translate-x-5 z-20 w-12 h-12 rounded-full bg-white shadow-lg border border-gray-200 items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>

          {/* Right arrow (desktop only) */}
          <button
            type="button"
            onClick={() => handleArrowClick('right')}
            aria-label="Next reviews"
            className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 md:translate-x-5 z-20 w-12 h-12 rounded-full bg-white shadow-lg border border-gray-200 items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>

          <div
            ref={scrollRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => pauseAutoScroll()}
            className="flex items-start overflow-x-auto snap-x snap-mandatory gap-5 sm:gap-6 -mx-4 md:mx-0 px-4 md:px-0 pb-3 scroll-smooth no-scrollbar"
          >
            {homepageReviews.map((review, index) => {
              const isExpanded = expandedIndex === index;
              const needsToggle = review.text.length > READ_MORE_THRESHOLD;
              return (
              <article
                key={index}
                className="relative bg-white rounded-2xl p-5 sm:p-6 border border-primary-300 shadow-sm hover:shadow-md hover:border-primary-500 transition-all duration-300 flex flex-col flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] min-h-[300px] snap-center sm:snap-start"
              >
              {/* Google G — top right */}
              <GoogleG className="absolute top-4 right-4 w-6 h-6" />

              {/* Header: avatar + (name, stars, date stacked) */}
              <div className="flex items-start gap-3 pr-8">
                {review.photo ? (
                  <img
                    src={review.photo}
                    alt={review.name}
                    loading="lazy"
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                  />
                ) : (
                  <div className={`w-12 h-12 rounded-full ${review.avatarColor ?? 'bg-[#1A73E8]'} flex items-center justify-center text-white font-medium text-lg flex-shrink-0`}>
                    {review.name[0].toUpperCase()}
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1 min-w-0">
                    <h4 className="text-[17px] sm:text-[18px] font-semibold text-[#202124] truncate normal-case leading-tight">
                      {review.name}
                    </h4>
                    <VerifiedBadge className="w-4 h-4 flex-shrink-0" />
                  </div>
                  <div className="flex mt-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <svg key={i} className="w-[18px] h-[18px] text-[#FBBC04] fill-current" viewBox="0 0 20 20" aria-hidden="true">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <span className="block text-[13px] text-[#70757a] normal-case mt-0.5">{review.displayDate}</span>
                </div>
              </div>

              {/* Review body */}
              <p
                className="text-[14px] text-[#202124] leading-[1.55] mt-4 normal-case whitespace-pre-line"
                style={
                  !isExpanded && needsToggle
                    ? {
                        display: '-webkit-box',
                        WebkitLineClamp: 6,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      }
                    : undefined
                }
              >
                {review.text}
              </p>
              {needsToggle && (
                <button
                  type="button"
                  onClick={() => toggleExpanded(index)}
                  className="self-start mt-2 text-[13px] font-semibold text-primary-600 hover:text-primary-700 transition-colors normal-case"
                  aria-expanded={isExpanded}
                >
                  {isExpanded ? 'Read less' : 'Read more'}
                </button>
              )}
            </article>
            );
          })}
          </div>

          {/* Dot indicators */}
          <div className="flex items-center justify-center gap-2 mt-6 sm:mt-8" role="tablist" aria-label="Review pagination">
            {homepageReviews.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={activeIndex === i}
                aria-label={`Go to review ${i + 1}`}
                onClick={() => scrollToIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === i
                    ? 'w-6 bg-primary-500'
                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Inline CTA */}
        <div className="mt-12 sm:mt-16 text-center max-w-2xl mx-auto">
          <h3 className="text-[#17171A] text-[20px] sm:text-[24px] lg:text-[28px] leading-[1.3] px-2">
            Join The Happy Clients List.<br className="hidden sm:block" /> Call Now For A Free Service Estimate.
          </h3>
          <a
            href={BUSINESS.phoneTel}
            className="mt-6 sm:mt-7 inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-[15px] sm:text-base py-3.5 px-6 rounded-lg shadow-sm hover:shadow-md transition-all"
            aria-label={`Call ${BUSINESS.name} at ${BUSINESS.phone}`}
          >
            <Phone className="h-4 w-4 flex-shrink-0" />
            <span>Call Now: {BUSINESS.phone}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
