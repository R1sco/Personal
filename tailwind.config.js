/** @type {import('tailwindcss').Config} */
module.exports = {
  safelist: [
    'text-red-500',
    'text-purple-500',
    'text-blue-500',
    'text-yellow-500',
    'border-red-500/30',
    'border-purple-500/30',
    'border-blue-500/30',
    'border-yellow-500/30',
    'hover:border-red-500/70',
    'hover:border-purple-500/70',
    'hover:border-blue-500/70',
    'hover:border-yellow-500/70',
  ],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};