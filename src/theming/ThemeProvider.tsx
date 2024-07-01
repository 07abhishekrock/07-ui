import {PropsWithChildren, ReactNode, createContext, useContext, useEffect, useId, useMemo, useState} from 'react';
import { Theme, lightTheme } from './tokens';
import { combineObjValues } from '../utils'
import { ThemeOverride } from './types';
import { recurseObjectsIntoSnakeCaseVariables } from './utils';

type ContextPayload = { 
     theme: string;
     setCurrentTheme: (themeIdentifier: string)=>void;
     allThemes: Record<string, Theme>;
}

const ThemeContext = createContext<ContextPayload>({
     theme: "light",
     allThemes: {
          light: lightTheme
     },
     setCurrentTheme: ()=>{}
});

const ThemeProvider = ({children}: PropsWithChildren<{}>)=>{


     const [theme, setTheme] = useState<string>('light')

     useApplyThemeToHTML(theme)

     return <ThemeContext.Provider value={{
          theme,
          setCurrentTheme: setTheme,
          allThemes: {
               light: lightTheme
          }
     }}>
          {children}
     </ThemeContext.Provider>


}

export const useTokenForTheme = (): Theme=>{
     const {theme, allThemes} = useContext(ThemeContext)

     return useMemo(()=>{
          return allThemes[theme]
     }, [theme])

}

const useApplyThemeToHTML = (theme: string)=>{

     useEffect(()=>{
          if(typeof window !== 'undefined'){
               window.document.documentElement.setAttribute('theme', theme)
          }
     }, [theme])

}

export const ThemeOverrideForInstance = ({ render, overridenTheme }: {
     overridenTheme: ThemeOverride,
     render: (overridenClass: string)=>ReactNode
})=>{
 
     const { theme, setCurrentTheme, allThemes: defaultAllThemes } = useContext(ThemeContext)
     const currentThemeTokens = useTokenForTheme()
     const id = (useId()).replaceAll(':', '');
     const newThemeTokens = useMemo(() => (typeof overridenTheme === 'function') ? overridenTheme(currentThemeTokens) : overridenTheme, [overridenTheme, currentThemeTokens])

     return <ThemeContext.Provider value={{
          theme,
          setCurrentTheme,
          allThemes: {
               ...defaultAllThemes,
               [theme]: combineObjValues(currentThemeTokens, newThemeTokens)
          }
     }}>

          <style id={id} dangerouslySetInnerHTML={{
               __html: `
                    .overriden-${id} {
                         ${
                              Object
                              .entries(newThemeTokens)
                              .map(([k, v])=>{
                                   
                                   if(typeof v === 'string'){
                                        return `--${k}: ${v};`
                                   }
                                   else{
                                        return recurseObjectsIntoSnakeCaseVariables(k, v)
                                   }

                              })
                              .join('')
                         }
                    }   
               `
          }}/>
          {render(`overriden-${id}`)}
     </ThemeContext.Provider>

}

export default ThemeProvider;