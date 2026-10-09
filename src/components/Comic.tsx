import { useEffect, useRef } from 'react';
import { comicPanels } from '../content/website.ts';
import { SiteImage } from './SiteImage.tsx';

export function Comic() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    root.classList.add('js-reveal');
    const panels = [...root.querySelectorAll<HTMLElement>('.comic-panel')];
    const mark = (panel: HTMLElement) => panel.classList.add('is-visible');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) mark(entry.target as HTMLElement);
        });
      },
      { threshold: 0.15 },
    );
    panels.forEach((panel) => observer.observe(panel));
    const fallback = window.setTimeout(() => panels.forEach(mark), 900);
    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  return (
    <section id="comic" className="section">
      <div className="wrap">
        <h2>A very unnecessary rescue.</h2>
        <div className="comic-grid" ref={ref}>
          {comicPanels.map((panel) => (
            <figure key={panel.title} className="comic-panel card">
              <div className="frame-square">
                <SiteImage asset={panel.asset} alt={panel.alt} width={1024} height={1024} sizes="(min-width: 1024px) 360px, 100vw" />
              </div>
              <figcaption>
                <h3>{panel.title}</h3>
                <p>{panel.caption}</p>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="actions section-cta">
          <a className="btn btn-secondary" href="#mission-log">
            Read the mission log
          </a>
        </div>
      </div>
    </section>
  );
}
