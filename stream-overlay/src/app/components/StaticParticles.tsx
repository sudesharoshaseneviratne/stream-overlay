'use client';
import React, { useEffect, useState } from 'react';

interface Particle {
  id: number;
  size: number;
  color: string;
  left: number;
  top: number;
  animationDelay: number;
  animationDuration: number;
  animationType: 'float' | 'drift';
}

const StaticParticles: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate particles only on client side to avoid hydration mismatch
    const colors = ['#ffffff', '#00ffff', '#ff00ff'];
    const newParticles: Particle[] = [];

    for (let i = 0; i < 200; i++) {
      newParticles.push({
        id: i,
        size: Math.random() * 3 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        left: Math.random() * 100,
        top: Math.random() * 100,
        animationDelay: Math.random() * 20,
        animationDuration: 10 + Math.random() * 20,
        animationType: i % 2 === 0 ? 'float' : 'drift',
      });
    }

    setParticles(newParticles);
  }, []);

  if (particles.length === 0) {
    return null; // Don't render anything until particles are generated
  }

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full animate-pulse"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            boxShadow: `0 0 ${particle.size * 3}px ${particle.color}`,
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            animation: `${particle.animationType} ${particle.animationDuration}s linear infinite`,
            animationDelay: `${particle.animationDelay}s`,
            opacity: 0.6,
          }}
        />
      ))}
    </div>
  );
};

export default StaticParticles;