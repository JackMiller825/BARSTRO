import { Link } from 'react-router-dom';
import { project } from '../config/project.ts';
import { buyingSteps } from '../content/website.ts';
import { canTrade, safeUrl } from '../lib/gates.ts';
import { Icon } from './Icon.tsx';

type Props = {
  cta: 'guide' | 'swap';
};

export function SwapControl({ id, note }: { id: string; note?: string }) {
  const href = canTrade(project) ? safeUrl(project.officialSwapUrl) : null;
  if (href) {
    return (
      <a className="btn btn-primary" href={href} target="_blank" rel="noopener noreferrer">
        Open verified swap
        <Icon name="link" />
      </a>
    );
  }
  return (
    <div className="pending-action">
      <button type="button" className="btn btn-primary" disabled aria-describedby={note ? id : undefined}>
        Swap link pending
      </button>
      {note ? (
        <p className="fine" id={id}>
          {note}
        </p>
      ) : null}
    </div>
  );
}

export function BuyingSteps({ cta }: Props) {
  return (
    <section id="steps" className="section">
      <div className="wrap">
        <h2>Three steps. Five bars.</h2>
        <p>New to Ethereum? Take it one step at a time.</p>
        <div className="steps">
          {buyingSteps.map((step, index) => (
            <article key={step.title} className="card step-card">
              <div className="step-head">
                <span className="step-index">{index + 1}</span>
                <Icon name={step.icon} />
              </div>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </article>
          ))}
        </div>
        <div className="actions section-cta">
          {cta === 'guide' ? (
            <Link className="btn btn-primary" to="/buy">
              Read the buying guide
            </Link>
          ) : (
            <SwapControl id="swap-steps-note" />
          )}
        </div>
      </div>
    </section>
  );
}
