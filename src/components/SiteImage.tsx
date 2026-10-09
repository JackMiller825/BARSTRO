import { assetUrl, imageEntry, srcSetFor } from '../lib/assets.ts';

type Props = {
  asset: string;
  alt: string;
  width: number;
  height: number;
  eager?: boolean;
  priority?: 'high' | 'low' | 'auto';
  className?: string;
  sizes?: string;
  decorative?: boolean;
};

export function SiteImage({
  asset,
  alt,
  width,
  height,
  eager = false,
  priority = 'auto',
  className,
  sizes,
  decorative = false,
}: Props) {
  const entry = imageEntry(asset);
  const avif = srcSetFor(entry?.avif);
  const webp = srcSetFor(entry?.webp);
  const image = (
    <img
      src={assetUrl(asset)}
      alt={decorative ? '' : alt}
      width={width}
      height={height}
      className={className}
      sizes={sizes}
      loading={eager ? 'eager' : 'lazy'}
      decoding={eager ? 'auto' : 'async'}
      fetchPriority={priority}
    />
  );

  const framed =
    avif || webp ? (
      <picture>
        {avif ? <source type="image/avif" srcSet={avif} sizes={sizes} /> : null}
        {webp ? <source type="image/webp" srcSet={webp} sizes={sizes} /> : null}
        {image}
      </picture>
    ) : (
      image
    );

  if (decorative) {
    return (
      <span className="media" aria-hidden="true">
        {framed}
      </span>
    );
  }

  return framed;
}
