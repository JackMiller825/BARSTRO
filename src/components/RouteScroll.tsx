import { useEffect } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

function scrollToHash(hash: string) {
  const id = decodeURIComponent(hash.replace(/^#/, ''));
  if (!id) return false;
  const target = document.getElementById(id);
  if (!target) return false;
  target.scrollIntoView({ behavior: 'auto', block: 'start' });
  return true;
}

export function RouteScroll() {
  const { pathname, hash } = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    if (navigationType === 'POP') return;
    if (hash && scrollToHash(hash)) return;
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    const heading = document.querySelector<HTMLElement>('main h1');
    if (!heading) return;
    heading.tabIndex = -1;
    heading.focus({ preventScroll: true });
  }, [hash, navigationType, pathname]);

  useEffect(() => {
    if (!window.location.hash) return;
    scrollToHash(window.location.hash);
  }, []);

  return null;
}
