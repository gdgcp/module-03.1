import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import replace from '@rollup/plugin-replace';
import babel from '@rollup/plugin-babel';

export default {
	input: 'src/index.ts',
	output: {
		file: './build/bundle.js',
		format: 'iife',
		sourcemap: true
	},
	plugins: [
		resolve({
			extensions: ['.js', '.jsx', '.ts', '.tsx']
		}),
        babel({ babelHelpers: 'bundled' }),
		commonjs(),
		typescript({
			tsconfig: './tsconfig.json',
			sourceMap: true,
			outDir: null
		}),
		postcss({
			extensions: ['.css']
		}),
		replace({
			'process.env.NODE_ENV': JSON.stringify('production'),
			preventAssignment: true
		})
	],
	external: ['react', 'react-dom']
}