import { project } from '../config/project.ts';
import { safeUrl } from '../lib/gates.ts';
import { SiteImage } from './SiteImage.tsx';

export function Footer() {
  const xUrl = safeUrl(project.officialXUrl);
  const telegramUrl = safeUrl(project.officialTelegramUrl);

  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div className="footer-brand">
          <SiteImage
            asset="branding/barstro-logo-transparent.png"
            alt=""
            width={1024}
            height={1024}
            className="brand-mark"
            sizes="48px"
          />
          <div>
            <p className="footer-identity">
              {project.name} / {project.ticker}
            </p>
            <p className="footer-tag">Bring the bars back.</p>
          </div>
        </div>
        <div className="footer-social">
          {xUrl ? (
            <a href={xUrl} target="_blank" rel="noopener noreferrer" aria-label="X">
              <XIcon />
            </a>
          ) : null}
          {telegramUrl ? (
            <a href={telegramUrl} target="_blank" rel="noopener noreferrer" aria-label="Telegram">
              <TelegramIcon />
            </a>
          ) : null}
        </div>
      </div>
    </footer>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M14.7 10.3 22.4 1.5h-1.8l-6.7 7.6L8.4 1.5H1.6l8.1 11.5L1.6 22.5h1.8l7.1-8 5.6 8h6.8l-8.2-12.2Zm-2.5 2.9-.8-1.2-6.5-9.1h2.8l5.3 7.4.8 1.2 6.9 9.6h-2.8l-5.7-8Z"
      />
    </svg>
  );
}

function TelegramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M21.5 4.4 18.3 19.6c-.2 1.1-.9 1.4-1.8.9l-5-3.7-2.4 2.3c-.3.3-.5.5-1 .5l.4-5.2 9.5-8.6c.4-.4-.1-.6-.6-.2L6.3 13.1 1.3 11.5c-1.1-.3-1.1-1.1.2-1.6L20 3.2c.9-.3 1.7.2 1.5 1.2Z"
      />
    </svg>
  );
}
