import { useParams, Link } from 'react-router';
import { serviceData } from '../data/serviceData';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ServiceSEO from '../components/ServiceSEO';
import ServiceHero from '../components/service/ServiceHero';
import ServiceStrip from '../components/ServiceStrip';
import ServiceContent from '../components/service/ServiceContent';
import ServiceHowItWorks from '../components/service/ServiceHowItWorks';
import ServiceBenefits from '../components/service/ServiceBenefits';
import ServiceReviewsSection from '../components/service/ServiceReviewsSection';
import HowWeAreDifferent from '../components/HowWeAreDifferent';
import ServiceAreaLinks from '../components/service/ServiceAreaLinks';
import Guarantee from '../components/Guarantee';
import ServiceFAQ from '../components/service/ServiceFAQ';
import ServiceRelated from '../components/service/ServiceRelated';
import Contact from '../components/Contact';

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

  const relatedStripServices = service.relatedServiceSlugs
    .map((slug) => serviceData.find((s) => s.slug === slug))
    .filter((s): s is typeof serviceData[number] => Boolean(s))
    .map((s) => ({ slug: s.slug, label: s.name }));

  return (
    <>
      <ServiceSEO service={service} />
      <Navigation />
      <main>
        <ServiceHero service={service} />
        <ServiceStrip services={relatedStripServices} heading="Related Services" />
        <ServiceHowItWorks service={service} />
        <ServiceReviewsSection service={service} />
        <ServiceBenefits service={service} />
        <HowWeAreDifferent />
        <ServiceContent service={service} />
        <ServiceAreaLinks service={service} />
        <Guarantee />
        <ServiceFAQ service={service} />
        <ServiceRelated service={service} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
