'use client';
import React from 'react';
import Lightning from '../components/Lightning';
import GlitchText from '../components/GlitchText';
import SimpleParticles from '../components/SimpleParticles';

const StartSoon: React.FC = () => {
  return (
    <div className="relative w-screen h-screen bg-black overflow-hidden flex items-center justify-center font-sans">
      {/* Particles Background - Above background, behind lightning */}
      <div className="absolute inset-0 w-full h-full z-[1]">
        <SimpleParticles
          particleCount={200}
          colors={['#ffffff', '#00ffff', '#ff00ff']}
          speed={0.8}
          size={3}
          opacity={0.8}
        />
      </div>

      {/* Lightning Background */}
      <div className="absolute inset-0 w-full h-full z-[2] opacity-80 mix-blend-screen">
        <Lightning hue={180} xOffset={0} speed={1.2} intensity={0.8} size={1.5} />
        <Lightning hue={300} xOffset={0} speed={0.8} intensity={0.6} size={1.2} />
      </div>
    </div>
  );
};

export default StartSoon;