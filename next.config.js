/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // async rewrites() {
  //   return [
  //     {
  //       source: "/:path*",
  //       destination: "http://54.79.60.180:8080/:path*",
  //     },
  //   ];
  // },
};

const withTM = require("next-transpile-modules")([
  "@fullcalendar/common",
  "@babel/preset-react",
  "@fullcalendar/common",
  "@fullcalendar/daygrid",
  "@fullcalendar/interaction",
  "@fullcalendar/react",
  "@fullcalendar/timegrid",
]);

module.exports = withTM({ nextConfig });
