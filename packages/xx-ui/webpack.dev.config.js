// 清理产出目录的插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

//  产出 html 的插件
const HtmlWebpackPlugin = require('html-webpack-plugin')

const path = require('path')

module.exports = {
    entry: './src/index.tsx',
    output: {
        // 输出目录
        path: path.resolve(__dirname, '../dist'),
        filename: 'main.js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    devServer: {
        contentBase: '../dist'
    },
    module: {
        rules: [
        {
            test: /\.(j|t)sx?/,
            use: 'ts-loader',
            exclude: /node_modules/
        }
        ]
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ['./dist']
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}