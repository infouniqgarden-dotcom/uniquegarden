import Link from "next/link";
import GallerySlider from "../components/GallerySlider";

export default function Gallery() {
    return (
        <main className="gallery-page">
            <section className="widget-wrapper gallery-slider">
                <div className="widget-wrapper text-group">
                    <div className="text-content-wrapper">
                        <h2>Wall of Works</h2>
                        <p>
                            Our gallery is a reflection of what we build and believe in. Each project displayed here demonstrates our expertise, style, and pursuit of excellence.
                            Take a look around and discover how we turn vision into reality.
                        </p>
                        <Link href="/" className="btn">
                            Go to home
                        </Link>
                    </div>
                </div>

                <div className="widget-wrapper sliders">
                    <GallerySlider row="row1" reverseDirection={true} />
                    <GallerySlider row="row2" reverseDirection={false} />
                </div>
            </section>
        </main>
    );
}
