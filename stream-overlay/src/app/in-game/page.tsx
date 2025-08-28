'use client';
import React from 'react';

export default function InGame() {
    return (
        <div className="w-screen h-screen" style={{ backgroundColor: 'transparent' }}>
            {/* Animated Border Container */}
            <div className="relative w-full h-full pointer-events-none">

                {/* Clockwise Flowing Border */}
                <div className="absolute inset-0">
                    {/* Top Border */}
                    <div
                        className="absolute top-0 left-0 w-full h-[2px] animate-border-flow-cw"
                        style={{
                            background: 'linear-gradient(90deg, transparent 0%, #00ffff 25%, #ff00ff 50%, #00ffff 75%, transparent 100%)',
                            backgroundSize: '300% 100%',
                        }}
                    />

                    {/* Right Border */}
                    <div
                        className="absolute top-0 right-0 w-[2px] h-full animate-border-flow-cw"
                        style={{
                            background: 'linear-gradient(180deg, transparent 0%, #00ffff 25%, #ff00ff 50%, #00ffff 75%, transparent 100%)',
                            backgroundSize: '100% 300%',
                            animationDelay: '0.75s'
                        }}
                    />

                    {/* Bottom Border */}
                    <div
                        className="absolute bottom-0 right-0 w-full h-[2px] animate-border-flow-cw"
                        style={{
                            background: 'linear-gradient(270deg, transparent 0%, #00ffff 25%, #ff00ff 50%, #00ffff 75%, transparent 100%)',
                            backgroundSize: '300% 100%',
                            animationDelay: '1.5s'
                        }}
                    />

                    {/* Left Border */}
                    <div
                        className="absolute bottom-0 left-0 w-[2px] h-full animate-border-flow-cw"
                        style={{
                            background: 'linear-gradient(0deg, transparent 0%, #00ffff 25%, #ff00ff 50%, #00ffff 75%, transparent 100%)',
                            backgroundSize: '100% 300%',
                            animationDelay: '2.25s'
                        }}
                    />
                </div>

                {/* Counter-Clockwise Flowing Border (Inner) */}
                <div className="absolute inset-[3px]">
                    {/* Top Border */}
                    <div
                        className="absolute top-0 left-0 w-full h-[1px] animate-border-flow-ccw opacity-70"
                        style={{
                            background: 'linear-gradient(90deg, transparent 0%, #ff00ff 25%, #00ffff 50%, #ff00ff 75%, transparent 100%)',
                            backgroundSize: '300% 100%',
                        }}
                    />

                    {/* Right Border */}
                    <div
                        className="absolute top-0 right-0 w-[1px] h-full animate-border-flow-ccw opacity-70"
                        style={{
                            background: 'linear-gradient(180deg, transparent 0%, #ff00ff 25%, #00ffff 50%, #ff00ff 75%, transparent 100%)',
                            backgroundSize: '100% 300%',
                            animationDelay: '1.5s'
                        }}
                    />

                    {/* Bottom Border */}
                    <div
                        className="absolute bottom-0 right-0 w-full h-[1px] animate-border-flow-ccw opacity-70"
                        style={{
                            background: 'linear-gradient(270deg, transparent 0%, #ff00ff 25%, #00ffff 50%, #ff00ff 75%, transparent 100%)',
                            backgroundSize: '300% 100%',
                            animationDelay: '1s'
                        }}
                    />

                    {/* Left Border */}
                    <div
                        className="absolute bottom-0 left-0 w-[1px] h-full animate-border-flow-ccw opacity-70"
                        style={{
                            background: 'linear-gradient(0deg, transparent 0%, #ff00ff 25%, #00ffff 50%, #ff00ff 75%, transparent 100%)',
                            backgroundSize: '100% 300%',
                            animationDelay: '0.5s'
                        }}
                    />
                </div>

            </div>

            {/* Content Area - Completely transparent for game overlay */}
            <div className="absolute inset-4 z-10">
                {/* This area is completely transparent for the game to show through */}
            </div>
        </div>
    );
}