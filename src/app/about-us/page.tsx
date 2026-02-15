import Image from "next/image";
import RequestAQuote from "../components/RequestAQuote";
import MeetOurTeam from "../components/MeetOurTeam";
import { Metadata } from "next";

const SITE_URL = "https://gowthamavtech.github.io/unique-garden/";

export const metadata: Metadata = {
    title: "About Us - Leading Landscaping Company in Dubai | Unique Garden Tech",
    description: "Learn about Unique Garden Tech Cont LLC, a licensed Dubai landscaping company. 30+ projects across Emirates Hills, Palm Jumeirah & Dubai Hills since 2021.",
    keywords: [
        "about landscaping company Dubai",
        "landscaping contractor UAE",
        "garden design company Dubai",
        "licensed landscaping Sharjah",
        "landscaping company history",
        "Dubai landscape architects",
    ],
    alternates: {
        canonical: SITE_URL,
    },
    openGraph: {
        type: "website",
        locale: "en_AE",
        url: SITE_URL,
        title: "About Us - Leading Landscaping Company in Dubai | Unique Garden Tech",
        description: "Learn about Unique Garden Tech Cont LLC, a licensed Dubai landscaping company with 30+ projects across Emirates Hills and Palm Jumeirah.",
        siteName: "Unique Garden Tech Cont LLC",
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
    twitter: {
        card: "summary_large_image",
        title: "About Us - Leading Landscaping Company in Dubai",
        description: "Licensed Dubai landscaping company with 30+ projects across Emirates Hills, Palm Jumeirah & Dubai Hills since 2021.",
        images: ["https://raw.githubusercontent.com/gowthamavtech/unique-garden-img/main/brand-logo.jpg"],
    },
};

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
            <section className="widget-wrapper bg mission-vision">
                <div className="text-content">
                    <div className="icon-wrapper">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                            <path
                                d="M34 24C34 25.9778 33.4135 27.9112 32.3147 29.5557C31.2159 31.2002 29.6541 32.4819 27.8268 33.2388C25.9996 33.9957 23.9889 34.1937 22.0491 33.8079C20.1093 33.422 18.3275 32.4696 16.9289 31.0711C15.5304 29.6725 14.578 27.8907 14.1922 25.9509C13.8063 24.0111 14.0043 22.0004 14.7612 20.1732C15.5181 18.3459 16.7998 16.7841 18.4443 15.6853C20.0888 14.5865 22.0222 14 24 14"
                                stroke="white"
                                strokeWidth="3"
                                strokeLinecap="round"
                            />
                            <path
                                d="M28 4.4C26.7067 4.136 25.3733 4.00267 24 4C12.954 4 4 12.954 4 24C4 35.046 12.954 44 24 44C35.046 44 44 35.046 44 24C43.9973 22.6267 43.864 21.2933 43.6 20"
                                stroke="white"
                                strokeWidth="3"
                                strokeLinecap="round"
                            />
                            <path
                                opacity="0.16"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M44 24C44 35.046 35.046 44 24 44C12.954 44 4 35.046 4 24C4 12.954 12.954 4 24 4C27.722 4 31.208 5.016 34.192 6.788C32.708 8.338 32.076 10.458 32.558 12.302L33.208 14.794L35.698 15.444C37.542 15.924 39.662 15.292 41.212 13.81C43.0424 16.8934 44.0057 20.4142 44 24ZM34 24C34 26.6522 32.9464 29.1957 31.0711 31.0711C29.1957 32.9464 26.6522 34 24 34C21.3478 34 18.8043 32.9464 16.9289 31.0711C15.0536 29.1957 14 26.6522 14 24C14 21.3478 15.0536 18.8043 16.9289 16.9289C18.8043 15.0536 21.3478 14 24 14C26.6522 14 29.1957 15.0536 31.0711 16.9289C32.9464 18.8043 34 21.3478 34 24Z"
                                fill="white"
                            />
                            <path
                                d="M33.206 14.7939L24 23.9999M33.206 14.7939L32.556 12.3019C32.064 10.4159 32.738 8.23785 34.296 6.67785L36.596 4.37985C37.208 3.76785 38.156 3.91985 38.35 4.65985L39.382 8.61985L43.34 9.64985C44.08 9.84385 44.232 10.7899 43.62 11.4039L41.32 13.7039C39.76 15.2619 37.584 15.9359 35.698 15.4439L33.206 14.7939Z"
                                stroke="white"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                    <div className="text-content-wrapper">
                        <h2>MISSION</h2>
                        <p>Deliver innovative landscaping and construction solutions that enhance outdoor living with durability and client satisfaction.</p>
                    </div>
                </div>
                <div className="text-content">
                    <div className="icon-wrapper">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                            <path
                                d="M19 13C19.984 11.988 22.6 8 24 8M24 8C25.4 8 28.016 11.988 29 13M24 8V20"
                                stroke="white"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M36.726 21.2734L33.9 24.0994M6 33.9994H10M11.274 21.2734L14.1 24.0994M42 33.9994H38M42 39.9994H6"
                                stroke="white"
                                strokeWidth="3"
                                strokeLinecap="round"
                            />
                            <path
                                opacity="0.16"
                                d="M24 26C21.8783 26 19.8434 26.8429 18.3431 28.3431C16.8429 29.8434 16 31.8783 16 34H32C32 31.8783 31.1571 29.8434 29.6569 28.3431C28.1566 26.8429 26.1217 26 24 26Z"
                                fill="white"
                            />
                            <path
                                d="M32 34C32 31.8783 31.1571 29.8434 29.6569 28.3431C28.1566 26.8429 26.1217 26 24 26C21.8783 26 19.8434 26.8429 18.3431 28.3431C16.8429 29.8434 16 31.8783 16 34"
                                stroke="white"
                                strokeWidth="3"
                                strokeLinecap="round"
                            />
                        </svg>
                    </div>
                    <div className="text-content-wrapper">
                        <h2>VISION</h2>
                        <p>Become the UAE’s most trusted landscaping partner, known for quality, reliability, and long-term value.</p>
                    </div>
                </div>
            </section>
            <section className="widget-wrapper our-core-values">
                <div className="image-content-wrapper">
                    <Image
                        src="https://raw.githubusercontent.com/gowthamavtech/unique-garden-img/main/02-About-Us/About-Us-Page-Img-2.webp"
                        alt="company banner"
                        width={1920}
                        height={1080}
                        priority
                    />
                </div>
                <div className="text-content">
                    <div className="text-content-wrapper">
                        <h2>Our Core Values</h2>
                        <p>Guided by strong principles, we focus on thoughtful design, reliable execution, and enduring results in every project we take on.</p>
                    </div>
                    <div className="cards-container">
                        <div className="card">
                            <div className="icon-wrapper">
                                <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
                                    <path
                                        opacity="0.32"
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M8.52734 27.8204C8.52734 26.1116 8.86393 24.4194 9.51789 22.8406C10.1718 21.2619 11.1304 19.8273 12.3387 18.619C13.5471 17.4106 14.9816 16.4521 16.5604 15.7982C18.1392 15.1442 19.8313 14.8076 21.5402 14.8076C23.249 14.8076 24.9412 15.1442 26.52 15.7982C28.0987 16.4521 29.5333 17.4106 30.7416 18.619C31.95 19.8273 32.9085 21.2619 33.5624 22.8406C34.2164 24.4194 34.553 26.1116 34.553 27.8204C34.553 31.2717 33.182 34.5815 30.7416 37.0219C28.3012 39.4623 24.9914 40.8333 21.5402 40.8333C18.089 40.8333 14.7791 39.4623 12.3387 37.0219C9.89833 34.5815 8.52734 31.2717 8.52734 27.8204Z"
                                        fill="#027833"
                                    />
                                    <path
                                        d="M28.5916 4.70651C28.6792 4.48766 28.7228 4.2537 28.7199 4.018C28.7171 3.78229 28.6678 3.54946 28.575 3.33279C28.4822 3.11612 28.3476 2.91986 28.1789 2.75521C28.0102 2.59056 27.8107 2.46074 27.5919 2.37318C27.373 2.28561 27.1391 2.24201 26.9034 2.24486C26.6677 2.24772 26.4348 2.29697 26.2182 2.3898C25.7806 2.57729 25.4354 2.93093 25.2586 3.37292L23.4637 7.8601C23.2868 8.30209 23.2928 8.79624 23.4803 9.23382C23.6678 9.67141 24.0214 10.0166 24.4634 10.1934C24.9054 10.3703 25.3996 10.3643 25.8372 10.1768C26.2747 9.98932 26.6199 9.63568 26.7968 9.19369L28.5916 4.70651ZM18.7037 3.33164C18.5161 2.89393 18.1624 2.54865 17.7203 2.37177C17.2781 2.19488 16.7838 2.20088 16.3461 2.38843C15.9084 2.57599 15.5631 2.92974 15.3863 3.37187C15.2094 3.814 15.2154 4.30829 15.4029 4.746L19.7663 14.9283C21.0719 14.7497 22.3971 14.769 23.697 14.9857L18.7037 3.33164ZM29.0493 17.1916C28.0677 16.4953 26.9935 15.9395 25.858 15.5404L31.5801 3.28138C31.6758 3.06173 31.8144 2.86344 31.9879 2.69822C32.1614 2.533 32.3662 2.40418 32.5903 2.31937C32.8144 2.23455 33.0531 2.19545 33.2925 2.20437C33.532 2.21329 33.7672 2.27005 33.9843 2.37131C34.2014 2.47256 34.3961 2.61627 34.5568 2.79394C34.7175 2.97162 34.841 3.17967 34.9201 3.40583C34.9991 3.632 35.0321 3.8717 35.017 4.11081C35.002 4.34991 34.9392 4.58359 34.8324 4.79805L29.0493 17.1916ZM14.0298 17.1916L8.24676 4.79805C8.14277 4.58395 8.08241 4.3513 8.06918 4.11364C8.05595 3.87599 8.09012 3.63808 8.16971 3.41376C8.24929 3.18943 8.3727 2.98318 8.53275 2.807C8.6928 2.63082 8.88629 2.48824 9.10196 2.38754C9.31763 2.28685 9.55118 2.23006 9.78901 2.22047C10.0268 2.21089 10.2642 2.2487 10.4873 2.33172C10.7103 2.41473 10.9147 2.54128 11.0884 2.70401C11.2621 2.86674 11.4017 3.0624 11.4991 3.27959L17.2211 15.5439C16.0857 15.9431 15.0115 16.4989 14.0298 17.1952"
                                        fill="#027833"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M22.2465 22.1877C22.4414 22.3085 22.6023 22.4771 22.7138 22.6775C22.8253 22.8779 22.8838 23.1035 22.8837 23.3328V30.961H23.3324C23.6894 30.961 24.0318 31.1028 24.2843 31.3553C24.5367 31.6078 24.6785 31.9502 24.6785 32.3072C24.6785 32.6642 24.5367 33.0066 24.2843 33.259C24.0318 33.5115 23.6894 33.6533 23.3324 33.6533H19.7426C19.3856 33.6533 19.0432 33.5115 18.7908 33.259C18.5383 33.0066 18.3965 32.6642 18.3965 32.3072C18.3965 31.9502 18.5383 31.6078 18.7908 31.3553C19.0432 31.1028 19.3856 30.961 19.7426 30.961H20.1914V25.4992C19.8684 25.6129 19.5143 25.5993 19.201 25.4612C18.8878 25.323 18.6389 25.0707 18.5051 24.7555C18.3713 24.4404 18.3627 24.0861 18.4809 23.7648C18.5991 23.4434 18.8352 23.1792 19.1414 23.0259L20.9362 22.1285C21.1416 22.0258 21.3697 21.9773 21.5991 21.9877C21.8284 21.9981 22.0513 22.0669 22.2465 22.1877Z"
                                        fill="#027833"
                                    />
                                </svg>
                            </div>
                            <div className="text-content-wrapper">
                                <h3>Quality First</h3>
                                <p>Every detail matters in design and execution.</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="icon-wrapper">
                                <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M36.9313 18.1913C37.3854 18.238 37.8987 18.3852 38.3403 18.8124C38.789 19.2449 38.9523 19.7583 39.008 20.2195C39.051 20.5857 39.0295 21.0811 39.0133 21.458C38.8572 25.1949 37.94 29.8275 35.4774 32.9542C34.2175 34.5534 32.5303 35.7847 30.3441 36.2424C28.5672 36.6139 26.5623 36.4542 24.3223 35.7039C26.3635 33.1435 28.7862 30.9122 31.5054 29.088C31.7015 28.9572 31.8699 28.789 32.001 28.5931C32.1322 28.3972 32.2234 28.1774 32.2696 27.9462C32.3157 27.7151 32.3159 27.4771 32.2701 27.2458C32.2243 27.0146 32.1334 26.7946 32.0026 26.5985C31.8718 26.4024 31.7036 26.234 31.5077 26.1029C31.3118 25.9717 31.092 25.8805 30.8608 25.8343C30.6296 25.7882 30.3916 25.788 30.1604 25.8338C29.9292 25.8796 29.7092 25.9705 29.5131 26.1013C26.5394 28.0954 23.8841 30.5274 21.6372 33.3149C20.7433 30.9636 20.5244 28.8547 20.9031 26.988C21.3446 24.8162 22.5687 23.129 24.1608 21.8618C27.2731 19.3849 31.9146 18.4049 35.6874 18.2021C36.1013 18.1697 36.5169 18.1662 36.9313 18.1913ZM18.1821 38.3747C19.1946 36.5977 20.3502 34.9044 21.6372 33.3149C21.7772 33.6835 21.9327 34.0586 22.1039 34.4367C22.2416 34.7404 22.4872 34.9822 22.7931 35.1152C23.3136 35.3425 23.8239 35.5394 24.3241 35.7057C23.2867 36.998 22.26 38.4752 21.2998 40.157C21.0634 40.5704 20.6725 40.873 20.213 40.9982C19.7536 41.1234 19.2632 41.061 18.8498 40.8247C18.4363 40.5883 18.1337 40.1974 18.0085 39.7379C17.8833 39.2785 17.9457 38.7881 18.1821 38.3747Z"
                                        fill="#027833"
                                    />
                                    <path
                                        opacity="0.32"
                                        d="M24.7142 3.9406C23.3541 2.70445 21.5821 2.01953 19.7442 2.01953C17.9063 2.01953 16.1343 2.70445 14.7742 3.9406C12.6096 5.90598 9.95317 8.61983 7.82804 11.7357C5.71547 14.8355 4.03906 18.4647 4.03906 22.2303C4.03906 28.2575 8.10983 34.7944 15.0775 36.7868C15.4347 36.8873 15.6124 36.9375 15.7811 36.8711C15.9498 36.8047 16.0539 36.636 16.2568 36.2968C16.9209 35.1983 17.6155 34.1788 18.3119 33.2275C18.468 33.0157 18.5452 32.9098 18.5685 32.7932C18.5919 32.6747 18.5578 32.5419 18.4914 32.2798C17.9834 30.2696 17.8901 28.3185 18.2688 26.4519C18.8611 23.5442 20.5016 21.3383 22.4868 19.757C25.2921 17.526 28.9573 16.3826 32.2903 15.8585C32.8719 15.767 33.1627 15.7203 33.2937 15.5444C33.3285 15.4965 33.3552 15.4431 33.3727 15.3865C33.4409 15.1783 33.3116 14.9198 33.055 14.4083C30.8473 10.1832 27.4891 6.4606 24.7142 3.9406Z"
                                        fill="#027833"
                                    />
                                </svg>
                            </div>
                            <div className="text-content-wrapper">
                                <h3>Sustainability</h3>
                                <p>Using eco-friendly methods suited to the UAE climate. Using eco-friendly methods suited.</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="icon-wrapper">
                                <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
                                    <path
                                        opacity="0.4"
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M15.2563 11.2178C15.6133 11.2178 15.9557 11.3596 16.2082 11.6121C16.4606 11.8645 16.6025 12.2069 16.6025 12.5639V16.1537C16.6025 17.4628 17.1225 18.7182 18.0482 19.6439C18.9738 20.5695 20.2293 21.0896 21.5384 21.0896C22.8474 21.0896 24.1029 20.5695 25.0286 19.6439C25.9542 18.7182 26.4743 17.4628 26.4743 16.1537V12.5639C26.4743 12.2069 26.6161 11.8645 26.8685 11.6121C27.121 11.3596 27.4634 11.2178 27.8204 11.2178C28.1774 11.2178 28.5198 11.3596 28.7723 11.6121C29.0247 11.8645 29.1666 12.2069 29.1666 12.5639V16.1537C29.1666 18.1768 28.3629 20.1171 26.9323 21.5476C25.5018 22.9782 23.5615 23.7819 21.5384 23.7819C19.5152 23.7819 17.575 22.9782 16.1444 21.5476C14.7138 20.1171 13.9102 18.1768 13.9102 16.1537V12.5639C13.9102 12.2069 14.052 11.8645 14.3044 11.6121C14.5569 11.3596 14.8993 11.2178 15.2563 11.2178Z"
                                        fill="#027833"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M21.5395 2.24414C21.8965 2.24414 22.2389 2.38597 22.4914 2.63842C22.7438 2.89087 22.8857 3.23327 22.8857 3.59029V8.97491C22.8857 9.33193 22.7438 9.67433 22.4914 9.92678C22.2389 10.1792 21.8965 10.3211 21.5395 10.3211C21.1825 10.3211 20.8401 10.1792 20.5876 9.92678C20.3352 9.67433 20.1934 9.33193 20.1934 8.97491V3.59029C20.1934 3.23327 20.3352 2.89087 20.5876 2.63842C20.8401 2.38597 21.1825 2.24414 21.5395 2.24414Z"
                                        fill="#027833"
                                    />
                                    <path
                                        d="M20.1922 5.05491C18.5061 5.35706 16.9708 6.21788 15.8335 7.49875C14.6963 8.77962 14.0232 10.406 13.9227 12.1159H13.4614C13.1044 12.1159 12.762 12.2578 12.5095 12.5102C12.2571 12.7627 12.1152 13.1051 12.1152 13.4621C12.1152 13.8191 12.2571 14.1615 12.5095 14.414C12.762 14.6664 13.1044 14.8082 13.4614 14.8082H29.6152C29.9723 14.8082 30.3147 14.6664 30.5671 14.414C30.8196 14.1615 30.9614 13.8191 30.9614 13.4621C30.9614 13.1051 30.8196 12.7627 30.5671 12.5102C30.3147 12.2578 29.9723 12.1159 29.6152 12.1159H29.154C29.0535 10.406 28.3804 8.77962 27.2431 7.49875C26.1058 6.21788 24.5705 5.35706 22.8845 5.05491V3.59029C22.8845 3.23327 22.7426 2.89087 22.4902 2.63842C22.2377 2.38597 21.8953 2.24414 21.5383 2.24414C21.1813 2.24414 20.8389 2.38597 20.5864 2.63842C20.334 2.89087 20.1922 3.23327 20.1922 3.59029V5.05491Z"
                                        fill="#027833"
                                    />
                                    <path
                                        opacity="0.4"
                                        d="M17.9492 25.5771C18.3061 25.5775 18.6483 25.7195 18.9005 25.972L21.539 28.6105L24.1774 25.972C24.4296 25.7195 24.7718 25.5775 25.1287 25.5771H29.6841C30.8866 25.5771 31.89 25.5771 32.7013 25.6597C33.5502 25.7459 34.34 25.9343 35.0508 26.41C35.5892 26.7689 36.0523 27.232 36.4131 27.7705C36.8869 28.4813 37.0754 29.271 37.1615 30.12C37.2441 30.9313 37.2441 32.0728 37.2441 33.2736C37.2441 34.4761 37.2441 35.4795 37.1615 36.2907C37.0754 37.1397 36.8869 37.9295 36.4113 38.6402C36.0523 39.1787 35.5892 39.6418 35.0508 40.0025C34.34 40.4764 33.552 40.6648 32.7013 40.751C31.89 40.8336 30.8866 40.8336 29.6859 40.8336H13.392C12.1895 40.8336 11.1861 40.8336 10.3749 40.751C9.52588 40.6648 8.73613 40.4764 8.02536 40.0007C7.48783 39.6393 7.02523 39.1773 6.66306 38.6402C6.18921 37.9295 6.00075 37.1415 5.9146 36.2907C5.83203 35.4795 5.83203 34.4761 5.83203 33.2754C5.83203 32.0728 5.83203 30.9313 5.9146 30.12C6.00075 29.271 6.18921 28.4813 6.66306 27.7705C7.02383 27.232 7.4869 26.7689 8.02716 26.41C8.73613 25.9343 9.52588 25.7459 10.3749 25.6597C11.1861 25.5771 12.1895 25.5771 13.3902 25.5771H17.9492Z"
                                        fill="#027833"
                                    />
                                    <path
                                        d="M11.2188 25.6023C11.8541 25.5771 12.5775 25.5771 13.3941 25.5771H13.9111V40.8336H13.3941C12.5775 40.8336 11.8541 40.8336 11.2188 40.8084V25.6023ZM29.1675 40.8336V25.5771H29.6844C30.5011 25.5771 31.2244 25.5771 31.8598 25.6023V40.8084C31.2244 40.8336 30.5011 40.8336 29.6844 40.8336H29.1675Z"
                                        fill="#027833"
                                    />
                                </svg>
                            </div>
                            <div className="text-content-wrapper">
                                <h3>Expertise</h3>
                                <p>Combining creativity with technical know-how. Combining creativity with technical.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="widget-wrapper bg our-trade-license">
                <div className="text-content-wrapper">
                    <h2>Our Trade License</h2>
                    <p>We are a registered landscaping and construction company in Sharjah, UAE. View or download our trade license for verification.</p>
                </div>
                <div className="two-buttons">
                    <a className="btn btn-secondary" href="/documents/Unique-Garden-Trading-License.pdf" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M19 13.0052V10.6606C19 9.84276 19 9.43383 18.8478 9.06613C18.6955 8.69843 18.4065 8.40927 17.8284 7.83096L13.0919 3.09236C12.593 2.59325 12.3436 2.3437 12.0345 2.19583C11.9702 2.16508 11.9044 2.13778 11.8372 2.11406C11.5141 2 11.1614 2 10.4558 2C7.21082 2 5.58831 2 4.48933 2.88646C4.26731 3.06554 4.06508 3.26787 3.88607 3.48998C3 4.58943 3 6.21265 3 9.45908V14.0052C3 17.7781 3 19.6645 4.17157 20.8366C5.11466 21.7801 6.52043 21.9641 9 22M12 2.50022V3.00043C12 5.83009 12 7.24492 12.8787 8.12398C13.7574 9.00304 15.1716 9.00304 18 9.00304H18.5"
                                stroke="#027833"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M16 22C18.7614 22 21 19 21 19C21 19 18.7614 16 16 16C13.2386 16 11 19 11 19C11 19 13.2386 22 16 22Z"
                                stroke="#027833"
                                strokeWidth="2"
                                strokeLinejoin="round"
                            />
                            <path d="M15.9902 19H15.9992" stroke="#027833" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        View
                    </a>
                    <a className="btn" href="/documents/Unique-Garden-Trading-License.pdf" download="Unique-Garden-Trading-Licence.pdf">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M3.36133 6.6002C3.99836 7.25558 5.69384 9.8402 6.60133 9.8402C7.50882 9.8402 9.2043 7.25558 9.84133 6.6002M6.60133 8.7602V1.2002"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M3.36133 13.0802V14.7479C3.36133 18.2525 3.36133 20.0048 4.31828 21.1918C4.51161 21.4315 4.73002 21.6499 4.9698 21.8432C6.1567 22.8002 7.90901 22.8002 11.4136 22.8002C12.1756 22.8002 12.5566 22.8002 12.9055 22.6771C12.9781 22.6515 13.0491 22.622 13.1186 22.5888C13.4524 22.4291 13.7218 22.1598 14.2606 21.6209L19.376 16.5055C20.0003 15.8812 20.3125 15.5691 20.477 15.172C20.6413 14.7751 20.6413 14.3336 20.6413 13.4507V9.8402C20.6413 5.76726 20.6413 3.7308 19.376 2.46549C18.1108 1.2002 16.0742 1.2002 12.0013 1.2002M13.0813 22.2602V21.7202C13.0813 18.6655 13.0813 17.1382 14.0303 16.1892C14.9793 15.2402 16.5067 15.2402 19.5613 15.2402H20.1013"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        Download
                    </a>
                </div>
            </section>
            <MeetOurTeam />
            <RequestAQuote />
        </main>
    );
}
