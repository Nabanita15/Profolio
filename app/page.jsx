"use client";

import Navbar from "../app/components/Navbar";
import Hero from "../app/components/Hero";
import About from "../app/components/About";
import Experience from "../app/components/Experience";
import Skills from "../app/components/Skills";
import Projects from "../app/components/Projects";
import Contact from "../app/components/Contact";
import Footer from "../app/components/Footer";
import Marquee from "../app/components/Marquee";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {

    // LOADER
    const loader = document.getElementById("loader");
    const loaderNum = document.getElementById("loader-num");

    let count = 0;

    const interval = setInterval(() => {

      count += Math.floor(Math.random() * 12) + 4;

      if (count >= 100) {

        count = 100;

        clearInterval(interval);

        setTimeout(() => {

          loader?.classList.add("out");

          setTimeout(() => {

            if (loader) {
              loader.style.display = "none";
            }

            animateStats();

          }, 800);

        }, 300);
      }

      if (loaderNum) {
        loaderNum.textContent = count + "%";
      }

    }, 80);

    // CURSOR
    const cursor = document.getElementById("cursor");
    const ring = document.getElementById("cursor-ring");

    let mx = 0;
    let my = 0;
    let rx = 0;
    let ry = 0;

    const handleMouseMove = (e) => {

      mx = e.clientX;
      my = e.clientY;

      if (cursor) {
        cursor.style.left = mx + "px";
        cursor.style.top = my + "px";
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    function animRing() {

      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;

      if (ring) {
        ring.style.left = rx + "px";
        ring.style.top = ry + "px";
      }

      requestAnimationFrame(animRing);
    }

    if (ring) {
      animRing();
    }

    // NAV
    const nav = document.getElementById("nav");

    const handleScroll = () => {
      nav?.classList.toggle("scrolled", window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    // STATS
    function animateStats() {

      const targets = [
        { id: "stat1", end: 2, suffix: "+" },
        { id: "stat2", end: 15, suffix: "+" },
        { id: "stat3", end: 600, suffix: "+" },
      ];

      targets.forEach((t) => {

        const el = document.getElementById(t.id);

        let start = 0;
        const step = t.end / 60;

        const anim = setInterval(() => {

          start += step;

          if (start >= t.end) {
            start = t.end;
            clearInterval(anim);
          }

          if (el) {
            el.textContent = Math.floor(start) + t.suffix;
          }

        }, 25);
      });
    }

    // OBSERVER
    const observer = new IntersectionObserver((entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting && entry.target) {

          entry.target.classList?.add("visible");

          entry.target
            ?.querySelectorAll(".skill-fill")
            ?.forEach((bar) => {

              if (bar.dataset.width) {
                bar.style.width = bar.dataset.width + "%";
              }

            });
        }
      });

    }, { threshold: 0.15 });

    document
      .querySelectorAll(
        ".exp-item, .skill-category, .project-card, .reveal"
      )
      .forEach((el) => observer.observe(el));

    // CLEANUP
    return () => {

      clearInterval(interval);

      document.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      window.removeEventListener(
        "scroll",
        handleScroll
      );

      observer.disconnect();
    };

  }, []);

  return (
    <>
      <div id="loader">
        <div className="loader-text">Nabanita Bora.</div>
        <div className="loader-bar"><div className="loader-fill"></div></div>
        <div className="loader-num" id="loader-num">0%</div>
      </div>


      <div className="cursor" id="cursor"></div>
      <div className="cursor-ring" id="cursor-ring"></div>

      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}