module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'c-back':'#000000',
        'c-back2':'#080807',
        'c-back3':'#0C0C0B',
        'c-text': '#fff', // Text color
        'c-text2': '#d6d5c9ff', // Text color
        'c-text3': '#b9baa3ff', // Text color
        'c-prim': '#f6b000', // Primary background 
        'c-prim2': '#ffd931', // Primary background 
        'c-scnd': '#0e0b02', // Secondary background
        // 'c-acnt1': '#F6F1D5', // Accent color 1
        // 'c-acnt2': '#10100E', // Accent color 2
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
