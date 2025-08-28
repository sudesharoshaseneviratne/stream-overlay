import React from 'react';

interface CSSParticlesProps {
  particleCount?: number;
}

const CSSParticles: React.FC<CSSParticlesProps> = ({ particleCount = 100 }) => {
  const particles = Array.from({ length: particleCount }, (_, i) => i);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
      {particles.map((particle) => {
        const size = Math.random() * 3 + 1;
        const color = ['#ffffff', '#00ffff', '#ff00ff'][Math.floor(Math.random() * 3)];
        const left = Math.random() * 100;
        const animationDelay = Math.random() * 20;
        const animationDuration = 10 + Math.random() * 20;
        
        return (
          <div
            key={particle}
            className="absolute rounded-full animate-pulse"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              backgroundColor: color,
              boxShadow: `0 0 ${size * 3}px ${color}`,
              left: `${left}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${animationDuration}s linear infinite`,
              animationDelay: `${animationDelay}s`,
            }}
          />
        );
      })}
      
      {/* Additional floating particles with different animation */}
      {particles.slice(0, 50).map((particle) => {
        const size = Math.random() * 2 + 0.5;
        const color = ['#ffffff', '#00ffff', '#ff00ff'][Math.floor(Math.random() * 3)];
        const left = Math.random() * 100;
        const animationDelay = Math.random() * 15;
        const animationDuration = 8 + Math.random() * 12;
        
        return (
          <div
            key={`drift-${particle}`}
            className="absolute rounded-full"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              backgroundColor: color,
              boxShadow: `0 0 ${size * 4}px ${color}`,
              left: `${left}%`,
              top: `${Math.random() * 100}%`,
              animation: `drift ${animationDuration}s linear infinite`,
              animationDelay: `${animationDelay}s`,
              opacity: 0.8,
            }}
          />
        );
      })}
    </div>
  );
};

export default CSSParticles;