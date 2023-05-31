/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'mb': '400px',
      'sm': '640px',
      'md': '820px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    colors:{
      'primaryTextColor' : '#2F327D',
      'fadeWhite':'#CACED8',
      'white':'#FFF',
      'red': '#FF5364',
      "grayMarginColor":'#F0F0F0;',
      "lightBlue":'#E9EAFF',
      "PrimaryGray":'#7F7F7F',
      "gray":"#C1C1C1",
      "discountRed":'#EA4B48',
      "aboutBlue": "#F2F4F8",
      "bgWhite": "##E5E5E5",
      "bgblue":"#F6F7FF",
      "gray2":' #757575'
    },
    fontFamily:{
      inter:["inter"],
      poppins:["poppins"],
      dmSans:["dm-sans"],
      dmSansr:["dm-sansr"],
      zcool:["z-cool"],
      interlight:["interlight"],
      nuSans:["nunito-sans"],
      roboto:["roboto"]
    },
    extend: {
      backgroundImage: theme => ({"man":"url('/components/assets/images/frontpagebg.svg')"})
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}
