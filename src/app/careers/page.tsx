import Image from "next/image";
import Link from "next/link";
import RequestAQuote from "../components/RequestAQuote";
import MeetOurTeam from "../components/MeetOurTeam";

export default function Careers() {
    return (
        <main className="contact-us-page">
            <section className="widget-wrapper hero-banner">
                <div className="image-content-wrapper">
                    <Image
                        src="https://raw.githubusercontent.com/gowthamavtech/unique-garden-img/main/Career-Page-(Hero-Image).webp"
                        alt="Unique Garden Hero Banner"
                        width={1920}
                        height={1080}
                        priority
                    />
                </div>
                <div className="text-content">
                    <div className="text-content-wrapper">
                        <h1>Careers</h1>
                        <p>At Unique Garden Tech. Cont. LLC, we specialize in creating outdoor environments that blend beauty, function, and durability.</p>
                    </div>
                </div>
            </section>
            <section className="widget-wrapper careers-job-openings">
                <div className="widget-wrapper text-group">
                    <div className="text-content-wrapper">
                        <h2>Openings</h2>
                    </div>
                </div>
                <div className="widget-wrapper job-listing">
                    <div className="text-content">
                        <div className="job-header">
                            <Image src="./openings-icons/Landscape-Architect.svg" alt="Opening for Landscape Architect icon" width={64} height={64} />
                            <div className="job-title">
                                <h6>Landscape Architect</h6>
                                <div className="full-time">Full Time</div>
                                <Link target="_blank" href="#" className="btn">
                                    Apply Now
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M15.416 10H4.16602" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                        <path
                                            d="M10.834 15C10.834 15 15.834 11.3176 15.834 10C15.834 8.68233 10.834 5 10.834 5"
                                            stroke="white"
                                            strokeWidth="1.8"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </Link>
                            </div>
                        </div>

                        <div className="job-description">
                            <p>Experience: 3–5 years • Location: Dubai & Sharjah, UAE • Skills: CAD, 3D visualization, plant selection, outdoor design concepts</p>
                            <p>
                                Work with our design team to create stunning outdoor environments for villas and commercial spaces across Dubai and Sharjah. You&apos;ll be involved
                                in concept planning, plant selection, and design execution that blend creativity with practicality.
                            </p>
                        </div>
                    </div>
                    <div className="text-content">
                        <div className="job-header">
                            <Image src="./openings-icons/Site-Engineer-Civil-MEP.svg" alt="Opening for Landscape Architect icon" width={64} height={64} />
                            <div className="job-title">
                                <h6>Site Engineer – Civil & MEP</h6>
                                <div className="full-time">Full Time</div>
                                <Link target="_blank" href="#" className="btn">
                                    Apply Now
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M15.416 10H4.16602" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                        <path
                                            d="M10.834 15C10.834 15 15.834 11.3176 15.834 10C15.834 8.68233 10.834 5 10.834 5"
                                            stroke="white"
                                            strokeWidth="1.8"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </Link>
                            </div>
                        </div>

                        <div className="job-description">
                            <p>Experience: 3–5 years • Location: Dubai & Sharjah, UAE • Skills: Skills: Site supervision, AutoCAD, project scheduling, safety compliance</p>
                            <p>
                                Work with our design team to create stunning outdoor environments for villas and commercial spaces across Dubai and Sharjah. You&apos;ll be involved
                                in concept planning, plant selection, and design execution that blend creativity with practicality.
                            </p>
                        </div>
                    </div>
                    <div className="text-content">
                        <div className="job-header">
                            <Image src="./openings-icons/Landscape-Designer.svg" alt="Opening for Landscape-Designer icon" width={64} height={64} />
                            <div className="job-title">
                                <h6>Landscape Designer</h6>
                                <div className="full-time">INTERNSHIP</div>
                                <Link target="_blank" href="#" className="btn">
                                    Apply Now
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M15.416 10H4.16602" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                        <path
                                            d="M10.834 15C10.834 15 15.834 11.3176 15.834 10C15.834 8.68233 10.834 5 10.834 5"
                                            stroke="white"
                                            strokeWidth="1.8"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </Link>
                            </div>
                        </div>

                        <div className="job-description">
                            <p>Experience: Fresh graduates • Location: Dubai, UAE • Skills: Basic CAD/SketchUp, design support, willingness to learn</p>
                            <p>
                                Work with our design team to create stunning outdoor environments for villas and commercial spaces across Dubai and Sharjah. You&apos;ll be involved
                                in concept planning, plant selection, and design execution that blend creativity with practicality.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <MeetOurTeam />
            <RequestAQuote />
        </main>
    );
}
