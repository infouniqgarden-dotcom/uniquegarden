import type { Metadata } from "next";
import Image from "next/image";
import Testimonials from "../components/Testimonials";
import RequestAQuote from "../components/RequestAQuote";
import ContactForm from "../components/ContactForm";

const SITE_URL = "https://uniquegarden.ae/contact-us";

export const metadata: Metadata = {
    title: "Contact Us | Get a Free Quote | Unique Garden Tech UAE",
    description: "Contact Unique Garden Tech Cont LLC for landscaping, garden design, irrigation, and outdoor construction services across the UAE. Get a free project quote today.",
    keywords: [
        "contact landscaping company UAE",
        "landscaping quote UAE",
        "garden design quote Dubai",
        "free landscaping quote UAE",
        "outdoor construction quote UAE",
        "Unique Garden Tech contact",
    ],
    alternates: { canonical: SITE_URL },
    openGraph: {
        type: "website",
        locale: "en_AE",
        url: SITE_URL,
        title: "Contact Unique Garden Tech | Free Landscaping Quote UAE",
        description: "Get in touch with Unique Garden Tech for expert landscaping and outdoor construction services across the UAE.",
        siteName: "Unique Garden Tech Cont LLC",
        images: [{ url: "https://uniquegarden.ae/images/brand-logo.jpg", width: 1200, height: 630, alt: "Contact Unique Garden Tech UAE", type: "image/jpeg" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact Unique Garden Tech | Free Landscaping Quote UAE",
        description: "Get in touch for expert landscaping and outdoor construction services across the UAE.",
        images: ["https://uniquegarden.ae/images/brand-logo.jpg"],
    },
};

export default function ContactPage() {
    return (
        <main className="contact-us-page">
            <section className="widget-wrapper hero-banner">
                <div className="image-content-wrapper">
                    <Image
                        src="/images/Contact-Us-(Hero-Image).webp"
                        alt="Unique Garden Hero Banner"
                        width={1920}
                        height={1080}
                        priority
                        loading="eager"
                        fetchPriority="high"
                        sizes="100vw"
                        quality={85}
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
