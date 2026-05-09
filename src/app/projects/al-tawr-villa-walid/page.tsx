import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const SITE_URL = "https://uniquegarden.ae/projects/al-tawr-villa-walid";

export const metadata: Metadata = {
    title: "Al Tawr Villa – Walid | Villa Landscaping Dubai | Unique Garden Tech",
    description: "Complete outdoor transformation at Al Twar 2, Dubai — hardscape, softscape, pergola, irrigation, outdoor lighting, pavement & lawn development by Unique Garden Tech.",
    keywords: [
        "villa landscaping Dubai",
        "Al Twar villa garden",
        "hardscape softscape Dubai villa",
        "pergola installation Dubai",
        "outdoor lighting Dubai villa",
        "irrigation system villa Dubai",
        "pavement works Dubai",
        "lawn development UAE",
    ],
    alternates: { canonical: SITE_URL },
    openGraph: {
        type: "website",
        locale: "en_AE",
        url: SITE_URL,
        title: "Al Tawr Villa – Walid | Villa Landscaping Dubai",
        description: "Complete outdoor transformation with hardscape, softscape, pergola, irrigation & outdoor lighting in Al Twar 2, Dubai.",
        siteName: "Unique Garden Tech Cont LLC",
        images: [{ url: "https://uniquegarden.ae/images/brand-logo.jpg", width: 1200, height: 630, alt: "Al Tawr Villa Walid - Landscaping Project Dubai", type: "image/jpeg" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Al Tawr Villa – Walid | Landscaping Dubai",
        description: "Complete villa outdoor transformation with hardscape, softscape, pergola & irrigation in Al Twar 2, Dubai.",
        images: ["https://uniquegarden.ae/images/brand-logo.jpg"],
    },
};

export default function AlTawrVillaWalid() {
    return (
        <main className="project-inner-page">
            <section className="widget-wrapper hero-banner">
                <div className="image-content-wrapper">
                    <Image
                        src="/images/05-Project-Images/Project-Details-Page-(Hero-Image).webp"
                        alt="Al Tawr Villa Walid landscaping project hero"
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
                        <h1>Al Tawr Villa - Walid</h1>
                        <p>
                            A complete outdoor transformation featuring integrated landscaping, paved pathways, pergolas, and lush greenery, designed to deliver a sustainable and
                            elegant living space.
                        </p>
                    </div>
                </div>
            </section>
            <section className="widget-wrapper project-detials">
                <div className="text-content">
                    <div className="text-content-wrapper">
                        <h2>Project Details</h2>
                        <p>
                            <b>Location:</b> Al Twar 2, Dubai, UAE
                        </p>
                        <p>
                            <b>Services Provided:</b> Hardscape, Softscape, Pergola, Irrigation, Outdoor Lighting, BOQ, Pavement, Lawn Area
                        </p>
                        <p>
                            <b>Project Duration:</b> 6 Months
                        </p>
                    </div>
                </div>
                <div className="text-content">
                    <div className="text-content-wrapper">
                        <h2>About the Project</h2>
                        <p>
                            The Al Twar Villa project for Mr. Walid involved transforming the outdoor space into a functional and aesthetically pleasing landscape. The design
                            integrated planting, pathways, and paved zones to improve usability and circulation.
                        </p>
                        <p>
                            Customized planters and pergolas were added for structure and comfort, while irrigation systems ensured sustainable water management. The final outcome
                            achieved a balance between greenery and built elements, creating an elegant and low-maintenance outdoor living space.
                        </p>
                    </div>
                </div>
            </section>
            <section className="widget-wrapper project-image-gallery">
                <div className="text-content-wrapper">
                    <h2>Gallery</h2>
                </div>
                <div className="image-content-wrapper">
                    <Image src="/images/05-Project-Images/Proj-Images-1.webp" alt="Al Tawr Villa Walid outdoor landscape" width={1920} height={1080} />
                    <Image src="/images/05-Project-Images/Proj-Images-2.webp" alt="Al Tawr Villa Walid hardscape pathways" width={1920} height={1080} />
                    <Image src="/images/05-Project-Images/Proj-Images-3.webp" alt="Al Tawr Villa Walid pergola" width={1920} height={1080} />
                    <Image src="/images/05-Project-Images/Proj-Images-4.webp" alt="Al Tawr Villa Walid softscape planting" width={1920} height={1080} />
                    <Image src="/images/05-Project-Images/Proj-Images-5.webp" alt="Al Tawr Villa Walid lawn area" width={1920} height={1080} />
                </div>
            </section>
            <section className="widget-wrapper">
                <div className="text-group widget-wrapper">
                    <h2>Related Projects</h2>
                </div>
                <section className="widget-wrapper  project-ltext-rimage warm-taupe">
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
                    <div className="image-content-wrapper">
                        <Image src="/images/04-Projects-Page/Projects-Img-4.webp" alt="" width={1920} height={1080} sizes="(max-width: 768px) 100vw, 1080px" />
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
            </section>
        </main>
    );
}
