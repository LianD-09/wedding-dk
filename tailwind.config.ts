import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    './{app,hooks,pages,components,layout,libs}/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    // responsive according breakpoints MUI
    screens: {
      xs: '0px',
      sm: '600px',
      md: '900px',
      lg: '1200px',
      lgm: '1400px',
      xl: '1500px',
      xlm: '1600px',
      fhd: '1700px',
    },
    extend: {
      animation: {
        'slide-in-right': 'slideInRight 0.5s ease-in-out',
        'slide-in-left': 'slideInLeft 1s ease-in-out',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        black: '#000000',
        white: '#ffffff',
        description: '#6e6f6f',
      },
      keyframes: {
        heartBeat: {
          '0%': { transform: 'scale(.8)' },
          '25%': { transform: 'scale(1.0)' },
          '50%': { transform: 'scale(1.2)' },
          '75%': { transform: 'scale(1.0)' },
          '100%': { transform: 'scale(.8)' },
        },
        gift: {
          '0%': { transform: 'scale(.8) rotate(0)' },
          '25%': { transform: 'scale(1.0) rotate(13deg)' },
          '50%': { transform: 'scale(1.2) rotate(26deg)' },
          '75%': { transform: 'scale(1.0) rotate(13deg)' },
          '100%': { transform: 'scale(.8) rotate(0)' },
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: {
          textAlign: 'center',
          fontSize: theme('fontSize.5xl'),
          lineHeight: theme('lineHeight.5xl'),
          color: theme('colors.title'),
        },
        h2: {
          textAlign: 'center',
          fontSize: theme('fontSize.3xl'),
          lineHeight: theme('lineHeight.3xl'),
          color: theme('colors.title'),
        },
        h3: {
          textAlign: 'center',
          fontSize: theme('fontSize.2xl'),
          lineHeight: theme('lineHeight.2xl'),
          color: theme('colors.title'),
        },
      });
    }),
  ],
};
export default config;