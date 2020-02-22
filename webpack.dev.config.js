const webpack = require('webpack');
const path = require('path');

module.exports = {
    //entry 는 import 구문 피라미드 구조이다
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './src/App.js'
    ],

    devtool: 'inline-source-map',
    // js 의 실행파일 생성경로
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
