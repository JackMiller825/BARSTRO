# Design guide — production v2

## Direction
Keep the approved 3D clay/vinyl violet astronaut. Reception trouble is instantly familiar; oversized lime bars make the punchline visible. Four separate routes preserve the approved page structure. International reach is an ambition, never a forecast.

## Tokens
Background #140B28; panels #281346; lime #B6FF35; lavender #B494FF; off-white #F6F1E7. Use off-white body text on dark panels, plum text on lime buttons. Avoid lavender body text over textured art. Borders #74559E; focus lime 3px with 3px offset. Verify WCAG AA in final implementation; no information depends only on hue.
Heading font: Fredoka, weights 600/700. Body: system sans-serif stack, 400/600. Use system rounded fallback if Fredoka unavailable. Fredoka source https://fonts.google.com/specimen/Fredoka; source repository https://github.com/google/fonts/tree/main/ofl/fredoka; SIL Open Font License. Font bytes are not bundled; install @fontsource/fredoka and include its license for production, or use the self-contained system fallback shown in v2 previews. Do not require remote font loading.
Desktop type: h1 clamp(40px,5vw,72px); h2 36px; body 18px/1.6; labels 14px. Mobile h1 40px; h2 28px; body 16px/1.6. Never encode copy into section art.
Spacing scale: 8,12,16,24,32,48,64,96. Card radius 24px; buttons 14px. Max content width 1200px. Desktop gutters 40px; tablet 28px; mobile 20px. Section vertical padding 80px desktop, 48px mobile. Tap targets at least 44x44px.

## Responsive behavior
320–767px: one column, text before art except the Home story teaser; hero art max 360px; card art 100% width; comic panels stack 1–3; activities stack; long addresses wrap without hiding characters. Nav becomes a button-driven menu. Footer uses two-column links.
768–1023px: two columns where comfortable, hero can stack. 1024px+: split hero, three-column cards/comic, four token facts. No essential text in absolute-positioned artwork. Support 200% zoom, 320px reflow and landscape phones.

## Three signature features
1. Rescue the signal: five-bar button in Home hero. Each activation lights one bar; status announces “n of 5 bars rescued” in a polite live region. Completed state offers replay. A single short 180ms mascot lift on completion. This is entertainment, never network or token data. Reduced motion: immediate static state changes, no bounce.
2. The rescue comic: three native figure/caption panels in DOM reading order. Optional 180ms reveal; all text is present before JS. Reduced motion and no JS show every panel immediately. Story background depth uses separate background, lunar foreground and cutout layers, not WebGL.
3. Caption Control: an accessible expandable mission prompt with blank-bubble image and a Copy prompt button. Clipboard failure leaves selectable text. No upload, account, wallet or on-chain transaction is needed. Keep other activity prompts similarly expandable. Sharing happens through the visitor’s chosen community channel; the site does not post automatically.

## Other controls
FAQ uses native details/summary; first answer open. Checklist uses labeled native checkboxes; no persistent storage or verification claim. Contract copy stays disabled until a real Ethereum address is supplied and project configuration confirmed. Social links remain unavailable until configured; never point to # or guessed accounts. Use null config values, not placeholder URLs. Never let checklist completion activate swapping.
All routes share navigation/footer. Mark current route aria-current=page. Mobile menu is an inline disclosure, not a focus-trapping modal: aria-expanded, aria-controls, Escape closes and returns focus to toggle; route selection closes. Provide skip link, visible focus, semantic landmarks, real button elements, Enter/Space support and meaningful image alt text. Decorative layers are aria-hidden and pointer-events:none. There is no pointer-only interaction.

## Performance
No WebGL, particle library or autoplay video. Static layered CSS yields depth. Use CSS gradients for text surfaces. Keep only one small hero image eager; lazy-load below-fold art. Derive AVIF/WebP and 512/768 srcsets from masters at build time, preserving PNG masters. Specify width/height and object-fit:contain for cutouts; cover for panels. Target mobile initial transfer under 1.5MB and LCP under 2.5s on a representative connection; these are build targets, not measured results. Tree-shake icons; animate transforms/opacity only. Do not ship preview PNGs to the live site.

## Artwork resolution / implementation decisions
Existing proposed 1600px cutout masters are superseded by sharp native 1024px production artwork; no enlarged sticker is advertised as a new high-resolution master. The hero, story, community and curious poses reuse inspected existing character art. Peeking accent is the full curious pose positioned behind a CSS overflow mask, not a destructively cropped master. The hero phone and restore control are separate SVG/HTML props. Mobile space background is a restrained proportional portrait crop of the decorative background, with dark CSS overlay for readability. Simple wallet/ETH/swap icons and all bars use native SVG rather than unnecessary raster icons. See asset map for these explicit replacements of the earlier plan.

## Sources and rights
Logo and banners: user-supplied approved files, preserved. Other raster art: original generated artwork or existing generated Barstronaut poses. Interface SVGs: original paths in this package. Reference-site art is not reused. Ethereum shape is a generic schematic network cue, not endorsement. User should retain appropriate rights for any future community submissions.
