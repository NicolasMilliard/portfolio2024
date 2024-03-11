// Components
import { Title } from "@components/Title";
import Image from "next/image";

const Logo = ({ isSmall }: { isSmall: boolean }) => {
  return (
    <div className="hidden md:flex md:items-center">
      <Image
        src="/images/prism.png"
        alt="Nicolas Milliard"
        width={isSmall ? 60 : 90}
        height={isSmall ? 56 : 84}
        quality={100}
        className="my-4 mr-6"
      />
      <div className="hidden lg:block">
        <Title>Nicolas&nbsp;Milliard</Title>
      </div>
    </div>
  );
};

export default Logo;
