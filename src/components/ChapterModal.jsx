import { ArrowLeft, ArrowRight, Check, X } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ChapterModal({ chapter, isLast, onClose, onComplete, onNext }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setVisible(false);
    const timer = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(timer);
  }, [chapter.id]);

  return (
    <div className="modal-backdrop" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <section className={`chapter-modal ${visible ? 'modal-visible' : ''}`} role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <button className="modal-close icon-button" onClick={onClose} aria-label="Close"><X size={19} /></button>
        <div className="modal-decoration">✦</div>
        <div className="modal-meta"><span>{chapter.category}</span><span>CHAPTER {String(chapter.id).padStart(2, '0')} / 15</span></div>
        <div className="modal-emoji">{chapter.emoji}</div>
        <h2 id="modal-title">{chapter.title}</h2>
        <p className="modal-subtitle">{chapter.subtitle}</p>
        <div className="modal-divider"><span /></div>
        <p className="modal-message">{chapter.body}</p>
        <div className="modal-footer">
          <button className="text-button" onClick={onClose}><ArrowLeft size={15} /> Back to chapters</button>
          <button className="primary-button modal-next" onClick={() => { onComplete(); if (!isLast) onNext(); else onClose(); }}>
            {isLast ? 'Finish the journey' : 'Continue'} {isLast ? <Check size={16} /> : <ArrowRight size={16} />}
          </button>
        </div>
        <p className="modal-note">{isLast ? 'Thank you for taking the time.' : 'The next chapter will unlock when you continue.'}</p>
      </section>
    </div>
  );
}