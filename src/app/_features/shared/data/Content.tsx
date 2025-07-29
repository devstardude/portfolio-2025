import {
  ExternalLink,
  Star,
  Code,
  Database,
  Monitor,
  Cloud,
  GitBranch,
  Briefcase,
  Zap,
  TrendingUp,
  Building,
  Users,
} from "lucide-react"

export const experiences = [
  {
    title: "Frontend - Blockchain Engineer",
    company: "BrahamFi",
    location: "British Virgin Islands",
    period: "Jan 2023 - Present",
    type: "Full-time",
    current: true,
    highlights: [
      "Contributed to multiple Web3 DeFi apps providing custodial services and on-chain execution environment",
      "Developed 'Console' from scratch serving as execution environment for SAFE wallets",
      "Merged 100k+ lines of code into production ensuring efficiency and scalability",
      "Implemented multi-sig functionality, transaction builder, send, swap, and DeFi dashboard",
      "Helped secure $2.5M seed round extension led by Greenfield Capital",
    ],
    tech: ["Next.js", "TypeScript", "Ethers", "Web3", "DeFi", "SAFE Wallets"],
    achievements: [
      "$2.5M seed funding secured",
      "100k+ lines of code merged",
      "Built Console from scratch",
    ],
  },
  {
    title: "Software Engineer Developer",
    company: "Gateway Inc",
    location: "New Jersey, US",
    period: "Nov 2021 - Feb 2022",
    type: "Full-time",
    current: false,
    highlights: [
      "Built React, TypeScript, Web3, GraphQL, AWS web application for DAO Community",
      "Replaced Firestore and Firebase auth with AWS Cognito and DynamoDB",
      "Increased speed and scalability while reducing costs by 60%",
      "Implemented Feed feature with threads, upvotes, and downvotes",
      "Helped raise $30k USD grant funding from OlympusDAO",
    ],
    tech: [
      "React",
      "TypeScript",
      "Web3",
      "GraphQL",
      "AWS",
      "DynamoDB",
      "Cognito",
    ],
    achievements: [
      "$30k grant funding secured",
      "60% cost reduction",
      "Scalable feed system built",
    ],
  },
]

export const currentProjects = [
  {
    title: "The Sky x Memories",
    description:
      "Community-focused platform for Sky: Children of the Light players to save, share, and revisit in-game memories",
    period: "June 2024 - Present",
    status: "Active Development",
    image: "https://i.ibb.co/HWJNs2f/image.png",
    metrics: [
      {
        label: "Active Users",
        value: "350+",
        icon: <Users className="w-4 h-4" />,
      },
      {
        label: "Shared Memories",
        value: "3,000+",
        icon: <Star className="w-4 h-4" />,
      },
      {
        label: "Monthly Views",
        value: "4k",
        icon: <TrendingUp className="w-4 h-4" />,
      },
      {
        label: "Unique Visitors",
        value: "1k+",
        icon: <Users className="w-4 h-4" />,
      },
    ],
    community: [
      { platform: "TikTok", followers: "1k+" },
      { platform: "Instagram", followers: "600+" },
      { platform: "Discord", members: "300+" },
    ],
    tech: ["Next.js", "Chakra UI", "PostgreSQL", "Community Management"],
    highlights: [
      "Achieved 350+ active users within first 4 months",
      "Built strong social media presence across multiple platforms",
      "Gaining experience in project management and user acquisition",
      "Active community building and marketing strategies",
    ],
  },
]

export const projects = [
  {
    name: "Visitereum",
    description:
      "Track your visited places on Blockchain with Decentralised identity and so much more...",
    ribbon: "Blockchain",
    highlight: true,
    tech: [
      "Next.js",
      "Blockchain",
      "TypeScript",
      "IPFS",
      "Ceramic",
      "TailwindCSS",
    ],
    image: "https://i.ibb.co/tQfKqB0/image.png",
    projectLink: "https://visitereum.vercel.app/",
    githubLink: "https://github.com/devstardude/visitereum",
    youtubeLink: "https://www.youtube.com/embed/cGoyAaqmhsw",
    features: [
      "Track and store visited places details in Polygon Blockchain",
      "Authentication by Ceramic Decentralised Identity, manage your DID profile within the app",
      "Automatic place search and Map rendering",
      "Earn NFTs based on the types of places you visit, and share them on social platforms",
      "Save data assets in a decentralised way into IPFS",
      "Claim exclusive merchandise with your NFTs (In development)",
      "Responsive and Fast",
    ],
    stack: {
      frontend: ["Next.js with TypeScript", "Material UI", "TailwindCSS"],
      blockchain: [
        "Solidity for writing smart contracts",
        "IPFS for decentralized storage",
        "Ceramic DID",
        "Thirdweb",
      ],
      deployment: ["Frontend on Vercel and Smart contracts on Polygon Mumbai"],
    },
  },
  {
    name: "Docthereum",
    description:
      "A Web3 decentralized app to maintain anonymous medical reports and aids in seamless healthcare across the globe.",
    ribbon: "Blockchain",
    highlight: true,
    tech: ["React", "Blockchain", "Chainlink", "IPFS", "Graph", "TailwindCSS"],
    image: "https://i.ibb.co/Cbx1dbk/new-dp.png",
    projectLink: "https://docthereum.web.app/",
    githubLink: "https://github.com/devstardude/Docthereum",
    youtubeLink: "https://www.youtube.com/embed/uwM1e-83o0A",
    features: [
      "Stores records over a decentralized network and records cannot be tampered with",
      "Maintains records linked to patients' Ethereum's public address, providing anonymity",
      "Anonymous reports can be provided to researchers to aid in their studies",
      "Built a Decentralized autonomous organization with voting system",
      "Free NFT minting to become part of Docthereum DAO",
    ],
    stack: {
      frontend: ["React.js with Hooks", "Material UI", "TailwindCSS"],
      blockchain: [
        "Solidity for writing smart contracts",
        "IPFS for decentralized storage",
        "The Graph for indexing events",
        "Chainlink for verification",
      ],
      deployment: ["Frontend on Firebase and Smart contracts on Rinkby"],
    },
  },
  {
    name: "Visité - A Place Tracker",
    description:
      "Track places you have visited, or wishlist (And get Badges). Socialize with other users by Liking their shared places and posts.",
    ribbon: "MERN",
    highlight: true,
    tech: [
      "MERN",
      "React",
      "Node",
      "MongoDB",
      "Firebase",
      "Bootstrap",
      "Material-UI",
    ],
    image: "https://i.ibb.co/VJVhjj1/visite-display-pic-1.png",
    projectLink: "https://visite-place-tracker.vercel.app/",
    githubLink: "https://github.com/devstardude/Visite-place-tracker",
    youtubeLink: "https://www.youtube.com/embed/sncySXQQKFQ",
    features: [
      "Share Places and get badges (Visible to the world)",
      "Wishlist Places (Only visible to the user)",
      "Share Posts in Markdown Format",
      "Like other Profiles and Send Messages",
      "Automatic search any place around the world",
      "Render Map of the address",
      "Public chatbox that shows real-time messages",
      "Admin only protected route that can post global blogposts",
    ],
    stack: {
      frontend: ["React.js with Hooks", "Material UI", "Bootstrap"],
      backend: ["Node.js with Express"],
      database: ["MongoDB with Mongoose", "Cloud Firestore"],
      deployment: ["Frontend on Vercel and Backend on Render"],
    },
  },
  {
    name: "NFT Collection",
    description:
      "A Next.js with TypeScript Dapp to fetch user's NFT and collection's NFTs from multiple collections.",
    ribbon: "Next.js+TS",
    highlight: true,
    tech: ["Next.js", "TypeScript", "Alchemy", "TailwindCSS", "Thirdweb"],
    image: "https://i.ibb.co/sj5vQzZ/Screenshot-2022-09-14-011254.png",
    projectLink: "https://nft-collection-learnweb.vercel.app/",
    githubLink: "https://github.com/devstardude/Nft-collection",
    youtubeLink: "https://www.youtube.com/embed/JjRruxXGRTM",
    features: [
      "Fetch NFTs owned by the user from multiple NFTs collections",
      "Fetch all NFTs minted in an NFTs collections",
      "Pagination (Initial limit is 20 NFTs, user can see next 20 NFTs)",
      "Detect current Network and show a warning when not connected",
      "Users can share owned NFTs on Social platforms",
      "Light and Dark mode with responsive website",
    ],
    stack: {
      frontend: ["Next.js with TypeScript", "TailwindCSS"],
      blockchain: [
        "Alchemy API to fetch NFTs from OpenSea",
        "Thirdweb for wallet connection and network detection",
      ],
      deployment: ["Deployed on Vercel"],
    },
  },
]

export const techs = [
  {
    title: "Front-End",
    desc: "React, Redux, Next.js, TypeScript, Jest Testing",
    icon: <Code className="w-8 h-8" />,
  },
  {
    title: "Back-End",
    desc: "Node, Express, REST, GraphQL, Go API",
    icon: <Database className="w-8 h-8" />,
  },
  {
    title: "Database",
    desc: "MongoDB, Firestore, DynamoDB",
    icon: <Database className="w-8 h-8" />,
  },
  {
    title: "UI/UX",
    desc: "Tailwind CSS, Material UI, Framer motion",
    icon: <Monitor className="w-8 h-8" />,
  },
  {
    title: "Cloud Services",
    desc: "Firebase, AWS",
    icon: <Cloud className="w-8 h-8" />,
  },
  {
    title: "Version Tracking",
    desc: "Git, GitHub, GitLab",
    icon: <GitBranch className="w-8 h-8" />,
  },
  {
    title: "Languages",
    desc: "Python, JavaScript, C++, Go, TypeScript, Solidity",
    icon: <Code className="w-8 h-8" />,
  },
  {
    title: "Blockchain",
    desc: "Blockchain, NFTs applications, Discord.js Bots",
    icon: <Zap className="w-8 h-8" />,
  },
  {
    title: "Project Management",
    desc: "Notion, Asana, Trello, Slack",
    icon: <Briefcase className="w-8 h-8" />,
  },
]

export const blogs = [
  {
    name: "How to deploy React app on remote Linux server using NGINX in Linode",
    description:
      "Linode products, services, and people enable developers and businesses to build, deploy, and scale applications more easily and cost-effectively in the cloud.",
    image:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--aWdeRRJz--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/0ueeu67ratzne0es3t3d.png",
    ribbon: "dev.to",
    link: "https://dev.to/devstardude/how-to-deploy-react-app-on-remote-linux-server-using-nginx-in-linode-3iid",
  },
  {
    name: "Aave explained",
    description:
      "Aave is a decentralized finance (DeFi) platform that allows users to borrow and lend cryptocurrencies. It is built on the Ethereum blockchain and uses a protocol called 'smart contracts' to facilitate lending and borrowing.",
    image:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--FWZuQbEo--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/e9vjuu0zn5pjp0m1usbm.jpg",
    ribbon: "dev.to",
    link: "https://dev.to/devstardude/aave-explained-3po2",
  },
  {
    name: "Uniswap explained",
    description:
      "Uniswap is a decentralized exchange (DEX) built on the Ethereum blockchain. It allows users to easily trade Ethereum-based tokens without the need for a centralized authority or intermediaries. ",
    image:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--a7sO3VJU--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/1jnmijs6ndin6n77g034.png",
    ribbon: "dev.to",
    link: "https://dev.to/devstardude/uniswap-explained-52bn",
  },
]

export const achievements = [
  {
    text: "'Moderatore - A Decentralized moderation mechanism' app won",
    highlight: "Best use of Chainlink function in ETH India 2023",
  },
  {
    text: "Open source contribution to a popular react component library",
    highlight: "Mantine with 80k+ per month downloads",
  },
  {
    text: "Secured IPFS, The Graph, and chainlink bounties worth $2000USD in",
    highlight: "ETHernals 2022 Hackathon",
  },
  {
    text: "Secured 2nd Position in",
    highlight: "IIT Delhi Blockchain Hackathon",
  },
  {
    text: "Organized more than 10 events as Joint Secretary of a Technical Society 'Manan' having 100+members and given a",
    highlight: "Tech Talk on Kickstarting Web Development",
  },
  {
    text: "Docthereum app is listed in the",
    highlight: "Hall of Fame on the Filecoin website",
  },
]
