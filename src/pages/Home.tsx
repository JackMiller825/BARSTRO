import { Link } from 'react-router-dom';
import { BuyingSteps } from '../components/BuyingSteps.tsx';
import { CommunityHub } from '../components/CommunityHub.tsx';
import { SignalRescue } from '../components/SignalRescue.tsx';
import { SiteImage } from '../components/SiteImage.tsx';
import { SpaceBackdrop } from '../components/SpaceBackdrop.tsx';
import { TokenInfo } from '../components/TokenInfo.tsx';
import { comicPanels } from '../content/website.ts';

export default function Home() {
  const teaser = comicPanels[0];

  return (
    <>
      <section className="scene hero-scene">
        <SpaceBackdrop />
        <div className="lunar" aria-hidden="true">
          <SiteImage
            asset="website/barstro-lunar-foreground-transparent.png"
            alt=""
            width={2172}
            height={724}
            className="lunar-img"
            sizes="100vw"
            decorative
          />
        </div>
        <div className="wrap scene-inner hero-grid">
          <div>
            <p className="eyebrow">Barstronaut / $BARSTRO</p>
            <h1>Your signal went to space.</h1>
            <p>Your missing signal bars became astronauts. An Ethereum meme with a mission: bring the bars back.</p>
            <div className="actions">
              <Link className="btn btn-primary" to="/story">
                Meet Barstronaut
              </Link>
              <Link className="btn btn-text" to="/buy">
                How to buy
              </Link>
            </div>
          </div>
          <SignalRescue />
        </div>
      </section>

      <section className="section">
        <div className="wrap split split-teaser">
          <div className="frame-square teaser-frame">
            <SiteImage asset={teaser.asset} alt={teaser.alt} width={1024} height={1024} sizes="(min-width: 1024px) 520px, 100vw" />
          </div>
          <div>
            <h2>The bars went missing. He went looking.</h2>
            <p>A lost signal. A tiny astronaut. One very unnecessary space rescue.</p>
            <Link className="btn btn-primary" to="/story">
              Read the story
            </Link>
          </div>
        </div>
      </section>

      <TokenInfo cta="guide" />
      <BuyingSteps cta="guide" />
      <CommunityHub mode="link" />
    </>
  );
}
