/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enables static export
  trailingSlash: true, // Helps with routing issues
  images: {
    unoptimized: true, // Needed if using next/image (since it relies on server-side processing)
  },
};

export default nextConfig;
