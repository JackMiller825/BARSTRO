import { Link } from 'react-router-dom';
import { project } from '../config/project.ts';
import { navItems } from '../content/website.ts';
import { canCopyAddress, safeUrl } from '../lib/gates.ts';
import { SiteImage } from './SiteImage.tsx';

const copyrightYear = new Date().getFullYear();

export function Footer() {
  const xUrl = safeUrl(project.officialXUrl);
  const telegramUrl = safeUrl(project.officialTelegramUrl);
  const contract = canCopyAddress(project) ? 'Contract listed' : 'Contract pending';
  const xLabel = xUrl ? 'X' : 'X link pending';
  const telegramLabel = telegramUrl ? 'Telegram' : 'Telegram link pending';

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
        <nav className="footer-nav" aria-label="Footer">
          {navItems.map((item) => (
            <Link key={item.to} to={item.to}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="wrap footer-meta">
        <p className="footer-status">
          <span>{contract}</span>
          <span aria-hidden="true"> · </span>
          {xUrl ? (
            <a href={xUrl} target="_blank" rel="noopener noreferrer">
              {xLabel}
            </a>
          ) : (
            <span>{xLabel}</span>
          )}
          <span aria-hidden="true"> · </span>
          {telegramUrl ? (
            <a href={telegramUrl} target="_blank" rel="noopener noreferrer">
              {telegramLabel}
            </a>
          ) : (
            <span>{telegramLabel}</span>
          )}
        </p>
        <p>Independent fictional project. No company affiliation or endorsement.</p>
        <p>Meme tokens are speculative and can lose all value. No returns are promised.</p>
        <p>© {copyrightYear} Barstronaut. Original community artwork retains its creators’ rights.</p>
      </div>
    </footer>
  );
}
