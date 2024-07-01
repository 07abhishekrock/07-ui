import { Theme } from "./tokens";

type DeepPartial<T> = {
     [P in keyof T]?: DeepPartial<T[P]>
} 

export type ThemeOverride = DeepPartial<Theme> | ((currentTheme: Theme)=>DeepPartial<Theme>)