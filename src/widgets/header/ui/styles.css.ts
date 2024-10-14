import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  alignItems: 'center',
  padding: '20px',
  borderBottom: '1px solid #ccc',
});

export const ul = style({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  marginLeft: '20px',
});
