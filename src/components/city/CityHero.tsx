import { useForm, ValidationError } from '@formspree/react';
import { motion } from 'framer-motion';
import { Phone, Star, ShieldCheck, Clock } from 'lucide-react';
import { BUSINESS } from '../../constants';
import type { CityData } from '../../data/cityData';

type Props = { city: CityData };

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

export default function CityHero({ city }: Props) {
  const [state, handleSubmit] = useForm('mbdqkgad');
  const isSubmitted = state.succeeded;

  return (
    <section id="home" className="hero-section relative bg-gray-900 pt-24 pb-16 md:pt-52 md:pb-16 overflow-hidden">
      {/* Dot pattern background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-[1.3fr_1fr] gap-8 lg:gap-12 items-start w-full max-w-full overflow-hidden">
            {/* LEFT: Value Proposition */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white w-full max-w-full overflow-hidden"
            >
              <h1 className="text-[2.25rem] sm:text-5xl md:text-6xl lg:text-[64px] font-bold mb-4 leading-[1.05]">
                <span className="md:whitespace-nowrap">Fast And Reliable</span>
                <br />
                <span className="text-primary-500">
                  Locksmith In<br />{city.name}
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-white/85 mb-6 leading-relaxed">
                Locked out or lost your keys in {city.name}?<br />
                We provide fast car, home, and business locksmith service.
              </p>

              {/* Average Arrival */}
              <div className="mb-4">
                <p className="text-xl sm:text-2xl md:text-[2.5rem] font-bold text-white inline underline decoration-primary-500 decoration-2 md:decoration-4 underline-offset-2 md:underline-offset-4 whitespace-nowrap">
                  Average Arrival: {city.responseTime.split('-')[0].trim().replace(/\D/g, '')} mins!
                </p>
              </div>

              {/* Trust bullets */}
              <div className="space-y-3 md:space-y-1.5 mb-8 pr-1">
                <FeatureRow icon={ShieldCheck} text={`Upfront Pricing, No Surprises`} />
                <FeatureRow icon={ShieldCheck} text={`Local Technicians Serving ${city.name}`} />
                <div className="flex items-center gap-3 md:gap-4">
                  <ShieldCheck className="h-9 w-9 md:h-11 md:w-11 text-primary-500 flex-shrink-0" strokeWidth={2} />
                  <p className="font-bold text-[15px] sm:text-lg md:text-[1.35rem] text-white">
                    5-Star Rated On Google
                  </p>
                </div>
              </div>

              {/* Phone CTA */}
              <a
                href={BUSINESS.phoneTel}
                className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white text-lg font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl tracking-wide mb-4 w-full md:w-auto"
              >
                <Phone className="h-5 w-5 sm:h-6 sm:w-6 mr-2 sm:mr-3 animate-pulse flex-shrink-0" />
                <span>Call Now: {BUSINESS.phone}</span>
              </a>

              {/* Mobile availability indicator */}
              <div className="flex md:hidden items-center gap-2 justify-center">
                <motion.div
                  className="w-3 h-3 bg-green-500 rounded-full"
                  animate={{ scale: [1, 1.5, 1], opacity: [1, 0.6, 1] }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
                />
                <span className="text-green-400 font-semibold text-sm">
                  Available In {city.name} Now
                </span>
              </div>
            </motion.div>

            {/* RIGHT: Form card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="w-full max-w-full overflow-hidden"
            >
              <div className="bg-white rounded-2xl shadow-2xl p-5 sm:p-8 md:p-10">
                <div className="text-center mb-4">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                    24/7 Locksmith<br />Service in {city.name}
                  </h2>
                </div>

                {isSubmitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                    <Clock className="h-12 w-12 mx-auto mb-2 text-green-600" />
                    <h3 className="text-lg font-bold text-green-700">Request Received!</h3>
                    <p className="text-green-700 mt-2">We'll call you back shortly. For emergencies, call {BUSINESS.phone}.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <input type="hidden" name="city" value={city.name} />
                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-3">
                      <input required type="text" name="name" placeholder="Your Name *"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" />
                      <div className="mt-3 md:mt-0">
                        <input required type="tel" name="phone" placeholder="Phone Number *"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" />
                      </div>
                    </div>
                    <div className="hidden md:block">
                      <input type="email" name="email" placeholder="Email Address"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" />
                    </div>
                    <select required name="service" defaultValue=""
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white text-gray-900">
                      <option value="" disabled>Select Service *</option>
                      <option value="Car Lockout">Car Lockout</option>
                      <option value="House Lockout">House Lockout</option>
                      <option value="Commercial Lockout">Commercial Lockout</option>
                      <option value="Emergency Locksmith">Emergency Locksmith</option>
                      <option value="Broken Key Extraction">Broken Key Extraction</option>
                      <option value="Lock Rekey">Lock Rekey</option>
                      <option value="Car Key Replacement">Car Key Replacement</option>
                      <option value="Key Fob Programming">Key Fob Programming</option>
                      <option value="Ignition Repair">Ignition Repair</option>
                      <option value="Lock Installation & Replacement">Lock Installation & Replacement</option>
                      <option value="Smart Lock Installation">Smart Lock Installation</option>
                      <option value="Safe Opening & Repair">Safe Opening & Repair</option>
                      <option value="Other">Other Locksmith Service</option>
                    </select>
                    <div className="hidden md:block">
                      <input type="text" name="address" placeholder={`Address in ${city.name} (optional)`}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" />
                    </div>
                    <textarea name="message" rows={2} placeholder="Tell us about your situation (optional)"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none" />
                    <ValidationError prefix="Form" field="form" errors={state.errors} className="text-red-600 text-xs" />
                    <button type="submit" disabled={state.submitting}
                      className="w-full bg-red-600 hover:bg-red-700 disabled:bg-gray-400 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl disabled:transform-none text-lg tracking-wide">
                      {state.submitting ? 'Sending...' : 'GET HELP NOW'}
                    </button>
                    <p className="text-center text-xs text-gray-500 mt-4 md:hidden">
                      By submitting, you agree to be contacted by phone.
                    </p>
                  </form>
                )}

                {/* Rated Top Locksmith - desktop only */}
                <div className="hidden md:flex md:flex-col md:items-center mt-8 text-center">
                  <p className="text-[15px] lg:text-base font-bold text-gray-900 mb-2 underline decoration-gray-900 decoration-2 underline-offset-2 whitespace-nowrap">
                    Rated Top Locksmith Company In {city.name}
                  </p>
                  <div className="flex items-center justify-center gap-3 mt-1">
                    <a href={BUSINESS.gbpUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center hover:opacity-80 transition-opacity" aria-label="View Google reviews">
                      <svg className="h-8 w-8" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                      </svg>
                    </a>
                    <a href={BUSINESS.gbpUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-px hover:opacity-80 transition-opacity" aria-label="View 5-star reviews">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-6 w-6 text-yellow-400 fill-yellow-400" />
                      ))}
                    </a>
                    <span className="text-base font-semibold text-gray-700">({BUSINESS.reviewCount}+ Happy Clients)</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

const FeatureRow = ({ icon: Icon, text }: { icon: typeof ShieldCheck; text: string }) => (
  <div className="flex items-center gap-3 md:gap-4">
    <Icon className="h-9 w-9 md:h-11 md:w-11 text-primary-500 flex-shrink-0" strokeWidth={2} />
    <p className="font-bold text-[15px] sm:text-lg md:text-[1.35rem] text-white">{text}</p>
  </div>
);

// Silence unused-import warning when scrollTo isn't used elsewhere
void scrollTo;
