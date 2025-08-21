module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3498db',
        'primary-dark': '#2980b9',
        text: '#333',
        'text-light': '#7f8c8d',
        bg: '#f5f5f5',
        white: '#ffffff',
        gray: '#e0e0e0',
        dark: '#2c3e50',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}