export default function Skills() {

  return (
   <section id="skills">
  <div className="section-label">03 — SKILLS</div>
  <h2 className="section-title">
    My Tech <span>Arsenal</span>.
  </h2>
  <div className="skills-grid">
    <div className="skill-category">
      <div className="skill-cat-title">⚡ Frontend</div>
      <div className="skill-item">
        <div className="skill-header">
          <span className="skill-name">React.js</span>
          <span className="skill-pct">92%</span>
        </div>
        <div className="skill-bar">
          <div className="skill-fill" data-width={92} />
        </div>
      </div>
      <div className="skill-item">
        <div className="skill-header">
          <span className="skill-name">Next.js</span>
          <span className="skill-pct">88%</span>
        </div>
        <div className="skill-bar">
          <div className="skill-fill" data-width={88} />
        </div>
      </div>
      <div className="skill-item">
        <div className="skill-header">
          <span className="skill-name">Tailwind CSS</span>
          <span className="skill-pct">95%</span>
        </div>
        <div className="skill-bar">
          <div
            className="skill-fill"
            data-width={95}
            style={{ background: "linear-gradient(90deg, #06b6d4, #43e97b)" }}
          />
        </div>
      </div>
      <div className="skill-item">
        <div className="skill-header">
          <span className="skill-name">TypeScript</span>
          <span className="skill-pct">80%</span>
        </div>
        <div className="skill-bar">
          <div
            className="skill-fill"
            data-width={80}
            style={{ background: "linear-gradient(90deg, #3178c6, #6c63ff)" }}
          />
        </div>
      </div>
      <div className="skill-item">
        <div className="skill-header">
          <span className="skill-name">Redux Toolkit</span>
          <span className="skill-pct">85%</span>
        </div>
        <div className="skill-bar">
          <div
            className="skill-fill"
            data-width={85}
            style={{ background: "linear-gradient(90deg, #764abc, #ff6b6b)" }}
          />
        </div>
      </div>
    </div>
    <div className="skill-category" style={{ transitionDelay: "0.1s" }}>
      <div className="skill-cat-title">🔧 Backend</div>
      <div className="skill-item">
        <div className="skill-header">
          <span className="skill-name">Node.js</span>
          <span className="skill-pct">87%</span>
        </div>
        <div className="skill-bar">
          <div
            className="skill-fill"
            data-width={87}
            style={{ background: "linear-gradient(90deg, #43e97b, #38f9d7)" }}
          />
        </div>
      </div>
      <div className="skill-item">
        <div className="skill-header">
          <span className="skill-name">Express.js</span>
          <span className="skill-pct">90%</span>
        </div>
        <div className="skill-bar">
          <div
            className="skill-fill"
            data-width={90}
            style={{ background: "linear-gradient(90deg, #fff, #a0a0a0)" }}
          />
        </div>
      </div>
      <div className="skill-item">
        <div className="skill-header">
          <span className="skill-name">REST API Design</span>
          <span className="skill-pct">88%</span>
        </div>
        <div className="skill-bar">
          <div
            className="skill-fill"
            data-width={88}
            style={{ background: "linear-gradient(90deg, #f97316, #fbbf24)" }}
          />
        </div>
      </div>
      <div className="skill-item">
        <div className="skill-header">
          <span className="skill-name">JWT / Auth</span>
          <span className="skill-pct">85%</span>
        </div>
        <div className="skill-bar">
          <div
            className="skill-fill"
            data-width={85}
            style={{ background: "linear-gradient(90deg, #f43f5e, #ff6b6b)" }}
          />
        </div>
      </div>
      
    </div>
    <div className="skill-category" style={{ transitionDelay: "0.2s" }}>
      <div className="skill-cat-title">🗄️ Database &amp; Tools</div>
      <div className="skill-item">
        <div className="skill-header">
          <span className="skill-name">MongoDB</span>
          <span className="skill-pct">90%</span>
        </div>
        <div className="skill-bar">
          <div
            className="skill-fill"
            data-width={90}
            style={{ background: "linear-gradient(90deg, #43e97b, #00b09b)" }}
          />
        </div>
      </div>
      <div className="skill-item">
        <div className="skill-header">
          <span className="skill-name">Mongoose ODM</span>
          <span className="skill-pct">88%</span>
        </div>
        <div className="skill-bar">
          <div
            className="skill-fill"
            data-width={88}
            style={{ background: "linear-gradient(90deg, #880000, #ff6b6b)" }}
          />
        </div>
      </div>
      <div className="skill-item">
        <div className="skill-header">
          <span className="skill-name">Git &amp; GitHub</span>
          <span className="skill-pct">90%</span>
        </div>
        <div className="skill-bar">
          <div
            className="skill-fill"
            data-width={90}
            style={{ background: "linear-gradient(90deg, #6e5494, #ff6b6b)" }}
          />
        </div>
      </div>
     
      <div className="skill-item">
        <div className="skill-header">
          <span className="skill-name">Vercel / Deployment</span>
          <span className="skill-pct">85%</span>
        </div>
        <div className="skill-bar">
          <div
            className="skill-fill"
            data-width={85}
            style={{ background: "linear-gradient(90deg, #fff, #888)" }}
          />
        </div>
      </div>
    </div>
  </div>
</section>

  );
}