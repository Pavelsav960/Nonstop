import type { ServiceData } from '../serviceData';

export const carLockout: ServiceData = {
  name: 'Car Lockout Service',
  slug: 'car-lockout',
  shortDescription: 'Locked out of your car? Our mobile locksmiths arrive fast to safely unlock your vehicle without damage.',
  longDescription: [
    'Getting locked out of your car is one of the most stressful situations a driver can face, especially when it happens late at night, in an unfamiliar area, or with children or pets inside the vehicle. Nonstop Lock & Key provides professional car lockout service across the entire St. Louis metropolitan area, dispatching skilled mobile locksmiths who arrive equipped to handle any vehicle lockout scenario quickly and safely.',
    'Our technicians use specialized automotive entry tools designed to open your car door without scratching the paint, bending the frame, or damaging any electronic components. Whether you drive a late-model sedan with advanced security features, an SUV, a truck, or a classic vehicle, we have the training and tools to get you back behind the wheel. We work with all major makes and models including Ford, Chevrolet, Toyota, Honda, BMW, Mercedes-Benz, and more.',
    'Unlike roadside assistance programs that can leave you waiting for hours, Nonstop Lock & Key prioritizes speed. When you call us for a car lockout in St. Louis, we give you an upfront price over the phone and dispatch the nearest available locksmith to your exact location. Most of our customers are back in their vehicle within 20 to 30 minutes of calling. There are no hidden fees, no surge pricing, and no membership required.',
    'We understand that a car lockout can happen to anyone at any time. That is why our car lockout service operates 24 hours a day, 7 days a week, including holidays and weekends. Whether you are stranded in a parking lot, at work, at the grocery store, or on the side of the highway, one call to (314) 532-1112 is all it takes to get professional help on the way.',
  ],
  icon: 'car-lockout',
  startingPrice: '$55',
  benefits: [
    'No damage to your vehicle paint or door frame',
    'All makes and models including luxury and foreign vehicles',
    'Average response time of 20-30 minutes across St. Louis',
    'Upfront pricing with no hidden fees or surge charges',
    '24/7 availability including holidays and weekends',
    'No membership or roadside plan required',
  ],
  faqs: [
    {
      question: 'How much does a car lockout service cost in St. Louis?',
      answer: 'Our car lockout service starts at $55 in the St. Louis area. The final price depends on your vehicle type, location, and time of day. We always provide an exact quote over the phone before dispatching so there are no surprises when our locksmith arrives.',
    },
    {
      question: 'How long does it take for a locksmith to unlock my car?',
      answer: 'Once our locksmith arrives, most car lockouts are resolved in 5 to 15 minutes depending on the vehicle make and model. We typically arrive at your location within 20 to 30 minutes of your call anywhere in the St. Louis metro area.',
    },
    {
      question: 'Will unlocking my car damage the paint or door?',
      answer: 'No. Our locksmiths use professional-grade automotive entry tools specifically designed to open car doors without causing any damage to the paint, weather stripping, door frame, or electronic locking mechanisms.',
    },
    {
      question: 'Can you unlock a car with push-button start or keyless entry?',
      answer: 'Yes. Our technicians are trained to work with all modern vehicle security systems including push-button start, keyless entry, and smart key fob systems. We can safely unlock newer vehicles without interfering with the electronics.',
    },
    {
      question: 'What if my keys are locked inside my running car?',
      answer: 'Call us immediately at (314) 532-1112. We treat locked-in-running-vehicle situations as high priority and dispatch the nearest available locksmith right away. Our technicians can safely unlock the door without needing to shut off the engine.',
    },
  ],
  howItWorks: [
    { title: 'Call With Your Location', description: 'Tell us where you are and what vehicle you drive. We give you an upfront price and dispatch the nearest mobile locksmith to your exact location in St. Louis.' },
    { title: 'We Unlock Your Car', description: 'Our technician arrives in 20-30 minutes with specialized automotive entry tools designed to open your door without scratching paint, bending the frame, or triggering alarms.' },
    { title: 'Back on the Road', description: 'Once your car is open, we verify the lock and door are functioning properly. You pay the quoted price — no surprises, no hidden fees — and drive away.' },
  ],
  metaTitle: 'Car Lockout Service in St. Louis, MO | Starting at $55 | Nonstop Lock & Key',
  metaDescription: 'Locked out of your car in St. Louis? Nonstop Lock & Key provides fast, damage-free car lockout service 24/7. All makes and models. Starting at $55. Call (314) 532-1112.',
  relatedServiceSlugs: ['car-key-replacement', 'key-fob-programming', 'ignition-repair'],
  category: 'Automotive',
};
