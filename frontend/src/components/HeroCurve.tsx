import React from 'react';

interface HeroCurveProps {
  fillColor: string;
  className?: string;
}

const HeroCurve: React.FC<HeroCurveProps> = ({ fillColor, className = "" }) => {
  return (
    <div className={`absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none ${className}`}>
      <svg
        className="relative block w-full h-[50px] md:h-[80px]"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        {/* 
          Path explanation for Convex (Bulging Downward) Effect:
          We draw the "Next Section" shape which sits on top of the hero bottom.
          To make the hero bulge DOWN, the next section must curve DOWN in the middle.
          M0,0 (Top Left) -> Q600,80 (Curve Down) -> 1200,0 (Top Right) -> L1200,120 -> L0,120 -> Z
          This creates a white 'V' shape dip, allowing the hero bg (behind/above) to visually bulge down.
        */}
        <path
          d="M0,0 Q600,80 1200,0 L1200,120 L0,120 Z"
          fill={fillColor}
        />
      </svg>
    </div>
  );
};

export default HeroCurve;