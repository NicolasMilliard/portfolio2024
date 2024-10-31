import { syne } from '@app/utils/fonts';
// Types
import type { ReactNode } from 'react';

const GradientTitle = ({ children }: { children: ReactNode }) => {
  return (
    <h2
      className={`${syne.className} bg-gradient-to-r from-ultramarine to-congo_pink bg-clip-text text-xl font-semibold text-transparent`}
    >
      {children}
    </h2>
  );
};

export default GradientTitle;
