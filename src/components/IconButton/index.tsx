import { AriaButtonOptions, useButton } from "react-aria"
import IconView, { IconProps } from "../IconView"
import { ThemeOverride } from "../../theming/types";
import { ThemeOverrideForInstance, useTokenForTheme } from "../../theming/ThemeProvider";
import { Loader2Icon } from "lucide-react";
import { useRef } from "react";

import cn from 'classnames'

import './iconbutton.scss'

type IconButtonProps = Omit<IconProps, 'size'> & AriaButtonOptions<"button"> & {
     isAccent?: Boolean;
     isLoading?: Boolean;
     size: IconProps['size']
}

type ButtonPropsWithClassName = IconButtonProps & {
     className?: string;
}


const iconButtonCommonOverride: ThemeOverride = (oldTheme)=>({
     btnBorderRadius: '100%',
     btnVerticalPadding: "4px",
     btnHorizontalPadding: "4px",
     iconButtonSize: oldTheme.spacing32
})

const buttonSmallOverride: ThemeOverride = (oldTheme)=>({
     ...iconButtonCommonOverride(oldTheme),
     btnFontSize: oldTheme.bodySmall.fontSize,
     iconButtonSize: oldTheme.spacing24
})

const buttonLargeOverride: ThemeOverride = (oldTheme)=>({
     ...iconButtonCommonOverride(oldTheme),
     btnFontSize: oldTheme.bodyLarge.fontSize,
})


const SmallIconButton = (props: IconButtonProps)=>{

     return <ThemeOverrideForInstance overridenTheme={buttonSmallOverride}
          render={
               (overridenClassName)=>{
                    return <AccentWrappedButton {...props} className={overridenClassName}/>
               }
          }>
     </ThemeOverrideForInstance>
}

const LargeIconButton = (props: IconButtonProps)=>{

     return <ThemeOverrideForInstance overridenTheme={buttonLargeOverride}
          render={
               (overridenClassName)=><AccentWrappedButton {...props} className={overridenClassName}/>
          }>
     </ThemeOverrideForInstance>
}

const MediumIconButton = (props: IconButtonProps)=>{
     return <ThemeOverrideForInstance overridenTheme={iconButtonCommonOverride}
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
                    (overridenClassName)=><IconButtonCore {...props} className={cn(overridenClassName, props.className)} />
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
                    (overridenClassName)=><IconButtonCore {...props} className={cn(overridenClassName, props.className)} />
               }
          />
     }


     return <IconButtonCore {...props} />
}

export const IconButtonCore = ({isAccent, isLoading, ...props}: ButtonPropsWithClassName)=>{

     const buttonRef = useRef<HTMLButtonElement>()
     const themeToken = useTokenForTheme()
     const { buttonProps } = useButton(props, buttonRef)

     return <button className={cn(
          'aj-icon-button',
          props.className
     )} {...buttonProps}>
          <span style={{opacity: isLoading ? 0 : 1}}>
               <IconView {...props}/>
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

const defaultIconProps: IconButtonProps = {
     size: 'medium',
     icon: 'AArrowDown'
}

const IconButton = (props: IconButtonProps = defaultIconProps)=>{
     switch(props.size){
          case 'small': return <SmallIconButton {...props}/>
          case 'medium': return <MediumIconButton {...props}/>
          case 'large': return <LargeIconButton {...props}/>
     }
}

export default IconButton;