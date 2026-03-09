import Navigation from '../components/Navigation';
import HomeSEO from '../components/HomeSEO';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import ServiceAreas from '../components/ServiceAreas';
import Reviews from '../components/Reviews';
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
        <Services />
        <About />
        <ServiceAreas />
        <Reviews />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
