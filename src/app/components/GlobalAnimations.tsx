"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// These animate as a GROUP with stagger (siblings, lists, cards, grid items)
const groupElements = [
    "main .widget-wrapper.about-company .text-content",
    ".about-us-ltxt-rimg .text-content .text-content-wrapper > *",
    ".text-group .text-content-wrapper > *",
    ".our-services .image-text-card .text-content",
    ".widget-wrapper.why-choose-us .cards-wrapper .card.text-content",
    ".request-a-quote .text-content-wrapper > *",
    "#footer .row-one .column-one > *",
    "#footer .row-one .column-two > div > *",
    "#footer .row-one .column-three .quick-links ul li",
    "#footer .row-one .column-three .our-services ul li",
    ".our-core-values .text-content > .text-content-wrapper > *",
    ".our-core-values .text-content .cards-container .card",
    ".widget-wrapper.bg.our-trade-license > *",
    ".services-lslider-rtext .text-content-wrapper > *",
    ".services-ltext-rslider .text-content-wrapper > *",
    ".project-detials .text-content-wrapper > *",
    ".meet-our-team .our-team-wrapper .text-content",
    ".project-image-gallery .text-content-wrapper > *",
    ".project-image-gallery .image-content-wrapper img",
    ".contact-form-section .contact-form .form-group",
];

// These animate SOLO — one element, one trigger
const soloElements = [
    ".about-us-ltxt-rimg .image-content-wrapper",
    ".our-projects-text-slider .slider",
    ".widget-wrapper.testimonials .review-cards",
    "#footer .row-one .column-three .quick-links .overline-3",
    "#footer .row-one .column-three .our-services .overline-3",
    ".mission-vision .text-content",
    ".services-lslider-rtext .image-slider",
    ".services-ltext-rslider .image-slider",
    ".project-limage-rtext",
    ".project-ltext-rimage",
    ".our-core-values .image-content-wrapper",
    "section.widget-wrapper.gallery-slider .sliders .swiper",
    ".careers-job-openings .job-listing .text-content",
    ".widget-wrapper.bg.our-services-multi-icon-text-slider .multi-icon-text-slider .swiper",
];

const FROM = { opacity: 0.01, y: 30 };
const TO = {
    opacity: 1,
    y: 0,
    duration: 2,
    delay: 0.2,
    ease: "power4.out",
};

export default function GlobalAnimations() {
    const pathname = usePathname();

    useEffect(() => {
        let ctx: any;

        const initAnimations = async () => {
            const { gsap } = await import("gsap");
            const { ScrollTrigger } = await import("gsap/ScrollTrigger");

            gsap.registerPlugin(ScrollTrigger);

            ctx = gsap.context(() => {
                ScrollTrigger.getAll().forEach((t) => t.kill());

                // GROUP — all matched elements animate together with stagger
                groupElements.forEach((selector) => {
                    const els = gsap.utils.toArray<HTMLElement>(selector);
                    if (!els.length) return;

                    gsap.fromTo(els, FROM, {
                        ...TO,
                        stagger: 0.15,
                        scrollTrigger: {
                            trigger: els[0],
                            start: "top 90%",
                            toggleActions: "play none none none",
                            once: true,
                        },
                    });
                });

                // SOLO — each element gets its own trigger
                soloElements.forEach((selector) => {
                    gsap.utils.toArray<HTMLElement>(selector).forEach((el) => {
                        gsap.fromTo(el, FROM, {
                            ...TO,
                            scrollTrigger: {
                                trigger: el,
                                start: "top 90%",
                                toggleActions: "play none none none",
                                once: true,
                            },
                        });
                    });
                });
            });

            setTimeout(() => {
                ScrollTrigger.refresh();
            }, 500);
        };

        initAnimations();

        return () => {
            ctx?.revert();
        };
    }, [pathname]);

    useEffect(() => {
        setTimeout(() => {
            window.addEventListener("load", () => {
                ScrollTrigger.refresh();
            });
        }, 500);
    }, []);

    return null;
}
