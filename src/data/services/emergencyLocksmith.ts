import type { ServiceData } from '../serviceData';

export const emergencyLocksmith: ServiceData = {
  name: '24 Hour Emergency Locksmith',
  slug: 'emergency-locksmith',
  shortDescription: 'Urgent lock or key emergency? Our 24/7 mobile locksmiths respond fast across the entire St. Louis area.',
  longDescription: [
    'Lock and key emergencies rarely happen during convenient business hours. A break-in attempt at 2am, a snapped key in your front door lock, or a car lockout in an unfamiliar neighborhood all demand immediate professional help. Nonstop Lock & Key operates a true 24-hour emergency locksmith service across St. Louis, meaning a trained technician is always available to respond to your call regardless of the hour, day, or weather conditions.',
    'Our emergency locksmith team handles a wide range of urgent situations including residential lockouts, car lockouts, broken key extractions, lock changes after a burglary or break-in attempt, emergency lock repairs, and jammed or malfunctioning locks that prevent you from securing your property. We carry a full inventory of replacement locks, key blanks, and specialized tools in our service vehicles so most emergencies can be resolved in a single visit.',
    'Response time is critical during a lock emergency, which is why we maintain multiple mobile locksmith units stationed throughout St. Louis County and the surrounding areas. When you call (314) 532-1112, our dispatcher identifies the closest available technician and routes them to your location. Average arrival time is 20 to 30 minutes, and we keep you updated by phone while the locksmith is en route.',
    'Every emergency call receives the same transparent pricing as a standard service call. We quote a price over the phone before dispatching, and the price you are quoted is the price you pay. There are no after-hours surcharges, trip fees, or inflated emergency rates. Nonstop Lock & Key believes that people in urgent situations deserve honest pricing, not price gouging.',
  ],
  icon: 'emergency',
  startingPrice: '$55',
  benefits: [
    'True 24/7/365 availability with no after-hours surcharges',
    '20-30 minute average response time across St. Louis',
    'Handles lockouts, break-ins, broken keys, and jammed locks',
    'Upfront phone pricing with no hidden emergency fees',
    'Fully equipped mobile units for single-visit resolution',
    'Licensed and insured technicians',
  ],
  faqs: [
    {
      question: 'Is there an extra charge for calling a locksmith at night or on weekends?',
      answer: 'No. Nonstop Lock & Key does not charge after-hours surcharges, weekend premiums, or holiday fees. The price we quote you over the phone is the price you pay, regardless of when you call.',
    },
    {
      question: 'What types of emergencies does your 24 hour locksmith handle?',
      answer: 'We handle all lock and key emergencies including home lockouts, car lockouts, broken key extractions, lock changes after a break-in, jammed or malfunctioning locks, emergency lock repairs, and situations where you need locks changed immediately for safety reasons.',
    },
    {
      question: 'How quickly can an emergency locksmith arrive at my location?',
      answer: 'Our average response time is 20 to 30 minutes throughout the St. Louis metro area. We have multiple mobile units stationed across the region to ensure fast response regardless of your location.',
    },
    {
      question: 'Can you change my locks immediately after a break-in?',
      answer: 'Yes. Our emergency locksmiths carry a full inventory of high-quality replacement locks in their service vehicles. We can replace or rekey all your exterior locks during the same visit to restore your security immediately after a break-in or attempted burglary.',
    },
    {
      question: 'Do I need to file a police report before calling a locksmith after a break-in?',
      answer: 'We recommend contacting police first after a break-in for your safety and for insurance documentation. However, you can call us at (314) 532-1112 at any point. We can arrive while you wait for police or come after they have completed their report.',
    },
  ],
  howItWorks: [
    { title: 'Call Any Hour', description: 'Reach our live dispatcher 24/7/365 at (314) 532-1112. Describe your emergency — lockout, break-in damage, jammed lock — and receive an upfront price before we dispatch.' },
    { title: 'Rapid Dispatch', description: 'We send the nearest available mobile locksmith to your St. Louis location. Average arrival time is 20-30 minutes, even on holidays, weekends, and in the middle of the night.' },
    { title: 'Emergency Resolved', description: 'Our technician handles the situation on the spot with the tools and parts already on the van. Lock replaced, door secured, key extracted — whatever it takes to restore your safety immediately.' },
  ],
  metaTitle: '24 Hour Emergency Locksmith in St. Louis, MO | 24/7 Service | Nonstop Lock & Key',
  metaDescription: '24/7 emergency locksmith service in St. Louis with no after-hours charges. Fast 20-30 minute response for lockouts, break-ins, and lock emergencies. Call (314) 532-1112 for a free quote.',
  relatedServiceSlugs: ['car-lockout', 'house-lockout', 'broken-key-extraction'],
  category: 'Emergency',
  reviews: [
    {
      name: 'Vanessa K.',
      rating: 5,
      date: '2026-04-18',
      text: '3am emergency, lost my keys at a wedding downtown. Called like 5 places and only Nonstop answered. Tech was at my Airbnb in 22 minutes. Did NOT expect that level of service that late at night, seriously thank you!!',
      photo: 'https://randomuser.me/api/portraits/women/28.jpg',
    },
    {
      name: 'Ron S.',
      rating: 5,
      date: '2026-03-08',
      text: 'Got home after work to find our back door had been pried open. Called Nonstop in a panic — they arrived in 25 minutes, secured the door temporarily and replaced the damaged deadbolt the same evening. The peace of mind that night was priceless.',
      photo: 'https://randomuser.me/api/portraits/men/72.jpg',
      location: 'Maryland Heights, MO',
    },
    {
      name: 'Eric M.',
      rating: 5,
      date: '2026-02-21',
      text: 'My elderly mother locked herself out at 11pm on a Sunday. Other locksmiths said next morning earliest. Nonstop came right out, opened her door in under 5 minutes, and was super patient with her. Will absolutely use again for any emergency.',
    },
    {
      name: 'Stacy H.',
      rating: 5,
      date: '2026-01-30',
      text: 'Christmas Eve. Locked out. Cold. Two kids. Nonstop showed up in 28 minutes when I was about ready to cry. Tech was kind, fast, and refused a tip. Honestly saved our holiday 🙏',
      photo: 'https://randomuser.me/api/portraits/women/19.jpg',
    },
    {
      name: 'James W.',
      rating: 5,
      date: '2025-12-18',
      text: 'Snapped my house key in the deadbolt at 2am after a flight delay. Called Nonstop expecting a long wait. They got there in 22 minutes, extracted the broken piece, made me a fresh key on the spot. 24/7 service that actually means 24/7.',
    },
  ],
};
