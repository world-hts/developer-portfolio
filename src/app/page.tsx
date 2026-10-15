const projects = [
  {
    number: "01",
    name: "Asman Shop",
    type: "E-commerce · Web application",
    description:
      "A multilingual catalogue for a single phone-accessories store, designed around clear product information and a calm shopping experience.",
    tags: ["Next.js", "TypeScript", "Supabase"],
    status: "Existing project",
    visual: "shop",
  },
  {
    number: "02",
    name: "TaskFlow",
    type: "Mobile · Productivity",
    description:
      "A focused task manager for turning busy days into clear priorities, with local-first data and a simple daily workflow.",
    tags: ["Flutter", "Dart", "Mobile UI"],
    status: "Planned",
    visual: "tasks",
  },
  {
    number: "03",
    name: "Finora",
    type: "Web application · Personal finance",
    description:
      "A straightforward way to understand spending, organise transactions, and keep a monthly budget in view.",
    tags: ["React", "TypeScript", "Data visualisation"],
    status: "Planned",
    visual: "finora",
  },
];

const skills = ["TypeScript", "React", "Next.js", "CSS", "Flutter", "Dart", "Python", "Git"];

function ArrowIcon({ diagonal = false }: { diagonal?: boolean }) {
  return diagonal ? (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none"><path d="M5 15 15 5M6 5h9v9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
  ) : (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none"><path d="M3.5 10h12m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
  );
}

function ProjectVisual({ variant }: { variant: string }) {
  if (variant === "shop") {
    return <div className="project-art art-shop" aria-hidden="true"><div className="art-window"><div className="art-window-top"><i /><i /><i /><span>asman.shop</span></div><div className="art-shop-hero"><small>EVERYDAY TECH, MADE SIMPLE</small><b>Find your<br />next essential.</b><div className="art-shop-button" /></div><div className="art-product-row"><div className="art-product"><span className="art-phone" /></div><div className="art-product"><span className="art-headphones" /></div><div className="art-product"><span className="art-watch" /></div></div></div><span className="art-orbit orbit-one" /><span className="art-orbit orbit-two" /></div>;
  }
  if (variant === "tasks") {
    return <div className="project-art art-tasks" aria-hidden="true"><div className="task-card"><div className="task-card-head"><span>MONDAY, OCT 19</span><b>Today, in focus</b></div><div className="task-line done"><i>✓</i><span>Review project brief</span><em>Done</em></div><div className="task-line"><i /><span>Build the first version</span><em>10:30</em></div><div className="task-line"><i /><span>Write project notes</span><em>14:00</em></div><div className="task-progress"><span /><b>2 of 4 priorities</b></div></div><span className="task-spark">✳</span></div>;
  }
  return <div className="project-art art-finora" aria-hidden="true"><div className="finance-card"><div className="finance-head"><span>MONTHLY OVERVIEW</span><b>Spending insights</b></div><div className="finance-total"><small>Total expenses</small><strong>2,480 <i>TMT</i></strong><span>↓ 8.4% <small>vs. last month</small></span></div><div className="finance-chart"><i style={{ height: "38%" }} /><i style={{ height: "58%" }} /><i style={{ height: "45%" }} /><i style={{ height: "78%" }} /><i style={{ height: "52%" }} /><i style={{ height: "90%" }} /><i style={{ height: "66%" }} /><i style={{ height: "48%" }} /></div><div className="finance-legend"><i /> Everyday <i /> Transport <i /> Other</div></div><span className="finance-glow" /></div>;
}

export default function Home() {
  return (
    <main>
      <div className="site-shell">
        <header className="nav-bar">
          <a className="brand" href="#home" aria-label="Portfolio home"><span className="brand-mark">P.</span><span>Portfolio<span className="brand-dot">/</span></span></a>
          <nav aria-label="Main navigation"><a href="#work">Work</a><a href="#about">About</a><a href="#contact">Contact</a></nav>
          <a className="nav-cta" href="#contact">Let&apos;s talk <ArrowIcon diagonal /></a>
        </header>

        <section className="hero" id="home">
          <div className="hero-copy">
            <div className="availability"><span /> OPEN TO OPPORTUNITIES</div>
            <p className="eyebrow">INDEPENDENT DEVELOPER <span>·</span> DIGITAL MAKER</p>
            <h1>Building useful<br />things for the <span className="serif-word">real world.</span></h1>
            <p className="hero-description">I turn ideas into thoughtful digital experiences — from fast, accessible websites to practical apps that make everyday life a little easier.</p>
            <div className="hero-actions"><a className="button button-primary" href="#work">Explore my work <ArrowIcon /></a><a className="text-link" href="#about">A little about me <ArrowIcon diagonal /></a></div>
            <div className="hero-footnote"><span className="footnote-line" /> <span>Curiosity-led. Detail-focused. Always learning.</span></div>
          </div>
          <div className="hero-art" aria-label="Abstract illustration of a digital workspace">
            <div className="art-grid" />
            <div className="hero-orb"><div className="orb-core" /><div className="orb-ring ring-a" /><div className="orb-ring ring-b" /><div className="orb-ring ring-c" /><span className="orb-point point-a" /><span className="orb-point point-b" /><span className="orb-point point-c" /></div>
            <div className="floating-note note-top"><span className="note-icon">↗</span><span><b>Ideas into interfaces</b><small>Design-minded development</small></span></div>
            <div className="floating-note note-bottom"><span className="note-status" /><span><b>Built with intention</b><small>Clarity over complexity</small></span></div>
            <div className="art-coordinate">37° 58&apos; N <span>/</span> 58° 23&apos; E</div>
          </div>
        </section>

        <div className="trust-strip"><span className="trust-label">TOOLS I WORK WITH</span><div className="tool-list"><span>◈ <b>TypeScript</b></span><span>✳ <b>React</b></span><span>△ <b>Next.js</b></span><span>◉ <b>Flutter</b></span><span>⌘ <b>Python</b></span></div><span className="strip-note">AND ALWAYS LEARNING <span>↗</span></span></div>

        <section className="work-section section-block" id="work">
          <div className="section-heading"><div><p className="eyebrow">SELECTED WORK <span>01 — 03</span></p><h2>Made with purpose<span>.</span></h2></div><p className="section-intro">A growing collection of practical products, experiments, and ideas brought to life through code.</p></div>
          <div className="project-grid">{projects.map((project) => <article className="project-card" key={project.number}><ProjectVisual variant={project.visual} /><div className="project-content"><div className="project-meta"><span>{project.type}</span><span className={project.status === "Planned" ? "status status-planned" : "status"}>{project.status}</span></div><h3>{project.name}<span className="project-number">/{project.number}</span></h3><p>{project.description}</p><div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div></article>)}</div>
          <div className="work-note"><span className="work-note-icon">✳</span><p><b>This portfolio grows as the projects do.</b> Planned projects are clearly marked — only verified, working builds will be presented as completed.</p></div>
        </section>

        <section className="about-section section-block" id="about"><div className="about-left"><p className="eyebrow">A LITTLE ABOUT ME <span>✳</span></p><h2>Good software is<br />more than code<span>.</span></h2></div><div className="about-right"><p className="about-lead">It&apos;s about understanding a real problem, removing unnecessary complexity, and creating something people enjoy using.</p><p className="about-body">I&apos;m building my craft one project at a time — learning through shipping, testing, refining, and paying attention to the small details that make a product feel complete.</p><div className="skill-cloud">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div></div></section>

        <section className="contact-section" id="contact"><div className="contact-decoration" aria-hidden="true">✳</div><div><p className="eyebrow">HAVE AN IDEA IN MIND?</p><h2>Let&apos;s make<br /><span>something meaningful.</span></h2><p className="contact-copy">Open to collaborations, thoughtful feedback, and interesting problems.</p></div><a className="button button-light" href="https://github.com/world-hts" target="_blank" rel="noreferrer">Find me on GitHub <ArrowIcon diagonal /></a></section>

        <footer className="footer"><a className="brand footer-brand" href="#home"><span className="brand-mark">P.</span><span>Portfolio<span className="brand-dot">/</span></span></a><span>Designed with curiosity. Built with care.</span><a href="#home">BACK TO TOP ↑</a><span className="copyright">© {new Date().getFullYear()} · Hatyja</span></footer>
      </div>
    </main>
  );
}
