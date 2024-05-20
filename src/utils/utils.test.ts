import {test, expect} from 'vitest'
import { combineObjValues } from '.'

test("a big obj1 with small obj2 (merge)", ()=>{
     const obj1 = {
          hello: {
               fit: 3,
               my: {
                    world: 2
               }
          }
     }

     const obj2 = {
          hello: {
               fit: 4
          }
     }

     const finalObj = combineObjValues(obj1, obj2)

     expect(finalObj).toEqual({
          hello: {
               fit: 4,
               my: {
                    world: 2
               }
          }
     })

})


test("a big obj1 with small obj2 (merge) at multiple levels", ()=>{
     const obj1 = {
          hello: {
               fit: 3,
               my: {
                    world: 2
               }
          }
     }

     const obj2 = {
          hello: {
               fit: 4,
               my: {
                    world: 4
               }
          }
     }

     const finalObj = combineObjValues(obj1, obj2)

     expect(finalObj).toEqual({
          hello: {
               fit: 4,
               my: {
                    world: 4
               }
          }
     })

})