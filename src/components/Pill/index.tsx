import { AriaButtonOptions, useButton } from "react-aria"
import { ThemeOverride } from "../../theming/types";
import { ThemeOverrideForInstance, useTokenForTheme } from "../../theming/ThemeProvider";
import { Loader2Icon } from "lucide-react";
import { PropsWithChildren, useRef } from "react";

import cn from 'classnames'

import './pill.scss'

type PillProps = PropsWithChildren<AriaButtonOptions<"button"> & {
     isSelected: Boolean;
     isAccent: Boolean;
     size: 'small' | 'medium' | 'large';
     isLoading: Boolean;
}>

type ButtonPropsWithClassName = PillProps & {
     className?: string;
}


const pillButtonCommonOverride: ThemeOverride = (oldTheme)=>({
     btnBorderRadius: oldTheme.spacing8,
     btnVerticalPadding: oldTheme.spacing4,
     btnHorizontalPadding: oldTheme.spacing8,
     iconButtonSize: oldTheme.spacing32
})

const buttonSmallOverride: ThemeOverride = (oldTheme)=>({
     ...pillButtonCommonOverride(oldTheme),
     btnFontSize: oldTheme.bodySmall.fontSize,
})

const buttonLargeOverride: ThemeOverride = (oldTheme)=>({
     ...pillButtonCommonOverride(oldTheme),
     btnFontSize: oldTheme.bodyLarge.fontSize,
})


const SmallPill = (props: PillProps)=>{

     return <ThemeOverrideForInstance overridenTheme={buttonSmallOverride}
          render={
               (overridenClassName)=>{
                    return <AccentWrappedButton {...props} className={overridenClassName}/>
               }
          }>
     </ThemeOverrideForInstance>
}

const LargePill = (props: PillProps)=>{

     return <ThemeOverrideForInstance overridenTheme={buttonLargeOverride}
          render={
               (overridenClassName)=><AccentWrappedButton {...props} className={overridenClassName}/>
          }>
     </ThemeOverrideForInstance>
}

const MediumPill = (props: PillProps)=>{
     return <ThemeOverrideForInstance overridenTheme={pillButtonCommonOverride}
          render={
               (overridenClassName)=><AccentWrappedButton {...props} className={overridenClassName}/>
          }
     >
     </ThemeOverrideForInstance>
}

const AccentWrappedButton = (props: ButtonPropsWithClassName) => {

     const themeToken = useTokenForTheme();

     if(props.isDisabled){
          return <ThemeOverrideForInstance
               overridenTheme={{
                    btnBgClr: themeToken.bgDisabled,
                    btnTextClr: themeToken.contentDisabled,
                    btnHoverStateBgClrDefault: themeToken.bgDisabled
               }}
               render={
                    (overridenClassName)=><PillButtonCore {...props} className={cn(overridenClassName, props.className)} />
               }
          />
     }

     if(props.isAccent && props.isSelected){
          return <ThemeOverrideForInstance
               overridenTheme={{
                    btnBgClr: themeToken.bgAccent,
                    btnTextClr: themeToken.contentAccent,
                    btnHoverStateBgClrDefault: themeToken.bgAccent,
                    btnOutlineClr: themeToken.contentAccent,
                    btnFocusedOutlineClr: themeToken.contentAccent
               }}
               render={
                    (overridenClassName)=><PillButtonCore {...props} className={cn(overridenClassName, props.className)} />
               }
          />
     }

     if(props.isAccent){
          return <ThemeOverrideForInstance
               overridenTheme={{
                    btnBgClr: themeToken.bgAccent,
                    btnTextClr: themeToken.contentAccent,
                    btnHoverStateBgClrDefault: themeToken.bgAccentSubtle,
                    btnFocusedOutlineClr: themeToken.contentAccent
               }}
               render={
                    (overridenClassName)=><PillButtonCore {...props} className={cn(overridenClassName, props.className)} />
               }
          />
     }


     return <PillButtonCore {...props} />
}

const PillButtonCore = ({isAccent, isLoading, children, ...props}: ButtonPropsWithClassName)=>{

     const buttonRef = useRef<HTMLButtonElement>()
     const themeToken = useTokenForTheme()
     const { buttonProps } = useButton(props, buttonRef)

     return <button className={cn(
          'aj-pill-button',
          props.className
     )} {...buttonProps}>
          <span style={{opacity: isLoading ? 0 : 1}}>
               {children}
          </span>
          {
          isLoading ? 
               <Loader2Icon
                    fontSize={themeToken.btnFontSize} 
                    color={themeToken.btnTextClr} 
                    className="aj-icon-button-loading-indicator"
               /> : null
          }         
     </button>

}

const Pill = (props: PillProps)=>{
     switch(props.size){
          case 'small': return <SmallPill {...props}/>
          case 'medium': return <MediumPill {...props}/>
          case 'large': return <LargePill {...props}/>
     }
}

export default Pill;