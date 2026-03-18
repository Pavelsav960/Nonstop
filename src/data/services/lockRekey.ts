import type { ServiceData } from '../serviceData';

export const lockRekey: ServiceData = {
  name: 'Lock Rekey Service',
  slug: 'lock-rekey',
  shortDescription: 'Change who has access to your home without replacing your locks. Rekeying is fast, affordable, and effective.',
  longDescription: [
    'Lock rekeying is one of the most cost-effective ways to restore security to your home or business without replacing all your lock hardware. When you rekey a lock, a locksmith changes the internal pin configuration inside the cylinder so that old keys no longer work, and only newly cut keys will operate the lock. The exterior hardware, including the deadbolt, knob, and lever, stays exactly the same.',
    'Rekeying is the recommended solution when you move into a new home or apartment, after a roommate or tenant moves out, following a break-up or divorce, if you have lost a set of keys, or any time you are unsure who might have copies of your keys. It provides the same security benefit as a full lock replacement at a fraction of the cost, since the locksmith only needs to reconfigure the internal pins rather than install entirely new hardware.',
    'Nonstop Lock & Key performs lock rekeying on-site at your St. Louis area home or business. Our locksmiths can rekey most standard residential locks in 10 to 15 minutes per lock, and we can key all your exterior doors to a single key for maximum convenience. We work with all major lock brands including Schlage, Kwikset, Baldwin, Medeco, and Mul-T-Lock, as well as commercial-grade cylinders and restricted keyway systems.',
    'During the rekeying process, our technician inspects the condition of each lock and can identify any worn or damaged components that may need attention. If a lock is in poor condition and rekeying would not provide reliable security, we will recommend replacement and provide an honest quote. Call (314) 532-1112 to schedule a lock rekey visit or request same-day service anywhere in the St. Louis metro area.',
  ],
  icon: 'rekey',
  startingPrice: '$25',
  benefits: [
    'Much more affordable than full lock replacement',
    'All your doors keyed to one convenient key',
    'Old keys immediately stop working',
    'Preserves your existing lock hardware and finish',
    'Completed on-site in 10-15 minutes per lock',
    'Works with all major lock brands',
  ],
  faqs: [
    {
      question: 'What is the difference between rekeying and replacing a lock?',
      answer: 'Rekeying changes the internal pins inside your existing lock so that old keys no longer work and new keys are required. The hardware stays the same. Replacing a lock means removing the entire lock and installing new hardware. Rekeying is faster and more affordable when your current hardware is in good condition.',
    },
    {
      question: 'How much does it cost to rekey locks in St. Louis?',
      answer: 'Lock rekeying starts at $25 per lock in the St. Louis area. We offer discounts when rekeying multiple locks in a single visit. We provide a complete quote over the phone based on the number and type of locks.',
    },
    {
      question: 'Should I rekey my locks when I buy a new house?',
      answer: 'Yes. Rekeying after purchasing a home is strongly recommended. Previous owners, contractors, real estate agents, and others may still have copies of the existing keys. Rekeying ensures only you and the people you choose have access to your new home.',
    },
    {
      question: 'Can you rekey all my doors to use the same key?',
      answer: 'Yes. This is one of the most popular rekeying services we provide. We can rekey all your exterior doors so they operate with a single key, which is much more convenient than carrying a different key for each door.',
    },
    {
      question: 'How long does it take to rekey a lock?',
      answer: 'Rekeying a standard residential lock takes approximately 10 to 15 minutes per lock. A typical home with a front door, back door, and garage entry door can be rekeyed in under an hour. We work efficiently to minimize disruption.',
    },
  ],
  howItWorks: [
    { title: 'Schedule or Call Now', description: 'Call (314) 532-1112 to book a rekeying appointment or request same-day service. Tell us how many locks need rekeying and we provide a complete upfront quote.' },
    { title: 'Cylinders Repinned On-Site', description: 'Our locksmith removes each cylinder, replaces the internal pin configuration, and reassembles the lock — all at your door. Each lock takes about 10-15 minutes.' },
    { title: 'New Keys, Old Keys Disabled', description: 'You receive a fresh set of keys that work on all rekeyed locks. Every old key is instantly rendered useless. We can key all your doors to a single key for convenience.' },
  ],
  metaTitle: 'Lock Rekey Service in St. Louis, MO | Starting at $25/Lock | Nonstop Lock & Key',
  metaDescription: 'Professional lock rekeying in St. Louis starting at $25 per lock. Move into a new home? Lost your keys? Rekey all doors to one key. Same-day service. Call (314) 532-1112.',
  relatedServiceSlugs: ['lock-installation-replacement', 'house-lockout', 'smart-lock-installation'],
  category: 'Residential',
};
