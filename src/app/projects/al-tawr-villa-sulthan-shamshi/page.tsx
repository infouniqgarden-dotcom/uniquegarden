import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const SITE_URL = "https://uniquegarden.ae/projects/al-tawr-villa-sulthan-shamshi";

export const metadata: Metadata = {
    title: "Al Tawr Villa – Sulthan Shamshi | Villa Landscaping Dubai | Unique Garden Tech",
    description: "Complete villa landscaping project in Al Twar 2, Dubai — hardscape, softscape, pergola, irrigation system, outdoor lighting & BOQ by Unique Garden Tech.",
    keywords: [
        "villa landscaping Dubai",
        "Al Twar villa garden",
        "hardscape softscape Dubai villa",
        "pergola installation Dubai",
        "outdoor lighting Dubai villa",
        "irrigation system villa Dubai",
        "villa garden design UAE",
    ],
    alternates: { canonical: SITE_URL },
    openGraph: {
        type: "website",
        locale: "en_AE",
        url: SITE_URL,
        title: "Al Tawr Villa – Sulthan Shamshi | Villa Landscaping Dubai",
        description: "Complete villa landscaping with hardscape, softscape, pergola, irrigation & outdoor lighting in Al Twar 2, Dubai.",
        siteName: "Unique Garden Tech Cont LLC",
        images: [{ url: "https://uniquegarden.ae/images/brand-logo.jpg", width: 1200, height: 630, alt: "Al Tawr Villa Sulthan Shamshi - Landscaping Project Dubai", type: "image/jpeg" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Al Tawr Villa – Sulthan Shamshi | Landscaping Dubai",
        description: "Complete villa landscaping with hardscape, softscape, pergola & irrigation in Al Twar 2, Dubai.",
        images: ["https://uniquegarden.ae/images/brand-logo.jpg"],
    },
};

export default function Project01() {
    return (
        <main className="project-inner-page">
            <section className="widget-wrapper hero-banner">
                <div className="image-content-wrapper">
                    <Image
                        src="/images/05-Project-Images/Project-Details-Page-(Hero-Image).webp"
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
                        <h1>Al Tawr Villa - Sulthan Shamshi</h1>
                        <p>
                            A thoughtfully designed residential landscape in Al Twar, Dubai, combining softscape, hardscape, pergolas, and plantation works to create a functional
                            and visually appealing outdoor environment.
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
                            <b>Date Started:</b> April 2026
                        </p>
                        <p>
                            <b>Services Provided:</b> Hardscape, Softscape, Pergola, Irrigation, Outdoor Lighting, BOQ
                        </p>
                        <p>
                            <b>Project Duration:</b> 4 Months
                        </p>
                    </div>
                </div>
                <div className="text-content">
                    <div className="text-content-wrapper">
                        <h2>About the Project</h2>
                        <p>
                            The residential landscape project for Sulthan Shamshi focused on developing a well-balanced outdoor environment through a combination of softscape and
                            hardscape elements. Customized planters and pergolas were constructed to enhance usability and provide shaded areas.
                        </p>
                        <p>
                            A carefully selected mix of trees, shrubs, and groundcovers suitable for the local climate was installed along with proper soil preparation to ensure
                            long-term sustainability. The overall design aimed to create an organized, visually appealing, and comfortable outdoor space.
                        </p>
                    </div>
                </div>
            </section>
            <section className="widget-wrapper project-image-gallery">
                <div className="text-content-wrapper">
                    <h2>Gallery</h2>
                </div>
                <div className="image-content-wrapper">
                    <Image src="/images/05-Project-Images/Proj-Images-1.webp" alt="Unique Garden Hero Banner" width={1920} height={1080} />
                    <Image src="/images/05-Project-Images/Proj-Images-2.webp" alt="Unique Garden Hero Banner" width={1920} height={1080} />
                    <Image src="/images/05-Project-Images/Proj-Images-3.webp" alt="Unique Garden Hero Banner" width={1920} height={1080} />
                    <Image src="/images/05-Project-Images/Proj-Images-4.webp" alt="Unique Garden Hero Banner" width={1920} height={1080} />
                    <Image src="/images/05-Project-Images/Proj-Images-5.webp" alt="Unique Garden Hero Banner" width={1920} height={1080} />
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
                <section className="widget-wrapper project-limage-rtext deep-teal-blue">
                    <div className="image-content-wrapper">
                        <Image src="/images/04-Projects-Page/Projects-Img-5.webp" alt="" width={1920} height={1080} sizes="(max-width: 768px) 100vw, 1080px" />
                    </div>

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
                </section>
            </section>
        </main>
    );
}
