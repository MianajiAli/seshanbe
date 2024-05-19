module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'c-back':'#000000',
        'c-back2':'#141416',
        'c-back3':'#101011',
        'c-text': '#fff', // Text color
        'c-text1': '#f2f2f2', // Text color
        'c-text2': '#a4a4a4', // Text color
        'c-text3': '#4A4A4B', // Text color
        'c-prim': '#9d00ff', // Primary background 
        'c-scnd': '#0e0b02', // Secondary background
      },
      fontFamily: {
        'yekan': ['YekanBakh', 'sans-serif'],
      },
      fontWeight: {
        'th': 200,
        'lg': 300,
        'nr': 400,
        'sb': 600,
        'bl': 700,
        'eb': 800,
        'bk': 900,
      },
    },
  },
  plugins: [],
};
