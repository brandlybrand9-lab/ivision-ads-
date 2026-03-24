import React from 'react';

export const Logo = ({ className = '' }: { className?: string }) => {
  return (
    <svg 
      viewBox="0 0 850 320" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      dir="ltr"
      style={{ direction: 'ltr' }}
    >
      {/* i */}
      <circle cx="65" cy="45" r="18" fill="currentColor" />
      <rect x="47" y="80" width="36" height="120" fill="currentColor" />
      
      {/* V with arrow */}
      <path d="M100 50 L140 50 L175 120 L200 70 L175 55 L235 25 L255 95 L225 100 L175 200 Z" fill="currentColor" />
      
      {/* ISION */}
      <text x="260" y="200" fill="currentColor" fontFamily="Montserrat, Arial, sans-serif" fontWeight="900" fontSize="165" letterSpacing="-4">ISION</text>
      
      {/* ADS */}
      <text x="440" y="295" fill="currentColor" fontFamily="Montserrat, Arial, sans-serif" fontWeight="800" fontSize="85" letterSpacing="12" textAnchor="middle">ADS</text>
    </svg>
  );
};

