//운영배포시 사용되는 react 설정파일
const webpack = require('webpack');
const path = require('path');

module.exports = {
    //entry 는 import 구문 피라미드 구조이다
    entry: './src/App.js',
    // js 의 실행파일 생성경로
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    //배포시 최대한 압축해서 들여쓰기,띄워쓰기등을 없애주는형태
    devtool: 'cheap-module-source-map',
    //웹팩을 통해서 들여쓰기, 띄워쓰기를 없애주는 플러그인
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ],

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
                                ['es2015', {modules: false}],   //es 설정을 읽을수 있는 부분, 버전변경시 바꿔준다
                                'react'
                            ]
                        }
                    }
                ]
            }
        ]
    }
};
