export const Kopo = {
  title: 'Kopo',
  slogan: 'La rénovation énergétique simplifiée',
  visitProject: 'Visiter le projet',
  repository: 'Dépôt',
  Introduction: {
    title: 'Introduction',
    content: [
      {
        paragraph:
          "Kopo est une dApp innovante qui simplifie le processus de demande de Certificats d'Économie d'Énergie (CEE). Avec Kopo, les bénéficiaires peuvent suivre en temps réel l’avancement de leur demande directement depuis la plateforme. La particularité de Kopo réside dans le stockage de tous les dossiers sur la blockchain, garantissant ainsi une transparence et une traçabilité totale.",
      },
      {
        paragraph:
          "De plus, comme la blockchain est infalsifiable et immuable, les enregistrements ne peuvent être ni modifiés ni supprimés. La dApp a été conçue pour être facile d'utilisation, sécurisée et transparente, afin d'offrir une expérience utilisateur optimale.",
      },
    ],
  },
  ProjectContext: {
    title: 'Contexte du projet',
    content: [
      {
        paragraph:
          "En France, les Certificats d'Économies d'Énergie (CEE) ont été mis en place pour aider les particuliers à financer leurs travaux de rénovation énergétique. Cependant, le processus pour obtenir ces aides est souvent long et opaque, avec de nombreux allers-retours entre les différents acteurs, ce qui peut prendre plus de 6 mois.",
      },
      {
        paragraph:
          "De plus, le nombre de cas de fraude a augmenté, ce qui a conduit à un renforcement des mesures de contrôle et de sécurité, avec un budget anti-fraude qui est passé de 0,5 million d'euros à 7 millions d'euros en seulement trois ans. Pourtant, les CEE sont essentiels pour atteindre les objectifs de réduction des émissions de gaz à effet de serre de l'Europe pour 2050. Il est important de noter que la moindre erreur ou irrégularité peut invalider un dossier, ce qui peut décourager les particuliers de s'engager dans des travaux de rénovation énergétique.",
      },
      {
        paragraph:
          "Kopo a été développé dans ce contexte pour simplifier et sécuriser le processus de demande de CEE, facilitant ainsi l'accès aux subventions pour les particuliers.",
      },
    ],
  },
  Presentation: {
    title: 'Présentation de Kopo',
    content: [
      {
        paragraph:
          "Kopo est une plateforme décentralisée qui permet aux utilisateurs de simplifier et de sécuriser leurs demandes de Certificats d'Economies d'Energie (CEE). Elle utilise la technologie blockchain pour garantir la transparence et l'immuabilité des données échangées entre les bénéficiaires et les parties obligées.",
      },
      {
        paragraph:
          "Tout au long du processus, le smart contract associé à la demande permet de suivre l'avancement de la candidature de manière transparente et immuable. Kopo propose une solution innovante et efficace pour simplifier et accélérer le processus de demande de CEE, tout en garantissant sa sécurité et son authenticité grâce à la technologie blockchain.",
      },
    ],
  },
  TechnologiesUsed: {
    title: 'Technologies utilisées',
    content: [
      {
        paragraph:
          "Le développement front-end du projet utilise Next.js pour la création du site web, Rainbow Kit pour la connexion au portefeuille numérique de l'utilisateur, Ethers.js pour la communication avec la blockchain, et NFT.storage pour la gestion des NFT. Wagmi.sh est intégré pour faciliter la connectivité blockchain et servir de gestionnaire d'état global.",
      },
      {
        paragraph:
          'Le développement blockchain utilise Hardhat, une plateforme pour le développement de smart contracts, certains contrats étant modulables pour des modifications futures. Les fonctionnalités de sécurité sont fournies par OpenZeppelin, tandis que Chai est utilisé pour les tests unitaires et Eth-gas-reporter suit les coûts de gaz sur la blockchain. Solidity Coverage mesure la couverture de code lors des tests unitaires.',
      },
    ],
  },
  Features: {
    title: 'Fonctionnalités',
    content: [
      {
        paragraph:
          'Kopo propose des parcours utilisateur intuitifs pour les bénéficiaires et les parties obligées, simplifiant ainsi le processus de demande de CEE. Les smart contracts gèrent la validation des documents, garantissant sécurité et authenticité.',
      },
      {
        paragraph:
          "Le parcours du bénéficiaire commence par la connexion du portefeuille numérique de l'utilisateur à la dApp. Une fois cette connexion établie, Kopo affiche les dossiers CEE existants de l'utilisateur et lui permet d'en créer de nouveaux.",
      },
      {
        paragraph:
          "La création d'un dossier implique le déploiement d'un smart contract qui représente le dossier sur la blockchain. Ensuite, l'utilisateur peut ajouter un document au dossier créé, tel qu'un devis de rénovation, qui sera converti en NFT et envoyé à l'obligé désigné pour validation. Le document apparaîtra ensuite comme \"en attente\" jusqu'à ce que l'obligé le valide ou le rejette.",
      },
      {
        paragraph:
          "La dApp utilise les événements des smart contracts présents sur la blockchain pour afficher les dossiers et les documents. Les documents à valider apparaissent directement, et l'obligé peut les consulter, les valider ou les rejeter facilement.",
      },
      {
        paragraph:
          "L'application Kopo utilise cinq smart contracts différents pour fonctionner correctement :",
      },
      {
        paragraph:
          "Le KopoAddressProvider est un smart contract Upgradeable servant de routeur pour l'application décentralisée (dApp), reliant l'interface Kopo à divers smart contracts. Il est adaptable et permet des mises à jour pour intégrer de nouveaux smart contracts ou modifier leurs adresses Ethereum selon les besoins de Kopo.",
      },
      {
        paragraph:
          'Le KopoFolderFactory est un smart contract de type Factory permettant de dupliquer le smart contract "KopoFolderHandler", qui représente le dossier de demande de Certificat d\'Économie d\'Énergie (ESC) sur la blockchain.',
      },
      {
        paragraph:
          'Le KopoFolderHandler est un smart contract de type ERC721 et IERC721Receiver, représentant le dossier de demande de CEE. Il est capable de recevoir des NFTs représentant des justificatifs de demande (documents) et de mint un NFT unique pour représenter le dossier. Ce NFT peut être utilisé dans la finance décentralisée (DeFi) pour des opérations de transfert ou de mise en garantie.',
      },
      {
        paragraph:
          "Le KopoDocumentHandler est un smart contract de type ERC721 qui permet la génération de NFTs basés sur les données saisies par l'utilisateur et les associe au dossier approprié. Pour renforcer la sécurité lors de transferts de fichiers potentiels, les NFTs ne peuvent pas être transmis sans le consentement du destinataire.",
      },
    ],
  },
  Conclusion: {
    title: 'Conclusion',
    paragraph:
      "Kopo révolutionne la gestion des Certificats d'Economies d'Energie (CEE) en offrant une solution sécurisée, transparente et efficace. Son utilisation de technologies de pointe et de smart contracts minimise les coûts de transaction tout en maximisant leur fonctionnement, ce qui profite finalement à la fois aux utilisateurs et aux parties obligées.",
  },
};
