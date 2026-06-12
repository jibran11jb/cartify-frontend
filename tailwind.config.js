/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00DC82',
          50: '#f0fdf8',
          100: '#dcfcef',
          200: '#bbf7df',
          300: '#86efca',
          400: '#4adead',
          500: '#00DC82',
          600: '#00b86c',
          700: '#00925a',
          800: '#00744a',
          900: '#00603e',
        },
        secondary: {
          DEFAULT: '#0F172A',
        },
        accent: {
          DEFAULT: '#14B8A6',
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14B8A6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
        dark: {
          DEFAULT: '#0B1220',
          surface: '#111827',
          card: '#1a2235',
          border: '#1e2d45',
          muted: '#374151',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #0B1220 0%, #0d1f35 50%, #0B1220 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(0, 220, 130, 0.1) 0%, rgba(20, 184, 166, 0.05) 100%)',
        'glow-gradient': 'radial-gradient(ellipse at center, rgba(0, 220, 130, 0.15) 0%, transparent 70%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'float-slow': 'float 8s ease-in-out 1s infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'slide-left': 'slideLeft 30s linear infinite',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'count-up': 'countUp 2s ease-out',
        'gradient-shift': 'gradientShift 8s ease infinite',
        'spin-slow': 'spin 8s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 220, 130, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(0, 220, 130, 0.6)' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      boxShadow: {
        'glow': '0 0 30px rgba(0, 220, 130, 0.3)',
        'glow-lg': '0 0 60px rgba(0, 220, 130, 0.4)',
        'glow-accent': '0 0 30px rgba(20, 184, 166, 0.3)',
        'card': '0 4px 24px rgba(0, 0, 0, 0.12)',
        'card-hover': '0 20px 60px rgba(0, 0, 0, 0.2)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255,255,255,0.1)',
      },
      backdropBlur: {
        xs: '2px',
      },
      screens: {
        'xs': '475px',
      },
    },
  },
  plugins: [],
}
