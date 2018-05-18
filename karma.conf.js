//todo: rollup configuration

module.exports = function (config) {
    config.set({
        files: [
            {pattern: 'src/**/*.spec.ts', watched: false}
        ],

        frameworks: ['jasmine'],

        preprocessors: {
            'src/**/*.ts*': ['rollup', 'coverage'],
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

        //using spec console reporter, coverage reporter and jasmine html reporter:
        reporters: [
            'spec',
            'coverage',
            'html'
        ],

        colors: true,

        //capture browser console messages:
        client: {
            captureConsole: true
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
        ],

        coverageReporter: {
            dir: './temp/coverage',
            reporters: [
                {type: 'json', subdir: '.', file: 'coverage.json'},
                {type: 'html', dir: './temp/coverage'}
            ]
        },

        //karma-spec-reporter options:
        specReporter: {
            maxLogLines: 5,     // limit number of lines logged per test
            suppressErrorSummary: true,  // do not print error summary
            suppressFailed: false, // do not print information about failed tests
            suppressPassed: false, // do not print information about passed tests
            suppressSkipped: false  // do not print information about skipped tests
        },

        htmlReporter: {
            outputDir: './temp/reports',
            templatePath: null,
            focusOnFailures: true,
            namedFiles: false,
            pageTitle: 'title',
            urlFriendlyName: false,
            reportName: null,
            preserveDescribeNesting: false,
            foldAll: false
        }
    })
};