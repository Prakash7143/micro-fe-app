const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const devConfig = {
    mode: 'development',
    output: {
        publicPath: 'http://localhost:8080/', // this is required for nested routes
    },
    devServer: {
        port: 8080,
        // historyApiFallback: {
        //     index: 'index.html'
        // }
        historyApiFallback: true,
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                marketing: 'marketing@http://localhost:8081/remoteEntry.js', // the key can be anything but the 
                // marketing@ is the one which is name in that microApp, the key is used inside other components file to call pages from 
                // this sub app
                auth: 'auth@http://localhost:8082/remoteEntry.js',
            },
            // shared: ['react', 'react-dom'],
            shared: packageJson.dependencies,
        }),
    ]
};

module.exports = merge(commonConfig, devConfig);
// devConfig at the last param means it can override any similar key in the 1st one.