import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router';
import { Phone, ChevronLeft, ChevronRight } from 'lucide-react';
import { BUSINESS } from '../../constants';
import VerifiedBadge from '../VerifiedBadge';

type AreaReview = {
  name: string;
  rating: number;
  date: string;
  displayDate: string;
  text: string;
  serviceName: string;
  serviceSlug: string;
  cityName: string;
  citySlug: string;
  photo?: string;
  avatarColor?: string;
};

const reviews: AreaReview[] = [
  {
    name: 'Andrea L.',
    rating: 5,
    date: '2026-03-12',
    displayDate: '12 March 2026',
    text: "Locked my keys in the car at a meeting in Clayton. Called and Alex was there fast despite traffic on Forsyth. Opened the door no problem, charged exactly what was quoted on the phone. Even walked me to a coffee shop while I waited for my husband. Class act all around.",
    serviceName: 'Car Lockout',
    serviceSlug: 'car-lockout',
    cityName: 'Clayton',
    citySlug: 'clayton',
    photo: 'https://randomuser.me/api/portraits/women/45.jpg',
  },
  {
    name: 'James W.',
    rating: 5,
    date: '2024-08-15',
    displayDate: '15 August 2024',
    text: "Locked out of my house in Chesterfield. Alex out fast. Thanks man.",
    serviceName: 'House Lockout',
    serviceSlug: 'house-lockout',
    cityName: 'Chesterfield',
    citySlug: 'chesterfield',
    avatarColor: 'bg-[#1A73E8]',
  },
  {
    name: 'Maria T.',
    rating: 5,
    date: '2024-11-04',
    displayDate: '4 November 2024',
    text: "Closed on a fixer-upper in Webster Groves and wanted everything rekeyed before moving in. Alex did 4 doors in about an hour. Up-front pricing, clean work, no surprises. Will use again.",
    serviceName: 'Lock Rekey',
    serviceSlug: 'lock-rekey',
    cityName: 'Webster Groves',
    citySlug: 'webster-groves',
    photo: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
  {
    name: 'Brandon K.',
    rating: 5,
    date: '2025-09-22',
    displayDate: '22 September 2025',
    text: "Lost my Honda key while running errands in Ballwin. Dealership was closed for the weekend and the quote i got later for Monday was wild. Nonstop came to my driveway, alex cut and programmed a new transponder right there, and i was back on the road in under an hour. Saved a huge chunk compared to the dealer and didn't have to wait two days. Highly recommend if you're in west county.",
    serviceName: 'Car Key Replacement',
    serviceSlug: 'car-key-replacement',
    cityName: 'Ballwin',
    citySlug: 'ballwin',
    photo: 'https://randomuser.me/api/portraits/men/41.jpg',
  },
  {
    name: 'Jasmine R.',
    rating: 5,
    date: '2026-02-18',
    displayDate: '18 February 2026',
    text: "Locked out of my apartment in U City after walking my dog without grabbing my keys (rookie move). The dispatcher was patient on the phone walking me through what to expect. Alex showed up in a marked van and a polo with the company name, which honestly made me feel a lot safer letting him work on the lock at night. Got the door open without any damage and didn't try to upsell me on anything. Family-owned service you can actually trust.",
    serviceName: 'House Lockout',
    serviceSlug: 'house-lockout',
    cityName: 'University City',
    citySlug: 'university-city',
    avatarColor: 'bg-[#D93025]',
  },
  {
    name: 'Edward H.',
    rating: 5,
    date: '2025-11-30',
    displayDate: '30 November 2025',
    text: "Our office in Saint Charles had a manager change and we needed everything rekeyed plus a smart lock added to the back entrance. Alex came out, walked us through the smart lock options without pushing the most expensive one, did the install cleanly, and rekeyed 5 other doors in one visit. We use them for everything now.",
    serviceName: 'Commercial Lockout',
    serviceSlug: 'commercial-lockout',
    cityName: 'Saint Charles',
    citySlug: 'saint-charles',
    photo: 'https://randomuser.me/api/portraits/men/55.jpg',
  },
  {
    name: 'Tania M.',
    rating: 5,
    date: '2026-04-08',
    displayDate: '8 April 2026',
    text: "My house key snapped clean off in the deadbolt at our place in Kirkwood late at night. Was freaking out because the kids were already in bed. Alex sent fast, extracted the broken piece without damaging anything, and confirmed the lock was still good. Calm and competent the whole way through.",
    serviceName: 'Broken Key Extraction',
    serviceSlug: 'broken-key-extraction',
    cityName: 'Kirkwood',
    citySlug: 'kirkwood',
    photo: 'https://randomuser.me/api/portraits/women/19.jpg',
  },
  {
    name: 'Greg D.',
    rating: 5,
    date: '2024-07-19',
    displayDate: '19 July 2024',
    text: "Needed a spare fob programmed for my Toyota at our place in Maryland Heights. Alex came to the house, did it in about 20 min, half what the dealer quoted. Easy.",
    serviceName: 'Key Fob Programming',
    serviceSlug: 'key-fob-programming',
    cityName: 'Maryland Heights',
    citySlug: 'maryland-heights',
    avatarColor: 'bg-[#188038]',
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

const READ_MORE_THRESHOLD = 220;

export default function ServiceAreasReviewsSection() {
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

  const ldJson = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${BUSINESS.url}#localbusiness`,
    name: BUSINESS.name,
    review: reviews.map((r) => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: r.name },
      reviewRating: { '@type': 'Rating', ratingValue: r.rating.toString(), bestRating: '5', worstRating: '1' },
      reviewBody: r.text,
      datePublished: r.date,
      itemReviewed: {
        '@type': 'LocalBusiness',
        '@id': `${BUSINESS.url}#localbusiness`,
        name: BUSINESS.name,
      },
    })),
  };

  return (
    <section className="section-ref bg-[#F5F5F5] overflow-hidden" aria-labelledby="areas-reviews-heading">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }} />
      <div className="container-ref">
        <div className="text-center mb-12 sm:mb-14">
          <p className="text-primary-600 text-[14px] sm:text-[16px] font-semibold tracking-wide normal-case mb-3">
            Customer Reviews
          </p>
          <h2 id="areas-reviews-heading" className="text-[#17171A] max-w-4xl mx-auto px-2">
            What Customers Across St. Louis County Are Saying
          </h2>
          <p className="mt-4 text-[16px] sm:text-[18px] lg:text-[19px] text-gray-700 max-w-2xl mx-auto leading-relaxed px-4 font-medium">
            Real reviews from neighbors in the same cities we serve every day.
          </p>
        </div>

        <div className="relative">
          <button
            type="button"
            onClick={() => handleArrowClick('left')}
            aria-label="Previous reviews"
            className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 md:-translate-x-5 z-20 w-12 h-12 rounded-full bg-white shadow-lg border border-gray-200 items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>

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
            {reviews.map((review, index) => {
              const isExpanded = expandedIndex === index;
              const needsToggle = review.text.length > READ_MORE_THRESHOLD;
              return (
              <article
                key={index}
                className="relative bg-white rounded-2xl p-5 sm:p-6 border border-primary-300 shadow-sm hover:shadow-md hover:border-primary-500 transition-all duration-300 flex flex-col flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] min-h-[360px] snap-center sm:snap-start"
              >
                <GoogleG className="absolute top-4 right-4 w-6 h-6" />
                <div className="flex items-start gap-3 pr-8">
                  {review.photo ? (
                    <img src={review.photo} alt={review.name} loading="lazy" width={48} height={48}
                      className="w-12 h-12 rounded-full object-cover flex-shrink-0" />
                  ) : (
                    <div className={`w-12 h-12 rounded-full ${review.avatarColor ?? 'bg-[#1A73E8]'} flex items-center justify-center text-white font-medium text-lg flex-shrink-0`}>
                      {review.name[0].toUpperCase()}
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1 min-w-0">
                      <h3 className="text-[17px] sm:text-[18px] font-semibold text-[#202124] truncate normal-case leading-tight">
                        {review.name}
                      </h3>
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

                <p
                  className="text-[14px] text-[#202124] leading-[1.55] mt-4 normal-case whitespace-pre-line"
                  style={
                    !isExpanded && needsToggle
                      ? { display: '-webkit-box', WebkitLineClamp: 6, WebkitBoxOrient: 'vertical', overflow: 'hidden' }
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

                <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-100">
                  <Link
                    to={`/services/${review.serviceSlug}`}
                    className="inline-flex items-center px-3 py-1 bg-primary-50 hover:bg-primary-100 text-primary-700 hover:text-primary-800 text-[12px] font-semibold rounded-full transition-colors normal-case"
                    aria-label={`View ${review.serviceName} service`}
                  >
                    {review.serviceName}
                  </Link>
                  <Link
                    to={`/locksmith/${review.citySlug}`}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-gray-900 text-[12px] font-semibold rounded-full transition-colors normal-case"
                    aria-label={`View locksmith services in ${review.cityName}`}
                  >
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    {review.cityName}
                  </Link>
                </div>
              </article>
              );
            })}
          </div>

          <div className="flex items-center justify-center gap-2 mt-6 sm:mt-8" role="tablist" aria-label="Review pagination">
            {reviews.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={activeIndex === i}
                aria-label={`Go to review ${i + 1}`}
                onClick={() => scrollToIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === i ? 'w-6 bg-primary-500' : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="mt-12 sm:mt-14 text-center max-w-2xl mx-auto">
          <h3 className="text-[#17171A] text-[20px] sm:text-[24px] lg:text-[28px] leading-[1.3] px-2">
            Locksmith In Your City?<br className="hidden sm:block" /> Call Now For A Free Service Estimate.
          </h3>
          <a
            href={BUSINESS.phoneTel}
            className="mt-6 sm:mt-7 inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-[15px] sm:text-base py-3.5 px-6 rounded-lg shadow-sm hover:shadow-md transition-all"
            aria-label={`Call ${BUSINESS.name} at ${BUSINESS.phone}`}
          >
            <Phone className="h-4 w-4 flex-shrink-0" />
            <span>Call Now: {BUSINESS.phone}</span>
          </a>
          <p className="mt-4">
            <Link to="/reviews" className="text-gray-600 hover:text-primary-600 font-medium text-[14px] underline underline-offset-4 transition-colors">
              Read all reviews
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
