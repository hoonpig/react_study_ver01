//개발용 react 설정 운영과는 다른 설정방식을 따라간다.
//운영과는 다르게 hotloader 라던지, 개발에 필요한부분을 보여준다
const webpack = require('webpack');
const path = require('path');

module.exports = {

    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './src/App.js'
    ],

    devtool: 'inline-source-map',

    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],

    devServer: {
        inline: true,
        port: 3000,
        hot: true
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                include: path.resolve(__dirname, 'src'),
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                ['es2015', {modules: false}],
                                'react'
                            ],
                            plugins: ['react-hot-loader/babel']
                        }
                    }
                ]
            }
        ]
    }
};
