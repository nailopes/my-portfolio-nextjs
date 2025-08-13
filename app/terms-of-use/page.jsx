'use client';

export default function TermsOfUse() {
    const lastUpdated = "August 13, 2025";

    return (
        <main className="mx-auto max-w-3xl px-6 py-16">
            <header className="mb-8">
                <h1 className="text-3xl font-bold tracking-tight">Terms of Use</h1>
                <p className="text-sm text-gray-500">Last updated: {lastUpdated}</p>
            </header>

            <section className="prose prose-invert prose-headings:scroll-mt-28">
                <p>
                    By accessing or using this website (“Site”), you agree to the terms below.
                    If you do not agree, please do not use the Site.
                </p>

                <h2 id="intellectual-property">1. Intellectual Property</h2>
                <p>
                    Unless otherwise noted, all text, images, layouts, code, and designs on this Site are the
                    property of <strong>Naiara Miranda Costa</strong>. You may not copy, reproduce, modify,
                    or distribute any content without prior written permission.
                </p>

                <h2 id="acceptable-use">2. Acceptable Use</h2>
                <p>
                    You agree not to use the Site for unlawful activities, to attempt to gain unauthorized access,
                    or to interfere with the Site’s normal operation (including security or performance).
                </p>

                <h2 id="external-links">3. External Links</h2>
                <p>
                    The Site may link to third-party websites or services. I am not responsible for their content,
                    availability, or practices. Accessing external links is at your own risk.
                </p>

                <h2 id="disclaimer">4. Disclaimer</h2>
                <p>
                    The Site is provided “as is” and “as available” without warranties of any kind, express or implied.
                    I do not guarantee that the Site will be error-free or uninterrupted.
                </p>

                <h2 id="limitation">5. Limitation of Liability</h2>
                <p>
                    To the maximum extent permitted by law, I shall not be liable for any indirect, incidental,
                    special, consequential, or punitive damages arising out of or related to your use of the Site.
                </p>

                <h2 id="changes">6. Changes to These Terms</h2>
                <p>
                    I may update these Terms from time to time. Changes will be posted on this page with an updated date.
                    Your continued use of the Site constitutes acceptance of the revised Terms.
                </p>

                <h2 id="contact">7. Contact</h2>
                <p>
                    Questions about these Terms? Email me at <a href="mailto:naiaramirandacosta@gmail.com">naiaramirandacosta@gmail.com</a>.
                </p>
            </section>
        </main>
    );
}
