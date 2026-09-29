"use client";

import Link from "next/link";
import type { ReactNode } from "react";

type ToolPageLayoutProps = {
  title: string;
  description: string;
  children: ReactNode;
};

const tools = [
  {
    name: "Image Compressor",
    href: "/image-compressor",
  },
  {
    name: "Image Resizer",
    href: "/image-resizer",
  },
  {
    name: "Background Remover",
    href: "/background-remover",
  },
  {
    name: "Compress JPG",
    href: "/compress-jpg",
  },
  {
    name: "Compress PNG",
    href: "/compress-png",
  },
  {
    name: "Compress WebP",
    href: "/compress-webp",
  },
  {
    name: "Resize Image",
    href: "/resize-image",
  },
  {
    name: "Resize JPG",
    href: "/resize-jpg",
  },
  {
    name: "Resize PNG",
    href: "/resize-png",
  },
  {
    name: "Reduce Image Size",
    href: "/reduce-image-size",
  },
  {
    name: "Compress to 100KB",
    href: "/compress-image-to-100kb",
  },
  {
    name: "Compress to 200KB",
    href: "/compress-image-to-200kb",
  },
  {
    name: "Compress to 500KB",
    href: "/compress-image-to-500kb",
  },
];

export default function ToolPageLayout({
  title,
  description,
  children,
}: ToolPageLayoutProps) {
  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-extrabold tracking-tight"
          >
            Tiny<span className="text-blue-600">Plex</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-6 md:flex">
            <Link
              href="/"
              className="text-sm font-medium text-gray-600 transition hover:text-blue-600"
            >
              Home
            </Link>

            <Link
              href="/image-compressor"
              className="text-sm font-medium text-gray-600 transition hover:text-blue-600"
            >
              Image Compressor
            </Link>

            <Link
              href="/image-resizer"
              className="text-sm font-medium text-gray-600 transition hover:text-blue-600"
            >
              Image Resizer
            </Link>

            <Link
              href="/background-remover"
              className="text-sm font-medium text-gray-600 transition hover:text-blue-600"
            >
              Background Remover
            </Link>
          </nav>

          {/* Mobile Home */}
          <Link
            href="/"
            className="rounded-lg border border-gray-200 px-3 py-2 text-sm font-medium md:hidden"
          >
            Home
          </Link>
        </div>
      </header>

      {/* MAIN */}
      <main>

        {/* Hero */}
        <section className="px-4 pb-8 pt-14 sm:pt-20">
          <div className="mx-auto max-w-4xl text-center">

            <div className="mb-4 inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
              Free Online Image Tool
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              {title}
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
              {description}
            </p>

          </div>
        </section>

        {/* TOOL */}
        <section className="px-4 pb-16">
          <div className="mx-auto max-w-5xl">
            {children}
          </div>
        </section>

        {/* SEO CONTENT */}
        <section className="border-t border-gray-100 bg-gray-50 px-4 py-16">
          <div className="mx-auto max-w-4xl">

            <h2 className="text-2xl font-bold sm:text-3xl">
              {title}
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              TinyPlex provides a simple and free way to optimize your
              images online. Upload your image, process it directly in
              your browser, and download the result without complicated
              software.
            </p>

            <h2 className="mt-10 text-2xl font-bold">
              How to use TinyPlex
            </h2>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">

              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <div className="mb-3 text-2xl font-bold text-blue-600">
                  01
                </div>

                <h3 className="font-semibold">
                  Upload your image
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Select the image you want to compress, resize or
                  optimize.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <div className="mb-3 text-2xl font-bold text-blue-600">
                  02
                </div>

                <h3 className="font-semibold">
                  Process your image
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Use the tool above to process your image according to
                  your needs.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <div className="mb-3 text-2xl font-bold text-blue-600">
                  03
                </div>

                <h3 className="font-semibold">
                  Download the result
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Download your optimized image when processing is
                  complete.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* QUICK TOOLS */}
        <section className="px-4 py-16">
          <div className="mx-auto max-w-6xl">

            <div className="text-center">
              <h2 className="text-3xl font-bold">
                Quick Image Tools
              </h2>

              <p className="mx-auto mt-3 max-w-2xl text-gray-600">
                Explore more free image compression, resizing and
                optimization tools from TinyPlex.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">

              {tools.map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="group rounded-2xl border border-gray-200 bg-white p-5 text-center font-semibold shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
                >
                  <span className="transition group-hover:text-blue-600">
                    {tool.name}
                  </span>

                  <span className="mt-2 block text-xs text-gray-400">
                    Try tool →
                  </span>
                </Link>
              ))}

            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-gray-200 bg-gray-50">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">

          <div>
            <Link
              href="/"
              className="text-xl font-extrabold"
            >
              Tiny<span className="text-blue-600">Plex</span>
            </Link>

            <p className="mt-2 text-sm text-gray-500">
              Free online image optimization tools.
            </p>
          </div>

          <div className="flex flex-wrap gap-5 text-sm text-gray-500">
            <Link
              href="/"
              className="hover:text-blue-600"
            >
              Home
            </Link>

            <Link
              href="/privacy"
              className="hover:text-blue-600"
            >
              Privacy
            </Link>

            <Link
              href="/terms"
              className="hover:text-blue-600"
            >
              Terms
            </Link>

            <Link
              href="/contact"
              className="hover:text-blue-600"
            >
              Contact
            </Link>
          </div>

        </div>

        <div className="border-t border-gray-200 py-5 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} TinyPlex. All rights reserved.
        </div>
      </footer>

    </div>
  );
}
