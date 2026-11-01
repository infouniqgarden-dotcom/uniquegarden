/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: "export",
    // images: {
    //     unoptimized: true,
    //     remotePatterns: [
    //         {
    //             protocol: "https",
    //             hostname: "raw.githubusercontent.com",
    //         },
    //     ],
    // },
    images: {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048], // Removed 3840
        formats: ["image/avif", "image/webp"], // AVIF is even smaller than WebP
    },
    // Keep *.vercel.app copies of the site (preview and default Vercel URLs) out of Google.
    // Only https://uniquegarden.ae should be indexed.
    async headers() {
        return [
            {
                source: "/:path*",
                has: [{ type: "host", value: ".*\\.vercel\\.app" }],
                headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
            },
        ];
    },
};

module.exports = nextConfig;
