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
    fontFamily: {
      heading: ['Arkhip', 'ui-sans-serif'],
      body: ['Poppins', 'ui-sans-serif'],
    },
    colors: {
      dark: {
        DEFAULT: '#2A323B',
        600: '#2A323B',
      },
      light: {
        DEFAULT: '#FFFDF6',
        600: '#FFFDF6',
      },
      primary: {
        DEFAULT: '#F48B86',
        200: '#FFD8D6',
        400: '#FFB6B2',
        600: '#F48B86',
        800: '#CC5852',
        dark: 'A8332D',
      },
      secondary: {
        DEFAULT: '#C6FAD2',
        200: '#C5EBCA',
        400: '#96D69E',
        600: '#C6FAD2',
        800: '#3F9F4B',
        dark: '#23822F',
      },
    },
    extend: {
      width: {
        'screen-1/2': '50vw',
        120: '30rem',
        160: '35rem',
        200: '40rem',
        240: '45rem',
        280: '50rem',
        320: '55rem',
        360: '60rem',
        480: '75rem',
      },
      height: {
        120: '30rem',
        160: '35rem',
        200: '40rem',
        240: '45rem',
        280: '50rem',
        320: '55rem',
        360: '60rem',
        480: '75rem',
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
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.dark.600'),
            a: {
              color: theme('colors.secondary.800'),
              '&:hover': {
                color: theme('colors.secondary.800'),
              },
            },
            h1: {
              color: theme('colors.dark.600'),
              fontFamily: `${theme('fontFamily.heading')}`,
            },
            h2: {
              color: theme('colors.dark.600'),
              fontFamily: `${theme('fontFamily.heading')}`,
            },
            h3: {
              color: theme('colors.dark.600'),
              fontFamily: `${theme('fontFamily.heading')}`,
            },
            p: {
              color: theme('colors.dark.600'),
              fontFamily: `${theme('fontFamily.body')}`,
            },
          },
        },
        light: {
          css: {
            color: theme('colors.light.600'),
            a: {
              color: theme('colors.secondary.800'),
              '&:hover': {
                color: theme('colors.secondary.800'),
              },
            },
            p: {
              color: theme('colors.light.600'),
            },
            h1: {
              color: theme('colors.light.600'),
            },
            h2: {
              color: theme('colors.light.600'),
            },
            h3: {
              color: theme('colors.light.600'),
            },
            strong: {
              color: theme('colors.light.600'),
            },
            code: {
              color: theme('colors.secondary'),
            },
            figcaption: {
              color: theme('colors.light.600'),
            },
          },
        },
        primary: {
          css: {
            color: theme('colors.primary.600'),
            a: {
              color: theme('colors.primary.800'),
              '&:hover': {
                color: theme('colors.primary.800'),
              },
            },
            p: {
              color: theme('colors.primary.600'),
            },
            h1: {
              color: theme('colors.primary.600'),
            },
            h2: {
              color: theme('colors.primary.600'),
            },
            h3: {
              color: theme('colors.primary.600'),
            },
            strong: {
              color: theme('colors.primary.600'),
            },
            code: {
              color: theme('colors.light.600'),
            },
            figcaption: {
              color: theme('colors.primary.600'),
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
