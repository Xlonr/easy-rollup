import babel from 'rollup-plugin-babel'
import eslint from 'rollup-plugin-eslint'
import resolve from 'rollup-plugin-node-resolve'
import vue from 'rollup-plugin-vue'
// import uglify from 'rollup-plugin-uglify'
// import alias from 'rollup-plugin-alias'
import replace from 'rollup-plugin-replace'
import server from 'rollup-plugin-serve'
import commonjs from 'rollup-plugin-commonjs'
import path from 'path'

export default {
  input: path.resolve(__dirname, './src/main.js'),
  output: {
    file: 'dist/index.js',
    format: 'iife',
    sourcemap: 'inline'
  },
  // external: ['html'],
  plugins: [
    resolve({
      jsnext: true,
      main: true,
      brower: true
    }),
    babel({
      exclude: ['node_modules/**', 'sass/**', 'src/vue/**']
    }),
    eslint({
      throwOnError: true,
      throwOnWarning: true,
      include: ['src/**/*.js']
    }),
    commonjs({
      include: 'node_modules/**'
    }),
    vue(),
    // alias({
    //   'vue$': 'vue/dist/vue.common.js'
    // }),
    replace({
         'process.env.NODE_ENV': JSON.stringify('development'),
         'process.env.VUE_ENV': JSON.stringify('browser')
    }),
    // (process.env.NODE_ENV === 'production' && uglify()),
    server({
      open: true,
      contentBase: './',
      historyApiFallback: true,
      host: 'localhost',
      port: '10101'
    })
  ]
}