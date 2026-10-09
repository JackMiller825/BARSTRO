import rawMap from '../generated/image-map.json' with { type: 'json' };

export type Derivative = { file: string; width: number };
export type ImageEntry = {
  width: number;
  height: number;
  avif: Derivative[];
  webp: Derivative[];
};

const imageMap = rawMap as Record<string, ImageEntry>;

export function assetUrl(relativePath: string): string {
  const base = import.meta.env.BASE_URL;
  const prefix = base.endsWith('/') ? base : `${base}/`;
  return `${prefix}assets/${relativePath.replace(/^\/+/, '')}`;
}

export function imageEntry(relativePath: string): ImageEntry | undefined {
  return imageMap[relativePath];
}

export function srcSetFor(items: Derivative[] | undefined): string | undefined {
  if (!items || items.length === 0) return undefined;
  return items.map((item) => `${assetUrl(item.file)} ${item.width}w`).join(', ');
}
