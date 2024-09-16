/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'quicksand': ['Quicksand', 'sans-serif'],
      },
      colors: {
        'body': '#F8F9FA',
        'primary': '#2d6a4f',
        'accent-red': '#AF2E2E',
        'accent-blue': '#2F75BB',
        'dark': '#212529;',
      }
    },
  },
  plugins: [
    import('flowbite/plugin')
  ],
}

