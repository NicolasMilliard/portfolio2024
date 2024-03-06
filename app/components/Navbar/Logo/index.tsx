// Components
import { Title } from "@components/Title";
import Image from "next/image";

const Logo = () => {
  return (
    <div className="hidden items-center md:flex">
      <Image
        src="/images/prism.png"
        alt="Nicolas Milliard"
        width={90}
        height={90}
      />
      <Title>Nicolas&nbsp;Milliard</Title>
    </div>
  );
};

export default Logo;
