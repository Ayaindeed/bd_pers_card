/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'guinness-black': '#0F0F0F',
        'guinness-cream': '#F4F1E8',
        'matrix-green': '#00FF41',
        'scorpio-red': '#8B0000',
        'dublin-blue': '#003B71',
      },
      fontFamily: {
        'mono': ['JetBrains Mono', 'Consolas', 'Monaco', 'monospace'],
        'serif': ['Playfair Display', 'Georgia', 'serif'],
      },
      animation: {
        'matrix-rain': 'matrix-rain 2s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 4s infinite',
      },
      keyframes: {
        'matrix-rain': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
      },
    },
  },
  plugins: [],
}