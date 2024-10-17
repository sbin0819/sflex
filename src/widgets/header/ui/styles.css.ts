import { style } from '@vanilla-extract/css';

export const headerContainer = style({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  height: '62px',
  padding: '32px',
  zIndex: 10,
  fontSize: '20px',
  backgroundColor: 'white',
  color: 'black',
  transition: 'background-color 0.3s ease, color 0.3s ease',
  fontWeight: 'bold',
});

export const homeHeaderContainer = style([
  headerContainer,
  {
    backgroundColor: 'transparent',
    color: 'white',
  },
]);

export const ul = style({
  display: 'flex',
  alignItems: 'center',
  gap: '28px',
  marginLeft: '48px',
});
