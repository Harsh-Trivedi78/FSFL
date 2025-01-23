module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include React components
    "./public/index.html",       // Include HTML files
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      screens: {
        'sm': '640px', // Small screens
        'md': '768px', // Medium screens
        'lg': '1024px', // Large screens
        'xl': '1280px', // Extra large screens
        '2xl': '1536px', // 2x Large screens
      },
    },
  },
  plugins: [],
};
