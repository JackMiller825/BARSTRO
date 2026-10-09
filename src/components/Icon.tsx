import { assetUrl } from '../lib/assets.ts';

export function Icon({ name }: { name: string }) {
  return (
    <img
      className="icon"
      src={assetUrl(`website/icons/barstro-${name}.svg`)}
      alt=""
      width={24}
      height={24}
      decoding="async"
    />
  );
}
