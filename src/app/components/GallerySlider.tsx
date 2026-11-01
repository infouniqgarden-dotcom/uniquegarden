"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";

// Gallery data
const row1 = [
    { id: 1, url: "06-Gallery-Page/1st-Row/1.webp", altTxt: "Modern villa garden in Dubai with stepping-stone pathway, lawn strips and outdoor kitchen" },
    { id: 2, url: "06-Gallery-Page/1st-Row/2.webp", altTxt: "Commercial landscaping in Dubai with palm-lined walkway and flowering planters" },
    { id: 3, url: "06-Gallery-Page/1st-Row/3.webp", altTxt: "Steel car parking shade structure at a Dubai villa" },
    { id: 4, url: "06-Gallery-Page/1st-Row/4.webp", altTxt: "Dubai villa hardscape with stone steps, palm trees and flowering plant beds" },
    { id: 5, url: "06-Gallery-Page/1st-Row/5.webp", altTxt: "Swimming pool with water feature and sun loungers at a Dubai villa" },
    { id: 6, url: "06-Gallery-Page/1st-Row/6.webp", altTxt: "Wooden pergola with outdoor seating and flower beds in a Dubai garden" },
    { id: 7, url: "06-Gallery-Page/1st-Row/7.webp", altTxt: "Car parking shade with steel frame at a Dubai residence" },
    { id: 8, url: "06-Gallery-Page/1st-Row/8.webp", altTxt: "MEP engineers inspecting electrical and plumbing works at a Dubai villa" },
    { id: 9, url: "06-Gallery-Page/1st-Row/9.webp", altTxt: "Luxury villa landscaping in Dubai with lawn, palm trees and curved stone path" },
    { id: 10, url: "06-Gallery-Page/1st-Row/1.webp", altTxt: "Modern villa garden in Dubai with stepping-stone pathway, lawn strips and outdoor kitchen" },
    { id: 11, url: "06-Gallery-Page/1st-Row/2.webp", altTxt: "Commercial landscaping in Dubai with palm-lined walkway and flowering planters" },
    { id: 12, url: "06-Gallery-Page/1st-Row/3.webp", altTxt: "Steel car parking shade structure at a Dubai villa" },
    { id: 13, url: "06-Gallery-Page/1st-Row/4.webp", altTxt: "Dubai villa hardscape with stone steps, palm trees and flowering plant beds" },
    { id: 14, url: "06-Gallery-Page/1st-Row/5.webp", altTxt: "Swimming pool with water feature and sun loungers at a Dubai villa" },
    { id: 15, url: "06-Gallery-Page/1st-Row/6.webp", altTxt: "Wooden pergola with outdoor seating and flower beds in a Dubai garden" },
    { id: 16, url: "06-Gallery-Page/1st-Row/7.webp", altTxt: "Car parking shade with steel frame at a Dubai residence" },
    { id: 17, url: "06-Gallery-Page/1st-Row/8.webp", altTxt: "MEP engineers inspecting electrical and plumbing works at a Dubai villa" },
    { id: 18, url: "06-Gallery-Page/1st-Row/9.webp", altTxt: "Luxury villa landscaping in Dubai with lawn, palm trees and curved stone path" },
];

const row2 = [
    { id: 1, url: "06-Gallery-Page/2nd-Row/1.webp", altTxt: "Infinity swimming pool with evening lighting at a Dubai villa" },
    { id: 2, url: "06-Gallery-Page/2nd-Row/2.webp", altTxt: "Patterned paving and date palm avenue in a Dubai commercial development" },
    { id: 3, url: "06-Gallery-Page/2nd-Row/3.webp", altTxt: "Tiered fountain and ornamental planting in a Dubai courtyard garden" },
    { id: 4, url: "06-Gallery-Page/2nd-Row/4.webp", altTxt: "Desert xeriscape garden in Dubai with cacti, agave and white gravel" },
    { id: 5, url: "06-Gallery-Page/2nd-Row/5.webp", altTxt: "Vertical garden green wall on a modern Dubai building facade" },
    { id: 6, url: "06-Gallery-Page/2nd-Row/6.webp", altTxt: "Minimal Dubai villa backyard with stone pavers set in artificial grass" },
    { id: 7, url: "06-Gallery-Page/2nd-Row/7.webp", altTxt: "Garden pathway with low-level outdoor lighting at night in Dubai" },
    { id: 8, url: "06-Gallery-Page/2nd-Row/8.webp", altTxt: "Natural stone pathway leading to a pool during landscaping works in Dubai" },
    { id: 9, url: "06-Gallery-Page/2nd-Row/9.webp", altTxt: "Timber pergola with lanterns and outdoor lounge lit at night in Dubai" },
    { id: 10, url: "06-Gallery-Page/2nd-Row/1.webp", altTxt: "Infinity swimming pool with evening lighting at a Dubai villa" },
    { id: 11, url: "06-Gallery-Page/2nd-Row/2.webp", altTxt: "Patterned paving and date palm avenue in a Dubai commercial development" },
    { id: 12, url: "06-Gallery-Page/2nd-Row/3.webp", altTxt: "Tiered fountain and ornamental planting in a Dubai courtyard garden" },
    { id: 13, url: "06-Gallery-Page/2nd-Row/4.webp", altTxt: "Desert xeriscape garden in Dubai with cacti, agave and white gravel" },
    { id: 14, url: "06-Gallery-Page/2nd-Row/5.webp", altTxt: "Vertical garden green wall on a modern Dubai building facade" },
    { id: 15, url: "06-Gallery-Page/2nd-Row/6.webp", altTxt: "Minimal Dubai villa backyard with stone pavers set in artificial grass" },
    { id: 16, url: "06-Gallery-Page/2nd-Row/7.webp", altTxt: "Garden pathway with low-level outdoor lighting at night in Dubai" },
    { id: 17, url: "06-Gallery-Page/2nd-Row/8.webp", altTxt: "Natural stone pathway leading to a pool during landscaping works in Dubai" },
    { id: 18, url: "06-Gallery-Page/2nd-Row/9.webp", altTxt: "Timber pergola with lanterns and outdoor lounge lit at night in Dubai" },
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
