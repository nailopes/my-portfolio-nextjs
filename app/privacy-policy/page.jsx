
export const metadata = {
    title: "Privacy Policy | Naiara Miranda Costa",
    description:
        "Privacy Policy for Naiara Miranda Costa’s personal portfolio website.",
};

export default function PrivacyPolicyPage() {
    const lastUpdated = "August 13, 2025";

    return (
        <main className="mx-auto max-w-3xl px-6 py-16">
            <header className="mb-8">
                <h1 className="text-3xl font-bold tracking-tight">Privacy Policy</h1>
                <p className="text-sm text-gray-500 dark:text-white">Last updated: {lastUpdated}</p>
            </header>

            <section className="prose prose-neutral dark:prose-invert">
                <p>
                    This website (“Site”) is operated by <strong>Naiara Miranda Costa</strong> (“I,” “me,”
                    or “my”). I respect your privacy and am committed to protecting it.
                </p>

                <h2 id="information-i-collect">1. Information I Collect</h2>
                <p>
                    I do not collect personal information unless you voluntarily provide it (e.g., via a
                    contact form or email). If you submit your name, email, or other details, I will use them
                    only to respond to your inquiry.
                </p>

                <h2 id="cookies-analytics">2. Cookies &amp; Analytics</h2>
                <p>
                    This Site may use cookies and basic analytics to understand general usage patterns. You can
                    disable cookies in your browser settings. If analytics are enabled, only aggregated,
                    non-identifiable information is used.
                </p>

                <h2 id="data-sharing">3. Data Sharing</h2>
                <p>
                    I do not sell or share your personal information with third parties, except when required
                    by law or to operate essential Site functionality (e.g., hosting).
                </p>

                <h2 id="data-retention">4. Data Retention</h2>
                <p>
                    Information you send (e.g., by email) is retained only as long as necessary to address
                    your message and maintain basic records.
                </p>

                <h2 id="your-rights">5. Your Rights</h2>
                <p>
                    You may request access, correction, or deletion of your personal information by emailing{" "}
                    <a href="mailto:naiaramirandacosta@gmail.com">naiaramirandacosta@gmail.com</a>. I will
                    respond within a reasonable timeframe.
                </p>

                <h2 id="external-links">6. Links to Other Websites</h2>
                <p>
                    This Site may contain links to external websites. I am not responsible for their privacy
                    practices or content. Please review their policies.
                </p>

                <h2 id="changes">7. Changes to This Policy</h2>
                <p>
                    I may update this Privacy Policy from time to time. Changes will be posted on this page
                    with an updated date.
                </p>

                <h2 id="contact">8. Contact</h2>
                <p>
                    Questions about this Privacy Policy? Email{" "}
                    <a href="mailto:naiaramirandacosta@gmail.com">naiaramirandacosta@gmail.com</a>.
                </p>
            </section>
        </main>
    );
}
