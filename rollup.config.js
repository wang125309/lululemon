import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import babelrc from 'babelrc-rollup';

export default {
    input: 'static/js-modify/index.js',
    output: {
        file: 'static/js/index.js',
        format: 'cjs'
    },
    plugins: [
        resolve({
            customResolveOptions: {
                moduleDirectory: 'node_modules'
            }
        })
    ]
}
