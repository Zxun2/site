// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure pageExtensions to include md and mdx
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  // Optionally, add any other Next.js config below
  reactStrictMode: true,
  images: {
    domains: ['raw.githubusercontent.com'],
  },
};

// Merge MDX config with Next.js config
module.exports = nextConfig;
