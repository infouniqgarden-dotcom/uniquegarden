import type { Metadata } from "next";
import Image from "next/image";
import OurProjects from "../components/OurProjects";
import Testimonials from "../components/Testimonials";
import ServicesSlider from "../components/ServicesSlider";

const SITE_URL = "https://uniquegarden.ae/services";

export const metadata: Metadata = {
    title: "Landscaping Services UAE | Softscape, Hardscape, Irrigation & More | Unique Garden Tech",
    description: "Expert landscaping services across the UAE — softscape, hardscape, pergolas, irrigation systems, outdoor lighting, vertical gardens, pools, HVAC & MEP works. Get a free quote.",
    keywords: [
        "landscaping services UAE",
        "softscape services Dubai",
        "hardscape contractor UAE",
        "irrigation system installation UAE",
        "pergola construction Dubai",
        "outdoor lighting UAE",
        "vertical garden installation UAE",
        "pebble garden design UAE",
        "garden maintenance UAE",
        "pool construction UAE",
        "MEP contractor UAE",
        "civil works UAE",
    ],
    alternates: { canonical: SITE_URL },
    openGraph: {
        type: "website",
        locale: "en_AE",
        url: SITE_URL,
        title: "Landscaping Services UAE | Softscape, Hardscape, Irrigation & More",
        description: "From softscape and hardscape to irrigation, pergolas, and MEP works — discover Unique Garden Tech's full range of outdoor services across the UAE.",
        siteName: "Unique Garden Tech Cont LLC",
        images: [{ url: "https://uniquegarden.ae/images/brand-logo.jpg", width: 1200, height: 630, alt: "Unique Garden Tech Services UAE", type: "image/jpeg" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Landscaping Services UAE | Unique Garden Tech",
        description: "Softscape, hardscape, irrigation, pergolas, outdoor lighting & MEP works across the UAE.",
        images: ["https://uniquegarden.ae/images/brand-logo.jpg"],
    },
};

export default function ServicesPage() {
    const softscapeImages = [
        { imagePath: "03-Services-Page/Services-2.webp", imageAlt: "Soft Landscaping example 1" },
        { imagePath: "03-Services-Page/Services-1.webp", imageAlt: "Soft Landscaping example 2" },
        { imagePath: "03-Services-Page/Services-3.webp", imageAlt: "Soft Landscaping example 3" },
    ];

    const hardscapeImages = [
        { imagePath: "03-Services-Page/Services-1.webp", imageAlt: "Hardscape example 1" },
        { imagePath: "03-Services-Page/Services-2.webp", imageAlt: "Hardscape example 2" },
        { imagePath: "03-Services-Page/Services-3.webp", imageAlt: "Hardscape example 3" },
    ];

    const pergolasGazebosImages = [
        { imagePath: "03-Services-Page/Services-3.webp", imageAlt: "Pergolas & Outdoor Living example 1" },
        { imagePath: "03-Services-Page/Services-2.webp", imageAlt: "Pergolas & Outdoor Living example 2" },
        { imagePath: "03-Services-Page/Services-4.webp", imageAlt: "Pergolas & Outdoor Living example 3" },
    ];

    const civilWorksImages = [
        { imagePath: "03-Services-Page/Services-4.webp", imageAlt: "Civil Works example 1" },
        { imagePath: "03-Services-Page/Services-2.webp", imageAlt: "Civil Works example 2" },
        { imagePath: "03-Services-Page/Services-1.webp", imageAlt: "Civil Works example 3" },
    ];

    const lightingImages = [
        { imagePath: "03-Services-Page/Services-1.webp", imageAlt: "Lighting example 1" },
        { imagePath: "03-Services-Page/Services-2.webp", imageAlt: "Lighting example 2" },
        { imagePath: "03-Services-Page/Services-3.webp", imageAlt: "Lighting example 3" },
    ];

    const maintenanceImages = [
        { imagePath: "03-Services-Page/Services-1.webp", imageAlt: "Maintenance example 1" },
        { imagePath: "03-Services-Page/Services-2.webp", imageAlt: "Maintenance example 2" },
        { imagePath: "03-Services-Page/Services-3.webp", imageAlt: "Maintenance example 3" },
    ];

    const pebbleGardensImages = [
        { imagePath: "03-Services-Page/Services-1.webp", imageAlt: "Pebble Gardens example 1" },
        { imagePath: "03-Services-Page/Services-2.webp", imageAlt: "Pebble Gardens example 2" },
        { imagePath: "03-Services-Page/Services-3.webp", imageAlt: "Pebble Gardens example 3" },
    ];

    const irrigationSystemsImages = [
        { imagePath: "03-Services-Page/Services-1.webp", imageAlt: "Irrigation Systems example 1" },
        { imagePath: "03-Services-Page/Services-2.webp", imageAlt: "Irrigation Systems example 2" },
        { imagePath: "03-Services-Page/Services-3.webp", imageAlt: "Irrigation Systems example 3" },
    ];

    const verticalGardensImages = [
        { imagePath: "03-Services-Page/Services-1.webp", imageAlt: "Vertical Gardens example 1" },
        { imagePath: "03-Services-Page/Services-2.webp", imageAlt: "Vertical Gardens example 2" },
        { imagePath: "03-Services-Page/Services-3.webp", imageAlt: "Vertical Gardens example 3" },
    ];

    const mepWorksImages = [
        { imagePath: "03-Services-Page/Services-1.webp", imageAlt: "MEP Works example 1" },
        { imagePath: "03-Services-Page/Services-2.webp", imageAlt: "MEP Works example 2" },
        { imagePath: "03-Services-Page/Services-3.webp", imageAlt: "MEP Works example 3" },
    ];

    const waterFeaturesImages = [
        { imagePath: "03-Services-Page/Services-1.webp", imageAlt: "Water Features example 1" },
        { imagePath: "03-Services-Page/Services-2.webp", imageAlt: "Water Features example 2" },
        { imagePath: "03-Services-Page/Services-3.webp", imageAlt: "Water Features example 3" },
    ];

    const swimmingPoolsImages = [
        { imagePath: "03-Services-Page/Services-1.webp", imageAlt: "Swimming Pools example 1" },
        { imagePath: "03-Services-Page/Services-2.webp", imageAlt: "Swimming Pools example 2" },
        { imagePath: "03-Services-Page/Services-3.webp", imageAlt: "Swimming Pools example 3" },
    ];
    return (
        <main className="services-page">
            <section className="widget-wrapper hero-banner">
                <div className="image-content-wrapper">
                    <Image
                        src="/images/03-Services-Page/Services-(Hero-Image).webp"
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
                        <h1>Services</h1>
                        <p>At Unique Garden Tech. Cont. LLC, we specialize in creating outdoor environments that blend beauty, function, and durability.</p>
                    </div>
                </div>
            </section>
            <section className="widget-wrapper services-lslider-rtext">
                <div className="image-slider">
                    <ServicesSlider images={softscapeImages} />
                </div>
                <div className="text-content">
                    <div className="text-content-wrapper">
                        <h2>Softscape</h2>
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
            </section>
            <section className="widget-wrapper bg services-ltext-rslider">
                <div className="text-content">
                    <div className="text-content-wrapper">
                        <h2>Hardscape</h2>
                        <p>Creating durable and functional outdoor structures that define and support the landscape design.</p>
                        <ul>
                            <li>Pathways & Walkways</li>
                            <li>Patios & Outdoor Flooring</li>
                            <li>Retaining Walls & Stonework</li>
                            <li>Driveways & Paving</li>
                            <li>Water Features & Edging</li>
                        </ul>
                    </div>
                </div>
                <div className="image-slider">
                    <ServicesSlider images={hardscapeImages} />
                </div>
            </section>
            <section className="widget-wrapper services-lslider-rtext">
                <div className="image-slider">
                    <ServicesSlider images={lightingImages} />
                </div>
                <div className="text-content">
                    <div className="text-content-wrapper">
                        <h2>Lighting</h2>
                        <p>Enhancing ambiance and safety with well-planned outdoor lighting.</p>
                        <ul>
                            <li>Garden lighting</li>
                            <li>Pathway & driveway lights</li>
                            <li>Accent & feature lighting</li>
                            <li>Decorative fixtures</li>
                            <li>Energy-efficient solutions</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="widget-wrapper bg services-ltext-rslider">
                <div className="text-content">
                    <div className="text-content-wrapper">
                        <h2>Maintenance</h2>
                        <p>Keeping landscapes healthy, clean, and visually appealing year-round.</p>
                        <ul>
                            <li>Lawn mowing & trimming</li>
                            <li>Pruning & plant care</li>
                            <li>Fertilization & pest control</li>
                            <li>Irrigation system checks</li>
                            <li>General upkeep</li>
                        </ul>
                    </div>
                </div>
                <div className="image-slider">
                    <ServicesSlider images={maintenanceImages} />
                </div>
            </section>
            <section className="widget-wrapper services-lslider-rtext">
                <div className="image-slider">
                    <ServicesSlider images={pergolasGazebosImages} />
                </div>
                <div className="text-content">
                    <div className="text-content-wrapper">
                        <h2>Pergolas & Gazebos</h2>
                        <p>Creating stylish outdoor structures for shade, comfort, and relaxation.</p>
                        <ul>
                            <li>Wooden & metal pergolas</li>
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
                        <h2>Pebble Gardens</h2>
                        <p>Designing decorative, low-maintenance landscapes using natural stones.</p>
                        <ul>
                            <li>Decorative pebble layouts</li>
                            <li>Zen garden designs</li>
                            <li>Pathway enhancements</li>
                            <li>Ground cover solutions</li>
                            <li>Drainage-friendly designs</li>
                        </ul>
                    </div>
                </div>
                <div className="image-slider">
                    <ServicesSlider images={pebbleGardensImages} />
                </div>
            </section>
            <section className="widget-wrapper services-lslider-rtext">
                <div className="image-slider">
                    <ServicesSlider images={pebbleGardensImages} />
                </div>
                <div className="text-content">
                    <div className="text-content-wrapper">
                        <h2>Irrigation Systems</h2>
                        <p>Providing efficient watering solutions for healthy and sustainable landscapes.</p>
                        <ul>
                            <li>Drip irrigation systems</li>
                            <li>Sprinkler systems</li>
                            <li>Automated controllers</li>
                            <li>Water-saving solutions</li>
                            <li>System maintenance</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="widget-wrapper bg services-ltext-rslider">
                <div className="text-content">
                    <div className="text-content-wrapper">
                        <h2>Vertical Gardens</h2>
                        <p>Transforming walls into vibrant green spaces with modern solutions.</p>
                        <ul>
                            <li>Green wall installation</li>
                            <li>Modular vertical systems</li>
                            <li>Indoor & outdoor gardens</li>
                            <li>Integrated irrigation</li>
                            <li>Maintenance services</li>
                        </ul>
                    </div>
                </div>
                <div className="image-slider">
                    <ServicesSlider images={verticalGardensImages} />
                </div>
            </section>
            <section className="widget-wrapper services-lslider-rtext">
                <div className="image-slider">
                    <ServicesSlider images={civilWorksImages} />
                </div>
                <div className="text-content">
                    <div className="text-content-wrapper">
                        <h2>Civil Works</h2>
                        <p>Providing foundational and structural support for landscaping projects.</p>
                        <ul>
                            <li>Land leveling & excavation</li>
                            <li>Drainage systems</li>
                            <li>Concrete & masonry work</li>
                            <li>Site preparation</li>
                            <li>Structural development</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="widget-wrapper bg services-ltext-rslider">
                <div className="text-content">
                    <div className="text-content-wrapper">
                        <h2>MEP Works</h2>
                        <p>Delivering integrated mechanical, electrical, and plumbing solutions.</p>
                        <ul>
                            <li>Electrical installations</li>
                            <li>Plumbing & pipelines</li>
                            <li>Pump & motor systems</li>
                            <li>Utility connections</li>
                            <li>System maintenance</li>
                        </ul>
                    </div>
                </div>
                <div className="image-slider">
                    <ServicesSlider images={mepWorksImages} />
                </div>
            </section>
            <section className="widget-wrapper services-lslider-rtext">
                <div className="image-slider">
                    <ServicesSlider images={waterFeaturesImages} />
                </div>
                <div className="text-content">
                    <div className="text-content-wrapper">
                        <h2>Water Features</h2>
                        <p>Enhancing landscapes with elegant and calming water elements.</p>
                        <ul>
                            <li>Fountains & waterfalls</li>
                            <li>Ponds & reflecting pools</li>
                            <li>Cascade features</li>
                            <li>Filtration systems</li>
                            <li>Water circulation setup</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="widget-wrapper bg services-ltext-rslider">
                <div className="text-content">
                    <div className="text-content-wrapper">
                        <h2>Swimming Pools</h2>
                        <p>Designing and building custom pools for luxury and recreation.</p>
                        <ul>
                            <li>Pool design & construction</li>
                            <li>Tiling & finishing</li>
                            <li>Filtration systems</li>
                            <li>Poolside decking</li>
                            <li>Maintenance services</li>
                        </ul>
                    </div>
                </div>
                <div className="image-slider">
                    <ServicesSlider images={swimmingPoolsImages} />
                </div>
            </section>
            <OurProjects />
            <Testimonials />
        </main>
    );
}
