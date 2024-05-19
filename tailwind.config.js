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
        'c-text': '#fff', // Text color
        'c-text2': '##4A4A4B', // Text color
        'c-prim': '#8A2DFC', // Primary background 
        'c-scnd': '#0e0b02', // Secondary background
      },
      fontFamily: {
        'yekan': ['YekanBakh', 'sans-serif'],
      },
      fontWeight: {
        'thin': 200,
        'light': 300,
        'normal': 400,
        'sbold': 600,
        'bold': 700,
        'ebold': 800,
        'black': 900,
      },
    },
  },
  plugins: [],
};
