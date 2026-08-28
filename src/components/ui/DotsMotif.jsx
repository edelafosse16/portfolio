// A loose, unconnected scatter of dots -- deliberately the opposite of the
// Skills/Projects network motif's connected nodes. Corner-anchored, quiet.
const DOTS = [
  { cx: 150, cy: 40, r: 3, opacity: 0.35 },
  { cx: 180, cy: 90, r: 2, opacity: 0.3 },
  { cx: 120, cy: 110, r: 2.5, opacity: 0.4 },
  { cx: 170, cy: 150, r: 2, opacity: 0.25 },
  { cx: 190, cy: 180, r: 3.5, opacity: 0.45 },
  { cx: 140, cy: 170, r: 2, opacity: 0.3 },
];

const DotsMotif = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 200 200"
    className="pointer-events-none absolute -right-6 -bottom-6 h-40 w-40 text-accent md:h-56 md:w-56"
  >
    {DOTS.map((dot, index) => (
      <circle key={index} cx={dot.cx} cy={dot.cy} r={dot.r} fill="currentColor" fillOpacity={dot.opacity} />
    ))}
  </svg>
);

export default DotsMotif;
