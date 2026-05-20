"use client";

import { useEffect, useState } from "react";
import { translateText } from "../utils/translateText";

export default function Experience({ lang, onTranslateStart, onTranslateEnd }) {
  const defaultTexts = {
    label: "02 — EXPERIENCE",
    title1: "Where I've",
    title2: "Worked",
    title3: "& What I've Built.",
    company1: "AlMuqeet Systems",
    period1: "dec 2024 — Present",
    role1: "Junior Frontend Developer",
    desc1: "Led development of enterprise-level web applications, designing RESTful APIs with Express.js and building dynamic, responsive UIs with React and Next.js. Managed MongoDB databases, implemented JWT-based authentication, and optimized application performance resulting in 40% faster load times. Worked as a Team Coordinator, leading and assisting the development team alongside the Team Lead in project planning, task management, and technical guidance. Contributed to the CRM project from scratch by developing both frontend and backend modules using the MERN stack. Implemented IMAP and SMTP integrations for email synchronization, automated lead/contact creation, and communication workflows within the CRM system.",
    company2: "Ecomtron private limited",
    period2: "june 2024 — aug 2024",
    role2: "Junior Frontend Developer",
    desc2: "Joined the team as a frontend developer, building reusable React components, integrating third-party APIs, and implementing responsive designs with Tailwind CSS. Collaborated with the backend team to integrate REST APIs and improve the overall user experience.",
    company3: "WebBlaze Softteach",
    period3: "dec 2023 — feb 2024",
    role3: "Internship Trainee",
    desc3: "Built and contributed to full-stack web applications for multiple clients during internship training, gaining hands-on experience in MERN stack development. Developed responsive web applications, e-commerce platforms, portfolio websites, and custom business tools while strengthening skills in React.js, Next.js, Node.js, Express.js, and MongoDB. Collaborated with senior developers, followed industry best practices, participated in real-world project workflows, and enhanced understanding of scalable application architecture, API integration, and modern web development standards.",
  };

  const [t, setT] = useState(defaultTexts);

  useEffect(() => {
    const translatePage = async () => {
      if (lang === "en") {
        setT(defaultTexts);
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

        setT(Object.fromEntries(entries));
      } catch (error) {
        console.log("Translation Error:", error);
      }
    };

    translatePage();
  }, [lang]);

  return (
    <section id="experience">
      <div className="section-label">{t.label}</div>

      <h2 className="section-title">
        {t.title1} <span>{t.title2}</span>
        <br />
        {t.title3}
      </h2>

      <div className="exp-container">
        <div className="exp-line" />

        {/* EXPERIENCE 1 */}
        <div className="exp-item">
          <div className="exp-dot" />
          <div className="exp-meta">
            <div className="exp-company">{t.company1}</div>
            <div className="exp-period">{t.period1}</div>
          </div>
          <div className="exp-role">{t.role1}</div>
          <p className="exp-desc">{t.desc1}</p>
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

        {/* EXPERIENCE 2 */}
        <div className="exp-item">
          <div
            className="exp-dot"
            style={{ background: "var(--accent2)", boxShadow: "0 0 15px rgba(255,107,107,0.5)" }}
          />
          <div className="exp-meta">
            <div
              className="exp-company"
              style={{
                background: "linear-gradient(135deg, var(--accent2), var(--accent3))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {t.company2}
            </div>
            <div className="exp-period">{t.period2}</div>
          </div>
          <div className="exp-role">{t.role2}</div>
          <p className="exp-desc">{t.desc2}</p>
          <div className="exp-tags">
            <span className="exp-tag">React.js</span>
            <span className="exp-tag">JavaScript (ES6+)</span>
            <span className="exp-tag">Tailwind CSS</span>
            <span className="exp-tag">REST APIs</span>
            <span className="exp-tag">Git & GitHub</span>
            <span className="exp-tag">Figma</span>
          </div>
        </div>

        {/* EXPERIENCE 3 */}
        <div className="exp-item">
          <div
            className="exp-dot"
            style={{ background: "var(--accent3)", boxShadow: "0 0 15px rgba(67,233,123,0.5)" }}
          />
          <div className="exp-meta">
            <div
              className="exp-company"
              style={{
                background: "linear-gradient(135deg, var(--accent3), #06b6d4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {t.company3}
            </div>
            <div className="exp-period">{t.period3}</div>
          </div>
          <div className="exp-role">{t.role3}</div>
          <p className="exp-desc">{t.desc3}</p>
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