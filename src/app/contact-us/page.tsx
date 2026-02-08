import Image from "next/image";
import Testimonials from "../components/Testimonials";
import RequestAQuote from "../components/RequestAQuote";

export default function ContactPage() {
    return (
        <main className="contact-us-page">
            <section className="widget-wrapper hero-banner">
                <div className="image-content-wrapper">
                    <Image
                        src="https://raw.githubusercontent.com/gowthamavtech/unique-garden-img/main/Contact-Us-(Hero-Image).webp"
                        alt="Unique Garden Hero Banner"
                        width={1920}
                        height={1080}
                        priority
                    />
                </div>
                <div className="text-content">
                    <div className="text-content-wrapper">
                        <h1>Contact Us</h1>
                        <p>Reach out to Unique Garden Tech. Cont. LLC today to transform your outdoor spaces into stunning, functional, and long-lasting environments.</p>
                    </div>
                </div>
            </section>
            <section className="contact-form-section">
                <div className="widget-wrapper text-group">
                    <div className="text-content-wrapper">
                        <h2>Reach out to us!</h2>
                    </div>
                </div>
                <div className="widget-wrapper form-wrapper">
                    <form className="contact-form">
                        <div className="form-grid">
                            {/* Name Field */}
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" name="name" placeholder="Your name" required />
                            </div>

                            {/* Email Field */}
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" placeholder="zaraalmasi@uniquegarden.com" required />
                            </div>

                            {/* Location Field */}
                            <div className="form-group">
                                <label htmlFor="location">Location</label>
                                <input type="text" id="location" name="location" placeholder="Dubai, UAE" required />
                            </div>

                            {/* Service Type Field */}
                            <div className="form-group">
                                <label htmlFor="service">Service Type</label>
                                <select id="service" name="service" required>
                                    <option value="">Select a service</option>
                                    <option value="residential">Residential</option>
                                    <option value="commercial">Commercial</option>
                                    <option value="garden-design">Garden Design</option>
                                    <option value="maintenance">Maintenance</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                        </div>

                        {/* Message Field - Full Width */}
                        <div className="form-group form-group-full">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" rows={3} placeholder="Tell us about your project, vision, or requirements" required></textarea>
                        </div>

                        {/* Submit Button */}
                        <div className="form-actions">
                            <button type="submit" className="btn-submit">
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </section>
            <Testimonials />
            <RequestAQuote />
        </main>
    );
}
