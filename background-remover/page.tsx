import type { Metadata } from 'next';
import BackgroundRemover from '@/components/BackgroundRemover';

export const metadata: Metadata = {
  title: "Free Background Remover Online – Transparent PNG | Tinyplex",
  description: "Remove image backgrounds online for free. Create transparent PNG images directly in your browser with Tinyplex.",
};

export default function BackgroundRemoverPage() {
  return <main>
    <header className="nav"><a href="/" className="brand"><span className="logo brand-logo" aria-hidden="true"/><span>Tinyplex</span></a><a className="back-link" href="/">← Back to Tinyplex</a></header>
    <section className="seo-hero"><span className="feature-kicker"><span className="dot"/> Free AI image tool</span><h1>Remove Background From Image Online</h1><p>Turn photos into clean transparent PNGs without uploading your image to a Tinyplex server.</p></section>
    <section className="tool-shell"><BackgroundRemover /></section>
    <section className="seo-content"><h2>How to remove a background from an image</h2><ol><li>Upload a JPG, PNG or WebP image.</li><li>Click <strong>Remove Background</strong>.</li><li>Wait while the browser processes the image.</li><li>Download the transparent PNG.</li></ol><h2>Private background removal</h2><p>Tinyplex is designed around browser-side processing. The background-removal library used by this tool performs the image matting in the browser, so your image does not need to be sent to a Tinyplex image-processing server.</p><h2>More free image tools</h2><div className="seo-link-grid"><a href="/image-compressor">Image Compressor</a><a href="/image-resizer">Image Resizer</a><a href="/compress-jpg">Compress JPG</a><a href="/compress-png">Compress PNG</a><a href="/compress-webp">Compress WebP</a></div></section>
    <footer>© {new Date().getFullYear()} Tinyplex · <a href="/privacy">Privacy</a> · <a href="/terms">Terms</a> · <a href="/contact">Contact</a></footer>
  </main>;
}
