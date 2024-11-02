// Components
import { Experiences, Introduction, Quote, Sidebar } from '@components/Resume';
// Types
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resume | Nicolas Milliard',
  description: 'Nicolas Milliard resume.',
};

const Resume = () => {
  return (
    <div className="flex flex-col lg:px-20 xl:px-40">
      <div className="flex flex-col md:flex-row md:gap-10">
        <Sidebar />
        <div>
          <Introduction />
          <Quote />
          <Experiences />
        </div>
      </div>
    </div>
  );
};

export default Resume;
