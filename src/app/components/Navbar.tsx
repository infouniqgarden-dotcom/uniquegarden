"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

interface NavLink {
    name: string;
    href: string;
}

export default function Navbar() {
    const pathname = usePathname();

    const links: NavLink[] = [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about-us" },
        { name: "Services", href: "/services" },
        { name: "Projects", href: "/projects" },
        { name: "Gallery", href: "/gallery" },
        { name: "Careers", href: "/careers" },
    ];

    return (
        <nav
            className="navbar max-w-[1560px] m-auto p-6.5
        flex items-center justify-between bg-[#141414cc] rounded-[100px]"
        >
            <div className="brand-logo">
                <Link href="/">
                    <Image
                        src="/brand-name-logo.svg"
                        alt="Brand Logo"
                        width={192}
                        height={48}
                    />
                </Link>
            </div>

            <div className="menu-items">
                <ul className="flex gap-12 list-none algin-center">
                    {links.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className={`color-white ${
                                    pathname === link.href ||
                                    pathname.startsWith(link.href + "/")
                                        ? "active"
                                        : ""
                                }`}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <Link href={"/contact-us"} className={".btn"}>
                Contact Us
            </Link>
        </nav>
    );
}
