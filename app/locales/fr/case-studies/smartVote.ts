export const SmartVote = {
  title: 'SmartVote',
  slogan: 'Créez, gérez et rejoignez des sessions de vote',
  visitProject: 'Visiter le projet',
  repository: 'Dépôt',
  Introduction: {
    title: 'Introduction',
    content: [
      {
        paragraph:
          "SmartVote permet aux utilisateurs d'organiser leurs propres instances de vote, d'ajouter des utilisateurs à une liste blanche, de créer des propositions et de comptabiliser les votes. Il fonctionne sur les blockchains Polygon et Avalanche. De manière générale, SmartVote est conçu pour fonctionner avec n'importe quelle blockchain publique ou privée compatible EVM (Ethereum Virtual Machine).",
      },
    ],
  },
  TechnologiesUsed: {
    title: 'Technologies utilisées',
    content: [
      {
        paragraph:
          "Le développement front-end du projet utilise Next.js pour la création de l'application, Rainbow Kit pour la connexion au portefeuille numérique de l'utilisateur, et Ethers.js pour la communication avec la blockchain. Wagmi.sh est intégré pour simplifier la connectivité avec la blockchain et servir de gestionnaire d'état global.",
      },
      {
        paragraph:
          "Le développement blockchain utilise Hardhat, une plateforme pour le développement de smart contracts, avec certains contrats implémentant l'EIP-1167 (Minimal Proxy Contract). De plus, les smart contracts sont Pausable pour permettre aux utilisateurs de la dApp de proposer la \"suppression\" d'une instance de vote (car les suppressions classiques sont impossibles sur la Blockchain), et ils sont Upgradeable pour permettre le clonage et l'enregistrement d'un nouveau propriétaire de contrat.",
      },
      {
        paragraph:
          'Les fonctionnalités de sécurité sont assurées par OpenZeppelin, Chai est utilisé pour les tests unitaires, et Eth-gas-reporter suit les coûts en gas sur la blockchain. Solidity Coverage mesure la couverture de code lors des tests unitaires. Enfin, pour faciliter la récupération des événements enregistrés sur la blockchain, The Graph a été ajouté au projet.',
      },
    ],
  },
  Features: {
    title: 'Fonctionnalités',
    content: [
      {
        paragraph:
          "L'utilisateur peut créer et déployer une nouvelle instance de vote, ajouter des utilisateurs à une liste blanche, créer des propositions et comptabiliser les votes. L'utilisateur peut également voir les détails de l'instance de vote, y compris le nombre de propositions, le nombre de votes, et le nombre d'utilisateurs dans la liste blanche.",
      },
      {
        paragraph:
          'La dApp SmartVote utilise trois smart contracts différents pour fonctionner correctement :',
      },
      {
        paragraph:
          "VotingFactory.sol permet la création d'instances de vote conformément à l'EIP-1167. Bien que cela ajoute un coût supplémentaire de 700 gas par itération, l'EIP-1167 simplifie le contrat VotingFactory et réduit considérablement les coûts de déploiement.",
      },
      {
        paragraph:
          "VotingHandler.sol sert de référence pour les clones créés par VotingFactory. Ce smart contract contient toute la logique des sessions de vote, notamment l'ajout de votants, l'ajout de propositions, le comptage des votes et la gestion des seconds tours. De plus, VotingHandler est Upgradeable pour permettre le clonage et l'enregistrement d'un nouveau propriétaire de contrat. En outre, il est Pausable pour proposer au propriétaire du smart contract la \"suppression\" d'une instance de vote.",
      },
      {
        paragraph:
          "InstancesList.sol agit comme un marque-page, permettant aux non-votants de suivre ou d'arrêter de suivre une instance de vote depuis leur tableau de bord.",
      },
    ],
  },
};
