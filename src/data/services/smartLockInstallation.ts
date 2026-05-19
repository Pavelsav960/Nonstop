import type { ServiceData } from '../serviceData';

export const smartLockInstallation: ServiceData = {
  name: 'Smart Lock Installation',
  slug: 'smart-lock-installation',
  shortDescription: 'Upgrade to keyless convenience with professional smart lock installation. Wi-Fi, Bluetooth, and keypad locks.',
  longDescription: [
    'Smart locks are transforming home security by eliminating the need for physical keys while adding features like remote access, activity logs, temporary guest codes, and voice assistant integration. However, proper installation is critical. A smart lock that is poorly installed, misaligned, or incorrectly configured will malfunction, drain batteries quickly, or fail to secure the door properly. Nonstop Lock & Key provides professional smart lock installation throughout the St. Louis area, ensuring your new lock works reliably from day one.',
    'We install smart locks from every major manufacturer including Schlage Encode, Kwikset Halo, Yale Assure, August, Level, Ultraloq, and Wyze. Our locksmiths are familiar with the setup requirements for each brand and can advise which model works best for your door type, existing deadbolt prep, Wi-Fi network, and smart home ecosystem. Whether you use Apple HomeKit, Google Home, Amazon Alexa, or Samsung SmartThings, we ensure your new lock integrates properly.',
    'Smart lock installation includes removing your existing deadbolt, verifying door alignment and strike plate positioning, installing the new smart lock hardware, configuring the wireless connection, setting up your initial access codes, and testing all functions including auto-lock, remote locking, and manual key override if available. We also reinforce the strike plate with 3-inch screws if your current plate is secured with short builder-grade screws.',
    'Many homeowners attempt to install smart locks themselves and run into issues with door alignment, deadbolt throw clearance, or wireless connectivity. A professional installation avoids these problems and typically takes 30 to 45 minutes per door. Call (314) 532-1112 to schedule a smart lock installation or to get advice on which smart lock is right for your St. Louis home.',
  ],
  icon: 'smart-lock',
  startingPrice: '$85',
  benefits: [
    'Professional installation for all major smart lock brands',
    'Door alignment and strike plate reinforcement included',
    'Wi-Fi, Bluetooth, and Z-Wave setup and configuration',
    'Integration with Alexa, Google Home, and Apple HomeKit',
    'Access code setup and remote access configuration',
    'Completed in 30-45 minutes per door',
  ],
  faqs: [
    {
      question: 'How much does smart lock installation cost in St. Louis?',
      answer: 'Smart lock installation starts at $85 for labor in the St. Louis area, which does not include the cost of the lock itself. If you already purchased a smart lock, we install it. If you need one, we can recommend and supply the right model for your door and budget.',
    },
    {
      question: 'Can a smart lock be installed on my existing door?',
      answer: 'In most cases yes. Smart locks are designed to replace standard deadbolts and use the same door prep holes. Our locksmith will verify that your door is compatible and make any necessary adjustments during installation to ensure a proper fit.',
    },
    {
      question: 'Which smart lock brand do you recommend?',
      answer: 'The best smart lock depends on your specific needs. For reliability and ease of use, Schlage Encode and Kwikset Halo are popular choices. For Apple HomeKit users, Yale Assure and Level Lock are strong options. We help you choose based on your door, smart home setup, and budget.',
    },
    {
      question: 'What happens if the smart lock battery dies?',
      answer: 'Most smart locks include a physical key override for exactly this situation. Many also have a low-battery warning that gives you weeks of notice before the battery runs out. Some models allow emergency power via a 9V battery held to the exterior. We configure all backup options during installation.',
    },
    {
      question: 'Can I still use a regular key with a smart lock?',
      answer: 'Most smart locks include a physical keyhole as a backup. Some models like the August smart lock are retrofit designs that keep your existing exterior key cylinder entirely. During installation, we set up both the smart features and the physical key backup.',
    },
  ],
  howItWorks: [
    { title: 'Choose Your Smart Lock', description: 'Already have a lock? Great. Need a recommendation? Call (314) 532-1112 and we will suggest the best smart lock for your door type, Wi-Fi setup, and smart home ecosystem.' },
    { title: 'Expert Installation', description: 'Our technician removes your old hardware, installs the smart lock with proper alignment and reinforced strike plate, and connects it to your Wi-Fi or Bluetooth network.' },
    { title: 'Configured and Connected', description: 'We set up your access codes, pair the lock with Alexa, Google Home, or Apple HomeKit if applicable, and walk you through the app so you are comfortable managing it on your own.' },
  ],
  metaTitle: 'Smart Lock Installation in St. Louis, MO | 24/7 Service | Nonstop Lock & Key',
  metaDescription: 'Professional smart lock installation in St. Louis. Schlage, Kwikset, Yale, August, and more. Wi-Fi setup and smart home integration included. Call (314) 532-1112 for a free quote.',
  relatedServiceSlugs: ['lock-installation-replacement', 'lock-rekey', 'house-lockout'],
  category: 'Residential',
  reviews: [
    {
      name: 'Jennifer W.',
      rating: 5,
      date: '2026-04-19',
      text: 'Had Nonstop Lock & Key install a Schlage Encode smart lock on our front door. Alex walked us through the app, set up codes for the dog walker, and even paired it with our Ring system. Patient and knew the differences between like 4 brands of smart locks.',
      photo: 'https://randomuser.me/api/portraits/women/65.jpg',
    },
    {
      name: 'Eric P.',
      rating: 5,
      date: '2026-03-22',
      text: 'Yale smart lock installed and paired with Ring. Patient walkthrough 👍',
      photo: 'https://randomuser.me/api/portraits/men/52.jpg',
    },
    {
      name: 'Naomi L.',
      rating: 5,
      date: '2024-09-04',
      text: 'Was hesitant about smart locks but Nonstop made it easy. Schlage Encode installed + paired with Apple Home.',
    },
    {
      name: 'Marcus T.',
      rating: 5,
      date: '2026-01-25',
      text: 'I run an Airbnb and was tired of dealing with key handoffs. Nonstop installed a Yale Assure on the property, set up auto-generating codes that change between guests. Now I never touch a key. Game changer for short-term rentals.',
      photo: 'https://randomuser.me/api/portraits/men/72.jpg',
      location: 'Maryland Heights, MO',
    },
    {
      name: 'Olivia G.',
      rating: 5,
      date: '2025-12-30',
      text: "Just moved in and wanted keyless entry on both front and back doors. The tech installed two August smart locks, paired them with our Wi-Fi and our phones, and even helped us set up family member profiles. The training was so helpful, I'd have struggled doing this myself.",
    },
  ],
};
