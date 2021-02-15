module.exports = {
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
        'svg-react-component',
    ]
};
