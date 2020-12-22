const path = require('path');
const GasPlugin = require('gas-webpack-plugin');

const server = {
    entry: {
        main: path.join(__dirname, 'src', 'server', 'server.ts'),
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

module.exports = [
    server
]
