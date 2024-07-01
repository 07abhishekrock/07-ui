import { PropsWithChildren, useRef } from "react";
import { useAccordion } from "./useAccordion";
import IconButton from "../IconButton";

import './accordion.scss'
import { ThemeOverride } from "../../theming/types";
import { ThemeOverrideForInstance } from "../../theming/ThemeProvider";

export type AccordionProps = PropsWithChildren<{
     header: AccordionProps['children'],
     isOpenByDefault: boolean
}>

export type CoreAccordionProps = Omit<AccordionProps, 'header'>

const iconButtonOverride: ThemeOverride = {
     btnFocusedOutlineClr: "transparent",
     btnBgClr: "transparent",
     btnHoverStateBgClrDefault: "transparent",
     accordion: {
          contentOutlineClr: "black"
     }
}

export const AccordionCore = (props: AccordionProps & {className: string})=>{

     const {styles, isCollapsed, setIsCollapsed, storeLatestHeight} = useAccordion(props.isOpenByDefault);

     return <div className={`aj-accordion-wrapper ${isCollapsed ? "collapsed" : ""} ${props.className}`}>
          <div className="aj-accordion-header" onClick={()=>{
                         setIsCollapsed(!isCollapsed)
                    }}>
               <div className="aj-accordion-header-inner">
                    {props.header}
               </div>
               <div className={`aj-accordion-header-icon`}>
                    <IconButton icon="ChevronDown" size="small" />
               </div>
          </div>
          <div className="aj-accordion-content-wrapper" style={styles.contentWrapper}>
               <div className="aj-accordion-content" ref={storeLatestHeight}>
                    {props.children}
               </div>
          </div>
     </div>
}

const Accordion = (props: AccordionProps)=>{
     return <ThemeOverrideForInstance overridenTheme={iconButtonOverride} render={(class_)=>{
          return <AccordionCore {...props} className={class_}/>
     }}/>
}

export default Accordion;