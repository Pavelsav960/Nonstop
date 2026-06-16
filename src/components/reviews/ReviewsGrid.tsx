import { useState } from 'react';
import { Link } from 'react-router';
import { BUSINESS } from '../../constants';
import VerifiedBadge from '../VerifiedBadge';

type Review = {
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

export const reviews: Review[] = [
  {
    name: 'Michael T.',
    rating: 5,
    date: '2026-03-15',
    displayDate: '15 March 2026',
    text: "Locked out of my condo on Forsyth at 2am after losing my keys at dinner. Called Nonstop and they had a tech at my door fast on a Saturday night. He opened the deadbolt without a single mark on the door, then rekeyed it on the spot so the lost keys wouldn't work anymore. Professional, calm, didn't take advantage of the situation.",
    serviceName: 'House Lockout',
    serviceSlug: 'house-lockout',
    cityName: 'Clayton',
    citySlug: 'clayton',
    photo: 'https://randomuser.me/api/portraits/men/41.jpg',
  },
  {
    name: 'Ryan G.',
    rating: 5,
    date: '2024-06-08',
    displayDate: '8 June 2024',
    text: "Couldn't get into my office Saturday morning. Got me in fast. Quick and professional.",
    serviceName: 'Commercial Lockout',
    serviceSlug: 'commercial-lockout',
    cityName: 'Chesterfield',
    citySlug: 'chesterfield',
    avatarColor: 'bg-[#1A73E8]',
  },
  {
    name: 'Sarah M.',
    rating: 5,
    date: '2024-09-12',
    displayDate: '12 September 2024',
    text: 'Just closed on our new place and got everything rekeyed for peace of mind. Tech did 5 exterior doors and fixed a sticky strike plate on the back door. Charged exactly what was quoted on the phone.',
    serviceName: 'Lock Rekey',
    serviceSlug: 'lock-rekey',
    cityName: 'University City',
    citySlug: 'university-city',
    photo: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
  {
    name: 'Angela R.',
    rating: 5,
    date: '2026-04-22',
    displayDate: '22 April 2026',
    text: 'Locked my keys IN the car at Schnucks with my dog inside, was completely freaking out. Called Nonstop and they got there quickly and had the door open in maybe 90 seconds. Zero damage to the trim. Absolute lifesavers, would absolutely call them again and tell every friend I know.',
    serviceName: 'Car Lockout',
    serviceSlug: 'car-lockout',
    cityName: 'Ballwin',
    citySlug: 'ballwin',
    photo: 'https://randomuser.me/api/portraits/women/28.jpg',
  },
  {
    name: 'Jennifer W.',
    rating: 5,
    date: '2026-02-08',
    displayDate: '8 February 2026',
    text: 'Had Nonstop install a Schlage Encode on our front door. The technician handled the install cleanly, set up the app on both our phones, and programmed guest codes for the dog walker. Very knowledgeable about smart lock brands and helped us pick the right one for our setup. Honestly the most patient and clear-communicating contractor we have ever worked with.',
    serviceName: 'Smart Lock Installation',
    serviceSlug: 'smart-lock-installation',
    cityName: 'Webster Groves',
    citySlug: 'webster-groves',
    avatarColor: 'bg-[#D93025]',
  },
  {
    name: 'Jason P.',
    rating: 5,
    date: '2026-01-04',
    displayDate: '4 January 2026',
    text: 'Broken key snapped off in our front door lock at 11pm. Locksmith arrived in about 25 minutes, extracted the broken piece, tested the cylinder, and confirmed the lock was still good. Quick and professional.',
    serviceName: 'Broken Key Extraction',
    serviceSlug: 'broken-key-extraction',
    cityName: 'Kirkwood',
    citySlug: 'kirkwood',
    photo: 'https://randomuser.me/api/portraits/men/72.jpg',
  },
  {
    name: 'David C.',
    rating: 5,
    date: '2025-08-19',
    displayDate: '19 August 2025',
    text: "Lost my only Honda key at the mall on a Sunday. The dealership wanted way too much PLUS a tow. Nonstop came to the parking lot, cut a new transponder, programmed it, and I was driving home in under an hour. Saved me a ton of money. The tech also showed me how to put my car into safe mode in case anything like this ever happens again. Above and beyond.",
    serviceName: 'Car Key Replacement',
    serviceSlug: 'car-key-replacement',
    cityName: 'Chesterfield',
    citySlug: 'chesterfield',
    photo: 'https://randomuser.me/api/portraits/men/55.jpg',
  },
  {
    name: 'Vanessa K.',
    rating: 5,
    date: '2026-03-30',
    displayDate: '30 March 2026',
    text: "3am emergency, lost my keys at a wedding downtown. Called like 5 places and only Nonstop actually answered. Tech was at my Airbnb fast and didn't make me feel bad for the late-night call. Did not expect that level of service that late at night, seriously thank you.",
    serviceName: 'House Lockout',
    serviceSlug: 'house-lockout',
    cityName: 'St. Louis',
    citySlug: 'st-louis',
    avatarColor: 'bg-[#188038]',
  },
  {
    name: 'Marcus T.',
    rating: 5,
    date: '2024-11-15',
    displayDate: '15 November 2024',
    text: 'Needed a spare fob for my Camry. Half the dealer price. Fast and friendly.',
    serviceName: 'Key Fob Programming',
    serviceSlug: 'key-fob-programming',
    cityName: 'Maryland Heights',
    citySlug: 'maryland-heights',
    photo: 'https://randomuser.me/api/portraits/men/47.jpg',
  },
  {
    name: 'Patricia W.',
    rating: 5,
    date: '2025-10-26',
    displayDate: '26 October 2025',
    text: 'Our front deadbolt had a worn-out mechanism that was getting harder to turn every day. Nonstop replaced it with a heavy-duty Kwikset and made sure everything was aligned perfectly. The tech also pointed out that our strike plate screws were too short for proper security and replaced those too. Door locks smoothly now and feels way more secure.',
    serviceName: 'Lock Installation & Replacement',
    serviceSlug: 'lock-installation-replacement',
    cityName: 'Olivette',
    citySlug: 'olivette',
    photo: 'https://randomuser.me/api/portraits/women/53.jpg',
  },
  {
    name: 'Greg M.',
    rating: 5,
    date: '2024-07-22',
    displayDate: '22 July 2024',
    text: 'Locked my keys in the car near Lambert Airport after a red-eye at 5am. Dispatched someone to the parking area right away. Got me back in without any fuss. A lifesaver at that hour.',
    serviceName: 'Car Lockout',
    serviceSlug: 'car-lockout',
    cityName: 'Bridgeton',
    citySlug: 'bridgeton',
    avatarColor: 'bg-[#1A73E8]',
  },
  {
    name: 'Karen M.',
    rating: 5,
    date: '2026-04-15',
    displayDate: '15 April 2026',
    text: "Locked my keys inside the car at Dierbergs on Olive while loading groceries with my toddler in the cart. Called Nonstop and they understood the urgency immediately. Tech arrived and had the door open without a scratch on the paint. The price he quoted on the phone is exactly what I paid. No surprise fees, no upsells. Will absolutely call them again.",
    serviceName: 'Car Lockout',
    serviceSlug: 'car-lockout',
    cityName: 'Creve Coeur',
    citySlug: 'creve-coeur',
    photo: 'https://randomuser.me/api/portraits/women/19.jpg',
  },
  {
    name: 'Michelle W.',
    rating: 5,
    date: '2025-12-03',
    displayDate: '3 December 2025',
    text: 'Had six doors rekeyed at our office plaza on Manchester Road after a staff change. Tech was efficient and rekeyed all six locks to work with a single master key. Great communication throughout the process and sent us a detailed invoice for our records. Would recommend for any commercial property manager.',
    serviceName: 'Lock Rekey',
    serviceSlug: 'lock-rekey',
    cityName: 'Manchester',
    citySlug: 'manchester',
    avatarColor: 'bg-[#D93025]',
  },
  {
    name: 'Linda S.',
    rating: 5,
    date: '2026-02-28',
    displayDate: '28 February 2026',
    text: 'Needed a replacement key for my Honda after losing the spare. Tech came to my house on Midland Avenue, cut and programmed a new transponder key on the spot. Cost significantly less than what the Honda dealer quoted, and the convenience of having them come to me instead of getting it towed was huge. Honest pricing and explained everything as he went.',
    serviceName: 'Car Key Replacement',
    serviceSlug: 'car-key-replacement',
    cityName: 'Overland',
    citySlug: 'overland',
    photo: 'https://randomuser.me/api/portraits/women/72.jpg',
  },
  {
    name: 'Tom R.',
    rating: 5,
    date: '2024-05-10',
    displayDate: '10 May 2024',
    text: 'Installed a Yale Assure smart lock. Quick, clean, easy. Thanks.',
    serviceName: 'Smart Lock Installation',
    serviceSlug: 'smart-lock-installation',
    cityName: 'Frontenac',
    citySlug: 'frontenac',
    photo: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Beth N.',
    rating: 5,
    date: '2025-09-08',
    displayDate: '8 September 2025',
    text: 'Locked myself out walking my dog without thinking to grab my keys. Stood in the cold for what felt like forever until I called Nonstop. The dispatcher was patient and walked me through what to expect. Tech arrived in a clearly marked van wearing a uniform which made me feel safe letting him work on my lock alone. Quick, painless, did not charge me a premium for being a panicked customer.',
    serviceName: 'House Lockout',
    serviceSlug: 'house-lockout',
    cityName: 'Saint Charles',
    citySlug: 'saint-charles',
    avatarColor: 'bg-[#188038]',
  },
  {
    name: 'Robert H.',
    rating: 5,
    date: '2026-01-20',
    displayDate: '20 January 2026',
    text: "Key wouldn't turn in the ignition of my old Subaru. Tech diagnosed the issue in the driveway and fixed it the same visit. Saved me a tow to the dealer for sure.",
    serviceName: 'Ignition Repair',
    serviceSlug: 'ignition-repair',
    cityName: 'Kirkwood',
    citySlug: 'kirkwood',
    photo: 'https://randomuser.me/api/portraits/men/78.jpg',
  },
  {
    name: 'Nicole D.',
    rating: 5,
    date: '2024-10-30',
    displayDate: '30 October 2024',
    text: 'Wanted to upgrade all our exterior locks to higher security after a break-in attempt on a neighboring house. Tech walked us through the Grade 1 options without pushing the most expensive. Installed four new deadbolts and reinforced the strike plates with longer screws. Doors look better than before and we feel a lot safer.',
    serviceName: 'Lock Installation & Replacement',
    serviceSlug: 'lock-installation-replacement',
    cityName: 'Brentwood',
    citySlug: 'brentwood',
    photo: 'https://randomuser.me/api/portraits/women/45.jpg',
  },
  {
    name: 'Henry F.',
    rating: 5,
    date: '2026-03-22',
    displayDate: '22 March 2026',
    text: "Lost the combo to my dad's old safe. They got it open without damaging anything. Pros.",
    serviceName: 'Safe Opening & Repair',
    serviceSlug: 'safe-opening',
    cityName: 'Town and Country',
    citySlug: 'town-and-country',
    avatarColor: 'bg-[#1A73E8]',
  },
  {
    name: 'Lauren P.',
    rating: 5,
    date: '2026-04-05',
    displayDate: '5 April 2026',
    text: 'Lost my only key fob to our Toyota Highlander on a family vacation. Stuck about an hour from home with two tired kids. Nonstop got someone to our location, programmed a new fob right there in the parking lot, and even gave us some shade with their van while we waited. Above and beyond for a really stressful situation.',
    serviceName: 'Key Fob Programming',
    serviceSlug: 'key-fob-programming',
    cityName: 'Richmond Heights',
    citySlug: 'richmond-heights',
    photo: 'https://randomuser.me/api/portraits/women/61.jpg',
  },
  {
    name: 'Mark P.',
    rating: 5,
    date: '2024-08-22',
    displayDate: '22 August 2024',
    text: 'Replaced two exterior locks at our home off Manchester Road. Tech was on-time, polite to our kids, and finished the job in about an hour. Clean install.',
    serviceName: 'Lock Installation & Replacement',
    serviceSlug: 'lock-installation-replacement',
    cityName: 'Des Peres',
    citySlug: 'des-peres',
    avatarColor: 'bg-[#188038]',
  },
  {
    name: 'Carol B.',
    rating: 5,
    date: '2026-02-05',
    displayDate: '5 February 2026',
    text: 'Rekeyed our front and back door after the cleaning service quit. Done quickly. Recommend.',
    serviceName: 'Lock Rekey',
    serviceSlug: 'lock-rekey',
    cityName: 'Ladue',
    citySlug: 'ladue',
    photo: 'https://randomuser.me/api/portraits/women/85.jpg',
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

export default function ReviewsGrid() {
  const [extraLoads, setExtraLoads] = useState(0);
  // Initial visible: 3 mobile, 6 desktop. Each click loads +3 on both viewports.
  const mobileVisible = 3 + extraLoads * 3;
  const desktopVisible = 6 + extraLoads * 3;
  const showLoadMore = mobileVisible < reviews.length;

  return (
    <section className="section-ref bg-white" aria-labelledby="reviews-grid-heading">
      <div className="container-ref">
        <div className="text-center mb-12 sm:mb-14">
          <p className="text-primary-600 text-[14px] sm:text-[16px] font-semibold tracking-wide normal-case mb-3">
            What Customers Are Saying
          </p>
          <h2 id="reviews-grid-heading" className="text-[#17171A] max-w-4xl mx-auto px-2">
            5-Star Rated Across St. Louis County
          </h2>
          <p className="mt-4 text-[16px] sm:text-[18px] lg:text-[19px] text-gray-700 max-w-2xl mx-auto leading-relaxed px-4 font-medium">
            Real reviews from real neighbors who called us in a tough moment and got it handled.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {reviews.map((review, index) => {
            if (index >= desktopVisible) return null;

            // Items below mobileVisible are visible on every viewport;
            // items between mobileVisible and desktopVisible only show on tablet/desktop.
            const displayClass = index < mobileVisible ? 'flex' : 'hidden md:flex';

            return (
              <article
                key={index}
                className={`${displayClass} relative bg-white rounded-2xl p-5 sm:p-6 border border-primary-300 shadow-sm hover:shadow-md hover:border-primary-500 transition-all duration-300 flex-col`}
              >
              <GoogleG className="absolute top-4 right-4 w-6 h-6" />
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

              <p className="text-[14px] text-[#202124] leading-[1.55] mt-4 normal-case flex-1">
                {review.text}
              </p>

              {/* Service + City link chips */}
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

        {/* Load more button — adds 3 reviews per click */}
        {showLoadMore && (
          <div className="mt-10 sm:mt-12 text-center">
            <button
              type="button"
              onClick={() => setExtraLoads((n) => n + 1)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-primary-500 text-primary-600 hover:bg-primary-500 hover:text-white font-bold text-[15px] sm:text-base rounded-lg shadow-sm hover:shadow-md transition-all"
              aria-label="Show more customer reviews"
            >
              Load More Reviews
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
          </div>
        )}

        {/* See on Google CTA */}
        <div className={`text-center max-w-2xl mx-auto ${showLoadMore ? 'mt-6 sm:mt-7' : 'mt-10 sm:mt-12'}`}>
          <a
            href={BUSINESS.gbpUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-white border border-gray-200 hover:border-primary-300 rounded-full shadow-sm hover:shadow-md transition-all group"
            aria-label={`View Google reviews for ${BUSINESS.name}`}
          >
            <GoogleG className="w-5 h-5 flex-shrink-0" />
            <span className="text-[14px] sm:text-[15px] font-semibold text-[#17171A] normal-case">
              See More Reviews on Google
            </span>
            <span className="inline-flex text-primary-600 font-bold text-[14px] sm:text-[15px] group-hover:translate-x-0.5 transition-transform" aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
