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
      },
      transitionDelay: {
        [`1500`]: '1500ms',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
