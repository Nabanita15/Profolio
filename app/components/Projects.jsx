"use client";

import { useEffect, useState } from "react";
import { translateText } from "../utils/translateText";

export default function Projects({ lang, onTranslateStart, onTranslateEnd }) {
  const defaultTexts = {
    sectionLabel: "04 — PROJECTS",
    title1: "Things I've",
    title2: "Shipped",
    almuqeetTitle: "Almuqeet website",
    almuqeetDesc: "Developed the AlMuqeet Systems website using Next.js and Tailwind CSS with a modern, responsive, and user-friendly UI/UX. Integrated Nodemailer for the contact page to enable seamless email communication and inquiry handling.",
    crmTitle: "cPass CRM Project",
    crmDesc: "Built a full-featured CRM platform with an intuitive SOS Dashboard that gives teams real-time visibility into customer data, activity logs, and operational metrics. Users can store and manage client profiles, track communication history, monitor deal pipelines, and generate performance reports — all from a single, responsive interface.",
    ecommerceTitle: "Fureverpal eCommerce",
    ecommerceDesc: "Fureverpal eCommerce is a dog product ecommerce website built using Next.js, MongoDB, Express.js, and Node.js offering a smooth, responsive shopping experience for pet owners with a focus on quality and usability.",
    movieTitle: "Movie app",
    movieDesc: "Developed a movie website using React and Axios to integrate with a movie API, featuring dynamic search, detailed movie pages, and responsive design.",
    weatherTitle: "Weather App",
    weatherDesc: "Developed a Weather app using React and Axios to integrate with a weather API, featuring dynamic search, temperature details, and responsive design.",
    liveDemo: "Live Demo",
  };

  const [text, setText] = useState(defaultTexts);

  useEffect(() => {
    async function translateProjectTexts() {
      if (lang === "en") {
        setText(defaultTexts);
        return;
      }

      const keys = Object.keys(defaultTexts);
      keys.forEach(() => onTranslateStart());

      try {
        const entries = await Promise.all(
          keys.map(async (key) => {
            try {
              const result = await translateText(defaultTexts[key], lang);
              return [key, result];
            } finally {
              onTranslateEnd();
            }
          })
        );

        setText(Object.fromEntries(entries));
      } catch (error) {
        console.log("Translation Error:", error);
      }
    }

    translateProjectTexts();
  }, [lang]);

  return (
    <section id="projects">
      <div className="section-label">{text.sectionLabel}</div>

      <h2 className="section-title">
        {text.title1} <span>{text.title2}</span>.
      </h2>

      <div className="projects-grid">
        {/* PROJECT 1 */}
        <div className="project-card">
          <div className="project-visual">
            <div className="project-visual-bg" style={{ background: "linear-gradient(135deg, #6c63ff, #ff6b6b)" }} />
            <div className="project-visual-inner">🌐</div>
          </div>
          <div className="project-body">
            <div className="project-tags">
              <span className="project-tag">Next.js</span>
              <span className="project-tag">MongoDB</span>
              <span className="project-tag">Stripe</span>
              <span className="project-tag">Tailwind</span>
            </div>
            <h3 className="project-title">{text.almuqeetTitle}</h3>
            <p className="project-desc">{text.almuqeetDesc}</p>
            <div className="project-links">
              <a href="https://almuqeet.net/" className="project-link primary" target="_blank">
                {text.liveDemo}<span className="link-arrow">↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* PROJECT 2 */}
        <div className="project-card" style={{ transitionDelay: "0.1s" }}>
          <div className="project-visual">
            <div className="project-visual-bg" style={{ background: "linear-gradient(135deg, #43e97b, #38f9d7)" }} />
            <div className="project-visual-inner">📋</div>
          </div>
          <div className="project-body">
            <div className="project-tags">
              <span className="project-tag">Next.js</span>
              <span className="project-tag">Express</span>
              <span className="project-tag">Node.js</span>
              <span className="project-tag">JWT</span>
              <span className="project-tag">Bootstrap</span>
            </div>
            <h3 className="project-title">{text.crmTitle}</h3>
            <p className="project-desc">{text.crmDesc}</p>
            <div className="project-links">
              <a href="#" className="project-link primary">
                {text.liveDemo}<span className="link-arrow">↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* PROJECT 3 */}
        <div className="project-card" style={{ transitionDelay: "0.2s" }}>
          <div className="project-visual">
            <div className="project-visual-bg" style={{ background: "linear-gradient(135deg, #f97316, #facc15)" }} />
            <div className="project-visual-inner">🛒</div>
          </div>
          <div className="project-body">
            <div className="project-tags">
              <span className="project-tag">Next.js</span>
              <span className="project-tag">Express.js</span>
              <span className="project-tag">MongoDB</span>
              <span className="project-tag">Tailwind</span>
            </div>
            <h3 className="project-title">{text.ecommerceTitle}</h3>
            <p className="project-desc">{text.ecommerceDesc}</p>
            <div className="project-links">
              <a href="https://fureverpal-five.vercel.app/" className="project-link primary" target="_blank">
                {text.liveDemo}<span className="link-arrow">↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* PROJECT 4 */}
        <div className="project-card" style={{ transitionDelay: "0.3s" }}>
          <div className="project-visual">
            <div className="project-visual-bg" style={{ background: "linear-gradient(135deg, #a78bfa, #6c63ff)" }} />
            <div className="project-visual-inner">🎥</div>
          </div>
          <div className="project-body">
            <div className="project-tags">
              <span className="project-tag">React js</span>
              <span className="project-tag">Axios</span>
              <span className="project-tag">Custom CSS</span>
            </div>
            <h3 className="project-title">{text.movieTitle}</h3>
            <p className="project-desc">{text.movieDesc}</p>
            <div className="project-links">
              <a href="https://moviesys.netlify.app/" className="project-link primary" target="_blank">
                {text.liveDemo}<span className="link-arrow">↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* PROJECT 5 */}
        <div className="project-card" style={{ transitionDelay: "0.4s" }}>
          <div className="project-visual">
            <div className="project-visual-bg" style={{ background: "linear-gradient(135deg, #f43f5e, #fb7185)" }} />
            <div className="project-visual-inner">🌤️</div>
          </div>
          <div className="project-body">
            <div className="project-tags">
              <span className="project-tag">React.js</span>
              <span className="project-tag">Axios</span>
              <span className="project-tag">Custom css</span>
            </div>
            <h3 className="project-title">{text.weatherTitle}</h3>
            <p className="project-desc">{text.weatherDesc}</p>
            <div className="project-links">
              <a href="https://weather-sys.netlify.app/" className="project-link primary" target="_blank">
                {text.liveDemo}<span className="link-arrow">↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}