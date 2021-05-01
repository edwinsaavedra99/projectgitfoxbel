module.exports = {
  /*devServer: {
    disableHostCheck: true,
  },*/
  transpileDependencies: ["vuetify"],
  publicPath: "/",
  chainWebpack: (config) => {
    config.plugins.delete("prefetch");
  },
}
