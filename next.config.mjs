/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
            source: '/pages',
            destination: '/exoplanetas',
            permanent: true,
            },
        ];
    },
};
export default nextConfig;
