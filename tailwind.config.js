/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      spacing: {
        '0.125': '0.125rem', //2px
        '0.25' : '0.25rem',  //4px
        '0.375': '0.375rem', //6px
        '0.5'  : '0.5rem',   //8px
        '0.625': '0.625rem', //10px
        '0.75' : '0.75rem',  //12px
        '0.875': '0.875rem', //14px
        '1'    : '1rem',     //16px
        '1.125': '1.125rem', //18px
        '1.25' : '1.25rem',  //20px
        '1.375': '1.375',    //22px
        '1.5'  : '1.5rem',   //24px
        '1.625': '1.625rem', //26px
        '1.75' : '1.75rem',  //28px
        '1.875': '1.875rem', //30px
        '2'    : '2rem',     //32px
        '2.125': '2.125rem', //34px
        '2.25' : '2.25rem',  //36px
        '2.375': '2.375rem', //38px
        '2.5'  : '2.5rem',   //40px
        '2.625': '2.625rem', //42px
        '2.75' : '2.75rem',  //44px
        '2.875': '2.875rem', //46px
        '3'    : '3rem',     //48px
      },
      minWidth: {
        '296px': '18.5rem',
      }
    },
  },
  plugins: [],
}

