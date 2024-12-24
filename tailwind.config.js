/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,ts,jsx,tsx}",
    "./public/index.html",],
  theme: {
    extend: {
      colors:{
        'myColor':"#FDDA0D",
        'mybg':'#FF5733',
        'buttonbg':'#36454F',
        papayawhip:{
          light:'#fef4e4',
          DEFAULT:'#ffefd5',
          dark:'#fee5bc'
        }
      },
      screens:{
        'widescreen':{'raw':'(min-aspect-ratio: 3/2)'},
        'tallscreen':{'raw':'(max-aspect-ratio: 13/20)'}
      },
      keyframes:{
        'open-menu':{
          '0%':{transform:'scaleY(0)'},
          '80%':{transform:'scaleY(1.2)'},
          '100%':{transform:'scaleY(1)'}
        },
        'time-hover':{
          '0%':{
            transform: 'scale(0)',
            opacity: '0.3'
          },
          '50%':{
            transform: 'scale(1.1)',
            opacity: '0.5'
          },
          '100%':{
            transform: 'scale(1)',
            opacity: '0'
          }

        }
      },
      animation:{
        'open-menu':'open-menu 0.5s ease-in-out forwards',
        'time-hover':'time-hover 0.5s forwards'
      }
    },
  },
  plugins: [],
}

