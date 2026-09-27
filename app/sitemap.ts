import type { MetadataRoute } from 'next';

const routes = [
  '',
  '/image-compressor',
  '/image-resizer',
  '/compress-jpg',
  '/compress-png',
  '/compress-webp',
  '/resize-image',
  '/resize-jpg',
  '/resize-png',
  '/reduce-image-size',
  '/compress-image-to-100kb',
  '/compress-image-to-200kb',
  '/compress-image-to-500kb',
  '/background-remover',
  '/privacy',
  '/terms',
  '/contact',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://tinyplex-three.vercel.app';
  return routes.map((route) => ({
    url: `${base}${route}`,
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : route === '/background-remover' ? 0.9 : 0.8,
  }));
}
