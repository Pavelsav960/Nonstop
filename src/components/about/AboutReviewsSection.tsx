import { useState } from 'react';
import { Link } from 'react-router';
import { Phone } from 'lucide-react';
import { BUSINESS } from '../../constants';
import VerifiedBadge from '../VerifiedBadge';

type AboutReview = {
  name: string;
  rating: number;
  date: string;
  displayDate: string;
  text: string;
  service: string;
  photo?: string;
  avatarColor?: string;
};

const reviews: AboutReview[] = [
  {
    name: 'Megan P.',
    rating: 5,
    date: '2026-03-20',
    displayDate: '20 March 2026',
    text: "We bought a townhouse last spring and the previous owner mentioned a former tenant might still have a key. I needed the locks changed that day and was nervous about being overcharged on an emergency call. Alex showed up within an hour, did 4 doors, and the price was almost exactly what other reviews on Google said it should be. No upsell, no upcharge for same-day, no nothing. The trust thing isn't a slogan with these guys, it's actually how they run their business.",
    service: 'Lock Rekey',
    photo: 'https://randomuser.me/api/portraits/women/41.jpg',
  },
  {
    name: 'Eddie R.',
    rating: 5,
    date: '2024-04-15',
    displayDate: '15 April 2024',
    text: "Forgot the keys in the car at soccer practice. Alex out in under 25 min. No drama, no extra fees.",
    service: 'Car Lockout',
    avatarColor: 'bg-[#D93025]',
  },
  {
    name: 'Maria L.',
    rating: 5,
    date: '2026-01-30',
    displayDate: '30 January 2026',
    text: "Had Alex install a Schlage Encode on our front door after our deadbolt started acting up. He helped us pick the model that worked best with our wifi setup and didn't try to upsell. Even synced it with our security system for free. My mom kept asking if we were related, that's how friendly the service was.",
    service: 'Smart Lock Installation',
    photo: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
  {
    name: 'Steven D.',
    rating: 5,
    date: '2024-08-22',
    displayDate: '22 August 2024',
    text: "My Camry ignition wouldn't turn. Alex fixed it in the parking lot in less than 30 min. Half the dealer quote. Solid.",
    service: 'Ignition Repair',
    avatarColor: 'bg-[#1A73E8]',
  },
  {
    name: 'Carla T.',
    rating: 5,
    date: '2026-02-15',
    displayDate: '15 February 2026',
    text: "My husband and I are both teachers and one Sunday I came home from a long walk and couldn't get my key to turn. We were juggling end-of-quarter grading and the last thing I needed was a lock problem. Nonstop answered immediately, alex was at the house in 20 minutes, opened it without damage, and showed us the deadbolt was just worn out. Charged for the visit only, gave us a price for a replacement we could schedule when we had time. Honest people running an honest business. We've called them twice since.",
    service: 'House Lockout',
    photo: 'https://randomuser.me/api/portraits/women/72.jpg',
  },
  {
    name: 'Owen K.',
    rating: 5,
    date: '2026-04-19',
    displayDate: '19 April 2026',
    text: "My house key snapped clean in the deadbolt at midnight after a flight. Alex picked up after one ring, talked me through the situation while he was loading the van, and was at my house in 25 minutes. Pulled the broken piece out, tested the lock, no damage. He could have sold me a new lock and I wouldn't have known better. He didn't.",
    service: 'Broken Key Extraction',
    photo: 'https://randomuser.me/api/portraits/men/41.jpg',
  },
  {
    name: 'Janelle B.',
    rating: 5,
    date: '2025-11-30',
    displayDate: '30 November 2025',
    text: "After a break-in on our street I wanted to upgrade all our exterior locks. Alex came out, walked through our options, didn't push the top tier. Installed four new deadbolts and reinforced the strike plates with longer screws (a tip i didn't even know about). Doors feel solid now. The neighborhood watch group asked who we used and we sent them all his way.",
    service: 'Lock Installation',
    avatarColor: 'bg-[#188038]',
  },
  {
    name: 'Russell M.',
    rating: 5,
    date: '2024-12-08',
    displayDate: '8 December 2024',
    text: "Rekey on our new house. Quick, fair, professional. Alex even labeled the keys for us.",
    service: 'Lock Rekey',
    photo: 'https://randomuser.me/api/portraits/men/55.jpg',
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

export default function AboutReviewsSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const toggleExpanded = (index: number) =>
    setExpandedIndex((prev) => (prev === index ? null : index));

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
    <section className="section-ref bg-[#F5F5F5]" aria-labelledby="about-reviews-heading">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }} />
      <div className="container-ref">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-14">
          <p className="text-primary-600 text-[14px] sm:text-[16px] font-semibold tracking-wide normal-case mb-3">
            Customer Reviews
          </p>
          <h2 id="about-reviews-heading" className="text-[#17171A] max-w-4xl mx-auto px-2">
            Trusted By {BUSINESS.reviewCount}+ Local Customers
          </h2>
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
            <span className="inline-flex text-primary-600 font-bold text-[14px] sm:text-[15px] group-hover:translate-x-0.5 transition-transform" aria-hidden="true">→</span>
          </a>
        </div>

        {/* Reviews grid — 2 columns on desktop, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 max-w-5xl mx-auto items-start">
          {reviews.map((review, index) => {
            const isExpanded = expandedIndex === index;
            const needsToggle = review.text.length > READ_MORE_THRESHOLD;
            return (
            <article
              key={index}
              className="relative bg-white rounded-2xl p-5 sm:p-6 border border-primary-300 shadow-sm hover:shadow-md hover:border-primary-500 transition-all duration-300 flex flex-col min-h-[300px]"
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
            </article>
            );
          })}
        </div>

        {/* Inline CTA below grid */}
        <div className="mt-12 sm:mt-14 text-center max-w-2xl mx-auto">
          <h3 className="text-[#17171A] text-[20px] sm:text-[24px] lg:text-[28px] leading-[1.3] px-2">
            Ready To Join Our Happy Customers?<br className="hidden sm:block" /> Call Now For A Free Service Estimate.
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
              Read all reviews →
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
