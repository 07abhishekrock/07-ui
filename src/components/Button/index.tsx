import { PropsWithChildren, useRef } from 'react';
import {AriaButtonOptions, useButton} from 'react-aria';

import './button.scss';
import { Theme } from '../../theming/tokens';
import { ThemeOverrideForInstance, useTokenForTheme } from '../../theming/ThemeProvider';
import cn from 'classnames';
import { Loader2Icon } from 'lucide-react'

export type ButtonProps = PropsWithChildren<{
     isAccent: Boolean;
     isLoading: Boolean;
     size: 'small' | 'medium' | 'large',
     isBlock?: Boolean;
} & AriaButtonOptions<"button">>

type ButtonPropsWithClassName = ButtonProps & {
     className?: string;
}

const buttonSmallOverride: Partial<Theme> = {
     btnFontSize: "14px",
     btnVerticalPadding: "12px",
     btnHorizontalPadding: "12px"
}

const buttonLargeOverride: Partial<Theme> = {
     btnFontSize: "20px",
     btnBorderRadius: "8px"
}

const SmallButton = (props: ButtonProps)=>{

     return <ThemeOverrideForInstance overridenTheme={buttonSmallOverride}
          render={
               (overridenClassName)=>{
                    return <AccentWrappedButton {...props} className={overridenClassName}/>
               }
          }>
     </ThemeOverrideForInstance>
}

const LargeButton = (props: ButtonProps)=>{

     return <ThemeOverrideForInstance overridenTheme={buttonLargeOverride}
          render={
               (overridenClassName)=><AccentWrappedButton {...props} className={overridenClassName}/>
          }>
     </ThemeOverrideForInstance>
}

const MediumButton = (props: ButtonProps)=>{
     return <AccentWrappedButton {...props}/>
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
                    (overridenClassName)=><ButtonCore {...props} className={cn(overridenClassName, props.className)} />
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
                    (overridenClassName)=><ButtonCore {...props} className={cn(overridenClassName, props.className)} />
               }
          />
     }


     return <ButtonCore {...props} />
}

const ButtonCore = ({isAccent, isLoading, children, ...props}: ButtonPropsWithClassName)=>{

     const buttonRef = useRef<HTMLButtonElement>()
     const themeToken = useTokenForTheme()
     const { buttonProps } = useButton(props, buttonRef)

     return <button className={cn(
          'aj-button',
          { ['aj-button-block']: props.isBlock },
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
                    className="aj-button-loading-indicator"
               /> : null
          }         
     </button>

}

const Button = (props: ButtonProps)=>{
     switch(props.size) {
          case 'small' : return <SmallButton {...props}/>
          case 'medium': return <MediumButton {...props}/>
          case 'large': return <LargeButton {...props}/>
     }
}

export default Button;