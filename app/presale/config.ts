export const PRESALE_CONFIG = {
  tokenSymbol: 'DPC20',
  tokenPriceUsd: 0.5,
  softCapUsd: 2_500_000,
  hardCapUsd: 10_000_000,
  raisedUsd: 875_000,
  minPurchaseUsd: 100,
  maxPurchaseUsd: 50_000,
  status: 'live' as const,
  whitelistRequired: true,
  paymentMethods: ['ETH', 'USDT', 'BNB'] as const,
  totalSupply: '1 Trillion',
};
