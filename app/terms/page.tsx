import Link from 'next/link';

export const metadata = {
  title: 'Terms & Conditions | Tinyplex',
  description: 'Tinyplex terms and conditions governing use of the browser-based image tools.',
};

export default function TermsPage() {
  return (
    <main className="legal-page">
      <header className="nav legal-nav">
        <Link href="/" className="brand legal-brand" aria-label="Tinyplex home">
          <span className="logo brand-logo" aria-hidden="true" /><span>Tinyplex</span>
        </Link>
        <Link href="/" className="back-link">← Back to Tinyplex</Link>
      </header>

      <article className="legal-card">
        <div className="legal-eyebrow">Tinyplex · Legal</div>
        <h1>Terms &amp; Conditions</h1>
        <p className="legal-intro">Last updated: September 20, 2026</p>

        <section>
          <h2>1. Acceptance of terms</h2>
          <p>By accessing or using Tinyplex, you agree to these Terms &amp; Conditions. If you do not agree with these terms, please do not use the service.</p>
        </section>

        <section>
          <h2>2. About Tinyplex</h2>
          <p>Tinyplex provides browser-based tools for image compression, resizing, conversion, and related image optimisation tasks. Features may be changed, added, or removed over time.</p>
        </section>

        <section>
          <h2>3. Use of the service</h2>
          <p>You agree to use Tinyplex only for lawful purposes. You must not:</p>
          <ul className="legal-list">
            <li>Use the service to violate applicable laws or regulations.</li>
            <li>Attempt to disrupt, damage, or gain unauthorised access to the service.</li>
            <li>Upload or process content that you do not have the right to use.</li>
            <li>Abuse automated requests or interfere with normal service operation.</li>
          </ul>
        </section>

        <section>
          <h2>4. Your content</h2>
          <p>You are responsible for the images and other files you choose to process. You confirm that you have the necessary rights or permissions to use and process those files.</p>
        </section>

        <section>
          <h2>5. Browser processing</h2>
          <p>Tinyplex is designed to perform supported image processing in your browser. Depending on the feature and future service changes, some functionality may work differently. Review the Privacy Policy for information about data handling.</p>
        </section>

        <section>
          <h2>6. Intellectual property</h2>
          <p>Tinyplex&apos;s website, branding, interface, text, and original software components are protected by applicable intellectual property laws. You may not copy, reproduce, or redistribute protected Tinyplex materials without permission, except where permitted by law.</p>
        </section>

        <section>
          <h2>7. Availability and changes</h2>
          <p>We may modify, suspend, or discontinue any part of Tinyplex at any time. We do not guarantee that the service will always be available, uninterrupted, or error-free.</p>
        </section>

        <section>
          <h2>8. Disclaimer</h2>
          <p>Tinyplex is provided on an &quot;as is&quot; and &quot;as available&quot; basis to the extent permitted by applicable law. We do not guarantee that every processed image will meet a particular quality, size, compatibility, or performance requirement.</p>
        </section>

        <section>
          <h2>9. Limitation of liability</h2>
          <p>To the maximum extent permitted by applicable law, Tinyplex and its operators will not be liable for indirect, incidental, special, consequential, or loss-of-data damages arising from use of the service.</p>
        </section>

        <section>
          <h2>10. Privacy</h2>
          <p>Our handling of information is described in the Tinyplex Privacy Policy.</p>
          <p><Link href="/privacy" className="legal-inline-link">Read the Privacy Policy →</Link></p>
        </section>

        <section>
          <h2>11. Changes to these terms</h2>
          <p>We may update these Terms &amp; Conditions when the service, features, or legal requirements change. The updated version will be posted on this page with a revised date.</p>
        </section>

        <section>
          <h2>12. Contact</h2>
          <p>If you have questions about these Terms, contact us at <a href="mailto:support@tinyplex.app" className="legal-inline-link">support@tinyplex.app</a>, or visit the <Link href="/contact" className="legal-inline-link">Contact page</Link>.</p>
        </section>
      </article>

      <footer>© {new Date().getFullYear()} Tinyplex · <Link href="/">Home</Link> · <Link href="/privacy">Privacy</Link> · Terms</footer>
    </main>
  );
}
