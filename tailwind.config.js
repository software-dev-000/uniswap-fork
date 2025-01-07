/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      maxHeight: {
        'calc-custom': 'calc(-30px + 100vh)', // Define your custom max-height
      },
      fontFamily: {
        'system': ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'], // Custom font family
      },
      keyframes: {
        animation_1: {
          '0%': { transform: 'translate(200px, 150px) rotateZ(-10deg)' },
          '50%': { transform: 'translate(200px, 180px) rotateZ(20deg)' },
          '100%': { transform: 'translate(200px, 150px) rotateZ(-10deg)' },
        },
        animation_2: {
          '0%': { transform: 'translate(700px, 800px) rotateZ(-10deg)' },
          '50%': { transform: 'translate(700px, 780px) rotateZ(20deg)' },
          '100%': { transform: 'translate(700px, 800px) rotateZ(-10deg)' },
        },
        animation_3: {
          '0%': { transform: 'translate(1600px, 200px) rotateZ(-10deg)' },
          '50%': { transform: 'translate(1600px, 180px) rotateZ(20deg)' },
          '100%': { transform: 'translate(1600px, 200px) rotateZ(-10deg)' },
        },
        animation_4: {
          '0%': { transform: 'translate(1700px, -150px) rotateZ(-10deg)' },
          '50%': { transform: 'translate(1700px, -180px) rotateZ(20deg)' },
          '100%': { transform: 'translate(1700px, -150px) rotateZ(-10deg)' },
        },
        animation_5: {
          '0%': { transform: 'translate(400px, 700px) rotateZ(-10deg)' },
          '50%': { transform: 'translate(400px, 680px) rotateZ(20deg)' },
          '100%': { transform: 'translate(400px, 700px) rotateZ(-10deg)' },
        },
        animation_6: {
          '0%': { transform: 'translate(600px, 300px) rotateZ(-10deg)' },
          '50%': { transform: 'translate(600px, 330px) rotateZ(20deg)' },
          '100%': { transform: 'translate(600px, 300px) rotateZ(-10deg)' },
        },
        animation_7: {
          '0%': { transform: 'translate(140px, -200px) rotateZ(-10deg)' },
          '50%': { transform: 'translate(140px, -180px) rotateZ(20deg)' },
          '100%': { transform: 'translate(140px, -200px) rotateZ(-10deg)' },
        },
        animation_8: {
          '0%': { transform: 'translate(300px, 100px) rotateZ(-10deg)' },
          '50%': { transform: 'translate(300px, 80px) rotateZ(20deg)' },
          '100%': { transform: 'translate(300px, 100px) rotateZ(-10deg)' },
        },
        animation_9: {
          '0%': { transform: 'translate(1300px, 200px) rotateZ(-10deg)' },
          '50%': { transform: 'translate(1300px, 180px) rotateZ(20deg)' },
          '100%': { transform: 'translate(1300px, 200px) rotateZ(-10deg)' },
        },
        animation_10: {
          '0%': { transform: 'translate(1600px, -200px) rotateZ(-10deg)' },
          '50%': { transform: 'translate(1600px, -180px) rotateZ(20deg)' },
          '100%': { transform: 'translate(1600px, -200px) rotateZ(-10deg)' },
        },
        animation_11: {
          '0%': { transform: 'translate(1500px, -800px) rotateZ(-10deg)' },
          '50%': { transform: 'translate(1500px, -780px) rotateZ(20deg)' },
          '100%': { transform: 'translate(1500px, -800px) rotateZ(-10deg)' },
        },
        animation_12: {
          '0%': { transform: 'translate(1000px, 0px) rotateZ(-10deg)' },
          '50%': { transform: 'translate(1000px, 20px) rotateZ(20deg)' },
          '100%': { transform: 'translate(1000px, 0px) rotateZ(-10deg)' },
        },
        animation_13: {
          '0%': { transform: 'translate(500px, -700px) rotateZ(-10deg)' },
          '50%': { transform: 'translate(500px, -680px) rotateZ(20deg)' },
          '100%': { transform: 'translate(500px, -700px) rotateZ(-10deg)' },
        },
        animation_14: {
          '0%': { transform: 'translate(1650px, -300px) rotateZ(-10deg)' },
          '50%': { transform: 'translate(1650px, -280px) rotateZ(20deg)' },
          '100%': { transform: 'translate(1650px, -300px) rotateZ(-10deg)' },
        },
        animation_15: {
          '0%': { transform: 'translate(1000px, -2000px) rotateZ(-10deg)' },
          '50%': { transform: 'translate(1000px, -1980px) rotateZ(20deg)' },
          '100%': { transform: 'translate(1000px, -2000px) rotateZ(-10deg)' },
        },
        animation_bounce: {
          '0%': { transform: 'translate(0, 0px) ', text:"#ffffff" },
          '50%': { transform: 'translate(0, 20px) ', text:"#000000" },
          '100%': { transform: 'translate(0, 0px) ', text:"#ffffff" },
        },
      },
      animation: {
        animation_1: 'animation_1 4s infinite linear',
        animation_2: 'animation_2 4s infinite linear',
        animation_3: 'animation_3 4s infinite linear',
        animation_4: 'animation_4 4s infinite linear',
        animation_5: 'animation_5 4s infinite linear',
        animation_6: 'animation_6 4s infinite linear',
        animation_7: 'animation_7 4s infinite linear',
        animation_8: 'animation_8 4s infinite linear',
        animation_9: 'animation_9 4s infinite linear',
        animation_10: 'animation_10 4s infinite linear',
        animation_11: 'animation_11 4s infinite linear',
        animation_12: 'animation_12 4s infinite linear',
        animation_13: 'animation_13 4s infinite linear',
        animation_14: 'animation_14 4s infinite linear',
        animation_15: 'animation_15 4s infinite linear',
        animation_bounce: 'animation_bounce 2s infinite linear',
      },
      
    },
  },
  plugins: [],
}

