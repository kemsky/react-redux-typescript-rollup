import typescript from 'typescript';
import typescriptPlugin from 'rollup-plugin-typescript';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import uglify from 'rollup-plugin-uglify';

const development = 'development';
const production = 'production';

const environment = (process.env.NODE_ENV === production) ? production : development;

const plugins = [
    replace({'process.env.NODE_ENV': JSON.stringify(environment)}),
    nodeResolve(),
    commonjs({
        include: 'node_modules/**',
        namedExports: {
            './node_modules/react/index.js': ['Children', 'Component', 'PropTypes', 'createElement'],
            './node_modules/react-dom/index.js': ['render']
        }
    }),
    typescriptPlugin({typescript}),
];


if (environment === development) {
    // For playing around with just frontend code the serve plugin is pretty nice.
    // We removed it when we started doing actual backend work.
    plugins.push(serve({
        port: 3000,
        historyApiFallback: true,
    }));
    plugins.push(livereload());
}

if (environment === production) {
    plugins.push(uglify());
}

const sourceMap = environment === development ? 'inline' : false;

export default {
    plugins: plugins,
    input: './src/main.tsx',
    output: {
        file: './build/bundle.js',
        format: 'iife',
        sourcemap: sourceMap,
        treeshake: false
    }
};