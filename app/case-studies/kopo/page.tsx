// Components
import { PrimaryLink, SocialLink } from "@app/components/Link";
import { GradientParagraph, Paragraph } from "@app/components/Text";
import { MainTitle, SectionTitle, Title } from "@app/components/Title";
import Image from "next/image";
// Types
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kopo | Nicolas Milliard",
  description: "Kopo case study.",
};

const Kopo = () => {
  const githubIcon = "/images/social/github-logo.svg";

  return (
    <>
      <section className="mb-32 flex flex-col items-center gap-10">
        <MainTitle>Kopo</MainTitle>
        <Title>Your energy renovation made easy</Title>
        <div className="flex items-center gap-8">
          <PrimaryLink href="" target="_blank">
            Visit project
          </PrimaryLink>
          <SocialLink
            href="https://kopo.vercel.app/"
            target="_blank"
            icon={githubIcon}
          >
            Repository
          </SocialLink>
        </div>
        <Image
          src="/images/case-studies/kopo/kopo-dapp.webp"
          alt="Kopo dApp - Nicolas Milliard"
          width={640}
          height={360}
          quality={100}
          className="rounded-3xl shadow-lg"
        />
      </section>
      <section className="mb-20 flex flex-col items-center gap-6">
        <SectionTitle className="lg:w-200">Introduction</SectionTitle>
        <Paragraph>
          Kopo is an innovative dApp that allows individuals to simplify the
          process of applying for Energy Saving Certificates (ESC). With Kopo,
          beneficiaries can follow in real time the progress of their
          application from the platform. The particularity of Kopo is that all
          the files created are stored on the blockchain, thus offering
          transparency and total traceability.
        </Paragraph>
        <Paragraph>
          Moreover, since the blockchain is unforgeable and immutable, records
          cannot be altered or deleted. The dApp has been developed to be easy
          to use, secure and transparent to provide an optimal user experience.
        </Paragraph>
      </section>
      <section className="mb-20 flex flex-col items-center gap-6">
        <SectionTitle className="lg:w-200">Project Context</SectionTitle>
        <Paragraph>
          In France, Energy Saving Certificates (ESC) have been set up to help
          individuals to finance their energy renovation work. However, the
          process to obtain these aids is often long and opaque, with many backs
          and forth between the different stakeholders, which can take more than
          6 months.
        </Paragraph>
        <Image
          src="/images/case-studies/kopo/kopo-esc-workflow.webp"
          alt="Kopo dApp - Nicolas Milliard"
          width={640}
          height={360}
          quality={100}
          className="rounded-3xl shadow-lg"
        />
        <Paragraph>
          In addition, there has been an increase in the number of cases of
          fraud, which has led to a strengthening of control and security
          measures, with an anti-fraud budget that has risen from 0.5 million
          euros to 7 million euros in just three years. Yet ESC are essential to
          achieving Europe&apos;s 2050 greenhouse gas emission reduction
          targets. It is important to note that the slightest error or
          irregularity can invalidate a folder, which can discourage individuals
          from undertaking energy renovation work.
        </Paragraph>
        <Paragraph>
          Kopo was developed in this context to simplify and secure the ESC
          application process and thus facilitate access to grands for
          individuals.
        </Paragraph>
      </section>
      <section className="mb-20 flex flex-col items-center gap-6">
        <SectionTitle className="lg:w-200">Presentation of Kopo</SectionTitle>
        <Paragraph>
          Kopo is a decentralized platform that allows users to simplify and
          secure their requests for Energy Saving Certificates (ESC). It uses
          blockchain technology to guarantee the transparency and immutability
          of data exchanged between beneficiaries and obligated parties.
        </Paragraph>
        <Paragraph>
          Throughout the process, the unique smart contract associated with the
          application allows the progress of the application to be tracked in a
          transparent and unchangeable manner. Kopo offers an innovative and
          efficient solution to simplify and accelerate the ESC application
          process, while guaranteeing its security and authenticity thanks to
          blockchain technology.
        </Paragraph>
      </section>
      <section className="mb-20 flex flex-col items-center gap-6">
        <SectionTitle className="lg:w-200">Technologies Used</SectionTitle>
        <Paragraph>
          The front-end development of the project involves Next.js for web
          development, Rainbow Kit for linking to the user&apos;s digital
          wallet, Ethers.js for blockchain communication, and NFT.storage for
          NFT management. Wagmi.sh is integrated to streamline blockchain
          connectivity and serve as a global state manager.
        </Paragraph>
        <Paragraph>
          The backend development utilizes Hardhat, a platform for smart
          contract development, with some contracts being Upgradeable for future
          modifications. Security features are provided by OpenZeppelin, while
          Chai is used for unit testing and Eth-gas-reporter tracks gas costs on
          the blockchain. Solidity Coverage measures code coverage during unit
          tests.
        </Paragraph>
      </section>
      <section className="mb-20 flex flex-col items-center gap-6">
        <SectionTitle className="lg:w-200">Features</SectionTitle>
        <Paragraph>
          Kopo offers intuitive user paths for beneficiaries and obligated
          parties, streamlining the ESC application process. Smart contracts
          manage document validation, ensuring security and authenticity.
        </Paragraph>
        <Image
          src="/images/case-studies/kopo/kopo-dapp-ux.webp"
          alt="Kopo dApp - Nicolas Milliard"
          width={640}
          height={175}
          quality={100}
          className="rounded-3xl shadow-lg"
        />
        <GradientParagraph className="lg:w-200">Front-end</GradientParagraph>
        <Paragraph>
          The beneficiary path begins by connecting the user&apos;s digital
          wallet to the dApp. Once this connection is established, Kopo displays
          the user&apos;s existing ESC folders and allow the user to create new
          ones.
        </Paragraph>
        <Paragraph>
          The creation of a folder involves the deployment of a smart contract
          which represents the folder on the blockchain. Then, the user can add
          a document to the created folder, such as a renovation estimate, which
          will be converted to an NFT and sent to the designated obligated for
          validation. The document will then appear as &quot;pending&quot; until
          the obligator validates or rejects it.
        </Paragraph>
        <Paragraph>
          The dApp uses the event of the smart contracts present on the
          blockchain to display the folders and the documents. The documents to
          be validated appear directly and the obligated can view, validate, or
          reject them easily.
        </Paragraph>
        <GradientParagraph className="lg:w-200">Blockchain</GradientParagraph>
        <Paragraph className="lg:w-200">
          The Kopo dApp uses five different smart contracts to work properly:
        </Paragraph>
        <ul className="col flex max-w-200 list-disc flex-col gap-2">
          <li className="ml-4">
            <Paragraph>
              The KopoAddressProvider is an Upgradeable smart contract serving
              as a router for the dApp, linking the Kopo interface with various
              smart contracts. It is adaptable and allows updates to integrate
              new smart contracts or modify their Ethereum addresses as required
              by Kopo.
            </Paragraph>
          </li>
          <li className="ml-4">
            <Paragraph>
              The KopoFolderFactory is a Factory-type smart contract enabling
              the duplication of the &quot;KopoFolderHandler&quot; smart
              contract, which represents the ESC application folder on the
              blockchain.
            </Paragraph>
          </li>
          <li className="ml-4">
            <Paragraph>
              The KopoFolderHandler is a smart contract of type ERC721 and
              IERC721Receiver, representing the ESC application file. It can
              receive NFTs representing proofs of claim (documents) and mint a
              single NFT to represent the folder. This NFT can be utilized in
              DeFi for transfer or collateralization operations.
            </Paragraph>
          </li>
          <li className="ml-4">
            <Paragraph>
              The KopoDocumentHandler is a smart contract of type ERC721 that
              enables the generation of NFTs based on user-entered data and
              links them to the appropriate folder. To enhance security during
              potential file transfers, NFTs cannot be transmitted without
              recipient consent.
            </Paragraph>
          </li>
        </ul>
      </section>
      <section className="mb-20 flex flex-col items-center gap-6">
        <SectionTitle className="lg:w-200">Conclusion</SectionTitle>
        <Paragraph>
          Kopo revolutionizes ESC management, providing a secure, transparent,
          and efficient solution. Its use of cutting-edge technologies and smart
          contracts minimizes transaction costs while maximizing functionality,
          ultimately benefiting both users and obligated parties.
        </Paragraph>
      </section>
    </>
  );
};

export default Kopo;
