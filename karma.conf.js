module.exports = function (config) {
    // noinspection JSUnusedGlobalSymbols
    config.set({
        files: [
            {pattern: 'src/**/*.spec.ts', watched: false}
        ],

        frameworks: ['jasmine'],

        preprocessors: {
            'src/**/*.ts*': ['rollup'],
        },

        browsers: ['PhantomJS'],

        rollupPreprocessor: {
            plugins: [
                require('rollup-plugin-node-resolve')({
                    jsnext: true,
                    module: true,
                    browser: true //required for axios library
                }),
                require('rollup-plugin-commonjs')({
                    include: 'node_modules/**',
                    namedExports: {
                        './node_modules/react/index.js': ['Children', 'Component', 'PropTypes', 'createElement'],
                        './node_modules/react-dom/index.js': ['render'],
                        './node_modules/chai/index.js': ['expect']
                    }
                }),
                require('rollup-plugin-typescript')({
                    typescript: require('typescript')
                })
            ],
            output: {
                format: 'iife',
                name: 'test',
                sourcemap: 'inline'
            },
            onwarn: function(message) {
                if(message.code === 'CIRCULAR_DEPENDENCY' && message.importer.indexOf('chai.js') > -1) {
                    return;
                }
                console.log(message);
            }
        },

        //using spec console reporter, coverage reporter and jasmine html reporter:
        reporters: [
            'spec',
            'html'
        ],

        colors: true,

        //capture browser console messages:
        client: {
            captureConsole: true
        },

        plugins: [
            'karma-jasmine',
            'karma-chrome-launcher',
            'karma-phantomjs-launcher',
            'karma-html-reporter',
            'karma-spec-reporter',
            'karma-teamcity-reporter',
            'karma-rollup-preprocessor'
        ],

        //karma-spec-reporter options:
        specReporter: {
            maxLogLines: 5,     // limit number of lines logged per test
            suppressErrorSummary: true,  // do not print error summary
            suppressFailed: false, // do not print information about failed tests
            suppressPassed: false, // do not print information about passed tests
            suppressSkipped: false  // do not print information about skipped tests
        },

        htmlReporter: {
            outputDir: './output/reports',
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