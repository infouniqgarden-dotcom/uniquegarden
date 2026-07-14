import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "../components/Breadcrumb";
import RequestAQuote from "../components/RequestAQuote";

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

const posts = [
    {
        slug: "landscaping-cost-uae",
        title: "How Much Does Landscaping Cost in the UAE? A 2025 Price Guide",
        excerpt:
            "Softscape, hardscape, irrigation, pools, costs vary widely across UAE. Here's a data-driven breakdown of what residential and commercial landscaping actually costs in Dubai and Sharjah.",
        category: "Costs & Planning",
        date: "June 15, 2025",
        readTime: 7,
    },
    {
        slug: "best-plants-uae-gardens",
        title: "Best Plants for UAE Gardens: What Actually Thrives in the Heat",
        excerpt:
            "With summer temperatures hitting 48°C and soil that's mostly sand, plant selection makes or breaks a UAE garden. Here are the trees, shrubs, and groundcovers that genuinely survive.",
        category: "Plant Guide",
        date: "May 10, 2025",
        readTime: 6,
    },
    {
        slug: "softscape-vs-hardscape",
        title: "Softscape vs Hardscape: What's the Difference and What Does Your Garden Need?",
        excerpt:
            "Two terms every UAE homeowner hears when planning a garden. Understanding both helps you design smarter, budget accurately, and get a garden that works in the Gulf climate.",
        category: "Garden Design",
        date: "April 20, 2025",
        readTime: 5,
    },
    {
        slug: "garden-maintenance-dubai-summer",
        title: "How to Maintain Your Garden Through Dubai's Brutal Summer",
        excerpt:
            "From May to September, ground temperatures exceed 60°C. Without the right care strategy, even tough plants fail. Here's exactly what professional landscapers do to keep UAE gardens alive.",
        category: "Maintenance",
        date: "March 5, 2025",
        readTime: 6,
    },
    {
        slug: "irrigation-systems-uae",
        title: "Irrigation Systems in the UAE: Drip vs Sprinkler, Complete 2025 Guide",
        excerpt:
            "The right irrigation system can cut water bills by 40–60% in UAE gardens. Here's how drip and sprinkler systems compare, with real cost data, smart controller options, and DEWA regulations.",
        category: "Irrigation",
        date: "February 8, 2025",
        readTime: 7,
    },
];

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
                        <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-card">
                            <div className="blog-card-content">
                                <div className="blog-card-meta">
                                    <span className="category-tag">{post.category}</span>
                                    <span className="read-time">{post.readTime} min read</span>
                                </div>
                                <div className="blog-card-title">
                                    <h3>{post.title}</h3>
                                </div>
                                <p className="blog-card-excerpt p-sm">{post.excerpt}</p>
                                <div className="blog-card-footer">
                                    <span className="post-date">{post.date}</span>
                                    <span className="read-more-link">
                                        Read more
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path
                                                d="M3 8h10M9 4l4 4-4 4"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            <RequestAQuote />
        </main>
    );
}
