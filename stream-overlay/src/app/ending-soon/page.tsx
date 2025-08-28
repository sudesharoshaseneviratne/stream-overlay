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

      {/* Content */}
      <div className="relative z-[10] w-full h-full flex flex-col items-center justify-center text-center">
        <div className="flex flex-col items-center justify-center -space-y-4">
          <GlitchText
            speed={1}
            enableShadows={true}
            enableOnHover={false}
            className="font-mono uppercase tracking-wider text-[clamp(1.5rem,8vw,6rem)] leading-none italic"
          >
            ENDING
          </GlitchText>
          <GlitchText
            speed={1.2}
            enableShadows={true}
            enableOnHover={false}
            gradient={true}
            className="font-mono uppercase tracking-wider text-[clamp(3rem,15vw,12rem)] leading-none"
          >
            SOON
          </GlitchText>
        </div>
      </div>
    </div>
  );
};

export default StartSoon;