'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { PRESALE_CONFIG } from '../config';

type PaymentMethod = (typeof PRESALE_CONFIG.paymentMethods)[number];

declare global {
  interface Window {
    ethereum?: {
      request: (args: { method: string; params?: unknown[] }) => Promise<unknown>;
      isMetaMask?: boolean;
    };
  }
}

export default function PurchasePanel() {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('ETH');
  const [amountUsd, setAmountUsd] = useState('');
  const [whitelistCode, setWhitelistCode] = useState('');
  const [statusMessage, setStatusMessage] = useState('');
  const [isConnecting, setIsConnecting] = useState(false);

  const amount = parseFloat(amountUsd) || 0;
  const tokensReceived = amount / PRESALE_CONFIG.tokenPriceUsd;
  const isValidAmount =
    amount >= PRESALE_CONFIG.minPurchaseUsd &&
    amount <= PRESALE_CONFIG.maxPurchaseUsd;

  const connectWallet = async () => {
    setStatusMessage('');
    setIsConnecting(true);

    try {
      if (!window.ethereum) {
        setStatusMessage('MetaMask not detected. Please install MetaMask to continue.');
        return;
      }

      const accounts = (await window.ethereum.request({
        method: 'eth_requestAccounts',
      })) as string[];

      if (accounts[0]) {
        setWalletAddress(accounts[0]);
        setStatusMessage('Wallet connected successfully.');
      }
    } catch {
      setStatusMessage('Wallet connection cancelled or failed.');
    } finally {
      setIsConnecting(false);
    }
  };

  const handlePurchase = () => {
    if (!walletAddress) {
      setStatusMessage('Please connect your MetaMask wallet first.');
      return;
    }
    if (!whitelistCode.trim()) {
      setStatusMessage('Please enter your private whitelist code.');
      return;
    }
    if (!isValidAmount) {
      setStatusMessage(
        `Purchase amount must be between $${PRESALE_CONFIG.minPurchaseUsd} and $${PRESALE_CONFIG.maxPurchaseUsd.toLocaleString()}.`
      );
      return;
    }

    setStatusMessage(
      `Purchase preview: ${tokensReceived.toLocaleString(undefined, { maximumFractionDigits: 0 })} ${PRESALE_CONFIG.tokenSymbol} via ${paymentMethod}. On-chain settlement will activate once the Dot Protocol network is live.`
    );
  };

  const truncateAddress = (addr: string) =>
    `${addr.slice(0, 6)}...${addr.slice(-4)}`;

  return (
    <section id="purchase" className="relative py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary-300 to-primary bg-clip-text text-transparent">
              Purchase DPC20
            </h2>
            <p className="text-gray-300">
              Connect MetaMask and complete your whitelist purchase
            </p>
          </div>

          <div className="bg-dark-200/50 backdrop-blur-sm border border-dark-50 rounded-2xl p-6 md:p-8 space-y-6">
            {/* Wallet */}
            <div>
              <label className="block text-sm text-gray-400 mb-2">Wallet</label>
              {walletAddress ? (
                <div className="flex items-center justify-between bg-dark-300/50 border border-dark-50 rounded-lg px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                      <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M22 7h-5V5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v3c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2v-9c0-1.1-.9-2-2-2zm-2 11H4V9h16v9z" />
                      </svg>
                    </div>
                    <span className="text-white font-mono text-sm">
                      {truncateAddress(walletAddress)}
                    </span>
                  </div>
                  <button
                    onClick={() => setWalletAddress(null)}
                    className="text-sm text-gray-400 hover:text-primary transition-colors"
                  >
                    Disconnect
                  </button>
                </div>
              ) : (
                <button
                  onClick={connectWallet}
                  disabled={isConnecting}
                  className="w-full flex items-center justify-center gap-3 bg-primary hover:bg-primary-600 disabled:opacity-60 text-white px-6 py-3 rounded-lg transition-colors font-medium"
                >
                  <svg className="w-6 h-6" viewBox="0 0 35 33" fill="none">
                    <path d="M32.958 1.5L19.5 11.25v4.5l13.458 9.75V1.5z" fill="#E17726" stroke="#E17726" strokeWidth=".25" />
                    <path d="M2.042 1.5L15.315 11.4l4.185-2.85L2.042 1.5z" fill="#E27625" stroke="#E27625" strokeWidth=".25" />
                    <path d="M19.5 15.75v16.5l13.458-9.75V11.25L19.5 15.75z" fill="#E27625" stroke="#E27625" strokeWidth=".25" />
                    <path d="M2.042 22.5V1.5l17.458 14.25-4.185 2.85L2.042 22.5z" fill="#E27625" stroke="#E27625" strokeWidth=".25" />
                  </svg>
                  {isConnecting ? 'Connecting...' : 'Connect MetaMask'}
                </button>
              )}
            </div>

            {/* Whitelist code */}
            <div>
              <label htmlFor="whitelist" className="block text-sm text-gray-400 mb-2">
                Whitelist Code <span className="text-primary">*</span>
              </label>
              <input
                id="whitelist"
                type="text"
                value={whitelistCode}
                onChange={(e) => setWhitelistCode(e.target.value)}
                placeholder="Enter your private whitelist code"
                className="w-full px-4 py-3 bg-dark-300/50 border border-dark-50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            {/* Payment method */}
            <div>
              <label className="block text-sm text-gray-400 mb-2">Payment Method</label>
              <div className="grid grid-cols-3 gap-2">
                {PRESALE_CONFIG.paymentMethods.map((method) => (
                  <button
                    key={method}
                    onClick={() => setPaymentMethod(method)}
                    className={`px-4 py-3 rounded-lg border text-sm font-semibold transition-all ${
                      paymentMethod === method
                        ? 'bg-primary/20 border-primary text-primary'
                        : 'bg-dark-300/50 border-dark-50 text-gray-300 hover:border-primary/50'
                    }`}
                  >
                    {method}
                  </button>
                ))}
              </div>
            </div>

            {/* Amount */}
            <div>
              <label htmlFor="amount" className="block text-sm text-gray-400 mb-2">
                Amount (USD)
              </label>
              <input
                id="amount"
                type="number"
                min={PRESALE_CONFIG.minPurchaseUsd}
                max={PRESALE_CONFIG.maxPurchaseUsd}
                value={amountUsd}
                onChange={(e) => setAmountUsd(e.target.value)}
                placeholder={`Min $${PRESALE_CONFIG.minPurchaseUsd} — Max $${PRESALE_CONFIG.maxPurchaseUsd.toLocaleString()}`}
                className="w-full px-4 py-3 bg-dark-300/50 border border-dark-50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
              />
              {amount > 0 && (
                <p className="mt-2 text-sm text-gray-400">
                  You receive:{' '}
                  <span className="text-primary font-semibold">
                    {tokensReceived.toLocaleString(undefined, { maximumFractionDigits: 0 })}{' '}
                    {PRESALE_CONFIG.tokenSymbol}
                  </span>
                </p>
              )}
            </div>

            <button
              onClick={handlePurchase}
              className="w-full bg-primary hover:bg-primary-600 text-white px-6 py-4 rounded-lg transition-colors font-semibold text-lg"
            >
              Confirm Purchase
            </button>

            {statusMessage && (
              <p className="text-sm text-center text-gray-300 bg-dark-300/30 border border-dark-50 rounded-lg px-4 py-3">
                {statusMessage}
              </p>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
