/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#FFF9F3',
        blush: '#F8E6E0',
        'dusty-rose': '#D9A6A0',
        'muted-rose': '#B97878',
        champagne: '#E8D2B0',
        peach: '#F3C9B8',
        cocoa: '#493A36',
        beige: '#EFE2D8',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        serif2: ['"Cormorant Garamond"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
        script: ['"Parisienne"', 'cursive'],
      },
      boxShadow: {
        soft: '0 10px 40px -10px rgba(73, 58, 54, 0.15)',
        card: '0 8px 30px -8px rgba(185, 120, 120, 0.25)',
      },
      keyframes: {
        floatUp: {
          '0%': { transform: 'translateY(0) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '0.7' },
          '90%': { opacity: '0.5' },
          '100%': { transform: 'translateY(-110vh) rotate(180deg)', opacity: '0' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        floatUp: 'floatUp 14s linear infinite',
        shimmer: 'shimmer 2.5s linear infinite',
      },
    },
  },
  plugins: [],
}
