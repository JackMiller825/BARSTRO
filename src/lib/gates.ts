export type ProjectConfig = {
  name: string;
  ticker: string;
  intendedChainId: number;
  intendedNetwork: string;
  launchConfirmed: boolean;
  contractAddress: string | null;
  totalSupply: string | null;
  buyTax: string | null;
  sellTax: string | null;
  liquidityStatus: string | null;
  ownershipStatus: string | null;
  tokenomics: string | null;
  officialXUrl: string | null;
  officialTelegramUrl: string | null;
  officialSwapUrl: string | null;
  officialChartUrl: string | null;
  officialExplorerUrl: string | null;
  siteUrl: string | null;
};

const PLACEHOLDER_VALUES = new Set([
  'pending',
  'null',
  'undefined',
  'none',
  'n/a',
  'na',
  'tbd',
  'todo',
  '#',
  'javascript:',
  'data:',
]);

export function displayFact(value: string | null): string {
  if (value === null) return 'Pending';
  const trimmed = value.trim();
  if (trimmed === '') return 'Pending';
  if (/^\[[A-Z0-9_]+\]$/.test(trimmed)) return 'Pending';
  if (PLACEHOLDER_VALUES.has(trimmed.toLowerCase())) return 'Pending';
  return trimmed;
}

export function isValidEthAddress(value: string | null): value is string {
  if (value === null) return false;
  return /^0x[0-9a-fA-F]{40}$/.test(value.trim());
}

export function isSafeHttpsUrl(value: string | null): value is string {
  if (value === null) return false;
  const trimmed = value.trim();
  if (trimmed === '') return false;
  if (PLACEHOLDER_VALUES.has(trimmed.toLowerCase())) return false;
  if (trimmed.includes('[') || trimmed.includes(']')) return false;
  if (/^(javascript|data|vbscript):/i.test(trimmed)) return false;
  try {
    const url = new URL(trimmed);
    if (url.protocol !== 'https:') return false;
    if (url.hostname === '' || url.hostname === 'localhost') return false;
    return true;
  } catch {
    return false;
  }
}

export function canCopyAddress(config: ProjectConfig): boolean {
  return config.launchConfirmed === true && isValidEthAddress(config.contractAddress);
}

export function visibleContractAddress(config: ProjectConfig): string | null {
  if (!isValidEthAddress(config.contractAddress)) return null;
  return config.contractAddress.trim();
}

export function canTrade(config: ProjectConfig): boolean {
  return (
    config.launchConfirmed === true &&
    isValidEthAddress(config.contractAddress) &&
    isSafeHttpsUrl(config.officialSwapUrl)
  );
}

export function safeUrl(value: string | null): string | null {
  return isSafeHttpsUrl(value) ? value.trim() : null;
}

export function taxLabel(buyTax: string | null, sellTax: string | null): string {
  return `${displayFact(buyTax)} / ${displayFact(sellTax)}`;
}

export function pageUrl(siteUrl: string | null, pathname: string): string | null {
  const base = safeUrl(siteUrl);
  if (!base) return null;
  const url = new URL(pathname, base.endsWith('/') ? base : `${base}/`);
  return url.toString();
}
