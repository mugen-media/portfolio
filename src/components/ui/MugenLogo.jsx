import React from 'react';

export const MugenLogo = ({ className = "h-10 w-auto" }) => (
  <svg viewBox="0 0 300 300" className={className} xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)">
    {/* Red Sun */}
    <circle cx="150" cy="100" r="60" fill="#FF0000" />
    
    {/* Black Geometric Shapes (Pagoda/Mountain Style) */}
    <g fill="#000000">
       {/* Top Chevron */}
      <path d="M150 70 L210 120 L190 120 L150 90 L110 120 L90 120 Z" />
      {/* Middle Chevron */}
      <path d="M150 120 L210 170 L190 170 L150 140 L110 170 L90 170 Z" />
       {/* Base */}
      <path d="M90 180 H210 V220 H170 V200 H130 V220 H90 V180 Z" />
    </g>
  </svg>
);