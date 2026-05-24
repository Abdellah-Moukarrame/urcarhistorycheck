/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          50:  '#faf5eb',
          100: '#f2e4c6',
          200: '#e6c98d',
          300: '#daa84e',
          400: '#c9963a',
          500: '#a67a2a',
          600: '#856220',
          700: '#644a18',
          800: '#433210',
          900: '#1c1508',
        },
        surface: {
          DEFAULT: '#16161c',
          2: '#1c1c24',
          3: '#222230',
          elevated: '#111116',
        },
        dark: {
          DEFAULT: '#0c0c10',
          900: '#0c0c10',
          800: '#111116',
          700: '#16161c',
          600: '#1c1c24',
          500: '#222230',
        },
        muted: '#9d9baf',
        'text-primary': '#f0ede8',
        'text-secondary': '#9d9baf',
        'text-tertiary': '#656378',
        success: '#3ecf8e',
        danger: '#e5484d',
        warning: '#f5a623',
      },
      borderRadius: {
        'sm': '8px',
        'md': '12px',
        'lg': '16px',
        'xl': '20px',
        '2xl': '24px',
      },
      boxShadow: {
        'glow': '0 4px 24px rgba(201, 150, 58, 0.2)',
        'glow-lg': '0 8px 40px rgba(201, 150, 58, 0.25)',
        'card': '0 4px 12px rgba(0, 0, 0, 0.4)',
        'card-hover': '0 8px 32px rgba(0, 0, 0, 0.5)',
      },
      animation: {
        'fade-up': 'fadeUp 0.5s ease forwards',
        'fade-in': 'fadeIn 0.5s ease forwards',
        'pulse-gentle': 'pulse-gentle 2s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'pulse-gentle': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
      },
    },
  },
  plugins: [],
}
