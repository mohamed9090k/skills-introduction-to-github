import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#050A12',
          900: '#081626',
          800: '#0C2236',
          700: '#11304A',
          200: '#C7D2E1'
        },
        teal: {
          700: '#1F5B62',
          600: '#2A6C73',
          500: '#3A8087',
          200: '#BFE3E6'
        },
        gold: {
          500: '#C7A15A',
          400: '#D6B46C',
          200: '#F3E5C3'
        },
        surface: {
          0: '#FFFFFF',
          50: '#F6F2EA',
          100: '#EFE7DA'
        }
      },
      backgroundImage: {
        'hero-radial':
          'radial-gradient(900px circle at 20% 20%, rgba(199,161,90,0.28), transparent 60%), radial-gradient(700px circle at 85% 30%, rgba(58,128,135,0.22), transparent 55%), linear-gradient(180deg, rgba(8,22,38,1) 0%, rgba(5,10,18,1) 100%)',
        gilded:
          'linear-gradient(135deg, rgba(199,161,90,0.25) 0%, rgba(58,128,135,0.18) 40%, rgba(8,22,38,0) 75%)'
      },
      boxShadow: {
        soft: '0 14px 30px rgba(0,0,0,0.22)',
        glow: '0 0 0 1px rgba(199,161,90,0.25), 0 22px 60px rgba(0,0,0,0.35)'
      },
      borderRadius: {
        luxe: '1.25rem',
        'luxe-lg': '1.75rem'
      },
      fontFamily: {
        body: ['var(--font-body)', 'ui-sans-serif', 'system-ui'],
        display: ['var(--font-display)', 'ui-serif', 'serif']
      }
    }
  },
  plugins: []
} satisfies Config;
