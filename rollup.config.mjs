import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import replace from '@rollup/plugin-replace';
import babel from '@rollup/plugin-babel';

export default {
	input: 'src/index.ts',
	output: {
		dir: 'public',
		format: 'iife',
		sourcemap: true,
		entryFileNames: 'bundle.js'
	},
	plugins: [		
		resolve({
			extensions: ['.js', '.jsx', '.ts', '.tsx']
		}),
        babel({ babelHelpers: 'bundled',
            presets: ['@babel/preset-react'],
         extensions: ['.js', '.jsx']
         }),
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
			'process.env.NODE_ENV': JSON.stringify('development'),
			preventAssignment: false
		})
	],
	//external: ['react', 'react-dom']
}