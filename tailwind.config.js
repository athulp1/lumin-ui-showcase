/** @type {import('tailwindcss').Config} */ //jsDoc comment  JsDoc it is markup language used to annotate js source code SS
import defaultTheme from 'tailwindcss/defaultTheme'; // <-- ADD THIS LINE //it helps for customm 

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // ** means any directory any sub-direcotry , *measn any filename
  ],
  theme: {
    extend: { // allows u to add new values to default theme without overriding exsisting values 
      colors: {
        // Reference our custom CSS variables defined in index.css
        'primary-dark': 'var(--color-primary-dark)',
        'secondary-dark': 'var(--color-secondary-dark)',
        'accent-light': 'var(--color-accent-light)',
        'accent-dark': 'var(--color-accent-dark)',
        'text-light': 'var(--color-text-light)',
        'text-muted': 'var(--color-text-muted)',
        'gradient-start': 'var(--color-gradient-start)',
        'gradient-end': 'var(--color-gradient-end)',
      },
      fontFamily: {
        // Use 'Inter' as our primary sans-serif font, falling back to Tailwind's defaults
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      // Custom box-shadows for a 'premium' 3D/depth effect
      boxShadow: {
        'glow-md': '0 0 15px rgba(138, 43, 226, 0.6)', // Subtle violet glow
        'glow-lg': '0 0 30px rgba(138, 43, 226, 0.8)', // Stronger glow for interactive elements
      },
      // Custom gradients for more flexibility
      backgroundImage: {
        'deep-gradient': 'linear-gradient(135deg, var(--color-gradient-start), var(--color-gradient-end))',
      },
      // Custom transitions for smoother UI interactions
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
      }
    },
  },
  plugins: [],
};