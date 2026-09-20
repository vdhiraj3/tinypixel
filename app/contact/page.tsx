import Link from 'next/link';

export const metadata = {
  title: 'Contact | Tinyplex',
  description: 'Get in touch with the Tinyplex team for support, feedback, or bug reports.',
};

export default function ContactPage() {
  return (
    <main className="legal-page">
      <header className="nav legal-nav">
        <Link href="/" className="brand legal-brand" aria-label="Tinyplex home">
          <span className="logo brand-logo" aria-hidden="true" /><span>Tinyplex</span>
        </Link>
        <Link href="/" className="back-link">← Back to Tinyplex</Link>
      </header>

      <article className="legal-card">
        <div className="legal-eyebrow">Get in touch</div>
        <h1>Contact Tinyplex</h1>
        <p className="legal-intro">Have a question, found a problem, or want to share feedback? We&apos;d love to hear from you.</p>

        <div className="contact-grid">
          <div className="contact-tile">
            <h2>Email</h2>
            <p>For support, privacy questions, bug reports, or general enquiries:</p>
            <a href="mailto:support@tinyplex.in" className="legal-inline-link">support@tinyplex.in</a>
          </div>
          <div className="contact-tile">
            <h2>Feedback &amp; bugs</h2>
            <p>Tell us which browser or device you are using and describe the issue. Screenshots are helpful when reporting a problem.</p>
          </div>
        </div>

        <section>
          <h2>Before contacting us</h2>
          <ul className="legal-list">
            <li>Include the page or tool where you experienced the issue.</li>
            <li>Tell us what you expected and what actually happened.</li>
            <li>Do not send passwords, payment information, or other sensitive personal data.</li>
          </ul>
        </section>

        <div className="legal-note">
          <strong>Note:</strong> We aim to respond to genuine support enquiries as soon as reasonably possible.
        </div>
      </article>

      <footer>© {new Date().getFullYear()} Tinyplex · <Link href="/">Home</Link> · <Link href="/privacy">Privacy</Link> · <Link href="/terms">Terms</Link></footer>
    </main>
  );
}
