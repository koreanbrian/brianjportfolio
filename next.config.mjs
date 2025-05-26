const withNextIntl = (await import("next-intl/plugin")).default;

/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    serverActions: {},
  },
  reactStrictMode: true,
};

export default withNextIntl()(nextConfig);
