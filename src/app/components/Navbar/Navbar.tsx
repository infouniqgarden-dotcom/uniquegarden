"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import "./navbar.scss";
import { useState } from "react";
import Hamburger from "./Hamburger";

interface NavLink {
    name: string;
    href: string;
}

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    const links: NavLink[] = [
        // { name: "Home", href: "/" },
        { name: "About Us", href: "./about-us" },
        { name: "Services", href: "./#our-services" },
        { name: "Projects", href: "./#our-projects" },
        { name: "Gallery", href: "./#gallery" },
        { name: "Careers", href: "./#careers" },
    ];

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
                                    <Link
                                        href={link.href}
                                        className={pathname === link.href || pathname.startsWith(link.href + "/") ? "active" : ""}
                                        onClick={() => setOpen(false)}
                                    >
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
