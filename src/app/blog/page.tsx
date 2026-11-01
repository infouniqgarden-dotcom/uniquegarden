import type { Metadata } from "next";
import Image from "next/image";
import Breadcrumb from "../components/Breadcrumb";
import RequestAQuote from "../components/RequestAQuote";
import BlogCard from "../components/BlogCard";
import { posts } from "./posts";

const SITE_URL = "https://uniquegarden.ae/blog";

export const metadata: Metadata = {
    title: "Landscaping Blog & Guides UAE | Unique Garden Tech",
    description:
        "Expert landscaping guides for UAE homeowners. Garden costs, plant guides, irrigation systems, and seasonal maintenance tips for Dubai and Sharjah.",
    keywords: [
        "landscaping blog UAE",
        "garden design tips Dubai",
        "UAE landscaping cost guide",
        "best plants UAE",
        "irrigation systems UAE",
        "garden maintenance Dubai",
        "softscape hardscape UAE",
        "landscaping guides Sharjah",
    ],
    alternates: {
        canonical: SITE_URL,
    },
    openGraph: {
        type: "website",
        locale: "en_AE",
        url: SITE_URL,
        title: "Landscaping Blog & Guides UAE | Unique Garden Tech",
        description:
            "Expert landscaping guides for UAE homeowners. Garden costs, plant guides, irrigation systems, and seasonal maintenance tips for Dubai and Sharjah.",
        siteName: "Unique Garden Tech Cont LLC",
        images: [
            {
                url: "https://uniquegarden.ae/images/brand-logo.jpg",
                width: 1200,
                height: 630,
                alt: "Unique Garden Tech - UAE Landscaping Blog",
                type: "image/jpeg",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Landscaping Blog & Guides UAE | Unique Garden Tech",
        description:
            "Expert landscaping guides for UAE homeowners. Garden costs, plant guides, irrigation systems, and seasonal maintenance tips for Dubai and Sharjah.",
        images: ["https://uniquegarden.ae/images/brand-logo.jpg"],
    },
};

export default function BlogPage() {
    return (
        <main className="blog-page">
            <section className="widget-wrapper hero-banner">
                <div className="image-content-wrapper">
                    <Image
                        src="/images/01-home-page/hp-hero-img.webp"
                        alt="Unique Garden Tech, Landscaping insights and guides for UAE"
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
                        <p className="overline-1">Resources</p>
                        <h1>Insights &amp; Guides</h1>
                        <p>
                            Expert answers to the most searched questions about landscaping, garden design, and outdoor
                            construction in the UAE.
                        </p>
                    </div>
                </div>
            </section>

            <Breadcrumb items={[{ label: "Blog" }]} />

            <section className="widget-wrapper blog-grid-section">
                <div className="blog-grid">
                    {posts.map((post) => (
                        <BlogCard key={post.slug} post={post} />
                    ))}
                </div>
            </section>

            <RequestAQuote />
        </main>
    );
}
