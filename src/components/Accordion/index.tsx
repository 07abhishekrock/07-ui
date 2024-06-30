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
     btnBgClr: "transparent"
}

export const AccordionCore = (props: AccordionProps)=>{

     const contentRef = useRef<HTMLDivElement>();
     const {styles, isCollapsed, setIsCollapsed} = useAccordion(contentRef, props.isOpenByDefault);

     return <ThemeOverrideForInstance overridenTheme={iconButtonOverride} render={(class_)=>{
          return <div className={`aj-accordion-wrapper ${isCollapsed ? "collapsed" : ""} ${class_}`}>
               <div className="aj-accordion-header">
                    <div className="aj-accordion-header-inner">
                         {props.header}
                    </div>
                    <div className={`aj-accordion-header-icon`}>
                         <IconButton icon="ChevronDown" size="small" onClick={()=>{
                              setIsCollapsed(!isCollapsed)
                         }}/>
                    </div>
               </div>
               <div className="aj-accordion-content-wrapper" style={styles.contentWrapper}>
                    <div className="aj-accordion-content" ref={contentRef}>
                         {props.children}
                    </div>
               </div>
          </div>
     }}>
     </ThemeOverrideForInstance>

}

export default AccordionCore;