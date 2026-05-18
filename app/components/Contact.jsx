import { useFormik } from "formik";
import { contactValidation } from "../utils/validation"
import { toast } from 'sonner'

export default function Contact() {

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            subject: "",
            message: "",
        },
        validationSchema: contactValidation,
        onSubmit: async (values, { resetForm }) => {
            try {
                const response = await fetch("/api/contactform", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(values),
                });

                const data = await response.json();

                toast.success(data.message);

                if (data.success) {
                    resetForm();
                }
            } catch (error) {
                console.log(error);
            } finally {
                setSubmitting(false);
            }
        },

    });
    return (
        <section id="contact">
            <div className="section-label">05 — CONTACT</div>
            <h2 className="section-title">
                Let's Build <span>Something</span>
                <br />
                Together.
            </h2>
            <div className="contact-grid">
                <div className="contact-left">
                    <h3>Open to new opportunities</h3>
                    <p>
                        Whether you're looking for a full-stack developer for your team, have a
                        project in mind, or just want to say hello — my inbox is always open. I
                        respond within 24 hours.
                    </p>
                    <div className="contact-socials">
                        <a href="mailto:boranabanita15@gmail.com" className="social-link" target="_blank">
                            <div className="social-icon">✉️</div>
                            <div className="social-info">
                                <div className="social-name">Email</div>
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

                        {/* Name */}
                        <div className="form-group">
                            <label>NAME <span className="text-red-500 text-md">*</span></label>

                            <input
                                type="text"
                                name="name"
                                placeholder="Your full name"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.name}
                            />

                            {formik.touched.name && formik.errors.name && (
                                <p className="text-red-500 text-md">{formik.errors.name}</p>
                            )}
                        </div>

                        {/* Email */}
                        <div className="form-group">
                            <label>EMAIL <span className="text-red-500 text-md">*</span></label>

                            <input
                                type="email"
                                name="email"
                                placeholder="your@email.com"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                            />

                            {formik.touched.email && formik.errors.email && (
                                <p className="text-red-500 text-md">{formik.errors.email}</p>
                            )}
                        </div>

                        {/* Subject */}
                        <div className="form-group">
                            <label>SUBJECT <span className="text-red-500 text-md">*</span></label>

                            <input
                                type="text"
                                name="subject"
                                placeholder="Project idea? Job offer? Just saying hi?"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.subject}
                            />

                            {formik.touched.subject && formik.errors.subject && (
                                <p className="text-red-500 text-md">{formik.errors.subject}</p>
                            )}
                        </div>

                        {/* Message */}
                        <div className="form-group">
                            <label>MESSAGE <span className="text-red-500 text-md">*</span></label>

                            <textarea
                                name="message"
                                placeholder="Tell me about your project..."
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
                                    Sending...
                                </span>
                            ) : (
                                "Send Message →"
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </section>

    );
}