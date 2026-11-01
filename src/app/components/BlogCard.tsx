import Link from "next/link";
import type { BlogPost } from "../blog/posts";

export default function BlogCard({ post }: { post: BlogPost }) {
    return (
        <Link href={`/blog/${post.slug}`} className="blog-card">
            <div className="blog-card-content">
                <div className="blog-card-meta">
                    <span className="category-tag">{post.category}</span>
                    <span className="read-time">{post.readTime} min read</span>
                </div>
                <div className="blog-card-title">
                    <h3>{post.title}</h3>
                </div>
                <p className="blog-card-excerpt p-sm">{post.excerpt}</p>
                <div className="blog-card-footer">
                    <span className="post-date">{post.date}</span>
                    <span className="read-more-link">
                        Read more
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path
                                d="M3 8h10M9 4l4 4-4 4"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </span>
                </div>
            </div>
        </Link>
    );
}
