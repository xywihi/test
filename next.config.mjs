/** @type {import('next').NextConfig} */
import withFonts from "next-fonts";
const nextConfig = withFonts({
  webpack(config, options) {
    // config.node = {
    //     fs: "empty",
    // };
    config.module.rules.push({
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        use: [
            options.defaultLoaders.babel,
            {
                loader: "url-loader?limit=100000",
            },
            {
                loader: "file-loader",
            },
        ],
    });
    return config;
  },
  reactStrictMode: true,
  swcMinify: true,
  // distDir: 'build',
//   exportPathMap: async function (
//       defaultPathMap,
//       { dev, dir, outDir, distDir, buildId }
//   ) {
//       return {
//           '/': { page: '/' },
//       };
//   },
  images: {
      loader: 'akamai',
      path:'',
  }
});

export default nextConfig;
