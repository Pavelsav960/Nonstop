import Navigation from '../components/Navigation';
import HomeSEO from '../components/HomeSEO';
import Hero from '../components/Hero';
import ServiceStrip from '../components/ServiceStrip';
import Services from '../components/Services';
import About from '../components/About';
import Guarantee from '../components/Guarantee';
import ServiceAreas from '../components/ServiceAreas';
import Reviews from '../components/Reviews';
import HowWeAreDifferent from '../components/HowWeAreDifferent';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <>
      <HomeSEO />
      <Navigation />
      <main>
        <Hero />
        <ServiceStrip />
        <Reviews />
        <HowWeAreDifferent />
        <Services />
        <About />
        <Guarantee />
        <ServiceAreas />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
