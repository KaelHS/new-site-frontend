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
            'primary': {
              100: '#FFF3EB',
              300: '#FFAE70',
              400: '#FF9747',
              500: '#FF7915',
              600: '#F56A00',
            },
            'grays': {
              100: '#f4f4f4'
            }
          }
    },
  },
  plugins: [],
}
export default config
