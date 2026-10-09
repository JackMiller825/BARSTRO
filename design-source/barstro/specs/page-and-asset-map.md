# Sitemap and exact asset map

## Routes and section order
- /: Navigation → Hero → Story teaser → Token information → Buying steps → Community hub → FAQ → Footer.
- /story: Navigation → Introduction → Comic → Mission log → Community hub → Footer.
- /buy: Navigation → Introduction → Token information → Buying steps → Checklist → FAQ → Footer.
- /community: Navigation → Community hub → Activities → FAQ → Footer.
Every section’s complete copy is in content/website-copy.md under the matching heading. The UI HTML in specs is a static mockup source, not a finished app. Preserve real routes in the later Cursor build.

## Section specifications
| Route | Section / purpose | Headline | Production paths | Detail preview (v1) | Layout | Primary action | Interaction |
|---|---|---|---|---|---|---|---|
| All | Navigation: Orient and navigate | Home · Story · Buy · Community | branding/barstro-logo-transparent.png | previews/v1/17-barstro-shared-navigation-desktop-mobile.png | Shared fixed-height top row; active route underline; phone disclosure | How to buy → /buy | Keyboard menu disclosure |
| / | Hero: Explain joke in five seconds | Your signal went to space. | website/barstro-hero-character-transparent.png | previews/v1/02-barstro-home-hero-desktop.png | Split text / art; stacked mobile; separate CSS phone prop and signal widget | Meet Barstronaut → /story | Five-bar rescue; v2 states 37 |
| / | Story teaser: Invite deeper reading | The bars went missing. He went looking. | website/barstro-story-panel-01-dead-zone.png | previews/v1/03-barstro-home-story-desktop.png | Image and short paragraph side by side, stacked mobile | Read the story → /story | Simple link |
| /, /buy | Token information: Present known and pending facts | The token, clearly. | website/icons/barstro-eth.svg | previews/v1/04-barstro-shared-token-info-desktop.png | Contract panel above four fact cards; 2-column facts on mobile; no lock icon | Read the buying guide / Review the steps | Disabled copy until real configuration |
| /, /buy | Buying steps: Explain Ethereum basics | Three steps. Five bars. | website/icons/barstro-wallet.svg; website/icons/barstro-eth.svg; website/icons/barstro-swap.svg | previews/v1/05-barstro-shared-how-to-buy-desktop.png | Three numbered cards desktop; one column mobile | Read the buying guide; swap pending on Buy | Guide link; no wallet connection |
| /, /story, /community | Community hub: Welcome participation | Bring your best dead-zone joke. | website/barstro-community-character-transparent.png | previews/v1/06-barstro-shared-community-desktop.png | Mascot left, Telegram and X cards right; stacked mobile | Explore community missions / Join Telegram when configured | Pending external links disabled |
| /, /buy, /community | FAQ: Answer practical questions | Questions from mission control. | website/barstro-peeking-character-transparent.png | previews/v1/07-barstro-shared-faq-desktop.png | Full-width native accordions; curious pose optional accent | Read answer | details/summary keyboard disclosure |
| /story | Introduction: Set up fictional mission | No bars. Big adventure. | website/barstro-story-character-transparent.png | previews/v1/09-barstro-story-intro-desktop.png | Split intro and floating pose; static layers mobile | Follow the rescue → #comic | Optional depth; static fallback |
| /story | Comic: Explain rescue visually | A very unnecessary rescue. | website/barstro-story-panel-01-dead-zone.png; website/barstro-story-panel-02-into-orbit.png; website/barstro-story-panel-03-bars-rescued.png | previews/v1/10-barstro-story-comic-desktop.png | Three panels desktop; chronological stack mobile | Read the mission log → #mission-log | Optional reveal, full static content |
| /story | Mission log: Provide repeatable fictional stories | Dispatches from a tiny helmet. | website/barstro-story-panel-01-dead-zone.png; website/barstro-mission-caption-control.png | previews/v1/11-barstro-story-mission-log-desktop.png | Three illustrated or text-first field-note cards; no real milestones | Make the next mission → /community | Focus highlight only on links |
| /buy | Introduction: Explain guide and pending status | Before you swap, check the signal. | website/barstro-buy-guide-character-transparent.png | previews/v1/13-barstro-buy-intro-desktop.png | Text and clipboard pose; stacked mobile | Review token details → #token | Anchor navigation |
| /buy | Checklist: Support personal review | Your pre-swap checklist. | website/barstro-buy-guide-character-transparent.png | previews/v1/14-barstro-buy-checklist-desktop.png | Labeled checkboxes plus mascot; mobile stacked | Swap link pending | Local checkbox state; no verification claim |
| /community | Activities: Invite original creation | Small missions. Big memes. | website/barstro-mission-dead-zone-diaries.png; website/barstro-mission-rescue-a-bar.png; website/barstro-mission-caption-control.png | previews/v1/16-barstro-community-missions-desktop.png | Three cards; one column mobile; caption prompt shown expanded | View prompt | Inline disclosure and Copy prompt |
| All | Footer: Repeat identity and practical links | Bring the bars back. | branding/barstro-logo-transparent.png | previews/v1/18-barstro-shared-footer-desktop-mobile.png | Logo and routes / statuses; 2-column links mobile | Navigate / official social destinations when supplied | Real links only |

## Current full-page previews
| Route | Desktop | Continuous mobile |
|---|---|---|
| / | previews/v2/23-barstro-home-overview-desktop.png | previews/v2/27-barstro-home-overview-mobile.png |
| /story | previews/v2/24-barstro-story-overview-desktop.png | previews/v2/28-barstro-story-overview-mobile.png |
| /buy | previews/v2/25-barstro-buy-overview-desktop.png | previews/v2/29-barstro-buy-overview-mobile.png |
| /community | previews/v2/26-barstro-community-overview-desktop.png | previews/v2/30-barstro-community-overview-mobile.png |

## Material mobile changes and states
- Home hero: previews/v2/31-barstro-home-hero-mobile.png — text first; one primary filled button; mascot below.
- Token facts: previews/v2/32-barstro-token-info-mobile.png — contract card stacks; two-column facts.
- Comic: previews/v2/33-barstro-story-comic-mobile.png — vertical reading sequence.
- Steps: previews/v2/34-barstro-buy-steps-mobile.png — full-width numbered cards.
- Checklist: previews/v2/35-barstro-buy-checklist-mobile.png — touch-friendly labels, mascot below.
- Activities: previews/v2/36-barstro-community-missions-mobile.png — stacked cards; Caption Control expanded.
- States: previews/v2/37-barstro-interaction-states-desktop.png — no signal, partial rescue, restored signal, collapsed / expanded caption prompt. Implement the transitions described in design-guide.md, not a PNG control.
- Shared header/footer desktop and mobile designs are previews/v1/17-barstro-shared-navigation-desktop-mobile.png and previews/v1/18-barstro-shared-footer-desktop-mobile.png, reused on all routes. v2 full-page sources show the simplified production spacing. Closed/open mobile menu is shown in v1/17.

## Shared production layers
- website/barstro-space-background-desktop.png — hero decorative background on Home, Story and Buy; CSS dark overlay protects text.
- website/barstro-space-background-mobile.png — alternative portrait decorative crop. Use as optional mobile background with static positioning.
- website/barstro-lunar-foreground-transparent.png — optional lunar edge overlay; foreground can be hidden on small phones. No information depends on it.
- website/icons/barstro-signal-bars.svg — exactly five bars; native HTML/CSS controls derive the same geometry.
- website/icons/barstro-menu.svg, barstro-close.svg, barstro-chevron.svg, barstro-copy.svg, barstro-arrow.svg, barstro-link.svg — use as inline decorative SVG within named controls.
- website/barstro-favicon-16.png, -32.png, -48.png, -192.png, -512.png and barstro-favicon.ico; website/barstro-apple-touch-icon.png.

## Social and brand
- branding/barstro-logo-transparent.png — approved circular logo, 1024x1024 real alpha, original text/composition preserved.
- social/barstro-banner-3to1.png — approved X banner, exactly 1500x500.
- social/barstro-banner-1100x520.png — approved Telegram banner, exactly 1100x520.
- social/barstro-social-share-1200x630.png — current share card, exactly 1200x630. Configure og:image using the final deployed absolute URL.

## Explicit revisions to earlier proposed filenames
Earlier final-asset-plan.csv was a plan, not proof of generated assets. Raster barstro-buy-wallet-icon.png, barstro-buy-eth-icon.png, barstro-buy-swap-icon.png and barstro-signal-bars-transparent.png are replaced by native SVG paths above; the developer must use these paths. Earlier proposed larger cutout/background sizes are superseded by the actual native dimensions in assets-manifest.csv. No source was enlarged to claim sharpness. The curious pose is placed behind a CSS mask for peeking. Hero phone is a simple violet CSS rounded rectangle with five outlined slots, not a missing character prop.
v1 preview small generated text and occasional four-bar icons are historical composition sketches. Current website copy and v2 five-bar controls are authoritative. All assets are supplied or generated; newly generated images are current proposed production art, not falsely marked as user-approved.
