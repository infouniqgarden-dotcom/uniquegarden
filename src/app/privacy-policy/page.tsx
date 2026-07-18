import type { Metadata } from "next";
import Image from "next/image";
import Breadcrumb from "../components/Breadcrumb";
import RequestAQuote from "../components/RequestAQuote";

const SITE_URL = "https://uniquegarden.ae/privacy-policy";

export const metadata: Metadata = {
    title: "Privacy Policy | Unique Garden Tech UAE",
    description:
        "Learn how Unique Garden Tech Cont. LLC collects, uses, and protects your personal data in accordance with UAE Federal Decree-Law No. 45 of 2021 on the Protection of Personal Data.",
    keywords: [
        "privacy policy UAE",
        "Unique Garden Tech privacy",
        "data protection UAE",
        "personal data UAE landscaping company",
        "PDPL UAE compliance",
    ],
    alternates: { canonical: SITE_URL },
    openGraph: {
        type: "website",
        locale: "en_AE",
        url: SITE_URL,
        title: "Privacy Policy | Unique Garden Tech UAE",
        description:
            "Learn how Unique Garden Tech Cont. LLC collects, uses, and protects your personal data in compliance with UAE data protection law.",
        siteName: "Unique Garden Tech Cont LLC",
        images: [
            {
                url: "https://uniquegarden.ae/images/brand-logo.jpg",
                width: 1200,
                height: 630,
                alt: "Unique Garden Tech Cont LLC, Privacy Policy",
                type: "image/jpeg",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Privacy Policy | Unique Garden Tech UAE",
        description:
            "Learn how Unique Garden Tech Cont. LLC collects, uses, and protects your personal data in compliance with UAE data protection law.",
        images: ["https://uniquegarden.ae/images/brand-logo.jpg"],
    },
};

export default function PrivacyPolicy() {
    return (
        <main className="legal-page">
            <section className="widget-wrapper hero-banner">
                <div className="image-content-wrapper">
                    <Image
                        src="/images/02-About-Us/About-Us-(Hero-Image).webp"
                        alt="Unique Garden Tech, Privacy Policy"
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
                        <h1>Privacy Policy</h1>
                        <p>
                            We are committed to protecting your personal information. This policy explains what data we collect, why we collect
                            it, and how we keep it safe.
                        </p>
                    </div>
                </div>
            </section>

            <Breadcrumb items={[{ label: "Privacy Policy" }]} />

            <section className="widget-wrapper legal-content-section">
                <div className="legal-content">
                    <p className="last-updated-badge">Last updated: July 14, 2026</p>

                    <div className="legal-toc">
                        <h3>Table of Contents</h3>
                        <ol>
                            <li>
                                <a href="#section-1">Information We Collect</a>
                            </li>
                            <li>
                                <a href="#section-2">How We Use Your Information</a>
                            </li>
                            <li>
                                <a href="#section-3">Cookies</a>
                            </li>
                            <li>
                                <a href="#section-4">Third-Party Services</a>
                            </li>
                            <li>
                                <a href="#section-5">Data Retention</a>
                            </li>
                            <li>
                                <a href="#section-6">Your Rights</a>
                            </li>
                            <li>
                                <a href="#section-7">Security</a>
                            </li>
                            <li>
                                <a href="#section-8">Changes to Policy</a>
                            </li>
                            <li>
                                <a href="#section-9">Contact Us</a>
                            </li>
                        </ol>
                    </div>

                    <div id="section-1" className="legal-section">
                        <h2>1. Information We Collect</h2>
                        <p>
                            Unique Garden Tech Cont. LLC (&quot;Company&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates the
                            website at <a href="https://uniquegarden.ae">https://uniquegarden.ae</a>. We collect information in the following ways:
                        </p>

                        <h3>Information You Provide Directly</h3>
                        <p>
                            When you complete and submit our contact or enquiry form, we collect the following personal data you choose to provide:
                        </p>
                        <ul>
                            <li>
                                <strong>Full name</strong>, to address your enquiry personally
                            </li>
                            <li>
                                <strong>Email address</strong>, to send you a response and project-related communications
                            </li>
                            <li>
                                <strong>Phone number</strong>, to facilitate direct consultation where requested
                            </li>
                            <li>
                                <strong>Message content</strong>, the details of your service enquiry or request
                            </li>
                        </ul>
                        <p>
                            You are not required to provide all of the above fields, but omitting certain details (such as your email or phone
                            number) may limit our ability to respond to your enquiry effectively.
                        </p>

                        <h3>Automatically Collected Information</h3>
                        <p>
                            When you visit our Website, certain technical information is collected automatically through cookies and analytics
                            tools, including:
                        </p>
                        <ul>
                            <li>IP address and approximate geographic location derived from it</li>
                            <li>Browser type, version, and language settings</li>
                            <li>Device type and operating system</li>
                            <li>Pages visited, time spent on each page, and navigation path</li>
                            <li>Referring website or search engine query that directed you to our site</li>
                            <li>Date and time of each visit</li>
                        </ul>
                        <p>
                            This information is collected in aggregated and anonymised form wherever possible and is used solely to improve the
                            performance and relevance of our Website.
                        </p>

                        <h3>Spam Prevention Data</h3>
                        <p>
                            Our contact form includes bot-protection mechanisms, including hidden honeypot fields. Submissions where these
                            concealed fields are populated are automatically rejected and discarded as spam. Such submissions are never stored,
                            reviewed, or retained by us.
                        </p>
                    </div>

                    <div id="section-2" className="legal-section">
                        <h2>2. How We Use Your Information</h2>
                        <p>
                            We process the personal data we collect on the legal bases of legitimate interest, consent, and compliance with
                            legal obligations under UAE law. Specifically, we use your information for the following purposes:
                        </p>
                        <ul>
                            <li>
                                <strong>Responding to enquiries:</strong> To review, process, and reply to your service requests, questions, or
                                quote requests in a timely manner
                            </li>
                            <li>
                                <strong>Service delivery:</strong> To prepare and send project proposals, quotations, and related documentation
                                where you have engaged with us
                            </li>
                            <li>
                                <strong>Communication:</strong> To send you relevant updates about your enquiry, project status, or our services,
                                where you have provided consent or where we have a legitimate interest to do so
                            </li>
                            <li>
                                <strong>Website improvement:</strong> To analyse anonymised usage patterns in order to enhance the content,
                                navigation, and performance of our Website
                            </li>
                            <li>
                                <strong>Security &amp; fraud prevention:</strong> To monitor for and prevent spam, automated abuse, and other
                                malicious activity directed at our systems
                            </li>
                            <li>
                                <strong>Legal compliance:</strong> To fulfil our obligations under applicable UAE laws and regulations, including
                                responding to lawful requests from public authorities
                            </li>
                        </ul>
                        <p>
                            We do not sell, rent, trade, or otherwise transfer your personal information to third parties for their independent
                            marketing purposes. Any sharing of data with service providers (described in Section 4) is strictly for the purposes
                            of operating this Website and delivering our services.
                        </p>
                    </div>

                    <div id="section-3" className="legal-section">
                        <h2>3. Cookies</h2>
                        <p>
                            Our Website uses cookies, small text files placed on your device by your browser when you visit the site. Cookies
                            allow us to recognise your device and remember certain information about your visit, which helps us provide a better
                            experience.
                        </p>

                        <h3>Types of Cookies We Use</h3>
                        <ul>
                            <li>
                                <strong>Essential cookies:</strong> These are strictly necessary for the Website to function correctly. They
                                enable core functionality such as security, session management, and accessibility. These cookies cannot be
                                disabled without affecting how the Website operates.
                            </li>
                            <li>
                                <strong>Analytics cookies:</strong> Placed by Google Analytics to collect anonymised data about how visitors
                                interact with our Website, including which pages are visited most often and where visitors navigate from. This
                                helps us understand and improve user experience.
                            </li>
                            <li>
                                <strong>Security cookies:</strong> Used by Google reCAPTCHA v3 to assess the risk of spam or abusive activity
                                on our contact form, without requiring any action from you.
                            </li>
                        </ul>

                        <h3>Managing Cookies</h3>
                        <p>
                            You may disable or delete cookies at any time through your browser settings. Please refer to your browser&apos;s
                            help documentation for instructions on how to manage cookies. Please be aware that disabling certain cookies —
                            particularly essential cookies, may affect the functionality and usability of the Website.
                        </p>
                    </div>

                    <div id="section-4" className="legal-section">
                        <h2>4. Third-Party Services</h2>
                        <p>
                            To operate our Website and deliver our services effectively, we use the following third-party platforms and tools.
                            Each of these services processes certain data in accordance with their own privacy policies, which we encourage you
                            to review:
                        </p>

                        <h3>Google Analytics</h3>
                        <p>
                            We use Google Analytics (provided by Google LLC) to collect anonymised information about Website traffic and
                            visitor behaviour. Data collected includes page views, session durations, device types, and general geographic
                            regions. Google Analytics uses cookies to collect this information and processes it on servers that may be located
                            outside the UAE. IP anonymisation is enabled, meaning that full IP addresses are not stored. For more information,
                            please review{" "}
                            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                                Google&apos;s Privacy Policy
                            </a>
                            .
                        </p>

                        <h3>Google reCAPTCHA v3</h3>
                        <p>
                            Our contact form is protected by Google reCAPTCHA v3 to detect and prevent automated spam submissions. reCAPTCHA
                            v3 operates invisibly, it does not require you to solve a puzzle or tick a checkbox. Instead, it analyses
                            hardware and software information, browsing behaviour, and interaction patterns to generate a risk score. This data
                            is sent to Google for analysis and is subject to{" "}
                            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                                Google&apos;s Privacy Policy
                            </a>{" "}
                            and{" "}
                            <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer">
                                Terms of Service
                            </a>
                            . Submissions scoring below our defined threshold are rejected without being stored.
                        </p>

                        <h3>Email Service (Nodemailer via Gmail SMTP)</h3>
                        <p>
                            When you submit our contact form, your message is transmitted securely to our administrative email address via
                            Gmail&apos;s SMTP infrastructure. This transmission is encrypted in transit. Your contact details and message
                            content are not stored in a database; they are delivered directly to our team by email.
                        </p>
                    </div>

                    <div id="section-5" className="legal-section">
                        <h2>5. Data Retention</h2>
                        <p>
                            We retain personal data only for as long as is necessary to fulfil the purposes for which it was collected, or as
                            required by applicable UAE law.
                        </p>
                        <ul>
                            <li>
                                <strong>Contact form submissions:</strong> Your name, email address, phone number, and message are retained
                                within our email systems for a period of up to 24 months from the date of receipt, after which they are
                                permanently deleted or anonymised. If your enquiry results in an ongoing business relationship, we may retain
                                relevant communications for the duration of that relationship and for a reasonable period thereafter.
                            </li>
                            <li>
                                <strong>Analytics data:</strong> Anonymised Website usage data collected via Google Analytics is retained in
                                accordance with Google&apos;s standard data retention settings (26 months by default) and does not contain
                                information that directly identifies you.
                            </li>
                            <li>
                                <strong>Legal obligations:</strong> Where we are required by UAE law or regulation to retain certain records
                                for a defined period, we will do so regardless of the above retention periods.
                            </li>
                        </ul>
                        <p>
                            Upon expiry of the applicable retention period, personal data is securely deleted or anonymised in a manner that
                            prevents reconstruction or identification.
                        </p>
                    </div>

                    <div id="section-6" className="legal-section">
                        <h2>6. Your Rights</h2>
                        <p>
                            In accordance with UAE Federal Decree-Law No. 45 of 2021 on the Protection of Personal Data (&quot;PDPL&quot;) and
                            its implementing regulations, you have the following rights in respect of your personal data:
                        </p>
                        <ul>
                            <li>
                                <strong>Right of access:</strong> You have the right to request a copy of the personal data we hold about you
                                and to receive information about how it is processed.
                            </li>
                            <li>
                                <strong>Right to rectification:</strong> You have the right to request that we correct any inaccurate or
                                incomplete personal data we hold about you without undue delay.
                            </li>
                            <li>
                                <strong>Right to erasure:</strong> You may request that we delete your personal data where it is no longer
                                necessary for the purposes for which it was collected, subject to any legal retention obligations we are required
                                to fulfil.
                            </li>
                            <li>
                                <strong>Right to restrict processing:</strong> You have the right to request that we restrict the processing
                                of your personal data under certain circumstances, such as while we verify a rectification request.
                            </li>
                            <li>
                                <strong>Right to object:</strong> You may object to the processing of your personal data where we are relying
                                on legitimate interests as our legal basis, and we will cease processing unless we can demonstrate compelling
                                legitimate grounds that override your interests.
                            </li>
                            <li>
                                <strong>Right to withdraw consent:</strong> Where processing is based on your consent, you have the right to
                                withdraw that consent at any time. Withdrawal does not affect the lawfulness of processing carried out prior
                                to withdrawal.
                            </li>
                        </ul>
                        <p>
                            To exercise any of these rights, please contact us using the details provided in Section 9 below. We will respond
                            to all verifiable requests within 30 days in accordance with the PDPL. We may need to verify your identity before
                            processing your request.
                        </p>
                    </div>

                    <div id="section-7" className="legal-section">
                        <h2>7. Security</h2>
                        <p>
                            We take the security of your personal data seriously and implement appropriate technical and organisational
                            measures to protect it against unauthorised access, accidental loss, disclosure, alteration, or destruction.
                            These measures include:
                        </p>
                        <ul>
                            <li>
                                <strong>HTTPS encryption:</strong> All data transmitted between your browser and our Website is encrypted
                                using Transport Layer Security (TLS), as indicated by the padlock icon and &quot;https://&quot; in your browser
                                address bar.
                            </li>
                            <li>
                                <strong>reCAPTCHA bot protection:</strong> Our contact form is protected by Google reCAPTCHA v3 to prevent
                                automated submissions and associated data injection attempts.
                            </li>
                            <li>
                                <strong>Honeypot fields:</strong> Hidden form fields are used to detect and silently reject automated bot
                                submissions before any data is processed.
                            </li>
                            <li>
                                <strong>Score-based filtering:</strong> Contact form submissions are evaluated against a risk threshold; those
                                failing the check are discarded without any data being stored or forwarded.
                            </li>
                            <li>
                                <strong>Access controls:</strong> Access to systems containing personal data is restricted to authorised
                                personnel who require it to perform their duties.
                            </li>
                        </ul>
                        <p>
                            While we employ robust security measures, please be aware that no method of transmission over the internet or
                            method of electronic storage is completely secure. We therefore cannot guarantee absolute security; however, we
                            will notify you and any applicable regulatory authorities in the event of a data breach as required by UAE law.
                        </p>
                    </div>

                    <div id="section-8" className="legal-section">
                        <h2>8. Changes to Policy</h2>
                        <p>
                            We may update this Privacy Policy from time to time to reflect changes in our data practices, the services we
                            offer, applicable technology, or changes in UAE data protection law. When we make material changes, we will update
                            the &quot;Last updated&quot; date displayed at the top of this page.
                        </p>
                        <p>
                            We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your
                            information. Your continued use of the Website following the posting of any changes constitutes your acknowledgment
                            of the updated Privacy Policy and, where applicable, your consent to the changes.
                        </p>
                        <p>
                            For significant changes that materially affect how we process your data, we may seek to notify you directly where
                            we hold your contact information, subject to our data retention practices.
                        </p>
                    </div>

                    <div id="section-9" className="legal-section">
                        <h2>9. Contact Us</h2>
                        <p>
                            If you have any questions, concerns, or requests relating to this Privacy Policy or to the personal data we hold
                            about you, please contact us:
                        </p>
                        <ul>
                            <li>
                                <strong>Company:</strong> Unique Garden Tech Cont. LLC
                            </li>
                            <li>
                                <strong>Address:</strong> No - 02, Building No: 3610, Muweilah, Sharjah 27960, United Arab Emirates
                            </li>
                            <li>
                                <strong>Email:</strong>{" "}
                                <a href="mailto:info@uniquegarden.ae">info@uniquegarden.ae</a>
                            </li>
                            <li>
                                <strong>Phone:</strong>{" "}
                                <a href="tel:+97165222391">+971-6-5222391</a>
                            </li>
                        </ul>
                        <p>
                            We are committed to resolving any privacy concerns promptly and will respond to your enquiry within 30 calendar
                            days of receipt.
                        </p>
                    </div>
                </div>
            </section>

            <RequestAQuote />
        </main>
    );
}
