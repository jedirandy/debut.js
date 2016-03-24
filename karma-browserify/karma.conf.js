module.exports = function(config) {
    config.set({
        browsers: ['PhantomJS'],
        singleRun: false,
        frameworks: ['mocha', 'chai', 'browserify'],
        files: [
            'test/**/*.js'
        ],
        preprocessors: {
            'test/**/*.js': ['browserify']
        },
        browserify: {
            debug: true,
            extensions: ['.js'],
            transform: [
                ['babelify', {
                    presets: ['es2015'],
                    sourceMaps: 'inline'
                }]
            ]
        },
        reporters: ['progress'],
        color: true,
        autoWatch: true
    });
}