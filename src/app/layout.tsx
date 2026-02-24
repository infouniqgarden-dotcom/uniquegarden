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
import { ReactLenis, useLenis } from "lenis/react";
import GlobalTextReveal from "./components/TextRevealAnimation";

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

const SITE_URL = "https://uniquegarden.vercel.app";

export const metadata: Metadata = {
    title: "Landscaping & Garden Design Dubai | Unique Garden Tech Cont",
    description:
        "Transform your outdoor space with expert landscaping, irrigation, HVAC & MEP services in Dubai & Sharjah. Trusted by luxury villa owners. Get a free quote today!",

    // Basic meta
    keywords: [
        "landscaping Dubai",
        "garden design Dubai",
        "irrigation systems UAE",
        "HVAC services Sharjah",
        "MEP contractor Dubai",
        "luxury villa landscaping",
        "hardscape softscape Dubai",
        "green wall installation UAE",
        "garden maintenance Dubai",
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

    // Open Graph (Facebook, LinkedIn, WhatsApp)
    openGraph: {
        type: "website",
        locale: "en_AE",
        url: SITE_URL,
        title: "Landscaping & Garden Design Dubai | Unique Garden Tech Cont",
        description: "Transform your outdoor space with expert landscaping, irrigation, HVAC & MEP services in Dubai & Sharjah. Trusted by luxury villa owners.",
        siteName: "Unique Garden Tech Cont LLC",
        images: [
            {
                url: "/images/brand-logo.jpg",
                width: 1200,
                height: 630,
                alt: "Unique Garden Tech - Premium Landscaping Services in Dubai",
                type: "image/jpeg",
            },
        ],
    },

    // Twitter Card
    twitter: {
        card: "summary_large_image",
        title: "Landscaping & Garden Design Dubai | Unique Garden Tech Cont",
        description: "Transform your outdoor space with expert landscaping, irrigation, HVAC & MEP services in Dubai & Sharjah. Trusted by luxury villa owners.",
        images: ["/images/brand-logo.jpg"],
        // creator: "@yourtwitterhandle",
    },

    // Favicon and app icons
    // icons: {
    //     icon: "/favicon-16x16.png",
    //     shortcut: "/favicon-16x16.png",
    //     apple: "/favicon-16x16.png",
    // },
    // verification: {
    //     google: "your-google-verification-code",
    // },
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
                            telephone: "+971-6-5222391",
                            address: {
                                "@type": "PostalAddress",
                                addressLocality: "Sharjah",
                                addressCountry: "AE",
                            },
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
