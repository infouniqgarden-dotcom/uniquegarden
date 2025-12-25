"use client";

import { useEffect } from "react";

export default function MobileClassHandler() {
    useEffect(() => {
        const body = document.body;
        const mobileQuery = window.matchMedia("(max-width: 767px)");

        const handleMobileClass = (e: MediaQueryList | MediaQueryListEvent) => {
            if (e.matches) {
                body.classList.add("mobile");
            } else {
                body.classList.remove("mobile");
            }
        };

        handleMobileClass(mobileQuery);

        if (mobileQuery.addEventListener) {
            mobileQuery.addEventListener("change", handleMobileClass);
            return () =>
                mobileQuery.removeEventListener("change", handleMobileClass);
        } else {
            // Safari < 14
            mobileQuery.addListener(handleMobileClass);
            return () => mobileQuery.removeListener(handleMobileClass);
        }
    }, []);

    return null; // This component doesn't render anything visual
}
