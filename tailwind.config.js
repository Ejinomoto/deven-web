/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}',
            './node_modules/flowbite/**/*.js'],
  theme: {
    container :{
      center : true,
      padding : '16px',
    },
    extend: {
      colors : {
        'my-image1' : "url('./img/health-screening-76u1zV-a.png')",
        primary: '#06b6d4',
        dark: '#1e293b',
      },
      screens :{
        '2xl' : '1320px',
        '3xl' : '1500px'
      },
      fontFamily :{
        
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

