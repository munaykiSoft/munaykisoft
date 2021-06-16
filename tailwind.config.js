module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primaryOrange: {  
          DEFAULT: '#FF4400',  
          '50': '#FFECE5',  
          '100': '#FFDACC',  
          '200': '#FFB499',  
          '300': '#FF8F66',  
          '400': '#FF6933',  
          '500': '#FF4400',  
          '600': '#CC3600',  
          '700': '#992900',  
          '800': '#661B00',  
          '900': '#330E00'
        },
        secondaryYellow: {  
          DEFAULT: '#FFBB00',  
          '50': '#FFF8E5',  
          '100': '#FFF1CC',  
          '200': '#FFE499',  
          '300': '#FFD666',  
          '400': '#FFC933',  
          '500': '#FFBB00',  
          '600': '#CC9600',  
          '700': '#997000',  
          '800': '#664B00',  
          '900': '#332500'
        },
        secondaryLether: {  
          DEFAULT: '#8A8A8A',  
          '50': '#FDFDFD',  
          '100': '#F0F0F0',  
          '200': '#D7D7D7',  
          '300': '#BDBDBD',  
          '400': '#A4A4A4',  
          '500': '#8A8A8A',  
          '600': '#717171',  
          '700': '#575757',  
          '800': '#3E3E3E',  
          '900': '#242424'
        },
        secondaryNavbarFont: {  
          DEFAULT: '#C4C4C4',  
          '50': '#FFFFFF',  
          '100': '#FFFFFF',  
          '200': '#FFFFFF',  
          '300': '#F7F7F7',  
          '400': '#DEDEDE',  
          '500': '#C4C4C4',  
          '600': '#ABABAB',  
          '700': '#919191',  
          '800': '#787878',  
          '900': '#5E5E5E'
        },
        secondaryNavbarFont2: {  
          DEFAULT: '#373A36',  
          '50': '#A9AEA8',  
          '100': '#9CA19B',  
          '200': '#828980',  
          '300': '#696F67',  
          '400': '#50544F',  
          '500': '#373A36',  
          '600': '#1E201D',  
          '700': '#050505',  
          '800': '#000000',  
          '900': '#000000'
        },
      },      
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
