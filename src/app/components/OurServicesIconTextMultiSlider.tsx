"use client";

import React, { useEffect, useMemo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";

// Service categories data
const serviceCategories = [
    { id: 1, name: "Soft Landscaping", icon: "./services-icons/Soft-Landscaping.svg" },
    { id: 2, name: "Hard Landscaping", icon: "./services-icons/Hard-Landscaping.svg" },
    { id: 3, name: "Swimming Pool", icon: "./services-icons/Swimming-Pool.svg" },
    { id: 4, name: "Irrigation System", icon: "./services-icons/Irrigation-System.svg" },
    { id: 5, name: "Water Features", icon: "./services-icons/Water-Features.svg" },
    { id: 6, name: "MEP Works", icon: "./services-icons/MEP-Works.svg" },
    { id: 7, name: "Vertical Garden", icon: "./services-icons/Vertical-Garden.svg" },
    { id: 8, name: "Garden Maintenance", icon: "./services-icons/Garden-Maintenance.svg" },
    { id: 9, name: "Landscape Design", icon: "./services-icons/Landscape-Design.svg" },
    { id: 10, name: "Lighting & Electrical", icon: "./services-icons/Lighting-Electrical.svg" },
    { id: 11, name: "Outdoor Lighting", icon: "./services-icons/Outdoor-Lighting.svg" },
    { id: 12, name: "Civil Works", icon: "./services-icons/Civil-Works.svg" },
    { id: 13, name: "Outdoor Flooring", icon: "./services-icons/Outdoor-Flooring.svg" },
    { id: 14, name: "Pergola", icon: "./services-icons/Pergola.svg" },
    { id: 15, name: "Pebble Garden", icon: "./services-icons/Pebble-Garden.svg" },
];

export default function OurSerivesIconTextMultiSlider({ reverseDirection = false }: { reverseDirection?: boolean }) {
    const [shuffledCategories, setShuffledCategories] = useState(serviceCategories);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        // Shuffle only on client side after mount
        setShuffledCategories([...serviceCategories].sort(() => Math.random() - 0.5));
        setIsMounted(true);
    }, []);

    // Don't render until mounted to avoid hydration mismatch
    if (!isMounted) {
        return null;
    }

    return (
        <Swiper
            modules={[Autoplay]}
            spaceBetween={8}
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
                    spaceBetween: 8,
                },
                640: {
                    spaceBetween: 10,
                },
                768: {
                    spaceBetween: 14,
                },
                1024: {
                    spaceBetween: 20,
                },
                1280: {
                    spaceBetween: 24,
                },
                1536: {
                    spaceBetween: 32,
                },
            }}
            className="landscaping-services-swiper"
        >
            {shuffledCategories.map((service) => (
                <SwiperSlide key={service.id}>
                    <div className="icon-wrapper">
                        <Image src={service.icon} alt={service.name} width={64} height={64} className="service-icon" />
                    </div>
                    <p className="service-name">{service.name}</p>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
