"use client";

import Image from "next/image";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { ArrowDown, ArrowRight, ArrowUpRight, Github, MapPin, Menu, Sparkles, X } from "lucide-react";
import { useState } from "react";
import { ProjectVisual } from "./components/ProjectVisual";
import { InteractiveHoverButton } from "./components/ui/InteractiveHoverButton";
import { NumberTicker } from "./components/ui/NumberTicker";
import { SpotlightCard } from "./components/ui/SpotlightCard";
import { disciplines, featuredStats, profile, projects, type ProjectCategory } from "./content/profile";

const categories: Array<"All" | ProjectCategory> = ["All", "Product", "DevOps", "AI & Bots", "Automation"];
const skills = ["Kubernetes", "Terraform", "Docker", "GitHub Actions", "Next.js", "SvelteKit", "Python", "LINE API", "PostgreSQL", "Prometheus", "Grafana"];

const reveal = {
  initial: { opacity: 0, y: 36 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10%" },
  transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] as const },
};

export default function HomePage() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 130, damping: 30, restDelta: 0.001 });

  return (
    <main>
      <motion.div className="scroll-progress" style={{ scaleX: progress }} />
      <Navigation />
      <Hero />
      <Ticker />
      <FeaturedWork />
      <ProjectArchive />
      <Principles />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}

function Navigation() {
  const [open, setOpen] = useState(false);
  const links = [
    ["#work", "Work"],
    ["#archive", "Archive"],
    ["#about", "About"],
  ];

  return (
    <header className="site-header">
      <a className="brand-mark" href="#top" aria-label="Back to top">
        <span>YR</span><i />
      </a>
      <nav className="desktop-nav" aria-label="Main navigation">
        {links.map(([href, label]) => <a href={href} key={href}>{label}</a>)}
      </nav>
      <a className="availability" href="#contact"><i /> Available to collaborate</a>
      <button className="menu-button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label="Toggle navigation">
        {open ? <X /> : <Menu />}
      </button>
      <AnimatePresence>
        {open && (
          <motion.nav className="mobile-nav" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
            {links.map(([href, label]) => <a href={href} key={href} onClick={() => setOpen(false)}>{label}<ArrowUpRight /></a>)}
            <a href="#contact" onClick={() => setOpen(false)}>Contact<ArrowUpRight /></a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero section-shell" id="top">
      <div className="hero-copy">
        <motion.div className="eyebrow" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }}>
          <span className="eyebrow-orb"><Sparkles /></span>
          {profile.role}
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}>
          Complex systems.
          <span>Calm experiences.</span>
        </motion.h1>
        <motion.p className="hero-intro" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12, duration: 0.8 }}>
          {profile.intro}
        </motion.p>
        <motion.div className="hero-actions" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.22, duration: 0.8 }}>
          <InteractiveHoverButton href="#work">Explore selected work</InteractiveHoverButton>
          <a className="text-link" href={profile.github} target="_blank" rel="noreferrer"><Github /> GitHub <ArrowUpRight /></a>
        </motion.div>
        <motion.a className="scroll-cue" href="#work" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
          <span><ArrowDown /></span> Scroll to explore
        </motion.a>
      </div>

      <motion.div className="hero-stage" initial={{ opacity: 0, scale: 0.92, rotate: 2 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}>
        <div className="hero-glow" />
        <div className="hero-stage__card">
          <div className="hero-stage__top"><span>Latest build</span><i>LIVE</i></div>
          <ProjectVisual project={projects[0]} />
          <div className="hero-stage__meta">
            <div><small>PRODUCT</small><strong>Nudget</strong></div>
            <a href={projects[0].live} target="_blank" rel="noreferrer" aria-label="Open Nudget"><ArrowUpRight /></a>
          </div>
        </div>
        <div className="floating-chip floating-chip--top"><i /> Railway deployed</div>
        <div className="floating-chip floating-chip--bottom">LINE + OCR + AI</div>
      </motion.div>
    </section>
  );
}

function Ticker() {
  const items = [...skills, ...skills];
  return (
    <div className="ticker" aria-label="Technology toolkit">
      <div className="ticker-track">
        {items.map((skill, index) => <span key={`${skill}-${index}`}>{skill}<i /></span>)}
      </div>
    </div>
  );
}

function SectionHeading({ kicker, title, copy }: { kicker: string; title: string; copy?: string }) {
  return (
    <motion.div className="section-heading" {...reveal}>
      <span>{kicker}</span>
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
    </motion.div>
  );
}

function FeaturedWork() {
  const featured = projects.filter((project) => project.featured);
  return (
    <section id="work" className="section-shell section-block">
      <SectionHeading kicker="01 / Selected work" title="A few things built to last." copy="Products and infrastructure presented as outcomes, not just stacks." />
      <div className="featured-list">
        {featured.map((project, index) => (
          <motion.article className="featured-project" key={project.name} {...reveal}>
            <div className="featured-project__visual"><ProjectVisual project={project} /></div>
            <div className="featured-project__copy">
              <div className="project-count">0{index + 1}</div>
              <span className="project-eyebrow">{project.eyebrow}</span>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <p className="project-detail">{project.detail}</p>
              <div className="tech-list">{project.tech.map((tech) => <span key={tech}>{tech}</span>)}</div>
              <div className="project-actions">
                {project.live && <InteractiveHoverButton href={project.live} external>View live</InteractiveHoverButton>}
                <a className="project-repo" href={project.repo} target="_blank" rel="noreferrer"><Github /> Source code <ArrowUpRight /></a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function ProjectArchive() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const visibleProjects = active === "All" ? projects : projects.filter((project) => project.category === active);

  return (
    <section id="archive" className="archive-section">
      <div className="section-shell section-block">
        <SectionHeading kicker="02 / GitHub archive" title="Every repository. One point of view." copy="Filter through the full public collection—products, platforms, bots, and automation." />
        <div className="filter-row" role="group" aria-label="Filter projects">
          {categories.map((category) => (
            <button key={category} onClick={() => setActive(category)} className={active === category ? "is-active" : ""}>
              {active === category && <motion.span layoutId="filter-pill" />}
              <b>{category}</b>
              <small>{category === "All" ? projects.length : projects.filter((project) => project.category === category).length}</small>
            </button>
          ))}
        </div>
        <motion.div layout className="project-grid">
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project) => (
              <motion.article key={project.name} layout initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }} transition={{ duration: 0.3 }}>
                <SpotlightCard className="archive-card">
                  <a className="archive-card__hit" href={project.repo} target="_blank" rel="noreferrer" aria-label={`Open ${project.name} on GitHub`} />
                  <ProjectVisual project={project} compact />
                  <div className="archive-card__header"><span>{project.category}</span><small>{project.year}</small></div>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <div className="archive-card__footer">
                    <div>{project.tech.slice(0, 3).map((tech) => <span key={tech}>{tech}</span>)}</div>
                    <span className="round-arrow"><ArrowUpRight /></span>
                  </div>
                </SpotlightCard>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function Principles() {
  return (
    <section className="principles section-shell section-block">
      <SectionHeading kicker="03 / Approach" title="Build. Automate. Observe." />
      <div className="principle-grid">
        {disciplines.map((item, index) => (
          <motion.article key={item.number} {...reveal} transition={{ ...reveal.transition, delay: index * 0.08 }}>
            <span>{item.number}</span><h3>{item.title}</h3><p>{item.copy}</p><ArrowRight />
          </motion.article>
        ))}
      </div>
      <div className="stats-grid">
        {featuredStats.map((stat) => (
          <motion.div key={stat.label} {...reveal}>
            <strong><NumberTicker value={stat.value} suffix={stat.suffix} /></strong><span>{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="about-section">
      <div className="section-shell about-grid">
        <motion.div className="portrait-wrap" {...reveal}>
          <div className="portrait-frame"><Image src="/profile.jpg" alt="Yannawut Roumsuk" fill sizes="(max-width: 768px) 90vw, 42vw" className="portrait" /></div>
          <span className="portrait-label"><MapPin /> {profile.location}</span>
        </motion.div>
        <motion.div className="about-copy" {...reveal}>
          <span className="about-kicker">A little about me</span>
          <h2>Engineering the invisible—so the experience feels effortless.</h2>
          <p>{profile.intro}</p>
          <p>I enjoy the whole path from a rough idea to a running service: interface, API, pipeline, cluster, telemetry, and the small details that make people trust the result.</p>
          <a className="large-link" href={profile.github} target="_blank" rel="noreferrer">Follow the work on GitHub <ArrowUpRight /></a>
        </motion.div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="contact-section section-shell">
      <motion.div className="contact-card" {...reveal}>
        <div className="contact-orbit"><span>YR</span><i /><i /><i /></div>
        <span className="contact-kicker"><i /> Open to good problems</span>
        <h2>Have something worth building?</h2>
        <p>Let’s turn it into a clear, reliable product.</p>
        <InteractiveHoverButton href={`tel:${profile.phone.replace(/\s/g, "")}`} inverted>Get in touch</InteractiveHoverButton>
      </motion.div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer section-shell">
      <span>© 2026 Yannawut Roumsuk</span>
      <span>Bangkok · GMT+7</span>
      <div><a href="#top">Back to top ↑</a><a href={profile.github} target="_blank" rel="noreferrer">GitHub</a></div>
    </footer>
  );
}
