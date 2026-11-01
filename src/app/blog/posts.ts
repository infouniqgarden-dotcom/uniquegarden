export type BlogPost = {
    slug: string;
    title: string;
    excerpt: string;
    category: string;
    date: string;
    readTime: number;
};

// Newest first. Used by the blog listing and the homepage "Latest articles" section.
export const posts: BlogPost[] = [
    {
        slug: "artificial-grass-uae",
        title: "Artificial Grass in the UAE: Is It Right for Your Garden? A 2025 Buyer's Guide",
        excerpt:
            "Artificial grass accounts for 40% of residential lawn installations in Dubai. But quality varies enormously and the wrong product turns your garden into a 75°C heat trap. Here is what to specify and what to avoid.",
        category: "Garden Design",
        date: "July 15, 2025",
        readTime: 7,
    },
    {
        slug: "vertical-gardens-green-walls-uae",
        title: "Vertical Gardens & Green Walls in the UAE: Design, Cost & Maintenance Guide",
        excerpt:
            "Green walls reduce wall surface temperatures by up to 20°C, improve air quality, and solve the UAE's horizontal space problem. Here is how to design one that actually survives the Gulf climate.",
        category: "Garden Design",
        date: "July 12, 2025",
        readTime: 6,
    },
    {
        slug: "pergolas-outdoor-living-uae",
        title: "Pergolas & Outdoor Shade Structures in the UAE: Types, Costs & Design Guide",
        excerpt:
            "In a country where summer temperatures exceed 45°C, shade is not a luxury. Here is everything UAE homeowners need to know about pergola materials, costs, municipality approvals, and what actually works in the Gulf climate.",
        category: "Garden Design",
        date: "July 10, 2025",
        readTime: 7,
    },
    {
        slug: "outdoor-lighting-uae-gardens",
        title: "Outdoor Garden Lighting UAE: Design Ideas, Costs & What Actually Works",
        excerpt:
            "A well-lit garden extends usable hours, improves security, and transforms how a property reads after dark. Here is how to specify outdoor lighting correctly for the UAE, with real cost data and DEWA wiring rules.",
        category: "Garden Design",
        date: "July 1, 2025",
        readTime: 6,
    },
    {
        slug: "landscaping-cost-uae",
        title: "How Much Does Landscaping Cost in the UAE? A 2025 Price Guide",
        excerpt:
            "Softscape, hardscape, irrigation, pools, costs vary widely across UAE. Here's a data-driven breakdown of what residential and commercial landscaping actually costs in Dubai and Sharjah.",
        category: "Costs & Planning",
        date: "June 15, 2025",
        readTime: 7,
    },
    {
        slug: "best-plants-uae-gardens",
        title: "Best Plants for UAE Gardens: What Actually Thrives in the Heat",
        excerpt:
            "With summer temperatures hitting 48°C and soil that's mostly sand, plant selection makes or breaks a UAE garden. Here are the trees, shrubs, and groundcovers that genuinely survive.",
        category: "Plant Guide",
        date: "May 10, 2025",
        readTime: 6,
    },
    {
        slug: "softscape-vs-hardscape",
        title: "Softscape vs Hardscape: What's the Difference and What Does Your Garden Need?",
        excerpt:
            "Two terms every UAE homeowner hears when planning a garden. Understanding both helps you design smarter, budget accurately, and get a garden that works in the Gulf climate.",
        category: "Garden Design",
        date: "April 20, 2025",
        readTime: 5,
    },
    {
        slug: "garden-maintenance-dubai-summer",
        title: "How to Maintain Your Garden Through Dubai's Brutal Summer",
        excerpt:
            "From May to September, ground temperatures exceed 60°C. Without the right care strategy, even tough plants fail. Here's exactly what professional landscapers do to keep UAE gardens alive.",
        category: "Maintenance",
        date: "March 5, 2025",
        readTime: 6,
    },
    {
        slug: "irrigation-systems-uae",
        title: "Irrigation Systems in the UAE: Drip vs Sprinkler, Complete 2025 Guide",
        excerpt:
            "The right irrigation system can cut water bills by 40–60% in UAE gardens. Here's how drip and sprinkler systems compare, with real cost data, smart controller options, and DEWA regulations.",
        category: "Irrigation",
        date: "February 8, 2025",
        readTime: 7,
    },
];
