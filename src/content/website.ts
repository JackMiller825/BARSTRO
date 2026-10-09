export const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/story', label: 'Story', end: false },
  { to: '/buy', label: 'Buy', end: false },
  { to: '/community', label: 'Community', end: false },
] as const;

export const pageMeta = {
  '/': {
    title: 'Barstronaut | $BARSTRO — Bring the bars back',
    description:
      'Meet a tiny astronaut on a fictional mission to rescue your missing signal bars. Explore the story, Ethereum token details and community.',
  },
  '/story': {
    title: 'The rescue story | Barstronaut',
    description:
      'A phone loses reception. A tiny astronaut goes to space. Follow Barstronaut’s fictional five-bar rescue.',
  },
  '/buy': {
    title: 'Ethereum buying guide | Barstronaut',
    description:
      'Understand wallets, ETH and contract checks. BARSTRO launch and trading details are pending.',
  },
  '/community': {
    title: 'Mission control | Barstronaut',
    description:
      'Make dead-zone memes, rescue a bar and write the next caption. Everyone can join the joke.',
  },
  notFound: {
    title: 'Page not found | Barstronaut',
    description: 'That address is not a Barstronaut page. Return home for the signal rescue.',
  },
} as const;

export const buyingSteps = [
  {
    title: 'Set up a wallet.',
    icon: 'wallet',
    body: 'Choose an Ethereum-compatible wallet from its official website or app store listing. Save your recovery phrase privately. Never share it or enter it on this site.',
  },
  {
    title: 'Add ETH on Mainnet.',
    icon: 'eth',
    body: 'Receive ETH on Ethereum Mainnet, the intended network for BARSTRO. Check the withdrawal network before sending. Keep ETH aside for network fees.',
  },
  {
    title: 'Verify and review the swap.',
    icon: 'swap',
    body: 'When a contract and official swap link are confirmed, compare the full token address with this site and its block-explorer record. Open the verified swap destination. Review the amount, minimum received, price impact, token fees and network fee before confirming. A symbol alone does not identify a token. Do not raise slippage blindly.',
  },
] as const;

export const checklistItems = [
  'I checked Ethereum Mainnet.',
  'I compared the full contract address.',
  'I kept ETH for gas.',
  'I reviewed fees, price impact and minimum received.',
  'I understand I could lose the amount I spend.',
] as const;

export const comicPanels = [
  {
    asset: 'website/barstro-story-panel-01-dead-zone.png',
    title: 'The dead zone',
    caption: 'The lift went up. The signal went down. Barstronaut took that personally.',
    alt: 'Barstronaut checks an empty-signal phone inside an elevator.',
  },
  {
    asset: 'website/barstro-story-panel-02-into-orbit.png',
    title: 'Into orbit',
    caption: 'If the bars were missing, there was only one sensible place to look. Space. Obviously.',
    alt: 'Barstronaut reaches for five reception bars floating in orbit.',
  },
  {
    asset: 'website/barstro-story-panel-03-bars-rescued.png',
    title: 'Bars rescued',
    caption: 'Five bars found. One tiny hero. Still no idea which floor he needed.',
    alt: 'Barstronaut celebrates five rescued reception bars on the moon.',
  },
] as const;

export const missionLog = [
  {
    id: '01',
    title: 'Elevator expedition',
    body: 'No reception between floors. Suspect: the ceiling.',
  },
  {
    id: '02',
    title: 'Tunnel trouble',
    body: 'Entered a tunnel. Lost the bars. Found an echo.',
  },
  {
    id: '03',
    title: 'Supermarket orbit',
    body: 'The shopping list would not load. Bought snacks for the rescue instead.',
  },
] as const;

export const missions = [
  {
    title: 'Dead Zone Diaries',
    summary: 'Turn an everyday no-signal moment into a meme.',
    prompt:
      'Draw or describe your most ridiculous dead zone. Keep locations general and remove personal information. Share it with the crew when official channels are available.',
    asset: 'website/barstro-mission-dead-zone-diaries.png',
    alt: 'A frustrated Barstronaut in a no-signal elevator.',
    open: false,
    copy: false,
  },
  {
    title: 'Rescue a Bar',
    summary: 'Draw a reception bar for the crew’s collection.',
    prompt:
      'Give one bar a personality and a tiny rescue story. Post your original art in the community. This is a creative activity, with no prize or token reward promised.',
    asset: 'website/barstro-mission-rescue-a-bar.png',
    alt: 'Barstronaut holds one rescued reception bar like a trophy.',
    open: false,
    copy: false,
  },
  {
    title: 'Caption Control',
    summary: 'Write a one-line caption for the next mission.',
    prompt:
      'What does Barstronaut say when the bars finally come back? Keep it short, friendly and yours. Example: “Found them. They were on airplane mode.”',
    asset: 'website/barstro-mission-caption-control.png',
    alt: 'Barstronaut points toward an empty caption bubble.',
    open: true,
    copy: true,
  },
] as const;

export const communityNotes = [
  'Credit creators.',
  'No harassment or impersonation.',
  'Never share wallet recovery phrases.',
  'Mission prompts are creative invitations, not a reward program.',
] as const;

export const signalLabels = [
  'No signal',
  '1 of 5 bars rescued',
  '2 of 5 bars rescued',
  '3 of 5 bars rescued',
  '4 of 5 bars rescued',
  'Signal restored',
] as const;

export const alts = {
  hero: 'Barstronaut grins while hugging five glowing green reception bars.',
  story: 'Barstronaut jumps with excitement in a violet helmet.',
  guide: 'Barstronaut holds a clipboard and lime pencil.',
  community: 'Barstronaut gives an encouraging gesture.',
  peeking: 'Curious Barstronaut inspects the scene.',
} as const;
