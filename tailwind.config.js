module.exports = {
  content: [ 
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'IndieFlower': ['"Indie Flower"', 'cursive']
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}
