import { style } from '@vanilla-extract/css';

export const container = style({});

export const body = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  padding: '32px 20px',
  gap: '48px',
});
