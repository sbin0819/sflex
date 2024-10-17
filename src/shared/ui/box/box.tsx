import { FC } from 'react';

interface BoxProps {
  children?: React.ReactNode | string;
  height?: string;
  width?: string;
  background?: string;
}

export const Box: FC<BoxProps> = ({ children, height, width, background }) => {
  return (
    <div
      style={{
        height: height || 'auto',
        width: width || '100%',
        background: background || 'transparent',
      }}
    >
      {children}
    </div>
  );
};
