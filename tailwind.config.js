/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      "cornflower": "#5c95ff",
      "electric-blue": "#8af3ff",
      "celtic-blue": "#4472ca",
      "snow": "#fcf7f8",
      "burnt-sienna": "#e26d5a",
      "rich-black": "#040f0f",
      "midnight-green": "#0b5563",
      "midnight-green2": "#19535f",
      "mindaro": "#d2f898",
      "jade": "#00a676",
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
