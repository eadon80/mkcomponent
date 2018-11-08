const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const WebpackMd5Hash = require("webpack-md5-hash")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const config = {
    entry: {
        main: './src/index.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[chunkhash].js' 
    }
};

module.exports = (env, argv) => {
    return config;
};

