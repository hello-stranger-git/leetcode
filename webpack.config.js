const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports={
    entry: "./src/easy/leetCode7.numberReverse.ts",
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
            // all files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'
            { test: /\.tsx?$/, loader: "ts-loader",exclude: /node_modules/, }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template:"./src/index.html"
    })],
}