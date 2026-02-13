import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://gowthamavtech.github.io/unique-garden/"; // Replace with your actual domain

    // List all your actual pages here
    const routes = [
        { path: "", priority: 1, changeFreq: "monthly" as const },
        { path: "/about-us", priority: 0.8, changeFreq: "monthly" as const },
        { path: "/careers", priority: 0.8, changeFreq: "weekly" as const },
        { path: "/projects", priority: 0.8, changeFreq: "monthly" as const },
        { path: "/services", priority: 0.8, changeFreq: "monthly" as const },
        { path: "/gallery", priority: 0.8, changeFreq: "monthly" as const },
        { path: "/contact-us", priority: 0.8, changeFreq: "monthly" as const },

        // Individual project pages
        { path: "/projects/project01", priority: 0.6, changeFreq: "monthly" as const },
    ];

    return routes.map((route) => ({
        url: `${baseUrl}${route.path}`,
        lastModified: new Date(),
        changeFrequency: route.changeFreq,
        priority: route.priority,
    }));
}
