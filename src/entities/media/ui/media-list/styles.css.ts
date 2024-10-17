import { globalStyle, style } from '@vanilla-extract/css';

export const container = style({
  position: 'relative',
  width: '100%',
  height: '100%',
});

export const listContainer = style({
  display: 'flex',
  gap: '20px',
  overflowX: 'auto',
  scrollSnapType: 'x mandatory',
  scrollBehavior: 'smooth',
  scrollbarWidth: 'none',
});

globalStyle(`${listContainer} > *`, {
  scrollSnapAlign: 'start',
});

export const leftButton = style({
  position: 'absolute',
  top: '50%',
  left: '0',
  transform: 'translateY(-50%)',
  cursor: 'pointer',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  ':hover': {
    background: '#eee',
    opacity: 0.5,
  },
});

export const rightButton = style({
  position: 'absolute',
  top: '50%',
  right: '0',
  transform: 'translateY(-50%)',
  height: '100%',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  ':hover': {
    background: '#eee',
    opacity: 0.5,
  },
});
