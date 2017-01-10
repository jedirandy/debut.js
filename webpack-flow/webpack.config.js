const path = require('path');
const FlowBabelWebpackPlugin = require('flow-babel-webpack-plugin');

module.exports = {
    entry: {
        app: [
            path.resolve(__dirname, 'src/index.js')
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'stage-0'],
                    plugins: ['syntax-flow', 'transform-flow-strip-types', 'transform-flow-comments']
                }
            },
            {
                test: /\.css$/,
                loaders: ['style', 'css']
            }
        ],
        noParse: [
            /node_modules\/ace-builds/,
            /node_modules\/lodash/
        ]
    },
    plugins: [
        new FlowBabelWebpackPlugin()
    ],
    devtool: 'source-map'
};
