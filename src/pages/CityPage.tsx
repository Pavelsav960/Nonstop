import { useParams, Link } from 'react-router';
import { cityData } from '../data/cityData';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import CitySEO from '../components/CitySEO';
import CityHero from '../components/city/CityHero';
import ServiceStrip from '../components/ServiceStrip';
import CityReviewsSection from '../components/city/CityReviewsSection';
import HowWeAreDifferent from '../components/HowWeAreDifferent';
import CityServicesSection from '../components/city/CityServicesSection';
import CityAboutSection from '../components/city/CityAboutSection';
import CityLocalContextSection from '../components/city/CityLocalContextSection';
import Guarantee from '../components/Guarantee';
import CityNeighborhoodsSection from '../components/city/CityNeighborhoodsSection';
import CityFAQSection from '../components/city/CityFAQSection';
import Contact from '../components/Contact';

export default function CityPage() {
  const { citySlug } = useParams<{ citySlug: string }>();
  const city = cityData.find((c) => c.slug === citySlug);

  if (!city) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">City Not Found</h1>
          <Link to="/" className="text-primary-600 hover:text-primary-700 font-semibold">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <CitySEO city={city} />
      <Navigation />
      <main>
        <CityHero city={city} />
        <ServiceStrip />
        <CityReviewsSection city={city} />
        <HowWeAreDifferent />
        <CityServicesSection city={city} />
        <CityAboutSection city={city} />
        <CityLocalContextSection city={city} />
        <Guarantee />
        <CityNeighborhoodsSection city={city} />
        <CityFAQSection city={city} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
