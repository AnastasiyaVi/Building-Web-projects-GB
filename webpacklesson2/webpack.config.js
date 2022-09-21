const { resolve } = require('path');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const { extendDefaultPlugins } = require("svgo");

module.exports = {
    entry: './src/main.js',
    mode: 'development',
    output: {
        path: resolve(__dirname, 'build'),
        filename: 'main.[contenthash].js'

    },
    module: {
        rules: [{
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
        {
            test: /\.(jpe?g|png|gif|mp3)$/i,
            type: "asset",
            loader: 'file-loader',
            options: {
                name: '[path][name].[ext]'
            }
        }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: resolve(__dirname, 'index.html') }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        new BundleAnalyzerPlugin(),
        new ImageMinimizerPlugin(
            //     {
            //     minimizerOptions: {
            //         plugins: [
            //             ["gifsicle", { interlaced: true }],
            //             ["jpegtran", { progressive: true }],
            //             ["optipng", { optimizationLevel: 5 }],

            //         ],
            //     },
            // }
        ),
    ],
    devServer: {
        port: 9000
    },
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin(),

        ]
    }
}