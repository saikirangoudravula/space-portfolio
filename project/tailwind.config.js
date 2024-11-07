/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'bat-yellow': '#ffd600',
        'bat-gray': '#1a1a1a',
        'bat-black': '#0a0a0a',
      },
      animation: {
        'bat-signal': 'batSignal 3s infinite',
        'fade-in-bat': 'fadeInBat 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glowPulse 3s infinite',
        'slide-in': 'slideIn 0.6s ease-out forwards',
        'rotate-in': 'rotateIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
        'city-lights': 'cityLights 4s infinite',
      },
      boxShadow: {
        'bat': '0 0 30px rgba(255, 214, 0, 0.1)',
      },
    },
  },
  plugins: [],
};