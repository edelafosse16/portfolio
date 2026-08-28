// Decorative node-and-line graphic for Skills/Projects -- a small, quiet
// "connected system" motif in the section's top-right corner. Single hand-
// placed layout (not generated), kept in the one accent color via
// currentColor so it stays in sync with the design tokens automatically.
const NetworkMotif = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 200 200"
    className="pointer-events-none absolute -top-6 -right-6 h-40 w-40 text-accent md:h-56 md:w-56"
  >
    <g stroke="currentColor" strokeWidth="1" fill="none">
      <line x1="90" y1="80" x2="20" y2="30" strokeOpacity="0.15" />
      <line x1="90" y1="80" x2="80" y2="15" strokeOpacity="0.15" />
      <line x1="90" y1="80" x2="140" y2="50" strokeOpacity="0.15" />
      <line x1="90" y1="80" x2="170" y2="110" strokeOpacity="0.15" />
      <line x1="90" y1="80" x2="110" y2="140" strokeOpacity="0.15" />
      <line x1="90" y1="80" x2="40" y2="110" strokeOpacity="0.15" />
      <line x1="20" y1="30" x2="80" y2="15" strokeOpacity="0.1" />
      <line x1="140" y1="50" x2="170" y2="110" strokeOpacity="0.1" />
    </g>
    <g fill="currentColor">
      <circle cx="90" cy="80" r="3.5" fillOpacity="0.4" />
      <circle cx="20" cy="30" r="2.5" fillOpacity="0.3" />
      <circle cx="80" cy="15" r="2.5" fillOpacity="0.3" />
      <circle cx="140" cy="50" r="2.5" fillOpacity="0.3" />
      <circle cx="170" cy="110" r="2.5" fillOpacity="0.3" />
      <circle cx="110" cy="140" r="2.5" fillOpacity="0.3" />
      <circle cx="40" cy="110" r="2.5" fillOpacity="0.3" />
    </g>
  </svg>
);

export default NetworkMotif;
