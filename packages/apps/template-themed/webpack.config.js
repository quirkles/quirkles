const { composePlugins, withNx } = require('@nx/webpack');
const { withReact } = require('@nx/react');

// Nx plugins for webpack.
module.exports = composePlugins(withNx(), withReact(), (config) => {
  // Update the webpack config as needed here.
  // e.g. `config.plugins.push(new MyPlugin())`
  config.module.rules.push(       {
    test: /\.(woff|woff2|eot|ttf|otf)$/i,
    type: 'asset/resource',
  })
  return config;
});
