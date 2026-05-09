import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Unique Garden Tech Cont LLC",
        short_name: "Unique Garden",
        description: "Premium landscaping, irrigation, HVAC & MEP services across the UAE.",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#027833",
        icons: [
            { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
            { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
        ],
    };
}
