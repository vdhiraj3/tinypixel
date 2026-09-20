import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy | Tinyplex',
  description: 'Tinyplex privacy policy explaining how images and website information are handled.',
};

export default function PrivacyPage() {
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
        <h1>Privacy Policy</h1>
        <p className="legal-intro">Last updated: September 20, 2026</p>

        <section>
          <h2>1. Overview</h2>
          <p>Tinyplex is a browser-based image compression and resizing tool. We designed the service so that the image files you select can be processed directly on your device without being uploaded to a Tinyplex server.</p>
        </section>

        <section>
          <h2>2. Images and uploaded files</h2>
          <p>When you use Tinyplex to compress or resize an image, processing is performed locally in your web browser using your device&apos;s memory and processing resources. Tinyplex does not require you to create an account or upload your images to our servers for normal image processing.</p>
          <p>Processed files are created in your browser and downloaded to your device when you choose the download option. Tinyplex does not intentionally store copies of your source or processed images on a server.</p>
        </section>

        <section>
          <h2>3. Information we collect</h2>
          <p>The current Tinyplex image-processing tool does not require registration and does not ask for your name, email address, phone number, or other personal information to process images.</p>
          <p>Like most websites, the hosting platform and any future third-party services used by the site may process limited technical information such as IP address, browser type, device information, request timestamps, and security logs. This information may be used for hosting, security, reliability, and abuse prevention.</p>
        </section>

        <section>
          <h2>4. Cookies and advertising</h2>
          <p>Tinyplex may use cookies or similar technologies if analytics, advertising, or other third-party services are added to the website in the future. If advertising such as Google AdSense is enabled, those providers may use cookies or similar technologies according to their own policies.</p>
          <p>Any advertising or analytics integrations should be reviewed and updated here before they are enabled on the live website.</p>
        </section>

        <section>
          <h2>5. Third-party services</h2>
          <p>Tinyplex may be hosted on third-party infrastructure such as Vercel or Netlify. The hosting provider may process technical request information needed to deliver and protect the website. Tinyplex does not control the privacy practices of third-party providers, so their own privacy policies may also apply.</p>
        </section>

        <section>
          <h2>6. Data security</h2>
          <p>Keeping image processing in the browser reduces the need to transmit image files over the internet. However, no website or internet connection can be guaranteed to be completely secure. You should avoid processing files containing highly sensitive information unless you are comfortable doing so on your device and browser.</p>
        </section>

        <section>
          <h2>7. Children&apos;s privacy</h2>
          <p>Tinyplex is a general-purpose image utility and is not specifically directed at children. We do not knowingly request personal information from children.</p>
        </section>

        <section>
          <h2>8. Changes to this policy</h2>
          <p>We may update this Privacy Policy when Tinyplex&apos;s features, hosting, analytics, advertising, or legal requirements change. The updated version will be published on this page with a revised date.</p>
        </section>

        <section>
          <h2>9. Contact</h2>
          <p>If you have a privacy question about Tinyplex, add your official support email here before publishing the site. We recommend using a dedicated business email rather than a personal address.</p>
        </section>

        <div className="legal-note">
          <strong>Important:</strong> This page describes the current browser-based processing model. If you later add analytics, AdSense, contact forms, accounts, cloud uploads, or other services, update this policy and the site&apos;s consent setup to match those features.
        </div>
      </article>

      <footer>© {new Date().getFullYear()} Tinyplex · <Link href="/">Home</Link> · Privacy Policy</footer>
    </main>
  );
}
