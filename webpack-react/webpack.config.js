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
        rules: [
            {
                test: /\.jsx?$/,
                include: path.join(__dirname, 'src'),
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015', 'react']
                        }
                    }
                ]
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
