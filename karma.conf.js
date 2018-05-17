//todo: rollup configuration + coverage + reporting

module.exports = function (config) {
    config.set({
        files: [
            {pattern: 'test/**/*.spec.ts', watched: false}
        ],

        frameworks: ['jasmine'],

        preprocessors: {
            'test/**/*.spec.ts': ['rollup']
        },

        browsers: ['PhantomJS'],

        rollupPreprocessor: {
            plugins: [require('rollup-plugin-typescript')({typescript: require('typescript')})],
            output: {
                format: 'iife',
                name: 'test',
                sourcemap: 'inline'
            }
        },

        plugins: [
            'karma-jasmine',
            'karma-coverage',
            'karma-chrome-launcher',
            'karma-phantomjs-launcher',
            'karma-html-reporter',
            'karma-spec-reporter',
            'karma-teamcity-reporter',
            'karma-rollup-preprocessor'
        ]
    })
};