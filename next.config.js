const path = require("path");

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["source.unsplash.com"]
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  }
}
