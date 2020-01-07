module.exports = api => {
  api.cache.forever();
  return {
    presets: ["@babel/preset-env", "@babel/preset-react"],

    plugins: [
      "@babel/plugin-proposal-class-properties",
      "@babel/plugin-transform-runtime",
      "@babel/plugin-transform-modules-commonjs"
    ]
  };
};
