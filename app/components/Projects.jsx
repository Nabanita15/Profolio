export default function Projects() {
    return (
        <section id="projects">
            <div className="section-label">04 — PROJECTS</div>
            <h2 className="section-title">
                Things I've <span>Shipped</span>.
            </h2>
            <div className="projects-grid">
                <div className="project-card">
                    <div className="project-visual">
                        <div
                            className="project-visual-bg"
                            style={{ background: "linear-gradient(135deg, #6c63ff, #ff6b6b)" }}
                        />
                        <div className="project-visual-inner">🌐</div>
                    </div>
                    <div className="project-body">
                        <div className="project-tags">
                            <span className="project-tag">Next.js</span>
                            <span className="project-tag">MongoDB</span>
                            <span className="project-tag">Stripe</span>
                            <span className="project-tag">Tailwind</span>
                        </div>
                        <h3 className="project-title">Almuqeet website</h3>
                        <p className="project-desc">
                            Developed the AlMuqeet Systems website using  Next.js, and Tailwind CSS with a modern, responsive, and user-friendly UI/UX. Integrated Nodemailer for the contact page to enable seamless email communication and inquiry handling.

                        </p>
                        <div className="project-links">
                            <a href="https://almuqeet.net/" className="project-link primary" target="_blank">
                                Live Demo <span className="link-arrow">↗</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="project-card" style={{ transitionDelay: "0.1s" }}>
                    <div className="project-visual">
                        <div
                            className="project-visual-bg"
                            style={{ background: "linear-gradient(135deg, #43e97b, #38f9d7)" }}
                        />
                        <div className="project-visual-inner">📋</div>
                    </div>
                    <div className="project-body">
                        <div className="project-tags">
                            <span className="project-tag">Next.js</span>
                            <span className="project-tag">Express</span>
                            <span className="project-tag">Node.js</span>
                            <span className="project-tag">JWT</span>
                            <span className="project-tag">Boatstrap</span>

                        </div>
                        <h3 className="project-title">cPass CRM Project</h3>
                        <p className="project-desc">

                            Built a full-featured CRM platform with an intuitive SOS Dashboard that gives teams real-time visibility into customer data, activity logs, and operational metrics. Users can store and manage client profiles, track communication history, monitor deal pipelines, and generate performance reports — all from a single, responsive interface.
                        </p>
                        <div className="project-links">
                            <a href="#" className="project-link primary">
                                Live Demo <span className="link-arrow">↗</span>
                            </a>

                        </div>
                    </div>
                </div>
                <div className="project-card" style={{ transitionDelay: "0.2s" }}>
                    <div className="project-visual">
                        <div
                            className="project-visual-bg"
                            style={{ background: "linear-gradient(135deg, #f97316, #facc15)" }}
                        />
                        <div className="project-visual-inner">🛒</div>
                    </div>
                    <div className="project-body">
                        <div className="project-tags">
                            <span className="project-tag">Next.js</span>
                            <span className="project-tag">Express.js</span>
                            <span className="project-tag">MongoDB</span>
                            <span className="project-tag">Tailwind</span>
                        </div>
                        <h3 className="project-title">Fureverpal eCommerce</h3>
                        <p className="project-desc">
                            Fureverpal eCommerce is a dog prduct ecommerce ebsite built using Next.js Mongobd,express js ,node js offering a  smooth ,responsive shopping experience for pet owner with a focus on quality and usability.
                        </p>
                        <div className="project-links">
                            <a href="https://fureverpal-five.vercel.app/" className="project-link primary" target="_blank">
                                Live Demo <span className="link-arrow">↗</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="project-card" style={{ transitionDelay: "0.3s" }}>
                    <div className="project-visual">
                        <div
                            className="project-visual-bg"
                            style={{ background: "linear-gradient(135deg, #a78bfa, #6c63ff)" }}
                        />
                        <div className="project-visual-inner">🎥</div>
                    </div>
                    <div className="project-body">
                        <div className="project-tags">
                            <span className="project-tag">React js</span>
                            <span className="project-tag">Axios</span>
                            <span className="project-tag">Custom CSS</span>
                        </div>
                        <h3 className="project-title">Movie app</h3>
                        <p className="project-desc">
                            Developed a movie website using react and axios to integrate with a movie API ,featuring dynamic search, detailed movie pages and responsive design.
                        </p>
                        <div className="project-links">
                            <a href="https://moviesys.netlify.app/" className="project-link primary" target="_blank">
                                Live Demo <span className="link-arrow">↗</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="project-card" style={{ transitionDelay: "0.4s" }}>
                    <div className="project-visual">
                        <div
                            className="project-visual-bg"
                            style={{ background: "linear-gradient(135deg, #f43f5e, #fb7185)" }}
                        />
                        <div className="project-visual-inner">🌤️</div>
                    </div>
                    <div className="project-body">
                        <div className="project-tags">
                            <span className="project-tag">React.js</span>
                            <span className="project-tag">Axios</span>
                            <span className="project-tag">Custom css</span>
                        </div>
                        <h3 className="project-title">Weather App</h3>
                        <p className="project-desc">
                            Developed a Weather app using react and axios to integrate with a weather API ,featuring dynamic search, detailed about the temperature and responsive design.

                        </p>
                        <div className="project-links">
                            <a href="https://weather-sys.netlify.app/" className="project-link primary" target="_blank">
                                Live demo <span className="link-arrow">↗</span>
                            </a>
                        </div>
                    </div>
                </div>
                {/* <div className="project-card" style={{ transitionDelay: "0.5s" }}>
                    <div className="project-visual">
                        <div
                            className="project-visual-bg"
                            style={{ background: "linear-gradient(135deg, #0ea5e9, #06b6d4)" }}
                        />
                        <div className="project-visual-inner">🏪</div>
                    </div>
                    <div className="project-body">
                        <div className="project-tags">
                            <span className="project-tag">MERN</span>
                            <span className="project-tag">Cloudinary</span>
                            <span className="project-tag">JWT</span>
                        </div>
                        <h3 className="project-title">Inventory Management</h3>
                        <p className="project-desc">
                            Stock management system for retail businesses with barcode scanning,
                            purchase orders, supplier management, and low-stock alerts.
                        </p>
                        <div className="project-links">
                            <a href="#" className="project-link primary">
                                Live Demo <span className="link-arrow">↗</span>
                            </a>
                            <a href="#" className="project-link secondary">
                                GitHub <span className="link-arrow">↗</span>
                            </a>
                        </div>
                    </div>
                </div> */}
            </div>
        </section>

    );
}