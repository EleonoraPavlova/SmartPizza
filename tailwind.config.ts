import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        atma: ['var(--font-atma)'],
      },
    },
  },
  plugins: [],
}
export default config
