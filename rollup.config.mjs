import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import dts from 'rollup-plugin-dts';
import typescript from 'rollup-plugin-typescript2';

export default [
  {
    input: 'src/cores/tracker.ts',
    output: [
      {
        file: 'dist/bundle.js',
        format: 'esm',
        sourcemap: true,
      },
      {
        file: 'dist/bundle.cjs',
        format: 'cjs',
        sourcemap: true,
      },
    ],
    plugins: [resolve(), commonjs(), typescript(), json()],
  },
  {
    input: 'dist/cores/tracker.d.ts',
    output: [{ file: 'dist/bundle.d.ts', format: 'es' }],
    plugins: [dts()],
  },
];
