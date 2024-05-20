export const combineObjValues = (obj1: any, obj2: any): any=>{
     if(typeof obj1 != 'object'){
          return obj2
     }
     else{
          return Object.entries(obj1)
          .reduce((mergedObj, [k, v])=>{
               if(typeof obj2[k] !== 'undefined'){
                    mergedObj[k] = combineObjValues(obj1[k], obj2[k])
               }
               else{
                    mergedObj[k] = v
               }
               return mergedObj
          }, {})
     }
}