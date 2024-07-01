import {MutableRefObject, useEffect, useRef, useState} from 'react';

export const useAccordion = (
     isOpenByDefault = false
)=>{
     const [contentHeight, setContentHeight] = useState(0)
     const [isCollapsed, setIsCollapsed] = useState(!isOpenByDefault)
     const [transition, setTransition] = useState(!isOpenByDefault)
     const firstRender = useRef(true)
     const maxHeight = useRef(null)

     useEffect(()=>{

          if(maxHeight){
               if(isCollapsed){
                    setContentHeight(0)
               }
               else{
                    setContentHeight(maxHeight.current)
               }
          }

          if(firstRender.current){
               firstRender.current = false;
               setTransition(true)
          }


     }, [isCollapsed])

     return {
          isCollapsed,
          setIsCollapsed,
          storeLatestHeight: (element: HTMLElement)=>{
               if(element){
                    if(maxHeight.current !== element.offsetHeight){
                         maxHeight.current = element.offsetHeight
                         if(!isCollapsed){
                              setContentHeight(maxHeight.current)
                         }
                    }
               }
          },
          styles: {
               contentWrapper: {
                    overflow: 'hidden',
                    height: contentHeight,
                    transition: transition ? "0.5s height ease-out" : "none"
               }
          }
     }

}

