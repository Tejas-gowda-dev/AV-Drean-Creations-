import { useEffect } from 'react';

interface SEOHelperProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
  schema?: object;
}

export default function SEOHelper({
  title,
  description,
  keywords,
  ogImage = 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200',
  ogType = 'website',
  canonicalUrl,
  schema
}: SEOHelperProps) {
  useEffect(() => {
    // 1. Update Title tag
    document.title = title;

    // Helper to find or create standard meta tags by name
    const setMetaByName = (name: string, content: string) => {
      let element = document.querySelector(`meta[name="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('name', name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Helper to find or create OpenGraph property meta tags
    const setMetaByProperty = (property: string, content: string) => {
      let element = document.querySelector(`meta[property="${property}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('property', property);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 2. Standard Meta Tags
    setMetaByName('description', description);
    
    const defaultKeywords = 'wedding photography Bangalore, cinematic wedding films Karnataka, pre-wedding shoot, candid photographers Bangalore, traditional wedding photography, AV Dream Creations, best wedding films Bangalore';
    setMetaByName('keywords', keywords || defaultKeywords);
    setMetaByName('robots', 'index, follow');

    // 3. OpenGraph Social Media Meta Tags
    const currentUrl = canonicalUrl || window.location.href;
    setMetaByProperty('og:title', title);
    setMetaByProperty('og:description', description);
    setMetaByProperty('og:image', ogImage);
    setMetaByProperty('og:url', currentUrl);
    setMetaByProperty('og:type', ogType);
    setMetaByProperty('og:site_name', 'AV Dream Creations');

    // 4. Twitter Card Meta Tags
    setMetaByName('twitter:card', 'summary_large_image');
    setMetaByName('twitter:title', title);
    setMetaByName('twitter:description', description);
    setMetaByName('twitter:image', ogImage);

    // 5. Canonical Link Tag
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', currentUrl);

    // 6. Inject JSON-LD Schema Markup
    const existingSchemaScript = document.getElementById('seo-schema-markup');
    if (existingSchemaScript) {
      existingSchemaScript.remove();
    }

    if (schema) {
      const script = document.createElement('script');
      script.id = 'seo-schema-markup';
      script.type = 'application/ld+json';
      script.innerHTML = JSON.stringify(schema);
      document.head.appendChild(script);
    }

    return () => {
      // Clean up schema on unmount to prevent multiple schema blocks
      const existing = document.getElementById('seo-schema-markup');
      if (existing) {
        existing.remove();
      }
    };
  }, [title, description, keywords, ogImage, ogType, canonicalUrl, schema]);

  return null;
}
