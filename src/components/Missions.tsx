import { communityNotes, missions } from '../content/website.ts';
import { useCopyFeedback } from '../lib/useCopyFeedback.ts';
import { Disclosure } from './Disclosure.tsx';
import { Icon } from './Icon.tsx';
import { SiteImage } from './SiteImage.tsx';

export function Missions() {
  const caption = missions.find((mission) => mission.copy);
  const { status, copy } = useCopyFeedback('Prompt copied', 'Copy failed — select the prompt to copy it.');

  return (
    <section className="section">
      <div className="wrap">
        <p className="eyebrow">Planned creative activities</p>
        <h2>Small missions. Big memes.</h2>
        <p>Three ways to join the joke. Make something original; keep it friendly.</p>
        <div className="missions">
          {missions.map((mission) => (
            <article key={mission.title} className="card mission-card">
              <div className="frame-4x3">
                <SiteImage
                  asset={mission.asset}
                  alt={mission.alt}
                  width={1448}
                  height={1086}
                  sizes="(min-width: 1024px) 360px, 100vw"
                />
              </div>
              <h3>{mission.title}</h3>
              <p>{mission.summary}</p>
              <Disclosure
                initialOpen={mission.open}
                summary={
                  <>
                    <span className="when-closed">View prompt</span>
                    <span className="when-open">Hide prompt</span>
                    <Icon name="chevron" />
                  </>
                }
              >
                <p className="prompt-text">{mission.prompt}</p>
                {mission.copy && caption ? (
                  <div className="prompt-actions">
                    <button type="button" className="btn btn-secondary" onClick={() => void copy(caption.prompt)}>
                      <Icon name="copy" />
                      Copy prompt
                    </button>
                    <p className="live-status" aria-live="polite">
                      {status}
                    </p>
                  </div>
                ) : null}
              </Disclosure>
            </article>
          ))}
        </div>
        <ul className="notes">
          {communityNotes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
