"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import "./navbar.scss";
import { useState, useEffect } from "react";
import Hamburger from "./Hamburger";

interface NavLink {
    name: string;
    href: string;
}

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [activeHash, setActiveHash] = useState("");
    const pathname = usePathname();

    // Track hash changes
    useEffect(() => {
        const handleHashChange = () => {
            setActiveHash(window.location.hash);
        };

        // Set initial hash
        setActiveHash(window.location.hash);

        // Listen for hash changes
        window.addEventListener("hashchange", handleHashChange);
        return () => window.removeEventListener("hashchange", handleHashChange);
    }, []);

    const links: NavLink[] = [
        { name: "About Us", href: "/about-us" },
        { name: "Services", href: "/services" },
        { name: "Projects", href: "/projects" },
        { name: "Gallery", href: "/gallery" },
        { name: "Careers", href: "/#careers" },
    ];

    const isActive = (href: string) => {
        // Check if it's a hash link
        if (href.includes("#")) {
            const [path, hash] = href.split("#");
            // For hash links, check both path and hash
            return pathname === (path || "/") && activeHash === `#${hash}`;
        }

        // Check exact match or if current path starts with link path
        return pathname === href || (href !== "/" && pathname.startsWith(href + "/"));
    };

    return (
        <nav>
            <div className={`navbar ${open ? "open" : ""}`}>
                <div className="modal" onClick={() => setOpen(false)}></div>
                <div className="container">
                    <div className="brand-logo">
                        <Link href="/" onClick={() => setOpen(false)}>
                            <Image src="./brand-name-logo.svg" alt="Brand Logo" width={192} height={48} />
                        </Link>
                    </div>

                    <div className="menu-items">
                        <ul className="list">
                            {links.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className={isActive(link.href) ? "active" : ""} onClick={() => setOpen(false)}>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <Link href={"tel:+97165223391"} className={"btn"}>
                            Contact Us
                        </Link>
                    </div>
                    <Link href={"tel:+97165223391"} className={"btn"}>
                        Contact Us
                    </Link>

                    <Hamburger open={open} setOpenAction={setOpen} />
                </div>
            </div>
        </nav>
    );
}
