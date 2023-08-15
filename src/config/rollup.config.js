import replace from '@rollup/plugin-replace';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import json from '@rollup/plugin-json';
import { terser } from 'rollup-plugin-terser';

export default {
  input: '../app.js', // Ruta relativa al archivo app.js

  output: {
    dir: '../dist', 
    format: 'esm',
    sourcemap: true,
  },

  plugins: [
    replace({
      // Opciones de reemplazo...
      preventAssignment: true,
    }),
    resolve(),
    commonjs(),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
    }),
    json(), // Agrega el complemento json
    terser(), // Minificar el código (opcional)
  ],
};
