// Components
import Image from "next/image";

enum CaseStudiesImages {
  cube = "cube",
  spring = "spring",
  hexagon = "hexagon",
}

const CaseStudyImage = ({ index, title }: { index: number; title: string }) => {
  const images = [
    CaseStudiesImages.cube,
    CaseStudiesImages.spring,
    CaseStudiesImages.hexagon,
  ];

  return (
    <Image
      src={`/images/assets/${images[index]}.png`}
      alt={title}
      width={512}
      height={512}
      quality={100}
      className="hidden lg:block"
    />
  );
};

export default CaseStudyImage;
