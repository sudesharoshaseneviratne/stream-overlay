import React, { useEffect, useRef } from 'react';

interface SimpleParticlesProps {
  particleCount?: number;
  colors?: string[];
  speed?: number;
  size?: number;
  opacity?: number;
}

const SimpleParticles: React.FC<SimpleParticlesProps> = ({
  particleCount = 150,
  colors = ['#ffffff', '#00ffff', '#ff00ff'],
  speed = 0.5,
  size = 2,
  opacity = 0.6,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    interface Particle {
      x: number;
      y: number;
      z: number;
      vx: number;
      vy: number;
      vz: number;
      color: string;
      size: number;
      opacity: number;
    }

    const particles: Particle[] = [];

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random() * 1000,
        vx: (Math.random() - 0.5) * speed,
        vy: (Math.random() - 0.5) * speed,
        vz: (Math.random() - 0.5) * speed * 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: size + Math.random() * size,
        opacity: opacity * (0.3 + Math.random() * 0.7),
      });
    }

    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.z += particle.vz;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
        if (particle.z < 0) particle.z = 1000;
        if (particle.z > 1000) particle.z = 0;

        // Calculate size based on z-depth
        const scale = (1000 - particle.z) / 1000;
        const currentSize = Math.max(0.5, particle.size * scale);
        const currentOpacity = Math.max(0.1, particle.opacity * scale);

        // Draw particle with enhanced visibility
        ctx.save();
        ctx.globalAlpha = currentOpacity;
        
        // Draw glow effect
        ctx.shadowColor = particle.color;
        ctx.shadowBlur = currentSize * 4;
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, currentSize, 0, Math.PI * 2);
        ctx.fill();
        
        // Draw bright center
        ctx.shadowBlur = 0;
        ctx.globalAlpha = Math.min(1, currentOpacity * 2);
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, currentSize * 0.5, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.restore();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, [particleCount, colors, speed, size, opacity]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: -1 }}
    />
  );
};

export default SimpleParticles;