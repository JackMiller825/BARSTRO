import { useEffect, useRef, useState } from 'react';
import { alts, signalLabels } from '../content/website.ts';
import { SiteImage } from './SiteImage.tsx';

const barHeights = [14, 22, 30, 38, 48];

export function SignalRescue() {
  const [count, setCount] = useState(0);
  const [lift, setLift] = useState(false);
  const countRef = useRef(0);
  const timer = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current !== null) window.clearTimeout(timer.current);
    };
  }, []);

  function clearLift() {
    if (timer.current !== null) {
      window.clearTimeout(timer.current);
      timer.current = null;
    }
    setLift(false);
  }

  function celebrate() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (timer.current !== null) return;
    setLift(true);
    timer.current = window.setTimeout(() => {
      setLift(false);
      timer.current = null;
    }, 180);
  }

  function advance() {
    if (countRef.current >= 5) return;
    countRef.current += 1;
    setCount(countRef.current);
    if (countRef.current === 5) celebrate();
  }

  function replay() {
    countRef.current = 0;
    setCount(0);
    clearLift();
  }

  const label = signalLabels[count] ?? signalLabels[0];

  return (
    <div className="hero-art">
      <SiteImage
        asset="website/barstro-hero-character-transparent.png"
        alt={alts.hero}
        width={1024}
        height={1024}
        eager
        priority="high"
        className={lift ? 'cutout is-lift' : 'cutout'}
        sizes="(min-width: 1024px) 520px, 360px"
      />
      <div className="hero-props">
        <div className="hero-phone" aria-hidden="true">
          <svg viewBox="0 0 60 96" width="54" height="86">
            <rect x="3" y="3" width="54" height="90" rx="12" fill="#281346" stroke="#B494FF" strokeWidth="3" />
            <rect x="22" y="10" width="16" height="4" rx="2" fill="#B494FF" />
            <rect x="16" y="68" width="6" height="12" rx="1.5" fill="none" stroke="#B494FF" strokeWidth="2" />
            <rect x="26" y="60" width="6" height="20" rx="1.5" fill="none" stroke="#B494FF" strokeWidth="2" />
            <rect x="36" y="52" width="6" height="28" rx="1.5" fill="none" stroke="#B494FF" strokeWidth="2" />
          </svg>
        </div>
        <div className="signal-widget">
          <button
            type="button"
            className="signal-button"
            onClick={advance}
            disabled={count >= 5}
            aria-label="Restore signal"
          >
            <span className="bars" aria-hidden="true">
              {barHeights.map((height, index) => (
                <span key={height} className={index < count ? 'bar is-on' : 'bar'} style={{ height }} />
              ))}
            </span>
            <span id="signal-status" className="signal-status" aria-live="polite" aria-atomic="true">
              {label}
            </span>
          </button>
          {count >= 5 ? (
            <button type="button" className="btn btn-secondary" onClick={replay}>
              Rescue them again
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
