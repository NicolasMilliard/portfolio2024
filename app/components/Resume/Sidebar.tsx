import { getScopedI18n } from '@app/locales/server';
// Components
import { List, ListItem } from '@components/List';
import { Paragraph } from '@components/Text';
import { GradientTitle, MainTitle, Title } from '@components/Title';
import Image from 'next/image';

const Sidebar = async () => {
  const tIntroduction = await getScopedI18n('Resume.Introduction');
  const tSidebar = await getScopedI18n('Resume.Sidebar');

  return (
    <div>
      <div className="mb-10 h-30 w-30 rounded-full bg-gradient-to-r from-ultramarine to-congo_pink p-0.5">
        <Image
          src="/images/resume/nicolas-milliard.jpg"
          width={120}
          height={120}
          alt="Nicolas Milliard"
          className="rounded-full"
        />
      </div>
      <div className="mb-10 flex flex-col gap-4 md:hidden">
        <MainTitle>Nicolas Milliard</MainTitle>
        <Title isWidest={true}>{tIntroduction('title')}</Title>
      </div>
      <div className="mb-10 hidden gap-6 xs:flex xs:flex-col lg:max-w-52">
        <div className="flex flex-col gap-8 sm:flex-row md:flex-col md:gap-10">
          <section>
            <GradientTitle>{tSidebar('Education.title')}</GradientTitle>
            <div className="flex flex-col gap-2">
              <Paragraph>
                <span className="font-normal">
                  {tSidebar('Education.degrees.0.name')}
                </span>
                <br />
                {tSidebar('Education.degrees.0.school')}
                <br />
                {tSidebar('Education.degrees.0.date')}
              </Paragraph>
              <Paragraph>
                <span className="font-normal">
                  {tSidebar('Education.degrees.1.name')}
                </span>
                <br />
                {tSidebar('Education.degrees.1.school')}
                <br />
                {tSidebar('Education.degrees.1.date')}
              </Paragraph>
            </div>
          </section>
          <section>
            <GradientTitle>{tSidebar('Skills.title')}</GradientTitle>
            <div className="flex gap-4 md:flex-col">
              <List>
                <ListItem>TypeScript</ListItem>
                <ListItem>JavaScript (ES6)</ListItem>
                <ListItem>HTML 5</ListItem>
                <ListItem>CSS 3</ListItem>
                <ListItem>PHP</ListItem>
                <ListItem>Solidity</ListItem>
              </List>
              <List>
                <ListItem>React JS</ListItem>
                <ListItem>Next JS</ListItem>
                <ListItem>Redux</ListItem>
                <ListItem>Recoil JS</ListItem>
                <ListItem>Jest</ListItem>
                <ListItem>TailwindCSS</ListItem>
              </List>
              <List>
                <ListItem>Hardhat</ListItem>
                <ListItem>Foundry</ListItem>
                <ListItem>Wagmi</ListItem>
                <ListItem>Ethers.js</ListItem>
                <ListItem>WalletConnect (Reown)</ListItem>
              </List>
            </div>
          </section>
        </div>
        <div className="flex flex-row gap-4 md:flex-col md:gap-6">
          <section>
            <GradientTitle>{tSidebar('Certifications.title')}</GradientTitle>
            <div className="flex flex-col gap-2">
              <Paragraph>
                <span className="font-normal">
                  {tSidebar('Certifications.certifications.0.name')}
                </span>
                <br />
                {tSidebar('Certifications.certifications.0.school')}
                <br />
                {tSidebar('Certifications.certifications.0.date')}
              </Paragraph>
              <Paragraph>
                <span className="font-normal">
                  {tSidebar('Certifications.certifications.1.name')}
                </span>
                <br />
                {tSidebar('Certifications.certifications.1.school')}
                <br />
                {tSidebar('Certifications.certifications.1.date')}
              </Paragraph>
              <Paragraph>
                <span className="font-normal">
                  {tSidebar('Certifications.certifications.2.name')}
                </span>
                <br />
                {tSidebar('Certifications.certifications.2.school')}
                <br />
                {tSidebar('Certifications.certifications.2.date')}
              </Paragraph>
            </div>
          </section>
          <section>
            <GradientTitle>{tSidebar('Languages.title')}</GradientTitle>
            <Paragraph>
              {tSidebar('Languages.languages.0.name')} (
              {tSidebar('Languages.languages.0.level')})
            </Paragraph>
            <Paragraph>
              {tSidebar('Languages.languages.1.name')} (
              {tSidebar('Languages.languages.1.level')})
            </Paragraph>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
