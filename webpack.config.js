const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: "./src/easy/index.ts",
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    // 需要打包的文件后缀
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: "ts-loader", exclude: /node_modules/ }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./src/index.html"
    })],
}