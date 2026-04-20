import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { AboutUs } from './pages/AboutUs';
import { Contact } from './pages/Contact';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { WebsiteDevelopment } from './pages/services/WebsiteDevelopment';
import { MobileAppDevelopment } from './pages/services/MobileAppDevelopment';
import { Cloud } from './pages/services/Cloud';
import { DevOps } from './pages/services/DevOps';
import { Testing } from './pages/services/Testing';
import { AIServices } from './pages/services/AIServices';
import { DigitalMarketing } from './pages/services/DigitalMarketing';
import { Recruitment } from './pages/services/Recruitment';
import { Training } from './pages/Training';
import { Updates } from './pages/Gallery';
import { Clients } from './pages/Clients';
import { Products } from './pages/Products';
import { SocialMedia } from './pages/SocialMedia';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="clients" element={<Clients />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="training" element={<Training />} />
          <Route path="updates" element={<Updates />} />
          <Route path="products" element={<Products />} />
          <Route path="social-media" element={<SocialMedia />} />
          
          {/* Services Routes */}
          <Route path="services">
            <Route path="website-development" element={<WebsiteDevelopment />} />
            <Route path="mobile-app-development" element={<MobileAppDevelopment />} />
            <Route path="cloud" element={<Cloud />} />
            <Route path="devops" element={<DevOps />} />
            <Route path="testing" element={<Testing />} />
            <Route path="ai-services" element={<AIServices />} />
            <Route path="digital-marketing" element={<DigitalMarketing />} />
            <Route path="recruitment" element={<Recruitment />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
