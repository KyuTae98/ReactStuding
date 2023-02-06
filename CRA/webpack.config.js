const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './dist'),
    },
    devServer: {
        static: './public',
        hot: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: "/node_modules",
                include: path.resolve(__dirname, 'src'),
                loader: 'babel-loader',
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Webpack start",
            template: 'public/index.html',
        })
    ],
    optimization: {
        runtimeChunk: 'single',
    },
}
//자 어떤 기능을 넣을지 생각해보자
//1. 일단 babel css loder를 사용 V
//2. devServer를 사용 V
//3. dist를 이용해서 build V 