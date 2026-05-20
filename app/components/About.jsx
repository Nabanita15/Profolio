"use client";

import { useEffect, useState } from "react";
import { translateText } from "../utils/translateText";

export default function About({ lang, onTranslateStart, onTranslateEnd }) {
  const defaultContent = {
    section: "01 — ABOUT ME",
    title1: "The Dev",
    title2: "Behind",
    title3: "the Code.",
    hello: "Hello, I'm Nabanita Bora.",
    p1: "I'm a Full Stack MERN Developer and Team Coordinator with 2 years of hands-on experience building production-grade web applications at AlMuqeet Systems.",
    p2: "My stack revolves around MongoDB, Express, React, Node.js with a modern layer of Next.js + Tailwind CSS. I care deeply about performance, clean architecture, and user experience.",
    p3: "At AlMuqeet Systems, I've shipped features used by thousands of users, collaborated in agile teams, and grown from a junior dev into someone who architects full-stack features end-to-end.",
    p4: "Beyond the code, I serve as a Team Coordinator — assisting the Tech Lead in managing sprint workflows, unblocking teammates, reviewing task assignments, and keeping the team aligned. I bridge the gap between technical execution and team collaboration, ensuring we ship great software without sacrificing quality or team morale.",
    badge: "Full Stack 🚀",
  };

  const [content, setContent] = useState(defaultContent);

  useEffect(() => {
    const translateContent = async () => {
      if (lang === "en") {
        setContent(defaultContent);
        return;
      }

      const keys = Object.keys(defaultContent);
      keys.forEach(() => onTranslateStart());

      try {
        const entries = await Promise.all(
          keys.map(async (key) => {
            try {
              const result = await translateText(defaultContent[key], lang);
              return [key, result];
            } finally {
              onTranslateEnd();
            }
          })
        );

        setContent(Object.fromEntries(entries));
      } catch (error) {
        console.log("Translation Error:", error);
      }
    };

    translateContent();
  }, [lang]);

  return (
    <section id="about">
      <div className="section-label">{content.section}</div>

      <h2 className="section-title">
        {content.title1} <span>{content.title2}</span>
        <br />
        {content.title3}
      </h2>

      <div className="about-grid">
        <div className="about-visual">
          <div className="avatar-frame">
            <div className="avatar-ring" />
            <div className="avatar-inner">
              NB
              <div className="avatar-badge">{content.badge}</div>
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
          <h3>{content.hello}</h3>
          <p>{content.p1}</p>
          <p>{content.p2}</p>
          <p>{content.p3}</p>
          <p>{content.p4}</p>

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