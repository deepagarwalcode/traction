/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          hostname: "utfs.io",
        },
        {
          hostname: "images.unsplash.com",
        },
        {
          hostname: "plus.unsplash.com",
        },
        {
          hostname: "res.cloudinary.com",
        },
        {
          hostname: "tractionagency.io",
        },
      ],
    },
  };
  
  export default nextConfig;
  