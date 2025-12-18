// import type { NextConfig } from 'next';

// const withPWA = require('next-pwa')({
//   dest: 'public',
//   register: true,
//   skipWaiting: true,
//   disable: process.env.NODE_ENV === 'development', // ✅ prevents double SW in dev
// });

// const nextConfig: NextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,

//   webpack: (config) => {
//     // ✅ Fix for MetaMask SDK requiring RN async-storage
//     config.resolve.alias['@react-native-async-storage/async-storage'] = false;

//     return config;
//   },
// };

// module.exports = withPWA(nextConfig);


/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // experimental: {
  //   suppressHydrationWarning: true,
  // },
};

module.exports = nextConfig;
