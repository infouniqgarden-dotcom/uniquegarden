import "./footer.scss";
import Image from "next/image";
import Link from "next/link";

interface NavLink {
    name: string;
    href: string;
}

interface ServicesLink {
    name: string;
    href: string;
}

export default function Footer() {
    const links: NavLink[] = [
        // { name: "Home", href: "/" },
        { name: "About Us", href: "#about-us" },
        { name: "Services", href: "#our-services" },
        { name: "Projects", href: "#our-projects" },
        { name: "Gallery", href: "#gallery" },
        { name: "Careers", href: "#careers" },
    ];

    const serviceLinks: ServicesLink[] = [
        { name: "Soft Landscaping", href: "#" },
        { name: "Hard Landscaping", href: "#" },
        { name: "Pergolas & Gazebos", href: "#" },
        { name: "Pebble Gardens", href: "#" },
        { name: "Irrigation Systems", href: "#" },
        { name: "Vertical Gardens", href: "#" },
        { name: "Civil Works", href: "#" },
        { name: "MEP Works", href: "#" },
        { name: "Water Features", href: "#" },
        { name: "Swimming Pools", href: "#" },
    ];

    return (
        <footer id="footer">
            <div className="container">
                <div className="row-one">
                    <div className="column-one">
                        <div className="brand-logo">
                            <Link href="/">
                                <Image src="./brand-name-logo.svg" alt="Brand Logo" width={192} height={48} />
                            </Link>
                        </div>
                        <h6>Unique Garden Tech Cont. LLC</h6>
                        <p className="description">Providing landscaping, pool, and construction services in Dubai & Sharjah.</p>
                        <p className="address">No. 2, Building 3610, Muwailih Commercial, Sharjah, UAE</p>
                    </div>
                    <div className="column-two">
                        <div className="contact-us">
                            <div className="overline-3">Contact Us</div>
                            <div className="mails">
                                <div className="mail">
                                    <div className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <g opacity="0.8">
                                                <path d="M2 6L8.913 9.917C11.462 11.361 12.538 11.361 15.087 9.917L22 6" stroke="white" strokeWidth="2" strokeLinejoin="round" />
                                                <path
                                                    d="M2.01581 13.4756C2.08081 16.5406 2.11381 18.0736 3.24481 19.2086C4.37581 20.3446 5.94981 20.3836 9.09881 20.4626C11.0388 20.5126 12.9608 20.5126 14.9008 20.4626C18.0498 20.3836 19.6238 20.3446 20.7548 19.2086C21.8858 18.0736 21.9188 16.5406 21.9848 13.4756C22.0048 12.4896 22.0048 11.5096 21.9848 10.5236C21.9188 7.4586 21.8858 5.9256 20.7548 4.7906C19.6238 3.6546 18.0498 3.6156 14.9008 3.5366C12.9671 3.4878 11.0325 3.4878 9.09881 3.5366C5.94981 3.6156 4.37581 3.6546 3.24481 4.7906C2.11381 5.9256 2.08081 7.4586 2.01481 10.5236C1.99376 11.5075 1.99476 12.4917 2.01581 13.4756Z"
                                                    stroke="white"
                                                    strokeWidth="2"
                                                    strokeLinejoin="round"
                                                />
                                            </g>
                                        </svg>
                                    </div>
                                    <p>
                                        <a href="mailto:info.uniqgarden@gmail.com">info.uniqgarden@gmail.com</a>
                                    </p>
                                </div>
                            </div>
                            <div className="phone-numbers">
                                <div className="phone-number">
                                    <div className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <g opacity="0.8">
                                                <path
                                                    d="M9.15953 5.712L8.75653 4.806C8.49353 4.214 8.36153 3.918 8.16453 3.691C7.91808 3.40671 7.59643 3.19771 7.23653 3.088C6.94953 3 6.62553 3 5.97653 3C5.02853 3 4.55453 3 4.15653 3.182C3.66556 3.42054 3.28551 3.83927 3.09553 4.351C2.95253 4.764 2.99353 5.189 3.07553 6.04C3.94887 15.09 8.91087 20.0517 17.9615 20.925C18.8115 21.007 19.2365 21.048 19.6505 20.905C20.1617 20.715 20.58 20.3354 20.8185 19.845C21.0005 19.446 21.0005 18.972 21.0005 18.024C21.0005 17.375 21.0005 17.051 20.9125 16.764C20.8025 16.404 20.5935 16.083 20.3095 15.836C20.0835 15.639 19.7865 15.508 19.1945 15.244L18.2885 14.842C17.6465 14.557 17.3265 14.414 17.0005 14.383C16.6884 14.353 16.3736 14.3969 16.0815 14.511C15.7765 14.63 15.5075 14.854 14.9675 15.304C14.4305 15.751 14.1625 15.974 13.8345 16.094C13.5197 16.2029 13.1839 16.2374 12.8535 16.195C12.5075 16.145 12.2435 16.003 11.7135 15.72C10.0685 14.84 9.16053 13.933 8.28053 12.287C7.99753 11.757 7.85653 11.493 7.80553 11.147C7.76294 10.817 7.79716 10.4816 7.90553 10.167C8.02553 9.838 8.24953 9.57 8.69653 9.033C9.14653 8.493 9.37153 8.224 9.48953 7.919C9.60353 7.627 9.64753 7.312 9.61753 7C9.58753 6.674 9.44453 6.354 9.15853 5.712H9.15953Z"
                                                    stroke="white"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                />
                                            </g>
                                        </svg>
                                    </div>
                                    <p>
                                        <a href="tel:+971586044013">+971 58 604 4013</a> • <a href="tel:+971586044544">+971 58 604 4544</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="follow-us">
                            <div className="overline-3">Follow Us</div>
                            <div className="social-media-links">
                                <a href="https://www.instagram.com/unique_garden_tech_cont/" target="_blank" rel="noopener noreferrer">
                                    <Image src="./instagram-icon.svg" alt="Instagram" width={24} height={24} />
                                </a>
                                <a href="https://www.linkedin.com/company/unique-garden-tech-cont-llc/" target="_blank" rel="noopener noreferrer">
                                    <Image src="./linkedin-icon.svg" alt="LinkedIn" width={24} height={24} />
                                </a>
                                <a href="https://www.facebook.com/uniquegardentech" target="_blank" rel="noopener noreferrer">
                                    <Image src="./facebook-icon.svg" alt="Facebook" width={24} height={24} />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="column-three">
                        <div className="quick-links">
                            <div className="overline-3">Quick links</div>
                            <div className="menu-items">
                                <ul className="list">
                                    {links.map((link) => (
                                        <li key={link.name}>
                                            <Link href={link.href}>{link.name}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="our-services">
                            <div className="overline-3">Our Services</div>
                            <ul className="list">
                                {serviceLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link href={link.href}>{link.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row-two">
                    <p>Copyright © 2025 Unique Garden Tech Cont. LLC</p>
                    <p>
                        <span>
                            Designed by
                            <a href="#">
                                <Image src="./thegridlabs.png" alt="Brand Logo" width={130} height={21} />
                            </a>
                        </span>
                        <span>•</span>
                        <span>
                            Developed by
                            <a href="#">
                                <b>A V Gowtham</b>
                            </a>
                        </span>
                    </p>
                </div>
            </div>
        </footer>
    );
}
