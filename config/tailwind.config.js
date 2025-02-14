const path = require('path');

// When deploying to production, set the base directory to your Hugo project's root directory.
const baseDir = path.join(__dirname, '..');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    `${baseDir}/themes/**/layouts/**/*.html`,
    `${baseDir}/content/**/layouts/**/*.html`,
    `${baseDir}/layouts/**/*.html`,
    `${baseDir}/content/**/*.html`,
    `${baseDir}/content/**/*.md`,
    `${baseDir}/public/**/*.html`,
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Inter"', '-apple-system', 'BlinkMacSystemFont', 'avenir next', 'avenir', 'segoe ui', 'helvetica neue', 'helvetica', 'Cantarell', 'Ubuntu', 'roboto', 'noto', 'arial', 'sans-serif'],
      },
      colors: {
        obsidian: {
          h1: '#bf616a',
          h2: '#CE93D8',
          h3: '#a3be8c',
          bold: '#ebcb8b',
          link: '#E0F2F1',
        }
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: 'var(--text-normal)',
            h1: {
              color: 'var(--h1-color)',
            },
            h2: {
              color: 'var(--h2-color)',
            },
            h3: {
              color: 'var(--h3-color)',
            },
            strong: {
              color: 'var(--bold-color)',
            },
            code: {
              color: 'var(--text-normal)',
              backgroundColor: 'var(--code-background)',
            },
          }
        }
      }
    },
  },
  plugins: [],
  variants: ['group-hover'],
};