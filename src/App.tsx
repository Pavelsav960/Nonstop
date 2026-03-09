import { BrowserRouter, Routes, Route } from 'react-router';
import HomePage from './pages/HomePage';
import CityPage from './pages/CityPage';
import ServiceAreasPage from './pages/ServiceAreasPage';
import ServicesPage from './pages/ServicesPage';
import ServicePage from './pages/ServicePage';
import NotFound from './pages/NotFound';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:serviceSlug" element={<ServicePage />} />
        <Route path="/service-areas" element={<ServiceAreasPage />} />
        <Route path="/locksmith/:citySlug" element={<CityPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
