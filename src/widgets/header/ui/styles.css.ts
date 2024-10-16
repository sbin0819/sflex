import { style } from '@vanilla-extract/css';

export const container = style({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  padding: '32px',
  zIndex: 100,
  color: 'white',
  fontSize: '20px',
  backgroundColor: 'transparent',
  transition: 'background-color 0.3s ease, color 0.3s ease',
  fontWeight: 'bold',
});

export const containerScrolled = style([
  container,
  {
    backgroundColor: 'white',
    color: 'black',
  },
]);

export const ul = style({
  display: 'flex',
  alignItems: 'center',
  gap: '28px',
  marginLeft: '48px',
});
