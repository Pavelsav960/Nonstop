import { BUSINESS } from '../../constants';

export default function ServiceHowItWorks() {
  return (
    <section className="py-16 sm:py-24 bg-white" aria-labelledby="how-it-works-heading">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 id="how-it-works-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Getting help from Nonstop Lock & Key is simple. Three steps and your problem is solved.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary-600">1</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
            <p className="text-gray-600">
              Call {BUSINESS.phone} any time, day or night. Describe your situation and we will give you an upfront price before dispatching.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary-600">2</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">We Arrive Fast</h3>
            <p className="text-gray-600">
              A mobile locksmith arrives at your location in 20-30 minutes, fully equipped to handle the job on the spot.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary-600">3</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Problem Solved</h3>
            <p className="text-gray-600">
              We resolve your lock or key issue quickly and professionally. You pay the price we quoted. No surprises.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
