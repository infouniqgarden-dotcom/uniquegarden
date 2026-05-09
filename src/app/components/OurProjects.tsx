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
                    <p className="overline-1">Our Projects</p>
                    <h2>Recent Work Across the UAE</h2>
                    <p>Explore some of our featured landscaping, pool, and civil work projects.</p>
                    <Link href="/projects" className="btn" aria-label="Read more projects">
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
                            <Link href="/projects/al-tawr-villa-sulthan-shamshi">
                                <div className="image-content-wrapper">
                                    <Image src="/images/01-home-page/hp-project-card.webp" alt="Service one" width={1920} height={1080} sizes="(max-width: 768px) 100vw, 1080px" />
                                </div>
                                <div className="text-content-wrapper">
                                    <div className="first-column">
                                        <h3>Al Tawr Villa - Sulthan Shamshi</h3>
                                        <p className="p-sm">Hardscape • Softscape • Pergola • Irrigation • Lighting</p>
                                    </div>
                                    <div className="second-column">
                                        <p className="h6">Al Twar 2, Dubai, UAE</p>
                                        <p className="p-sm">April 2026</p>
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
                            <Link href="/projects/al-tawr-villa-walid">
                                <div className="image-content-wrapper">
                                    <Image
                                        src="/images/01-home-page/hp-project-card-2.webp"
                                        alt="Service one"
                                        width={1920}
                                        height={1080}
                                        sizes="(max-width: 768px) 100vw, 1080px"
                                    />
                                </div>
                                <div className="text-content-wrapper">
                                    <div className="first-column">
                                        <h3>Al Tawr Villa - Walid</h3>
                                        <p className="p-sm">Hardscape • Softscape • Pergola • Pavement • Lawn • Irrigation</p>
                                    </div>
                                    <div className="second-column">
                                        <p className="h6">Al Twar 2, Dubai, UAE</p>
                                        <p className="p-sm">February 2026</p>
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
                            <Link href="/projects/bmj-industries">
                                <div className="image-content-wrapper">
                                    <Image
                                        src="/images/01-home-page/hp-project-card-3.webp"
                                        alt="Service one"
                                        width={1920}
                                        height={1080}
                                        sizes="(max-width: 768px) 100vw, 1080px"
                                    />
                                </div>
                                <div className="text-content-wrapper">
                                    <div className="first-column">
                                        <h3>BMJ Industries</h3>
                                        <p className="p-sm">Softscape • Irrigation • Industrial Landscape</p>
                                    </div>
                                    <div className="second-column">
                                        <p className="h6">Ras Al Khaimah, UAE</p>
                                        <p className="p-sm">Ongoing</p>
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
                            <Link href="/projects/abudhabi-private-villa">
                                <div className="image-content-wrapper">
                                    <Image src="/images/01-home-page/hp-project-card.webp" alt="Service one" width={1920} height={1080} sizes="(max-width: 768px) 100vw, 1080px" />
                                </div>
                                <div className="text-content-wrapper">
                                    <div className="first-column">
                                        <h3>Abudhabi Private Villa</h3>
                                        <p className="p-sm">Softscape • Irrigation • Tropical Landscape</p>
                                    </div>
                                    <div className="second-column">
                                        <p className="h6">Abu Dhabi, UAE</p>
                                        <p className="p-sm">Ongoing</p>
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
                            <Link href="/projects/al-tawr-villa-sulthan-shamshi">
                                <div className="image-content-wrapper">
                                    <Image src="/images/01-home-page/hp-project-card.webp" alt="Service one" width={1920} height={1080} sizes="(max-width: 768px) 100vw, 1080px" />
                                </div>
                                <div className="text-content-wrapper">
                                    <div className="first-column">
                                        <h3>Al Tawr Villa - Sulthan Shamshi</h3>
                                        <p className="p-sm">Hardscape • Softscape • Pergola • Irrigation • Lighting</p>
                                    </div>
                                    <div className="second-column">
                                        <p className="h6">Al Twar 2, Dubai, UAE</p>
                                        <p className="p-sm">April 2026</p>
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
                            <Link href="/projects/al-tawr-villa-walid">
                                <div className="image-content-wrapper">
                                    <Image
                                        src="/images/01-home-page/hp-project-card-2.webp"
                                        alt="Service one"
                                        width={1920}
                                        height={1080}
                                        sizes="(max-width: 768px) 100vw, 1080px"
                                    />
                                </div>
                                <div className="text-content-wrapper">
                                    <div className="first-column">
                                        <h3>Al Tawr Villa - Walid</h3>
                                        <p className="p-sm">Hardscape • Softscape • Pergola • Pavement • Lawn • Irrigation</p>
                                    </div>
                                    <div className="second-column">
                                        <p className="h6">Al Twar 2, Dubai, UAE</p>
                                        <p className="p-sm">February 2026</p>
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
                            <Link href="/projects/bmj-industries">
                                <div className="image-content-wrapper">
                                    <Image
                                        src="/images/01-home-page/hp-project-card-3.webp"
                                        alt="Service one"
                                        width={1920}
                                        height={1080}
                                        sizes="(max-width: 768px) 100vw, 1080px"
                                    />
                                </div>
                                <div className="text-content-wrapper">
                                    <div className="first-column">
                                        <h3>BMJ Industries</h3>
                                        <p className="p-sm">Softscape • Irrigation • Industrial Landscape</p>
                                    </div>
                                    <div className="second-column">
                                        <p className="h6">Ras Al Khaimah, UAE</p>
                                        <p className="p-sm">Ongoing</p>
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
                            <Link href="/projects/abudhabi-private-villa">
                                <div className="image-content-wrapper">
                                    <Image src="/images/01-home-page/hp-project-card.webp" alt="Service one" width={1920} height={1080} sizes="(max-width: 768px) 100vw, 1080px" />
                                </div>
                                <div className="text-content-wrapper">
                                    <div className="first-column">
                                        <h3>Abudhabi Private Villa</h3>
                                        <p className="p-sm">Softscape • Irrigation • Tropical Landscape</p>
                                    </div>
                                    <div className="second-column">
                                        <p className="h6">Abu Dhabi, UAE</p>
                                        <p className="p-sm">Ongoing</p>
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
