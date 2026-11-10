import { ArrowRight, Sparkles } from 'lucide-react';

export default function WelcomeScreen({ onBegin }) {
  return (
    <main className="welcome-screen">
      <div className="welcome-orb orb-one" />
      <div className="welcome-orb orb-two" />
      <div className="welcome-content">
        <div className="eyebrow"><Sparkles size={14} /> A LITTLE STORY FOR ROUSHNI</div>
        <div className="welcome-heart">✦</div>
        <p className="welcome-kicker">A note from Ebad</p>
        <h1>Hey, <em>Roushni.</em></h1>
        <p className="welcome-copy">
          There's something I want to say properly — and then, if you'd like,
          a few more sides of me to introduce.
        </p>
        <button className="primary-button" onClick={onBegin}>
          Begin the experience <ArrowRight size={17} />
        </button>
        <span className="welcome-footnote">Take your time. There's no rush.</span>
      </div>
      <div className="welcome-bottom">MADE WITH THOUGHT & A LITTLE BIT OF CHAOS</div>
    </main>
  );
}