import { Link } from 'react-router';
import { BUSINESS } from '../constants';

const reviews = [
  {
    name: 'Michael T.',
    location: 'Clayton, MO',
    rating: 5,
    date: '2025-01-15',
    relativeTime: '2 months ago',
    service: 'House Lockout',
    text: 'Locked out of my condo on Forsyth at 2am after losing my keys at dinner. Called Nonstop Lock & Key and they had a technician at my door in under 20 minutes on a Saturday night. He opened the deadbolt without a single mark on the door, then rekeyed it on the spot so the lost keys wouldn\'t work. Exactly the service you want in a stressful moment.',
  },
  {
    name: 'Sarah M.',
    location: 'University City, MO',
    rating: 5,
    date: '2025-02-10',
    relativeTime: '1 month ago',
    service: 'Lock Rekeying',
    text: 'Had all the locks rekeyed after closing on our house in University City. The technician arrived on time, rekeyed five exterior doors in about two hours, and set everything to work with a single key. He even tightened a loose strike plate he noticed on the back door. Fair pricing and thorough work.',
  },
  {
    name: 'David C.',
    location: 'Chesterfield, MO',
    rating: 5,
    date: '2025-01-28',
    relativeTime: '2 months ago',
    service: 'Car Key Replacement',
    text: 'Lost my only car key at Chesterfield Mall and was stranded in the parking lot. Nonstop Lock & Key came out, cut a new transponder key, and programmed it to start the engine — all in the parking lot in about 40 minutes. Saved me from an expensive tow to the dealership.',
  },
  {
    name: 'Jennifer W.',
    location: 'Webster Groves, MO',
    rating: 5,
    date: '2025-02-05',
    relativeTime: '1 month ago',
    service: 'Smart Lock Installation',
    text: 'Had Nonstop install a Schlage Encode smart lock on our front door in Webster Groves. The technician handled the installation cleanly, set up the app on both our phones, and programmed guest codes for the dog walker. Very knowledgeable about the different smart lock brands and helped us choose the right one.',
  },
  {
    name: 'Jason P.',
    location: 'Kirkwood, MO',
    rating: 5,
    date: '2025-03-01',
    relativeTime: '3 weeks ago',
    service: 'Emergency Locksmith',
    text: 'Broken key snapped off in our front door lock at 11pm on a weeknight in Kirkwood. Called Nonstop and the locksmith arrived in about 25 minutes. He extracted the broken piece, tested the cylinder, and determined the lock was still in good shape. Quick, professional, and the price matched the quote exactly.',
  },
  {
    name: 'Angela R.',
    location: 'Ballwin, MO',
    rating: 5,
    date: '2025-02-20',
    relativeTime: '1 month ago',
    service: 'Car Lockout',
    text: 'Locked my keys in the car with the engine running outside the grocery store on Manchester Road in Ballwin. Called in a panic and they treated it as a priority. Technician arrived in under 30 minutes and had the door open in two minutes flat. No damage to the car at all. Highly recommend.',
  },
];

function getInitials(name: string) {
  return name.split(' ').map(n => n[0]).join('').toUpperCase();
}

function getAvatarColor(index: number) {
  const colors = [
    'bg-blue-500', 'bg-red-500', 'bg-green-500',
    'bg-purple-500', 'bg-orange-500', 'bg-teal-500',
  ];
  return colors[index % colors.length];
}

export default function Reviews() {
  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Google branding */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <span className="text-lg font-medium text-gray-500">Google Reviews</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <span className="text-5xl font-bold text-gray-900">{BUSINESS.ratingValue}</span>
            <div>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-0.5">Based on {BUSINESS.reviewCount}+ reviews</p>
            </div>
          </div>
        </div>

        {/* Review Cards - Google style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
              itemScope
              itemType="https://schema.org/Review"
            >
              {/* Reviewer header */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-full ${getAvatarColor(index)} flex items-center justify-center text-white font-semibold text-sm flex-shrink-0`}>
                  {getInitials(review.name)}
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm font-semibold text-gray-900 truncate" itemProp="author">
                    {review.name}
                  </h3>
                  <p className="text-xs text-gray-500">{review.relativeTime}</p>
                </div>
              </div>

              {/* Stars + service */}
              <div className="flex items-center gap-2 mb-3">
                <div className="flex text-yellow-400" itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                  <meta itemProp="ratingValue" content={review.rating.toString()} />
                  <meta itemProp="bestRating" content="5" />
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <span className="text-xs text-gray-400">|</span>
                <span className="text-xs font-medium text-gray-500">{review.service}</span>
              </div>

              {/* Review text */}
              <p className="text-sm text-gray-700 leading-relaxed" itemProp="reviewBody">
                {review.text}
              </p>

              {/* Location footer */}
              <div className="flex items-center gap-1 mt-4 pt-3 border-t border-gray-100">
                <svg className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-xs text-gray-400">{review.location}</span>
              </div>

              <meta itemProp="datePublished" content={review.date} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 bg-white rounded-xl border border-gray-200 p-8 sm:p-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-bold text-gray-900 mb-1">Join 100+ Happy Customers</h3>
              <p className="text-gray-500 text-sm">Experience the top-rated locksmith service in St. Louis</p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <a
                href={BUSINESS.phoneTel}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-all shadow-md text-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call {BUSINESS.phone}
              </a>
              <Link
                to="/reviews"
                className="inline-block px-6 py-3 text-primary-600 font-semibold rounded-lg border border-primary-200 hover:bg-primary-50 transition-all text-sm"
              >
                See All Reviews
              </Link>
              <a
                href={BUSINESS.gbpReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-gray-600 font-semibold rounded-lg border border-gray-200 hover:bg-gray-50 transition-all text-sm"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Leave a Review
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
