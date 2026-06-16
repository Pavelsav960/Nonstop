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
    name: 'Tony D.',
    rating: 5,
    date: '2025-09-12',
    displayDate: '12 September 2025',
    text: 'Locked my keys in the car at the worst possible time — driving my daughter to her dance recital. Called Nonstop in a panic and they had a tech to us in 22 minutes flat. Got the door open without a scratch, and we made it with 10 minutes to spare. Cannot thank them enough.',
    service: 'Car Lockout',
    photo: 'https://randomuser.me/api/portraits/men/41.jpg',
  },
  {
    name: 'Lisa B.',
    rating: 5,
    date: '2024-04-15',
    displayDate: '15 April 2024',
    text: 'Same-day rekey on our new house. Quick, fair, done right. Thanks Alex.',
    service: 'Lock Rekey',
    avatarColor: 'bg-[#D93025]',
  },
  {
    name: 'Rachel V.',
    rating: 5,
    date: '2026-03-08',
    displayDate: '8 March 2026',
    text: "I'm not a customer who locks myself out often but when I did, Nonstop handled it like pros. They walked me through pricing on the phone, the tech showed up wearing a uniform (which honestly made me feel safer late at night), opened the door with no damage, and even waited until I confirmed I had my house keys before leaving. Total class act.",
    service: 'House Lockout',
    photo: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
  {
    name: 'Mark P.',
    rating: 5,
    date: '2024-08-22',
    displayDate: '22 August 2024',
    text: 'Installed a Schlage Encode on our front door and walked us through every option in the app. Patient with our questions. Recommend.',
    service: 'Smart Lock Installation',
    avatarColor: 'bg-[#1A73E8]',
  },
  {
    name: 'Carmen S.',
    rating: 5,
    date: '2026-02-15',
    displayDate: '15 February 2026',
    text: 'My only Honda Accord key got destroyed by my dog. I had to choose between a $450 dealer quote or finding a locksmith. Nonstop programmed a fresh transponder right in my driveway for less than half. The tech also showed me how to put my car into safety mode in case it ever happens again. Way above and beyond.',
    service: 'Car Key Replacement',
    photo: 'https://randomuser.me/api/portraits/women/72.jpg',
  },
  {
    name: 'Jeff M.',
    rating: 5,
    date: '2026-04-19',
    displayDate: '19 April 2026',
    text: 'Run a small business and we had a tenant lockout situation at 5am ahead of a 6am breakfast delivery. Nonstop dispatched someone immediately and got the suite open before we lost the order. These guys really do answer 24/7. Saved my morning.',
    service: 'Commercial Lockout',
    avatarColor: 'bg-[#188038]',
  },
  {
    name: 'Hannah K.',
    rating: 5,
    date: '2025-11-30',
    displayDate: '30 November 2025',
    text: "House key snapped clean off in the deadbolt with my toddler napping inside. Panic doesn't begin to describe it. Called Nonstop and the tech was so calm and reassuring on the phone, walked me through what to expect. Got there fast, extracted the broken piece carefully, lock still works perfectly. We didn't even wake the baby.",
    service: 'Broken Key Extraction',
    photo: 'https://randomuser.me/api/portraits/women/28.jpg',
  },
  {
    name: 'Dave R.',
    rating: 5,
    date: '2024-12-08',
    displayDate: '8 December 2024',
    text: 'Wanted to upgrade all our exterior locks to a higher security grade after a break-in on our street. Nonstop walked me through the Grade 1 options without pushing the most expensive, installed five new deadbolts and reinforced the strike plates. Doors look better than before, and we feel a lot safer.',
    service: 'Lock Installation',
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

export default function AboutReviewsSection() {
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 max-w-5xl mx-auto">
          {reviews.map((review, index) => (
            <article
              key={index}
              className="relative bg-white rounded-2xl p-5 sm:p-6 border border-primary-300 shadow-sm hover:shadow-md hover:border-primary-500 transition-all duration-300 flex flex-col"
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
              <p className="text-[14px] text-[#202124] leading-[1.55] mt-4 normal-case">
                {review.text}
              </p>
            </article>
          ))}
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
