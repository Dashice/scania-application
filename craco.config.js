const path = require("path");
module.exports = {
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, "src/components/"),
      '@lib': path.resolve(__dirname, "src/lib/"),
      '@assets': path.resolve(__dirname, "src/assets/"),
      '@api': path.resolve(__dirname, "src/api/"),
    }
  }
}