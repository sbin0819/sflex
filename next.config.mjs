/** @type {import('next').NextConfig} */
import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';
const nextConfig = {
  reactStrictMode: true,
};

export default createVanillaExtractPlugin(nextConfig);
