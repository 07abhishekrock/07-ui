import typescript from "@rollup/plugin-typescript";
import sass from 'rollup-plugin-sass'
import {nodeResolve} from '@rollup/plugin-node-resolve'
import commonjs from "@rollup/plugin-commonjs";
import nodeExternals from "rollup-plugin-node-externals";

export default {
     input: {
          'Button': './src/components/Button/index.tsx' ,
          'index': "./src/components/index.ts"
     },
     output: [{
          dir: "dist/esm",
          format: 'esm'
     }, {
          dir: "dist/cjs",
          format: 'cjs'
     }],
     plugins: [
          nodeExternals({
               deps: false,
               peerDeps: true,
               devDeps: true
          }),
          typescript(),
          nodeResolve(),
          sass(),
          commonjs({
               requireReturnsDefault: true
          })
     ]
}
