/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // 🎨 Fun Theme Colors
        primary: {
          light: '#60A5FA',  // Baby blue
          DEFAULT: '#3B82F6', // Nice blue
          dark: '#2563EB',   // Deep blue
        },
        secondary: {
          light: '#FCD34D',  // Sunny yellow
          DEFAULT: '#F59E0B', // Warm orange
          dark: '#D97706',   // Deep orange
        },
        accent: {
          light: '#34D399',  // Mint green
          DEFAULT: '#10B981', // Fresh green
          dark: '#059669',   // Forest green
        },
      },
      borderRadius: {
        '4xl': '2rem',
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      boxShadow: {
        'fun': '0 4px 14px 0 rgba(59, 130, 246, 0.2)',
        'fun-hover': '0 6px 20px 0 rgba(59, 130, 246, 0.3)',
      },
    },
  },
  plugins: [],
};