import Image from "next/image";
import Link from "next/link";
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
                        <h1>Abudhabi Private Villa</h1>
                        <p>
                            A tropical-inspired villa landscape in Abu Dhabi designed with palms, coastal-friendly planting, and irrigation systems to create a vibrant,
                            resort-style outdoor environment.
                        </p>
                    </div>
                </div>
            </section>
            <section className="widget-wrapper project-detials">
                <div className="text-content">
                    <div className="text-content-wrapper">
                        <h2>Project Details</h2>
                        <p>
                            <b>Location:</b> Abu Dhabi, UAE
                        </p>
                        <p>
                            <b>Status:</b> Ongoing
                        </p>
                        <p>
                            <b>Services Provided:</b> Softscape, Irrigation
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
                            The Abu Dhabi private villa project focuses on creating a tropical landscape suited to coastal conditions. The planting includes palms, tropical trees,
                            shrubs, and groundcovers that can thrive in sandy and saline environments.
                        </p>
                        <p>
                            Proper soil preparation and irrigation systems are incorporated to support sustainability and plant health. The design aims to deliver a vibrant,
                            resort-style outdoor space that is both functional and easy to maintain.
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
                            <Link className="btn btn-secondary" href="/projects/project01">
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
                            <Link className="btn btn-secondary" href="/projects/project01">
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
