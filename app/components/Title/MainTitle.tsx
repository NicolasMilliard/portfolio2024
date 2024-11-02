import { syne } from '@app/utils/fonts';
// Types
import type { ReactNode } from 'react';

const MainTitle = ({ children }: { children: ReactNode }) => {
  return (
    <h1 className={`${syne.className} text-6xl font-normal text-black`}>
      {children}
    </h1>
  );
};

export default MainTitle;
