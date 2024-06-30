import {MutableRefObject, useEffect, useRef, useState} from 'react';

export const useAccordion = (
     contentRef: MutableRefObject<HTMLElement>,
     isOpenByDefault = false
)=>{
     const [contentHeight, setContentHeight] = useState(0)
     const [isCollapsed, setIsCollapsed] = useState(!isOpenByDefault)
     const [transition, setTransition] = useState(!isOpenByDefault)
     const firstRender = useRef(true)

     useEffect(()=>{

          if(firstRender.current){
               setTransition(false)
          }
          else{
               setTransition(true)
          }

          if(contentRef && contentRef.current){
               if(isCollapsed){
                    setContentHeight(0)
               }
               else{
                    setContentHeight(contentRef.current.offsetHeight)
               }
          }

          firstRender.current = false

     }, [isCollapsed])

     return {
          isCollapsed,
          setIsCollapsed,
          styles: {
               contentWrapper: {
                    overflow: 'hidden',
                    height: contentHeight,
                    transition: transition ? "0.5s height ease-out" : "none"
               }
          }
     }

}

const Accordion = ()=>{

     const headerRef = useRef(null)
     const contentRef = useRef(null)
     const {
          isCollapsed,
          setIsCollapsed,
          styles
     } = useAccordion(
          contentRef,
          true
     )

     return <>
          <div id="accordion-wrapper">
          <div id="accordion-header" onClick={()=>setIsCollapsed(c=>!c)} ref={headerRef}>Accordion Header</div>
               <div id="accordion-content-wrapper" style={styles.contentWrapper}>
               <div id="accordion-content" ref={contentRef}>
               Accordion content can be very long and can be anything Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis nihil quo vero natus quia maiores dolore perferendis at reprehenderit corporis.
               </div>
               </div>
          </div>
     </>
}