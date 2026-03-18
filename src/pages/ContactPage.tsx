import { useState, FormEvent } from 'react';
import { Link } from 'react-router';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { BUSINESS } from '../constants';
import { serviceData } from '../data/serviceData';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        serviceType: '',
        message: '',
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const popularServices = serviceData.slice(0, 6);

  return (
    <>
      <Helmet>
        <title>Contact Nonstop Lock &amp; Key | 24/7 Locksmith St. Louis | {BUSINESS.phone}</title>
        <meta
          name="description"
          content={`Contact ${BUSINESS.name} for 24/7 locksmith services in St. Louis, MO. Call ${BUSINESS.phone} or email ${BUSINESS.email}. Free quotes, fast response, no hidden fees. Available 24/7/365.`}
        />
        <link rel="canonical" href={`${BUSINESS.url}/contact`} />

        {/* Open Graph */}
        <meta property="og:title" content={`Contact ${BUSINESS.name} | 24/7 Locksmith St. Louis`} />
        <meta property="og:description" content={`Reach ${BUSINESS.name} anytime. Call ${BUSINESS.phone} for emergency locksmith service or request a free quote online. Serving St. Louis & surrounding areas 24/7.`} />
        <meta property="og:url" content={`${BUSINESS.url}/contact`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={BUSINESS.logo} />
        <meta property="og:site_name" content={BUSINESS.name} />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`Contact ${BUSINESS.name} | 24/7 Locksmith St. Louis`} />
        <meta name="twitter:description" content={`Call ${BUSINESS.phone} for 24/7 locksmith services. Free quotes, fast response, no hidden fees.`} />
        <meta name="twitter:image" content={BUSINESS.logo} />

        {/* Geo Tags */}
        <meta name="geo.region" content={BUSINESS.region} />
        <meta name="geo.placename" content={`${BUSINESS.city}, ${BUSINESS.state}`} />
        <meta name="geo.position" content={`${BUSINESS.lat};${BUSINESS.lng}`} />
        <meta name="ICBM" content={`${BUSINESS.lat}, ${BUSINESS.lng}`} />

        {/* JSON-LD Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            '@id': `${BUSINESS.url}/#business`,
            name: BUSINESS.name,
            legalName: BUSINESS.legalName,
            url: BUSINESS.url,
            logo: BUSINESS.logo,
            image: BUSINESS.logo,
            telephone: BUSINESS.phoneRaw,
            email: BUSINESS.email,
            priceRange: BUSINESS.priceRange,
            address: {
              '@type': 'PostalAddress',
              addressLocality: BUSINESS.city,
              addressRegion: BUSINESS.state,
              addressCountry: 'US',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: BUSINESS.lat,
              longitude: BUSINESS.lng,
            },
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: BUSINESS.phoneRaw,
              contactType: 'customer service',
              areaServed: 'US',
              availableLanguage: 'English',
              hoursAvailable: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                opens: '00:00',
                closes: '23:59',
              },
            },
            sameAs: [BUSINESS.gbpUrl],
            openingHours: 'Mo-Su 00:00-23:59',
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: BUSINESS.ratingValue,
              reviewCount: BUSINESS.reviewCount,
              bestRating: '5',
              worstRating: '1',
            },
          })}
        </script>
      </Helmet>

      <Navigation />

      <main>
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="bg-gray-100 pt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ol className="flex items-center space-x-2 text-sm text-gray-600">
              <li>
                <Link to="/" className="hover:text-primary-600 transition-colors">Home</Link>
              </li>
              <li>
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </li>
              <li>
                <span className="text-gray-900 font-medium">Contact</span>
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900 py-16 sm:py-24">
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              Contact {BUSINESS.name}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto">
              Available 24 hours a day, 7 days a week, 365 days a year. Reach out for a free quote or emergency locksmith service in {BUSINESS.city} and surrounding areas.
            </p>
          </div>
        </section>

        {/* Two-Column Layout: Contact Info + Form */}
        <section className="py-16 sm:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
              {/* LEFT: Contact Info Cards + Map */}
              <div>
                <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg mb-6 sm:mb-8">
                  <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6">Contact Information</h2>

                  <div className="space-y-4 sm:space-y-6">
                    {/* Phone */}
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div className="ml-3 sm:ml-4">
                        <p className="text-xs sm:text-sm font-medium text-gray-500">Phone</p>
                        <a href={BUSINESS.phoneTel} className="text-base sm:text-lg text-gray-900 hover:text-primary-600 font-semibold transition-colors">
                          {BUSINESS.phone}
                        </a>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="ml-3 sm:ml-4">
                        <p className="text-xs sm:text-sm font-medium text-gray-500">Email</p>
                        <a href={`mailto:${BUSINESS.email}`} className="text-base sm:text-lg text-gray-900 hover:text-primary-600 break-all transition-colors">
                          {BUSINESS.email}
                        </a>
                      </div>
                    </div>

                    {/* Service Area */}
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div className="ml-3 sm:ml-4">
                        <p className="text-xs sm:text-sm font-medium text-gray-500">Service Area</p>
                        <p className="text-base sm:text-lg text-gray-900">{BUSINESS.city} &amp; 20+ Surrounding Cities</p>
                      </div>
                    </div>

                    {/* Hours */}
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="ml-3 sm:ml-4">
                        <p className="text-xs sm:text-sm font-medium text-gray-500">Hours</p>
                        <p className="text-base sm:text-lg text-gray-900">24/7/365<br />Always Available</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Google Maps Embed */}
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199412.27235498!2d-90.48648!3d38.6270!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6d8c00414bcad66e!2sNonstop%20Lock%20%26%20Key!5e0!3m2!1sen!2sus!4v1700000000000"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`${BUSINESS.name} - St. Louis Locksmith Location on Google Maps`}
                  />
                </div>
              </div>

              {/* RIGHT: Contact Form */}
              <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg h-fit">
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6">Send Us a Message</h2>

                {isSubmitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                    <svg className="w-12 h-12 sm:w-16 sm:h-16 text-green-500 mx-auto mb-3 sm:mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Thank You!</h3>
                    <p className="text-sm sm:text-base text-gray-600">Your message has been received. We'll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors text-base"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors text-base"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors text-base"
                        placeholder="(555) 123-4567"
                      />
                    </div>

                    <div>
                      <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-2">
                        Service Type *
                      </label>
                      <select
                        id="serviceType"
                        name="serviceType"
                        required
                        value={formData.serviceType}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors text-base"
                      >
                        <option value="">Select a service type</option>
                        <option value="emergency">Emergency Lockout</option>
                        <option value="residential">Residential</option>
                        <option value="commercial">Commercial</option>
                        <option value="automotive">Automotive</option>
                        <option value="rekeying">Lock Rekeying</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none text-base"
                        placeholder="Tell us about your locksmith needs..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-all transform hover:scale-105 shadow-lg text-base sm:text-lg"
                    >
                      Send Message
                    </button>

                    <p className="text-sm text-gray-500 text-center mt-3">
                      For emergencies, call us directly at{' '}
                      <a href={BUSINESS.phoneTel} className="text-primary-600 font-semibold hover:text-primary-700 transition-colors">
                        {BUSINESS.phone}
                      </a>{' '}
                      for fastest response.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Why Contact Us Section */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Why Contact Us</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We make it easy to get the locksmith help you need
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Free Quotes */}
              <div className="bg-gray-50 rounded-xl p-6 sm:p-8 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-5">
                  <svg className="w-7 h-7 sm:w-8 sm:h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Free Quotes</h3>
                <p className="text-gray-600">Upfront pricing with no surprises. Get a free estimate before any work begins.</p>
              </div>

              {/* Fast Response */}
              <div className="bg-gray-50 rounded-xl p-6 sm:p-8 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-5">
                  <svg className="w-7 h-7 sm:w-8 sm:h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Response</h3>
                <p className="text-gray-600">20-30 minute average response time. We get to you quickly when you need us most.</p>
              </div>

              {/* No Hidden Fees */}
              <div className="bg-gray-50 rounded-xl p-6 sm:p-8 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-5">
                  <svg className="w-7 h-7 sm:w-8 sm:h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No Hidden Fees</h3>
                <p className="text-gray-600">The price we quote is the price you pay. Transparent, honest service every time.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links Section */}
        <section className="py-16 sm:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Popular Services</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Explore our most requested locksmith services
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularServices.map((service) => (
                <Link
                  key={service.slug}
                  to={`/services/${service.slug}`}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all hover:-translate-y-1 group"
                >
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors mb-2">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">{service.shortDescription}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-gray-900">From {service.startingPrice}</span>
                    <span className="inline-flex items-center text-primary-600 text-sm font-medium group-hover:text-primary-700 transition-colors">
                      Learn more
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-r from-primary-700 to-primary-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Need a Locksmith Right Now?
            </h2>
            <p className="text-lg sm:text-xl text-primary-100 mb-8">
              Don't wait. Call us for immediate 24/7 locksmith service in {BUSINESS.city} and surrounding areas.
            </p>
            <a
              href={BUSINESS.phoneTel}
              className="inline-flex items-center px-8 sm:px-10 py-4 sm:py-5 bg-white text-primary-700 font-bold rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl text-lg sm:text-xl mb-6"
            >
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call {BUSINESS.phone}
            </a>
            <div className="flex flex-wrap items-center justify-center gap-6 text-primary-100 text-sm">
              <Link to="/about" className="hover:text-white transition-colors underline underline-offset-2">About Us</Link>
              <Link to="/reviews" className="hover:text-white transition-colors underline underline-offset-2">Customer Reviews</Link>
              <Link to="/services" className="hover:text-white transition-colors underline underline-offset-2">Our Services</Link>
              <Link to="/service-areas" className="hover:text-white transition-colors underline underline-offset-2">Service Areas</Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
