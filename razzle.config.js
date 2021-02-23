const path = require('path');
const LoadableWebpackPlugin = require('@loadable/webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');


const defaultOptions = {
    filePath: './../manifest',
};

module.exports = {


    modifyWebpackConfig: (opts) => {
        const isWeb = opts.env.target === 'web';
        const isDev = opts.env.dev ? 'dev' : 'prod';

        const config = Object.assign({}, opts.webpackConfig);
        const options = Object.assign({}, defaultOptions, opts.options);

        if(isWeb){

            const filename = path.resolve(__dirname, 'build');

            config.plugins.push(
                new LoadableWebpackPlugin({
                    //filename: 'loadable-stats.json',
                    outputAsset: false,
                    writeToDisk: {filename},
                })
            );


            config.output.filename = isDev
                ? 'static/js/[name].js'
                : 'static/js/[name].[chunkhash:8].js';

            config.optimization = Object.assign({}, config.optimization, {
                runtimeChunk: true,
                splitChunks: {
                    cacheGroups: {
                        commons: {
                            test: /[\\/]node_modules[\\/]/,
                            name: 'vendors',
                        },
                    },
                    chunks: 'all',
                    name: false,
                },
            });


        }

        return config;
    },

    plugins: [
        {
            name: 'scss',
            options: {
                postcss: {
                    dev: {
                        sourceMap: true,
                        ident: 'postcss'
                    },
                    prod: {
                        sourceMap: false,
                        ident: 'postcss',
                    }
                }
            }
        },
        {
            name: "manifest",
            options: {
                filePath: "./../manifest"
            }
        },
        {
            name: 'compression',
            options: {
                brotli: true,
                gzip: true,
                compressionPlugin: {},
                brotliPlugin: {
                    asset: "[path].br[query]",
                    test: /\.(js|css|html|svg)$/,
                    threshold: 10240,
                    minRatio: 0.7
                }
            }
        },
        'worker',
        'workbox',
        'svg-react-component',

        // {
        //     name: 'workbox',
        //     options: {
        //         swDest: 'my-service-worker-name.js',
        //         runtimeCaching: [
        //             {
        //                 urlPattern: /^https:\/\/maps\.googleapis\.com\/maps-api-v3\/api\/js/,
        //                 handler: 'StaleWhileRevalidate',
        //                 options: {
        //                     cacheName: 'google-maps-v3-js',
        //                 },
        //             },
        //         ],
        //     },
        // },
    ],
};
