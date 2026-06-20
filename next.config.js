/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**', // This wildcard allows all domains
            },
        ],
    },
};

module.exports = nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//         remotePatterns: [
//             {
//                 protocol: 'https',
//                 hostname: 'v.monophonic.digital',
//                 pathname: '/**',
//             },
//             {
//                 protocol: 'https',
//                 hostname: 'val012.open-audio-validator.com',
//                 pathname: '/**',
//             },
//         ],
//     },
// };

// module.exports = nextConfig;