import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <header className="nav">
        <Link href="/" className="brand" aria-label="TinyPixel home">
          <span className="logo">TP</span><span>TinyPixel</span>
        </Link>
        <Link href="/privacy" className="back-link">Privacy Policy</Link>
      </header>

      <main className="home">
        <h1>TinyPixel</h1>
        <p>A fast, browser-based image compression and resizing tool. Your files are processed on your device.</p>
        <Link href="/privacy" className="cta">Read our Privacy Policy</Link>
      </main>

      <footer>© {new Date().getFullYear()} TinyPixel · <Link href="/privacy">Privacy Policy</Link></footer>
    </>
  );
}
