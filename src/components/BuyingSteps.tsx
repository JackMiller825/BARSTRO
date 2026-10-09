import { Link } from 'react-router-dom';
import { buyingSteps } from '../content/website.ts';
import { Icon } from './Icon.tsx';

type Props = {
  cta?: 'guide';
};

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
        {cta === 'guide' ? (
          <div className="actions section-cta">
            <Link className="btn btn-primary" to="/buy">
              Read the buying guide
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
