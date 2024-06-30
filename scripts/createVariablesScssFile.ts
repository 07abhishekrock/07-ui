import {writeFileSync} from 'fs'

import { Theme, lightTheme } from '../src/theming/tokens'
import { recurseObjectsIntoSnakeCaseVariables } from '../src/theming/utils'

const generateVariableScssText = (themeIdentifier: string, theme: Theme)=>{

     const scssText = Object
     .entries(theme)
     .map(([k, v])=>{
          if(typeof v === 'string'){
               return `\t--${k}: ${v};`
          }
          return recurseObjectsIntoSnakeCaseVariables(k, v)
     }).join('\n')

     return `html[theme="${themeIdentifier}"]{\n` + scssText + "\n}\n"

}

const allScssSources: [string, Theme][] = [
     ["light", lightTheme]
];

const finalText = allScssSources.reduce((finalTxt, scssSource)=>{
     finalTxt += generateVariableScssText(scssSource[0], scssSource[1]) 

     return finalTxt
}, "")

writeFileSync("src/components/_variables.scss", finalText, {encoding: 'utf-8'})
