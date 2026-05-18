export default function Hero() {
  return (
<section id="hero">
  <div className="hero-bg">
    <div className="orb orb-1" />
    <div className="orb orb-2" />
    <div className="orb orb-3" />
    <div className="grid-overlay" />
  </div>
  <div className="hero-content">
    <div className="hero-badge">
      <span className="badge-dot" />
      AVAILABLE FOR OPPORTUNITIES
    </div>
    <h1 className="hero-title">
      <span className="line">
        <span>Full Stack</span>
      </span>
      <span className="line">
        <span className="grad">Developer</span>
      </span>
      <span className="line">
        <span>&amp; Builder.</span>
      </span>
    </h1>
    <p className="hero-sub">
      Crafting <strong>scalable web apps</strong> with the MERN stack + Next.js.
      2 years building enterprise solutions at <strong>AlMuqeet Systems</strong>{" "}
      — where complex problems meet elegant code.
    </p>
    <div className="hero-actions">
      <a href="#projects" className="btn-primary">
        View My Work
        <span>→</span>
      </a>
      <a href="#contact" className="btn-outline">
        Get in Touch
      </a>
    </div>
  </div>
  <div className="hero-stats">
    <div className="stat-card">
      <div className="stat-num" id="stat1">
        0
      </div>
      <div className="stat-label">YEARS EXP.</div>
    </div>
    <div className="stat-card">
      <div className="stat-num" id="stat2">
        0
      </div>
      <div className="stat-label">PROJECTS</div>
    </div>
    <div className="stat-card">
      <div className="stat-num" id="stat3">
        0
      </div>
      <div className="stat-label">COMMITS</div>
    </div>
  </div>
  <div className="scroll-indicator">
    SCROLL
    <div className="scroll-line" />
  </div>
</section>

  );
}