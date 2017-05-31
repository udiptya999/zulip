var config = require('./webpack.config.js');
var BundleTracker = require('webpack-bundle-tracker');

config.entry.translations.push('webpack-dev-server/client?/socket.io');
config.devtool = 'eval';
config.output.publicPath = '/webpack/';
config.plugins.push(new BundleTracker({filename: 'static/webpack-bundles/webpack-stats-dev.json'}));

config.devServer = {
    port: 9994,
    stats: "errors-only",
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000,
    },
};

module.exports = config;
