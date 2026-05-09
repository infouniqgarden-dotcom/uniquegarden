import type { Metadata } from "next";
import Link from "next/link";
import GallerySlider from "../components/GallerySlider";

const SITE_URL = "https://uniquegarden.ae/gallery";

export const metadata: Metadata = {
    title: "Landscaping Gallery UAE | Our Work | Unique Garden Tech",
    description: "View Unique Garden Tech's gallery of completed landscaping, garden design, hardscape, and outdoor construction projects across the UAE.",
    keywords: [
        "landscaping gallery UAE",
        "garden design gallery Dubai",
        "outdoor construction gallery UAE",
        "villa landscaping photos UAE",
        "hardscape gallery UAE",
        "landscaping portfolio UAE",
    ],
    alternates: { canonical: SITE_URL },
    openGraph: {
        type: "website",
        locale: "en_AE",
        url: SITE_URL,
        title: "Landscaping Gallery UAE | Our Work | Unique Garden Tech",
        description: "View our gallery of completed landscaping and outdoor construction projects across the UAE.",
        siteName: "Unique Garden Tech Cont LLC",
        images: [{ url: "https://uniquegarden.ae/images/brand-logo.jpg", width: 1200, height: 630, alt: "Unique Garden Tech Gallery UAE", type: "image/jpeg" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Landscaping Gallery UAE | Unique Garden Tech",
        description: "View our gallery of completed landscaping and outdoor construction projects across the UAE.",
        images: ["https://uniquegarden.ae/images/brand-logo.jpg"],
    },
};

export default function Gallery() {
    return (
        <main className="gallery-page">
            <section className="widget-wrapper gallery-slider">
                <div className="widget-wrapper text-group">
                    <div className="text-content-wrapper">
                        <h2>Wall of Works</h2>
                        <p>
                            Our gallery is a reflection of what we build and believe in. Each project displayed here demonstrates our expertise, style, and pursuit of excellence.
                            Take a look around and discover how we turn vision into reality.
                        </p>
                        <Link href="/" className="btn">
                            Go to home
                        </Link>
                    </div>
                </div>

                <div className="widget-wrapper sliders">
                    <GallerySlider row="row1" reverseDirection={true} />
                    <GallerySlider row="row2" reverseDirection={false} />
                </div>
            </section>
        </main>
    );
}
