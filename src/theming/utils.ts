import { Theme } from "./tokens";

export const resolveTokensWithReference = (theme: Theme)=>{

     let resolvedTheme = {...theme};

     Object
     .entries(theme)
     .forEach(([k, v])=>{
          if(v.startsWith('$')){
               const refKey = v.slice(1)
               if(typeof resolvedTheme[refKey] !== 'undefined'){
                    resolvedTheme[k] = resolvedTheme[refKey]
               }
          }
     })

     return resolvedTheme
}