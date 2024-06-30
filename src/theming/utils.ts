import { Theme } from "./tokens";

const resolveKeyOfObject = (obj: any, key: string)=>{

     if(key === ""){
          return obj;
     }

     const [firstKey, ...keys] = key.split('.')

     return resolveKeyOfObject(obj[firstKey], keys.join('.'))
}

const resolveFinalReference = (obj: any, keyName: string)=>{
     let value = resolveKeyOfObject(obj, keyName)

     while(typeof value === 'string' && value.startsWith('$')){
          value = resolveKeyOfObject(obj, value)
     }

     return value;
}

const getKeyOrTheSameObj = (obj: any, key: string = "")=>{
     if(!key){
          return  obj
     }
     return obj[key]
}

export const resolveTokensWithReference = (
     theme: Theme,
     defaultKey: string = ""
)=>{

     const subsetOfTheme = getKeyOrTheSameObj(theme, defaultKey)
     let resolvedTheme = {...subsetOfTheme};

     Object
     .entries(subsetOfTheme)
     .forEach(([k, v])=>{

          if(typeof v==='string'){

               if(v.startsWith('$')){
                    const refKey = v.slice(1)
                    const valueOfRefKey = resolveFinalReference(theme, refKey)

                    resolvedTheme[k] = valueOfRefKey
               }

          }
          
          else{
               resolvedTheme = {
                    ...resolvedTheme,
                    [k]: {
                         ...resolvedTheme[k],
                         ...resolveTokensWithReference(theme, k)
                    }
               }
          }
          
     })

     return resolvedTheme
}

export const recurseObjectsIntoSnakeCaseVariables = (primaryKey: string, obj: Record<string, string>)=>{
     return Object.keys(obj).reduce((nestedVariableList: string, k)=>{
          const value = obj[k]
          return nestedVariableList.concat("\n").concat(`\t--${primaryKey}-${k}: ${value};`)
     }, "")
}

