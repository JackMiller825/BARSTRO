import { useEffect } from 'react';
import { project } from '../config/project.ts';
import { assetUrl } from '../lib/assets.ts';
import { pageUrl, safeUrl } from '../lib/gates.ts';

type Props = {
  title: string;
  description: string;
  pathname: string;
};

function upsertMeta(attribute: 'name' | 'property', key: string, content: string) {
  let node = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
  if (!node) {
    node = document.createElement('meta');
    node.setAttribute(attribute, key);
    document.head.appendChild(node);
  }
  node.content = content;
}

export function Seo({ title, description, pathname }: Props) {
  useEffect(() => {
    document.title = title;
    upsertMeta('name', 'description', description);
    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', description);
    upsertMeta('name', 'twitter:title', title);
    upsertMeta('name', 'twitter:description', description);
    upsertMeta('name', 'twitter:card', 'summary_large_image');

    const site = safeUrl(project.siteUrl);
    const canonicalHref = pageUrl(project.siteUrl, pathname);
    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonicalHref) {
      upsertMeta('property', 'og:url', canonicalHref);
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.rel = 'canonical';
        document.head.appendChild(canonical);
      }
      canonical.href = canonicalHref;
    } else {
      canonical?.remove();
      document.head.querySelector('meta[property="og:url"]')?.remove();
    }

    if (site) {
      const image = new URL(assetUrl('social/barstro-social-share-1200x630.png'), `${site}/`).toString();
      upsertMeta('property', 'og:image', image);
      upsertMeta('name', 'twitter:image', image);
    }
  }, [description, pathname, title]);

  return null;
}
