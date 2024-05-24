/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/recipe-book",
  output: "export", // <=== enables static exports
  reactStrictMode: true,
};

export default nextConfig;
