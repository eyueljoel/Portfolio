/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        ink: '#07090f',
        accent: {
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
        },
      },
      keyframes: {
        aurora: {
          '0%,100%': { transform: 'translate3d(0,0,0) scale(1)' },
          '33%': { transform: 'translate3d(8%,-6%,0) scale(1.15)' },
          '66%': { transform: 'translate3d(-6%,8%,0) scale(0.95)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'fade-up': {
          '0%': { opacity: 0, transform: 'translateY(24px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        'pulse-ring': {
          '0%': { boxShadow: '0 0 0 0 rgba(52,211,153,.6)' },
          '100%': { boxShadow: '0 0 0 12px rgba(52,211,153,0)' },
        },
      },
      animation: {
        aurora: 'aurora 18s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 4s linear infinite',
        marquee: 'marquee 30s linear infinite',
        'fade-up': 'fade-up .8s cubic-bezier(.16,1,.3,1) both',
        'pulse-ring': 'pulse-ring 1.8s ease-out infinite',
      },
      boxShadow: {
        'glow-blue': '0 0 30px rgba(99,102,241,0.25)',
        'glow-purple': '0 0 30px rgba(192,132,252,0.25)',
        'card': '0 4px 24px rgba(0,0,0,0.06)',
        'card-hover': '0 12px 40px rgba(0,0,0,0.18)',
        'glass': '0 8px 32px rgba(0,0,0,0.12)',
      },
    },
  },
  plugins: [],
}
