import { BrowserRouter, Routes, Route } from 'react-router';
import HomePage from './pages/HomePage';
import CityPage from './pages/CityPage';
import ServiceAreasPage from './pages/ServiceAreasPage';
import ServicesPage from './pages/ServicesPage';
import ServicePage from './pages/ServicePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ReviewsPage from './pages/ReviewsPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import NotFound from './pages/NotFound';
import ScrollToTop from './components/ScrollToTop';
import StickyCallBar from './components/StickyCallBar';
import AnalyticsTracker from './components/AnalyticsTracker';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AnalyticsTracker />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:serviceSlug" element={<ServicePage />} />
        <Route path="/service-areas" element={<ServiceAreasPage />} />
        <Route path="/locksmith/:citySlug" element={<CityPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:postSlug" element={<BlogPostPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <StickyCallBar />
    </BrowserRouter>
  );
}
