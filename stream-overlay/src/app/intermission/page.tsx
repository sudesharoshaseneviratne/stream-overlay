'use client';
import React from 'react';
import Image from 'next/image';
import Lightning from '../components/Lightning';
import GlitchText from '../components/GlitchText';
import SimpleParticles from '../components/SimpleParticles';

const Intermission: React.FC = () => {
  return (
    <div className="relative w-screen h-screen bg-black overflow-hidden font-sans">
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

      {/* Main Layout */}
      <div className="relative z-[10] w-full h-full flex flex-col">

        {/* Header - Intermission Title */}
        <div className="flex items-center justify-center py-8">
          <GlitchText
            speed={1.2}
            enableShadows={true}
            enableOnHover={false}
            gradient={true}
            className="font-mono uppercase tracking-wider text-[clamp(2rem,8vw,4rem)] leading-none"
          >
            INTERMISSION
          </GlitchText>
        </div>

        {/* Content Area */}
        <div className="flex-1 flex gap-8 px-8 pb-6">

          {/* Left Gap */}
          <div className="w-16"></div>

          {/* Left Column - Face Cam and Live Chat */}
          <div className="w-80 flex flex-col gap-4">
            
            {/* Face Cam */}
            <div className="aspect-video">
              <div className="bg-gray-900/80 backdrop-blur-sm border border-cyan-400/30 rounded-lg h-full flex items-center justify-center">
                <div className="text-6xl">
                  👤
                </div>
              </div>
            </div>

            {/* Live Chat */}
            <div className="flex-1">
              <div className="bg-gray-900/80 backdrop-blur-sm border border-cyan-400/30 rounded-lg p-4 h-full">
                <div className="flex items-center gap-2 mb-4 pb-2 border-b border-cyan-400/20">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                  <h3 className="text-cyan-400 font-mono text-lg font-bold uppercase tracking-wider">Live Chat</h3>
                </div>

                {/* Chat Messages Area */}
                <div className="flex-1 overflow-y-auto space-y-3 text-sm">
                  {/* Chat messages will be populated here */}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Game Capture Image */}
          <div className="flex-1 flex items-center justify-center">
            <div className="w-full max-w-4xl">
              <div
                className="relative border-2 border-gray-600/40 overflow-hidden shadow-2xl"
                style={{ aspectRatio: '16/9' }}
              >
                <Image 
                  src="/looking-for-game-capture.jpg" 
                  alt="Looking for game capture"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Gap */}
          <div className="w-16"></div>

        </div>
      </div>
    </div>
  );
};

export default Intermission;