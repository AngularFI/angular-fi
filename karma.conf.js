module.exports = function(config) {
    config.set({
        frameworks: ['jasmine'],

        files: [ { pattern: './config/karma.entry.js', watched: false } ],

        preprocessors: { './config/karma.entry.js': ['webpack', 'sourcemap'] },

        // webpack config
        webpack: require('./config/webpack.test'),

        // webpack server config
        webpackServer: {
            noInfo: true
        },

        reporters: ['dots'],

        logLevel: config.LOG_INFO,

        autoWatch: true,

        singleRun: false,

        customLaunchers: {
            TRAVIS_CHROME: {
                base: 'Chrome',
                flags: ['--no-sandbox']
            }
        },

        browsers: process.env.TRAVIS ? ['TRAVIS_CHROME'] : ['Chrome']
    });
};
