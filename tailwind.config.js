/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4F46E5',
        secondary: '#4338CA',
        accent: '#F59E0B',
        sage: {
          50: '#f4f6e8',
          100: '#e6e9d2',
          200: '#d1d7b0',
          300: '#b8c287',
          400: '#a3af68',
          500: '#899650',
          600: '#6d783f',
          700: '#525a2f',
          800: '#363c1f',
          900: '#1b1e10',
        },
        neutral: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          800: '#1E293B',
          900: '#0F172A'
        }
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
      }
    },
  },
  plugins: [],
}