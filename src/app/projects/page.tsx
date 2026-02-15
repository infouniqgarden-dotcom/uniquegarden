import Link from "next/link";
import Image from "next/image";
import OurSerivesIconTextMultiSlider from "../components/OurServicesIconTextMultiSlider";
import RequestAQuote from "../components/RequestAQuote";

export default function ServicesPage() {
    return (
        <main className="projects-page">
            <section className="widget-wrapper hero-banner">
                <div className="image-content-wrapper">
                    <Image
                        src="https://raw.githubusercontent.com/gowthamavtech/unique-garden-img/main/04-Projects-Page/Projects-Page-(Hero-Image).webp"
                        alt="Unique Garden Hero Banner"
                        width={1920}
                        height={1080}
                        priority
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
                    <Image src="https://raw.githubusercontent.com/gowthamavtech/unique-garden-img/main/04-Projects-Page/Projects-Img-1.webp" alt="" width={1920} height={1080} />
                </div>

                <div className="text-content">
                    <div className="text-content-wrapper">
                        <h2>Modern Villa Backyard</h2>
                        <p className="overline-3">Dubai Hills, UAE • August 2025</p>
                        <p>Work done:</p>
                        <ul>
                            <li>Soft Landscaping (lawns, flower beds, palm trees, shrubs)</li>
                            <li>Hard Landscaping (stone pathways, tiled patios, edging)</li>
                            <li>Pergola Installation (wooden structure with seating)</li>
                            <li>Outdoor Lighting (garden fixtures, pathway lights)</li>
                            <li>Irrigation Systems (drip irrigation, sprinklers)</li>
                        </ul>
                        <Link className="btn btn-secondary" href="./projects/project01">
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
                        <h2>Luxury Pool Residence</h2>
                        <p className="overline-3">Palm Jumeirah, Dubai • July 2025</p>
                        <p>Work done:</p>
                        <ul>
                            <li>Swimming Pool Installation (tiling, finishing, filtration)</li>
                            <li>Water Features (fountain wall, mini waterfall)</li>
                            <li>Pool Lighting (underwater LEDs, deck lights)</li>
                            <li>Hard Landscaping (poolside paving, deck flooring)</li>
                            <li>Maintenance Setup (pump systems, chemical treatment)</li>
                        </ul>
                        <Link className="btn btn-secondary" href="./projects/project01">
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
                    <Image src="https://raw.githubusercontent.com/gowthamavtech/unique-garden-img/main/04-Projects-Page/Projects-Img-2.webp" alt="" width={1920} height={1080} />
                </div>
            </section>
            <section className="widget-wrapper project-limage-rtext olive-drab">
                <div className="image-content-wrapper">
                    <Image src="https://raw.githubusercontent.com/gowthamavtech/unique-garden-img/main/04-Projects-Page/Projects-Img-3.webp" alt="" width={1920} height={1080} />
                </div>

                <div className="text-content">
                    <div className="text-content-wrapper">
                        <h2>Corporate Landscape Plaza</h2>
                        <p className="overline-3">Sharjah Business District • June 2025</p>
                        <p>Work done:</p>
                        <ul>
                            <li>Civil Paving (stone walkways, entrance plaza)</li>
                            <li>Irrigation Systems (sprinklers, underground pipes)</li>
                            <li>Soft Landscaping (palm trees, shrubs, lawn beds)</li>
                            <li>MEP Works (wiring for lights, water supply)</li>
                            <li>Outdoor Seating (benches, shaded structures)</li>
                        </ul>
                        <Link className="btn btn-secondary" href="./projects/project01">
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
                        <h2>Vertical Garden Villa</h2>
                        <p className="overline-3">Jumeirah Village Circle, Dubai • May 2025</p>
                        <p>Work done:</p>
                        <ul>
                            <li>Vertical Gardens (living wall systems, irrigation setup)</li>
                            <li>Pebble Gardens (decorative stone areas, gravel borders)</li>
                            <li>Pergola & Deck (outdoor shaded structure, flooring)</li>
                            <li>Irrigation Systems (drip irrigation for vertical gardens)</li>
                            <li>Lawn Restoration (re-turfing, soil preparation)</li>
                        </ul>
                        <Link className="btn btn-secondary" href="./projects/project01">
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
                    <Image src="https://raw.githubusercontent.com/gowthamavtech/unique-garden-img/main/04-Projects-Page/Projects-Img-4.webp" alt="" width={1920} height={1080} />
                </div>
            </section>
            <section className="widget-wrapper project-limage-rtext deep-teal-blue">
                <div className="image-content-wrapper">
                    <Image src="https://raw.githubusercontent.com/gowthamavtech/unique-garden-img/main/04-Projects-Page/Projects-Img-5.webp" alt="" width={1920} height={1080} />
                </div>

                <div className="text-content">
                    <div className="text-content-wrapper">
                        <h2>Luxury Poolside Landscape</h2>
                        <p className="overline-3">Palm Jumeirah, Dubai • April 2025</p>
                        <p>Work done:</p>
                        <ul>
                            <li>Swimming Pool Installation (tiling & finishing)</li>
                            <li>Hard Landscaping (paved walkways & pool deck)</li>
                            <li>Soft Landscaping (lawns, palm trees, seasonal plants)</li>
                            <li>Irrigation Systems (sprinklers & drip lines)</li>
                            <li>Outdoor Lighting (poolside & garden fixtures)</li>
                        </ul>
                        <Link className="btn btn-secondary" href="./projects/project01">
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
            <section className="widget-wrapper bg our-services-multi-icon-text-slider">
                <div className="widget-wrapper text-group">
                    <div className="text-content-wrapper">
                        <h2>Our Services</h2>
                        <p>From gardens to pools, we offer end-to-end landscaping and construction services in Dubai & Sharjah.</p>
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
