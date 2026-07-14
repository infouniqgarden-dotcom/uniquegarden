import type { Metadata } from "next";
import Image from "next/image";
import Breadcrumb from "../components/Breadcrumb";
import RequestAQuote from "../components/RequestAQuote";

const SITE_URL = "https://uniquegarden.ae/terms-and-conditions";

export const metadata: Metadata = {
    title: "Terms & Conditions | Unique Garden Tech UAE",
    description:
        "Read the Terms and Conditions governing your use of the Unique Garden Tech Cont. LLC website and services — landscaping, irrigation, HVAC, and MEP services in the UAE.",
    keywords: ["terms and conditions UAE", "Unique Garden Tech terms", "landscaping company terms UAE", "website terms of use UAE"],
    alternates: { canonical: SITE_URL },
    openGraph: {
        type: "website",
        locale: "en_AE",
        url: SITE_URL,
        title: "Terms & Conditions | Unique Garden Tech UAE",
        description: "Read the Terms and Conditions governing your use of the Unique Garden Tech Cont. LLC website and services.",
        siteName: "Unique Garden Tech Cont LLC",
        images: [
            {
                url: "https://uniquegarden.ae/images/brand-logo.jpg",
                width: 1200,
                height: 630,
                alt: "Unique Garden Tech Cont LLC — Terms & Conditions",
                type: "image/jpeg",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Terms & Conditions | Unique Garden Tech UAE",
        description: "Read the Terms and Conditions governing your use of the Unique Garden Tech Cont. LLC website and services.",
        images: ["https://uniquegarden.ae/images/brand-logo.jpg"],
    },
};

export default function TermsAndConditions() {
    return (
        <main className="legal-page">
            <section className="widget-wrapper hero-banner">
                <div className="image-content-wrapper">
                    <Image
                        src="/images/02-About-Us/About-Us-(Hero-Image).webp"
                        alt="Unique Garden Tech — Terms and Conditions"
                        width={1920}
                        height={1080}
                        priority
                        loading="eager"
                        fetchPriority="high"
                        sizes="100vw"
                        quality={85}
                    />
                </div>
                <div className="text-content">
                    <div className="text-content-wrapper">
                        <h1>Terms &amp; Conditions</h1>
                        <p>
                            Please read these terms carefully before using our website or engaging our services. By accessing this site you agree to be bound by the terms set out
                            below.
                        </p>
                    </div>
                </div>
            </section>

            <Breadcrumb items={[{ label: "Terms & Conditions" }]} />

            <section className="widget-wrapper legal-content-section">
                <div className="legal-content">
                    <p className="last-updated-badge">Last updated: July 14, 2026</p>

                    <div className="legal-toc">
                        <h3>Table of Contents</h3>
                        <ol>
                            <li>
                                <a href="#section-1">Introduction</a>
                            </li>
                            <li>
                                <a href="#section-2">Use of Website</a>
                            </li>
                            <li>
                                <a href="#section-3">Services &amp; Quotations</a>
                            </li>
                            <li>
                                <a href="#section-4">Intellectual Property</a>
                            </li>
                            <li>
                                <a href="#section-5">Limitation of Liability</a>
                            </li>
                            <li>
                                <a href="#section-6">Privacy</a>
                            </li>
                            <li>
                                <a href="#section-7">Governing Law</a>
                            </li>
                            <li>
                                <a href="#section-8">Changes to Terms</a>
                            </li>
                            <li>
                                <a href="#section-9">Contact Us</a>
                            </li>
                        </ol>
                    </div>

                    <div id="section-1" className="legal-section">
                        <h2>1. Introduction</h2>
                        <p>
                            These Terms and Conditions (&quot;Terms&quot;) govern your access to and use of the website located at{" "}
                            <a href="https://uniquegarden.ae">https://uniquegarden.ae</a> (&quot;the Website&quot;) operated by Unique Garden Tech Cont. LLC (&quot;Company&quot;,
                            &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;), a company incorporated and operating in the United Arab Emirates.
                        </p>
                        <p>
                            By accessing, browsing, or using any part of this Website, you acknowledge that you have read, understood, and agree to be bound by these Terms in their
                            entirety. If you do not agree with any part of these Terms, you must discontinue your use of the Website immediately.
                        </p>
                        <p>
                            These Terms apply to all visitors, users, and others who access or use the Website, including individuals seeking information about our landscaping,
                            garden design, irrigation, HVAC, and MEP services.
                        </p>
                    </div>

                    <div id="section-2" className="legal-section">
                        <h2>2. Use of Website</h2>
                        <p>
                            You may use this Website solely for lawful purposes and in a manner consistent with all applicable laws and regulations of the United Arab Emirates. You
                            agree that you will not:
                        </p>
                        <ul>
                            <li>Use the Website in any way that violates applicable local, national, or international laws or regulations, including those of the UAE</li>
                            <li>Transmit or upload any unsolicited commercial communications, spam, or promotional materials without our express written consent</li>
                            <li>Attempt to gain unauthorized access to any portion of the Website, its servers, or any related database or system</li>
                            <li>Upload, transmit, or distribute any malicious code, viruses, trojans, ransomware, or any other harmful software</li>
                            <li>Engage in any activity that disrupts, damages, overburdens, or impairs the proper functioning of the Website or its infrastructure</li>
                            <li>Scrape, harvest, or systematically extract data or content from the Website using automated means without our prior written permission</li>
                            <li>Impersonate any person or entity, or falsely represent your affiliation with any person or entity, when using this Website</li>
                        </ul>
                        <p>
                            We reserve the right, at our sole discretion, to restrict or terminate your access to the Website at any time and for any reason without notice,
                            including if we believe you have violated these Terms.
                        </p>
                    </div>

                    <div id="section-3" className="legal-section">
                        <h2>3. Services &amp; Quotations</h2>
                        <p>
                            The information presented on this Website regarding our landscaping, garden design, irrigation systems, HVAC, and MEP services is provided for general
                            informational purposes only and does not constitute a binding offer or contractual commitment.
                        </p>
                        <p>All project quotations and proposals issued by Unique Garden Tech Cont. LLC are subject to the following conditions:</p>
                        <ul>
                            <li>
                                <strong>Site assessment:</strong> All quotations are contingent upon a physical inspection of the project site by our technical team. Information
                                submitted via the Website&apos;s contact form is preliminary and does not constitute a confirmed quotation.
                            </li>
                            <li>
                                <strong>Material availability:</strong> Quoted materials and plant selections are subject to availability at the time of project commencement.
                                Substitutions of equivalent specification may be offered where necessary.
                            </li>
                            <li>
                                <strong>Pricing:</strong> Any indicative pricing referenced on the Website is subject to change without notice. Final pricing will be confirmed in a
                                formal written proposal signed by an authorised representative of Unique Garden Tech Cont. LLC.
                            </li>
                            <li>
                                <strong>Contract requirement:</strong> No service, design, or construction work will commence without a formal signed agreement between the client
                                and Unique Garden Tech Cont. LLC. The Website does not constitute such an agreement.
                            </li>
                        </ul>
                        <p>
                            We endeavour to ensure that all descriptions of our services and project portfolio are accurate and up to date; however, we do not warrant that such
                            information is free from errors or omissions.
                        </p>
                    </div>

                    <div id="section-4" className="legal-section">
                        <h2>4. Intellectual Property</h2>
                        <p>
                            All content published on this Website — including but not limited to text, graphics, logos, photographs, project imagery, videos, design concepts,
                            layouts, and compiled code — is the exclusive property of Unique Garden Tech Cont. LLC or its respective licensors.
                        </p>
                        <p>
                            Such content is protected under UAE Federal Law No. 7 of 2002 on Copyrights and Neighbouring Rights, as amended by Federal Law No. 32 of 2021, as well
                            as applicable international copyright treaties to which the UAE is a signatory.
                        </p>
                        <p>You are expressly prohibited from:</p>
                        <ul>
                            <li>Reproducing, distributing, publishing, or transmitting any content from this Website without our prior written consent</li>
                            <li>Modifying, adapting, translating, or creating derivative works based on any content from this Website</li>
                            <li>Using our company name, logo, trademarks, or service marks in any manner without our prior written permission</li>
                            <li>Removing, altering, or obscuring any copyright, trademark, or other proprietary rights notices from our content</li>
                        </ul>
                        <p>
                            Limited permission is granted to view and print a single copy of pages from this Website for your personal, non-commercial use only, provided that you
                            retain all copyright and proprietary notices. This permission does not extend to any project designs, landscape plans, or technical drawings, which
                            remain exclusively proprietary.
                        </p>
                    </div>

                    <div id="section-5" className="legal-section">
                        <h2>5. Limitation of Liability</h2>
                        <p>
                            To the fullest extent permitted by the laws of the United Arab Emirates, Unique Garden Tech Cont. LLC, its directors, officers, employees, agents, and
                            service providers shall not be liable for any loss or damage of any kind arising from or in connection with:
                        </p>
                        <ul>
                            <li>Your use of, or inability to use, this Website or any content thereon</li>
                            <li>Any reliance placed on information, estimates, or descriptions published on this Website, including any inaccuracies or omissions</li>
                            <li>Unauthorized access to or alteration of your data or transmissions in connection with the Website</li>
                            <li>
                                Any interruption, suspension, or termination of the Website, including due to technical failure, maintenance, or circumstances beyond our reasonable
                                control
                            </li>
                            <li>Links to third-party websites or services accessed from this Website, for which we assume no responsibility</li>
                        </ul>
                        <p>
                            We make no representations or warranties, express or implied, regarding the accuracy, completeness, reliability, or fitness for any particular purpose
                            of any content published on this Website. The Website and all content are provided on an &quot;as is&quot; and &quot;as available&quot; basis.
                        </p>
                        <p>
                            Nothing in these Terms excludes or limits our liability for death or personal injury caused by negligence, or for any liability that cannot lawfully be
                            limited or excluded under UAE law.
                        </p>
                    </div>

                    <div id="section-6" className="legal-section">
                        <h2>6. Privacy</h2>
                        <p>
                            Your use of this Website is also governed by our <a href="/privacy-policy">Privacy Policy</a>, which is incorporated into these Terms and Conditions by
                            reference. Please review our Privacy Policy carefully, as it describes how we collect, use, and safeguard the personal information you provide when
                            using this Website.
                        </p>
                        <p>
                            We are committed to protecting your personal data in accordance with UAE Federal Decree-Law No. 45 of 2021 on the Protection of Personal Data
                            (&quot;PDPL&quot;) and any implementing regulations issued thereunder. By submitting your personal information through this Website, you consent to its
                            processing as described in our Privacy Policy.
                        </p>
                    </div>

                    <div id="section-7" className="legal-section">
                        <h2>7. Governing Law</h2>
                        <p>
                            These Terms and Conditions, and any disputes or claims arising out of or in connection with them or their subject matter, shall be governed by and
                            construed exclusively in accordance with the laws of the United Arab Emirates, including applicable Federal laws and, where relevant, the laws and
                            regulations of the Emirate of Sharjah.
                        </p>
                        <p>
                            Any legal dispute arising in connection with these Terms that cannot be resolved amicably shall be submitted to the exclusive jurisdiction of the
                            competent courts of Sharjah, United Arab Emirates. By using this Website, you irrevocably submit to the personal jurisdiction of such courts.
                        </p>
                    </div>

                    <div id="section-8" className="legal-section">
                        <h2>8. Changes to Terms</h2>
                        <p>
                            We reserve the right to amend, update, or replace these Terms and Conditions at any time at our sole discretion. Any changes will be effective
                            immediately upon publication of the revised Terms on this Website. The &quot;Last updated&quot; date at the top of this page will be revised
                            accordingly.
                        </p>
                        <p>
                            Your continued access to or use of this Website following the posting of any changes to these Terms constitutes your acceptance of the revised Terms. We
                            therefore encourage you to review this page periodically. If you do not agree with the revised Terms, you must cease using this Website.
                        </p>
                    </div>

                    <div id="section-9" className="legal-section">
                        <h2>9. Contact Us</h2>
                        <p>If you have any questions, concerns, or requests relating to these Terms and Conditions, please do not hesitate to contact us:</p>
                        <ul>
                            <li>
                                <strong>Company:</strong> Unique Garden Tech Cont. LLC
                            </li>
                            <li>
                                <strong>Address:</strong> No - 02, Building No: 3610, Muweilah, Sharjah 27960, United Arab Emirates
                            </li>
                            <li>
                                <strong>Email:</strong> <a href="mailto:info@uniquegarden.ae">info@uniquegarden.ae</a>
                            </li>
                            <li>
                                <strong>Phone:</strong> <a href="tel:+971586044013">+971-58-6044013</a>
                            </li>
                        </ul>
                        <p>We aim to respond to all enquiries within two business days.</p>
                    </div>
                </div>
            </section>

            <RequestAQuote />
        </main>
    );
}
