/** @type {import('tailwindcss').Config} */
// Paleta: verde salvia + crema + acentos coral. Brunch / cafetería de especialidad.
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#f4f8f4',
          100: '#dde9de',
          200: '#bcd3be',
          300: '#94b797',
          400: '#6f9c75',
          500: '#52796f',
          600: '#41615a',
          700: '#354f52',
          800: '#2a3e40',
          900: '#1a262a'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'serif']
      }
    }
  },
  plugins: []
};
