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

const nodeEnvironment = parseNodeEnv(process.env.NODE_ENV);

const plugins = [
    replace({'process.env.NODE_ENV': JSON.stringify(nodeEnvironment)}),
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


if (nodeEnvironment === development) {
    // For playing around with just frontend code the serve plugin is pretty nice.
    // We removed it when we started doing actual backend work.
    plugins.push(serve({
        port: 3000,
        historyApiFallback: true,
    }));
    plugins.push(livereload());
}

if (nodeEnvironment === production) {
    plugins.push(uglify());
}

const sourceMap = nodeEnvironment === development ? 'inline' : false;

export default {
    plugins: plugins,
    input: './src/main.tsx',
    output: {
        file: './build/bundle.js',
        format: 'iife',
        sourcemap: sourceMap,
    }
};

function parseNodeEnv(nodeEnv) {
    if (nodeEnv === production || nodeEnv === development) {
        return nodeEnv;
    }
    return development;
}
