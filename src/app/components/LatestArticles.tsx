import Link from "next/link";
import BlogCard from "./BlogCard";
import { posts } from "../blog/posts";

// Shows the newest blog posts on the homepage so search engines can reach them in one click.
export default function LatestArticles({ count = 3 }: { count?: number }) {
    return (
        <section className="widget-wrapper latest-articles" id="latest-articles">
            <div className="widget-wrapper text-group">
                <div className="text-content-wrapper">
                    <p className="overline-1">Insights &amp; Guides</p>
                    <h2>Latest Landscaping Articles</h2>
                    <p>Practical advice on garden design, costs, plants, and irrigation for UAE homes.</p>
                    <Link href="/blog" className="btn" aria-label="View all blog articles">
                        View all articles
                    </Link>
                </div>
            </div>
            <div className="blog-grid">
                {posts.slice(0, count).map((post) => (
                    <BlogCard key={post.slug} post={post} />
                ))}
            </div>
        </section>
    );
}
