import { Link } from 'react-router-dom';
import { project } from '../config/project.ts';
import { alts } from '../content/website.ts';
import { safeUrl } from '../lib/gates.ts';
import { SiteImage } from './SiteImage.tsx';

type Props = {
  mode: 'link' | 'join';
  heading?: 'h1' | 'h2';
};

function ChannelCard({
  title,
  body,
  href,
  readyLabel,
  pendingLabel,
  note,
  variant,
  noteId,
}: {
  title: string;
  body: string;
  href: string | null;
  readyLabel: string;
  pendingLabel: string;
  note: string;
  variant: 'primary' | 'secondary';
  noteId: string;
}) {
  return (
    <article className="card channel-card">
      <h3>{title}</h3>
      <p>{body}</p>
      {href ? (
        <a className={`btn btn-${variant}`} href={href} target="_blank" rel="noopener noreferrer">
          {readyLabel}
        </a>
      ) : (
        <>
          <button type="button" className={`btn btn-${variant}`} disabled aria-describedby={noteId}>
            {pendingLabel}
          </button>
          <p className="fine" id={noteId}>
            {note}
          </p>
        </>
      )}
    </article>
  );
}

export function CommunityHub({ mode, heading = 'h2' }: Props) {
  const telegram = safeUrl(project.officialTelegramUrl);
  const xUrl = safeUrl(project.officialXUrl);
  const telegramVariant = mode === 'join' ? 'primary' : 'secondary';
  const xVariant = 'secondary';
  const HeadingTag = heading;

  return (
    <section className="section" aria-labelledby="community-heading">
      <div className="wrap split">
        <div>
          <p className="eyebrow">Mission control</p>
          <HeadingTag id="community-heading">Bring your best dead-zone joke.</HeadingTag>
          <p>Find your crew. Make the next signal meme. You do not need tokens to join the joke.</p>
          <div className="social-grid">
            <ChannelCard
              title="Mission control"
              body="Meet the crew, share art and help a lost bar feel at home."
              href={telegram}
              readyLabel="Join Telegram"
              pendingLabel="Telegram link pending"
              note="The official Telegram link has not been supplied yet."
              variant={telegramVariant}
              noteId="telegram-note"
            />
            <ChannelCard
              title="Dispatches from orbit"
              body="Follow new art and short rescue stories."
              href={xUrl}
              readyLabel="Follow on X"
              pendingLabel="X link pending"
              note="The official X link has not been supplied yet."
              variant={xVariant}
              noteId="x-note"
            />
          </div>
          {mode === 'link' ? (
            <div className="actions section-cta">
              <Link className="btn btn-primary" to="/community">
                Explore community missions
              </Link>
            </div>
          ) : null}
        </div>
        <SiteImage
          asset="website/barstro-community-character-transparent.png"
          alt={alts.community}
          width={1024}
          height={1024}
          eager={heading === 'h1'}
          className="cutout"
          sizes="(min-width: 1024px) 480px, 80vw"
        />
      </div>
    </section>
  );
}
