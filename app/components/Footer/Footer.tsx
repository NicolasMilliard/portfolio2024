import { SocialLink } from '@app/components/Link';
import Menu from '@app/components/Navbar/Menu/Menu';
import { githubLogo, linkedinLogo } from '@components/Icons';
import Image from 'next/image';

const SocialLinks = [
  {
    name: 'GitHub',
    link: 'https://github.com/NicolasMilliard',
    icon: githubLogo,
  },
  {
    name: 'LinkedIn',
    link: 'https://fr.linkedin.com/in/nicolas-milliard',
    icon: linkedinLogo,
  },
  // {
  //   name: 'Npmjs',
  //   link: 'https://www.npmjs.com/~nicolasmilliard',
  //   icon: npmjsLogo,
  // },
];

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center gap-10 bg-black py-8 md:flex-row md:rounded-b-3xl">
      <Image
        src="/images/assets/prism.png"
        alt="Nicolas Milliard"
        width={90}
        height={84}
        quality={100}
        className="my-4 mr-6"
      />
      <div className="flex flex-col gap-8">
        <div className="flex justify-center gap-10 text-white">
          {SocialLinks.map((socialLink, index) => (
            <SocialLink
              key={index}
              href={socialLink.link}
              target="_blank"
              icon={socialLink.icon}
            >
              {socialLink.name}
            </SocialLink>
          ))}
        </div>
        <Menu className="text-white" />
      </div>
    </footer>
  );
};

export default Footer;
