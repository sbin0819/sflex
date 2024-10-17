// styles.css.ts
import {
  createGlobalTheme,
  createGlobalThemeContract,
  globalStyle,
} from '@vanilla-extract/css';
import './font.css';
import { gmarketSans } from './font.css';

// Define the theme contract
const vars = createGlobalThemeContract({
  colors: {
    background: 'background',
    foreground: 'foreground',
  },
});

// Create the default (light mode) theme
createGlobalTheme(':root', vars, {
  colors: {
    background: '#ffffff',
    foreground: '#171717',
  },
});

// Create the dark mode theme using a media query
createGlobalTheme('@media (prefers-color-scheme: dark)', vars, {
  colors: {
    background: '#0a0a0a',
    foreground: '#ededed',
  },
});

// Global styles for html and body
globalStyle('html, body', {
  maxWidth: '100vw',
  overflowX: 'hidden',
});

// Global styles for body
globalStyle('body', {
  color: vars.colors.foreground,
  background: vars.colors.background,
});

// Global styles for all elements
globalStyle('*', {
  boxSizing: 'border-box',
  padding: 0,
  margin: 0,
});

// Global styles for anchor tags
globalStyle('a', {
  color: 'inherit',
  textDecoration: 'none',
});

// CSS reset styles
globalStyle(
  `
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center, dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend, table, caption,
  tbody, tfoot, thead, tr, th, td, article,
  aside, canvas, details, embed, figure,
  figcaption, footer, header, hgroup, menu,
  nav, output, ruby, section, summary, time,
  mark, audio, video
`,
  {
    margin: 0,
    padding: 0,
    border: 0,
    fontSize: '100%',
    font: 'inherit',
    verticalAlign: 'baseline',
  }
);

// HTML5 display-role reset for older browsers
globalStyle(
  `
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section
`,
  {
    display: 'block',
  }
);

// Line height for body
globalStyle('body', {
  lineHeight: 1,
  fontFamily: gmarketSans,
});

// Remove list styles
globalStyle('ol, ul', {
  listStyle: 'none',
});

// Blockquote and quotes reset
globalStyle('blockquote, q', {
  quotes: 'none',
});

globalStyle('blockquote:before, blockquote:after, q:before, q:after', {
  content: '',
});

// Table reset
globalStyle('table', {
  borderCollapse: 'collapse',
  borderSpacing: 0,
});
