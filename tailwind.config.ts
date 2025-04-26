import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/Components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'chat-bg': '#1a1a1a',
        'sidebar-bg': '#202123',
        'hover-bg': '#2D2E30',
        'input-bg': '#40414f',
        'accent': '#10a37f',
      },
    },
  },
  plugins: [],
}
export default config 