'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

const tutorials = [
  {
    title: "Building a dApp on Dot Protocol",
    description: "Learn how to create a full-stack decentralized application from scratch",
    difficulty: "Intermediate",
    duration: "45 mins",
    icon: "🏗️",
    topics: ["Web3.js", "React", "Smart Contracts"],
    codeExample: `// Connect to Dot Protocol
const provider = new DotProtocolProvider('mainnet');
const signer = provider.getSigner();

// Initialize contract
const contract = new ethers.Contract(
  contractAddress,
  contractABI,
  signer
);`
  },
  {
    title: "Creating and Minting DPC20 Tokens",
    description: "Step-by-step guide to token creation and management",
    difficulty: "Beginner",
    duration: "30 mins",
    icon: "💎",
    topics: ["DPC20", "Solidity", "Web3"],
    codeExample: `// Deploy token contract
const Token = await ethers.getContractFactory("DPC20Token");
const token = await Token.deploy(
  "MyToken",
  "MTK",
  ethers.utils.parseEther("1000000")
);
await token.deployed();`
  },
  {
    title: "Flash Loans and Arbitrage",
    description: "Advanced tutorial on implementing flash loan functionality",
    difficulty: "Advanced",
    duration: "60 mins",
    icon: "⚡",
    topics: ["DeFi", "Flash Loans", "Arbitrage"],
    codeExample: `// Execute flash loan
await flashLoan.executeOperation(
  assets,
  amounts,
  premiums,
  initiator,
  params
);

// Perform arbitrage
const profit = await performArbitrage(
  tokenA,
  tokenB,
  amount
);`
  },
  {
    title: "Integrating 3DOT Wallet",
    description: "Add wallet authentication and token handling to your dApp",
    difficulty: "Intermediate",
    duration: "40 mins",
    icon: "👛",
    topics: ["Authentication", "Wallet Connect", "Security"],
    codeExample: `// Initialize 3DOT Wallet
const wallet = new DOTWallet({
  chainId: 1,
  rpcUrl: 'https://rpc.dotprotocol.network'
});

// Connect wallet
await wallet.connect();`
  }
];

export default function Tutorials() {
  const [selectedTutorial, setSelectedTutorial] = useState(0);

  return (
    <section id="tutorials" className="relative py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-300 to-primary bg-clip-text text-transparent">
            Tutorials and Code Samples
          </h2>
          <p className="text-xl text-gray-200">
            Step-by-step guides to help you build on Dot Protocol
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">
          {/* Tutorial List */}
          <div className="lg:col-span-1 space-y-4">
            {tutorials.map((tutorial, index) => (
              <motion.div
                key={tutorial.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`cursor-pointer p-4 rounded-xl transition-all ${
                  selectedTutorial === index
                    ? 'bg-primary/10 border border-primary'
                    : 'bg-dark-200/50 border border-dark-50 hover:bg-dark-200/70'
                }`}
                onClick={() => setSelectedTutorial(index)}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{tutorial.icon}</span>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {tutorial.title}
                    </h3>
                    <div className="flex items-center gap-3 mt-1 text-sm">
                      <span className="text-primary">{tutorial.difficulty}</span>
                      <span className="text-gray-400">{tutorial.duration}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tutorial Content */}
          <motion.div
            key={selectedTutorial}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 bg-dark-200/50 backdrop-blur-sm border border-dark-50 rounded-xl p-6"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="text-4xl">
                {tutorials[selectedTutorial].icon}
              </span>
              <div>
                <h3 className="text-2xl font-bold text-white">
                  {tutorials[selectedTutorial].title}
                </h3>
                <p className="text-gray-300 mt-1">
                  {tutorials[selectedTutorial].description}
                </p>
              </div>
            </div>

            {/* Topics */}
            <div className="flex flex-wrap gap-2 mb-6">
              {tutorials[selectedTutorial].topics.map((topic) => (
                <span
                  key={topic}
                  className="px-3 py-1 bg-dark-300/50 rounded-full text-xs text-primary border border-primary/20"
                >
                  {topic}
                </span>
              ))}
            </div>

            {/* Code Example */}
            <div className="bg-dark-400/50 rounded-lg p-4 font-mono text-sm text-gray-300 overflow-x-auto">
              <pre>{tutorials[selectedTutorial].codeExample}</pre>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mt-6">
              <button className="px-4 py-2 bg-primary hover:bg-primary-600 text-white rounded-lg transition-colors">
                Start Tutorial
              </button>
              <button className="px-4 py-2 border border-primary text-primary hover:bg-primary/10 rounded-lg transition-colors">
                View on GitHub
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 