import React from 'react';

interface LogoProps {
  isScrolled?: boolean;
  showTagline?: boolean;
  className?: string;
}

export default function Logo({ isScrolled = false, showTagline = false, className = '' }: LogoProps) {
  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div className="flex items-center gap-1.5 md:gap-2">
        {/* Camera Icon with Pink-to-Purple Gradient */}
        <div className="relative -mr-1 md:-mr-1.5 flex-shrink-0">
          <svg viewBox="0 0 100 85" className="w-11 h-9 md:w-13 md:h-11 select-none">
            <defs>
              <linearGradient id="logo-camera-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8265AF" /> {/* Purple on bottom-left */}
                <stop offset="100%" stopColor="#D17B92" /> {/* Rose Pink on top-right */}
              </linearGradient>
            </defs>
            {/* Camera outer body */}
            <path
              d="M 22 25
                 C 22 22, 24 20, 27 20
                 L 35 20
                 C 37 15, 40 13, 44 13
                 L 56 13
                 C 60 13, 63 15, 65 20
                 L 73 20
                 C 76 20, 78 22, 78 25
                 L 78 68
                 C 78 72, 76 74, 73 74
                 L 27 74
                 C 24 74, 22 72, 22 68
                 Z"
              fill="none"
              stroke="url(#logo-camera-gradient)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Camera lens outer ring */}
            <circle
              cx="50"
              cy="47"
              r="17"
              fill="none"
              stroke="url(#logo-camera-gradient)"
              strokeWidth="3.5"
            />
            {/* Camera lens filled center */}
            <circle
              cx="50"
              cy="47"
              r="11"
              fill="url(#logo-camera-gradient)"
            />
            {/* Cursive "A" inside the lens */}
            <text
              x="50"
              y="51.5"
              textAnchor="middle"
              fill="white"
              fontSize="14"
              fontFamily='"Alex Brush", "Great Vibes", cursive'
              className="select-none pointer-events-none"
            >
              A
            </text>
          </svg>
        </div>

        {/* Brand Text Group */}
        <div className="flex flex-col text-left">
          {/* Cursive Handwriting typography */}
          <span 
            className={`font-signature text-3xl md:text-[34px] leading-none tracking-normal block -mb-1 select-none ${
              isScrolled ? 'text-neutral-950 font-medium' : 'text-white'
            }`}
            style={{ 
              fontFamily: '"Alex Brush", "Great Vibes", "Pinyon Script", cursive',
              textShadow: isScrolled ? 'none' : '0 1px 3px rgba(0,0,0,0.3)'
            }}
          >
            Av Dream
          </span>
          {/* CREATIONS in spaced clean sans-serif */}
          <span 
            className={`font-sans font-bold text-[10px] md:text-xs tracking-[0.38em] uppercase block leading-none select-none ${
              isScrolled ? 'text-neutral-900' : 'text-white'
            }`}
          >
            CREATIONS
          </span>
        </div>
      </div>

      {/* Center Tagline "WEDDING PHOTOGRAPHY AND VIDEOGRAPHY" */}
      {showTagline && (
        <div className="w-full text-center mt-2">
          <span 
            className={`text-[7.5px] md:text-[9.5px] font-sans font-semibold tracking-[0.24em] uppercase block leading-none select-none ${
              isScrolled ? 'text-neutral-500' : 'text-neutral-400'
            }`}
          >
            WEDDING PHOTOGRAPHY AND VIDEOGRAPHY
          </span>
        </div>
      )}
    </div>
  );
}
