"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";

// Gallery data
const row1 = [
    { id: 1, url: "06-Gallery-Page/1st-Row/1.webp", altTxt: "gallery image" },
    { id: 2, url: "06-Gallery-Page/1st-Row/2.webp", altTxt: "gallery image" },
    { id: 3, url: "06-Gallery-Page/1st-Row/3.webp", altTxt: "gallery image" },
    { id: 4, url: "06-Gallery-Page/1st-Row/4.webp", altTxt: "gallery image" },
    { id: 5, url: "06-Gallery-Page/1st-Row/5.webp", altTxt: "gallery image" },
    { id: 6, url: "06-Gallery-Page/1st-Row/6.webp", altTxt: "gallery image" },
    { id: 7, url: "06-Gallery-Page/1st-Row/7.webp", altTxt: "gallery image" },
    { id: 8, url: "06-Gallery-Page/1st-Row/8.webp", altTxt: "gallery image" },
    { id: 9, url: "06-Gallery-Page/1st-Row/9.webp", altTxt: "gallery image" },
    { id: 10, url: "06-Gallery-Page/1st-Row/1.webp", altTxt: "gallery image" },
    { id: 11, url: "06-Gallery-Page/1st-Row/2.webp", altTxt: "gallery image" },
    { id: 12, url: "06-Gallery-Page/1st-Row/3.webp", altTxt: "gallery image" },
    { id: 13, url: "06-Gallery-Page/1st-Row/4.webp", altTxt: "gallery image" },
    { id: 14, url: "06-Gallery-Page/1st-Row/5.webp", altTxt: "gallery image" },
    { id: 15, url: "06-Gallery-Page/1st-Row/6.webp", altTxt: "gallery image" },
    { id: 16, url: "06-Gallery-Page/1st-Row/7.webp", altTxt: "gallery image" },
    { id: 17, url: "06-Gallery-Page/1st-Row/8.webp", altTxt: "gallery image" },
    { id: 18, url: "06-Gallery-Page/1st-Row/9.webp", altTxt: "gallery image" },
];

const row2 = [
    { id: 1, url: "06-Gallery-Page/2nd-Row/1.webp", altTxt: "gallery image" },
    { id: 2, url: "06-Gallery-Page/2nd-Row/2.webp", altTxt: "gallery image" },
    { id: 3, url: "06-Gallery-Page/2nd-Row/3.webp", altTxt: "gallery image" },
    { id: 4, url: "06-Gallery-Page/2nd-Row/4.webp", altTxt: "gallery image" },
    { id: 5, url: "06-Gallery-Page/2nd-Row/5.webp", altTxt: "gallery image" },
    { id: 6, url: "06-Gallery-Page/2nd-Row/6.webp", altTxt: "gallery image" },
    { id: 7, url: "06-Gallery-Page/2nd-Row/7.webp", altTxt: "gallery image" },
    { id: 8, url: "06-Gallery-Page/2nd-Row/8.webp", altTxt: "gallery image" },
    { id: 9, url: "06-Gallery-Page/2nd-Row/9.webp", altTxt: "gallery image" },
    { id: 10, url: "06-Gallery-Page/2nd-Row/1.webp", altTxt: "gallery image" },
    { id: 11, url: "06-Gallery-Page/2nd-Row/2.webp", altTxt: "gallery image" },
    { id: 12, url: "06-Gallery-Page/2nd-Row/3.webp", altTxt: "gallery image" },
    { id: 13, url: "06-Gallery-Page/2nd-Row/4.webp", altTxt: "gallery image" },
    { id: 14, url: "06-Gallery-Page/2nd-Row/5.webp", altTxt: "gallery image" },
    { id: 15, url: "06-Gallery-Page/2nd-Row/6.webp", altTxt: "gallery image" },
    { id: 16, url: "06-Gallery-Page/2nd-Row/7.webp", altTxt: "gallery image" },
    { id: 17, url: "06-Gallery-Page/2nd-Row/8.webp", altTxt: "gallery image" },
    { id: 18, url: "06-Gallery-Page/2nd-Row/9.webp", altTxt: "gallery image" },
];

interface GallerySliderProps {
    row?: "row1" | "row2";
    reverseDirection?: boolean;
}

export default function GallerySlider({ row = "row1", reverseDirection = false }: GallerySliderProps) {
    // Select the correct row based on prop
    const selectedImages = row === "row1" ? row1 : row2;

    return (
        <Swiper
            modules={[Autoplay]}
            spaceBetween={16}
            slidesPerView="auto"
            loop={true}
            loopAdditionalSlides={2}
            autoplay={{
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
                reverseDirection: reverseDirection,
            }}
            allowTouchMove={false}
            simulateTouch={false}
            touchRatio={0}
            resistance={false}
            speed={7000}
            breakpoints={{
                480: {
                    spaceBetween: 16,
                },
                640: {
                    spaceBetween: 16,
                },
                768: {
                    spaceBetween: 20,
                },
                1024: {
                    spaceBetween: 24,
                },
                1280: {
                    spaceBetween: 32,
                },
                1536: {
                    spaceBetween: 40,
                },
            }}
            className="gallery-swiper"
        >
            {selectedImages.map((image) => (
                <SwiperSlide key={image.id}>
                    <div className="image-wrapper">
                        <Image src={`/images/${image.url}`} alt={image.altTxt} width={400} height={300} sizes="(max-width: 768px) 50vw, 400px" className="gallery-image" />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
