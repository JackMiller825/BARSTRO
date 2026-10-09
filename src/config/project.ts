import type { ProjectConfig } from '../lib/gates.ts';

export const project = {
  name: 'Barstronaut',
  ticker: '$BARSTRO',
  intendedChainId: 1,
  intendedNetwork: 'Ethereum Mainnet',
  launchConfirmed: false,
  contractAddress: null,
  totalSupply: null,
  buyTax: null,
  sellTax: null,
  liquidityStatus: null,
  ownershipStatus: null,
  tokenomics: null,
  officialXUrl: null,
  officialTelegramUrl: null,
  officialSwapUrl: null,
  officialChartUrl: null,
  officialExplorerUrl: null,
  siteUrl: 'https://barstro.space',
} satisfies ProjectConfig;
