const { getDefaultConfig } = require("expo/metro-config");
const { getSentryExpoConfig } = require("@sentry/react-native/metro");

module.exports = (() => {
  const configExpo = getDefaultConfig(__dirname);
  const configSentry = getSentryExpoConfig(__dirname);

  const { transformer, resolver } = configExpo;

  configExpo.transformer = {
    ...transformer,
    babelTransformerPath: require.resolve("react-native-svg-transformer/expo")
  };
  configExpo.resolver = {
    ...resolver,
    assetExts: resolver.assetExts.filter((ext) => ext !== "svg"),
    sourceExts: [...resolver.sourceExts, "svg"]
  };

  const config = {
    ...configExpo,
    ...configSentry
  };

  return config;
})();