// /** @type {import('next').NextConfig} */
// const nextConfig = {};
//
// export default nextConfig;
const nextConfig = {
    experimental: {
        missingSuspenseWithCSRBailout: false,
    },
};

export default nextConfig;
