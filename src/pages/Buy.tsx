import { BuyingSteps } from '../components/BuyingSteps.tsx';
import { Checklist } from '../components/Checklist.tsx';
import { FAQ } from '../components/FAQ.tsx';
import { SiteImage } from '../components/SiteImage.tsx';
import { SpaceBackdrop } from '../components/SpaceBackdrop.tsx';
import { TokenInfo } from '../components/TokenInfo.tsx';
import { alts } from '../content/website.ts';

export default function Buy() {
  return (
    <>
      <section className="scene hero-scene">
        <SpaceBackdrop />
        <div className="wrap scene-inner split">
          <div>
            <p className="eyebrow">Ethereum Mainnet guide.</p>
            <h1>Before you swap, check the signal.</h1>
            <p>
              A simple guide to wallets, ETH and checking the right token. BARSTRO contract and trading details are
              pending. This page does not mean trading is live.
            </p>
            <a className="btn btn-primary" href="#token">
              Review token details
            </a>
          </div>
          <SiteImage
            asset="website/barstro-buy-guide-character-transparent.png"
            alt={alts.guide}
            width={1024}
            height={1024}
            eager
            className="cutout"
            sizes="(min-width: 1024px) 480px, 80vw"
          />
        </div>
      </section>
      <TokenInfo cta="steps" />
      <BuyingSteps cta="swap" />
      <Checklist />
      <FAQ />
    </>
  );
}
