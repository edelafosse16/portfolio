// Central place for all portfolio content. Edit this file to update
// what appears on the site without touching any component.
//
// Items still pending confirmation from Eric are marked [TK] rather than
// guessed. See PORTFOLIO_BRIEF.md section 8 for the full open-items list.
const personalInfo = {
  name: "Eric Delafosse",
  title: "Business Operations Analyst",
  about: [
    "I'm a business analyst who turns operational chaos into measurable wins. In my last role at a major sports betting and daily fantasy platform, I cut operational incidents by 60%, saved 600+ hours a year through automation, and delivered more than $1M in process improvements. My sweet spot is building self-service frameworks that let teams solve their own problems.",
    "I worked across fantasy, sportsbook, casino, racing, and prediction products, which taught me that every operation has its own weird edge cases. I like finding them, fixing them, and writing the playbook so it doesn't happen again.",
    "Before operations, I was a tax accountant at a small firm, which is where I picked up the habit of triple-checking the numbers before presenting them.",
    "If your team needs someone who can dig into messy operational data, spot the patterns that matter, and build strategic solutions that actually stick, I'd love to help."
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
      description: "Self-service framework that let operations teams target affected user cohorts during site-wide incidents rather than escalating each one manually. Saved hundreds of thousands of dollars per major incident.",
      technologies: ["Amplitude", "Excel", "KNIME"]
    },
    {
      title: "Stock Screener",
      category: "Personal, technical",
      description: "Google Sheets screener implementing a buy-the-dip-in-an-uptrend strategy: rules-based entries and exits with a 3% stop loss, a 5% target, and an SPY market-regime filter. Currently live-testing with small capital.",
      technologies: ["Google Sheets"]
    },
    {
      title: "fosseeboss",
      category: "Personal, creative",
      description: "Self-published sports and entertainment newsletter. Game breakdowns, narrative, and stats worth arguing about.",
      technologies: ["Substack"],
      link: "https://thefossover.substack.com/"
    },
    {
      title: "This Portfolio Site",
      category: "Personal, technical",
      description: "This site itself, rebuilt from a default Vite starter as part of deliberate upskilling in React.",
      technologies: ["React", "Vite", "Tailwind CSS", "Framer Motion"]
    }
  ]
};

export default personalInfo;
