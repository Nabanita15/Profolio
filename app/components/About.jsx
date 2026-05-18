export default function About() {
    return (
        <section id="about">
            <div className="section-label">01 — ABOUT ME</div>
            <h2 className="section-title">
                The Dev <span>Behind</span>
                <br />
                the Code.
            </h2>
            <div className="about-grid">
                <div className="about-visual">
                    <div className="avatar-frame">
                        <div className="avatar-ring" />
                        <div className="avatar-inner">
                            NB
                            <div className="avatar-badge">Full Stack 🚀</div>
                        </div>
                    </div>
                    <div className="tech-orbit">
                        <div className="tech-orbit-item">NEXT</div>
                        <div className="tech-orbit-item">NODE</div>
                        <div className="tech-orbit-item">MONGO</div>
                        <div className="tech-orbit-item">REACT</div>
                    </div>
                </div>
                <div className="about-text">
                    <h3>Hello, I'm Nabanita Bora.</h3>
                    <p>
                        I'm a <strong>Full Stack MERN Developer</strong> and{" "}
                        <strong>Team Coordinator</strong> with 2 years of hands-on experience
                        building production-grade web applications at{" "}
                        <strong>AlMuqeet Systems</strong>.
                    </p>
                    <p>
                        My stack revolves around{" "}
                        <strong>MongoDB, Express, React, Node.js</strong> with a modern layer of{" "}
                        <strong>Next.js + Tailwind CSS</strong>. I care deeply about performance,
                        clean architecture, and user experience.
                    </p>
                    <p>
                        At AlMuqeet Systems, I've shipped features used by{" "}
                        <strong>thousands of users</strong>, collaborated in agile teams, and grown
                        from a junior dev into someone who architects full-stack features
                        end-to-end.
                    </p>
                    <p>
                        Beyond the code, I serve as a <strong>Team Coordinator</strong> —
                        assisting the Tech Lead in managing sprint workflows, unblocking teammates,
                        reviewing task assignments, and keeping the team aligned. I bridge the gap
                        between <strong>technical execution and team collaboration</strong>, ensuring
                        we ship great software without sacrificing quality or team morale.
                    </p>
                    <div className="about-chips">
                        <span className="chip">MongoDB</span>
                        <span className="chip">Express.js</span>
                        <span className="chip">React.js</span>
                        <span className="chip">Node.js</span>
                        <span className="chip">Next.js</span>
                        <span className="chip">Tailwind CSS</span>
                        <span className="chip">TypeScript</span>
                        <span className="chip">Redux</span>
                        <span className="chip">REST APIs</span>
                        <span className="chip">Git</span>
                    </div>
                </div>
            </div>
        </section>

    );
}