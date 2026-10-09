import type { ProjectConfig } from '../lib/gates.ts';

export const project = {
  name: 'Barstronaut',
  ticker: '$BARSTRO',
  intendedChainId: 1,
  intendedNetwork: 'Ethereum Mainnet',
  launchConfirmed: false,
  contractAddress: null,
  totalSupply: '1,000,000,000',
  buyTax: '0%',
  sellTax: '0%',
  liquidityStatus: 'Burn',
  ownershipStatus: 'Renounce',
  tokenomics: null,
  officialXUrl: 'https://x.com/barstro_eth',
  officialTelegramUrl: 'https://t.me/Barstro',
  officialSwapUrl: null,
  officialChartUrl: null,
  officialExplorerUrl: null,
  siteUrl: 'https://barstro.space',
} satisfies ProjectConfig;
