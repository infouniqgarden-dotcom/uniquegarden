import Image from "next/image";
import OurProjects from "../components/OurProjects";
import Testimonials from "../components/Testimonials";
import ServicesSlider from "../components/ServicesSlider";

export default function ServicesPage() {
    const landscapingImages = [
        { imagePath: "03-Services-Page/Services-1.webp", imageAlt: "Landscaping service example 1" },
        { imagePath: "03-Services-Page/Services-2.webp", imageAlt: "Landscaping service example 2" },
        { imagePath: "03-Services-Page/Services-3.webp", imageAlt: "Landscaping service example 3" },
    ];

    const SoftLandscapingImages = [
        { imagePath: "03-Services-Page/Services-2.webp", imageAlt: "Soft Landscaping example 1" },
        { imagePath: "03-Services-Page/Services-1.webp", imageAlt: "Soft Landscaping example 2" },
        { imagePath: "03-Services-Page/Services-3.webp", imageAlt: "Soft Landscaping example 3" },
    ];

    const PergolasOutdoorLiving = [
        { imagePath: "03-Services-Page/Services-3.webp", imageAlt: "Pergolas & Outdoor Living example 1" },
        { imagePath: "03-Services-Page/Services-2.webp", imageAlt: "Pergolas & Outdoor Living example 2" },
        { imagePath: "03-Services-Page/Services-4.webp", imageAlt: "Pergolas & Outdoor Living example 3" },
    ];

    const CivilWorks = [
        { imagePath: "03-Services-Page/Services-4.webp", imageAlt: "Civil Works example 1" },
        { imagePath: "03-Services-Page/Services-2.webp", imageAlt: "Civil Works example 2" },
        { imagePath: "03-Services-Page/Services-1.webp", imageAlt: "Civil Works example 3" },
    ];
    return (
        <main className="services-page">
            <section className="widget-wrapper hero-banner">
                <div className="image-content-wrapper">
                    <Image
                        src="https://raw.githubusercontent.com/gowthamavtech/unique-garden-img/main/03-Services-Page/Services-(Hero-Image).webp"
                        alt="Unique Garden Hero Banner"
                        width={1920}
                        height={1080}
                        priority
                    />
                </div>
                <div className="text-content">
                    <div className="text-content-wrapper">
                        <h1>Services</h1>
                        <p>At Unique Garden Tech. Cont. LLC, we specialize in creating outdoor environments that blend beauty, function, and durability.</p>
                    </div>
                </div>
            </section>
            <section className="widget-wrapper services-lslider-rtext">
                <div className="image-slider">
                    <ServicesSlider images={landscapingImages} />
                </div>
                <div className="text-content">
                    <div className="text-content-wrapper">
                        <h2>Landscaping</h2>
                        <p>Designing and building outdoor spaces that blend beauty, function, and durability.</p>
                        <ul>
                            <li>Soft Landscaping (lawns, plants, flowers, trees)</li>
                            <li>Hard Landscaping (pathways, patios, stonework)</li>
                            <li>Vertical Gardens</li>
                            <li>Pebble Gardens</li>
                            <li>Irrigation Systems</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="widget-wrapper bg services-ltext-rslider">
                <div className="text-content">
                    <div className="text-content-wrapper">
                        <h2>Soft Landscaping</h2>
                        <p>Bringing outdoor spaces to life with greenery and natural beauty.</p>
                        <ul>
                            <li>Lawn installation & turfing</li>
                            <li>Planting & flower beds</li>
                            <li>Shrubs & hedges</li>
                            <li>Seasonal plants</li>
                            <li>Garden maintenance</li>
                        </ul>
                    </div>
                </div>
                <div className="image-slider">
                    <ServicesSlider images={SoftLandscapingImages} />
                </div>
            </section>
            <section className="widget-wrapper services-lslider-rtext">
                <div className="image-slider">
                    <ServicesSlider images={PergolasOutdoorLiving} />
                </div>
                <div className="text-content">
                    <div className="text-content-wrapper">
                        <h2>Pergolas & Outdoor Living</h2>
                        <p>Enhancing comfort with stylish shaded and lifestyle structures.</p>
                        <ul>
                            <li>Wooden pergolas</li>
                            <li>Gazebos & cabanas</li>
                            <li>Outdoor seating areas</li>
                            <li>Decking & flooring</li>
                            <li>Shade structures</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="widget-wrapper bg services-ltext-rslider">
                <div className="text-content">
                    <div className="text-content-wrapper">
                        <h2>Civil Works</h2>
                        <p>Comprehensive civil works to support landscaping and outdoor projects.</p>
                        <ul>
                            <li>Paving & flooring</li>
                            <li>Concreting</li>
                            <li>Carpentry & fit-outs</li>
                            <li>Retaining structures</li>
                            <li>Site preparation</li>
                        </ul>
                    </div>
                </div>
                <div className="image-slider">
                    <ServicesSlider images={CivilWorks} />
                </div>
            </section>
            <OurProjects />
            <Testimonials />
        </main>
    );
}
