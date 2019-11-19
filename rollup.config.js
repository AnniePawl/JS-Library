import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';

export default [{
  input: 'src/index.ts',
  plugins: [
    terser(),
    typescript(
      {
        typescript: require('typescript')
      }
    )
  ],
  output: {
    file: 'umd/anna-string-library.js',
    format: 'umd',
    name: 'annaStringLibrary',
    esModule: false
  }
}, {
  input: 'src/index.js',
  output: {
    file: 'esm/index.js',
    format: 'esm',
  }
}
]