import localFont from 'next/font/local';

import { Playfair_Display } from 'next/font/google';

export const playfair = Playfair_Display({
  subsets: ['latin'],
  preload: true,
  variable: '--font-playfair',
});

export const segoe = localFont({
  src: [
    {
      path: '../public/fonts/segoe-ui/SegoeUI-Black.ttf',
      weight: '800',
      style: "normal"
    },
    {
      path: '../public/fonts/segoe-ui/SegoeUI-Bold.ttf',
      weight: '700',
      style: "normal"
    },
    {
      path: '../public/fonts/segoe-ui/SegoeUI-BoldItalic.ttf',
      weight: '700',
      style: "italic"
    },
    {
      path: '../public/fonts/segoe-ui/SegoeUI-Light.ttf',
      weight: '200',
      style: "normal"
    },
    {
      path: '../public/fonts/segoe-ui/SegoeUI-LightItalic.ttf',
      weight: '200',
      style: "italic"
    },
    {
      path: '../public/fonts/segoe-ui/SegoeUI-Semibold.ttf',
      weight: '600',
      style: "normal"
    },
    {
      path: '../public/fonts/segoe-ui/SegoeUI-SemiboldItalic.ttf',
      weight: '600',
      style: "italic"
    },
    {
      path: '../public/fonts/segoe-ui/SegoeUI.ttf',
      weight: '400',
      style: "normal"
    },
    {
      path: '../public/fonts/segoe-ui/SegoeUI-Italic.ttf',
      weight: '400',
      style: "italic"
    }
  ],
  variable: '--font-segoe',
  fallback: ['ui-sans-serif'],
});