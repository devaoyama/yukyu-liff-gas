const path = require('path');
const GasPlugin = require('gas-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');

const server = {
    entry: {
        server: path.join(__dirname, 'src', 'server', 'server.ts'),
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader'
            }
        ]
    },
    resolve: {
        extensions: [
            '.ts',
            '.js'
        ]
    },
    plugins: [
        new GasPlugin()
    ]
}

const client = {
    entry: {
        client: path.join(__dirname, 'src', 'client', 'client.ts')
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: 'ts-loader'
            }
        ]
    },
    resolve: {
        extensions: [
            '.ts',
            '.js'
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inlineSource: 'client.js',
            template: path.join(__dirname, 'static', 'index.html'),
        }),
        new HtmlWebpackInlineSourcePlugin(HtmlWebpackPlugin)
    ]
}

module.exports = [
    server,
    client
]
