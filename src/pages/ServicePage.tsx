import { useParams, Link } from 'react-router';
import { serviceData } from '../data/serviceData';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ServiceSEO from '../components/ServiceSEO';
import ServiceHero from '../components/service/ServiceHero';
import ServiceContent from '../components/service/ServiceContent';
import ServiceBenefits from '../components/service/ServiceBenefits';
import ServiceHowItWorks from '../components/service/ServiceHowItWorks';
import ServiceFAQ from '../components/service/ServiceFAQ';
import ServiceRelated from '../components/service/ServiceRelated';
import ServiceAreaLinks from '../components/service/ServiceAreaLinks';
import ServiceCTA from '../components/service/ServiceCTA';

export default function ServicePage() {
  const { serviceSlug } = useParams<{ serviceSlug: string }>();
  const service = serviceData.find((s) => s.slug === serviceSlug);

  if (!service) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="flex items-center justify-center pt-40 pb-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Service Not Found</h1>
            <p className="text-gray-600 mb-6">The service you are looking for does not exist.</p>
            <div className="flex gap-4 justify-center">
              <Link to="/services" className="text-primary-600 hover:text-primary-700 font-semibold">
                View All Services
              </Link>
              <Link to="/" className="text-primary-600 hover:text-primary-700 font-semibold">
                Return to Home
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen animate-fade-in">
      <ServiceSEO service={service} />
      <Navigation />

      <nav aria-label="Breadcrumb" className="bg-gray-100 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li>
              <Link to="/" className="hover:text-primary-600 transition-colors">Home</Link>
            </li>
            <li className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <Link to="/services" className="hover:text-primary-600 transition-colors">Services</Link>
            </li>
            <li className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="font-medium text-gray-900">{service.name}</span>
            </li>
          </ol>
        </div>
      </nav>

      <main>
        <article itemScope itemType="https://schema.org/Service">
          <meta itemProp="serviceType" content={service.name} />
          <meta itemProp="provider" content="Nonstop Lock & Key" />

          <ServiceHero service={service} />
          <ServiceHowItWorks />
          <ServiceContent service={service} />
          <ServiceBenefits service={service} />
          <ServiceAreaLinks service={service} />
          <ServiceFAQ service={service} />
          <ServiceRelated service={service} />
          <ServiceCTA service={service} />
        </article>
      </main>

      <Footer />
    </div>
  );
}
