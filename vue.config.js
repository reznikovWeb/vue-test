const { defineConfig } = require("@vue/cli-service");
const path = require("path");
const vueSrc = "./src";

module.exports = defineConfig({
  publicPath: "/vue-test/",
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, vueSrc),
      },
      extensions: [".js", ".vue", ".json"],
    },
  },
});
