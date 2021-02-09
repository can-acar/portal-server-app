'use strict';
const path = require('path');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const scssPlugin = new ExtractTextPlugin(
    'assets/css/[name].[contenthash:8].css'
);
const makeLoaderFinder = require('razzle-dev-utils/makeLoaderFinder');

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    plugins:["scss"],
    modifyWebpackConfig(opts){
        const config = opts.webpackConfig;

        const isServer = opts.env.target === 'web' && !opts.env.dev;
        const target = opts.env.target;
        const dev = opts.env.dev;

        const postCssLoader = {
            loader: 'postcss-loader',
            options: {
                ident: 'postcss',
                plugins: () => [
                    autoprefixer({
                        browsers: ['>1%', 'last 4 versions', 'Firefox ESR', 'not ie < 9'],
                    }),
                ],
            },
        };

        // const sassLoader = {
        //     loader: 'sass-loader',
        //     options: {
        //         includePaths: [path.resolve(__dirname, '../node_modules')],
        //     },
        // };

        config.module.rules.push({
            test: /\.scss$/,
            use: isServer
                ? ['css-loader',]// sassLoader]
                : dev
                    ? [
                        'style-loader',
                        {
                            loader: 'css-loader',
                            options: {modules: false, sourceMap: true},
                        },
                        postCssLoader,
                        //sassLoader,
                    ]
                    : ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: [
                            {
                                loader: 'css-loader',
                                options: {importLoaders: 1},
                            },
                            postCssLoader,
                            //sassLoader,
                        ],
                    }),
        });
        if(!isServer && !dev){
            config.plugins.push(
                new ExtractTextPlugin({
                    filename: 'assets/css/[name].[contenthash:8].css',
                    allChunks: true,
                }),
            );
        }

        config.resolve.modules.push('src');

        config.devtool = dev ? 'eval-source-map' : 'none';

        return config;
    }

    //


};
