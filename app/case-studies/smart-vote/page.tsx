// Components
import { githubLogo } from '@app/components/Icons';
import { PrimaryLink, SocialLink } from '@app/components/Link';
import { GradientParagraph, Paragraph } from '@app/components/Text';
import { MainTitle, SectionTitle, Title } from '@app/components/Title';
import Image from 'next/image';
import Link from 'next/link';
// Types
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SmartVote | Nicolas Milliard',
  description: 'SmartVote case study.',
};

const SmartVote = () => {
  return (
    <>
      <section className="mb-32 flex flex-col items-center gap-10">
        <MainTitle>SmartVote</MainTitle>
        <Title>Create, manage and join voting sessions</Title>
        <div className="flex items-center gap-8">
          <PrimaryLink href="https://my-smartvote.vercel.app/" target="_blank">
            Visit project
          </PrimaryLink>
          <SocialLink
            href="https://github.com/NicolasMilliard/SmartVote"
            target="_blank"
            icon={githubLogo}
          >
            Repository
          </SocialLink>
        </div>
        <Image
          src="/images/case-studies/smartvote/smartvote-dapp.webp"
          alt="SmartVote dApp - Nicolas Milliard"
          width={640}
          height={360}
          quality={100}
          className="rounded-3xl shadow-lg"
        />
      </section>
      <section className="mb-20 flex flex-col items-center gap-6">
        <SectionTitle className="lg:w-200">Introduction</SectionTitle>
        <Paragraph>
          SmartVote allows users to organize their own voting instances, add
          users to a whitelist, create proposals, and tally votes. It works on
          the Polygon and Avalanche blockchains. In general, SmartVote is
          designed to work with any public or private EVM (Ethereum Virtual
          Machine) blockchains.
        </Paragraph>
      </section>
      <section className="mb-20 flex flex-col items-center gap-6">
        <SectionTitle className="lg:w-200">Technologies Used</SectionTitle>
        <Paragraph>
          The front-end development of the project involves Next.js for web
          development, Rainbow Kit for linking to the user&apos;s digital
          wallet, and Ethers.js for blockchain communication. Wagmi.sh is
          integrated to streamline blockchain connectivity and serve as a global
          state manager.
        </Paragraph>
        <Paragraph>
          The blockchain development utilizes Hardhat, a platform for smart
          contract development, with some contracts implementing the EIP-1167 (
          <Link
            href="https://eips.ethereum.org/EIPS/eip-1167"
            target="_blank"
            className="text-ultramarine hover:text-congo_pink"
          >
            Minimal Proxy Contract
          </Link>
          ). Additionally, the smart contracts are pausable to enable users of
          the dApp to propose the &quot;deletion&quot; of a voting instance
          (since classic deletions are impossible on the Blockchain), and they
          are upgradeable to allow cloning and registration of a new contract
          owner.
        </Paragraph>
        <Paragraph>
          Security features are provided by OpenZeppelin, Chai is used for unit
          testing, and Eth-gas-reporter tracks gas costs on the blockchain.
          Solidity Coverage measures code coverage during unit tests. Finally,
          to streamline the retrieval of events recorded on the blockchain, The
          Graph has been added to the project.
        </Paragraph>
        <Image
          src="/images/case-studies/smartvote/smartvote-eip-1167.webp"
          alt="SmartVote dApp - Nicolas Milliard"
          width={640}
          height={175}
          quality={100}
          className="rounded-3xl py-2 shadow-lg"
        />
      </section>
      <section className="mb-20 flex flex-col items-center gap-6">
        <SectionTitle className="lg:w-200">Features</SectionTitle>
        <GradientParagraph className="lg:w-200">Front-end</GradientParagraph>
        <Paragraph>
          The user can create and deploy a new voting instance, add users to a
          whitelist, create proposals, and tally votes. The user can also view
          the voting instance details, including the number of proposals, the
          number of votes, and the number of users in the whitelist.
        </Paragraph>
        <GradientParagraph className="lg:w-200">Blockchain</GradientParagraph>
        <Paragraph className="lg:w-200">
          The SmartVote dApp uses three different smart contracts to work
          properly:
        </Paragraph>
        <ul className="col flex max-w-200 list-disc flex-col gap-2">
          <li className="ml-4">
            <Paragraph>
              VotingFactory.sol allows the creation of voting instances in
              accordance with EIP-1167. While it adds an additional cost of 700
              gas per iteration, EIP-1167 simplifies the VotingFactory contract
              and greatly reduces deployment costs;
            </Paragraph>
          </li>
          <li className="ml-4">
            <Paragraph>
              VotingHandler.sol serves as a reference to the clones created by
              VotingFactory. This smart contract contains all the logic for
              voting sessions, including adding voters, adding proposals,
              counting votes, and managing second rounds. Additionally,
              VotingHandler is upgradeable to enable cloning and registration of
              a new contract owner. Moreover, it is pausable to propose to smart
              contract owner the &quot;deletion&quot; of a voting instance.
            </Paragraph>
          </li>
          <li className="ml-4">
            <Paragraph>
              InstancesList.sol acts as a bookmark, allowing non-voters to
              follow or stop following a voting instance from their dashboard.
            </Paragraph>
          </li>
        </ul>
      </section>
    </>
  );
};

export default SmartVote;
