import React from 'react';

export const Logo = ({ className = '' }: { className?: string }) => (
  <svg
    viewBox="0 0 880 300"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label="iVISION ADS"
    dir="ltr"
    style={{ direction: 'ltr' }}
  >
    <g fill="currentColor">
      <circle cx="59" cy="54" r="21" />
      <rect x="38" y="91" width="42" height="137" rx="4" />
      <path d="M105 78h47l42 150h-47L105 78Z" />
      <path d="M241 78h-47l-42 150h47l42-150Z" />
      <text x="270" y="183" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="146" letterSpacing="-8">ISION</text>
    </g>
    <path d="M198 76 248 43l21 48-31 17-40-32Z" fill="#2563eb" />
    <text x="480" y="276" textAnchor="middle" fill="#2563eb" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="60" letterSpacing="18">ADS</text>
  </svg>
);
