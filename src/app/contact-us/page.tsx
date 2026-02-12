import Image from "next/image";
import Testimonials from "../components/Testimonials";
import RequestAQuote from "../components/RequestAQuote";
import ContactForm from "../components/ContactForm";

export default function ContactPage() {
    return (
        <main className="contact-us-page">
            <section className="widget-wrapper hero-banner">
                <div className="image-content-wrapper">
                    <Image
                        src="https://raw.githubusercontent.com/gowthamavtech/unique-garden-img/main/Contact-Us-(Hero-Image).webp"
                        alt="Unique Garden Hero Banner"
                        width={1920}
                        height={1080}
                        priority
                    />
                </div>
                <div className="text-content">
                    <div className="text-content-wrapper">
                        <h1>Contact Us</h1>
                        <p>Reach out to Unique Garden Tech. Cont. LLC today to transform your outdoor spaces into stunning, functional, and long-lasting environments.</p>
                    </div>
                </div>
            </section>
            <section className="widget-wrapper contact-form-section">
                <div className="widget-wrapper text-group">
                    <div className="text-content-wrapper">
                        <h2>Reach out to us!</h2>
                        <p>
                            Whether you have questions about our services, want to discuss your project, or need a quote, we&apos;re here to help. Contact us today and let&apos;s
                            create something amazing together!
                        </p>
                        {/* <div className="contact-us">
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
                                        <a href="mailto:info@uniquegarden.ae" target="_blank">
                                            info@uniquegarden.ae
                                        </a>
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
                                        <a href="tel:+971586044013">+971 58 604 4013</a> • <a href="tel:+971555240544">+971 55 5240 544</a>
                                    </p>
                                </div>
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
                                        <a href="tel:+97165223391">+971 6 522 3391</a>
                                    </p>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
                <ContactForm />
            </section>
            <Testimonials />
            <RequestAQuote />
        </main>
    );
}
