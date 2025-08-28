import { FC, CSSProperties } from "react";

interface GlitchTextProps {
  children: string;
  speed?: number;
  enableShadows?: boolean;
  enableOnHover?: boolean;
  className?: string;
  gradient?: boolean;
}

const GlitchText: FC<GlitchTextProps> = ({
  children,
  speed = 0.5,
  enableShadows = true,
  enableOnHover = false,
  className = "",
  gradient = false,
}) => {
  const baseTextClass = gradient 
    ? "bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent"
    : "text-white";

  const baseClasses = `${baseTextClass} font-black relative mx-auto select-none cursor-pointer`;

  const shadowStyles = enableShadows ? {
    textShadow: '2px 0 #00ffff, -2px 0 #ff00ff, 0 2px #ffff00, 0 -2px #ff0080'
  } : {};

  const glitchKeyframes = `
    @keyframes glitch-1 {
      0%, 100% { clip-path: inset(20% 0 50% 0); }
      10% { clip-path: inset(10% 0 60% 0); }
      20% { clip-path: inset(30% 0 40% 0); }
      30% { clip-path: inset(40% 0 20% 0); }
      40% { clip-path: inset(25% 0 35% 0); }
      50% { clip-path: inset(15% 0 55% 0); }
      60% { clip-path: inset(35% 0 25% 0); }
      70% { clip-path: inset(45% 0 15% 0); }
      80% { clip-path: inset(5% 0 65% 0); }
      90% { clip-path: inset(50% 0 10% 0); }
    }
    @keyframes glitch-2 {
      0%, 100% { clip-path: inset(40% 0 30% 0); }
      15% { clip-path: inset(25% 0 45% 0); }
      25% { clip-path: inset(60% 0 10% 0); }
      35% { clip-path: inset(5% 0 70% 0); }
      45% { clip-path: inset(35% 0 35% 0); }
      55% { clip-path: inset(50% 0 20% 0); }
      65% { clip-path: inset(15% 0 60% 0); }
      75% { clip-path: inset(70% 0 5% 0); }
      85% { clip-path: inset(30% 0 40% 0); }
      95% { clip-path: inset(10% 0 65% 0); }
    }
  `;

  return (
    <>
      <style jsx>{glitchKeyframes}</style>
      <div className={`${baseClasses} ${className} relative`}>
        <span className="relative z-20" style={shadowStyles}>
          {children}
        </span>
        {!enableOnHover && (
          <>
            <span 
              className="absolute top-0 left-0 font-black" 
              style={{
                color: '#ff00ff',
                left: '3px',
                animation: `glitch-1 ${speed * 3}s infinite linear alternate-reverse`,
                zIndex: 10
              }}
            >
              {children}
            </span>
            <span 
              className="absolute top-0 left-0 font-black" 
              style={{
                color: '#00ffff',
                left: '-3px',
                animation: `glitch-2 ${speed * 2}s infinite linear alternate-reverse`,
                zIndex: 10
              }}
            >
              {children}
            </span>
          </>
        )}
      </div>
    </>
  );
};

export default GlitchText;