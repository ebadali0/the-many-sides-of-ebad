import { Lock, Check, ArrowUpRight } from 'lucide-react';

export default function ChapterCard({ chapter, unlocked, completed, onClick }) {
  return (
    <button
      className={`chapter-card ${unlocked ? 'is-unlocked' : 'is-locked'} ${completed ? 'is-completed' : ''}`}
      onClick={onClick}
      disabled={!unlocked}
      aria-label={unlocked ? `Open chapter ${chapter.id}: ${chapter.title}` : `Chapter ${chapter.id} locked`}
    >
      <div className="card-topline">
        <span className="chapter-number">CHAPTER {String(chapter.id).padStart(2, '0')}</span>
        {completed ? <span className="card-state done"><Check size={13} /> READ</span> :
          unlocked ? <span className="card-state open"><ArrowUpRight size={14} /></span> :
          <span className="card-state locked"><Lock size={13} /></span>}
      </div>
      <div className="card-emoji">{chapter.emoji}</div>
      <div className="card-copy">
        <span className="card-category">{chapter.category}</span>
        <h3>{chapter.title}</h3>
        <p>{unlocked ? chapter.subtitle : 'Complete the previous chapter to unlock this one.'}</p>
      </div>
      <div className="card-bottom">
        <span>{completed ? 'REVISIT CHAPTER' : unlocked ? 'OPEN CHAPTER' : 'LOCKED'}</span>
        <span className="card-line" />
      </div>
    </button>
  );
}