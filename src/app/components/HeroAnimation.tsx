"use client";

import { useEffect, useRef } from "react";

export default function HeroAnimation({ children }: { children: React.ReactNode }) {
    const scope = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const runAnimation = async () => {
            const { gsap } = await import("gsap");

            if (!scope.current) return;

            const elements = scope.current.querySelectorAll(".reveal");

            gsap.fromTo(
                elements,
                {
                    opacity: 0,
                    y: 40,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.5,
                    ease: "power3.out",
                    stagger: 0.15,
                },
            );
        };

        runAnimation();
    }, []);

    return <div ref={scope}>{children}</div>;
}
