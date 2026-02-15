import Image from "next/image";
import Link from "next/link";

export default function AboutUs() {
    return (
        <section className="widget-wrapper about-us-ltxt-rimg" id="about-us">
            <div className="text-content">
                <div className="text-content-wrapper">
                    <p className="overline-1">About Us</p>
                    <h2>Unique Garden Tech. Cont. LLC</h2>
                    <p>
                        Unique Garden Tech. Cont. LLC is a Sharjah-based landscaping and construction company, providing premium outdoor solutions across Dubai and Sharjah. With a
                        strong focus on quality, creativity, and sustainability, we deliver tailored designs that enhance the beauty and functionality of every space — from villas
                        to commercial properties.
                    </p>
                    <p>
                        Backed by years of industry expertise, our team ensures every project meets the highest standards of excellence. From concept to completion, we combine
                        modern techniques with trusted craftsmanship to transform ordinary outdoor spaces into green, inviting environments that thrive in the UAE’s unique climate.
                    </p>
                    <Link href="/about-us" className="btn" aria-label="Read more about us">
                        Read more <span className="sr-only">about Unique Garden</span>
                    </Link>
                </div>
            </div>
            <div className="image-content-wrapper">
                <Image
                    src="/images/01-home-page/hp-about-us.webp"
                    alt="Unique Garden Tech Cont LLC landscaping project in Sharjah"
                    width={1920}
                    height={1080}
                    sizes="(max-width: 768px) 100vw, 1080px"
                />
            </div>
        </section>
    );
}
