"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

interface SlideImage {
    imagePath: string;
    imageAlt: string;
}

interface ServicesSliderProps {
    images: SlideImage[];
}

export default function ServicesSlider({ images }: ServicesSliderProps) {
    return (
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
            {images.map((image, index) => (
                <SwiperSlide key={index}>
                    <ImageCreation imagePath={image.imagePath} imageAlt={image.imageAlt} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

function ImageCreation({ imagePath, imageAlt }: { imagePath: string; imageAlt: string }) {
    return (
        <div className="image-content-wrapper">
            <Image src={`/images/${imagePath}`} alt={imageAlt} width={1920} height={1080} sizes="(max-width: 768px) 100vw, 800px" />
        </div>
    );
}
