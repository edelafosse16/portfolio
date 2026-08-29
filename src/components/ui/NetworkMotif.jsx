// Decorative node-and-line graphic for Skills/Projects -- a small, quiet
// "connected system" motif in the section's top-right corner. Single hand-
// placed layout (not generated), kept in the one accent color via
// currentColor so it stays in sync with the design tokens automatically.
// Hidden below md: at narrower widths the text column fills the full
// section width, leaving no corner empty enough for this to sit in
// without overlapping the heading or cards.
const NetworkMotif = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 200 200"
    className="pointer-events-none absolute -top-6 -right-6 hidden h-56 w-56 text-accent md:block"
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
    {/* Solid enough to fully cover where a line ends at each node's
        center -- at low opacity the line was showing through the dot. */}
    <g fill="currentColor">
      <circle cx="90" cy="80" r="3.5" fillOpacity="0.75" />
      <circle cx="20" cy="30" r="2.5" fillOpacity="0.65" />
      <circle cx="80" cy="15" r="2.5" fillOpacity="0.65" />
      <circle cx="140" cy="50" r="2.5" fillOpacity="0.65" />
      <circle cx="170" cy="110" r="2.5" fillOpacity="0.65" />
      <circle cx="110" cy="140" r="2.5" fillOpacity="0.65" />
      <circle cx="40" cy="110" r="2.5" fillOpacity="0.65" />
    </g>
  </svg>
);

export default NetworkMotif;
