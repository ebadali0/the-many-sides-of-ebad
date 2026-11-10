import { useState } from 'react';
import { Heart, LockKeyhole, Sparkles, RotateCcw } from 'lucide-react';
import WelcomeScreen from './components/WelcomeScreen.jsx';
import ProgressBar from './components/ProgressBar.jsx';
import ChapterCard from './components/ChapterCard.jsx';
import ChapterModal from './components/ChapterModal.jsx';
import { chapters } from './data/chapters.js';

export default function App() {
  const [started, setStarted] = useState(false);
  const [completed, setCompleted] = useState([]);
  const [activeId, setActiveId] = useState(null);
  const activeChapter = chapters.find((chapter) => chapter.id === activeId);
  const highestUnlocked = Math.max(1, ...completed.map((id) => id + 1));
  const isUnlocked = (id) => id <= highestUnlocked;
  const markComplete = (id) => setCompleted((prev) => prev.includes(id) ? prev : [...prev, id]);
  const openNext = () => {
    const nextId = activeId + 1;
    if (nextId <= chapters.length) setActiveId(nextId);
    else setActiveId(null);
  };

  if (!started) return <WelcomeScreen onBegin={() => setStarted(true)} />;

  return (
    <main className="app-shell">
      <div className="ambient ambient-a" /><div className="ambient ambient-b" />
      <header className="site-header">
        <a className="brand" href="#" onClick={(e) => { e.preventDefault(); setStarted(false); }}>
          <span className="brand-mark"><Heart size={15} fill="currentColor" /></span>
          <span>THE MANY SIDES <i>OF EBAD</i></span>
        </a>
        <span className="header-note">A LITTLE STORY FOR ROUSHNI</span>
      </header>

      <section className="dashboard">
        <div className="dashboard-intro">
          <div className="eyebrow"><Sparkles size={13} /> THE CHAPTERS</div>
          <h1>One story.<br /><em>Many sides.</em></h1>
          <p className="intro-copy">A few words I wanted to share, followed by a little tour of the person behind them. Take each chapter at your own pace.</p>
        </div>

        <ProgressBar completed={completed.length} total={chapters.length} />

        <div className="section-heading">
          <div><span className="section-kicker">THE JOURNEY</span><h2>Explore the chapters</h2></div>
          <span className="sequence-label"><LockKeyhole size={13} /> UNLOCK IN ORDER</span>
        </div>

        <div className="chapter-grid">
          {chapters.map((chapter) => (
            <ChapterCard
              key={chapter.id}
              chapter={chapter}
              unlocked={isUnlocked(chapter.id)}
              completed={completed.includes(chapter.id)}
              onClick={() => setActiveId(chapter.id)}
            />
          ))}
        </div>

        <footer className="site-footer">
          <div className="footer-spark">✦</div>
          <p>Made with thought, honesty & a little chaos.</p>
          <span>EBAD <i>×</i> ROUSHNI</span>
          <button className="restart-button" onClick={() => { setCompleted([]); setActiveId(null); setStarted(false); }}><RotateCcw size={12} /> Restart experience</button>
        </footer>
      </section>

      {activeChapter && (
        <ChapterModal
          chapter={activeChapter}
          isLast={activeChapter.id === chapters.length}
          onClose={() => setActiveId(null)}
          onComplete={() => markComplete(activeChapter.id)}
          onNext={openNext}
        />
      )}
    </main>
  );
}