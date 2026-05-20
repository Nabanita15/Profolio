"use client";

import { useFormik } from "formik";
import { contactValidation } from "../utils/validation";
import { translateText } from "../utils/translateText";
import { toast } from "sonner";
import { useEffect, useState } from "react";

export default function Contact({ lang, onTranslateStart, onTranslateEnd }) {
  const defaultTexts = {
    sectionLabel: "05 — CONTACT",
    title1: "Let's Build",
    title2: "Something",
    title3: "Together.",
    openTitle: "Open to new opportunities",
    desc: "Whether you're looking for a full-stack developer for your team, have a project in mind, or just want to say hello — my inbox is always open. I respond within 24 hours.",
    email: "Email",
    name: "NAME",
    emailLabel: "EMAIL",
    subject: "SUBJECT",
    message: "MESSAGE",
    namePlaceholder: "Your full name",
    emailPlaceholder: "your@email.com",
    subjectPlaceholder: "Project idea? Job offer? Just saying hi?",
    messagePlaceholder: "Tell me about your project...",
    send: "Send Message →",
    sending: "Sending...",
  };

  const [text, setText] = useState(defaultTexts);

  useEffect(() => {
    async function handleTranslate() {
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
        setText(defaultTexts);
      }
    }

    handleTranslate();
  }, [lang]);

  const formik = useFormik({
    initialValues: { name: "", email: "", subject: "", message: "" },
    validationSchema: contactValidation,
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      try {
        const response = await fetch("/api/contactform", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });
        const data = await response.json();
        toast.success(data.message);
        if (data.success) resetForm();
      } catch (error) {
        console.log(error);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <section id="contact">
      <div className="section-label">{text.sectionLabel}</div>

      <h2 className="section-title">
        {text.title1} <span>{text.title2}</span>
        <br />
        {text.title3}
      </h2>

      <div className="contact-grid">
        <div className="contact-left">
          <h3>{text.openTitle}</h3>
          <p>{text.desc}</p>

          <div className="contact-socials">
            <a href="mailto:boranabanita15@gmail.com" className="social-link" target="_blank">
              <div className="social-icon">✉️</div>
              <div className="social-info">
                <div className="social-name">{text.email}</div>
                <div className="social-handle">boranabanita15@gmail.com</div>
              </div>
              <span className="social-arrow">→</span>
            </a>

            <a href="https://www.linkedin.com/in/nabanitamernstack" className="social-link" target="_blank">
              <div className="social-icon">💼</div>
              <div className="social-info">
                <div className="social-name">LinkedIn</div>
                <div className="social-handle">linkedin.com/in/nabanitamernstack</div>
              </div>
              <span className="social-arrow">→</span>
            </a>

            <a href="https://github.com/Nabanita15" className="social-link" target="_blank">
              <div className="social-icon">🐙</div>
              <div className="social-info">
                <div className="social-name">GitHub</div>
                <div className="social-handle">@Nabanita15</div>
              </div>
              <span className="social-arrow">→</span>
            </a>
          </div>
        </div>

        <div>
          <form className="contact-form" onSubmit={formik.handleSubmit}>
            <div className="form-group">
              <label>{text.name}<span className="text-red-500 text-md">*</span></label>
              <input
                type="text"
                name="name"
                placeholder={text.namePlaceholder}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
              {formik.touched.name && formik.errors.name && (
                <p className="text-red-500 text-md">{formik.errors.name}</p>
              )}
            </div>

            <div className="form-group">
              <label>{text.emailLabel}<span className="text-red-500 text-md">*</span></label>
              <input
                type="email"
                name="email"
                placeholder={text.emailPlaceholder}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-500 text-md">{formik.errors.email}</p>
              )}
            </div>

            <div className="form-group">
              <label>{text.subject}<span className="text-red-500 text-md">*</span></label>
              <input
                type="text"
                name="subject"
                placeholder={text.subjectPlaceholder}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.subject}
              />
              {formik.touched.subject && formik.errors.subject && (
                <p className="text-red-500 text-md">{formik.errors.subject}</p>
              )}
            </div>

            <div className="form-group">
              <label>{text.message}<span className="text-red-500 text-md">*</span></label>
              <textarea
                name="message"
                placeholder={text.messagePlaceholder}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.message}
              />
              {formik.touched.message && formik.errors.message && (
                <p className="text-red-500 text-md">{formik.errors.message}</p>
              )}
            </div>

            <button className="form-submit cursor-pointer" type="submit" disabled={formik.isSubmitting}>
              {formik.isSubmitting ? (
                <span className="flex items-center gap-2 justify-center">
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  {text.sending}
                </span>
              ) : (
                text.send
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}