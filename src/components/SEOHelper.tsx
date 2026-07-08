import { useEffect } from 'react';

interface SEOHelperProps {
  title: string;
  description: string;
  schema?: object;
}

export default function SEOHelper({ title, description, schema }: SEOHelperProps) {
  useEffect(() => {
    // Update title
    document.title = title;

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // Inject JSON-LD Schema
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
  }, [title, description, schema]);

  return null;
}
