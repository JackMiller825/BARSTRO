import { Link } from 'react-router-dom';
import { project } from '../config/project.ts';
import { alts } from '../content/website.ts';
import { canCopyAddress, displayFact, visibleContractAddress } from '../lib/gates.ts';
import { useCopyFeedback } from '../lib/useCopyFeedback.ts';
import { SiteImage } from './SiteImage.tsx';

type Props = {
  cta: 'guide' | 'steps';
};

export function TokenInfo({ cta }: Props) {
  const address = visibleContractAddress(project);
  const copyEnabled = canCopyAddress(project) && address !== null;
  const { status, copy } = useCopyFeedback('Address copied', 'Copy failed — select the address to copy it.');
  const buyTax = displayFact(project.buyTax);
  const sellTax = displayFact(project.sellTax);
  const facts = [
    ['Supply', displayFact(project.totalSupply)],
    ['Buy / sell tax', buyTax === sellTax ? buyTax : `${buyTax} / ${sellTax}`],
    ['LP status', displayFact(project.liquidityStatus)],
    ['Ownership', displayFact(project.ownershipStatus)],
  ] as const;

  return (
    <section id="token" className="section token-section">
      <div className="wrap token-layout">
        <div>
          <h2>Tokenomics</h2>
          <div className="contract">
            <div>
              <p className="label">Contract address</p>
              <p className={address ? 'address' : 'address is-pending'}>{address ?? 'Contract address pending'}</p>
            </div>
            <button
              type="button"
              className="btn btn-secondary"
              disabled={!copyEnabled}
              onClick={() => {
                if (copyEnabled && address) void copy(address);
              }}
            >
              Copy address
            </button>
          </div>
          <p className="live-status" aria-live="polite">
            {status}
          </p>
          <div className="facts">
            {facts.map(([label, value]) => (
              <article key={label} className="card fact">
                <p className="label">{label}</p>
                <p className="fact-value">{value}</p>
              </article>
            ))}
          </div>
          <div className="actions section-cta">
            {cta === 'guide' ? (
              <Link className="btn btn-secondary" to="/buy">
                Read the buying guide
              </Link>
            ) : (
              <a className="btn btn-secondary" href="#steps">
                Review the steps
              </a>
            )}
          </div>
        </div>
        <div className="peek">
          <SiteImage
            asset="website/barstro-peeking-character-transparent.png"
            alt={alts.peeking}
            width={1024}
            height={1024}
            className="peek-img"
            sizes="180px"
          />
        </div>
      </div>
    </section>
  );
}
