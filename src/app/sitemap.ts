import { MetadataRoute } from "next";
export const dynamic = "force-static";
export const revalidate = false;

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://uniquegarden.ae";

    const routes = [
        { path: "", priority: 1, changeFreq: "monthly" as const },
        { path: "/about-us", priority: 0.8, changeFreq: "monthly" as const },
        { path: "/services", priority: 0.8, changeFreq: "monthly" as const },
        { path: "/projects", priority: 0.8, changeFreq: "monthly" as const },
        { path: "/gallery", priority: 0.8, changeFreq: "monthly" as const },
        { path: "/careers", priority: 0.6, changeFreq: "weekly" as const },
        { path: "/contact-us", priority: 0.9, changeFreq: "monthly" as const },

        // Individual project pages
        { path: "/projects/al-tawr-villa-sulthan-shamshi", priority: 0.7, changeFreq: "monthly" as const },
        { path: "/projects/al-tawr-villa-walid", priority: 0.7, changeFreq: "monthly" as const },
        { path: "/projects/bmj-industries", priority: 0.7, changeFreq: "monthly" as const },
        { path: "/projects/abudhabi-private-villa", priority: 0.7, changeFreq: "monthly" as const },
    ];

    return routes.map((route) => ({
        url: `${baseUrl}${route.path}`,
        lastModified: new Date(),
        changeFrequency: route.changeFreq,
        priority: route.priority,
    }));
}
