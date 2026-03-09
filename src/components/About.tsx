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
              Nonstop Lock & Key is your reliable 24/7 locksmith service in St. Louis. Whether you're locked out of your home, need new locks installed, or require emergency automotive locksmith services, we're here to help day or night.
            </p>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              Our experienced team of licensed locksmiths provides fast, professional service with a 30-minute average response time. We use the latest tools and techniques to ensure your security needs are met with precision and care.
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
