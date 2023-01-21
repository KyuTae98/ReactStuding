const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'developer',
    entry: './src/index.js',
    Plugin: [
        new HtmlWebpackPlugin({
        })
    ],
    output: {
        filename: '',
        path: path.resolve(__dirname, 'public'),
    },
}