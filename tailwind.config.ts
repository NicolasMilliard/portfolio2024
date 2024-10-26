import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    colors: {
      black: '#00002f',
      white: '#ffffff',
      grey: {
        100: '#eeeeff',
        400: '#e0e0ff',
        700: '#ccccff',
      },
      ultramarine: '#4848fc',
      congo_pink: '#fe877a',
      transparent: 'transparent',
    },
    letterSpacing: {
      widest: '10px',
    },
    fontWeight: {
      extralight: '200',
      book: '350',
      normal: '400',
      semibold: '600',
    },
    extend: {
      spacing: {
        '15': '60px',
        '30': '120px',
        '128': '512px',
        '200': '800px',
        '244': '976px',
      },
      boxShadow: {
        xl: '0 0 24px rgba(0, 0, 47, 0.3)',
      },
      animation: {
        'bounce-slow': 'bounce 3s linear infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': {
            transform: 'translateY(-25%)',
            animationTimingFunction: 'cubic-bezier(0.8,0,1,1)',
          },
          '50%': {
            transform: 'none',
            animationTimingFunction: 'cubic-bezier(0,0,0.2,1)',
          },
        },
      },
      screens: {
        xs: '375px',
      },
    },
  },
  plugins: [],
};
export default config;
