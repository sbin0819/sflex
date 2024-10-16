import { style } from '@vanilla-extract/css';

export const container = style({
  position: 'relative',
});

export const imageContainer = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  aspectRatio: '3 / 1',
});

export const image = style({
  objectFit: 'cover',
  width: '100%',
  height: '100%',
});
