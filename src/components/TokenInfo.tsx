import { Link } from 'react-router-dom';
import { project } from '../config/project.ts';
import { alts } from '../content/website.ts';
import {
  canCopyAddress,
  displayFact,
  safeUrl,
  taxLabel,
  visibleContractAddress,
} from '../lib/gates.ts';
import { useCopyFeedback } from '../lib/useCopyFeedback.ts';
import { SiteImage } from './SiteImage.tsx';

type Props = {
  cta: 'guide' | 'steps';
};

export function TokenInfo({ cta }: Props) {
  const address = visibleContractAddress(project);
  const copyEnabled = canCopyAddress(project) && address !== null;
  const { status, copy } = useCopyFeedback('Address copied', 'Copy failed — select the address to copy it.');
  const chart = safeUrl(project.officialChartUrl);
  const explorer = safeUrl(project.officialExplorerUrl);
  const facts = [
    ['Supply', displayFact(project.totalSupply)],
    ['Buy / sell tax', taxLabel(project.buyTax, project.sellTax)],
    ['Liquidity', displayFact(project.liquidityStatus)],
    ['Ownership', displayFact(project.ownershipStatus)],
  ] as const;

  return (
    <section id="token" className="section token-section">
      <div className="wrap token-layout">
        <div>
          <p className="eyebrow">Intended network · {project.intendedNetwork}</p>
          <h2>The token, clearly.</h2>
          <p>The joke is ready. The launch details are still pending.</p>
          <p className="network-line">{project.intendedNetwork} — intended network.</p>
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
              {copyEnabled ? 'Copy address' : 'Copy unavailable'}
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
          <p className="tokenomics">Tokenomics: {displayFact(project.tokenomics)}</p>
          <div className="utility-row">
            {chart ? (
              <a className="btn btn-quiet" href={chart} target="_blank" rel="noopener noreferrer">
                Open chart
              </a>
            ) : (
              <button type="button" className="btn btn-quiet" disabled>
                Chart link pending
              </button>
            )}
            {explorer ? (
              <a className="btn btn-quiet" href={explorer} target="_blank" rel="noopener noreferrer">
                Open block explorer
              </a>
            ) : (
              <button type="button" className="btn btn-quiet" disabled>
                Explorer link pending
              </button>
            )}
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
