import { syne } from '@app/utils/fonts';
// Types
import type { ReactNode } from 'react';

const SubTitle = ({ children }: { children: ReactNode }) => {
  return (
    <h3 className={`${syne.className} text-3xl font-semibold text-black`}>
      {children}
    </h3>
  );
};

export default SubTitle;
