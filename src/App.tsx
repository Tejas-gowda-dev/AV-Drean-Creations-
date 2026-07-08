import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppFloating from './components/WhatsAppFloating';
import MobileCTABar from './components/MobileCTABar';

// Pages
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import FilmsPage from './pages/FilmsPage';
import GalleryPage from './pages/GalleryPage';
import PricingPage from './pages/PricingPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<string>('home');

  // Parse location hash on mount and on changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      const path = hash.split('?')[0];
      if (!path || path === '#/' || path === '#/home') {
        setCurrentRoute('home');
      } else if (path === '#/about') {
        setCurrentRoute('about');
      } else if (path === '#/films') {
        setCurrentRoute('films');
      } else if (path === '#/gallery') {
        setCurrentRoute('gallery');
      } else if (path === '#/pricing') {
        setCurrentRoute('pricing');
      } else if (path === '#/contact') {
        setCurrentRoute('contact');
      } else {
        setCurrentRoute('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    // Initialize once on mount
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const changeRoute = (route: string) => {
    setCurrentRoute(route);
    if (route === 'home') {
      window.location.hash = '#/home';
    } else {
      window.location.hash = `#/${route}`;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Render proper subpage
  const renderPage = () => {
    switch (currentRoute) {
      case 'home':
        return <Home onNavigate={changeRoute} />;
      case 'about':
        return <AboutPage />;
      case 'films':
        return <FilmsPage />;
      case 'gallery':
        return <GalleryPage />;
      case 'pricing':
        return <PricingPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <Home onNavigate={changeRoute} />;
    }
  };

  return (
    <div id="av-app-root" className="min-h-screen bg-white text-neutral-900 font-sans flex flex-col justify-between">
      {/* Dynamic Header & Sticky Navigation */}
      <Navbar currentRoute={currentRoute} onChangeRoute={changeRoute} />

      {/* Primary Main Landmark */}
      <main id="main-content-landmark" className="flex-grow">
        {renderPage()}
      </main>

      {/* Global Footer */}
      <Footer onNavigate={changeRoute} />

      {/* Global Interactive Elements */}
      <WhatsAppFloating />
      <MobileCTABar />
    </div>
  );
}
