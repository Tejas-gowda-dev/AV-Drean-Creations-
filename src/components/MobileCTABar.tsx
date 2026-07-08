import { Phone } from 'lucide-react';

export default function MobileCTABar() {
  const phoneNumber = '919743644065';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent("Hi, I'm interested in wedding photography.")}`;

  return (
    <div
      id="mobile-sticky-cta"
      className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-gray-100 px-4 py-2.5 flex gap-3 md:hidden shadow-[0_-8px_24px_rgba(0,0,0,0.05)]"
    >
      <a
        id="mobile-cta-call"
        href={`tel:+919743644065`}
        className="flex-1 bg-[#1a1a1a] text-white font-bold text-xs uppercase tracking-wider rounded-sm flex items-center justify-center gap-2 h-12 active:bg-neutral-800 transition-colors"
      >
        <Phone className="w-4 h-4" />
        Call Now
      </a>
      <a
        id="mobile-cta-whatsapp"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 bg-brand-gradient text-white font-bold text-xs uppercase tracking-wider rounded-sm flex items-center justify-center gap-2 h-12 active:bg-brand-gradient-hover transition-colors"
      >
        <svg 
          viewBox="0 0 16 16" 
          className="w-4 h-4 fill-current text-white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.69-4.98c-.202-.101-1.202-.593-1.387-.66-.185-.067-.32-.101-.456.101-.135.2-.524.66-.642.793-.119.133-.238.15-.44.05-.201-.101-.849-.313-1.616-.997-.597-.533-1.001-1.192-1.118-1.393-.118-.2-.013-.308.088-.408.09-.089.201-.233.301-.35.1-.117.135-.198.201-.33.067-.133.033-.25-.017-.35-.05-.101-.456-1.1-.625-1.506-.164-.398-.333-.344-.456-.35-.118-.006-.254-.007-.39-.007a.72.72 0 0 0-.522.242c-.18.2-.687.671-.687 1.637 0 .965.705 1.897.804 2.03.1.133 1.386 2.115 3.357 2.966.469.203.837.325 1.124.417.47.15 1.001.083 1.378.027.42-.063 1.202-.493 1.372-.945.171-.452.171-.84.12-.92-.05-.08-.184-.132-.387-.233z"/>
        </svg>
        WhatsApp Us
      </a>
    </div>
  );
}
