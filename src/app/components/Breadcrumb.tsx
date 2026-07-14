import Link from "next/link";

interface BreadcrumbItem {
    label: string;
    href?: string;
}

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
    return (
        <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <ol
                className="breadcrumb-list"
                itemScope
                itemType="https://schema.org/BreadcrumbList"
            >
                <li
                    itemProp="itemListElement"
                    itemScope
                    itemType="https://schema.org/ListItem"
                >
                    <Link href="/" itemProp="item">
                        <span itemProp="name">Home</span>
                    </Link>
                    <meta itemProp="position" content="1" />
                </li>
                {items.map((item, index) => (
                    <li
                        key={index}
                        itemProp="itemListElement"
                        itemScope
                        itemType="https://schema.org/ListItem"
                    >
                        {item.href ? (
                            <Link href={item.href} itemProp="item">
                                <span itemProp="name">{item.label}</span>
                            </Link>
                        ) : (
                            <span itemProp="name">{item.label}</span>
                        )}
                        <meta itemProp="position" content={String(index + 2)} />
                    </li>
                ))}
            </ol>
        </nav>
    );
}
