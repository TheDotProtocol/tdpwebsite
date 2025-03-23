'use client';
import { motion } from 'framer-motion';

const apis = [
  {
    title: "Dot Protocol Blockchain API",
    description: "Query block and transaction data with our comprehensive blockchain API.",
    icon: "🔍",
    example: `// Query block information
const response = await dotProtocol.getBlock({
  blockNumber: "latest"
});

// Get transaction details
const tx = await dotProtocol.getTransaction({
  hash: "0x..."
});`,
    endpoints: ["Block Data", "Transaction Info", "Network Stats"]
  },
  {
    title: "DPC20 Token API",
    description: "Create and manage DPC20 tokens with advanced features like rebasing and flash loans.",
    icon: "💎",
    example: `// Deploy a new DPC20 token
const token = await DPC20.deploy({
  name: "MyToken",
  symbol: "MTK",
  initialSupply: "1000000"
});

// Configure rebase parameters
await token.setRebaseParams({
  targetPrice: "1.00",
  interval: 24 * 3600
});`,
    endpoints: ["Token Creation", "Supply Management", "Flash Loans"]
  },
  {
    title: "Price Oracle Integration",
    description: "Access real-time price data for DeFi applications and token management.",
    icon: "📊",
    example: `// Get latest price feed
const price = await oracle.getPrice({
  token: "DPC20",
  currency: "USD"
});

// Subscribe to price updates
oracle.subscribe("DPC20/USD", (update) => {
  console.log("New price:", update.price);
});`,
    endpoints: ["Price Feeds", "Historical Data", "WebSocket Updates"]
  }
];

const sdks = [
  {
    name: "JavaScript SDK",
    icon: "🌐",
    description: "Build web-based dApps and integrate with browsers",
    features: ["Web3 Integration", "Wallet Connect", "Event Handling"],
    npm: "@dotprotocol/sdk"
  },
  {
    name: "Python SDK",
    icon: "🐍",
    description: "Create trading bots and backend services",
    features: ["Async Support", "Data Analysis", "Automated Trading"],
    pip: "dot-protocol-sdk"
  },
  {
    name: "Mobile SDK",
    icon: "📱",
    description: "Native iOS and Android development",
    features: ["Native Bindings", "Secure Storage", "Push Notifications"],
    platforms: ["iOS", "Android"]
  }
];

export default function ApiSDK() {
  return (
    <section id="apis-sdks" className="relative py-20 bg-dark-300/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-300 to-primary bg-clip-text text-transparent">
            APIs and SDKs
          </h2>
          <p className="text-xl text-gray-200">
            Powerful tools to build and integrate with the Dot Protocol ecosystem
          </p>
        </motion.div>

        {/* APIs Section */}
        <div className="max-w-7xl mx-auto mb-20">
          <h3 className="text-2xl font-bold text-white mb-8">Available APIs</h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {apis.map((api, index) => (
              <motion.div
                key={api.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-dark-200/50 backdrop-blur-sm border border-dark-50 rounded-xl p-6"
              >
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{api.icon}</span>
                  <h4 className="text-xl font-semibold text-white">{api.title}</h4>
                </div>
                <p className="text-gray-300 mb-4">{api.description}</p>
                
                {/* Code Example */}
                <div className="bg-dark-400/50 rounded-lg p-4 mb-4 font-mono text-sm text-gray-300 overflow-x-auto">
                  <pre>{api.example}</pre>
                </div>

                {/* Endpoints */}
                <div className="flex flex-wrap gap-2">
                  {api.endpoints.map((endpoint) => (
                    <span
                      key={endpoint}
                      className="px-3 py-1 bg-dark-300/50 rounded-full text-xs text-primary border border-primary/20"
                    >
                      {endpoint}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* SDKs Section */}
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-8">Development SDKs</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {sdks.map((sdk, index) => (
              <motion.div
                key={sdk.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-dark-200/50 backdrop-blur-sm border border-dark-50 rounded-xl p-6 hover:bg-dark-200/70 transition-all"
              >
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{sdk.icon}</span>
                  <h4 className="text-xl font-semibold text-white">{sdk.name}</h4>
                </div>
                <p className="text-gray-300 mb-4">{sdk.description}</p>
                
                {/* Features */}
                <ul className="space-y-2 mb-4">
                  {sdk.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-400">
                      <span className="text-primary mr-2">→</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Installation */}
                {sdk.npm && (
                  <div className="bg-dark-400/50 rounded-lg p-3 font-mono text-sm text-gray-300">
                    npm install {sdk.npm}
                  </div>
                )}
                {sdk.pip && (
                  <div className="bg-dark-400/50 rounded-lg p-3 font-mono text-sm text-gray-300">
                    pip install {sdk.pip}
                  </div>
                )}
                {sdk.platforms && (
                  <div className="flex gap-2 mt-4">
                    {sdk.platforms.map((platform) => (
                      <span
                        key={platform}
                        className="px-3 py-1 bg-dark-300/50 rounded-full text-xs text-primary border border-primary/20"
                      >
                        {platform}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a
            href="#tutorials"
            className="inline-flex items-center px-6 py-3 text-sm font-medium rounded-lg border border-primary text-primary hover:bg-primary/10 transition-colors"
          >
            View Tutorials
            <svg 
              className="w-4 h-4 ml-2" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 9l-7 7-7-7" 
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
} 