const { merge } = require('webpack-merge');

const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const devConfig = {
    mode: 'development',
    devServer: {
        port: 8081,
        // historyApiFallback: {
        //     index: 'index.html'
        // }
        historyApiFallback: true,
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'marketing',
            filename: 'remoteEntry.js',
            exposes: {
                './MarketingApp': './src/bootstrap'
            },
            // shared: ['react', 'react-dom'],
            shared: packageJson.dependencies,
        })
    ]
};

module.exports = merge(commonConfig, devConfig);
// devConfig at the last param means it can override any similar key in the 1st one.