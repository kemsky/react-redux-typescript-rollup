import typescript from 'typescript';
import typescriptPlugin from 'rollup-plugin-typescript';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import uglify from 'rollup-plugin-uglify';
import cleanup from 'rollup-plugin-cleanup';

const production = process.env.NODE_ENV === 'production';

const plugins = [
    replace({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
        enableDevTools: true
    }),
    nodeResolve({
        jsnext: true,
        module: true,
        browser: true  //required for axios library
    }),
    commonjs({
        include: 'node_modules/**',
        namedExports: {
            './node_modules/react/index.js': ['Children', 'Component', 'PropTypes', 'createElement'],
            './node_modules/react-dom/index.js': ['render'],
            './node_modules/redux/dist/index.js':['GenericStoreEnhancer']
        }
    }),
    typescriptPlugin({typescript}), //transpile only, no error checking
    cleanup({})
];

if (production) {
    plugins.push(uglify());
} else {
    plugins.push(serve({
        port: 3000,
        historyApiFallback: true,
        contentBase: '.',
    }));
    plugins.push(livereload());
}

export default {
    plugins: plugins,
    input: './src/main.tsx',
    output: {
        file: './build/bundle.js',
        format: 'iife',
        sourcemap: production ? true : 'inline'
    },
    onwarn: function(message){
        if(message.code === 'CIRCULAR_DEPENDENCY' && message.importer.indexOf('redux-saga') > -1) {
            return;
        }
        console.log(message);
    }
};