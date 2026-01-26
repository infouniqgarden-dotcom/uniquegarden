import type { Metadata } from "next";
import { EB_Garamond, Figtree } from "next/font/google";
import "./globals.css";
import "./styles/typography.css";
import "./styles/spacings.scss";
import "./styles/components/components.scss";
import "./styles/buttons.scss";
import "./styles/swiper.scss";
import Navbar from "./components/Navbar/Navbar";
import MobileClassHandler from "./components/MobileClassHandler";
import Footer from "./components/Footer/footer";

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

const SITE_URL = "https://gowthamavtech.github.io/unique-garden/";

export const metadata: Metadata = {
    title: "Unique Garden Tech | Landscape & HVAC Services in Dubai, UAE",
    description:
        "Professional landscaping, irrigation, HVAC, and MEP solutions in Dubai. Serving Emirates Hills, Jumeirah, and across UAE since 2022. Expert hardscape, softscape & maintenance.",

    // Basic meta
    keywords:
        "landscaping Dubai, HVAC services UAE, irrigation systems, hardscape Dubai, landscape maintenance, vertical gardens Dubai",
    authors: [{ name: "Unique Garden Tech Cont LLC" }],

    // Open Graph (Facebook, LinkedIn, WhatsApp)
    openGraph: {
        title: "Unique Garden Tech | Landscape & HVAC Services in Dubai",
        description: "Transform your outdoor spaces...",
        url: SITE_URL,
        siteName: "Unique Garden Tech",
        locale: "en_AE",
        type: "website",
        images: [
            {
                url: "https://raw.githubusercontent.com/gowthamavtech/unique-garden-img/main/brand-logo.jpg",
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
        title: "Unique Garden Tech | Landscape Services Dubai",
        description: "Professional landscaping and HVAC solutions",
        images: [
            "https://raw.githubusercontent.com/gowthamavtech/unique-garden-img/main/brand-logo.jpg",
        ],
        // creator: "@yourtwitterhandle",
    },

    // Favicon and app icons
    icons: {
        icon: "./favicon-16x16.png",
        shortcut: "./favicon-16x16.png",
        apple: "./favicon-16x16.png",
    },

    // Canonical URL
    alternates: {
        canonical: "https://uniquegardentech.ae",
    },

    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    // verification: {
    //     google: "your-google-verification-code",
    // },
};

let viewportWidth: number | undefined = undefined;
if (typeof window !== "undefined") {
    viewportWidth = window.innerWidth;
    console.log("Viewport width:", viewportWidth);
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${garamond.variable} ${figtree.variable} antialiased ${
                    viewportWidth && viewportWidth <= 768 ? "mobile" : ""
                }`}
            >
                <MobileClassHandler />
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
