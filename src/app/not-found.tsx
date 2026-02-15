import Image from "next/image";
import Link from "next/link";

// app/not-found.tsx
export default function NotFound() {
    return (
        <main className="404 not-found">
            <section className="widget-wrapper not-found">
                <div className="image-content-wrapper">
                    <Image src="https://raw.githubusercontent.com/gowthamavtech/unique-garden-img/main/404-Image.webp" alt="404 construction image" width={1920} height={1080} />
                </div>
                <div className="text-content-wrapper">
                    <h1>Something went wrong!</h1>
                    <p>The page couldn’t be loaded right now. Please try again later.</p>
                    <Link href="/" className="btn">
                        Go to home
                    </Link>
                </div>
            </section>
        </main>
    );
}
