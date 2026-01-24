"use client";

import Image from "next/image";
import Link from "next/link";
import ArrowButton from "./ArrowButton";
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
                    <Link href="#" className="btn">
                        View all projects
                    </Link>
                </div>
            </div>
            <div className="widget-wrapper slider">
                {/* <Swiper
                    modules={[Pagination]}
                    slidesPerView={1}
                    slidesPerGroup={1}
                    centeredSlides={true}
                    spaceBetween={24}
                    speed={1000}
                    autoplay={true}
                    loop={true}
                    pagination={{ clickable: true }}
                > */}
                <Swiper
                    modules={[Pagination, Autoplay]}
                    slidesPerView="auto"
                    centeredSlides
                    loop
                    spaceBetween={48} // default / fallback
                    breakpoints={{
                        0: {
                            spaceBetween: 16,
                        },
                        640: {
                            spaceBetween: 24,
                        },
                        1024: {
                            spaceBetween: 32,
                        },
                        1280: {
                            spaceBetween: 48,
                        },
                    }}
                    speed={900}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    pagination={{ clickable: true }}
                >
                    <SwiperSlide>
                        <div className="text-content">
                            <div className="image-content-wrapper">
                                <Image
                                    src="https://raw.githubusercontent.com/gowthamavtech/unique-garden-img/main/01-home-page/hp-project-card.webp"
                                    alt="Service one"
                                    width={1920}
                                    height={1080}
                                    priority
                                />
                            </div>
                            <div className="text-content-wrapper">
                                <div className="first-column">
                                    <h3>Landscaping</h3>
                                    <p className="p-sm">
                                        Hard Landscaping • Swimming Pool • Outdoor Living
                                    </p>
                                </div>
                                <div className="second-column">
                                    <p className="h6">Palm Jumeirah, Dubai</p>
                                    <p className="p-sm">August 2025</p>
                                </div>
                                <ArrowButton link={"#"} />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="text-content">
                            <div className="image-content-wrapper">
                                <Image
                                    src="https://raw.githubusercontent.com/gowthamavtech/unique-garden-img/main/01-home-page/hp-project-card-2.webp"
                                    alt="Service one"
                                    width={1920}
                                    height={1080}
                                    priority
                                />
                            </div>
                            <div className="text-content-wrapper">
                                <div className="first-column">
                                    <h3>Landscaping</h3>
                                    <p className="p-sm">
                                        Hard Landscaping • Swimming Pool • Outdoor Living
                                    </p>
                                </div>
                                <div className="second-column">
                                    <p className="h6">Palm Jumeirah, Dubai</p>
                                    <p className="p-sm">August 2025</p>
                                </div>
                                <ArrowButton link={"#"} />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="text-content">
                            <div className="image-content-wrapper">
                                <Image
                                    src="https://raw.githubusercontent.com/gowthamavtech/unique-garden-img/main/01-home-page/hp-project-card-3.webp"
                                    alt="Service one"
                                    width={1920}
                                    height={1080}
                                    priority
                                />
                            </div>
                            <div className="text-content-wrapper">
                                <div className="first-column">
                                    <h3>Landscaping</h3>
                                    <p className="p-sm">
                                        Hard Landscaping • Swimming Pool • Outdoor Living
                                    </p>
                                </div>
                                <div className="second-column">
                                    <p className="h6">Palm Jumeirah, Dubai</p>
                                    <p className="p-sm">August 2025</p>
                                </div>
                                <ArrowButton link={"#"} />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="text-content">
                            <div className="image-content-wrapper">
                                <Image
                                    src="https://raw.githubusercontent.com/gowthamavtech/unique-garden-img/main/01-home-page/hp-project-card.webp"
                                    alt="Service one"
                                    width={1920}
                                    height={1080}
                                    priority
                                />
                            </div>
                            <div className="text-content-wrapper">
                                <div className="first-column">
                                    <h3>Landscaping</h3>
                                    <p className="p-sm">
                                        Hard Landscaping • Swimming Pool • Outdoor Living
                                    </p>
                                </div>
                                <div className="second-column">
                                    <p className="h6">Palm Jumeirah, Dubai</p>
                                    <p className="p-sm">August 2025</p>
                                </div>
                                <ArrowButton link={"#"} />
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
}
