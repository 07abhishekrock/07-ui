import { AriaButtonOptions, useButton } from "react-aria"
import { ThemeOverride } from "../../theming/types";
import { ThemeOverrideForInstance, useTokenForTheme } from "../../theming/ThemeProvider";
import { Loader2Icon } from "lucide-react";
import { PropsWithChildren, useRef } from "react";

import cn from 'classnames'

import './pill.scss'
import { ButtonCore } from "../Button";
import { IconProps } from "../IconView";

type PillProps = AriaButtonOptions<"button"> & {
     isSelected: Boolean;
     isAccent: Boolean;
     size: 'small' | 'medium' | 'large';
     isLoading: Boolean;
     children: string;
     leftIconName?: IconProps['icon'],
     rightIconName?: IconProps['icon'],
}

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
                    (overridenClassName)=><ButtonCore {...props} className={cn(overridenClassName, props.className)} />
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

const Pill = (props: PillProps)=>{
     switch(props.size){
          case 'small': return <SmallPill {...props}/>
          case 'medium': return <MediumPill {...props}/>
          case 'large': return <LargePill {...props}/>
     }
}

export default Pill;