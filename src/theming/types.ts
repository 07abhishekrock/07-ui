import { Theme } from "./tokens";

export type ThemeOverride = Partial<Theme> | ((currentTheme: Theme)=>Partial<Theme>)