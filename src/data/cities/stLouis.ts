import type { CityData } from '../cityData';

export const stLouis: CityData = {
  name: 'St. Louis',
  slug: 'st-louis',
  description: 'Serving the heart of downtown St. Louis and surrounding neighborhoods with fast, reliable locksmith services. From the Gateway Arch to Forest Park, we provide 24/7 emergency lockout assistance and security solutions for one of Missouri\'s most dynamic cities.',
  neighborhoods: ['Downtown', 'The Hill', 'Soulard', 'Central West End', 'Tower Grove', 'Cherokee Street', 'Grand Center'],
  localContext: 'Whether you need emergency lockout service near Busch Stadium, lock rekeying in the Central West End, or commercial locksmith services downtown, our St. Louis team responds quickly to help residents and businesses throughout the city.',
  metaTitle: '24/7 Emergency Locksmith St. Louis MO | Fast Response | Nonstop Lock & Key',
  metaDescription: 'Need a locksmith in St. Louis? Nonstop Lock & Key provides 24/7 emergency lockout service, lock rekeying, and key replacement. 20-30 min response. Call (314) 532-1112.',
  lat: 38.6270,
  lng: -90.1994,
  responseTime: '20-30 minutes',
  whyChooseUs: 'St. Louis is our home base, and we know every neighborhood inside and out. Our technicians are positioned throughout downtown, the Central West End, and south city for the fastest possible response. We handle everything from historic home lock upgrades in Lafayette Square to high-traffic commercial security systems along Washington Avenue. With over 100 five-star reviews from St. Louis customers, we are the most trusted locksmith serving the city proper.',
  servingParagraph: 'Nonstop Lock & Key proudly serves all of St. Louis and its surrounding communities including Soulard, The Hill, Tower Grove, Cherokee Street, Central West End, Grand Center, and downtown. We also cover nearby Clayton, Brentwood, Maplewood, and University City, ensuring residents throughout the urban core have access to fast, professional locksmith services day or night.',
  securityTips: [
    'Many St. Louis homes, especially in Soulard and The Hill, have original locks from decades ago. Upgrading to Grade 1 deadbolts significantly improves security.',
    'If you live near Forest Park or a busy corridor, consider a smart lock with auto-lock functionality so your door locks behind you automatically.',
    'Downtown apartment dwellers should rekey locks immediately upon move-in. Previous tenants may still have copies of your keys.',
    'For businesses on Washington Avenue or in the Central West End, commercial-grade panic bars ensure safe emergency exits while preventing unauthorized entry.',
  ],
  pricing: [
    { service: 'Car Lockout', startingPrice: '$50', description: 'Emergency vehicle unlocking throughout St. Louis, damage-free entry' },
    { service: 'House Lockout', startingPrice: '$65', description: 'Residential lockout service for homes and apartments citywide' },
    { service: 'Lock Rekeying', startingPrice: '$25/lock', description: 'Change lock pins so only your new keys work' },
    { service: 'Lock Replacement', startingPrice: '$75', description: 'New lock installation including deadbolts and knob sets' },
    { service: 'Car Key Replacement', startingPrice: '$120', description: 'New car keys cut and programmed on-site for most makes' },
  ],
  reviews: [
    { name: 'Michael T.', rating: 5, date: '2025-01-15', text: 'Locked out of my house at 2am in the Central West End. They arrived in under 25 minutes and had me inside within ten. Professional, polite, and the price was exactly what they quoted on the phone. No surprise fees.', service: 'House Lockout' },
    { name: 'Angela R.', rating: 5, date: '2025-02-03', text: 'Had all six locks rekeyed after buying our home in Soulard. The technician was thorough, showed me how each lock worked, and got everything on a single master key. Fair price and great work.', service: 'Lock Rekeying' },
  ],
  faqs: [
    { question: 'How fast can a locksmith get to me in St. Louis?', answer: 'Our average response time in St. Louis is 20-30 minutes. We have mobile locksmiths positioned throughout downtown, the Central West End, Soulard, and surrounding neighborhoods for fast service.' },
    { question: 'How much does a locksmith cost in St. Louis?', answer: 'Locksmith service costs in St. Louis vary by service type. Car lockouts start at $50, house lockouts at $65, and lock rekeying at $25 per lock. Call (314) 532-1112 for an exact quote.' },
    { question: 'Do you offer 24/7 emergency locksmith service in St. Louis?', answer: 'Yes, Nonstop Lock & Key provides 24/7 emergency locksmith services throughout St. Louis, including holidays and weekends. We are always available when you need us.' },
    { question: 'Can you replace car keys in St. Louis?', answer: 'Yes, we provide on-site car key replacement for most makes and models throughout St. Louis. We cut and program transponder keys, key fobs, and standard car keys from our mobile units.' },
    { question: 'Do you install smart locks for St. Louis homes?', answer: 'Yes, we install and configure smart locks from brands like Schlage, Yale, and August for homes throughout St. Louis. We can integrate them with your existing deadbolt setup.' },
  ],
};
