import Image from "next/image";

export default function Home() {
    return (
        <main>
            <section className="widget-wrapper hero-banner">
                <div className="image-content-wrapper">
                    <Image
                        src="https://raw.githubusercontent.com/gowthamavtech/unique-garden-img/main/01-home-page/hp-hero-img.webp"
                        alt="Unique Garden Hero Banner"
                        width={1920}
                        height={1080}
                        priority
                    />
                </div>
                <div className="text-content">
                    <div className="text-content-wrapper">
                        <p className="highlight-text">
                            Dubai & Sharjah’s Trusted Landscaping Partner
                        </p>
                        <h1>
                            Transforming Outdoor Spaces into Beautiful,
                            Functional Landscapes
                        </h1>
                        <p>
                            From elegant gardens to complete landscape
                            construction, we design and build spaces that bring
                            nature closer to you.
                        </p>
                        <div className="btn-group">
                            <a className="btn" href="#">
                                Get a quote
                            </a>
                            <a className="btn btn-secondary" href="#">
                                Explore services
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
