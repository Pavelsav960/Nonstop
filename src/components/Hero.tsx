import { useState, FormEvent } from 'react';
import { BUSINESS } from '../constants';
import { serviceData } from '../data/serviceData';

export default function Hero() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // TODO: Replace with Formspree endpoint
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', phone: '', service: '', message: '' });
    }, 4000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="home" className="relative pt-20 min-h-screen flex items-center">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/4291/door-green-closed-lock.jpg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Text Content */}
          <div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-4 sm:mb-6 leading-[1.1]">
              24/7 Emergency Locksmith
              <span className="block text-primary-400">St. Louis, MO</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 mb-6 sm:mb-8 leading-relaxed">
              Locked out of your home, car, or business? {BUSINESS.name} provides fast, affordable locksmith services across St. Louis and surrounding cities. Get a free quote in minutes.
            </p>

            <ul className="space-y-2 mb-6 sm:mb-8">
              <li className="flex items-center space-x-2 text-white">
                <svg className="w-5 h-5 text-primary-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold text-sm">15-30 Min Response Time</span>
              </li>
              <li className="flex items-center space-x-2 text-white">
                <svg className="w-5 h-5 text-primary-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold text-sm">Licensed & Insured</span>
              </li>
              <li className="flex items-center space-x-2 text-white">
                <svg className="w-5 h-5 text-primary-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold text-sm">No Hidden Fees, Upfront Pricing</span>
              </li>
            </ul>

            <div className="flex justify-center sm:justify-start">
              <a
                href={BUSINESS.phoneTel}
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-all transform hover:scale-105 shadow-lg text-base sm:text-lg"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Now: {BUSINESS.phone}
              </a>
            </div>
          </div>

          {/* Right: Quote Form */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* Form Header */}
            <div className="bg-primary-600 px-6 sm:px-8 py-4">
              <h2 className="text-lg sm:text-xl font-bold text-white text-center">24/7 Service Available</h2>
            </div>

            <div className="p-6 sm:p-8">
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <svg className="w-12 h-12 text-green-500 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Message Sent!</h3>
                  <p className="text-sm text-gray-600">We'll get back to you shortly. For emergencies, call {BUSINESS.phone}.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900 placeholder-gray-400 text-base"
                  />
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900 placeholder-gray-400 text-base"
                  />
                  <select
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900 text-base"
                  >
                    <option value="">Select a Service</option>
                    {serviceData.map((s) => (
                      <option key={s.slug} value={s.name}>{s.name}</option>
                    ))}
                    <option value="Other">Other</option>
                  </select>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Tell us about your situation (optional)"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900 placeholder-gray-400 resize-none text-base"
                  />
                  <button
                    type="submit"
                    className="w-full px-6 py-4 bg-primary-600 text-white font-bold rounded-lg hover:bg-primary-700 transition-all transform hover:scale-[1.02] shadow-lg text-lg"
                  >
                    Get My Free Quote
                  </button>
                  <p className="text-xs text-gray-400 text-center">
                    For emergencies, call <a href={BUSINESS.phoneTel} className="text-primary-600 font-semibold">{BUSINESS.phone}</a> directly
                  </p>
                </form>
              )}
            </div>

            {/* Form Footer - Rating */}
            <div className="bg-gray-50 px-6 sm:px-8 py-4 border-t border-gray-100">
              <div className="flex flex-col items-center gap-1.5">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm font-semibold text-gray-700">Rated Top Locksmith Company in St. Louis</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
