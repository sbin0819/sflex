import { style } from '@vanilla-extract/css';

export const overlay = style({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
});

export const modal = style({
  backgroundColor: 'white',
  padding: '1rem',
  borderRadius: '8px',
  position: 'relative',
  maxWidth: '500px',
  width: '100%',
  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
  '@media': {
    'screen and (max-width: 600px)': {
      maxWidth: '90%',
      padding: '0.5rem',
    },
  },
});

export const closeButton = style({
  position: 'absolute',
  top: '0.5rem',
  right: '0.5rem',
  background: 'none',
  border: 'none',
  fontSize: '1.5rem',
  cursor: 'pointer',
  color: '#333',
});
