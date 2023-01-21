const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devServer: {
        static: './public'
    },
    Plugin: [
        new HtmlWebpackPlugin({
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'public'),
    },
    optimization: {
        runtimeChunk: 'single',
    },
}