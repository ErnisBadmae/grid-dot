'use client'

import React from 'react'
import Link from 'next/link'
import { basePath } from '@/lib/basePath'

export default function PrivacyPage() {
    return (
        <main
            style={{
                backgroundColor: '#F2F0EF',
                minHeight: '100vh',
                padding: '60px 73px 120px', // Adjust padding as needed
                fontFamily: "'Overpass Mono', monospace",
                color: '#0B1215',
                position: 'relative',
            }}
        >
            {/* Close Button */}
            <Link href="/" style={{ position: 'fixed', top: '40px', right: '40px', cursor: 'pointer', zIndex: 10 }}>
                <img src={`${basePath}/images/Close button.svg`} alt="Close" style={{ width: '40px', height: '40px' }} />
            </Link>

            <div style={{ maxWidth: '1400px', margin: '0 0' }}> {/* Increased width as requested */}

                {/* Header */}
                <h1
                    style={{
                        fontSize: '36px',
                        fontWeight: 700,
                        marginBottom: '-35px',
                        letterSpacing: '-0.02em',
                    }}
                >
                    Privacy Policy
                </h1>

                <p
                    style={{
                        fontSize: '16px',
                        fontWeight: 400,
                        marginBottom: '50px',
                        color: '#0B1215',
                    }}
                >
                    Last updated: Jan’26
                </p>

                {/* Intro */}
                <div style={{ fontSize: '16px', fontWeight: 400, lineHeight: 1.6, marginBottom: '60px' }}>
                    <p style={{ marginBottom: '24px' }}>
                        This Privacy Policy explains how Grid & Dot (“we”, “us”, “our”) collects, uses, and protects<br />
                        personal data when you visit our website or contact us.<br />
                        We are committed to handling personal data responsibly, transparently, and in line with UK<br />
                        GDPR.
                    </p>
                </div>

                {/* Sections */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>

                    {/* 1. Who We Are */}
                    <section>
                        <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '24px' }}>1. Who We Are</h2>
                        <div style={{ fontSize: '16px', fontWeight: 400, lineHeight: 1.6 }}>
                            <p style={{ marginBottom: '16px' }}>
                                Grid & Dot<br />
                                Based in Mayfair, London.<br />
                                If you have any questions about this policy or how we handle your data, you can contact us at:
                            </p>
                            <a href="mailto:engagement@gridanddot.com" style={{ textDecoration: 'underline' }}>engagement@gridanddot.com</a>
                        </div>
                    </section>

                    {/* 2. What Data We Collect */}
                    <section>
                        <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '24px' }}>2. What Data We Collect</h2>
                        <div style={{ fontSize: '16px', fontWeight: 400, lineHeight: 1.6 }}>
                            <p style={{ marginBottom: '16px' }}>We only collect personal data that is necessary and relevant.</p>

                            <p style={{ marginBottom: '8px', fontWeight: 700 }}>Information you provide to us</p>
                            <p style={{ marginBottom: '16px' }}>
                                When you contact us via the website, we may collect:<br />
                                - Full name<br />
                                - Email address<br />
                                - Any information you choose to share in your message
                            </p>

                            <p style={{ marginBottom: '8px', fontWeight: 700 }}>Information collected automatically</p>
                            <p style={{ marginBottom: '16px' }}>
                                When you use our website, we may collect:<br />
                                - IP address (anonymised where possible)<br />
                                - Browser type and device information<br />
                                - Pages visited and interactions
                            </p>
                            <p>This data is collected through cookies and similar technologies, subject to your consent.</p>
                        </div>
                    </section>

                    {/* 3. How We Use Your Data */}
                    <section>
                        <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '24px' }}>3. How We Use Your Data</h2>
                        <div style={{ fontSize: '16px', fontWeight: 400, lineHeight: 1.6 }}>
                            <p style={{ marginBottom: '16px' }}>We use personal data only for clear and specific purposes:</p>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, marginBottom: '24px' }}>
                                <li>- To respond to enquiries and requests</li>
                                <li>- To communicate about potential collaboration or services</li>
                                <li>- To improve our website and understand how it is used (analytics, with consent)</li>
                                <li>- To meet legal or regulatory obligations</li>
                            </ul>
                            <p style={{ marginBottom: '16px' }}>
                                We do not use your data for unsolicited marketing.<br />
                                We do not sell or rent personal data.
                            </p>
                        </div>
                    </section>

                    {/* 4. Legal Basis for Processing */}
                    <section>
                        <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '24px' }}>4. Legal Basis for Processing</h2>
                        <div style={{ fontSize: '16px', fontWeight: 400, lineHeight: 1.6 }}>
                            <p style={{ marginBottom: '16px' }}>Under UK GDPR, we process personal data based on:</p>
                            <p style={{ marginBottom: '16px' }}>
                                Legitimate interests — responding to business enquiries and operating our services<br />
                                Consent — for optional cookies and analytics<br />
                                Legal obligation — where required by law
                            </p>
                        </div>
                    </section>

                    {/* 5. Cookies */}
                    <section>
                        <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '24px' }}>5. Cookies</h2>
                        <div style={{ fontSize: '16px', fontWeight: 400, lineHeight: 1.6 }}>
                            <p style={{ marginBottom: '16px' }}>We use cookies to ensure the website works properly and to understand how it is used.</p>
                            <p style={{ marginBottom: '16px' }}>
                                Essential cookies are required for functionality.<br />
                                Analytics cookies are used only with your consent.
                            </p>
                            <p>You can manage or change your cookie preferences at any time.</p>
                        </div>
                    </section>

                    {/* 6. Data Sharing */}
                    <section>
                        <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '24px' }}>6. Data Sharing</h2>
                        <div style={{ fontSize: '16px', fontWeight: 400, lineHeight: 1.6 }}>
                            <p style={{ marginBottom: '16px' }}>
                                We may share limited personal data with trusted service providers who support our operations<br />
                                (e.g., hosting, analytics, CRM tools).
                            </p>
                            <p style={{ marginBottom: '16px' }}>
                                All providers are required to:<br />
                                - Process data only on our instructions<br />
                                - Apply appropriate security measures<br />
                                - Comply with UK GDPR
                            </p>
                            <p>We do not share personal data with third parties for their own marketing purposes.</p>
                        </div>
                    </section>

                    {/* 7. Data Retention */}
                    <section>
                        <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '24px' }}>7. Data Retention</h2>
                        <div style={{ fontSize: '16px', fontWeight: 400, lineHeight: 1.6 }}>
                            <p style={{ marginBottom: '16px' }}>We retain personal data only for as long as necessary:</p>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, marginBottom: '16px' }}>
                                <li>- To respond to your enquiry</li>
                                <li>- To maintain relevant business records</li>
                                <li>- To meet legal requirements</li>
                            </ul>
                            <p>When data is no longer needed, it is securely deleted.</p>
                        </div>
                    </section>

                    {/* 8. Your Rights */}
                    <section>
                        <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '24px' }}>8. Your Rights</h2>
                        <div style={{ fontSize: '16px', fontWeight: 400, lineHeight: 1.6 }}>
                            <p style={{ marginBottom: '16px' }}>Under UK GDPR, you have the right to:</p>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, marginBottom: '16px' }}>
                                <li>- Access your personal data</li>
                                <li>- Request correction of inaccurate data</li>
                                <li>- Request deletion of your data</li>
                                <li>- Object to or restrict processing</li>
                                <li>- Withdraw consent at any time (where applicable)</li>
                            </ul>
                            <p>To exercise your rights, contact us at <a href="mailto:engagement@gridanddot.com" style={{ textDecoration: 'underline' }}>engagement@gridanddot.com</a></p>
                        </div>
                    </section>

                    {/* 9. Data Security */}
                    <section>
                        <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '24px' }}>9. Data Security</h2>
                        <div style={{ fontSize: '16px', fontWeight: 400, lineHeight: 1.6 }}>
                            <p>We take appropriate technical and organisational measures to protect personal data against loss, misuse, or unauthorised access.</p>
                        </div>
                    </section>

                    {/* 10. Changes to This Policy */}
                    <section>
                        <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '24px' }}>10. Changes to This Policy</h2>
                        <div style={{ fontSize: '16px', fontWeight: 400, lineHeight: 1.6 }}>
                            <p>
                                We may update this Privacy Policy from time to time.<br />
                                The latest version will always be available on this page.
                            </p>
                        </div>
                    </section>

                    {/* 11. Contact */}
                    <section style={{ marginBottom: '120px' }}>
                        <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '24px' }}>11. Contact</h2>
                        <div style={{ fontSize: '16px', fontWeight: 400, lineHeight: 1.6 }}>
                            <p style={{ marginBottom: '16px' }}>If you have questions about this Privacy Policy or how your data is handled, please contact:</p>
                            <p style={{ marginBottom: '16px', fontWeight: 700 }}>Grid & Dot</p>
                            <a href="mailto:engagement@gridanddot.com" style={{ textDecoration: 'underline' }}>engagement@gridanddot.com</a>
                        </div>
                    </section>

                </div>

            </div>

            {/* Footer Slogan */}
            <div
                style={{
                    textAlign: 'left',
                    color: '#0033FF',
                    fontFamily: "'Overpass Mono', monospace",
                    fontSize: '24px',
                    fontWeight: 700,
                    paddingBottom: '40px'
                }}
            >
                We respect your data, your time, and your trust.
            </div>

        </main>
    )
}
