import { MetadataRoute } from "next";
export const dynamic = "force-static";
export const revalidate = false;

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://uniquegarden.ae";

    // lastModified = the date the page content last changed.
    // Update it when you edit a page. Don't use new Date(): it marks every page as changed on every deploy.
    const routes = [
        { path: "", lastModified: "2026-11-01", priority: 1, changeFreq: "monthly" as const },
        { path: "/about-us", lastModified: "2026-07-18", priority: 0.8, changeFreq: "monthly" as const },
        { path: "/services", lastModified: "2026-07-18", priority: 0.8, changeFreq: "monthly" as const },
        { path: "/projects", lastModified: "2026-07-18", priority: 0.8, changeFreq: "monthly" as const },
        { path: "/gallery", lastModified: "2026-07-14", priority: 0.8, changeFreq: "monthly" as const },
        { path: "/careers", lastModified: "2026-07-18", priority: 0.6, changeFreq: "weekly" as const },
        { path: "/contact-us", lastModified: "2026-07-14", priority: 0.9, changeFreq: "monthly" as const },

        // Individual project pages
        { path: "/projects/al-tawr-villa-sulthan-shamshi", lastModified: "2026-07-18", priority: 0.7, changeFreq: "monthly" as const },
        { path: "/projects/al-tawr-villa-walid", lastModified: "2026-07-18", priority: 0.7, changeFreq: "monthly" as const },
        { path: "/projects/bmj-industries", lastModified: "2026-07-18", priority: 0.7, changeFreq: "monthly" as const },
        { path: "/projects/abudhabi-private-villa", lastModified: "2026-07-18", priority: 0.7, changeFreq: "monthly" as const },

        // Blog listing and posts
        { path: "/blog", lastModified: "2026-11-01", priority: 0.7, changeFreq: "monthly" as const },
        { path: "/blog/artificial-grass-uae", lastModified: "2026-07-18", priority: 0.7, changeFreq: "monthly" as const },
        { path: "/blog/vertical-gardens-green-walls-uae", lastModified: "2026-07-19", priority: 0.7, changeFreq: "monthly" as const },
        { path: "/blog/pergolas-outdoor-living-uae", lastModified: "2026-07-18", priority: 0.7, changeFreq: "monthly" as const },
        { path: "/blog/outdoor-lighting-uae-gardens", lastModified: "2026-07-18", priority: 0.7, changeFreq: "monthly" as const },
        { path: "/blog/landscaping-cost-uae", lastModified: "2026-07-19", priority: 0.7, changeFreq: "monthly" as const },
        { path: "/blog/best-plants-uae-gardens", lastModified: "2026-07-19", priority: 0.7, changeFreq: "monthly" as const },
        { path: "/blog/softscape-vs-hardscape", lastModified: "2026-07-19", priority: 0.7, changeFreq: "monthly" as const },
        { path: "/blog/garden-maintenance-dubai-summer", lastModified: "2026-07-19", priority: 0.7, changeFreq: "monthly" as const },
        { path: "/blog/irrigation-systems-uae", lastModified: "2026-07-19", priority: 0.7, changeFreq: "monthly" as const },

        // Legal pages
        { path: "/terms-and-conditions", lastModified: "2026-07-18", priority: 0.3, changeFreq: "monthly" as const },
        { path: "/privacy-policy", lastModified: "2026-07-18", priority: 0.3, changeFreq: "monthly" as const },
    ];

    return routes.map((route) => ({
        url: `${baseUrl}${route.path}`,
        lastModified: new Date(route.lastModified),
        changeFrequency: route.changeFreq,
        priority: route.priority,
    }));
}
