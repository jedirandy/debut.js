var webpack = require('webpack');
var path = require('path');
var npmPackage = require('./package.json');

module.exports = {
    entry: {
        app: path.resolve(__dirname, 'src/main.js'),
        dependencies: Object.keys(npmPackage.dependencies)
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'react']
                },
                include: path.join(__dirname, 'src')
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'dependencies',
            filename: 'vendor.js',
            minChunks: Infinity
        })
    ]
}