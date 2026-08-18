export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Keep these in sync with the CSS custom properties in src/index.css.
        bg: '#0E0E10',
        surface: '#19191C',
        ink: '#F3F0EA',
        muted: '#8F8C86',
        line: '#2A2A2D',
        accent: {
          DEFAULT: '#FFB238',
          contrast: '#0E0E10',
          deep: '#E0972B',
        },
      },
      fontFamily: {
        display: ['"Archivo"', 'ui-sans-serif', 'sans-serif'],
        body: ['"IBM Plex Sans"', 'ui-sans-serif', 'sans-serif'],
      },
      fontSize: {
        // Fluid display sizes for headings. Format: [size, { lineHeight, letterSpacing, fontWeight }]
        'display-xl': ['clamp(2.75rem, 6vw, 6rem)', { lineHeight: '1.05', letterSpacing: '-0.02em', fontWeight: '800' }],
        'display-lg': ['clamp(2.25rem, 4.5vw, 4rem)', { lineHeight: '1.08', letterSpacing: '-0.02em', fontWeight: '800' }],
        'display-md': ['clamp(1.75rem, 3vw, 2.5rem)', { lineHeight: '1.15', letterSpacing: '-0.01em', fontWeight: '700' }],
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        // Slow, low-amplitude drift for the hero's background shape.
        // Frozen automatically by the prefers-reduced-motion rule in index.css.
        'hero-drift': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(-2%, 3%) scale(1.05)' },
        },
        // Slow, gentle bob for the hero's scroll-down cue.
        'scroll-cue-bounce': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(6px)' },
        },
      },
      animation: {
        'hero-drift': 'hero-drift 14s ease-in-out infinite',
        'scroll-cue-bounce': 'scroll-cue-bounce 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
