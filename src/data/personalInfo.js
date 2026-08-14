// Central place for all portfolio content. Edit this file to update
// what appears on the site without touching any component.
//
// Items still pending confirmation from Eric are marked [TK] rather than
// guessed. See PORTFOLIO_BRIEF.md section 8 for the full open-items list.
const personalInfo = {
  name: "Eric Delafosse",
  title: "Business Operations Analyst",
  tagline: "A process that's 'always been done this way' is usually just waiting for someone confident enough to ask why.",
  about: [
    "I'm a business analyst who fixes the processes nobody else wants to touch. At a major sports betting and daily fantasy platform, I cut operational incidents by 60%, saved 600+ hours per project through automation, and drove more than $1M in process improvements across six product lines.",
    "I worked fantasy, sportsbook, casino, and racing products, and every single one had its own weird edge cases nobody had bothered to fix. I found them, fixed them, and wrote the playbook so the next person didn't have to relearn it the hard way.",
    "Before operations, I was a tax accountant at a small firm. I triple-checked numbers before anyone saw them, and I still do.",
    "I want the operational mess nobody's had the bandwidth to fix. That's exactly where I do my best work."
  ],
  skills: {
    core: [
      { name: "Excel and Google Sheets", detail: "Advanced modeling, pivots, lookups" },
      { name: "Amplitude", detail: "Product analytics and cohort analysis" },
      { name: "Jira", detail: "Workflow and ticket operations" },
      { name: "Miro", detail: "Process mapping and design" },
      { name: "Process design, incident reduction, operational reporting, workflow automation" }
    ],
    learning: [
      { name: "Python for data analysis", detail: "pandas, matplotlib, seaborn" },
      { name: "SQL" },
      { name: "JavaScript and React" }
    ]
  },
  contact: {
    email: "eric.s.delafosse@gmail.com",
    github: "github.com/edelafosse16",
    linkedin: "linkedin.com/in/eric-delafosse"
  },
  projects: [
    {
      title: "Cohort-Targeting Tool",
      category: "Professional, anonymized",
      // outcome is the flip-card front line, derived from description below, no new claims added.
      outcome: "Saved hundreds of thousands of dollars per major incident.",
      description: "Self-service framework that let operations teams target affected user cohorts during site-wide incidents rather than escalating each one manually. Saved hundreds of thousands of dollars per major incident.",
      technologies: ["Amplitude", "Excel", "KNIME"]
    },
    {
      title: "Stock Screener",
      category: "Personal, technical",
      outcome: "Currently live-testing a rules-based strategy with small capital.",
      description: "Google Sheets screener implementing a buy-the-dip-in-an-uptrend strategy: rules-based entries and exits with a 3% stop loss, a 5% target, and an SPY market-regime filter. Currently live-testing with small capital.",
      technologies: ["Google Sheets"]
    },
    {
      title: "NFL Offensive WAR Leaderboard",
      category: "Personal, creative",
      outcome: "Custom WAR leaderboard for the 2025 NFL season, built from play-by-play data.",
      description: "An offensive WAR (Wins Above Replacement) leaderboard for the 2025 NFL season, built by a custom pipeline (not an official NFL/nflverse stat). Credits each player's EPA by position, nets it against a replacement-level baseline set by the lowest-volume qualifying players, then converts EPA above replacement into wins via a regression of team wins on team offensive EPA (R²=0.53 across 2020-2025).",
      technologies: ["R", "nflreadr", "dplyr"]
    },
    {
      title: "This Portfolio Site",
      category: "Personal, technical",
      outcome: "Built this site to upskill in React.",
      description: "This site itself, rebuilt from a default Vite starter as part of deliberate upskilling in React.",
      technologies: ["React", "Vite", "Tailwind CSS", "Framer Motion"]
    },
    {
      title: "The Fossover",
      category: "Personal, creative",
      outcome: "Self-published sports and entertainment newsletter.",
      description: "Self-published sports and entertainment newsletter. Game breakdowns, narrative, and stats worth arguing about.",
      technologies: ["Substack"],
      link: "https://thefossover.substack.com/"
    }
  ]
};

export default personalInfo;
