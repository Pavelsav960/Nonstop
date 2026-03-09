const faqs = [
  {
    question: 'Do you provide 24/7 emergency locksmith services in St. Louis?',
    answer: 'Yes! We offer 24/7 emergency locksmith services throughout St. Louis and surrounding areas. Whether you\'re locked out at 3am in Clayton or need emergency service in Chesterfield on a Sunday, we\'re available around the clock with an average 30-minute response time.',
  },
  {
    question: 'What areas of St. Louis do you serve?',
    answer: 'We serve all of St. Louis and the surrounding metro area, including Clayton, University City, Webster Groves, Kirkwood, Chesterfield, Ballwin, Florissant, Creve Coeur, and more. If you\'re in the greater St. Louis area, we can help!',
  },
  {
    question: 'How much does a locksmith cost in St. Louis?',
    answer: 'Pricing varies based on the service needed. We offer competitive rates with transparent pricing - no hidden fees. Emergency lockouts typically start around $75-$150, while lock rekeying and installation vary by complexity. Call (314) 532-1112 for a free quote specific to your needs.',
  },
  {
    question: 'Are you licensed and insured in Missouri?',
    answer: 'Absolutely! We are fully licensed and insured to operate in St. Louis and throughout Missouri. Our technicians are certified professionals with years of experience providing quality locksmith services.',
  },
  {
    question: 'Can you make new car keys in St. Louis?',
    answer: 'Yes! We provide mobile automotive locksmith services throughout St. Louis. We can cut and program new car keys, key fobs, and transponder keys for most vehicle makes and models right at your location.',
  },
  {
    question: 'How quickly can you respond to a lockout in St. Louis?',
    answer: 'Our average response time in the St. Louis metro area is 30 minutes or less. We prioritize emergency lockout situations and have mobile units strategically positioned throughout Clayton, Chesterfield, University City, and other St. Louis neighborhoods for rapid response.',
  },
  {
    question: 'Do you rekey locks for new homeowners in St. Louis?',
    answer: 'Yes, we highly recommend rekeying your locks when moving into a new home in St. Louis. This ensures you\'re the only one with keys to your property. We can rekey all your locks to work with a single key for added convenience.',
  },
  {
    question: 'What types of locks can you install for St. Louis businesses?',
    answer: 'We install a wide range of commercial locks for St. Louis businesses, including high-security locks, electronic access control systems, panic bars, master key systems, and more. We work with businesses throughout downtown St. Louis, Clayton\'s business district, and all commercial areas.',
  },
];

export default function FAQ() {
  return (
    <>
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Common questions about our St. Louis locksmith services
            </p>
          </div>

          <div className="space-y-6" itemScope itemType="https://schema.org/FAQPage">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-shadow"
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
              >
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3" itemProp="name">
                  {faq.question}
                </h3>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <p className="text-gray-700 leading-relaxed" itemProp="text">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 bg-primary-600 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-3">Still Have Questions?</h3>
            <p className="mb-6">
              Our St. Louis locksmith team is here to help 24/7
            </p>
            <a
              href="tel:+13145321112"
              className="inline-block px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
            >
              Call (314) 532-1112 Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
