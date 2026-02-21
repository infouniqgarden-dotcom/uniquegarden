"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

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

                gsap.utils.toArray<HTMLElement>("main > .widget-wrapper:not(.hero-banner) .text-content-wrapper").forEach((el) => {
                    gsap.fromTo(
                        el,
                        { opacity: 0, y: 40 },
                        {
                            opacity: 1,
                            y: 0,
                            duration: 1.6,
                            ease: "power3.out",
                            scrollTrigger: {
                                trigger: el,
                                start: "top 80%",
                                toggleActions: "play none none reverse",
                            },
                        },
                    );
                });
            });
        };

        initAnimations();

        return () => {
            ctx?.revert();
        };
    }, [pathname]);

    return null;
}
