// Components
import { Title } from "@components/Title";
import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex items-center">
      <Image
        src="/images/logo.png"
        alt="Nicolas Milliard"
        width={190}
        height={190}
      />
      <Title>Nicolas Milliard</Title>
    </div>
  );
};

export default Logo;
