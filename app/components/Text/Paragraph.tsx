// Types
import type { ReactNode } from 'react';

const Paragraph = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <p className={`${className} max-w-200 font-book text-black`}>{children}</p>
  );
};

export default Paragraph;
