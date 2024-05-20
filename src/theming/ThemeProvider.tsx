import {PropsWithChildren, ReactNode, createContext, useContext, useEffect, useId, useMemo, useState} from 'react';
import { Theme, lightTheme } from './tokens';
import { combineObjValues } from '../utils'

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
     overridenTheme: Partial<Theme>,
     render: (overridenClass: string)=>ReactNode
})=>{
 
     const { theme, setCurrentTheme, allThemes: defaultAllThemes } = useContext(ThemeContext)
     const currentThemeTokens = useTokenForTheme()
     const id = (useId()).replaceAll(':', '');

     return <ThemeContext.Provider value={{
          theme,
          setCurrentTheme,
          allThemes: {
               ...defaultAllThemes,
               [theme]: combineObjValues(currentThemeTokens, overridenTheme)
          }
     }}>

          <style id={id} dangerouslySetInnerHTML={{
               __html: `
                    .overriden-${id} {
                         ${
                              Object
                              .entries(overridenTheme)
                              .map(([k, v])=>{
                                   return `--${k}: ${v};`
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