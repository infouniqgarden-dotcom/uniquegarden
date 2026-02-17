"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function GlobalAnimations() {
    const pathname = usePathname();

    useEffect(() => {
        const initAnimations = async () => {
            const { gsap } = await import("gsap");
            const { ScrollTrigger } = await import("gsap/ScrollTrigger");

            gsap.registerPlugin(ScrollTrigger);

            ScrollTrigger.getAll().forEach((t) => t.kill());

            gsap.utils.toArray<HTMLElement>("main > .widget-wrapper:not(.hero-banner) .text-content-wrapper").forEach((el) => {
                gsap.fromTo(
                    el,
                    { opacity: 0, y: 40 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: el,
                            start: "top 90%",
                        },
                    },
                );
            });
        };

        setTimeout(() => {
            initAnimations();
        }, 200);
    }, [pathname]);

    return null;
}
