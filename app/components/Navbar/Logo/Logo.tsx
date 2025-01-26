// Components
import { GradientTitle } from '@components/Title';
import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/" className="hidden md:flex md:items-center">
      <Image
        src="/images/assets/prism.png"
        alt="Nicolas Milliard"
        width={60}
        height={56}
        quality={100}
        className="my-4 mr-6"
      />
      <div className="hidden lg:block">
        <GradientTitle>Nicolas&nbsp;Milliard</GradientTitle>
      </div>
    </Link>
  );
};

export default Logo;
