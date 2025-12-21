"use client";

import { useEffect } from "react";

export default function MobileClassHandler() {
    useEffect(() => {
        const body = document.body;
        const mobileQuery = window.matchMedia("(max-width: 767px)");

        const handleMobileClass = (e: MediaQueryListEvent | MediaQueryList) => {
            if (e.matches) {
                body.classList.add("mobile");
            } else {
                body.classList.remove("mobile");
            }
        };

        // Initialize on mount
        handleMobileClass(mobileQuery);

        // Listen for changes
        mobileQuery.addEventListener("change", handleMobileClass);

        // Cleanup listener on unmount
        return () =>
            mobileQuery.removeEventListener("change", handleMobileClass);
    }, []);

    return null; // This component doesn't render anything visual
}
