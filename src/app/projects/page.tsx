import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import OurSerivesIconTextMultiSlider from "../components/OurServicesIconTextMultiSlider";
import RequestAQuote from "../components/RequestAQuote";

const SITE_URL = "https://uniquegarden.ae/projects";

export const metadata: Metadata = {
    title: "Landscaping Projects UAE | Portfolio | Unique Garden Tech",
    description: "Browse Unique Garden Tech's project portfolio — villa gardens, commercial landscapes, irrigation systems, and outdoor constructions across Dubai, Abu Dhabi, Ras Al Khaimah & UAE.",
    keywords: [
        "landscaping projects UAE",
        "garden design portfolio Dubai",
        "villa landscaping UAE",
        "outdoor construction projects UAE",
        "hardscape projects UAE",
        "irrigation projects Dubai",
        "landscaping portfolio UAE",
    ],
    alternates: { canonical: SITE_URL },
    openGraph: {
        type: "website",
        locale: "en_AE",
        url: SITE_URL,
        title: "Landscaping Projects UAE | Portfolio | Unique Garden Tech",
        description: "Browse our completed landscaping, irrigation, and outdoor construction projects across Dubai, Abu Dhabi, Ras Al Khaimah & the UAE.",
        siteName: "Unique Garden Tech Cont LLC",
        images: [{ url: "https://uniquegarden.ae/images/brand-logo.jpg", width: 1200, height: 630, alt: "Unique Garden Tech Projects UAE", type: "image/jpeg" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Landscaping Projects UAE | Unique Garden Tech",
        description: "Browse our completed landscaping, irrigation, and outdoor construction projects across the UAE.",
        images: ["https://uniquegarden.ae/images/brand-logo.jpg"],
    },
};

export default function ServicesPage() {
    return (
        <main className="projects-page">
            <section className="widget-wrapper hero-banner">
                <div className="image-content-wrapper">
                    <Image
                        src="/images/04-Projects-Page/Projects-Page-(Hero-Image).webp"
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
                        <h1>Projects</h1>
                        <p>
                            From villa backyards to corporate landscapes, our projects reflect trusted expertise in landscaping, pools, irrigation, and civil works across the UAE.
                        </p>
                    </div>
                </div>
            </section>
            <section className="widget-wrapper project-limage-rtext muted-burgundy-brown">
                <div className="image-content-wrapper">
                    <Image src="/images/04-Projects-Page/Projects-Img-1.webp" alt="" width={1920} height={1080} sizes="(max-width: 768px) 100vw, 1080px" />
                </div>

                <div className="text-content">
                    <div className="text-content-wrapper">
                        <h2>Al Tawr Villa - Sulthan Shamshi</h2>
                        <p className="overline-3">Al Twar 2, Dubai, UAE • April 2026</p>
                        <p>Work done:</p>
                        <ul>
                            <li>Hardscape Works</li>
                            <li>Softscape Works</li>
                            <li>Pergola Construction</li>
                            <li>Irrigation System Installation</li>
                            <li>Outdoor Lighting</li>
                            <li>BOQ Preparation</li>
                        </ul>
                        <Link className="btn btn-secondary" href="/projects/al-tawr-villa-sulthan-shamshi">
                            View Details
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <g opacity="0.8">
                                    <path d="M16 10L4 10" stroke="#141414" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                    <path
                                        d="M11.834 15C11.834 15 16.834 11.3176 16.834 10C16.834 8.68233 11.834 5 11.834 5"
                                        stroke="#141414"
                                        strokeWidth="1.8"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </g>
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>
            <section className="widget-wrapper  project-ltext-rimage deep-teal-blue">
                <div className="text-content">
                    <div className="text-content-wrapper">
                        <h2>Al Tawr Villa - Walid</h2>
                        <p className="overline-3">Al Twar 2, Dubai, UAE • February 2026</p>
                        <p>Work done:</p>
                        <ul>
                            <li>Hardscape Works (pathways, paved areas)</li>
                            <li>Softscape Works (trees, shrubs, groundcovers)</li>
                            <li>Pergola Installation</li>
                            <li>Irrigation System</li>
                            <li>Outdoor Lighting</li>
                            <li>BOQ Preparation</li>
                            <li>Pavement Works</li>
                            <li>Lawn Area Development</li>
                        </ul>
                        <Link className="btn btn-secondary" href="/projects/al-tawr-villa-walid">
                            View Details
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <g opacity="0.8">
                                    <path d="M16 10L4 10" stroke="#141414" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                    <path
                                        d="M11.834 15C11.834 15 16.834 11.3176 16.834 10C16.834 8.68233 11.834 5 11.834 5"
                                        stroke="#141414"
                                        strokeWidth="1.8"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </g>
                            </svg>
                        </Link>
                    </div>
                </div>
                <div className="image-content-wrapper">
                    <Image src="/images/04-Projects-Page/Projects-Img-2.webp" alt="" width={1920} height={1080} sizes="(max-width: 768px) 100vw, 1080px" />
                </div>
            </section>
            <section className="widget-wrapper project-limage-rtext olive-drab">
                <div className="image-content-wrapper">
                    <Image src="/images/04-Projects-Page/Projects-Img-3.webp" alt="" width={1920} height={1080} sizes="(max-width: 768px) 100vw, 1080px" />
                </div>

                <div className="text-content">
                    <div className="text-content-wrapper">
                        <h2>BMJ Industries</h2>
                        <p className="overline-3">Ras Al Khaimah, UAE • Ongoing</p>
                        <p>Work done:</p>
                        <ul>
                            <li>Softscape Works (trees and shrubs plantation)</li>
                            <li>Irrigation System Installation</li>
                            <li>750m Linear Landscape Development</li>
                        </ul>
                        <Link className="btn btn-secondary" href="/projects/bmj-industries">
                            View Details
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <g opacity="0.8">
                                    <path d="M16 10L4 10" stroke="#141414" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                    <path
                                        d="M11.834 15C11.834 15 16.834 11.3176 16.834 10C16.834 8.68233 11.834 5 11.834 5"
                                        stroke="#141414"
                                        strokeWidth="1.8"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </g>
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>
            <section className="widget-wrapper  project-ltext-rimage warm-taupe">
                <div className="text-content">
                    <div className="text-content-wrapper">
                        <h2>Abudhabi Private Villa</h2>
                        <p className="overline-3">Abu Dhabi, UAE • Ongoing</p>
                        <p>Work done:</p>
                        <ul>
                            <li>Softscape Works (tropical planting, palms, shrubs)</li>
                            <li>Irrigation System Installation</li>
                            <li>Soil Preparation and Planting Mix</li>
                            <li>Resort-style Landscape Development</li>
                        </ul>
                        <Link className="btn btn-secondary" href="/projects/abudhabi-private-villa">
                            View Details
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <g opacity="0.8">
                                    <path d="M16 10L4 10" stroke="#141414" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                    <path
                                        d="M11.834 15C11.834 15 16.834 11.3176 16.834 10C16.834 8.68233 11.834 5 11.834 5"
                                        stroke="#141414"
                                        strokeWidth="1.8"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </g>
                            </svg>
                        </Link>
                    </div>
                </div>
                <div className="image-content-wrapper">
                    <Image src="/images/04-Projects-Page/Projects-Img-4.webp" alt="" width={1920} height={1080} sizes="(max-width: 768px) 100vw, 1080px" />
                </div>
            </section>

            <section className="widget-wrapper bg our-services-multi-icon-text-slider">
                <div className="widget-wrapper text-group">
                    <div className="text-content-wrapper">
                        <h2>Our Services</h2>
                        <p>From gardens to pools, we offer end-to-end landscaping and construction services across the UAE.</p>
                        <Link href="/services" className="btn">
                            Explore services
                        </Link>
                    </div>
                </div>
                <div className="widget-wrapper multi-icon-text-slider">
                    <OurSerivesIconTextMultiSlider reverseDirection={false} />
                    <OurSerivesIconTextMultiSlider reverseDirection={true} />
                    <OurSerivesIconTextMultiSlider reverseDirection={false} />
                </div>
            </section>
            <RequestAQuote />
        </main>
    );
}
