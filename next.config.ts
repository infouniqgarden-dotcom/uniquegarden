/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: "https",
                hostname: "raw.githubusercontent.com",
            },
        ],
    },
    basePath: process.env.NODE_ENV === "production" ? "/unique-garden" : "",
    assetPrefix: process.env.NODE_ENV === "production" ? "/unique-garden" : "",
};

module.exports = nextConfig;
