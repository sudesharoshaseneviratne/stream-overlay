/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'glitch': 'glitch 2s infinite',
        'glitch-after': 'glitch var(--after-duration) infinite linear alternate-reverse',
        'glitch-before': 'glitch var(--before-duration) infinite linear alternate-reverse',
        'float': 'float 6s infinite linear',
        'drift': 'drift 12s infinite linear',
        'border-flow-cw': 'border-flow-cw 3s infinite linear',
        'border-flow-ccw': 'border-flow-ccw 2s infinite linear',
      },
      keyframes: {
        glitch: {
          "0%": { "clip-path": "inset(20% 0 50% 0)" },
          "5%": { "clip-path": "inset(10% 0 60% 0)" },
          "10%": { "clip-path": "inset(15% 0 55% 0)" },
          "15%": { "clip-path": "inset(25% 0 35% 0)" },
          "20%": { "clip-path": "inset(30% 0 40% 0)" },
          "25%": { "clip-path": "inset(40% 0 20% 0)" },
          "30%": { "clip-path": "inset(10% 0 60% 0)" },
          "35%": { "clip-path": "inset(15% 0 55% 0)" },
          "40%": { "clip-path": "inset(25% 0 35% 0)" },
          "45%": { "clip-path": "inset(30% 0 40% 0)" },
          "50%": { "clip-path": "inset(20% 0 50% 0)" },
          "55%": { "clip-path": "inset(10% 0 60% 0)" },
          "60%": { "clip-path": "inset(15% 0 55% 0)" },
          "65%": { "clip-path": "inset(25% 0 35% 0)" },
          "70%": { "clip-path": "inset(30% 0 40% 0)" },
          "75%": { "clip-path": "inset(40% 0 20% 0)" },
          "80%": { "clip-path": "inset(20% 0 50% 0)" },
          "85%": { "clip-path": "inset(10% 0 60% 0)" },
          "90%": { "clip-path": "inset(15% 0 55% 0)" },
          "95%": { "clip-path": "inset(25% 0 35% 0)" },
          "100%": { "clip-path": "inset(30% 0 40% 0)" },
        },
        float: {
          '0%': { transform: 'translateY(0px) rotate(0deg)', opacity: '0.7' },
          '25%': { transform: 'translateY(-30px) rotate(90deg)', opacity: '1' },
          '50%': { transform: 'translateY(0px) rotate(180deg)', opacity: '0.7' },
          '75%': { transform: 'translateY(30px) rotate(270deg)', opacity: '1' },
          '100%': { transform: 'translateY(0px) rotate(360deg)', opacity: '0.7' },
        },
        drift: {
          '0%': { transform: 'translateX(0px) translateY(0px)' },
          '25%': { transform: 'translateX(20px) translateY(-15px)' },
          '50%': { transform: 'translateX(-10px) translateY(-30px)' },
          '75%': { transform: 'translateX(-20px) translateY(-15px)' },
          '100%': { transform: 'translateX(0px) translateY(0px)' },
        },
        'border-flow-cw': {
          '0%': { 'background-position': '0% 50%' },
          '100%': { 'background-position': '200% 50%' },
        },
        'border-flow-ccw': {
          '0%': { 'background-position': '200% 50%' },
          '100%': { 'background-position': '0% 50%' },
        },
      },
      dropShadow: {
        'neon-cyan': '0 0 10px #00ffff',
        'neon-pink': '0 0 10px #ff00ff',
        'neon-white': '0 0 10px rgba(255,255,255,0.8)',
      },
    },
  },
  plugins: [],
}