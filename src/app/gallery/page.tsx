import Link from "next/link";
import GallerySlider from "../components/GallerySlider";

export default function Gallery() {
    return (
        <main className="gallery-page">
            <section className="widget-wrapper gallery-slider">
                <div className="widget-wrapper text-group">
                    <div className="text-content-wrapper">
                        <h2>Wall of Works</h2>
                        <p>The page couldn’t be loaded right now. Please try again later.</p>
                        <Link href="./" className="btn">
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
