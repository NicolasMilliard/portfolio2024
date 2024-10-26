// Components
import Image from 'next/image';

export enum CaseStudiesImages {
  cube = 'cube',
  spring = 'spring',
  hexagon = 'hexagon',
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
      width={360}
      height={360}
      quality={100}
      className="hidden xl:block"
    />
  );
};

export default CaseStudyImage;
