// A loose, unconnected scatter of dots -- deliberately the opposite of the
// Skills/Projects network motif's connected nodes. Corner-anchored, quiet.
// Hidden below lg: at narrower widths the text column fills the full
// section width, leaving no corner empty enough for this to sit in
// without landing on top of body text.
const DOTS = [
  { cx: 160, cy: 100, r: 2, opacity: 0.3 },
  { cx: 180, cy: 90, r: 2, opacity: 0.3 },
  { cx: 120, cy: 110, r: 2.5, opacity: 0.4 },
  { cx: 105, cy: 140, r: 2, opacity: 0.25 },
  { cx: 170, cy: 150, r: 2, opacity: 0.25 },
  { cx: 190, cy: 180, r: 3.5, opacity: 0.45 },
  { cx: 140, cy: 170, r: 2, opacity: 0.3 },
  { cx: 175, cy: 195, r: 2.5, opacity: 0.35 },
];

const DotsMotif = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 200 200"
    className="pointer-events-none absolute -right-6 -bottom-6 hidden h-56 w-56 text-accent lg:block"
  >
    {DOTS.map((dot, index) => (
      <circle key={index} cx={dot.cx} cy={dot.cy} r={dot.r} fill="currentColor" fillOpacity={dot.opacity} />
    ))}
  </svg>
);

export default DotsMotif;
