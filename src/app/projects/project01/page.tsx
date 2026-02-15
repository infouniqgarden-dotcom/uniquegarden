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
                        <h1>Luxury Pool Residence</h1>
                        <p>A complete villa backyard transformation at Dubai Hills featuring lush landscaping, modern hardscaping, and outdoor living spaces. </p>
                    </div>
                </div>
            </section>
            <section className="widget-wrapper project-detials">
                <div className="text-content">
                    <div className="text-content-wrapper">
                        <h2>Project Details</h2>
                        <p>
                            <b>Location:</b> Dubai Hills, UAE
                        </p>
                        <p>
                            <b>Date Completed:</b> August 2025
                        </p>
                        <p>
                            <b>Services Provided:</b> Soft Landscaping, Hard Landscaping, Irrigation, Outdoor Lighting, Pergola
                        </p>
                        <p>
                            <b>Project Duration:</b> 3 months
                        </p>
                    </div>
                </div>
                <div className="text-content">
                    <div className="text-content-wrapper">
                        <h2>About the Project</h2>
                        <p>
                            The client wanted a complete transformation of their villa backyard into a modern outdoor retreat. Our team combined soft landscaping with lush lawns,
                            palm trees, and seasonal plants, while adding hardscape elements such as stone pathways and tiled patios.
                        </p>
                        <p>
                            To enhance comfort and usability, we built a wooden pergola for shaded seating and installed a modern irrigation system to ensure year-round greenery.
                            Outdoor lighting fixtures were added to highlight pathways and garden features, creating a vibrant yet functional backyard for both relaxation and
                            gatherings.
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
                            <h2>Vertical Garden Villa</h2>
                            <p className="overline-3">Jumeirah Village Circle, Dubai • May 2025</p>
                            <p>WORKS DONE:</p>
                            <ul>
                                <li>Vertical Gardens (living wall systems, irrigation setup)</li>
                                <li>Pebble Gardens (decorative stone areas, gravel borders)</li>
                                <li>Pergola & Deck (outdoor shaded structure, flooring)</li>
                                <li>Irrigation Systems (drip irrigation for vertical gardens)</li>
                                <li>Lawn Restoration (re-turfing, soil preparation)</li>
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
                            <h2>Luxury Poolside Landscape</h2>
                            <p className="overline-3">Palm Jumeirah, Dubai • April 2025</p>
                            <p>WORKS DONE:</p>
                            <ul>
                                <li>Swimming Pool Installation (tiling & finishing)</li>
                                <li>Hard Landscaping (paved walkways & pool deck)</li>
                                <li>Soft Landscaping (lawns, palm trees, seasonal plants)</li>
                                <li>Irrigation Systems (sprinklers & drip lines)</li>
                                <li>Outdoor Lighting (poolside & garden fixtures)</li>
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
