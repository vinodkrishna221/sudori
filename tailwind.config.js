/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Indian-inspired colors
        'saffron': {
          50: '#fefdf4',
          100: '#fef7e0',
          200: '#fdecc4',
          300: '#fbdb9b',
          400: '#f7c471',
          500: '#f4a950',
          600: '#e58e2c',
          700: '#c06f1f',
          800: '#9a5520',
          900: '#7c461e',
        },
        'terracotta': {
          50: '#fdf4f1',
          100: '#fbe6df',
          200: '#f6cfc0',
          300: '#efab94',
          400: '#e67e61',
          500: '#dc5a3a',
          600: '#c94329',
          700: '#a73424',
          800: '#8a2d24',
          900: '#722823',
        },
        'marigold': {
          50: '#fff9ed',
          100: '#fef0d4',
          200: '#fcdea8',
          300: '#f9c571',
          400: '#f5a238',
          500: '#f28516',
          600: '#e36a0c',
          700: '#bc4f0c',
          800: '#963e12',
          900: '#7a3512',
        },
        'heritage-blue': {
          50: '#eff8ff',
          100: '#dbedfe',
          200: '#c0e1fd',
          300: '#95d0fb',
          400: '#63b5f7',
          500: '#3f97f2',
          600: '#2b7ce6',
          700: '#2366d3',
          800: '#2252ab',
          900: '#214787',
        },
        'warm-gray': {
          50: '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#78716c',
          600: '#57534e',
          700: '#44403c',
          800: '#292524',
          900: '#1c1917',
        }
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'body': ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'pulse-glow': 'pulseGlow 2s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(244, 169, 80, 0.4)' },
          '50%': { boxShadow: '0 0 0 10px rgba(244, 169, 80, 0)' },
        },
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, rgba(244, 169, 80, 0.1) 0%, rgba(220, 90, 58, 0.1) 100%)',
        'mandala-pattern': "url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" width=\"60\" height=\"60\" viewBox=\"0 0 60 60\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23f4a950\" fill-opacity=\"0.05\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"4\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
      },
    },
  },
  plugins: [],
}