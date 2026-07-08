import { useState, useEffect, useRef } from 'react';
import { Award, Camera, Heart, Star, Map } from 'lucide-react';

export default function TrustBadges() {
  const [counts, setCounts] = useState({
    years: 0,
    weddings: 0,
    clients: 0,
    rating: 0,
  });

  const sectionRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          // Animate counts
          const duration = 1500; // ms
          const start = performance.now();

          const animate = (timestamp: number) => {
            const elapsed = timestamp - start;
            const progress = Math.min(elapsed / duration, 1);

            // Easing function (easeOutQuad)
            const ease = progress * (2 - progress);

            setCounts({
              years: Math.floor(ease * 6),
              weddings: Math.floor(ease * 250),
              clients: Math.floor(ease * 1000),
              rating: parseFloat((ease * 4.9).toFixed(1)),
            });

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCounts({
                years: 6,
                weddings: 250,
                clients: 1000,
                rating: 4.9,
              });
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  const badges = [
    {
      icon: Award,
      value: `${counts.years}+`,
      label: 'Years Experience',
      sub: 'Of fine-art storytelling'
    },
    {
      icon: Camera,
      value: `${counts.weddings}+`,
      label: 'Weddings Documented',
      sub: 'Across all communities'
    },
    {
      icon: Heart,
      value: `${counts.clients}+`,
      label: 'Happy Families',
      sub: 'Eternal emotional bonds'
    },
    {
      icon: Star,
      value: counts.rating === 0 ? '4.9' : counts.rating.toString(),
      label: 'Google Rating',
      sub: 'Based on 450+ detailed reviews'
    },
    {
      icon: Map,
      value: 'All',
      label: 'Karnataka Served',
      sub: 'Free travel within Bangalore'
    }
  ];

  return (
    <div
      id="trust-badges-bar"
      ref={sectionRef}
      className="bg-neutral-950 border-y border-neutral-900 text-white py-12 px-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
          {badges.map((badge, idx) => {
            const IconComponent = badge.icon;
            return (
              <div
                key={idx}
                id={`trust-badge-${idx}`}
                className="space-y-2 p-3 md:p-4 rounded-sm hover:bg-white/5 transition-colors group border border-transparent hover:border-neutral-900"
              >
                <div className="inline-flex items-center justify-center p-3 rounded-sm bg-gold/10 text-gold mb-2 group-hover:scale-105 group-hover:bg-gold group-hover:text-white transition-all duration-300">
                  <IconComponent className="w-5 h-5" />
                </div>
                <div className="font-serif text-2xl md:text-3xl font-light tracking-tight text-white">
                  {badge.value}
                </div>
                <div className="text-[10px] uppercase tracking-[0.2em] font-bold font-sans text-neutral-300">
                  {badge.label}
                </div>
                <div className="text-[10px] text-neutral-500 font-sans">
                  {badge.sub}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
