
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        "custom-lg":'1191px',
        "custom-md":'900px',
        "custom-700":'700px',
        "extra-small":'260',
        'custom': {'min': '260px', 'max': '1190px'},
      }
    },
    fontFamily:{
      signature:['Great Vibes'],
      number:['Roboto']
    },
  },
  plugins: [],
}

