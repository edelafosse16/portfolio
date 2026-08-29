// A loose, unconnected scatter of dots -- deliberately the opposite of the
// Skills/Projects network motif's connected nodes. Sits in normal document
// flow below the section's content (not corner-anchored over it), so it
// shows at every viewport width including mobile without any risk of
// landing on top of text -- it's never competing for the same space.
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
    className="pointer-events-none h-24 w-24 text-accent md:h-28 md:w-28"
  >
    {DOTS.map((dot, index) => (
      <circle key={index} cx={dot.cx} cy={dot.cy} r={dot.r} fill="currentColor" fillOpacity={dot.opacity} />
    ))}
  </svg>
);

export default DotsMotif;
