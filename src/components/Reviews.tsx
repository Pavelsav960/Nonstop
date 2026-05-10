import { Link } from 'react-router';
import { BUSINESS } from '../constants';

const reviews = [
  {
    name: 'Michael Thompson',
    location: 'Clayton, MO',
    rating: 5,
    date: '2025-01-15',
    relativeTime: '2 months ago',
    reviewCount: 14,
    isLocalGuide: true,
    text: 'Locked out of my condo on Forsyth at 2am after losing my keys at dinner. Called Nonstop Lock & Key and they had a technician at my door in under 20 minutes on a Saturday night. He opened the deadbolt without a single mark on the door, then rekeyed it on the spot so the lost keys wouldn\'t work. Exactly the service you want in a stressful moment.',
  },
  {
    name: 'Sarah Martinez',
    location: 'University City, MO',
    rating: 5,
    date: '2025-02-10',
    relativeTime: '1 month ago',
    reviewCount: 3,
    isLocalGuide: false,
    text: 'Had all the locks rekeyed after closing on our house in University City. The technician arrived on time, rekeyed five exterior doors in about two hours, and set everything to work with a single key. He even tightened a loose strike plate he noticed on the back door. Fair pricing and thorough work.',
  },
  {
    name: 'David Chen',
    location: 'Chesterfield, MO',
    rating: 5,
    date: '2025-01-28',
    relativeTime: '2 months ago',
    reviewCount: 28,
    isLocalGuide: true,
    text: 'Lost my only car key at Chesterfield Mall and was stranded in the parking lot. Nonstop Lock & Key came out, cut a new transponder key, and programmed it to start the engine — all in the parking lot in about 40 minutes. Saved me from an expensive tow to the dealership.',
  },
  {
    name: 'Jennifer Wilson',
    location: 'Webster Groves, MO',
    rating: 5,
    date: '2025-02-05',
    relativeTime: '1 month ago',
    reviewCount: 7,
    isLocalGuide: false,
    text: 'Had Nonstop install a Schlage Encode smart lock on our front door in Webster Groves. The technician handled the installation cleanly, set up the app on both our phones, and programmed guest codes for the dog walker. Very knowledgeable about the different smart lock brands and helped us choose the right one.',
  },
  {
    name: 'Jason Patel',
    location: 'Kirkwood, MO',
    rating: 5,
    date: '2025-03-01',
    relativeTime: '3 weeks ago',
    reviewCount: 42,
    isLocalGuide: true,
    text: 'Broken key snapped off in our front door lock at 11pm on a weeknight in Kirkwood. Called Nonstop and the locksmith arrived in about 25 minutes. He extracted the broken piece, tested the cylinder, and determined the lock was still in good shape. Quick, professional, and the price matched the quote exactly.',
  },
  {
    name: 'Angela Roberts',
    location: 'Ballwin, MO',
    rating: 5,
    date: '2025-02-20',
    relativeTime: '1 month ago',
    reviewCount: 2,
    isLocalGuide: false,
    text: 'Locked my keys in the car with the engine running outside the grocery store on Manchester Road in Ballwin. Called in a panic and they treated it as a priority. Technician arrived in under 30 minutes and had the door open in two minutes flat. No damage to the car at all. Highly recommend.',
  },
];

function getInitials(name: string) {
  return name.split(' ').map(n => n[0]).join('').toUpperCase();
}

function getAvatarColor(index: number) {
  const colors = [
    'bg-[#1A73E8]', 'bg-[#D93025]', 'bg-[#188038]',
    'bg-[#9334E6]', 'bg-[#E37400]', 'bg-[#12B5CB]',
  ];
  return colors[index % colors.length];
}

const GoogleG = ({ className = 'w-6 h-6' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

export default function Reviews() {
  return (
    <section id="reviews" className="section-ref bg-[#F5F5F5]">
      <div className="container-ref">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h3 className="text-primary-600 mb-3 !text-[22px] lg:!text-[24px] !font-medium">
            Testimonials
          </h3>
          <h2 className="text-[#17171A] max-w-4xl mx-auto">
            5-Star Rated In St. Louis,<br />
            Trusted By {BUSINESS.reviewCount}+ Happy Clients.
          </h2>
        </div>

        {/* Review Cards */}
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 overflow-x-auto snap-x snap-mandatory md:overflow-visible md:snap-none -mx-4 md:mx-0 px-4 md:px-0 pb-2 md:pb-0 scroll-smooth no-scrollbar">
          {reviews.map((review, index) => (
            <article
              key={index}
              className="bg-white rounded-[10px] p-5 sm:p-6 shadow-[0_1px_3px_rgba(0,0,0,0.08)] border border-gray-100 flex flex-col flex-shrink-0 w-[85%] sm:w-[70%] md:w-auto snap-center"
              itemScope
              itemType="https://schema.org/Review"
            >
              {/* Reviewer header row */}
              <div className="flex items-start gap-3">
                <div className={`w-10 h-10 rounded-full ${getAvatarColor(index)} flex items-center justify-center text-white font-medium text-base flex-shrink-0`}>
                  {getInitials(review.name)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h4 className="text-[15px] font-medium text-[#202124] truncate normal-case" itemProp="author">
                      {review.name}
                    </h4>
                    <GoogleG className="w-4 h-4 flex-shrink-0" />
                  </div>
                  <p className="text-[12px] text-[#70757a] mt-0.5 normal-case">
                    {review.isLocalGuide && <><span className="font-medium">Local Guide</span> · </>}
                    {review.reviewCount} reviews
                  </p>
                </div>
              </div>

              {/* Stars + time */}
              <div className="flex items-center gap-2 mt-3">
                <div className="flex" itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                  <meta itemProp="ratingValue" content={review.rating.toString()} />
                  <meta itemProp="bestRating" content="5" />
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-[#FBBC04] fill-current" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <span className="text-[12px] text-[#70757a] normal-case">{review.relativeTime}</span>
              </div>

              {/* Review body */}
              <p className="text-[14px] text-[#202124] leading-[1.55] mt-3 normal-case" itemProp="reviewBody">
                {review.text}
              </p>

              {/* Footer — helpful action bar like Google */}
              <div className="flex items-center gap-4 mt-4 pt-3">
                <button type="button" className="inline-flex items-center gap-1.5 text-[#70757a] hover:text-[#202124] text-[13px] normal-case">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11V5a2 2 0 114 0v6h3a2 2 0 012 2v0a2 2 0 01-2 2h-3v4H7v-4H5a2 2 0 01-2-2v0a2 2 0 012-2h2z" />
                  </svg>
                  Helpful
                </button>
                <span className="text-[12px] text-[#70757a] normal-case">· {review.location}</span>
              </div>

              <meta itemProp="datePublished" content={review.date} />
            </article>
          ))}
        </div>

        {/* See all link */}
        <div className="text-center mt-10 sm:mt-12">
          <Link
            to="/reviews"
            className="inline-flex items-center gap-2 text-primary-600 font-medium text-[18px] capitalize underline hover:text-primary-700 transition-colors"
          >
            Read All Reviews
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
