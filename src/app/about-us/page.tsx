import Image from "next/image";
import RequestAQuote from "../components/RequestAQuote";

export default function AboutPage() {
    return (
        <main className="about-us-page">
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
                        <h1>About us</h1>
                        <p>Trusted Landscaping & Construction Experts in Dubai & Sharjah</p>
                    </div>
                </div>
            </section>
            <section className="widget-wrapper about-us-ltxt-rimg" id="about-us">
                <div className="text-content">
                    <div className="text-content-wrapper">
                        <h2>Introduction</h2>
                        <p>
                            Unique Garden Tech. Cont. LLC is a Sharjah-based landscaping and construction company serving clients across Dubai and Sharjah. We specialize in
                            creating outdoor spaces that combine functionality, sustainability, and elegance — from residential gardens and swimming pools to large-scale civil and
                            MEP works.
                        </p>
                        <p>
                            Our approach is simple: understand our clients’ vision, deliver with precision, and ensure every project reflects both quality and care. With years of
                            expertise, we have become a trusted partner for homeowners, businesses, and developers across the UAE.
                        </p>
                        <h2>Our Story</h2>
                        <p>
                            Founded to bridge creativity and construction, Unique Garden Tech. began with a small team passionate about transforming outdoor environments. Over the
                            years, we’ve expanded our services to include not just landscaping, but also pools, irrigation, and technical works — giving our clients a single
                            partner for all outdoor needs.
                        </p>
                        <p>
                            Today, our portfolio includes villas, residential communities, and corporate projects across Dubai and Sharjah, each built with the same commitment to
                            excellence.
                        </p>
                    </div>
                </div>
                <div className="image-content-wrapper">
                    <Image
                        src="https://raw.githubusercontent.com/gowthamavtech/unique-garden-img/main/02-About-Us/About-Us-Page-Img-1.webp"
                        alt="company banner"
                        width={1920}
                        height={1080}
                        priority
                    />
                </div>
            </section>
            <RequestAQuote />
        </main>
    );
}
