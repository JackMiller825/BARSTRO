import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { project } from '../config/project.ts';
import { alts } from '../content/website.ts';
import { displayFact, visibleContractAddress } from '../lib/gates.ts';
import { copyText } from '../lib/useCopyFeedback.ts';
import { SiteImage } from './SiteImage.tsx';

type Props = {
  cta: 'guide' | 'steps';
};

export function TokenInfo({ cta }: Props) {
  const address = visibleContractAddress(project);
  const addressText = address ?? 'Contract address pending';
  const addressRef = useRef<HTMLParagraphElement>(null);
  const resetTimer = useRef<number | null>(null);
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState('');

  useEffect(() => {
    return () => {
      if (resetTimer.current !== null) window.clearTimeout(resetTimer.current);
    };
  }, []);

  async function onCopy() {
    const text = addressRef.current?.textContent?.trim() || addressText;
    if (!text) return;
    try {
      await copyText(text, addressRef.current);
      setCopyError('');
      setCopied(true);
      if (resetTimer.current !== null) window.clearTimeout(resetTimer.current);
      resetTimer.current = window.setTimeout(() => {
        setCopied(false);
        resetTimer.current = null;
      }, 2000);
    } catch {
      setCopied(false);
      setCopyError('Copy failed — select the address to copy it.');
    }
  }
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
              <p ref={addressRef} className={address ? 'address' : 'address is-pending'}>
                {addressText}
              </p>
            </div>
            <button type="button" className="btn btn-secondary copy-address" aria-live="polite" onClick={() => void onCopy()}>
              {copied ? 'Copied' : 'Copy address'}
            </button>
          </div>
          <p className="live-status" aria-live="polite">
            {copyError}
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
