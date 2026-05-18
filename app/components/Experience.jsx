export default function Experience() {
    return (
        <section id="experience">
            <div className="section-label">02 — EXPERIENCE</div>
            <h2 className="section-title">
                Where I've <span>Worked</span> &amp;
                <br />
                What I've Built.
            </h2>
            <div className="exp-container">
                <div className="exp-line" />
                <div className="exp-item">
                    <div className="exp-dot" />
                    <div className="exp-meta">
                        <div className="exp-company">AlMuqeet Systems</div>
                        <div className="exp-period">dec 2024  — Present</div>
                    </div>
                    <div className="exp-role">Junior Frontend Developer</div>
                    <p className="exp-desc">
                        Led development of enterprise-level web applications, designing RESTful APIs with Express.js and building dynamic, responsive UIs with React and Next.js. Managed MongoDB databases, implemented JWT-based authentication, and optimized application performance resulting in 40% faster load times.

                        Worked as a <strong>Team Coordinator</strong>, leading and assisting the development team alongside the Team Lead in project planning, task management, and technical guidance. Contributed to the <strong>CRM</strong> project from scratch by developing both frontend and backend modules using the MERN stack. Implemented IMAP and SMTP integrations for email synchronization, automated lead/contact creation, and communication workflows within the CRM system.

                    </p>
                    <div className="exp-tags">
                        <span className="exp-tag">Next.js</span>
                        <span className="exp-tag">React.js</span>
                        <span className="exp-tag">Node.js</span>
                        <span className="exp-tag">MongoDB</span>
                        <span className="exp-tag">Tailwind CSS</span>
                        <span className="exp-tag">Redux Toolkit</span>
                        <span className="exp-tag">REST API</span>
                        <span className="exp-tag">JWT</span>
                    </div>
                </div>
                <div className="exp-item">
                    <div
                        className="exp-dot"
                        style={{
                            background: "var(--accent2)",
                            boxShadow: "0 0 15px rgba(255,107,107,0.5)"
                        }}
                    />
                    <div className="exp-meta">
                        <div
                            className="exp-company"
                            style={{
                                background:
                                    "linear-gradient(135deg, var(--accent2), var(--accent3))",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent"
                            }}
                        >
                            Ecomtron private limited
                        </div>
                        <div className="exp-period">june 2024 — aug 2024</div>
                    </div>
                    <div className="exp-role">Junior Frontend Developer</div>
                    <p className="exp-desc">
                        Joined the team as a frontend developer, building reusable React
                        components, integrating third-party APIs, and implementing responsive
                        designs with Tailwind CSS. Collaborated with the backend team to
                        integrate REST APIs and improve the overall user experience.
                    </p>
                    <div className="exp-tags">
                        <span className="exp-tag">React.js</span>
                        <span className="exp-tag">JavaScript (ES6+)</span>
                        <span className="exp-tag">Tailwind CSS</span>
                        <span className="exp-tag">REST APIs</span>
                        <span className="exp-tag">Git &amp; GitHub</span>
                        <span className="exp-tag">Figma</span>
                    </div>
                </div>
                <div className="exp-item">
                    <div
                        className="exp-dot"
                        style={{
                            background: "var(--accent3)",
                            boxShadow: "0 0 15px rgba(67,233,123,0.5)"
                        }}
                    />
                    <div className="exp-meta">
                        <div
                            className="exp-company"
                            style={{
                                background: "linear-gradient(135deg, var(--accent3), #06b6d4)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent"
                            }}
                        >
                            WebBlaze Softteach
                        </div>
                        <div className="exp-period">dec 2023 — feb 2024</div>
                    </div>
                    <div className="exp-role">Internship Trainee</div>
                    <p className="exp-desc">
                        Built and contributed to full-stack web applications for multiple clients during internship training, gaining hands-on experience in MERN stack development. Developed responsive web applications, e-commerce platforms, portfolio websites, and custom business tools while strengthening skills in React.js, Next.js, Node.js, Express.js, and MongoDB. Collaborated with senior developers, followed industry best practices, participated in real-world project workflows, and enhanced understanding of scalable application architecture, API integration, and modern web development standards.

                    </p>
                    <div className="exp-tags">
                        <span className="exp-tag">React.js</span>
                        <span className="exp-tag">Node.js</span>
                        <span className="exp-tag">MongoDB</span>
                        <span className="exp-tag">Express.js</span>
                    </div>
                </div>
            </div>
        </section>

    );
}