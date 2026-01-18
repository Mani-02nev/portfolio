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
        // Dark Purple Theme Colors
        primary: '#0d0221',      // Deep dark purple
        midnight: '#1a0b2e',     // Darker midnight purple
        navy: '#240046',         // Rich navy purple
        indigo: '#3c096c',       // Deep indigo
        storm: '#5a189a',        // Dark storm purple
        aqua: '#9d4edd',         // Rich purple
        mint: '#c77dff',         // Bright purple accent
        royal: '#7209b7',        // Royal purple
        lavender: '#9d4edd',     // Lavender purple
        fuchsia: '#e0aaff',      // Light fuchsia
        orange: '#f72585',       // Pink accent
        sand: '#d6995c',         // Sand
        coral: '#ea4884',        // Coral
        // Keep some compatibility
        charcoal: {
          900: '#0d0221',
          800: '#1a0b2e',
          700: '#240046',
        },
        emerald: {
          500: '#c77dff',
          400: '#9d4edd',
        },
        cyan: {
          500: '#9d4edd',
          400: '#c77dff',
        }
      },
      fontFamily: {
        sans: ['Funnel Display', 'Inter', 'SF Pro Display', 'Helvetica Neue', 'Arial', 'sans-serif'],
        display: ['Funnel Display', 'Poppins', 'system-ui', 'sans-serif'],
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'gradient-y': 'gradient-y 15s ease infinite',
        'gradient-xy': 'gradient-xy 15s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'orbit': 'orbit var(--duration) linear infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'glow': {
          '0%': { 'box-shadow': '0 0 5px rgba(199, 125, 255, 0.5), 0 0 10px rgba(199, 125, 255, 0.3)' },
          '100%': { 'box-shadow': '0 0 20px rgba(199, 125, 255, 0.8), 0 0 30px rgba(199, 125, 255, 0.5)' },
        },
        'orbit': {
          '0%': {
            transform: 'rotate(calc(var(--angle) * 1deg)) translateY(calc(var(--radius) * 1px)) rotate(calc(var(--angle) * -1deg))',
          },
          '100%': {
            transform: 'rotate(calc(var(--angle) * 1deg + 360deg)) translateY(calc(var(--radius) * 1px)) rotate(calc((var(--angle) * -1deg) - 360deg))',
          },
        },
      },
    },
  },
  plugins: [],
}
