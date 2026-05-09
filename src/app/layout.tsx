import type { Metadata } from "next";
import { EB_Garamond, Figtree } from "next/font/google";
import "./globals.css";
import "./styles/typography.css";
import "./styles/spacings.scss";
import "./styles/components/components.scss";
import "./styles/buttons.scss";
import "./styles/swiper.scss";
import "./styles/scrollbar.scss";
import Navbar from "./components/Navbar/Navbar";
import MobileClassHandler from "./components/MobileClassHandler";
import Footer from "./components/Footer/footer";
import GlobalAnimations from "./components/GlobalAnimations";
import { ReactLenis } from "lenis/react";

const figtree = Figtree({
    subsets: ["latin"],
    weight: ["400", "500", "600"],
    variable: "--font-figtree",
    display: "swap",
});

const garamond = EB_Garamond({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-garamond",
    display: "swap",
});

export const viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
};

const SITE_URL = "https://uniquegarden.ae";

export const metadata: Metadata = {
    title: "Landscaping & Garden Design UAE | Unique Garden Tech Cont",
    description:
        "Premium landscaping, irrigation, HVAC & MEP services across the UAE. Unique Garden Tech transforms villas and commercial properties with expert outdoor design. Get a free quote today!",

    keywords: [
        "landscaping UAE",
        "landscaping Dubai",
        "garden design UAE",
        "garden design Dubai",
        "irrigation systems UAE",
        "HVAC services UAE",
        "MEP contractor UAE",
        "luxury villa landscaping UAE",
        "hardscape softscape Dubai",
        "pergola installation UAE",
        "outdoor lighting UAE",
        "vertical garden UAE",
        "pebble garden design UAE",
        "softscape contractor UAE",
        "garden maintenance UAE",
    ],
    authors: [{ name: "Unique Garden Tech Cont LLC" }],
    creator: "Unique Garden Tech Cont LLC",
    publisher: "Unique Garden Tech Cont LLC",

    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    alternates: {
        canonical: SITE_URL,
    },

    openGraph: {
        type: "website",
        locale: "en_AE",
        url: SITE_URL,
        title: "Landscaping & Garden Design UAE | Unique Garden Tech Cont",
        description: "Premium landscaping, irrigation, HVAC & MEP services across the UAE. Transforming villas and commercial properties with expert outdoor design.",
        siteName: "Unique Garden Tech Cont LLC",
        images: [
            {
                url: "https://uniquegarden.ae/images/brand-logo.jpg",
                width: 1200,
                height: 630,
                alt: "Unique Garden Tech - Premium Landscaping Services UAE",
                type: "image/jpeg",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Landscaping & Garden Design UAE | Unique Garden Tech Cont",
        description: "Premium landscaping, irrigation, HVAC & MEP services across the UAE. Get a free quote today!",
        images: ["https://uniquegarden.ae/images/brand-logo.jpg"],
    },

    icons: {
        icon: [
            { url: "/favicon.ico", sizes: "any" },
            { url: "/icon.png", type: "image/png", sizes: "32x32" },
        ],
        apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${garamond.variable} ${figtree.variable} antialiased `}>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "LocalBusiness",
                            name: "Unique Garden Tech Cont LLC",
                            url: "https://uniquegarden.ae",
                            telephone: "+971-6-5222391",
                            description: "Premium landscaping, garden design, irrigation, HVAC and MEP services across the UAE.",
                            image: "https://uniquegarden.ae/images/brand-logo.jpg",
                            address: {
                                "@type": "PostalAddress",
                                streetAddress: "No - 02, Building No: 3610, Muweilah",
                                addressLocality: "Sharjah",
                                postalCode: "27960",
                                addressCountry: "AE",
                            },
                            areaServed: {
                                "@type": "Country",
                                name: "United Arab Emirates",
                            },
                            priceRange: "$$",
                            knowsAbout: [
                                "Landscaping",
                                "Garden Design",
                                "Irrigation Systems",
                                "HVAC",
                                "MEP",
                                "Hardscape",
                                "Softscape",
                                "Pergola Construction",
                                "Outdoor Lighting",
                                "Vertical Gardens",
                            ],
                        }),
                    }}
                />
                <MobileClassHandler />
                <Navbar />
                {children}
                <GlobalAnimations />
                {/* <GlobalTextReveal /> */}
                <ReactLenis root />
                <Footer />
            </body>
        </html>
    );
}
