const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        main: path.resolve(__dirname, 'src', 'index.js'),
        singleFilm: path.resolve(__dirname, 'src', 'single-film.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[chunkhash].js'
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
            {
                test: /\.(gif|png|jpe?g|svg|ttf)$/,
                type: "asset/resource"
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
        ]
    },
    devServer: {
        contentBase: './dist',
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "src/index.html",
            chunks: ['main']
        }),
        new HtmlWebpackPlugin({
            filename: "film.html",
            template: "src/film.html",
            chunks: ['singleFilm']
        }),
        new MiniCssExtractPlugin({
            chunkFilename: '[chunkhash].css'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
        }),
    ],
};