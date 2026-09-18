module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        sand: '#f5e7c7',
        clay: '#b87642',
        ink: '#1b1d1f',
        oasis: '#245c57',
        gold: '#c9a565'
      },
      boxShadow: {
        soft: '0 10px 30px rgba(18, 22, 24, 0.08)'
      }
    }
  },
  plugins: []
};
