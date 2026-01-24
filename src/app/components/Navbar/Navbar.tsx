"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import "./navbar.scss";
import { useState } from "react";

type HamburgerProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export function Hamburger({ open, setOpen }: HamburgerProps) {
    return (
        <div className={`hamburger-menu ${open ? "open" : ""}`}>
            <svg
                className="ham"
                viewBox="0 0 100 100"
                width="80"
                onClick={() => setOpen((prev) => !prev)}
                role="button"
                aria-label="Toggle menu"
            >
                <path
                    className="line top"
                    d="m 30,33 h 40 c 13.100415,0 14.380204,31.80258 6.899646,33.421777 -24.612039,5.327373 9.016154,-52.337577 -12.75751,-30.563913 l -28.284272,28.284272"
                />
                <path
                    className="line middle"
                    d="m 70,50 c 0,0 -32.213436,0 -40,0 -7.786564,0 -6.428571,-4.640244 -6.428571,-8.571429 0,-5.895471 6.073743,-11.783399 12.286435,-5.570707 6.212692,6.212692 28.284272,28.284272 28.284272,28.284272"
                />
                <path
                    className="line bottom"
                    d="m 69.575405,67.073826 h -40 c -13.100415,0 -14.380204,-31.80258 -6.899646,-33.421777 24.612039,-5.327373 -9.016154,52.337577 12.75751,30.563913 l 28.284272,-28.284272"
                />
            </svg>
        </div>
    );
}

interface NavLink {
    name: string;
    href: string;
}

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    const links: NavLink[] = [
        // { name: "Home", href: "/" },
        { name: "About Us", href: "#about-us" },
        { name: "Services", href: "#our-services" },
        { name: "Projects", href: "#our-projects" },
        { name: "Gallery", href: "#gallery" },
        { name: "Careers", href: "#careers" },
    ];

    // useEffect(() => {
    //     document.body.classList.toggle("no-scroll-menu", open);

    //     return () => {
    //         document.body.classList.remove("no-scroll-menu");
    //     };
    // }, [open]);

    // useEffect(() => {
    //     const handleResize = () => {
    //         if (window.innerWidth > 767) {
    //             setOpen(false);
    //         }
    //     };

    //     window.addEventListener("resize", handleResize);

    //     return () => {
    //         window.removeEventListener("resize", handleResize);
    //     };
    // }, []);

    return (
        <nav>
            <div className={`navbar ${open ? "open" : ""}`}>
                <div className="modal" onClick={() => setOpen(false)}></div>
                <div className="container">
                    <div className="brand-logo">
                        <Link href="/" onClick={() => setOpen(false)}>
                            <Image
                                src="/brand-name-logo.svg"
                                alt="Brand Logo"
                                width={192}
                                height={48}
                            />
                        </Link>
                    </div>

                    <div className="menu-items">
                        <ul className="list">
                            {links.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className={
                                            pathname === link.href ||
                                            pathname.startsWith(link.href + "/")
                                                ? "active"
                                                : ""
                                        }
                                        onClick={() => setOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <Link href={"tel:+919876543210"} className={"btn"}>
                            Contact Us
                        </Link>
                    </div>
                    <Link href={"tel:+919876543210"} className={"btn"}>
                        Contact Us
                    </Link>

                    <Hamburger open={open} setOpen={setOpen} />
                </div>
            </div>
        </nav>
    );
}
