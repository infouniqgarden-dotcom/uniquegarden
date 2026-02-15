import Image from "next/image";
import Link from "next/link";

export default function ArrowButton() {
    return (
        <section className="widget-wrapper hero-banner">
            <div className="image-content-wrapper">
                <Image
                    src="/images/01-home-page/hp-hero-img.webp"
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
                    <p className="highlight-text">Dubai & Sharjah’s Trusted Landscaping Partner</p>
                    <h1>Transforming Outdoor Spaces into Beautiful, Functional Landscapes</h1>
                    <p>From elegant gardens to complete landscape construction, we design and build spaces that bring nature closer to you.</p>
                    <div className="btn-group">
                        <Link className="btn" href="tel:+97165223391">
                            Get a quote
                        </Link>
                        <Link className="btn btn-secondary" href="#our-services">
                            Explore services
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
