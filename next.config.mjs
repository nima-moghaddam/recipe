/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ["img.spoonacular.com" ],
    domains: ["edamam-product-images.s3.amazonaws.com", "www.edamam.com"],
  },
};

export default nextConfig;
