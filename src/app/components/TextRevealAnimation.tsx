"use client";

import { useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(SplitText, ScrollTrigger, ScrollSmoother);

export default function GlobalTextReveal() {
    const scope = useRef<HTMLDivElement | null>(null);
    const pathname = usePathname();

    useGSAP(
        () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
            ScrollSmoother.get()?.kill();

            const elements = gsap.utils.toArray<HTMLElement>(".widget-wrapper:not(.hero-banner) .text-content-wrapper  :is(h2, h3, h4, h5, h6, .h2, .h3, .h4, .h5, .h6,  p, li)");

            elements.forEach((element) => {
                const split = SplitText.create(element, {
                    type: "lines",
                    linesClass: "line",
                    display: "inline-block",
                });

                const innerLines: HTMLElement[] = [];

                split.lines?.forEach((line) => {
                    const inner = document.createElement("div");
                    inner.classList.add("line-inner");

                    while (line.firstChild) {
                        inner.appendChild(line.firstChild);
                    }

                    line.appendChild(inner);
                    innerLines.push(inner);
                });

                gsap.set(innerLines, { y: "100%" });

                gsap.to(innerLines, {
                    y: "0%",
                    duration: 1,
                    stagger: 0.1,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: element,
                        start: "top 85%",
                        toggleActions: "play none none reverse",
                        // once: true,
                    },
                });
            });

            /*let smoother = ScrollSmoother.create({
                wrapper: "#smooth-wrapper",
                content: "#smooth-content",
                smooth: 1.5,
                effects: true,
                normalizeScroll: true,
                ignoreMobileResize: true,
            });

            smoother.effects(".our-services .image-text-card .text-content", { speed: 0.5, lag: (i) => i * 1 });

            return () => {
                smoother.kill();
            };*/
        },
        {
            dependencies: [pathname],
        },
    );

    setTimeout(() => {
        window.addEventListener("load", () => {
            ScrollTrigger.refresh();
        });
    }, 200);

    return <div ref={scope} />;
}
