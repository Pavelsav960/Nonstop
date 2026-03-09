import { Link } from 'react-router';

const stats = [
  { number: '24/7', label: 'Availability' },
  { number: '30min', label: 'Response Time' },
  { number: '1000+', label: 'Happy Customers' },
  { number: '100%', label: 'Licensed & Insured' },
];

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Trusted Locksmith Serving St. Louis, MO
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">
              Nonstop Lock & Key is a fully licensed, 24/7 locksmith service trusted by homeowners, drivers, and businesses across the St. Louis area. With a 30-minute average response time covering{' '}
              <Link to="/service-areas" className="text-primary-600 hover:text-primary-700 font-medium">20 cities across the St. Louis metro</Link>, we're always just a call away when you need help most — day or night, weekends and holidays included.
            </p>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              From{' '}
              <Link to="/services/car-lockout" className="text-primary-600 hover:text-primary-700 font-medium">car lockouts</Link> and{' '}
              <Link to="/services/car-key-replacement" className="text-primary-600 hover:text-primary-700 font-medium">key replacement</Link> to{' '}
              <Link to="/services/lock-rekey" className="text-primary-600 hover:text-primary-700 font-medium">lock rekeying</Link> and{' '}
              <Link to="/services/smart-lock-installation" className="text-primary-600 hover:text-primary-700 font-medium">smart lock installation</Link>, our licensed technicians handle it all with upfront pricing and no hidden fees.
            </p>
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-3 sm:p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-600 mb-1 sm:mb-2">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm md:text-base text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0">
            <div className="relative h-80 sm:h-96 lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/210334/pexels-photo-210334.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Licensed St. Louis locksmith installing high-security door locks for residential and commercial properties in Missouri"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            <div className="absolute -bottom-4 sm:-bottom-6 left-4 right-4 sm:left-auto sm:right-auto sm:-left-6 bg-primary-600 text-white p-4 sm:p-8 rounded-xl shadow-xl sm:max-w-xs">
              <p className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">Licensed & Insured</p>
              <p className="text-xs sm:text-sm opacity-90">
                Fully certified and insured for your peace of mind
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
