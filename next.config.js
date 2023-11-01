/** @type {import('next').NextConfig} */

const nextConfig = {
  async redirects() {
    return [
      {
        // What the user typed in the browser
        source: "https://skyderads.com",
        // Where the user will be redirected to
        destination: "https://skyderdigital.com",
        // If the destination is a permanent redirect (308)
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
