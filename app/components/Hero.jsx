"use client";

import { useEffect, useState } from "react";
import { translateText } from "../utils/translateText";

export default function Hero({ lang, onTranslateStart, onTranslateEnd }) {
  const defaultContent = {
    badge: "AVAILABLE FOR OPPORTUNITIES",
    title1: "Full Stack",
    title2: "Developer",
    title3: "& Builder.",
    desc: "Crafting scalable web apps with the MERN stack + Next.js. 2 years building enterprise solutions at AlMuqeet Systems — where complex problems meet elegant code.",
    workBtn: "View My Work",
    contactBtn: "Get in Touch",
  };

  const [content, setContent] = useState(defaultContent);

  useEffect(() => {
    const translateContent = async () => {
      if (lang === "en") {
        setContent(defaultContent);
        return;
      }

      // Signal ALL calls are starting before any await
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
          {content.badge}
        </div>

        <h1 className="hero-title">
          <span className="line">
            <span>{content.title1}</span>
          </span>
          <span className="line">
            <span className="grad">{content.title2}</span>
          </span>
          <span className="line">
            <span>{content.title3}</span>
          </span>
        </h1>

        <p className="hero-sub">{content.desc}</p>

        <div className="hero-actions">
          <a href="#projects" className="btn-primary">
            {content.workBtn}
            <span>→</span>
          </a>
          <a href="#contact" className="btn-outline">
            {content.contactBtn}
          </a>
        </div>
      </div>

      <div className="hero-stats">
        <div className="stat-card">
          <div className="stat-num" id="stat1">0</div>
          <div className="stat-label">YEARS EXP.</div>
        </div>
        <div className="stat-card">
          <div className="stat-num" id="stat2">0</div>
          <div className="stat-label">PROJECTS</div>
        </div>
        <div className="stat-card">
          <div className="stat-num" id="stat3">0</div>
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