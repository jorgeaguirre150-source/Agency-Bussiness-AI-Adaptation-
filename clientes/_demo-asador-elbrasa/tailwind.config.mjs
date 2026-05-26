/** @type {import('tailwindcss').Config} */
// Paleta: marrón cuero + dorado oscuro + crema. Asador rústico-elegante.
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#fdf6e3',
          100: '#fae8b8',
          200: '#f5d785',
          300: '#e9b252',
          400: '#c98c2a',
          500: '#8b4513',
          600: '#6b3410',
          700: '#4d250b',
          800: '#321806',
          900: '#1a0c03'
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
