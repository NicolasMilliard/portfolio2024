// Components
import { Title } from "@components/Title";
import Image from "next/image";

const Logo = () => {
  return (
    <div className="hidden md:flex md:items-center">
      <Image
        src="/images/prism.png"
        alt="Nicolas Milliard"
        width={90}
        height={83}
        quality={100}
        className="mr-6"
      />
      <Title>Nicolas&nbsp;Milliard</Title>
    </div>
  );
};

export default Logo;
