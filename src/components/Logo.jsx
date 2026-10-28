import './Logo.css';

/**
 * Brand identity: a sharp navy emblem with a gold "A" monogram and a
 * sole-profile notch, paired with the Persian wordmark and Latin descriptor.
 */
export default function Logo({ variant = 'light', compact = false }) {
  return (
    <span className={`logo logo--${variant}${compact ? ' logo--compact' : ''}`}>
      <span className="logo__emblem" aria-hidden="true">
        <svg viewBox="0 0 40 40" role="presentation">
          <rect x="0.75" y="0.75" width="38.5" height="38.5" className="logo__frame" />
          <path d="M20 9.5 28.4 29h-4.1l-1.5-3.7h-5.6L15.7 29h-4.1z" className="logo__mark" />
          <path d="M18.5 21.7h3L20 17.4z" className="logo__notch" />
          <path d="M10 32.5h20" className="logo__base" />
        </svg>
      </span>
      <span className="logo__text">
        <span className="logo__name">آرمان پخش</span>
        {!compact && <span className="logo__latin">ARMAN PAKHSH</span>}
      </span>
    </span>
  );
}
