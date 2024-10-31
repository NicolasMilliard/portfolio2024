import { buenosAires } from '@app/utils/fonts';
// Types
import type { ReactNode } from 'react';

const Title = ({
  children,
  isWidest,
  className = '',
}: {
  children: ReactNode;
  isWidest?: boolean;
  className?: string;
}) => {
  return (
    <h2
      className={`${
        buenosAires.className
      } text-4xl font-extralight text-black ${
        isWidest ? 'tracking-widest' : ''
      } ${className}`}
    >
      {children}
    </h2>
  );
};

export default Title;
