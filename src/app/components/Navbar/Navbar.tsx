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
        { name: "Careers", href: "/careers" },
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

    // useEffect(() => {
    //     console.log("useEffect running"); // Check if useEffect runs

    //     const initAnimation = async () => {
    //         console.log("initAnimation called"); // Check if function is called
    //         const { gsap } = await import("gsap");
    //         console.log("GSAP loaded:", gsap); // Check if GSAP loads

    //         const element = document.querySelector(".navbar .container");
    //         console.log("Element found:", element); // Check if element exists

    //         gsap.to(".navbar .container", {
    //             opacity: 1,
    //             scale: 1,
    //             duration: 0.6,
    //             ease: "back.out(1.2)",
    //             delay: 0.1,
    //             onStart: () => console.log("Animation started"),
    //             onComplete: () => console.log("Animation completed"),
    //         });
    //     };

    //     // Only animate on initial load
    //     if (typeof window !== "undefined" && window.sessionStorage.getItem("navAnimated") !== "true") {
    //         console.log("First load - animating");
    //         initAnimation();
    //         window.sessionStorage.setItem("navAnimated", "true");
    //     } else {
    //         console.log("Already animated - showing instantly");
    //         const showNav = async () => {
    //             const { gsap } = await import("gsap");
    //             gsap.set(".navbar .container", { opacity: 1, scale: 1 });
    //         };
    //         showNav();
    //     }
    // }, []);

    return (
        <nav role="navigation" aria-label="Main navigation">
            <div className={`navbar ${open ? "open" : ""}`}>
                <div className="modal" onClick={() => setOpen(false)} aria-hidden="true"></div>
                <div className="container">
                    <div className="brand-logo">
                        <Link href="/" onClick={() => setOpen(false)} aria-label="Home">
                            <Image src="/brand-name-logo.svg" alt="Unique Garden Home" width={192} height={48} priority loading="eager" fetchPriority="high" />
                        </Link>
                    </div>

                    <div className="menu-items" id="primary-navigation">
                        <ul className="list" role="menubar">
                            {links.map((link) => (
                                <li key={link.href} role="none">
                                    <Link
                                        href={link.href}
                                        className={isActive(link.href) ? "active" : ""}
                                        onClick={() => setOpen(false)}
                                        aria-current={isActive(link.href) ? "page" : undefined}
                                        role="menuitem"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <Link href="/contact-us" className={"btn"} onClick={() => setOpen(false)} aria-label="Contact Unique Garden">
                            Contact Us
                        </Link>
                    </div>
                    <Link href="/contact-us" className={"btn"} aria-label="Contact Unique Garden">
                        Contact Us
                    </Link>

                    <Hamburger open={open} setOpenAction={setOpen} aria-expanded={open} aria-controls="primary-navigation" aria-label="Toggle navigation menu" />
                </div>
            </div>
        </nav>
    );
}
