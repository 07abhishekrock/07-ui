import { LucideProps, icons as AllIcons } from 'lucide-react';
import { useTokenForTheme } from '../../theming/ThemeProvider';
import { Theme } from '../../theming/tokens';

// type CustomIcons = ''

type Icon = keyof typeof AllIcons

export const allIconNames = Object.keys(AllIcons)

export type IconProps = Omit<LucideProps, 'size'> & {
     icon: Icon,
     size: 'small' | 'medium' | 'large'
}

const mapIconSizeToFontVariant: Record<IconProps['size'], keyof Theme> = {
     small: 'bodySmall',
     medium: 'bodyBase',
     large: 'bodyLarge'
}

const IconView = ({ icon, ...iconProps }: IconProps)=>{
     const IconComponentToUse = AllIcons[icon]

     const fontSizeForIconData = useTokenForTheme()[mapIconSizeToFontVariant[iconProps.size]]

     const fontSizeForIcon = typeof fontSizeForIconData === 'string' ? fontSizeForIconData : fontSizeForIconData.fontSize

     return <IconComponentToUse {...iconProps} size={fontSizeForIcon}/>
}

export default IconView;