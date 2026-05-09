import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const SITE_URL = "https://uniquegarden.ae/projects/bmj-industries";

export const metadata: Metadata = {
    title: "BMJ Industries | Industrial Landscaping Ras Al Khaimah | Unique Garden Tech",
    description: "Industrial landscape development project in Ras Al Khaimah — 750m linear landscape, softscape plantation, and irrigation system installation by Unique Garden Tech.",
    keywords: [
        "industrial landscaping UAE",
        "landscaping Ras Al Khaimah",
        "industrial softscape UAE",
        "irrigation system RAK",
        "linear landscape development UAE",
        "commercial landscaping UAE",
        "landscape contractor Ras Al Khaimah",
    ],
    alternates: { canonical: SITE_URL },
    openGraph: {
        type: "website",
        locale: "en_AE",
        url: SITE_URL,
        title: "BMJ Industries | Industrial Landscaping Ras Al Khaimah",
        description: "750m linear landscape development with softscape and irrigation in Ras Al Khaimah by Unique Garden Tech.",
        siteName: "Unique Garden Tech Cont LLC",
        images: [{ url: "https://uniquegarden.ae/images/brand-logo.jpg", width: 1200, height: 630, alt: "BMJ Industries Industrial Landscaping Ras Al Khaimah", type: "image/jpeg" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "BMJ Industries | Industrial Landscaping Ras Al Khaimah",
        description: "750m linear landscape with softscape and irrigation in Ras Al Khaimah.",
        images: ["https://uniquegarden.ae/images/brand-logo.jpg"],
    },
};

export default function BMJIndustries() {
    return (
        <main className="project-inner-page">
            <section className="widget-wrapper hero-banner">
                <div className="image-content-wrapper">
                    <Image
                        src="/images/05-Project-Images/Project-Details-Page-(Hero-Image).webp"
                        alt="BMJ Industries industrial landscaping project hero"
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
                        <h1>BMJ Industries</h1>
                        <p>
                            An industrial landscape development project in Ras Al Khaimah featuring structured plantation and irrigation systems along a 750-meter stretch,
                            enhancing functionality and visual appeal.
                        </p>
                    </div>
                </div>
            </section>
            <section className="widget-wrapper project-detials">
                <div className="text-content">
                    <div className="text-content-wrapper">
                        <h2>Project Details</h2>
                        <p>
                            <b>Location:</b> Ras Al Khaimah, UAE
                        </p>
                        <p>
                            <b>Status:</b> Ongoing
                        </p>
                        <p>
                            <b>Services Provided:</b> Softscape, Irrigation
                        </p>
                        <p>
                            <b>Project Duration:</b> 8 Months
                        </p>
                    </div>
                </div>
                <div className="text-content">
                    <div className="text-content-wrapper">
                        <h2>About the Project</h2>
                        <p>
                            The BMJ Industries project involves landscape development along a 750-meter stretch within an industrial facility. The scope includes planting trees and
                            shrubs to enhance the visual character of the environment.
                        </p>
                        <p>
                            A complete irrigation system is being implemented to ensure efficient water distribution and long-term plant health. The design focuses on durability,
                            functionality, and low-maintenance landscaping suitable for an industrial setting.
                        </p>
                    </div>
                </div>
            </section>
            <section className="widget-wrapper project-image-gallery">
                <div className="text-content-wrapper">
                    <h2>Gallery</h2>
                </div>
                <div className="image-content-wrapper">
                    <Image src="/images/05-Project-Images/Proj-Images-1.webp" alt="BMJ Industries landscape development" width={1920} height={1080} />
                    <Image src="/images/05-Project-Images/Proj-Images-2.webp" alt="BMJ Industries softscape plantation" width={1920} height={1080} />
                    <Image src="/images/05-Project-Images/Proj-Images-3.webp" alt="BMJ Industries irrigation system" width={1920} height={1080} />
                    <Image src="/images/05-Project-Images/Proj-Images-4.webp" alt="BMJ Industries linear landscape" width={1920} height={1080} />
                    <Image src="/images/05-Project-Images/Proj-Images-5.webp" alt="BMJ Industries shrub plantation" width={1920} height={1080} />
                </div>
            </section>
            <section className="widget-wrapper">
                <div className="text-group widget-wrapper">
                    <h2>Related Projects</h2>
                </div>
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
            </section>
        </main>
    );
}
