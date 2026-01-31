import Link from "next/link";

export default function RequestAQuote() {
    return (
        <section className="widget-wrapper request-a-quote" id="request-a-quote">
            <div className="text-content">
                <div className="text-content-wrapper">
                    <h2>Ready to Transform Your Outdoor Space</h2>
                    <p>Let’s design and build your dream garden, pool, or outdoor living area.</p>
                </div>
                <Link href={"tel:+97165223391"} className={"btn"}>
                    Request a quote
                </Link>
            </div>
        </section>
    );
}
