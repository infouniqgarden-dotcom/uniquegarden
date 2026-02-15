import Image from "next/image";
import Testimonials from "../components/Testimonials";
import RequestAQuote from "../components/RequestAQuote";
import ContactForm from "../components/ContactForm";

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
            <section className="widget-wrapper contact-form-section">
                <div className="widget-wrapper text-group">
                    <div className="text-content-wrapper">
                        <h2>Reach out to us!</h2>
                        <p>
                            Whether you have questions about our services, want to discuss your project, or need a quote, we&apos;re here to help. Contact us today and let&apos;s
                            create something amazing together!
                        </p>
                    </div>
                </div>
                <ContactForm />
            </section>
            <Testimonials />
            <RequestAQuote />
        </main>
    );
}
