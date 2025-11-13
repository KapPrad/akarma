/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './lib/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      colors: {
        background: 'var(--bg)',
        ink: 'var(--ink)',
        accent: 'var(--accent)',
        'accent-muted': 'var(--accent-2)',
        card: 'var(--card)',
      },
      boxShadow: {
        soft: '0 15px 45px rgba(11, 53, 46, 0.08)',
      },
    },
  },
  plugins: [],
};
