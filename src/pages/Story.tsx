import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Comic } from '../components/Comic.tsx';
import { CommunityHub } from '../components/CommunityHub.tsx';
import { SiteImage } from '../components/SiteImage.tsx';
import { SpaceBackdrop } from '../components/SpaceBackdrop.tsx';
import { alts, missionLog } from '../content/website.ts';

export default function Story() {
  const sceneRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;
    const media = window.matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)');
    if (!media.matches) return;
    const onMove = (event: PointerEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 16;
      const y = (event.clientY / window.innerHeight - 0.5) * 10;
      scene.style.setProperty('--dx', `${x}px`);
      scene.style.setProperty('--dy', `${y}px`);
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, []);

  return (
    <>
      <section className="scene hero-scene depth-scene" ref={sceneRef}>
        <SpaceBackdrop />
        <div className="lunar" aria-hidden="true">
          <SiteImage
            asset="website/barstro-lunar-foreground-transparent.png"
            alt=""
            width={2172}
            height={724}
            className="lunar-img"
            sizes="100vw"
            decorative
          />
        </div>
        <div className="wrap scene-inner split">
          <div>
            <p className="eyebrow">A fictional rescue mission.</p>
            <h1>No bars. Big adventure.</h1>
            <p>
              One day, Barstronaut checked his phone. Nothing. Naturally, he decided the signal bars had escaped into
              space. A phone backpack, an oversized helmet and a very small plan were all he needed.
            </p>
            <a className="btn btn-primary" href="#comic">
              Follow the rescue
            </a>
          </div>
          <SiteImage
            asset="website/barstro-story-character-transparent.png"
            alt={alts.story}
            width={1024}
            height={1024}
            eager
            className="cutout"
            sizes="(min-width: 1024px) 480px, 80vw"
          />
        </div>
      </section>

      <Comic />

      <section id="mission-log" className="section">
        <div className="wrap">
          <h2>Dispatches from a tiny helmet.</h2>
          <p className="fine">Fictional field notes. These are story episodes, not project milestones.</p>
          <div className="log-grid">
            {missionLog.map((entry) => (
              <article key={entry.id} className="card">
                <h3>
                  Entry {entry.id} — {entry.title}
                </h3>
                <p>{entry.body}</p>
              </article>
            ))}
          </div>
          <div className="actions section-cta">
            <Link className="btn btn-primary" to="/community">
              Make the next mission
            </Link>
          </div>
        </div>
      </section>

      <CommunityHub mode="link" />
    </>
  );
}
