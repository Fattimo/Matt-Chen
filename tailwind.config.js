module.exports = {
  mode: 'jit',
  purge: {
    content: [
      `components/**/*.{vue,js}`,
      `layouts/**/*.vue`,
      `pages/**/*.vue`,
      `plugins/**/*.{js,ts}`,
      `nuxt.config.{js,ts}`,
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        'screen-1/2': '50vw',
        120: '30rem',
        160: '35rem',
        200: '40rem',
        240: '45rem',
        280: '50rem',
        320: '55rem',
      },
      height: {
        120: '30rem',
        160: '35rem',
        200: '40rem',
        240: '45rem',
        280: '50rem',
        320: '55rem',
      },
      borderWidth: {
        100: '10rem',
        200: '200px',
      },
      transitionDelay: {
        [`1500`]: '1500ms',
      },
      animation: {
        'spin-slow': 'spin 40s linear infinite',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
