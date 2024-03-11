import Menu from "@app/components/Navbar/Menu";
import SocialLink from "@app/components/SocialLink";
import Image from "next/image";

const Footer = () => {
  const githubLink = "https://github.com/NicolasMilliard";
  const githubIcon = "/images/social/github-logo.svg";
  const linkedInLink = "https://fr.linkedin.com/in/nicolas-milliard";
  const linkedInIcon = "/images/social/linkedin-logo.svg";

  return (
    <footer className="flex items-center justify-center gap-20 rounded-b-3xl bg-black py-8">
      <Image
        src="/images/prism.png"
        alt="Nicolas Milliard"
        width={90}
        height={84}
        quality={100}
        className="my-4 mr-6"
      />
      <div className="flex flex-col gap-8">
        <div className="flex justify-center gap-30 text-white">
          <SocialLink text="GitHub" link={githubLink} icon={githubIcon} />
          <SocialLink text="LinkedIn" link={linkedInLink} icon={linkedInIcon} />
        </div>
        <Menu isTextWhite={true} />
      </div>
    </footer>
  );
};

export default Footer;
