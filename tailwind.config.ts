import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#f3f3f3',
        text: '#262626',
        accent: '#f3ca21',
        muted: '#7b7b7b',
        border: '#e6e6e6',
        panel: '#dce3ec',
        dark: '#2b2b2b',
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0, 0, 0, 0.06)',
        card: '0 8px 20px rgba(0, 0, 0, 0.08)',
      },
      borderRadius: {
        xl2: '24px',
      },
      fontFamily: {
        sans: ['Arial', 'Helvetica', 'sans-serif'],
      },
      maxWidth: {
        site: '1180px',
      },
    },
  },
  plugins: [],
} satisfies Config;
