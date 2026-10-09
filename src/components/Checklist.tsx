import { useState } from 'react';
import { checklistItems, alts } from '../content/website.ts';
import { SwapControl } from './BuyingSteps.tsx';
import { SiteImage } from './SiteImage.tsx';

export function Checklist() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  return (
    <section id="checklist" className="section">
      <div className="wrap split checklist-layout">
        <div>
          <h2>Your pre-swap checklist.</h2>
          <p>These are your own reminders. Ticking a box does not verify a contract or make a trade safe.</p>
          <div className="card checklist" role="group" aria-labelledby="checklist-title">
            <p id="checklist-title" className="sr-only">
              Your pre-swap checklist.
            </p>
            {checklistItems.map((item) => (
              <label key={item} className="check">
                <input
                  type="checkbox"
                  checked={checked[item] === true}
                  onChange={(event) => {
                    const next = event.target.checked;
                    setChecked((current) => ({ ...current, [item]: next }));
                  }}
                />
                <span>{item}</span>
              </label>
            ))}
          </div>
          <div className="actions section-cta">
            <SwapControl
              id="swap-checklist-note"
              note="Checklist boxes never enable this button. It turns on only after launch, contract and swap details are confirmed."
            />
          </div>
        </div>
        <SiteImage
          asset="website/barstro-buy-guide-character-transparent.png"
          alt={alts.guide}
          width={1024}
          height={1024}
          className="cutout"
          sizes="(min-width: 1024px) 420px, 80vw"
        />
      </div>
    </section>
  );
}
