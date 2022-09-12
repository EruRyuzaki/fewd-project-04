const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const WorkboxPlugin = require("workbox-webpack-plugin");

module.exports = {

    mode: "production",
    entry: {
        bundle: path.resolve(__dirname, "./src/client/index.js")
    },
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "[name].js",
        clean: true,
        libraryTarget: "var",
        library: "client"
    },
    devtool: "source-map",
    optimization: {
        minimizer: [new TerserPlugin({})]
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/client/pages/index.html",
            filename: "index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css"
        }),
        new Dotenv(),
        new WorkboxPlugin.GenerateSW()
    ]
    
}