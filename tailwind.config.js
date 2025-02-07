const colors =require('tailwindcss/colors')
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: "Poppins",
      },
    },
    colors: {
      ...colors,
     'dark':{
          DEFAULT:'#292929',          
        },
        'blue':{
          DEFAULT:'#317ef2',
          
        },
      
    }
  },
  plugins: [],
}