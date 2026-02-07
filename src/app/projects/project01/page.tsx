import Image from "next/image";
export default function Project01() {
    return (
        <main className="project01-page">
            <section className="widget-wrapper hero-banner">
                <div className="image-content-wrapper">
                    <Image
                        src="https://raw.githubusercontent.com/gowthamavtech/unique-garden-img/main/05-Project-Images/Project-Details-Page-(Hero-Image).webp"
                        alt="Unique Garden Hero Banner"
                        width={1920}
                        height={1080}
                        priority
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
                <div className="iamge-content-wrapper">
                    <Image
                        src="https://raw.githubusercontent.com/gowthamavtech/unique-garden-img/main/05-Project-Images/Proj-Images-1.webp"
                        alt="Unique Garden Hero Banner"
                        width={1920}
                        height={1080}
                        priority
                    />
                    <Image
                        src="https://raw.githubusercontent.com/gowthamavtech/unique-garden-img/main/05-Project-Images/Proj-Images-2.webp"
                        alt="Unique Garden Hero Banner"
                        width={1920}
                        height={1080}
                        priority
                    />
                    <Image
                        src="https://raw.githubusercontent.com/gowthamavtech/unique-garden-img/main/05-Project-Images/Proj-Images-3.webp"
                        alt="Unique Garden Hero Banner"
                        width={1920}
                        height={1080}
                        priority
                    />
                    <Image
                        src="https://raw.githubusercontent.com/gowthamavtech/unique-garden-img/main/05-Project-Images/Proj-Images-4.webp"
                        alt="Unique Garden Hero Banner"
                        width={1920}
                        height={1080}
                        priority
                    />
                    <Image
                        src="https://raw.githubusercontent.com/gowthamavtech/unique-garden-img/main/05-Project-Images/Proj-Images-5.webp"
                        alt="Unique Garden Hero Banner"
                        width={1920}
                        height={1080}
                        priority
                    />
                </div>
            </section>
        </main>
    );
}
