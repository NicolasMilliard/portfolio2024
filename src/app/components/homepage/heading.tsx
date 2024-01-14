import { tangerine } from "../../utils/fonts";

const Heading = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <h1 className={`${tangerine.className} text-6xl text-[#FFD700]`}>Nicolas Milliard</h1>
      <h2 className="text-xl text-white font-extralight animate-decreaseLetterSpacing">Front-end Developer</h2>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[800px] h-[350px] bg-[#222334] blur-[200px]" />
    </div>
  );
};

export default Heading;
