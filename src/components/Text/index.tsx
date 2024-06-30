import { useTokenForTheme } from "../../theming/ThemeProvider"
import { TypographyTokens } from "../../theming/tokens"

type TextProps = {
     typographyToken: TypographyTokens,
     children: string
}

const Text = ({typographyToken, children}: TextProps)=>{

     const theme = useTokenForTheme();

     return <span style={{
          fontSize: theme[typographyToken].fontSize,
          fontWeight: theme[typographyToken].fontWeight,
          fontFamily: theme[typographyToken].fontFamily,
          letterSpacing: theme[typographyToken].letterSpacing,
          lineHeight: theme[typographyToken].lineHeight
     }}>{children}</span>
}

export default Text;