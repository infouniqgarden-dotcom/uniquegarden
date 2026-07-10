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
            <head>
                <noscript>
                    <style>{`
                        .navbar .container,
                        .hero-banner .text-content-wrapper > *,
                        main .widget-wrapper.about-company .text-content,
                        .about-us-ltxt-rimg .text-content .text-content-wrapper > *,
                        .about-us-ltxt-rimg .image-content-wrapper,
                        .text-group .text-content-wrapper > *,
                        .our-services .image-text-card .text-content,
                        .widget-wrapper.why-choose-us .cards-wrapper .card.text-content,
                        .our-projects-text-slider .slider,
                        .widget-wrapper.testimonials .review-cards,
                        .request-a-quote .text-content-wrapper > *,
                        #footer .row-one .column-one > *,
                        #footer .row-one .column-two > div > *,
                        #footer .row-one .column-three .quick-links .overline-3,
                        #footer .row-one .column-three .quick-links ul li,
                        #footer .row-one .column-three .our-services .overline-3,
                        #footer .row-one .column-three .our-services ul li,
                        .mission-vision .text-content,
                        .our-core-values .text-content > .text-content-wrapper > *,
                        .our-core-values .text-content .cards-container .card,
                        .widget-wrapper.bg.our-trade-license > *,
                        .meet-our-team .our-team-wrapper .text-content,
                        .services-lslider-rtext .image-slider,
                        .services-lslider-rtext .text-content-wrapper > *,
                        .services-ltext-rslider .image-slider,
                        .services-ltext-rslider .text-content-wrapper > *,
                        .project-limage-rtext,
                        .project-ltext-rimage,
                        .project-detials .text-content-wrapper > *,
                        .project-image-gallery .text-content-wrapper > *,
                        .project-image-gallery .image-content-wrapper img,
                        section.widget-wrapper.gallery-slider .sliders .swiper,
                        .our-core-values .image-content-wrapper,
                        .careers-job-openings .job-listing .text-content,
                        .widget-wrapper.bg.our-services-multi-icon-text-slider .multi-icon-text-slider .swiper,
                        .contact-form-section .contact-form .form-group {
                            opacity: 1 !important;
                            transform: none !important;
                            animation: none !important;
                        }
                    `}</style>
                </noscript>
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-FP2RTP4Z99" />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', 'G-FP2RTP4Z99');
                        `,
                    }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "LandscapeArchitecture",
                            "@id": "https://uniquegarden.ae/#business",
                            name: "Unique Garden Tech Cont LLC",
                            url: "https://uniquegarden.ae",
                            logo: "https://uniquegarden.ae/images/brand-logo.jpg",
                            image: "https://uniquegarden.ae/images/brand-logo.jpg",
                            telephone: ["+971-6-5222391", "+971-58-604-4013", "+971-55-524-0544"],
                            email: "info@uniquegarden.ae",
                            description: "Premium landscaping, garden design, irrigation, HVAC and MEP services across the UAE.",
                            address: {
                                "@type": "PostalAddress",
                                streetAddress: "No - 02, Building No: 3610, Muweilah",
                                addressLocality: "Sharjah",
                                postalCode: "27960",
                                addressCountry: "AE",
                            },
                            geo: {
                                "@type": "GeoCoordinates",
                                latitude: 25.2889494,
                                longitude: 55.4508824,
                            },
                            areaServed: [
                                { "@type": "City", name: "Dubai" },
                                { "@type": "City", name: "Sharjah" },
                                { "@type": "City", name: "Abu Dhabi" },
                                { "@type": "City", name: "Ras Al Khaimah" },
                            ],
                            priceRange: "$$",
                            openingHoursSpecification: [
                                {
                                    "@type": "OpeningHoursSpecification",
                                    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                                    opens: "09:00",
                                    closes: "17:00",
                                },
                            ],
                            contactPoint: {
                                "@type": "ContactPoint",
                                telephone: "+971-6-5222391",
                                contactType: "customer service",
                                availableLanguage: ["English", "Arabic", "Tamil"],
                            },
                            sameAs: [
                                "https://www.instagram.com/unique_garden_tech_cont/",
                                "https://www.linkedin.com/company/unique-garden-tech-cont-llc/",
                                "https://www.facebook.com/share/1BpbpvVrwk/",
                            ],
                            hasOfferCatalog: {
                                "@type": "OfferCatalog",
                                name: "Landscaping & Construction Services",
                                itemListElement: [
                                    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Softscape & Planting" } },
                                    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Hardscape & Paving" } },
                                    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Irrigation Systems" } },
                                    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pergolas & Gazebos" } },
                                    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Outdoor Lighting" } },
                                    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Vertical Gardens" } },
                                    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Swimming Pools" } },
                                    { "@type": "Offer", itemOffered: { "@type": "Service", name: "MEP Works" } },
                                ],
                            },
                        }),
                    }}
                />
            </head>
            <body className={`${garamond.variable} ${figtree.variable} antialiased `}>
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
