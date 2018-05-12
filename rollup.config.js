import typescript from 'typescript';
import typescriptPlugin from 'rollup-plugin-typescript';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import uglify from 'rollup-plugin-uglify';

const dev = 'development';
const prod = 'production';

const nodeEnv = parseNodeEnv(process.env.NODE_ENV);

const plugins = [
    replace({
        // The react sources include a reference to process.env.NODE_ENV so we need to replace it here with the actual value
        'process.env.NODE_ENV': JSON.stringify(nodeEnv),
    }),
    // nodeResolve makes rollup look for dependencies in the node_modules directory
    nodeResolve(),
    commonjs({
        // All of our own sources will be ES6 modules, so only node_modules need to be resolved with cjs
        include: 'node_modules/**',
        namedExports: {
            './node_modules/react/index.js': ['Children', 'Component', 'PropTypes', 'createElement'],
            './node_modules/react-dom/index.js': ['render']
        }
    }),
    typescriptPlugin({
        typescript,
    }),
];


if (nodeEnv === dev) {
    // For playing around with just frontend code the serve plugin is pretty nice.
    // We removed it when we started doing actual backend work.
    plugins.push(serve({
        port: 3000,
        historyApiFallback: true,
    }));
    plugins.push(livereload());
}

if (nodeEnv === prod) {
    plugins.push(uglify());
}

const sourceMap = nodeEnv === dev ? 'inline' : false;

export default {
    plugins: plugins,
    input: './src/client/main.tsx',
    output: {
        file: './build/bundle.js',
        format: 'iife',
        sourcemap: sourceMap,
    }
};

function parseNodeEnv(nodeEnv) {
    if (nodeEnv === prod || nodeEnv === dev) {
        return nodeEnv;
    }
    return dev;
}
