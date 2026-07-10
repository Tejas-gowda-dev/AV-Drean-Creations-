import Hero from '../components/Hero';
import TrustBadges from '../components/TrustBadges';
import FeaturedFilm from '../components/FeaturedFilm';
import CraftVsCommodity from '../components/CraftVsCommodity';
import Services from '../components/Services';
import PortfolioPreview from '../components/PortfolioPreview';
import WeddingPhotographyPromo from '../components/WeddingPhotographyPromo';
import Pricing from '../components/Pricing';
import ConnectPortfolio from '../components/ConnectPortfolio';
import Testimonials from '../components/Testimonials';
import InstagramFeed from '../components/InstagramFeed';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import SEOHelper from '../components/SEOHelper';

interface HomeProps {
  onNavigate: (route: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const homeSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': 'AV Dream Creations',
    'image': 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=800',
    'telephone': '+91-9743644065',
    'email': 'avdream518@gmail.com',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': '98/2, 12th Main Rd, JC Nagar, Kurubarahalli, Kamala Nagar',
      'addressLocality': 'Bengaluru',
      'addressRegion': 'Karnataka',
      'postalCode': '560086',
      'addressCountry': 'IN'
    },
    'priceRange': '₹25000 - ₹150000',
    'areaServed': [
      { '@type': 'Place', 'name': 'Bangalore' },
      { '@type': 'Place', 'name': 'Mysore' },
      { '@type': 'Place', 'name': 'Mandya' },
      { '@type': 'Place', 'name': 'Tumkur' }
    ]
  };

  return (
    <div id="home-page-container">
      <SEOHelper
        title="Wedding Photographer in Bangalore | AV Dream Creations"
        description="AV Dream Creations offers wedding photography, cinematic wedding films, pre-wedding shoots, engagement photography, birthday events, and drone videography across Bangalore and Karnataka. Book your date today."
        schema={homeSchema}
      />

      {/* 1. Hero Section */}
      <Hero onNavigate={onNavigate} />

      

      {/* 2. Featured Wedding Film */}
      <FeaturedFilm />

      {/* 2.5. Craft Vs Commodity Philosophy Section */}
      <CraftVsCommodity />

      {/* 3. Trust Badges Bar */}
      <TrustBadges />

      {/* 5. Services Section */}
      <Services />

      {/* 6. Portfolio / Gallery Preview */}
      <PortfolioPreview />

      {/* 7. Wedding Photography Promo section */}
      <WeddingPhotographyPromo />

      {/* 7. Wedding Packages / Pricing
      <Pricing />
      */}

      {/* 8. Connect & Experience Section */}
      <ConnectPortfolio />

      {/* 9. Client Testimonials
      <Testimonials />
      */}

      {/* 10. Instagram Feed Section */}
      <InstagramFeed />

      {/* 11. Before/After Slider */}
      <BeforeAfterSlider />
    </div>
  );
}
