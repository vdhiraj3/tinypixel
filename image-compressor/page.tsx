import type { Metadata } from 'next';
import ImageOptimizer from '@/components/ImageOptimizer';

export const metadata: Metadata = {
  title: "Free Image Compressor Online",
  description: "Compress JPG, PNG and WebP images online with Tinyplex. Reduce file size quickly while keeping useful image quality.",
};

export default function Page() {
  return <main>
    <header className="nav"><a href="/" className="brand"><span className="logo brand-logo" aria-hidden="true"/><span>Tinyplex</span></a><div className="navlinks"><a href="/background-remover">Background Remover</a><a href="/">Home</a><a href="/privacy">Privacy</a></div></header>
    <section className="seo-hero"><span className="feature-kicker"><span className="dot"/> Free browser-based tool</span><h1>Compress Images Online for Free</h1><p>Compress JPG, PNG and WebP images online with Tinyplex. Reduce file size quickly while keeping useful image quality.</p></section>
    <section className="tool-shell"><ImageOptimizer /></section>
    <section className="seo-content"><h2>Compress Images Online for Free</h2><p>Compress JPG, PNG and WebP images online with Tinyplex. Reduce file size quickly while keeping useful image quality. Tinyplex lets you choose quality, output format and—when resizing—custom dimensions without requiring an account.</p><h2>How it works</h2><ol><li>Upload your image.</li><li>Choose compression or resize settings.</li><li>Click <strong>Optimize images</strong>.</li><li>Download the result or a ZIP of multiple files.</li></ol><h2>Why use Tinyplex?</h2><p>Processing happens in your browser for the core image optimization workflow. That means there is no Tinyplex upload step for the image itself. For JPG, PNG and WebP files, you can choose a practical output format and balance quality against file size.</p><h2>Related image tools</h2><div className="seo-link-grid"><a href="/image-resizer">image resizer</a><a href="/compress-jpg">compress jpg</a><a href="/compress-png">compress png</a><a href="/compress-webp">compress webp</a><a href="/resize-image">resize image</a><a href="/resize-jpg">resize jpg</a><a href="/resize-png">resize png</a><a href="/reduce-image-size">reduce image size</a><a href="/background-remover">background remover</a></div></section>
    <footer>© {new Date().getFullYear()} Tinyplex · <a href="/privacy">Privacy</a> · <a href="/terms">Terms</a> · <a href="/contact">Contact</a></footer>
  </main>;
}
