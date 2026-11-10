import { Check } from 'lucide-react';

export default function ProgressBar({ completed, total }) {
  const percent = (completed / total) * 100;
  return (
    <div className="progress-wrap">
      <div className="progress-top">
        <span>YOUR JOURNEY</span>
        <strong>{String(completed).padStart(2, '0')} <i>/</i> {String(total).padStart(2, '0')}</strong>
      </div>
      <div className="progress-track"><div className="progress-fill" style={{ width: `${percent}%` }} /></div>
      <p>{completed === total ? "All chapters explored. Thank you for reading." : `${total - completed} ${total - completed === 1 ? 'chapter' : 'chapters'} left to discover`}</p>
    </div>
  );
}