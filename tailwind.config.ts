import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0033FF',
        'secondary-blue': '#9AC2E4',
        background: '#F2F0EF',
        paper: '#F2F0EF',
        dark: '#0B1215',
        'text-primary': '#0B1215',
        'text-secondary': '#656565',
        'text-error': '#BC0000',
        black: '#000000',
        white: '#FFFFFF',
        orange: '#FF8000',
      },
      fontFamily: {
        sans: ['var(--font-scandia)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-overpass)', 'monospace'],
      },
      screens: {
        mobile: { max: '639px' },
        tablet: '640px',
        desktop: '1024px',
        wide: '1440px',
      },
    },
  },
  plugins: [],
}

export default config
