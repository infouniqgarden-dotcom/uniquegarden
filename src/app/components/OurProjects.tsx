"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function OurProjects() {
    return (
        <section className="widget-wrapper our-projects-text-slider" id="our-projects">
            <div className="widget-wrapper text-group">
                <div className="text-content-wrapper">
                    <div className="overline-1">Our Projects</div>
                    <h2>Recent Work Across Dubai & Sharjah</h2>
                    <p>Explore some of our featured landscaping, pool, and civil work projects.</p>
                    <Link href="/projects" className="btn">
                        View all projects
                    </Link>
                </div>
            </div>
            <div className="widget-wrapper slider">
                <Swiper
                    modules={[Pagination, Autoplay]}
                    slidesPerView="auto"
                    centeredSlides
                    loop
                    spaceBetween={0}
                    speed={900}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    pagination={{ clickable: true }}
                    initialSlide={0}
                >
                    <SwiperSlide>
                        <div className="text-content deep-teal-blue">
                            <Link href="/projects">
                                <div className="image-content-wrapper">
                                    <Image src="/images/01-home-page/hp-project-card.webp" alt="Service one" width={1920} height={1080} priority />
                                </div>
                                <div className="text-content-wrapper">
                                    <div className="first-column">
                                        <h3>Landscaping</h3>
                                        <p className="p-sm">Hard Landscaping • Swimming Pool • Outdoor Living</p>
                                    </div>
                                    <div className="second-column">
                                        <p className="h6">Dubai Hills, UAE</p>
                                        <p className="p-sm">August 2025</p>
                                    </div>
                                    <div className="arrow">
                                        <Image src="/arrow.svg" alt="arrow" width={27} height={27} priority />
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="text-content olive-drab">
                            <Link href="/projects">
                                <div className="image-content-wrapper">
                                    <Image src="/images/01-home-page/hp-project-card-2.webp" alt="Service one" width={1920} height={1080} priority />
                                </div>
                                <div className="text-content-wrapper">
                                    <div className="first-column">
                                        <h3>Landscaping</h3>
                                        <p className="p-sm">Hard Landscaping • Swimming Pool • Outdoor Living</p>
                                    </div>
                                    <div className="second-column">
                                        <p className="h6">Dubai Hills, UAE</p>
                                        <p className="p-sm">August 2025</p>
                                    </div>
                                    <div className="arrow">
                                        <Image src="/arrow.svg" alt="arrow" width={27} height={27} priority />
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="text-content olive-drab">
                            <Link href="/projects">
                                <div className="image-content-wrapper">
                                    <Image src="/images/01-home-page/hp-project-card-3.webp" alt="Service one" width={1920} height={1080} priority />
                                </div>
                                <div className="text-content-wrapper">
                                    <div className="first-column">
                                        <h3>Landscaping</h3>
                                        <p className="p-sm">Hard Landscaping • Swimming Pool • Outdoor Living</p>
                                    </div>
                                    <div className="second-column">
                                        <p className="h6">Dubai Hills, UAE</p>
                                        <p className="p-sm">August 2025</p>
                                    </div>
                                    <div className="arrow">
                                        <Image src="/arrow.svg" alt="arrow" width={27} height={27} priority />
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="text-content deep-teal-blue">
                            <Link href="/projects">
                                <div className="image-content-wrapper">
                                    <Image src="/images/01-home-page/hp-project-card.webp" alt="Service one" width={1920} height={1080} priority />
                                </div>
                                <div className="text-content-wrapper">
                                    <div className="first-column">
                                        <h3>Landscaping</h3>
                                        <p className="p-sm">Hard Landscaping • Swimming Pool • Outdoor Living</p>
                                    </div>
                                    <div className="second-column">
                                        <p className="h6">Dubai Hills, UAE</p>
                                        <p className="p-sm">August 2025</p>
                                    </div>
                                    <div className="arrow">
                                        <Image src="/arrow.svg" alt="arrow" width={27} height={27} priority />
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="text-content deep-teal-blue">
                            <Link href="/projects">
                                <div className="image-content-wrapper">
                                    <Image src="/images/01-home-page/hp-project-card.webp" alt="Service one" width={1920} height={1080} priority />
                                </div>
                                <div className="text-content-wrapper">
                                    <div className="first-column">
                                        <h3>Landscaping</h3>
                                        <p className="p-sm">Hard Landscaping • Swimming Pool • Outdoor Living</p>
                                    </div>
                                    <div className="second-column">
                                        <p className="h6">Dubai Hills, UAE</p>
                                        <p className="p-sm">August 2025</p>
                                    </div>
                                    <div className="arrow">
                                        <Image src="/arrow.svg" alt="arrow" width={27} height={27} priority />
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="text-content olive-drab">
                            <Link href="/projects">
                                <div className="image-content-wrapper">
                                    <Image src="/images/01-home-page/hp-project-card-2.webp" alt="Service one" width={1920} height={1080} priority />
                                </div>
                                <div className="text-content-wrapper">
                                    <div className="first-column">
                                        <h3>Landscaping</h3>
                                        <p className="p-sm">Hard Landscaping • Swimming Pool • Outdoor Living</p>
                                    </div>
                                    <div className="second-column">
                                        <p className="h6">Dubai Hills, UAE</p>
                                        <p className="p-sm">August 2025</p>
                                    </div>
                                    <div className="arrow">
                                        <Image src="/arrow.svg" alt="arrow" width={27} height={27} priority />
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="text-content olive-drab">
                            <Link href="/projects">
                                <div className="image-content-wrapper">
                                    <Image src="/images/01-home-page/hp-project-card-3.webp" alt="Service one" width={1920} height={1080} priority />
                                </div>
                                <div className="text-content-wrapper">
                                    <div className="first-column">
                                        <h3>Landscaping</h3>
                                        <p className="p-sm">Hard Landscaping • Swimming Pool • Outdoor Living</p>
                                    </div>
                                    <div className="second-column">
                                        <p className="h6">Dubai Hills, UAE</p>
                                        <p className="p-sm">August 2025</p>
                                    </div>
                                    <div className="arrow">
                                        <Image src="/arrow.svg" alt="arrow" width={27} height={27} priority />
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="text-content deep-teal-blue">
                            <Link href="/projects">
                                <div className="image-content-wrapper">
                                    <Image src="/images/01-home-page/hp-project-card.webp" alt="Service one" width={1920} height={1080} priority />
                                </div>
                                <div className="text-content-wrapper">
                                    <div className="first-column">
                                        <h3>Landscaping</h3>
                                        <p className="p-sm">Hard Landscaping • Swimming Pool • Outdoor Living</p>
                                    </div>
                                    <div className="second-column">
                                        <p className="h6">Dubai Hills, UAE</p>
                                        <p className="p-sm">August 2025</p>
                                    </div>
                                    <div className="arrow">
                                        <Image src="/arrow.svg" alt="arrow" width={27} height={27} priority />
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
}
