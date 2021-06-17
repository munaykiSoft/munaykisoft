module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '2rem',
        xl: '2rem',
        '2xl': '2rem',
      }
    },
    extend: {
      colors: {
        primary: {  
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
        secondary: {  
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
        terciary: {  
          DEFAULT: '#ECECEC',  
          '50': '#FFFFFF',  
          '100': '#FFFFFF',  
          '200': '#FFFFFF',  
          '300': '#FFFFFF',  
          '400': '#FFFFFF',  
          '500': '#ECECEC',  
          '600': '#D3D3D3',  
          '700': '#B9B9B9',  
          '800': '#A0A0A0',  
          '900': '#868686'
        },
        quarter: {  
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
