const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "hippobyte",
    projectName: "app-react",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    externals: ["react", "react-dom", "@hippobyte/stylekit"]
    // modify the webpack config however you'd like to by adding to this object
  });
};
