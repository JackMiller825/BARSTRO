import { assetUrl, imageEntry, srcSetFor } from '../lib/assets.ts';

const desktop = 'website/barstro-space-background-desktop.png';
const mobile = 'website/barstro-space-background-mobile.png';

export function SpaceBackdrop() {
  const desktopEntry = imageEntry(desktop);
  const mobileEntry = imageEntry(mobile);
  const desktopAvif = srcSetFor(desktopEntry?.avif);
  const desktopWebp = srcSetFor(desktopEntry?.webp);
  const mobileAvif = srcSetFor(mobileEntry?.avif);
  const mobileWebp = srcSetFor(mobileEntry?.webp);

  return (
    <div className="space-bg" aria-hidden="true">
      <picture>
        {desktopAvif ? <source media="(min-width: 768px)" type="image/avif" srcSet={desktopAvif} sizes="100vw" /> : null}
        {desktopWebp ? <source media="(min-width: 768px)" type="image/webp" srcSet={desktopWebp} sizes="100vw" /> : null}
        <source media="(min-width: 768px)" srcSet={assetUrl(desktop)} />
        {mobileAvif ? <source type="image/avif" srcSet={mobileAvif} sizes="100vw" /> : null}
        {mobileWebp ? <source type="image/webp" srcSet={mobileWebp} sizes="100vw" /> : null}
        <img src={assetUrl(mobile)} alt="" width={529} height={941} decoding="async" fetchPriority="low" />
      </picture>
      <div className="space-overlay" />
    </div>
  );
}
